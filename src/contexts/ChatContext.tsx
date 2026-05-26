"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ChatContextType {
    isOpen: boolean;
    openChat: () => void;
    closeChat: () => void;
    toggleChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    // Open chat automatically on mount (for larger screens)
    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (window.innerWidth > 768) {
                setIsOpen(true);
            }
        }, 1500); // 1.5s delay so it doesn't pop instantly
        return () => clearTimeout(timer);
    }, []);

    const openChat = () => setIsOpen(true);
    const closeChat = () => setIsOpen(false);
    const toggleChat = () => setIsOpen((prev) => !prev);

    return (
        <ChatContext.Provider value={{ isOpen, openChat, closeChat, toggleChat }}>
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    const context = useContext(ChatContext);
    if (context === undefined) {
        throw new Error("useChat must be used within a ChatProvider");
    }
    return context;
}
