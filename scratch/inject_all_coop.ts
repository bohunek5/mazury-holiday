// @ts-nocheck
import { Project, SyntaxKind, ObjectLiteralExpression } from "ts-morph";

const data = {
  en: {
    cooperationPage: {
        title: "Cooperation",
        subtitle: "Your property in the best hands in Masuria",
        services: { title: "Professional Property Management", desc: "Looking for a trusted partner to take care of your property? Mazury.Holiday is a team of experts that will take all the responsibilities associated with short-term rental off your shoulders. We increase owners' profits while maintaining the highest standard of guest service." },
        marketing: { title: "Premium Marketing", desc: "Your property will be placed in top positions on portals such as Booking.com, Airbnb and our proprietary platform Mazury.Holiday. We perform photo sessions and drone videos." },
        guests: { title: "Maintenance-Free Rental", desc: "We take care of the entire cycle: from booking and payments, through professional greeting of guests, to support during their stay 24/7." },
        maintenance: { title: "5-Star Standard", desc: "Our cleaning and technical team takes care of every detail. Your property is always sparkling and in perfect technical condition before the arrival of each guest." },
        whyUs: { title: "Why work with us?", point1: "Local experience and knowledge of the Masurian market", point2: "Transparent billing system and owner panel", point3: "Constant technical and maintenance care", point4: "Price optimization (Revenue Management)" }
    },
    coopExtra: {
        heroTitle: "B2B Cooperation",
        heroSubtitle: "YOUR PROPERTY IN THE BEST HANDS IN MASURIA",
        securityTitle: "Security",
        securityDesc: "Guest verification and damage insurance guarantee the safety of your investment.",
        readyTitle: "Ready for higher profits?",
        readyDesc: "Contact us and see how much your apartment or house in Masuria can earn.",
        letsTalk: "Let's talk"
    },
    coopModels: {
        title: "Cooperation models",
        full_title: "Comprehensive Management",
        full_desc: "Includes marketing, guest service, cleaning, minor repairs and price management. Perfect for investors who value their time.",
        marketing_title: "Marketing and Reservations Only",
        marketing_desc: "We take care of acquiring guests and handling online reservations, and you take care of greeting guests and cleaning."
    },
    coopSteps: {
        title: "How does the cooperation look like?",
        step1_title: "Audit and valuation",
        step1_desc: "We visit your property, check its potential and propose an optimal pricing strategy.",
        step2_title: "Offer preparation",
        step2_desc: "We create a professional description, organize a photo session and implement the property on booking platforms.",
        step3_title: "Start of sales",
        step3_desc: "We launch marketing campaigns and open the calendar for the first reservations.",
        step4_title: "Management and profits",
        step4_desc: "We take over full guest service and cleaning, and you receive a transparent report and profits every month."
    }
  },
  de: {
    cooperationPage: {
        title: "Zusammenarbeit",
        subtitle: "Ihre Immobilie in den besten Händen in Masuren",
        services: { title: "Professionelle Hausverwaltung", desc: "Suchen Sie einen vertrauenswürdigen Partner, der sich um Ihre Immobilie kümmert? Mazury.Holiday ist ein Expertenteam, das Ihnen alle Pflichten im Zusammenhang mit der Kurzzeitmiete abnimmt. Wir steigern die Gewinne der Eigentümer und behalten gleichzeitig den höchsten Standard im Gästeservice bei." },
        marketing: { title: "Premium-Marketing", desc: "Ihre Immobilie wird auf Spitzenplätzen in Portalen wie Booking.com, Airbnb und unserer eigenen Plattform Mazury.Holiday platziert. Wir führen Fotosessions und Drohnenvideos durch." },
        guests: { title: "Wartungsfreie Vermietung", desc: "Wir kümmern uns um den gesamten Zyklus: von der Buchung und Zahlung über die professionelle Begrüßung der Gäste bis hin zur Betreuung während ihres Aufenthalts 24/7." },
        maintenance: { title: "5-Sterne-Standard", desc: "Unser Reinigungs- und Technikteam kümmert sich um jedes Detail. Ihre Immobilie ist vor der Ankunft jedes Gastes immer blitzsauber und in perfektem technischen Zustand." },
        whyUs: { title: "Warum mit uns zusammenarbeiten?", point1: "Lokale Erfahrung und Kenntnis des masurischen Marktes", point2: "Transparentes Abrechnungssystem und Eigentümer-Panel", point3: "Ständige technische und wartungstechnische Betreuung", point4: "Preisoptimierung (Revenue Management)" }
    },
    coopExtra: {
        heroTitle: "B2B-Zusammenarbeit",
        heroSubtitle: "IHRE IMMOBILIE IN DEN BESTEN HÄNDEN IN MASUREN",
        securityTitle: "Sicherheit",
        securityDesc: "Gästeüberprüfung und Schadensversicherung garantieren die Sicherheit Ihrer Investition.",
        readyTitle: "Bereit für höhere Gewinne?",
        readyDesc: "Kontaktieren Sie uns und sehen Sie, wie viel Ihre Wohnung oder Ihr Haus in Masuren verdienen kann.",
        letsTalk: "Lass uns reden"
    },
    coopModels: {
        title: "Kooperationsmodelle",
        full_title: "Umfassendes Management",
        full_desc: "Umfasst Marketing, Gästeservice, Reinigung, kleinere Reparaturen und Preismanagement. Perfekt für Investoren, die ihre Zeit schätzen.",
        marketing_title: "Nur Marketing und Reservierungen",
        marketing_desc: "Wir kümmern uns um die Akquise von Gästen und die Abwicklung von Online-Reservierungen, und Sie kümmern sich um die Begrüßung der Gäste und die Reinigung."
    },
    coopSteps: {
        title: "Wie sieht die Zusammenarbeit aus?",
        step1_title: "Audit und Bewertung",
        step1_desc: "Wir besuchen Ihre Immobilie, prüfen ihr Potenzial und schlagen eine optimale Preisstrategie vor.",
        step2_title: "Angebotserstellung",
        step2_desc: "Wir erstellen eine professionelle Beschreibung, organisieren eine Fotosession und implementieren die Immobilie auf Buchungsplattformen.",
        step3_title: "Verkaufsstart",
        step3_desc: "Wir starten Marketingkampagnen und öffnen den Kalender für die ersten Reservierungen.",
        step4_title: "Management und Gewinne",
        step4_desc: "Wir übernehmen den kompletten Gästeservice und die Reinigung, und Sie erhalten jeden Monat einen transparenten Bericht und Gewinne."
    }
  },
  lt: {
    cooperationPage: {
        title: "Bendradarbiavimas",
        subtitle: "Jūsų turtas geriausiose rankose Mozūrijoje",
        services: { title: "Profesionalus turto valdymas", desc: "Ieškote patikimo partnerio, kuris pasirūpintų jūsų turtu? Mazury.Holiday yra ekspertų komanda, kuri nuims nuo jūsų pečių visas su trumpalaike nuoma susijusias pareigas. Didiname savininkų pelną išlaikydami aukščiausią svečių aptarnavimo standartą." },
        marketing: { title: "Premium rinkodara", desc: "Jūsų turtas užims aukščiausias vietas tokiuose portaluose kaip Booking.com, Airbnb ir mūsų platformoje Mazury.Holiday. Atliekame fotosesijas ir vaizdo įrašus dronu." },
        guests: { title: "Nuoma be rūpesčių", desc: "Rūpinamės visu ciklu: nuo užsakymo ir mokėjimų, per profesionalų svečių pasitikimą, iki palaikymo viešnagės metu 24/7." },
        maintenance: { title: "5 žvaigždučių standartas", desc: "Mūsų valymo ir techninė komanda rūpinasi kiekviena detale. Prieš atvykstant kiekvienam svečiui jūsų turtas visada spindi ir yra idealios techninės būklės." },
        whyUs: { title: "Kodėl verta dirbti su mumis?", point1: "Vietinė patirtis ir Mozūrijos rinkos išmanymas", point2: "Skaidri atsiskaitymo sistema ir savininko skydelis", point3: "Nuolatinė techninė ir priežiūros globa", point4: "Kainų optimizavimas (Pajamų valdymas)" }
    },
    coopExtra: {
        heroTitle: "B2B bendradarbiavimas",
        heroSubtitle: "JŪSŲ TURTAS GERIAUSIOSE RANKOSE MOZŪRIJOJE",
        securityTitle: "Saugumas",
        securityDesc: "Svečių patikrinimas ir draudimas nuo žalos garantuoja jūsų investicijos saugumą.",
        readyTitle: "Pasiruošę didesniam pelnui?",
        readyDesc: "Susisiekite su mumis ir sužinokite, kiek gali uždirbti jūsų apartamentai ar namas Mozūrijoje.",
        letsTalk: "Pasikalbėkime"
    },
    coopModels: {
        title: "Bendradarbiavimo modeliai",
        full_title: "Visapusiškas valdymas",
        full_desc: "Apima rinkodarą, svečių aptarnavimą, valymą, smulkius remontus ir kainų valdymą. Puikiai tinka investuotojams, vertinantiems savo laiką.",
        marketing_title: "Tik rinkodara ir rezervacijos",
        marketing_desc: "Mes rūpinamės svečių pritraukimu ir internetinių rezervacijų tvarkymu, o jūs rūpinatės svečių priėmimu ir valymu."
    },
    coopSteps: {
        title: "Kaip atrodo bendradarbiavimas?",
        step1_title: "Auditas ir vertinimas",
        step1_desc: "Aplankome jūsų turtą, patikriname jo potencialą ir pasiūlome optimalią kainodaros strategiją.",
        step2_title: "Pasiūlymo paruošimas",
        step2_desc: "Sukuriame profesionalų aprašymą, organizuojame fotosesiją ir patalpiname turtą rezervavimo platformose.",
        step3_title: "Pardavimų pradžia",
        step3_desc: "Pradedame rinkodaros kampanijas ir atidarome kalendorių pirmosioms rezervacijoms.",
        step4_title: "Valdymas ir pelnas",
        step4_desc: "Perimame visą svečių aptarnavimą ir valymą, o jūs kiekvieną mėnesį gaunate skaidrią ataskaitą ir pelną."
    }
  },
  cs: {
    cooperationPage: {
        title: "Spolupráce",
        subtitle: "Vaše nemovitost v nejlepších rukou na Mazurách",
        services: { title: "Profesionální správa nemovitostí", desc: "Hledáte spolehlivého partnera, který se postará o vaši nemovitost? Mazury.Holiday je tým odborníků, který z vašich ramen sejme všechny povinnosti spojené s krátkodobým pronájmem. Zvyšujeme zisky majitelů při zachování nejvyššího standardu služeb hostům." },
        marketing: { title: "Prémiový marketing", desc: "Vaše nemovitost se umístí na předních pozicích na portálech jako Booking.com, Airbnb a na naší platformě Mazury.Holiday. Provádíme focení a videa z dronu." },
        guests: { title: "Pronájem bez údržby", desc: "Staráme se o celý cyklus: od rezervace a plateb, přes profesionální přivítání hostů až po podporu během jejich pobytu 24/7." },
        maintenance: { title: "5hvězdičkový standard", desc: "Náš úklidový a technický tým se stará o každý detail. Vaše nemovitost je před příjezdem každého hosta vždy zářivě čistá a v perfektním technickém stavu." },
        whyUs: { title: "Proč s námi spolupracovat?", point1: "Místní zkušenosti a znalost mazurského trhu", point2: "Transparentní zúčtovací systém a panel majitele", point3: "Neustálá technická a údržbová péče", point4: "Optimalizace cen (Revenue Management)" }
    },
    coopExtra: {
        heroTitle: "B2B spolupráce",
        heroSubtitle: "VAŠE NEMOVITOST V NEJLEPŠÍCH RUKOU NA MAZURÁCH",
        securityTitle: "Bezpečnost",
        securityDesc: "Ověření hostů a pojištění proti škodám zaručují bezpečnost vaší investice.",
        readyTitle: "Připraveni na vyšší zisky?",
        readyDesc: "Kontaktujte nás a zjistěte, kolik může váš apartmán nebo dům na Mazurách vydělat.",
        letsTalk: "Pojďme si promluvit"
    },
    coopModels: {
        title: "Modely spolupráce",
        full_title: "Komplexní správa",
        full_desc: "Zahrnuje marketing, služby pro hosty, úklid, drobné opravy a správu cen. Ideální pro investory, kteří si cení svého času.",
        marketing_title: "Pouze marketing a rezervace",
        marketing_desc: "My se staráme o získávání hostů a vyřizování online rezervací a vy se staráte o přivítání hostů a úklid."
    },
    coopSteps: {
        title: "Jak vypadá spolupráce?",
        step1_title: "Audit a ocenění",
        step1_desc: "Navštívíme vaši nemovitost, zkontrolujeme její potenciál a navrhneme optimální cenovou strategii.",
        step2_title: "Příprava nabídky",
        step2_desc: "Vytvoříme profesionální popis, zorganizujeme focení a implementujeme nemovitost na rezervační platformy.",
        step3_title: "Zahájení prodeje",
        step3_desc: "Spustíme marketingové kampaně a otevřeme kalendář pro první rezervace.",
        step4_title: "Správa a zisky",
        step4_desc: "Převezmeme kompletní služby hostům a úklid a vy každý měsíc obdržíte transparentní zprávu a zisky."
    }
  },
  es: {
    cooperationPage: {
        title: "Cooperación",
        subtitle: "Su propiedad en las mejores manos en Masuria",
        services: { title: "Gestión Profesional de Propiedades", desc: "¿Busca un socio de confianza para cuidar de su propiedad? Mazury.Holiday es un equipo de expertos que le quitará de encima todas las responsabilidades asociadas al alquiler a corto plazo. Aumentamos los beneficios de los propietarios manteniendo el más alto estándar de servicio al huésped." },
        marketing: { title: "Marketing Premium", desc: "Su propiedad se ubicará en los primeros puestos de portales como Booking.com, Airbnb y nuestra plataforma Mazury.Holiday. Realizamos sesiones de fotos y videos con drones." },
        guests: { title: "Alquiler sin mantenimiento", desc: "Nos encargamos de todo el ciclo: desde la reserva y los pagos, pasando por la recepción profesional de los huéspedes, hasta el apoyo durante su estancia 24/7." },
        maintenance: { title: "Estándar de 5 estrellas", desc: "Nuestro equipo de limpieza y técnico cuida cada detalle. Su propiedad siempre está impecable y en perfecto estado técnico antes de la llegada de cada huésped." },
        whyUs: { title: "¿Por qué trabajar con nosotros?", point1: "Experiencia local y conocimiento del mercado de Masuria", point2: "Sistema de facturación transparente y panel de propietarios", point3: "Cuidado técnico y de mantenimiento constante", point4: "Optimización de precios (Revenue Management)" }
    },
    coopExtra: {
        heroTitle: "Cooperación B2B",
        heroSubtitle: "SU PROPIEDAD EN LAS MEJORES MANOS EN MASURIA",
        securityTitle: "Seguridad",
        securityDesc: "La verificación de los huéspedes y el seguro de daños garantizan la seguridad de su inversión.",
        readyTitle: "¿Listo para mayores beneficios?",
        readyDesc: "Póngase en contacto con nosotros y vea cuánto puede ganar su apartamento o casa en Masuria.",
        letsTalk: "Hablemos"
    },
    coopModels: {
        title: "Modelos de cooperación",
        full_title: "Gestión integral",
        full_desc: "Incluye marketing, atención al cliente, limpieza, reparaciones menores y gestión de precios. Perfecto para inversores que valoran su tiempo.",
        marketing_title: "Solo marketing y reservas",
        marketing_desc: "Nosotros nos encargamos de adquirir huéspedes y gestionar reservas en línea, y usted se encarga de recibir a los huéspedes y limpiar."
    },
    coopSteps: {
        title: "¿Cómo es la cooperación?",
        step1_title: "Auditoría y valoración",
        step1_desc: "Visitamos su propiedad, comprobamos su potencial y proponemos una estrategia de precios óptima.",
        step2_title: "Preparación de la oferta",
        step2_desc: "Creamos una descripción profesional, organizamos una sesión de fotos e implementamos la propiedad en las plataformas de reserva.",
        step3_title: "Inicio de ventas",
        step3_desc: "Lanzamos campañas de marketing y abrimos el calendario para las primeras reservas.",
        step4_title: "Gestión y beneficios",
        step4_desc: "Asumimos el servicio completo de huéspedes y limpieza, y usted recibe un informe transparente y beneficios cada mes."
    }
  },
  it: {
    cooperationPage: {
        title: "Cooperazione",
        subtitle: "La tua proprietà nelle migliori mani in Masuria",
        services: { title: "Gestione Professionale delle Proprietà", desc: "Cerchi un partner di fiducia per prendersi cura della tua proprietà? Mazury.Holiday è un team di esperti che ti toglierà tutte le responsabilità associate all'affitto a breve termine. Aumentiamo i profitti dei proprietari mantenendo il più alto standard di servizio agli ospiti." },
        marketing: { title: "Marketing Premium", desc: "La tua proprietà sarà posizionata ai primi posti su portali come Booking.com, Airbnb e la nostra piattaforma Mazury.Holiday. Realizziamo sessioni fotografiche e video con droni." },
        guests: { title: "Affitto Senza Pensieri", desc: "Ci occupiamo dell'intero ciclo: dalla prenotazione e pagamenti, all'accoglienza professionale degli ospiti, fino al supporto durante il loro soggiorno 24/7." },
        maintenance: { title: "Standard 5 Stelle", desc: "Il nostro team di pulizia e tecnico cura ogni dettaglio. La tua proprietà è sempre scintillante e in perfette condizioni tecniche prima dell'arrivo di ogni ospite." },
        whyUs: { title: "Perché lavorare con noi?", point1: "Esperienza locale e conoscenza del mercato masuriano", point2: "Sistema di fatturazione trasparente e pannello proprietari", point3: "Costante assistenza tecnica e di manutenzione", point4: "Ottimizzazione dei prezzi (Revenue Management)" }
    },
    coopExtra: {
        heroTitle: "Cooperazione B2B",
        heroSubtitle: "LA TUA PROPRIETÀ NELLE MIGLIORI MANI IN MASURIA",
        securityTitle: "Sicurezza",
        securityDesc: "La verifica degli ospiti e l'assicurazione contro i danni garantiscono la sicurezza del tuo investimento.",
        readyTitle: "Pronto per maggiori profitti?",
        readyDesc: "Contattaci e scopri quanto può guadagnare il tuo appartamento o la tua casa in Masuria.",
        letsTalk: "Parliamone"
    },
    coopModels: {
        title: "Modelli di cooperazione",
        full_title: "Gestione Completa",
        full_desc: "Include marketing, servizio ospiti, pulizia, piccole riparazioni e gestione dei prezzi. Perfetto per gli investitori che danno valore al proprio tempo.",
        marketing_title: "Solo Marketing e Prenotazioni",
        marketing_desc: "Ci occupiamo di acquisire ospiti e gestire prenotazioni online, e tu ti occupi di accogliere gli ospiti e pulire."
    },
    coopSteps: {
        title: "Come si svolge la cooperazione?",
        step1_title: "Audit e valutazione",
        step1_desc: "Visitiamo la tua proprietà, verifichiamo il suo potenziale e proponiamo una strategia di prezzo ottimale.",
        step2_title: "Preparazione dell'offerta",
        step2_desc: "Creiamo una descrizione professionale, organizziamo una sessione fotografica e implementiamo la proprietà sulle piattaforme di prenotazione.",
        step3_title: "Inizio delle vendite",
        step3_desc: "Lanciamo campagne di marketing e apriamo il calendario per le prime prenotazioni.",
        step4_title: "Gestione e profitti",
        step4_desc: "Ci occupiamo del servizio ospiti completo e della pulizia, e tu ricevi un rapporto trasparente e profitti ogni mese."
    }
  }
};

const project = new Project();
const sourceFile = project.addSourceFileAtPath("/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts");

const translationsDecl = sourceFile.getVariableDeclaration("translations");
if (!translationsDecl) throw new Error("Could not find translations declaration");

const translationsObj = translationsDecl.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const keysToInject = ["cooperationPage", "coopExtra", "coopModels", "coopSteps"];

for (const [lang, langData] of Object.entries(data)) {
    const langProp = translationsObj.getProperty(lang);
    if (!langProp || !langProp.isKind(SyntaxKind.PropertyAssignment)) continue;

    const langObj = langProp.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

    for (const key of keysToInject) {
        const existingProp = langObj.getProperty(key);
        if (existingProp) {
            existingProp.remove();
        }
        
        // Add new property
        const value = langData[key];
        langObj.addPropertyAssignment({
            name: key,
            initializer: JSON.stringify(value, null, 4)
        });
        console.log(`Injected ${key} into ${lang}`);
    }
}

sourceFile.saveSync();
console.log("Successfully saved translations.ts with cooperation pages.");
