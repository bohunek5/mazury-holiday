import { useCallback } from 'react';

export interface CalendarEvent {
    start: Date;
    end: Date;
    summary?: string;
    status?: string;
    uid?: string;
}

export function useICalAvailability() {
    const parseDate = useCallback((v: string): Date => {
        const y = parseInt(v.substring(0, 4));
        const m = parseInt(v.substring(4, 6)) - 1;
        const d = parseInt(v.substring(6, 8));
        if (v.includes('T')) {
            const h = parseInt(v.substring(9, 11));
            const min = parseInt(v.substring(11, 13));
            const s = parseInt(v.substring(13, 15));
            return new Date(Date.UTC(y, m, d, h, min, s));
        }
        return new Date(y, m, d);
    }, []);

    const parseICal = useCallback((text: string): CalendarEvent[] => {
        const events: CalendarEvent[] = [];
        try {
            const lines = text.split(/\r?\n/);
            let currentEvent: Partial<CalendarEvent> = {};

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();
                if (line === 'BEGIN:VEVENT') {
                    currentEvent = {};
                } else if (line.startsWith('DTSTART')) {
                    const parts = line.split(':');
                    const val = parts[parts.length - 1];
                    if (val) currentEvent.start = parseDate(val);
                } else if (line.startsWith('DTEND')) {
                    const parts = line.split(':');
                    const val = parts[parts.length - 1];
                    if (val) currentEvent.end = parseDate(val);
                } else if (line.startsWith('SUMMARY')) {
                    currentEvent.summary = line.split(':')[1];
                } else if (line.startsWith('STATUS')) {
                    currentEvent.status = line.split(':')[1];
                } else if (line.startsWith('UID')) {
                    currentEvent.uid = line.split(':')[1];
                } else if (line === 'END:VEVENT') {
                    if (currentEvent.start && currentEvent.end) {
                        const isPseudoEvent = currentEvent.uid && (
                            currentEvent.uid.startsWith('noseason') ||
                            currentEvent.uid.startsWith('afterBookingWindow') ||
                            currentEvent.uid.startsWith('beforeBookingWindow') ||
                            currentEvent.uid.startsWith('unavailable')
                        );

                        if (currentEvent.status !== 'CANCELLED' && !isPseudoEvent) {
                            events.push(currentEvent as CalendarEvent);
                        }
                    }
                }
            }
        } catch (e) {
            console.error('Error parsing iCal:', e);
        }
        return events;
    }, [parseDate]);

    const checkAvailability = useCallback(async (icalUrl: string, startDate: Date, endDate: Date): Promise<boolean> => {
        if (!icalUrl) return false;

        const checkEvents = (text: string) => {
            if (!text || !text.includes('BEGIN:VCALENDAR')) return false;
            const events = parseICal(text);
            
            const checkStart = new Date(startDate);
            checkStart.setHours(0, 0, 0, 0);
            const checkEnd = new Date(endDate);
            checkEnd.setHours(0, 0, 0, 0);

            for (const event of events) {
                const evStart = new Date(event.start);
                evStart.setHours(0,0,0,0);
                const evEnd = new Date(event.end);
                evEnd.setHours(0,0,0,0);

                if (checkStart.getTime() < evEnd.getTime() && checkEnd.getTime() > evStart.getTime()) {
                    return false; 
                }
            }
            return true;
        };
        const proxyUrls = [
            `https://api.allorigins.win/raw?url=${encodeURIComponent(icalUrl)}`,
            `https://corsproxy.io/?${encodeURIComponent(icalUrl)}`
        ];

        for (const proxyUrl of proxyUrls) {
            try {
                const response = await fetch(proxyUrl, { cache: 'no-store' });
                if (response.ok) {
                    const text = await response.text();
                    if (text && text.includes('BEGIN:VCALENDAR')) {
                        return checkEvents(text);
                    }
                }
            } catch (err) {
                // Try next proxy
            }
        }
        return false;
    }, [parseICal]);

    return { checkAvailability };
}
