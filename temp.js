"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translations = void 0;
var translationsLegal_1 = require("./translationsLegal");
exports.translations = {
    pl: __assign(__assign({}, translationsLegal_1.translationsLegal.pl), { amenityNames: { "Klimatyzacja": "Klimatyzacja", "WiFi": "WiFi", "Smart TV": "Smart TV", "Prysznic": "Prysznic", "Ręczniki": "Ręczniki", "Zmywarka": "Zmywarka", "Płyta indukcyjna": "Płyta indukcyjna", "Pościel": "Pościel", "Łóżka małżeńskie i pojedyncze": "Łóżka małżeńskie i pojedyncze", "Prywatny taras z grillem": "Prywatny taras z grillem", "Miejsce na ognisko": "Miejsce na ognisko", "Dostęp do jeziora": "Dostęp do jeziora", "Miejsce parkingowe": "Miejsce parkingowe", "W pełni wyposażony aneks kuchenny": "W pełni wyposażony aneks kuchenny", "Aneks kuchenny (płyta, lodówka, zmywarka)": "Aneks kuchenny (płyta, lodówka, zmywarka)", "Ekspres do kawy": "Ekspres do kawy", "Taras z meblami wypoczynkowymi": "Taras z meblami wypoczynkowymi", "Prywatne Jacuzzi": "Prywatne Jacuzzi", "Balkon z meblami wypoczynkowymi": "Balkon z meblami wypoczynkowymi" }, nav: { about: "O nas", apartments: "Apartamenty", cottages: "Domki", charter: "Czarter", concerts: "Koncerty", port: "Port", attractions: "Atrakcje", cooperation: "Współpraca", contact: "Kontakt", rooms: "Pokoje", bookBtn: "Rezerwuj", language: "Język", back: "Powrót", euProjects: "Projekty UE" }, hero: { title: "Wakacje na Mazurach", subtitle: "SPRAWDŹ JAK MOŻESZ SPĘDZIĆ WYJĄTKOWE I NIEZAPOMNIANE CHWILE", typewriterDesc: "Sprawdź naszą ofertę", apartmentsBtn: "Nasze Apartamenty", charterBtn: "730 067 027", bookOnlineBtn: "Rezerwuj Online", scrollDown: "Przewiń w dół" }, intro: { tag: "Mazury.Holiday", title: "Witaj w krainie", titleHighlight: "Wielkich Jezior", p1: "Zapraszamy do odkrycia magii Mazur w naszych luksusowych apartamentach, klimatycznych domkach oraz na pokładzie jachtu.", p2: "Ciesz się spokojem w Giżycku, dziką naturą we Fuledzie lub relaksem w Skorupkach. Twój wymarzony wypoczynek zaczyna się tutaj." }, luxuryBenefits: {
            tag: "Zalety naszej oferty",
            title: "Luksus tkwi w szczegółach",
            quality: { title: "Wysoka jakość wykończenia", desc: "W każdym naszym apartamencie zadbaliśmy o wykończenie. Mamy nadzieję, że dostrzeżesz wszystkie ukryte i widoczne szczegóły" },
            views: { title: "Widoki na jezioro", desc: "W piękne słoneczne dni, od wschodu do zachodu słońca - filmy na VOD mogą zastąpić Ci piękne widoki na jezioro Kisajno lub Dobskie" },
            comfort: { title: "Sen w komfortowych warunkach", desc: "Sen jest niezbędny do wypoczynku i wpływa na jakość Państwa pobytu u nas. Wszystkie łóżka są wyposażone w bardzo dobre i wygodne materace" },
            wifi: { title: "Bezpłatne Wi-Fi", desc: "Na terenie naszych apartamentów przygotowaliśmy połączenie Wi-Fi. Nie jest one niezbędne podczas wypoczynku, ale pomaga np. w zdalnej pracy" },
            gifts: { title: "Zestaw startowy", desc: "Dla każdego z naszych gości przygotowaliśmy niewielki upominek, który jest elementem naszej oferty wypoczynkowej w apartamentach" },
            flexible: { title: "Elastyczna rezerwacja", desc: "Rozumiemy, że plany mogą ulec zmianie. Dlatego w przypadku nagłych i nieprzewidzianych sytuacji umożliwiamy zmianę daty rezerwacji." }
        }, apartments: {
            title: "Nasze Apartamenty",
            description: "Wybierz idealne miejsce na swój wypoczynek.",
            details: "Szczegóły",
            pricePrefix: "od",
            night: "noc",
            people: "max ilość osób",
            bookBtn: "ZAREZERWUJ GO",
            bookingTitle: "Zarezerwuj pobyt",
            bookingDesc: "Wybierz daty i sprawdź dostępność.",
            items: {
                stranda: { title: "Apartamenty Stranda Residence", location: "Giżycko, jezioro Kisajno", description: "Apartamenty znajdują się przy porcie Stranda na terenie kompleksu apartamentowców Stranda Residence..." },
                kisajno: { title: "Apartamenty Kisajno", location: "Giżycko, jezioro Kisajno", description: "Luksus nad brzegiem jeziora Kisajno." },
                fuleda: { title: "Apartamenty Fuleda", location: "Fuleda, jezioro Dobskie", description: "Oaza spokoju z dala od zgiełku miasta." },
                domkiSkorupki: { title: "Domki Skorupki", location: "Skorupki, jezioro Tałty", description: "Luksusowe domki w sercu mazurskiej natury." },
                pokojeFuleda: { title: "Pokoje Fuleda", location: "Fuleda, Jezioro Dobskie", description: "Przytulne pokoje z widokiem na jezioro w strefie ciszy." },
                mikolajki: { title: "Apartament Mikołajki", location: "Mikołajki, jezioro Mikołajskie", description: "Nowoczesny apartament w samym centrum Mikołajek." }
            },
            seeCottage: "Zobacz domki",
            seeRooms: "Zobacz pokoje"
        }, cottagesAndRooms: {
            title: "Nasze domki i pokoje",
            description: "Poczuj bliskość natury w komfortowych warunkach."
        }, charter: { tag: "Bez patentu", title: "Czarter Jachtu Motorowego", description: "Jacht motorowy Stillo 30 to jednostka, którą możesz prowadzić bez patentu.", model: "Stillo 30 (2020)", cabins: "3 Zamykane Kabiny", checkBtn: "Sprawdź dostępność", premiumFleet: "Flota Premium", feature1: "Bez patentu", feature2: "Rocznik 2020", feature3: "Luksusowe wyposażenie", detailsBtn: "Zobacz szczegóły", thrusters: "Stery strumieniowe", heating: "Ogrzewanie", modelVip: "Stillo 30 VIP", boatType: "Luksusowy Houseboat bez patentu" }, stranda: {
            subtitle: "Zapraszamy do luksusowych apartamentów w Giżycku nad jeziorem Kisajno",
            description: "Apartamenty znajdują się przy porcie Stranda na terenie kompleksu apartamentowców Stranda Residence w Giżycku. Bliskość jeziora i oferty portu (wypożyczalnia sprzętu wodnego, tawerna, w sezonie letnim koncerty szantowo - rockowe), a także centrum Giżycka zapewnia wiele form aktywnego wypoczynku przy Szlaku Wielkich Jezior Mazurskich.",
            building: "Budynek",
            apartment: "Apartament",
            filters: {
                jacuzzi: "Jacuzzi",
                size: "Rozmiar",
                sizeAny: "Dowolna",
                size4: "Max 4 osoby",
                size6: "Max 6 osób",
                floor: "Kondygnacja",
                floorAny: "Dowolna",
                floorParter: "Parter",
                floorPietro: "Piętro",
                sauna: "Sauna",
                floor1: "1 Piętro",
                floor2: "2 Piętro",
                floor3: "3 Piętro"
            },
            units: {
                "C404": {
                    title: "Apartament C404 typu Studio",
                    descriptionPart1: "Apartamenty typu Studio znajdują się w budynku C, są to miejsce noclegowe z jednym łóżkiem podwójnym, rozkładaną sofą dla 2 osób, salonem z aneksem kuchennym, łazienką z prysznicem i tarasem z widokiem na zatokę Tracz i port Stranda.",
                    descriptionPart2: "Przeznaczone dla maksymalnie 4 osób. Apartament jest luksusowo wykończony i zapewnia wysoki komfort wypoczynku.",
                    descriptionPart3: "Na miejscu można skorzystać z zasobów portu takich jak: tawerna, koncerty w sezonie letnim, marina, wypożyczalnia sprzętu wodnego, itp."
                },
                "A103": {
                    title: "Apartament A103 Suite",
                    descriptionPart1: "Apartament A103 Suite leży na pierwszej kondygnacji budynku, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i duży taras z meblami.",
                    descriptionPart2: "Zapewnia komfortowy wypoczynek dla rodzin i grup znajomych.",
                    descriptionPart3: "Bliskość portu i jeziora sprawia, że jest to idealna baza wypadowa."
                },
                "A104": {
                    title: "Apartament A104 Delux z jacuzzi",
                    descriptionPart1: "Apartament A104 Delux z prywatnym jacuzzi na tarasie położony jest na parterze budynku A.",
                    descriptionPart2: "Składa się z przestronnego salonu z aneksem kuchennym i sofą, sypialni z jednym łóżkiem podwójnym, łazienki z prysznicem, tarasu gdzie znajduje się prywatne jacuzzi.",
                    descriptionPart3: "Całość z pięknym widokiem na jezioro Kisajno. Apartament położony najwyżej, co zapewnia wyjątkowe widoki."
                }
            },
            mapTitle: "Lokalizacja budynków",
            mapLabels: { "parking": "PARKING", "playground": "PLAC ZABAW", "sauna": "SAUNA", "beach": "PLAŻA", "rentals": "WYPOŻYCZALNIA", "beachbar": "BEACH BAR", "tavern": "TAWERNA", "shop": "SKLEPIK", "scooters": "WYPOŻYCZALNIA" },
            features: { "studio": "Studio", "oneBedroom": "1 Sypialnia", "twoBedrooms": "2 Sypialnie", "jacuzzi": "Jacuzzi", "sauna": "Sauna" }
        }, details: { about: "O apartamencie", amenities: "Udogodnienia", booking: "Rezerwacja", checkAvailability: "Sprawdź dostępność i zarezerwuj.", callBtn: "Zadzwoń", lowPrice: "Gwarancja najniższej ceny.", priceFrom: "Cena od", guests: "Max. ilość osób", backToList: "Powrót", descriptionPart1: "Wszystkie oferowane apartamenty są wykończone luksusowo i zapewniają bardzo duży komfort wypoczynku.", descriptionPart2: "Posiadają salon z TV i aneksem kuchennym, jedną lub dwie sypialnie z TV, łazienkę z prysznicem, dostęp do WiFi, tarasy z meblami wypoczynkowymi z widokiem na jezioro, wygodne łóżka oraz szereg dodatków które ułatwiają i umilają pobyt.", descriptionPart3: "Dodatkowo apartamenty położone najwyżej, mają dostęp z przestronnego tarasu na taras górny z jacuzzi.", gallery: "Galeria", collapseGallery: "Zwiń galerię", seeMorePhotos: "Zobacz więcej zdjęć", needHelp: "Potrzebujesz pomocy?", availability: "Dostępność", items: { view: "Widok na jezioro", ac: "Klimatyzacja", terrace: "Taras z meblami", kitchen: "Aneks kuchenny (płyta, lodówka, zmywarka)", tv: "Smart TV (Salon + Sypialnia)", wifi: "WiFi", parking: "Miejsce parkingowe", sauna: "Dostęp do sauny", iron: "Żelazko i deska", hairDryer: "Suszarka do włosów", coffee: "Zestaw do parzenia kawy/herbaty", roomSalon: "Salon", roomKitchen: "Kuchnia", roomBedroom: "Sypialnia", roomBathroom: "Łazienka", salonFeatures: "TV, sofa 2os., stół, krzesła, klimatyzacja, wifi", kitchenFeatures: "płyta indukcyjna, lodówka, zmywarka, mikrofalówka, komplet naczyń i sztućców", bedroomFeatures: "TV, łóżko 180x200, komplet pościeli, suszarka na ubrania, deska do prasowania, żelazko, klimatyzacja", bathroomFeatures: "prysznic, suszarka do włosów, szlafroki, balsam do ciała", terraceAndOther: "Taras i Pozostałe" } }, footer: { brandDesc: "Jedyne i niepowtarzalne chwile na Mazurach.", navTitle: "Nawigacja", contactTitle: "Kontakt", followTitle: "Obserwuj nas", rights: "Wszelkie prawa zastrzeżone.", linksTitle: "Linki" }, skorupki: {
            aboutTitle: "O domkach",
            title: "Domki Skorupki",
            subtitle: "Twoja luksusowa przystań w sercu Mazur",
            introTitle: "Kameralna osada na Mazurach",
            descriptionPart1: "Domki Skorupki to kameralna osada 10 eleganckich domków wypoczynkowych, położona w miejscowości Skorupki, w jednej z najbardziej spokojnych i zielonych części Mazur.",
            descriptionPart2: "To propozycja dla gości, którzy cenią przestrzeń, prywatność i wysoki standard, a jednocześnie chcą pozostać blisko natury. Domki zlokalizowane są ok. 350 metrów od jeziora, a do dyspozycji gości oddany jest wydzielony, prywatny teren rekreacyjny nad wodą.",
            descriptionPart3: "🏡 Komfort i elegancja do 6 osób. Każdy domek zaprojektowano tak, aby zapewnić maksymalny komfort wypoczynku: dwie niezależne sypialnie na piętrze, salon z rozkładaną sofą na parterze, nowoczesny, w pełni wyposażony aneks kuchenny, elegancka łazienka z prysznicem, zadaszony taras – idealne miejsce na poranną kawę lub wieczorny kieliszek wina. Starannie dobrane materiały, jasne wnętrza i funkcjonalny układ sprzyjają zarówno krótkim pobytom, jak i dłuższemu wypoczynkowi.",
            descriptionPart4: "🌊 Prywatna strefa nad jeziorem. Goście naszych domków mają dostęp do dedykowanego terenu rekreacyjnego nad jeziorem, gdzie czeka: klimatyczne miejsce na ognisko, plac zabaw dla dzieci, dyskretnie wpisany w naturalne otoczenie, przestrzeń do relaksu, odpoczynku i spokojnego spędzania czasu nad wodą. To idealna przestrzeń na letnie wieczory i chwile wyciszenia z dala od codziennego pośpiechu.",
            externalAmenities: "🌲 Spokój, przestrzeń i natura. Lokalizacja osady zapewnia: kameralną atmosferę i ciszę, bliskość jezior i mazurskich lasów, doskonałe warunki do spacerów, rowerów i wypoczynku na świeżym powietrzu.",
            areaTitle: "Dlaczego Domki Skorupki?",
            areaDesc: "✔ tylko 10 domków – kameralność i prywatność. \n✔ 350 m od jeziora + prywatny teren nad wodą. \n✔ elegancki standard i dopracowane wnętrza. \n✔ idealne miejsce na spokojny, jakościowy wypoczynek. \n✔ standard obsługi www.Mazury.Holiday",
            amenitiesTitle: "Udogodnienia",
            galleryTitle: "Galeria",
            expandGallery: "Zobacz więcej zdjęć",
            collapseGallery: "Zwiń galerię",
            ctaTitle: "Poczuj magię Skorupek",
            ctaDesc: "Rezerwacja domku to pierwszy krok do niezapomnianych wakacji. Zadzwoń do nas i zapytaj o wolne terminy.",
            details: {
                interiorTitle: "Wnętrze pełne oddechu",
                interiorDesc: "Na parterze czeka na Ciebie przestronna strefa dzienna z klimatyzacją, dużym telewizorem i sofą z funkcją spania dla 2 osób. Piętro to strefa snu: sypialnia z łóżkiem małżeńskim (180x200) oraz drugi pokój z dwoma łóżkami pojedynczymi (90x200), które można połączyć.",
                terraceTitle: "Taras i natura",
                terraceDesc: "Każdy domek posiada duży, zadaszony taras z meblami ogrodowymi, leżakami oraz własnym grillem. To idealne miejsce na wspólną biesiadę bez względu na pogodę. Przed domkiem znajduje się prywatny kawałek trawnika.",
                activityTitle: "Aktywność i relaks",
                activityDesc: "Zaledwie 350m dzieli Cię od prywatnego terenu nad jeziorem z pomostem do wędkowania, boiskiem do siatkówki plażowej i placem zabaw. Wieczorem zapraszamy do wspólnej strefy z altanami na ognisko. Akceptujemy zwierzęta – zabierz swojego pupila ze sobą!",
                locationTitle: "Lokalizacja i udogodnienia",
                locationDesc: "Jesteś 10 minut od Mikołajek i Parku Wodnego Tropikana. Na miejscu masz bezpłatny parking, szybkie WiFi oraz zestaw startowy (kawa, herbata, woda). W domku znajdziesz też żelazko, deskę do prasowania i suszarkę na ubrania.",
                amenitiesBlockTitle: "WYPOSAŻENIE I SZCZEGÓŁY",
                bedroomTitle: "Sypialnie i Salon",
                bedroomItems: [
                    "Maksymalnie 6 osób (ok. 55 m²)",
                    "Sypialnia 1: Łóżko podwójne 180x200",
                    "Sypialnia 2: Dwa łóżka 90x200 (możliwość złączenia)",
                    "Salon: Klimatyzacja, Smart TV, sofa 2-osobowa",
                    "Pościel i ręczniki w cenie"
                ],
                cottageAmenitiesTitle: "Kuchnia i Taras",
                cottageAmenitiesItems: [
                    "Zmywarka i płyta indukcyjna",
                    "Ekspres do kawy i lodówka",
                    "Pełna zastawa, garnki i sztućce",
                    "Zadaszony taras, leżaki, prywatny grill"
                ],
                commonAreasTitle: "Prywatna linia brzegowa (350m)",
                commonAreasItems: [
                    "Pomost wędkarski i widok na jezioro",
                    "Miejsce na ognisko i zadaszone altany",
                    "Plac zabaw dla dzieci",
                    "Boisko do siatkówki plażowej"
                ],
                additionalTitle: "Dodatkowe informacje",
                additionalItems: [
                    "Zestaw startowy: woda, kawa, herbata",
                    "Bezpłatny parking i szybkie WiFi",
                    "Obiekt przyjazny zwierzętom",
                    "Żelazko, deska i suszarka w każdym domku"
                ],
                price: "od 350 zł / doba",
                bookBtn: "Zarezerwuj"
            },
            amenities: {
                fullEquip: "Pełne wyposażenie",
                garden: "Prywatny ogród",
                bonfire: "Grill i ognisko",
                parking: "Parking",
                wifi: "WiFi",
                ac: "Klimatyzacja",
                waterAccess: "Dostęp do wody",
                peace: "Cisza i spokój"
            }
        }, roomsPage: {
            heroTitle: "Pokoje na Mazurach",
            heroSubtitle: "Komfortowe pokoje w spokojnej okolicy",
            ctaText: "Szukasz więcej przestrzeni na Fuledzie? Sprawdź nasze",
            ctaLink: "Apartamenty Fuleda",
            items: {
                fuleda: {
                    title: "Pokoje Fuleda",
                    description: "Komfortowe pokoje nad jeziorem Dobskim w strefie ciszy. Idealne dla rodzin i miłośników natury.",
                    location: "Fuleda, Jezioro Dobskie",
                    features: ["2 pokoje", "Łazienka", "Kuchnia", "Taras", "Dostęp do jeziora"],
                    priceLabel: "Cena",
                    priceValue: "od 375 zł/doba",
                    detailsBtn: "SZCZEGÓŁY",
                    bookBtn: "ZAREZERWUJ"
                }
            }
        }, calendar: {
            title: "Dostępność",
            loading: "Ładowanie...",
            error: "Nie udało się pobrać aktualnych danych. Spróbujemy ponownie za chwilę.",
            prevMonth: "Poprzedni miesiąc",
            nextMonth: "Następny miesiąc",
            days: ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'],
            legend: {
                busy: "Zajęte",
                checkIn: "Możliwy przyjazd",
                checkOut: "Możliwy wyjazd",
                available: "Dostępne"
            }
        }, strandaTypes: {
            oneBedroom: "z jedną sypialnią",
            oneBedroomJacuzzi: "z jedną sypialnią i jacuzzi",
            jacuzziTerrace: "z jacuzzi na tarasie",
            twoBedrooms: "z dwoma sypialniami",
            deluxeJacuzzi: "Delux z jacuzzi",
            deluxeSaunaJacuzzi: "Delux z sauną i jacuzzi",
            apartment: "Apartament",
            studio: "Studio",
            suite: "Suite",
        }, strandaDescriptions: {
            genericDesc: "Nasze apartamenty ulokowane są w Giżycku, przy porcie Stranda w apartamentowcach Stranda Residence, nad brzegiem jeziora Kisajno (zatoka Tracz). Rozpościera się z niego piękny widok na panoramę jezioro Kisajno i szlak żeglowny Wielkich Jezior Mazurskich. Apartament jest luksusowo wykończony i zapewnia wysoki komfort wypoczynku. Na miejscu można skorzystać z zasobów portu takich jak: tawerna, koncerty w sezonie letnim, marina, wypożyczalnia sprzętu wodnego, itp.",
            locationDesc: "Bliskość do centrum Giżycka umożliwia korzystanie z wielu atrakcji turystycznych, ofert wielu restauracji i pubów. Lokalizacja obiektu, ułatwia również poznawanie Mazur pod kątem przyrodniczym, historycznym i rozrywkowym. Do większości miejsc wartych odwiedzenia i poznania jest około 15-35 minut drogi samochodem.",
            A103: "Apartament A103 Suite leży na pierwszej kondygnacji budynku, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i duży taras z meblami.",
            A104: "Apartament A104 Delux z prywatnym jacuzzi na tarasie położony jest na parterze budynku A. Składa się z przestronnego salonu z aneksem kuchennym i sofą, sypialni z jednym łóżkiem podwójnym, łazienki z prysznicem, tarasu gdzie znajduje się prywatne jacuzzi w cenie.",
            A105: "Apartament A105 to luksusowa jednostka z jacuzzi, oferująca komfortowy wypoczynek w nowoczesnym wnętrzu.",
            B102: "Apartament B102 położony na parterze budynku B posiada przestronny salon z aneksem kuchennym oraz własne jacuzzi na tarasie.",
            B106: "Luksusowy apartament na parterze z dwiema sypialniami i dużym salonem.",
            B202: "Wyjątkowy apartament na pierwszym piętrze z prywatną sauną i jacuzzi na tarasie.",
            C404: "Apartamenty typu Studio znajdują się w budynku C, są to miejsce noclegowe z jednym łóżkiem podwójnym, rozkładaną sofą dla 2 osób, salonem z aneksem kuchennym, łazienką z prysznicem i tarasem z widokiem na zatokę Tracz i port Stranda.",
            C205: "Apartamenty typu Studio znajdują się w budynku C, są to miejsce noclegowe z jednym łóżkiem podwójnym, rozkładaną sofą dla 2 osób, salonem z aneksem kuchennym, łazienką z prysznicem i tarasem z widokiem na zatokę Tracz i port Stranda.",
            A204: "Apartament A204 Suite leży na pierwszym piętrze budynku A, posiada duży i przestronny salon z aneksem kuchennym, rozkładaną sofę, sypialnię, łazienkę z prysznicem i zadaszony taras z widokiem na jezioro Kisajno.",
            A205: "Apartament A205 Suite posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i duży zadaszony taras z meblami. Znajduje się na drugiej kondygnacji budynku.",
            A302: "Apartament A302 Suite leży na piętrze budynku A, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i zadaszony taras z widokiem na jezioro Kisajno.",
            A305: "Apartament A305 Suite leży na trzeciej kondygnacji budynku, z której rozpościera się piękny widok na jezioro Kisajno. Posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i duży zadaszony taras z meblami.",
            A306: "Apartament A306 Suite posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, dwie sypialnie, łazienkę z prysznicem i duży zadaszony taras z meblami. Leży na trzeciej kondygnacji budynku.",
            B103: "Apartament B103 Delux z prywatnym jacuzzi na tarasie położony jest na parterze budynku B. Składa się z przestronnego salonu z aneksem kuchennym i sofą, sypialni z jednym łóżkiem podwójnym, łazienki z prysznicem, tarasu gdzie znajduje się prywatne jacuzzi. Całość z pięknym widokiem na jezioro Kisajno, zatokę Tracz i port Stranda.",
            B201: "Apartament B201 Suite położony jest na pierwszym piętrze budynku B, posiada duży i przestronny salon z aneksem kuchennym, dwie sypialnie, dwie łazienki, jedna z prysznicem, druga z wanną, duży taras z widokiem na zatokę Tracz i jezioro Kisajno.",
            B304: "Apartamenty B304 z 1 sypialnią znajdują się w budynku B w sypialni łóżko podwójne, salon z aneksem kuchennym z rozkładaną sofą dla 2 osób, łazienka z prysznicem i tarasem z pięknym widokiem na jezioro Kisajno.",
            B305: "Apartamenty B305 z 1 sypialnią znajdują się w budynku B, w sypialni łóżko podwójne, salon z aneksem kuchennym z rozkładaną sofą dla 2 osób, łazienka z prysznicem i tarasem z pięknym widokiem na jezioro Kisajno.",
            B401: "Apartament B401 Delux położony jest na 3 najwyższym piętrze budynku. Składa się z przestronnego salonu z aneksem kuchennym i rozkładaną sofą, sypialni, łazienki z prysznicem, balkonu i dużego tarasu na dachu budynku. Całość z pięknym widokiem na jezioro.",
            B402: "Apartament B402 Suite leży na trzecim piętrze budynku, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem, balkon i duży taras na dachu z widokiem na jezioro.",
            B404: "Apartament B404 Suite leży na trzecim piętrze budynku, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem, balkon i duży taras na dachu z widokiem na jezioro.",
            A403: "Apartament A403 Suite leży na najwyższym 3 piętrze budynku A, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem, taras dolny oraz taras na dachu z prywatnym jacuzzi z widokiem na port Stranda i Zatokę Tracz.",
            C301: "Apartament C301 Suite znajduje się na drugim piętrze budynku C, posiada przestronny salon z aneksem kuchennym i sofę, dwie sypialnie, łazienkę z prysznicem i taras z widokiem na zatokę Tracz i port Stranda.",
            C304: "Apartament C304 Studio znajduje się na drugim piętrze budynku C, posiada miejsce noclegowe z łóżkiem podwójnym, rozkładaną sofę 2os., salon z aneksem kuchennym, łazienkę z prysznicem i taras z widokiem na zatokę Tracz i port Stranda. C304 Studio (maksymalna ilość osób 4).",
            C_1_sypialnia: "Apartament w budynku C z 1 sypialnią, oferujący komfortowy wypoczynek dla maksymalnie 4 osób.",
            C_Studio: "Studio w budynku C, to doskonałe miejsce na wypoczynek z widokiem na Zatokę Tracz.",
            C_2_sypialnie: "Przestronny apartament w budynku C z 2 sypialniami, idealny dla rodzin.",
        }, kisajnoPage: {
            title: "Apartamenty Kisajno",
            subtitle: "Port Neptun, Giżycko",
            introTitle: "Wyjątkowy standard nad jeziorem",
            description: "Oferujemy nowoczesny apartament o powierzchni 55 m², położony na parterze z bezpośrednim dostępem do uroków jeziora Kisajno. Idealny dla rodzin lub grup znajomych, zapewnia komfortowy wypoczynek w standardzie premium.",
            features: [
                "2 Oddzielne sypialnie z dużymi łóżkami",
                "Salon z wygodną sofą i TV",
                "Pełna kuchnia: zmywarka, mikrofala, lodówka",
                "Klimatyzacja i szybkie WiFi"
            ],
            priceLabel: "Cena od",
            priceValue: "500 PLN",
            priceUnit: "/ doba",
            amenitiesTitle: "Udogodnienia",
            bookingTitle: "Zarezerwuj swój pobyt",
            bookingDesc: "Skontaktuj się z nami bezpośrednio, aby uzyskać najlepszą ofertę i sprawdzić dostępność w wybranym terminie.",
            callAction: "Zadzwoń",
            amenities: {
                view: "Widok na jezioro",
                ac: "Klimatyzacja",
                smartTv: "Smart TV",
                wifi: "WiFi",
                kitchen: "Pełna kuchnia",
                dishwasher: "Zmywarka",
                parking: "Parking",
                port: "Port Neptun"
            }
        }, mikolajkiPage: {
            title: "Apartament Gigu Mikołajki",
            subtitle: "Centrum Mikołajek – Plac Wolności",
            introTitle: "Komfortowy apartament w sercu Mikołajek",
            description: "Nowoczesny i komfortowy apartament położony w samym sercu Mikołajek, przy Placu Wolności – idealna lokalizacja dla osób, które chcą mieć wszystko „pod ręką”. Apartament przeznaczony jest dla maksymalnie 4 osób i składa się z przytulnej sypialni z wygodnym łóżkiem podwójnym, salonu z rozkładaną sofą (dodatkowe miejsca do spania), w pełni wyposażonego aneksu kuchennego oraz nowoczesnej łazienki.",
            priceLabel: "Cena od",
            priceValue: "350 PLN",
            priceUnit: "/ doba",
            amenitiesTitle: "Udogodnienia",
            bookingTitle: "Zarezerwuj swój pobyt",
            bookingDesc: "Skontaktuj się z nami bezpośrednio lub dokonaj natychmiastowej rezerwacji online za pomocą przycisku poniżej.",
            callAction: "Zadzwoń",
            comfortTitle: "Komfort i Wyposażenie",
            comfortDesc: "Sypialnia z łóżkiem 180x200, szybkie WiFi, salon z TV i rozkładaną sofą",
            kitchenTitle: "Kuchnia i Łazienka",
            kitchenDesc: "Aneks kuchenny ze zmywarką, nowoczesna łazienka z prysznicem, zestaw startowy (kawa, herbata)",
            locationTitle: "Otoczenie i Lokalizacja",
            locationDesc: "Widok na wewnętrzny dziedziniec, ścisłe centrum Mikołajek przy Placu Wolności, blisko jeziora",
            collapseGallery: "Zwiń galerię",
            expandGallery: "Zobacz więcej zdjęć",
            bookBtn: "ZAREZERWUJ GO",
            amenities: {
                view: "Widok na dziedziniec",
                ac: "Klimatyzacja",
                smartTv: "Smart TV",
                wifi: "Bezpłatne WiFi",
                kitchen: "Aneks kuchenny",
                dishwasher: "Zmywarka",
                parking: "Centrum miasta",
                port: "Blisko jeziora"
            }
        }, fuledaPage: {
            title: "Fuleda Apartamenty",
            subtitle: "Cisza, spokój, natura nad jeziorem Dobskim",
            introTitle: "Oaza spokoju w strefie ciszy",
            description: "Lokalizacja Fuleda to propozycja dla tych, którzy pragną całkowitego odcięcia od zgiełku cywilizacji. Położona nad objętym strefą ciszy jeziorem Dobskim, oferuje warunki do prawdziwego relaksu w otoczeniu rezerwatu przyrody.",
            groundFloorTitle: "Apartament Parter",
            groundFloorDesc: "Dwie sypialnie z klimatyzacją (w tym jedna z kominkiem) oraz wielki taras z bezpośrednim wyjściem na jezioro.",
            firstFloorTitle: "Apartament Piętro",
            firstFloorDesc: "Dwie sypialnie z klimatyzacją, stylowo wykończone wnętrze z widokiem na rezerwat i pełnymi udogodnieniami.",
            amenitiesTitle: "Udogodnienia Premium",
            amenities: {
                ac: "Klimatyzacja",
                fireplace: "Kominek",
                beach: "Prywatna plaża",
                bonfire: "Miejsce na ognisko",
                wifi: "WiFi",
                kitchen: "Pełna kuchnia",
                washer: "Pralka",
                pier: "Dostęp do pomostu"
            }
        }, categories: {
            apartments: "Nasze Apartamenty",
            cottages: "Nasze Domki",
            rooms: "Nasze Pokoje",
            charter: "Czarter"
        }, attractionsPage: {
            title: "Atrakcje regionu",
            subtitle: "Giżycko i serce Mazur oferują mnóstwo możliwości",
            boyen: {
                title: "Twierdza Boyen",
                desc: "XIX-wieczna pruska twierdza o kształcie gwiazdy, kluczowy punkt historyczny regionu. Doskonale zachowane mury, bramy i budynki koszarowe stanowią unikalny przykład fortyfikacji."
            },
            bridge: {
                title: "Most Obrotowy",
                desc: "Unikalny zabytek techniki z XIX wieku, obsługiwany ręcznie przez jednego operatora. Łączy brzegi kanału łuczańskiego i jest jedynym tego typu czynnym mostem w Europie."
            },
            port: {
                title: "Port Giżycko & Ekomarina",
                desc: "Największy i najnowocześniejszy port na Mazurach. Idealne miejsce na spacer, kolację w porcie lub rozpoczęcie rejsu po Wielkich Jeziorach Mazurskich."
            },
            water: {
                title: "Jezioro Kisajno i Dobskie",
                desc: "Krystaliczna woda, rezerwaty przyrody i strefy ciszy. Raj dla miłośników natury, kajakarstwa i spokojnego żeglarstwa z dala od motorowodnego zgiełku."
            },
            wolfsLair: {
                title: "Wilczy Szaniec",
                desc: "Kwatera Główna Hitlera w Gierłoży. Kompleks bunkrów ukryty w lesie, będący świadkiem historii II wojny światowej."
            },
            waterTower: {
                title: "Wieża Ciśnień",
                desc: "Zabytkowa wieża z tarasem widokowym, z którego rozpościera się panorama Giżycka i okolicznych jezior. W środku muzeum i kawiarnia."
            },
            castle: {
                title: "Zamek Krzyżacki",
                desc: "Odrestaurowany zamek w Giżycku, obecnie luksusowy hotel St. Bruno. Połączenie historii z nowoczesnością."
            },
            bison: {
                title: "Zagroda Żubrów",
                desc: "Pokazowa zagroda żubrów w Wolisku. Możliwość obserwacji 'królów puszczy' z platformy widokowej w ich naturalnym środowisku."
            }
        }, cooperationPage: {
            title: "Współpraca",
            subtitle: "Twój obiekt w najlepszych rękach na Mazurach",
            services: {
                title: "Profesjonalne Zarządzanie Najmem",
                desc: "Szukasz zaufanego partnera do opieki nad Twoją nieruchomością? Mazury.Holiday to zespół ekspertów, który zdejmie z Twoich barków wszelkie obowiązki związane z wynajmem krótkoterminowym. Zwiększamy zyski właścicieli przy jednoczesnym zachowaniu najwyższego standardu obsługi gości."
            },
            marketing: {
                title: "Mocny Marketing Premium",
                desc: "Twoja posiadłość trafi na czołowe miejsca w portalach takich jak Booking.com, Airbnb oraz naszą autorską platformę Mazury.Holiday. Wykonujemy sesje zdjęciowe i filmy z drona."
            },
            guests: {
                title: "Bezobsługowy Wynajem",
                desc: "Zajmujemy się pełnym cyklem: od rezerwacji i płatności, przez profesjonalne powitanie gości, aż po wsparcie w trakcie ich pobytu 24/7."
            },
            maintenance: {
                title: "Standard 5-Gwiazdkowy",
                desc: "Nasz zespół sprzątający i techniczny dba o każdy detal. Twoja nieruchomość zawsze lśni i jest w idealnym stanie technicznym przed przyjazdem każdego gościa."
            },
            whyUs: {
                title: "Dlaczego warto z nami współpracować?",
                point1: "Lokalne doświadczenie i znajomość rynku mazurskiego",
                point2: "Transparentny system rozliczeń i panel właściciela",
                point3: "Stała opieka techniczna i konserwacyjna",
                point4: "Optymalizacja cen (Revenue Management)"
            }
        }, coopExtra: {
            heroTitle: "Współpraca B2B",
            heroSubtitle: "TWÓJ OBIEKT W NAJLEPSZYCH RĘKACH NA MAZURACH",
            securityTitle: "Bezpieczeństwo",
            securityDesc: "Weryfikacja gości oraz ubezpieczenia na wypadek szkód gwarantują bezpieczeństwo Twojej inwestycji.",
            readyTitle: "Gotowy na wyższe zyski?",
            readyDesc: "Skontaktuj się z nami i sprawdź, ile może zarabiać Twój apartament lub domek na Mazurach.",
            letsTalk: "Porozmawiajmy"
        }, contactForm: {
            title: "Napisz do nas",
            subtitle: "Masz pytania? Chcesz zarezerwować pobyt? Skorzystaj z formularza poniżej.",
            name: "Imię i nazwisko",
            email: "Adres e-mail",
            phone: "Numer telefonu",
            subject: "Temat",
            message: "Treść wiadomości",
            send: "Wyślij wiadomość",
            sending: "Wysyłanie...",
            success: "Wiadomość została wysłana pomyślnie!",
            error: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie."
        }, cookieConsent: {
            title: "Ciasteczka i Prywatność 🍪",
            description: "Dbamy o Twoją prywatność. Możesz zaakceptować wszystkie pliki cookie lub dostosować swoje zgody. Więcej w",
            privacyLink: "Polityce Prywatności",
            acceptAll: "Akceptuj wszystkie",
            customize: "Dostosuj",
            decline: "Odrzuć",
            settingsTitle: "Ustawienia plików cookie",
            back: "Wróć",
            necessary: "Niezbędne",
            necessaryDesc: "Wymagane do działania strony.",
            analytics: "Analityczne",
            analyticsDesc: "Pomagają nam ulepszać stronę.",
            marketing: "Marketingowe",
            marketingDesc: "Dopasowanie reklam do Ciebie.",
            save: "Zapisz ustawienia"
        }, privacyPolicy: {
            title: "Polityka Prywatności i Plików Cookie",
            intro: "Cenimy Twoją prywatność, zapoznaj się z naszą polityką prywatności.",
            content: "Niniejsza Polityka Cookies dotyczy wszystkich serwisów internetowych mazury.holiday. Korzystając z naszych stron, wyrażasz zgodę na używanie plików cookies zgodnie z tą polityką. Używamy plików cookies, aby nasze strony działały szybciej, były łatwiejsze w obsłudze oraz aby dopasować treści i reklamy do Twoich potrzeb. W każdej chwili możesz zarządzać ustawieniami plików cookies w swojej przeglądarce.",
            sections: [
                {
                    title: "Co to są ciasteczka?",
                    content: "Ciasteczka (ang. <em>cookies</em>) – niewielkie informacje tekstowe, wysyłane przez serwer WWW i zapisywane po stronie użytkownika (zazwyczaj na twardym dysku). Domyślne parametry ciasteczek pozwalają na odczytanie informacji w nich zawartych jedynie serwerowi, który je utworzył. Ciasteczka są stosowane najczęściej w przypadku liczników, sond, sklepów internetowych, stron wymagających logowania, reklam i do monitorowania aktywności odwiedzających."
                },
                {
                    title: "Do czego używamy ciasteczek?",
                    content: "Strony mazury.holiday używają ciasteczek w różnych celach:",
                    list: [
                        "by strony mazury.holiday działały szybciej i były łatwiejsze w użyciu",
                        "aby lepiej dopasować treści i reklamy dostępne na Stronach mazury.holiday do Twoich oczekiwań i zainteresowań",
                        "do zbierania anonimowych, zagregowanych statystyk, które pozwalają nam zrozumieć jak ludzie używają naszych stron i pomagają w poprawianiu ich funkcjonalności i zawartości"
                    ]
                },
                {
                    content: "Używając ciasteczek w wyżej opisany sposób nigdy nie identyfikujemy tożsamości użytkowników na podstawie informacji przechowywanych w ciasteczkach."
                },
                {
                    title: "Czas przechowywania danych w „cookies”",
                    content: "Używamy dwa rodzaje ciasteczek – <strong>sesyjne</strong> oraz <strong>stałe</strong>. Te pierwsze pozostają na Twoim urządzeniu jedynie podczas korzystania ze Stron mazury.holiday. Ciasteczka stałe pozostają na Twoim urządzeniu tak długo jak długo mają ustawiony czas funkcjonowania lub do momentu kiedy użytkownik je usunie."
                },
                {
                    title: "Cookies podmiotów trzecich",
                    content: "Podczas korzystania ze Stron mazury.holiday możesz otrzymywać ciasteczka pochodzące od współpracujących z nami podmiotów trzecich takich jak np. Facebook, Google, a także od firm realizujących kampanie reklamowe. Więcej informacji na temat tych ciasteczek możesz znaleźć na stronach internetowych poszczególnych podmiotów trzecich."
                },
                {
                    title: "Jak usunąć lub zmienić ustawienia „cookies”?",
                    content: "Większość przeglądarek internetowych jest początkowo ustawionych na automatyczne przyjmowanie ciasteczek. Możesz jednak zmienić ustawienia przeglądarki tak, aby ciasteczka były blokowane – w całości lub w jakiejś części, np. tylko od stron trzecich, albo aby każdorazowo otrzymywać komunikat w momencie kiedy ciasteczka są wysyłane na Twoje urządzenie.<br/><br/>Pamiętaj jednak, że jeżeli zablokujesz używane przez nas ciasteczka, może to negatywnie wpłynąć na wygodę korzystania ze Stron mazury.holiday, na przykład możesz nie być w stanie odwiedzić pewnych obszarów Stron mazury.holiday bądź nie otrzymywać spersonalizowanych informacji podczas ich przeglądania. Uniemożliwisz nam także zbieranie anonimowych informacji nt. używania naszych stron w celu stałego poprawiania zawartości Stron i usług mazury.holiday."
                }
            ],
            usefulLinks: "Przydatne linki",
            linksDescription: "Użytkownicy powinni przeczytać politykę ochrony prywatności tych firm, aby poznać ich zasady korzystania z plików cookie:",
            manageCookies: "W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której używasz i postępuj zgodnie z instrukcjami:",
            mobileDevices: "Urządzenia mobilne:"
        }, pokojeFuledaPage: {
            heroTitle: "Pokoje Fuleda",
            price: "od 375 zł/doba",
            description: "Oferujemy do wynaj\u0119cia dwa pokoje: jeden z \u0142\u00F3\u017Ckiem podw\u00F3jnym, drugi z dwoma pojedynczymi, \u0142azienka z prysznicem i wc. Przy pokojach zadaszony taras. W osobnym budynku oddalonym o 10m od pokoi kuchnia z dodatkowym wc. Wszystko znajduje si\u0119 na p\u00F3\u0142wyspie Fuledzki R\u00F3g nad brzegiem jeziora Dobskie ze stref\u0105 ciszy na ogrodzonym terenie Folwark Fuleda. Wspania\u0142e miejsce dla os\u00F3b ceni\u0105cych sobie dzik\u0105 natur\u0119, cisz\u0119 i spok\u00F3j. Z dala od miasta.\n\nBudynek szeregowy zlokalizowany na prywatnych ogr\u00F3dkach dzia\u0142kowych nad jeziorem Dobskim. W g\u0142\u00F3wnym budynku do prywatnego u\u017Cytku s\u0105 dwa pokoje, \u0142azienka z prysznicem i wc, zadaszony taras. Na przeciwko tarasu w odleg\u0142o\u015Bci oko\u0142o 10m jest budynek w kt\u00F3rym znajduje si\u0119 kuchnia z drugim WC (r\u00F3wnie\u017C do prywatnego u\u017Cytku). Z drugiej strony budynku w odleg\u0142o\u015Bci oko\u0142o 20m jest prywatne doj\u015Bcie do jeziora na kt\u00F3rym znajduje si\u0119 taras widokowy z grillem, miejsce na ognisko oraz \u0142\u00F3d\u017A wios\u0142owa.\n\nW odleg\u0142o\u015Bci oko\u0142o 250m znajduje si\u0119 og\u00F3lnodost\u0119pna pla\u017Ca. Fuleda po\u0142o\u017Cona jest oko\u0142o 10km od Gi\u017Cycka, 20km od K\u0119trzyna i Gier\u0142o\u017Cy gdzie znajduje si\u0119 Wilczy Szaniec kwatera Hitlera. W pobli\u017Cu lasy, \u0142\u0105ki, trasy rowerowe, p\u0142ac zabaw. Najbli\u017Cszy sklep oko\u0142o 3km.\n\nPolecany rodzinom z dzie\u0107mi, w\u0119dkarzom, grzybiarzom i mi\u0142o\u015Bnikom natury.",
            amenitiesTitle: "Wyposażenie",
            room1Title: "Pokój 1 (2-osobowy)",
            room1Items: ["Łóżko dla 2 osób", "Wyjście na taras", "Odkurzacz", "Suszarka", "Żelazko", "Deska do prasowania"],
            room2Title: "Pokój 2 (2 łóżka)",
            room2Items: ["Dwa łóżka pojedyncze", "TV", "Wyjście na taras"],
            kitchenTitle: "Kuchnia",
            kitchenNote: "(oddzielny budynek 10m)",
            kitchenItems: ["Lodówka", "Zmywarka", "Mikrofalówka", "Toster", "Komplet naczyń i sztućców", "Kuchnia gazowa", "Ekspres do kawy"],
            bathroomTitle: "Łazienka",
            bathroomItems: ["Prysznic", "Pralka", "Suszarka do włosów", "Prostownica", "Ręczniki", "Szlafroki", "Kosmetyki"],
            terraceTitle: "Taras i otoczenie",
            terraceItems: ["Przestronny taras", "Prywatne zejście do jeziora", "Miejsce na grilla i ognisko", "Łódź wiosłowa", "Taras widokowy"],
            bookingTitle: "Rezerwacja",
            bookingDesc: "Sprawdź dostępność i zarezerwuj swój pobyt",
            bookBtn: "ZAREZERWUJ GO",
            callBtn: "Zadzwoń: 730 067 027",
            bestPrice: "Najlepsze ceny - rezerwuj bezpośrednio",
            galleryTitle: "Galeria",
            expandGallery: "Zobacz więcej zdjęć",
            collapseGallery: "Zwiń galerię"
        }, charterPage: {
            heroTitle: "Stillo 30 VIP",
            heroSubtitle: "Jacht motorowy Stillo 30 VIP",
            mainTitle: "Twój luksusowy dom na wodzie",
            desc1: "<strong>Stillo 30 VIP</strong> to następca sprawdzonej i cenionej Futury 870. Jest jednostką mającą na celu zaspokojenie oczekiwań najbardziej wymagających armatorów w sektorze jachtów wypornościowych i pół ślizgowych typu Houseboat. Walory nautyczne, sprawdzone w wielokrotnie nagradzanym poprzedniku, połączone z rewolucyjną praktycznością.",
            desc2: "Na pokładzie znajdziesz do <strong>6 miejsc do spania</strong>, pełnowymiarową łazienkę oraz salon z panoramicznymi oknami i wysokim (ok. 190 cm) stropem, co daje poczucie prawdziwego apartamentu na wodzie. Szerokie półpokłady prowadzą na dziobowy taras do opalania, a niska platforma kąpielowa u rufy ułatwia zejście do wody oraz cumowanie przy pomoście.",
            desc3: "Podstawowe atuty to mocny silnik stacjonarny 52KM, <strong>dwa stery strumieniowe</strong>, elektryczna winda kotwiczna, materace z pianką termoplastyczną, WiFi bez ograniczeń, TV ze Smart TV, ekspres do kawy Nespresso i wiele innych…",
            desc4: "Co ważne dla czarteru: jednostka utrzymuje prędkość poniżej 15 km/h, więc w Polsce można nią sterować <strong>bez patentu</strong> – po krótkim przeszkoleniu odbierasz jacht i ruszasz w trasę. Stillo 30 oferuje więc luksus, wygodę i pełnię mazurskiej przygody, a jednocześnie jest idealnym wyborem dla rodzin i grup przyjaciół szukających pierwszego doświadczenia z własnym „domem na wodzie”.",
            vipAmenitiesTitle: "Udogodnienia VIP",
            navAndDriveTitle: "Nawigacja i Napęd",
            navAndDriveDesc: "Stery strumieniowe (Dziób/Rufa), Tablet z mapami jezior, Silnik 52KM",
            vipStandardTitle: "Standard VIP",
            vipStandardDesc: "Ogrzewanie, WiFi bez limitu, Smart TV, Ekspres Nespresso",
            safetyTitle: "Bezpieczeństwo",
            safetyDesc: "Pełne wyposażenie ratunkowe, Instalacja 230V Non-Stop, Elektryczna winda kotwiczna",
            galleryTitle: "Galeria Zdjęć",
            expandGallery: "Zobacz więcej zdjęć",
            collapseGallery: "Zwiń galerię",
            bookTermTitle: "Zarezerwuj Termin",
            bookTermDesc: "Sprawdź dostępność w naszym kalendarzu online i zarezerwuj swoje wakacje marzeń już dziś.",
            bookBtn: "ZAREZERWUJ GO",
            techSpecsTitle: "Dane Techniczne",
            specs: {
                length: "Długość",
                width: "Szerokość",
                draft: "Zanurzenie",
                engine: "Silnik",
                cabins: "Kabiny",
                crew: "Załoga"
            },
            equipmentTitle: "Wyposażenie",
            equipmentList: [
                "Ster strumieniowy na dziobie i rufie",
                "Stolik kokpitowy",
                "TV SMART (Smart TV, YouTube)",
                "WiFi (bez limitów), Radio/Bluetooth",
                "Gniazda 12V (4 szt.) i 230V (4 szt.)",
                "Ogrzewanie Webasto",
                "Ciepła woda (Bojler 30L)",
                "WC Morskie z prysznicem",
                "Kostkarka do lodu, Toster, Czajnik",
                "Ekspres Nespresso (+kapsułki)",
                "Pełne wyposażenie kuchenne",
                "Elektryczna winda kotwiczna",
                "Echosonda, Nawigacja - Ploter"
            ]
        }, coopSteps: {
            "title": "Jak wygląda współpraca?",
            "step1_title": "Audyt i wycena",
            "step1_desc": "Odwiedzamy Twój obiekt, sprawdzamy jego potencjał i proponujemy optymalną strategię cenową.",
            "step2_title": "Przygotowanie oferty",
            "step2_desc": "Tworzymy profesjonalny opis, organizujemy sesję zdjęciową i wdrażamy obiekt na platformy rezerwacyjne.",
            "step3_title": "Start sprzedaży",
            "step3_desc": "Uruchamiamy kampanie marketingowe i otwieramy kalendarz na pierwsze rezerwacje.",
            "step4_title": "Zarządzanie i zyski",
            "step4_desc": "Przejmujemy pełną obsługę gości i sprzątanie, a Ty co miesiąc otrzymujesz przejrzysty raport i zyski."
        }, coopModels: {
            "title": "Modele współpracy",
            "full_title": "Zarządzanie Kompleksowe",
            "full_desc": "Obejmuje marketing, obsługę gości, sprzątanie, drobne naprawy i zarządzanie cenami. Idealne dla inwestorów ceniących czas.",
            "marketing_title": "Tylko Marketing i Rezerwacje",
            "marketing_desc": "My zajmujemy się pozyskiwaniem gości i obsługą rezerwacji online, a Ty dbasz o przyjęcie gości i sprzątanie."
        }, descKeys: {
            "location": "Położenie",
            "maxGuests": "Maksymalna ilość osób",
            "kitchen": "Wyposażenie kuchni",
            "bedroom1": "Wyposażenie sypialni 1",
            "bedroom2": "Wyposażenie sypialni 2",
            "bedroom3": "Wyposażenie sypialni 3",
            "bathroom": "Wyposażenie łazienki",
            "living": "Wyposażenie salonu",
            "terraceFront": "Taras przód",
            "terraceBack": "Taras tył",
            "terrace": "Taras",
            "balcony": "Balkon",
            "others": "Pozostałe",
            "included": "W ofercie",
            "additional": "Dodatkowe informacje",
            "bedroom": "Wyposażenie sypialni",
            "livingRoom": "Salon"
        } }),
    en: __assign(__assign({}, translationsLegal_1.translationsLegal.en), { amenityNames: { "Klimatyzacja": "Air conditioning", "WiFi": "WiFi", "Smart TV": "Smart TV", "Prysznic": "Shower", "Ręczniki": "Towels", "Zmywarka": "Dishwasher", "Płyta indukcyjna": "Induction hob", "Pościel": "Bed linen", "Łóżka małżeńskie i pojedyncze": "Double and single beds", "Prywatny taras z grillem": "Private terrace with grill", "Miejsce na ognisko": "Campfire spot", "Dostęp do jeziora": "Lake access", "Miejsce parkingowe": "Parking space", "W pełni wyposażony aneks kuchenny": "Fully equipped kitchenette", "Aneks kuchenny (płyta, lodówka, zmywarka)": "Kitchenette (hob, fridge, dishwasher)", "Ekspres do kawy": "Coffee machine", "Taras z meblami wypoczynkowymi": "Terrace with lounge furniture", "Prywatne Jacuzzi": "Private Jacuzzi", "Balkon z meblami wypoczynkowymi": "Balcony with lounge furniture" }, nav: { about: "About Us", apartments: "Apartments", cottages: "Cottages", charter: "Charter", concerts: "Concerts", port: "Port", attractions: "Attractions", cooperation: "Cooperation", contact: "Contact", rooms: "Rooms", bookBtn: "Book Now", language: "Language", back: "Back", euProjects: "EU Projects" }, hero: { title: "Holidays in Masuria", subtitle: "CHECK HOW YOU CAN SPEND UNIQUE MOMENTS", apartmentsBtn: "Our Apartments", charterBtn: "730 067 027", bookOnlineBtn: "Book Online", scrollDown: "Scroll down",
            typewriterDesc: "Check our offer"
        }, intro: { tag: "Mazury.Holiday", title: "Welcome to", titleHighlight: "Great Lakes", p1: "Discover the magic of Masuria from our luxury apartments.", p2: "Whether you seek peace in Giżycko or luxury in Fuleda." }, luxuryBenefits: {
            tag: "Advantages of our offer",
            title: "Luxury is in the details",
            quality: { title: "High quality finish", desc: "We have taken care of the finish in each of our apartments. We hope you will notice all the hidden and visible details" },
            views: { title: "Lake views", desc: "On beautiful sunny days, from sunrise to sunset - TV and VOD movies can replace the beautiful views of Lake Kisajno or Dobskie" },
            comfort: { title: "Sleep in comfortable conditions", desc: "Sleep is essential for rest and affects the quality of your stay with us. All beds are equipped with very good and comfortable mattresses" },
            wifi: { title: "Free Wi-Fi", desc: "We have prepared a Wi-Fi connection in our apartments. It is not necessary for relaxation, but it helps, for example, for remote work" },
            gifts: { title: "Starter kit", desc: "For each of our guests, we have prepared a small gift, which is an element of our holiday offer in the apartments" },
            flexible: { title: "Flexible reservation", desc: "We understand that not every trip can be fully planned. That's why we offer flexible booking and cancellation terms" }
        }, apartments: {
            title: "Our Apartments",
            description: "Choose the perfect place for your rest.",
            details: "Details",
            pricePrefix: "from",
            night: "night",
            people: "people",
            bookBtn: "BOOK NOW", items: {
                stranda: {
                    features: { studio: "Studio", oneBedroom: "1 Bedroom", twoBedrooms: "2 Bedrooms", jacuzzi: "Jacuzzi", sauna: "Sauna" },
                    mapLabels: { parking: "PARKING", playground: "PLAYGROUND", sauna: "SAUNA", beach: "BEACH", rentals: "RENTALS", beachbar: "BEACH BAR", tavern: "TAVERN", shop: "SHOP" },
                    mapTitle: "Building locations",
                    filters: { jacuzzi: "Jacuzzi", size: "Number of people", sizeAny: "Any", size4: "Max 4 people", size6: "Max 6 people", floor: "Floor", floorAny: "Any", floorParter: "Ground floor", floorPietro: "Upper floor" }, title: "Stranda Residence Apartments", location: "Giżycko", description: "Comfortable apartments in the heart of Stranda port."
                },
                kisajno: { title: "Kisajno Apartments", location: "Giżycko", description: "Luxury on the shores of Lake Kisajno." },
                fuleda: { title: "Fuleda Apartments", location: "Fuleda, Jezioro Dobskie", description: "An oasis of peace away from the city." },
                domkiSkorupki: { title: "Skorupki Cottages", location: "Skorupki, Lake Tałty", description: "Luxury cottages in the heart of Masurian nature." },
                pokojeFuleda: { title: "Fuleda Rooms", location: "Fuleda, Lake Dobskie", description: "Cozy rooms with a lake view in the quiet zone." },
                mikolajki: { title: "Gigu Apartment Mikołajki", location: "Plac Wolności, Mikołajki", description: "Modern apartment in the very center of Mikołajki." }
            },
            bookingTitle: "Book your stay",
            bookingDesc: "Select dates and check availability.",
            seeCottage: "View cottages",
            seeRooms: "View rooms"
        }, cottagesAndRooms: {
            title: "Our cottages and rooms",
            description: "Feel the closeness of nature in comfortable conditions."
        }, charter: { tag: "No license", title: "Motor Yacht Charter", description: "Stillo 30 motor yacht available without a license.", model: "Stillo 30 (2020)", cabins: "3 Cabins", checkBtn: "Check availability", premiumFleet: "Premium Fleet", feature1: "No license", feature2: "Year 2020", feature3: "Luxury equipment", detailsBtn: "Details", thrusters: "Bow thrusters", heating: "Heating", modelVip: "Stillo 30 VIP", boatType: "Luxury Houseboat without license" }, stranda: { subtitle: "Luxury by Lake Kisajno", description: "Stranda Residence combines modern design with nature.", building: "Building", apartment: "Apartment", filters: { "jacuzzi": "Jacuzzi", "size": "Size", "sizeAny": "Any", "size4": "Max 4 people", "size6": "Max 6 people", "floor": "Floor", "floorAny": "Any", "floorParter": "Ground floor", "floorPietro": "Upper floor", "sauna": "Sauna", "floor1": "1st Floor", "floor2": "2nd Floor", "floor3": "3rd Floor" },
            units: {
                "C404": {
                    "title": "C404 Studio Apartment",
                    "descriptionPart1": "Studio apartments are located in building C. They feature a sleeping area with one double bed, a sofa bed for 2 people, a living area with a kitchenette, a bathroom with a shower, and a terrace overlooking Tracz Bay and the Stranda marina.",
                    "descriptionPart2": "Designed for up to 4 people. The apartment is luxuriously finished and ensures a high level of comfort.",
                    "descriptionPart3": "On-site, you can enjoy the marina's amenities, such as a tavern, summer concerts, water equipment rentals, and more."
                },
                "A103": {
                    "title": "A103 Suite Apartment",
                    "descriptionPart1": "The A103 Suite is located on the first floor. It features a large and spacious living room with a kitchenette and a sofa bed, a bedroom, a bathroom with a shower, and a large terrace with furniture.",
                    "descriptionPart2": "It provides comfortable relaxation for families and groups of friends.",
                    "descriptionPart3": "The proximity to the marina and the lake makes it an ideal base for your vacation."
                },
                "A104": {
                    "title": "A104 Deluxe Apartment with Jacuzzi",
                    "descriptionPart1": "The A104 Deluxe apartment with a private jacuzzi on the terrace is located on the ground floor of building A.",
                    "descriptionPart2": "It consists of a spacious living room with a kitchenette and a sofa, a bedroom with one double bed, a bathroom with a shower, and a terrace featuring a private jacuzzi.",
                    "descriptionPart3": "All this comes with a beautiful view of Lake Kisajno. The apartment is situated at the highest point, providing exceptional views."
                }
            },
            mapTitle: "Buildings Location",
            mapLabels: { "parking": "PARKING", "playground": "PLAYGROUND", "sauna": "SAUNA", "beach": "BEACH", "rentals": "RENTALS", "beachbar": "BEACH BAR", "tavern": "TAVERN", "shop": "SHOP", "scooters": "RENTALS" },
            features: { "studio": "Studio", "oneBedroom": "1 Bedroom", "twoBedrooms": "2 Bedrooms", "jacuzzi": "Jacuzzi", "sauna": "Sauna" }
        }, details: { about: "About", amenities: "Amenities", booking: "Booking", checkAvailability: "Check availability and book.", callBtn: "Call", lowPrice: "Best price guarantee.", priceFrom: "Price from", guests: "Max. guests", backToList: "Back to list", descriptionPart1: "Luxury apartment in building", descriptionPart2: "at Stranda Residence.", descriptionPart3: "Unforgettable views of Lake Kisajno.", items: { view: "Lake view", ac: "A/C", terrace: "Terrace", kitchen: "Kitchenette", tv: "Smart TV", wifi: "WiFi", parking: "Parking", sauna: "Sauna access", roomSalon: "Living room", roomKitchen: "Kitchen", roomBedroom: "Bedroom", roomBathroom: "Bathroom", salonFeatures: "TV, 2-person sofa, table, chairs, air conditioning, wifi", kitchenFeatures: "induction hob, fridge, dishwasher, microwave, set of dishes and cutlery", bedroomFeatures: "TV, 180x200 bed, bedding set, clothes dryer, ironing board, iron, air conditioning", bathroomFeatures: "shower, hair dryer, bathrobes, body lotion", terraceAndOther: "Terrace and Others",
                iron: "Iron and ironing board",
                hairDryer: "Hair dryer",
                coffee: "Coffee/tea making set"
            },
            gallery: "Gallery",
            collapseGallery: "Collapse gallery",
            seeMorePhotos: "See more photos",
            needHelp: "Need help?",
            availability: "Availability"
        }, footer: { brandDesc: "Unique moments in Masuria.", navTitle: "Navigation", contactTitle: "Contact", followTitle: "Follow", rights: "All rights reserved.", linksTitle: "Links" }, skorupki: {
            aboutTitle: "About the cottages",
            title: "Skorupki Cottages",
            subtitle: "Your luxury haven in the heart of Masuria",
            introTitle: "Intimate settlement in Masuria",
            descriptionPart1: "Skorupki Cottages is an intimate settlement of 10 elegant holiday cottages, located in the village of Skorupki, in one of the most peaceful and green parts of Masuria.",
            descriptionPart2: "This is a proposal for guests who appreciate space, privacy and high standard, and at the same time want to stay close to nature. The cottages are located approx. 350 meters from the lake, and guests have at their disposal a separate, private recreational area by the water.",
            descriptionPart3: "🏡 Comfort and elegance for up to 6 people. Each cottage was designed to ensure maximum comfort of rest: two independent bedrooms on the first floor, a living room with a sofa bed on the ground floor, a modern, fully equipped kitchenette, an elegant bathroom with a shower, a covered terrace – the perfect place for morning coffee or an evening glass of wine. Carefully selected materials, bright interiors and a functional layout favor both short stays and longer rest.",
            descriptionPart4: "🌊 Private zone by the lake. Guests of our cottages have access to a dedicated recreational area by the lake, where awaits: an atmospheric place for a bonfire, a playground for children, discreetly inscribed in the natural surroundings, a space for relaxation, rest and spending time peacefully by the water. It is the perfect space for summer evenings and moments of silence away from the daily rush.",
            externalAmenities: "🌲 Peace, space, and nature. The location of the settlement ensures: an intimate atmosphere and silence, proximity to lakes and Masurian forests, excellent conditions for walking, cycling, and outdoor recreation.",
            areaTitle: "Why Skorupki Cottages?",
            areaDesc: "✔ only 10 cottages – intimacy and privacy. \n✔ 350 m from the lake + private area by the water. \n✔ elegant standard and refined interiors. \n✔ perfect place for a quiet, quality rest. \n✔ service standard www.Mazury.Holiday",
            amenitiesTitle: "Amenities",
            galleryTitle: "Gallery",
            expandGallery: "See more photos",
            collapseGallery: "Collapse gallery",
            ctaTitle: "Feel the magic of Skorupki",
            ctaDesc: "Booking a cottage is the first step to an unforgettable vacation. Call us and ask about available dates.",
            amenities: {
                fullEquip: "Fully equipped",
                garden: "Private garden",
                bonfire: "BBQ and bonfire",
                parking: "Parking",
                wifi: "WiFi",
                ac: "Air conditioning",
                waterAccess: "Water access",
                peace: "Peace and quiet"
            },
            details: {
                interiorTitle: "A Spacious Interior",
                interiorDesc: "On the ground floor, a spacious living area awaits you with air conditioning, a large TV, and a sofa bed for 2 people. The upper floor is a sleeping zone: a bedroom with a double bed (180x200) and a second room with two single beds (90x200) that can be joined.",
                terraceTitle: "Terrace and Nature",
                terraceDesc: "Each cottage has a large, covered terrace with garden furniture, sun loungers, and its own grill. It's the perfect place for a common feast regardless of the weather. There is a private piece of lawn in front of the cottage.",
                activityTitle: "Activity and Relaxation",
                activityDesc: "Just 350m separates you from the private lakeside area with a fishing pier, beach volleyball court, and playground. In the evening, we invite you to the common area with gazebos for a bonfire. We accept pets – take your pet with you!",
                locationTitle: "Location and Amenities",
                locationDesc: "You are 10 minutes from Mikołajki and the Tropikana Water Park. On-site you have free parking, fast WiFi, and a starter kit (coffee, tea, water). In the cottage, you will also find an iron, ironing board, and clothes dryer.",
                amenitiesBlockTitle: "EQUIPMENT AND DETAILS",
                bedroomTitle: "Bedrooms and Living Room",
                bedroomItems: [
                    "Maximum 6 guests (approx. 55 m²)",
                    "Bedroom 1: Double bed 180x200",
                    "Bedroom 2: Two 90x200 beds (can be joined)",
                    "Living room: A/C, Smart TV, 2-person sofa",
                    "Bed linen and towels included"
                ],
                cottageAmenitiesTitle: "Kitchen and Terrace",
                cottageAmenitiesItems: [
                    "Dishwasher and induction hob",
                    "Coffee machine and refrigerator",
                    "Full set of dishes, pots and cutlery",
                    "Covered terrace, loungers, private grill"
                ],
                commonAreasTitle: "Private Shoreline (350m)",
                commonAreasItems: [
                    "Fishing pier and lake view",
                    "Bonfire place and covered gazebos",
                    "Children's playground",
                    "Beach volleyball court"
                ],
                additionalTitle: "Additional Information",
                additionalItems: [
                    "Starter kit: water, coffee, tea",
                    "Free parking and fast WiFi",
                    "Pet-friendly property",
                    "Iron, board and dryer in each cottage"
                ],
                price: "from 350 PLN / night",
                bookBtn: "Book Now"
            }
        }, roomsPage: {
            heroTitle: "Rooms in Masuria",
            heroSubtitle: "Comfortable rooms in a quiet area",
            ctaText: "Looking for more space at Fuleda? Check out our",
            ctaLink: "Fuleda Apartments",
            items: {
                fuleda: {
                    title: "Fuleda Rooms",
                    description: "Comfortable rooms by Lake Dobskie in a silent zone. Perfect for families and nature lovers.",
                    location: "Fuleda, Lake Dobskie",
                    features: ["2 rooms", "Bathroom", "Kitchen", "Terrace", "Lake access"],
                    priceLabel: "Price",
                    priceValue: "from 375 PLN/night",
                    detailsBtn: "DETAILS",
                    bookBtn: "BOOK NOW"
                }
            }
        }, calendar: {
            title: "Availability",
            loading: "Loading...",
            error: "Failed to fetch current data. Retrying...",
            prevMonth: "Previous month",
            nextMonth: "Next month",
            days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            legend: {
                busy: "Busy",
                checkIn: "Check-in",
                checkOut: "Check-out",
                available: "Available"
            }
        }, strandaTypes: {
            oneBedroom: "with one bedroom",
            oneBedroomJacuzzi: "with one bedroom and jacuzzi",
            jacuzziTerrace: "with terrace jacuzzi",
            twoBedrooms: "with two bedrooms",
            deluxeJacuzzi: "Deluxe with jacuzzi",
            deluxeSaunaJacuzzi: "Deluxe with sauna & jacuzzi",
            apartment: "Apartment",
            studio: "Studio",
            suite: "Suite",
        }, strandaDescriptions: {
            genericDesc: "Our apartments are located in Giżycko, by the Stranda port in Stranda Residence apartment buildings, on the shore of Lake Kisajno (Tracz Bay). It offers a beautiful panoramic view of Lake Kisajno and the Great Masurian Lakes trail. The apartment is luxuriously finished and ensures high comfort of rest. On site, you can use the port's resources such as: tavern, concerts in the summer season, marina, water equipment rental, etc.",
            locationDesc: "The proximity to the center of Giżycko allows you to enjoy many tourist attractions, offers of many restaurants and pubs. The location of the facility also facilitates exploring Masuria in terms of nature, history and entertainment. Included parking space.",
            A103: "Apartment A103 Suite is located on the first floor of the building, has a large and spacious living room with a kitchenette and a sofa bed, a bedroom, a bathroom with a shower and a large terrace with furniture.",
            A104: "Apartment A104 Delux with a private jacuzzi on the terrace is located on the ground floor of building A. It consists of a spacious living room with a kitchenette and a sofa, a bedroom with one double bed, a bathroom with a shower, a terrace where there is a private jacuzzi.",
            A105: "Apartment A105 is a luxury unit with a jacuzzi, offering comfortable relaxation in a modern interior.",
            B102: "Apartment B102 located on the ground floor of building B has a spacious living room with a kitchenette and its own jacuzzi on the terrace.",
            B106: "Luxury apartment on the ground floor with two bedrooms and a large living room.",
            B202: "Unique apartment on the first floor with a private sauna and jacuzzi on the terrace.",
            C404: "Studio apartments are located in building C, they are accommodation with one double bed, a sofa bed for 2 people, a living room with a kitchenette, a bathroom with a shower and a terrace overlooking Tracz Bay and Stranda port.",
            A204: "Apartment A204 Suite is located on the first floor of building A. It has a large and spacious living room with a kitchenette, a fold-out sofa, a bedroom, a bathroom with a shower, and a covered terrace with a view of Lake Kisajno.",
            A205: "Apartment A205 Suite has a large and spacious living room with a kitchenette and a fold-out sofa, a bedroom, a bathroom with a shower, and a large covered terrace with furniture. It is located on the second floor of the building.",
            A302: "Apartment A302 Suite is located on the first floor of building A. It has a large and spacious living room with a kitchenette and a fold-out sofa, a bedroom, a bathroom with a shower, and a covered terrace with a view of Lake Kisajno.",
            A305: "Apartment A305 Suite is located on the third floor of the building, offering a beautiful view of Lake Kisajno. It has a large and spacious living room with a kitchenette and a fold-out sofa, a bedroom, a bathroom with a shower, and a large covered terrace with furniture.",
            A306: "Apartment A306 Suite has a large and spacious living room with a kitchenette and a fold-out sofa, two bedrooms, a bathroom with a shower, and a large covered terrace with furniture. It is located on the third floor of the building.",
            B103: "Apartment B103 Deluxe with a private jacuzzi on the terrace is located on the ground floor of building B. It consists of a spacious living room with a kitchenette and a sofa, a bedroom with one double bed, a bathroom with a shower, and a terrace where the private jacuzzi is located. All this with a beautiful view of Lake Kisajno, Tracz Bay, and Stranda port.",
            B201: "Apartment B201 Suite is located on the first floor of building B. It has a large and spacious living room with a kitchenette, two bedrooms, two bathrooms (one with a shower, the other with a bathtub), and a large terrace with a view of Tracz Bay and Lake Kisajno.",
            B304: "Apartment B304 with 1 bedroom is located in building B. In the bedroom, there is a double bed, a living room with a kitchenette and a fold-out sofa for 2 people, a bathroom with a shower, and a terrace with a beautiful view of Lake Kisajno.",
            B305: "Apartment B305 with 1 bedroom is located in building B. In the bedroom, there is a double bed, a living room with a kitchenette and a fold-out sofa for 2 people, a bathroom with a shower, and a terrace with a beautiful view of Lake Kisajno.",
            B401: "Apartment B401 Deluxe is located on the 3rd (top) floor of the building. It consists of a spacious living room with a kitchenette and a fold-out sofa, a bedroom, a bathroom with a shower, a balcony, and a large roof terrace. All this with a beautiful view of the lake.",
            B402: "Apartment B402 Suite is located on the third floor of the building. It has a large and spacious living room with a kitchenette and a fold-out sofa, a bedroom, a bathroom with a shower, a balcony, and a large roof terrace with a view of the lake.",
            B404: "Apartment B404 Suite is located on the third floor of the building. It has a large and spacious living room with a kitchenette and a fold-out sofa, a bedroom, a bathroom with a shower, a balcony, and a large roof terrace with a view of the lake.",
            A403: "Apartment A403 Suite is located on the top (3rd) floor of building A. It has a large and spacious living room with a kitchenette and a fold-out sofa, a bedroom, a bathroom with a shower, a lower terrace, and a roof terrace with a private jacuzzi overlooking Stranda port and Tracz Bay.",
            C301: "Apartment C301 Suite is located on the second floor of building C. It has a spacious living room with a kitchenette and a sofa, two bedrooms, a bathroom with a shower, and a terrace with a view of Tracz Bay and Stranda port.",
            C304: "Apartment C304 Studio is located on the second floor of building C. It features a sleeping area with a double bed, a fold-out 2-person sofa, a living room with a kitchenette, a bathroom with a shower, and a terrace with a view of Tracz Bay and Stranda port. C304 Studio (maximum capacity: 4 people).",
            C205: "Studio apartments are located in building C, providing accommodation with one double bed, a sofa bed for 2 people, a living room with a kitchenette, a bathroom with a shower, and a terrace overlooking Tracz Bay and Stranda marina.",
            C_1_sypialnia: "Apartment in building C with 1 bedroom, offering comfortable accommodation for up to 4 people.",
            C_Studio: "A studio in building C, an excellent place to relax with a view of Tracz Bay.",
            C_2_sypialnie: "A spacious apartment in building C with 2 bedrooms, ideal for families.",
        }, kisajnoPage: {
            title: "Kisajno Apartments",
            subtitle: "Port Neptun, Giżycko",
            introTitle: "Unique standard by the lake",
            description: "We offer a modern apartment of 55 m², located on the ground floor with direct access to the charms of Lake Kisajno. Ideal for families or groups of friends, it ensures comfortable rest in premium standard.",
            features: [
                "2 Separate bedrooms with large beds",
                "Living room with comfortable sofa and TV",
                "Full kitchen: dishwasher, microwave, fridge",
                "Air conditioning and fast WiFi"
            ],
            priceLabel: "Price from",
            priceValue: "500 PLN",
            priceUnit: "/ night",
            amenitiesTitle: "Amenities",
            bookingTitle: "Book your stay",
            bookingDesc: "Contact us directly to get the best offer and check availability on selected dates.",
            callAction: "Call",
            amenities: {
                view: "Lake view",
                ac: "Air conditioning",
                smartTv: "Smart TV",
                wifi: "WiFi",
                kitchen: "Full kitchen",
                dishwasher: "Dishwasher",
                parking: "Parking",
                port: "Port Neptun"
            }
        }, mikolajkiPage: {
            title: "Gigu Apartment Mikołajki",
            subtitle: "Mikołajki Center – Wolności Square",
            introTitle: "Comfortable apartment in the heart of Mikołajki",
            description: "A modern and comfortable apartment located in the very heart of Mikołajki, at Wolności Square – the perfect location for guests who want everything close by. The apartment is designed for up to 4 guests and features a cozy bedroom with a comfortable double bed, a living room with a sofa bed (additional sleeping space), a fully equipped kitchenette, and a modern bathroom.",
            priceLabel: "Price from",
            priceValue: "350 PLN",
            priceUnit: "/ night",
            amenitiesTitle: "Amenities",
            bookingTitle: "Book your stay",
            bookingDesc: "Contact us directly or make an instant online booking using the button below.",
            callAction: "Call",
            comfortTitle: "Comfort & Amenities",
            comfortDesc: "Bedroom with 180x200 bed, fast WiFi, living room with TV and sofa bed",
            kitchenTitle: "Kitchen & Bathroom",
            kitchenDesc: "Kitchenette with dishwasher, modern bathroom with shower, starter kit (coffee, tea)",
            locationTitle: "Surroundings & Location",
            locationDesc: "Courtyard view, strict center of Mikołajki at Wolności Square, close to the lake",
            collapseGallery: "Collapse gallery",
            expandGallery: "See more photos",
            bookBtn: "BOOK NOW",
            amenities: {
                view: "Courtyard view",
                ac: "Air conditioning",
                smartTv: "Smart TV",
                wifi: "Free WiFi",
                kitchen: "Kitchenette",
                dishwasher: "Dishwasher",
                parking: "City center",
                port: "Close to the lake"
            }
        }, fuledaPage: {
            title: "Fuleda Apartments",
            subtitle: "Silence, peace, nature by Lake Dobskie",
            introTitle: "Oasis of peace in the quiet zone",
            description: "Fuleda location is a proposal for those who want to completely cut off from the hustle and bustle of civilization. Located by Lake Dobskie, covered by the quiet zone, it offers conditions for true relaxation surrounded by a nature reserve.",
            groundFloorTitle: "Ground Floor Apartment",
            groundFloorDesc: "Two bedrooms with air conditioning (including one with a fireplace) and a huge terrace with direct access to the lake.",
            firstFloorTitle: "First Floor Apartment",
            firstFloorDesc: "Two bedrooms with air conditioning, stylishly finished interior with a view of the reserve and full amenities.",
            amenitiesTitle: "Premium Amenities",
            amenities: {
                ac: "Air conditioning",
                fireplace: "Fireplace",
                beach: "Private beach",
                bonfire: "Bonfire place",
                wifi: "WiFi",
                kitchen: "Full kitchen",
                washer: "Washing machine",
                pier: "Pier access"
            }
        }, contactForm: {
            title: "Write to us",
            subtitle: "Have questions? Want to book a stay? Use the form below.",
            name: "Full Name",
            email: "Email Address",
            phone: "Phone Number",
            subject: "Subject",
            message: "Message",
            send: "Send Message",
            sending: "Sending...",
            success: "Message sent successfully!",
            error: "An error occurred while sending the message. Please try again."
        }, cookieConsent: {
            title: "Cookies & Privacy 🍪",
            description: "We care about your privacy. You can accept all cookies or customize your preferences. Read more in our",
            privacyLink: "Privacy Policy",
            acceptAll: "Accept All",
            customize: "Customize",
            decline: "Decline",
            settingsTitle: "Cookie Settings",
            back: "Back",
            necessary: "Necessary",
            necessaryDesc: "Required for the website to function.",
            analytics: "Analytics",
            analyticsDesc: "Help us improve the website.",
            marketing: "Marketing",
            marketingDesc: "Personalized advertisements.",
            save: "Save Settings"
        }, privacyPolicy: {
            title: "Privacy and Cookie Policy",
            intro: "We value your privacy, please read our privacy policy.",
            content: "This Cookie Policy applies to all mazury.holiday websites. By using our sites, you agree to the use of cookies in accordance with this policy. We use cookies to make our sites work faster, easier to use, and to personalize content and ads. You can manage your cookie settings in your browser at any time.",
            sections: [
                {
                    title: "What are cookies?",
                    content: "Cookies are small text information sent by a web server and saved on the user's side (usually on the hard drive). Default cookie parameters allow only the server that created them to read the information contained in them. Cookies are most often used for counters, polls, online stores, pages requiring login, advertisements, and to monitor visitor activity."
                },
                {
                    title: "What do we use cookies for?",
                    content: "mazury.holiday websites use cookies for various purposes:",
                    list: [
                        "to make our websites work faster and be easier to use",
                        "to better match the content and advertisements to your expectations and interests",
                        "to collect anonymous, aggregated statistics to help us understand how people use our websites"
                    ]
                },
                {
                    content: "Using cookies in the way described above, we never identify the identity of users based on the information stored in cookies."
                },
                {
                    title: "Retention period",
                    content: "We use two types of cookies – <strong>session</strong> and <strong>permanent</strong>. The former remain on your device only while using our websites. Permanent cookies remain on your device as long as they have a set lifetime or until you delete them."
                },
                {
                    title: "Third-party cookies",
                    content: "While using our websites, you may receive cookies from participating third parties such as Facebook, Google, and from companies conducting advertising campaigns. More information about these cookies can be found on the websites of individual third parties."
                },
                {
                    title: "How to delete or change cookie settings?",
                    content: "Most web browsers are initially set to automatically accept cookies. However, you can change your browser settings so that cookies are blocked – in whole or in part, e.g. only from third parties, or to receive a message each time cookies are sent to your device.<br/><br/>Remember, however, that if you block the cookies we use, it may negatively affect the comfort of using mazury.holiday Pages, for example you may not be able to visit certain areas of mazury.holiday Pages or not receive personalized information while browsing them. You will also prevent us from collecting anonymous information about the use of our pages for the purpose of constant improvement of the content of mazury.holiday Pages and services."
                }
            ],
            usefulLinks: "Useful links",
            linksDescription: "Users should read the privacy policy of these companies to learn about their cookie policies:",
            manageCookies: "To manage cookie settings, select the web browser you use from the list below and follow the instructions:",
            mobileDevices: "Mobile devices:"
        }, pokojeFuledaPage: {
            heroTitle: "Pokoje Fuleda",
            price: "from 375 PLN/night",
            description: "We offer two rooms for rent: one with a double bed, the other with two single beds, a bathroom with a shower and a toilet. There is a covered terrace next to the rooms. In a separate building located 10m from the rooms, there is a kitchen with an additional toilet. Everything is located on the Fuledzki Róg peninsula on the shores of Lake Dobskie, with a quiet zone on the fenced grounds of the Fuleda Farm. A wonderful place for people who appreciate wild nature, peace, and quiet. Away from the city.\n\nA terraced building located on private allotments by Lake Dobskie. In the main building for private use there are two rooms, a bathroom with a shower and a toilet, and a covered terrace. Opposite the terrace, at a distance of about 10m, there is a building with a kitchen and a second toilet (also for private use). On the other side of the building, at a distance of about 20m, there is a private path to the lake, where there is a viewing terrace with a grill, a place for a bonfire, and a rowing boat.\n\nRecommended for families with children, anglers, mushroom pickers, and nature lovers.\n\nEquipment: Wifi, TV, washing machine, iron, ironing board, hair dryer, vacuum cleaner, fan, microwave, toaster, kettle, gas stove, fridge, coffee machine, dishes, pots, cutlery, cups.\nBedding and towels provided upon check-in.\n\nRoom 1: bed for 2 people, access to the terrace, vacuum cleaner, hair dryer, iron, ironing board.\nRoom 2: two single beds, TV, access to the terrace.\nBathroom: shower, washing machine, hair dryer, hair straightener, towels, bathrobes, cosmetics.\nKitchen (in a building 10m away): fridge, dishwasher, microwave, toaster, set of dishes and cutlery.\nTerrace: spacious terrace, private path to the lake, place for a grill and bonfire.",
            amenitiesTitle: "Amenities",
            room1Title: "Room 1 (Double)",
            room1Items: ["Double bed", "Terrace access", "Vacuum cleaner", "Hair dryer", "Iron", "Ironing board"],
            room2Title: "Room 2 (Twin)",
            room2Items: ["Two single beds", "TV", "Terrace access"],
            kitchenTitle: "Kitchen",
            kitchenNote: "(separate building 10m)",
            kitchenItems: ["Fridge", "Dishwasher", "Microwave", "Toaster", "Cutlery and dishes", "Gas stove", "Coffee and tea"],
            bathroomTitle: "Bathroom",
            bathroomItems: ["Shower", "Washing machine", "Hair dryer", "Straightener", "Towels", "Bathrobes", "Toiletries"],
            terraceTitle: "Terrace & Surroundings",
            terraceItems: ["Spacious terrace", "Private lake access", "Grill and bonfire place", "Rowboat", "Viewing deck"],
            bookingTitle: "Booking",
            bookingDesc: "Check availability and book your stay",
            bookBtn: "BOOK NOW",
            callBtn: "Call: 730 067 027",
            bestPrice: "Best prices - book directly",
            galleryTitle: "Gallery",
            expandGallery: "See more photos",
            collapseGallery: "Collapse gallery"
        }, charterPage: {
            heroTitle: "Stillo 30 VIP",
            heroSubtitle: "Stillo 30 VIP Motor Yacht",
            mainTitle: "Your luxury home on the water",
            desc1: "<strong>Stillo 30 VIP</strong> is the successor to the proven and valued Futura 870. It is a unit designed to meet the expectations of the most demanding shipowners in the displacement and semi-planing Houseboat sector. Nautical qualities, proven in the award-winning predecessor, combined with revolutionary practicality.",
            desc2: "On board you will find up to <strong>6 sleeping places</strong>, a full-size bathroom and a living room with panoramic windows and a high (approx. 190 cm) ceiling, which gives the feeling of a real apartment on the water. Wide side decks lead to the bow sunbathing terrace, and the low bathing platform at the stern facilitates descent into the water and mooring at the pier.",
            desc3: "Basic advantages include a powerful 52HP stationary engine, <strong>two thrusters</strong>, electric anchor windlass, thermoplastic foam mattresses, unlimited WiFi, TV with Smart TV Max, Nespresso coffee machine and many others...",
            desc4: "What is important for charter: the unit maintains a speed below 15 km/h, so in Poland you can steer it <strong>without a license</strong> – after a short training you pick up the yacht and set off on the route. Stillo 30 therefore offers luxury, comfort and the fullness of Masurian adventure, and at the same time is an ideal choice for families and groups of friends looking for their first experience with their own 'home on the water'.",
            vipAmenitiesTitle: "VIP Amenities",
            navAndDriveTitle: "Navigation and Drive",
            navAndDriveDesc: "Thrusters (Bow/Stern), Tablet with lake maps, 52HP Engine",
            vipStandardTitle: "VIP Standard",
            vipStandardDesc: "Air Conditioning & Heating, Unlimited WiFi, Smart TV, Nespresso Machine",
            safetyTitle: "Safety",
            safetyDesc: "Full rescue equipment, 230V Non-Stop Installation, Electric anchor windlass",
            galleryTitle: "Photo Gallery",
            expandGallery: "See more photos",
            collapseGallery: "Collapse gallery",
            bookTermTitle: "Book a Date",
            bookTermDesc: "Check availability in our online calendar and book your dream vacation today.",
            bookBtn: "BOOK IT",
            techSpecsTitle: "Technical Data",
            specs: {
                length: "Length",
                width: "Width",
                draft: "Draft",
                engine: "Engine",
                cabins: "Cabins",
                crew: "Crew"
            },
            equipmentTitle: "Equipment",
            equipmentList: [
                "Bow and stern thrusters",
                "Cockpit table",
                "SMART TV (Smart TV, YouTube)",
                "WiFi (unlimited), Radio/Bluetooth",
                "12V (4 pcs) and 230V (4 pcs) sockets",
                "Webasto heating",
                "Hot water (30L Boiler)",
                "Marine toilet with shower",
                "Ice maker, Toaster, Kettle",
                "Nespresso machine (+capsules)",
                "Full kitchen equipment",
                "Electric anchor windlass",
                "Echo sounder, Navigation - Plotter"
            ]
        }, cooperationPage: {
            "title": "Cooperation",
            "subtitle": "Your property in the best hands in Masuria",
            "services": {
                "title": "Professional Property Management",
                "desc": "Looking for a trusted partner to take care of your property? Mazury.Holiday is a team of experts that will take all the responsibilities associated with short-term rental off your shoulders. We increase owners' profits while maintaining the highest standard of guest service."
            },
            "marketing": {
                "title": "Premium Marketing",
                "desc": "Your property will be placed in top positions on portals such as Booking.com, Airbnb and our proprietary platform Mazury.Holiday. We perform photo sessions and drone videos."
            },
            "guests": {
                "title": "Maintenance-Free Rental",
                "desc": "We take care of the entire cycle: from booking and payments, through professional greeting of guests, to support during their stay 24/7."
            },
            "maintenance": {
                "title": "5-Star Standard",
                "desc": "Our cleaning and technical team takes care of every detail. Your property is always sparkling and in perfect technical condition before the arrival of each guest."
            },
            "whyUs": {
                "title": "Why work with us?",
                "point1": "Local experience and knowledge of the Masurian market",
                "point2": "Transparent billing system and owner panel",
                "point3": "Constant technical and maintenance care",
                "point4": "Price optimization (Revenue Management)"
            }
        }, coopExtra: {
            "heroTitle": "B2B Cooperation",
            "heroSubtitle": "YOUR PROPERTY IN THE BEST HANDS IN MASURIA",
            "securityTitle": "Security",
            "securityDesc": "Guest verification and damage insurance guarantee the safety of your investment.",
            "readyTitle": "Ready for higher profits?",
            "readyDesc": "Contact us and see how much your apartment or house in Masuria can earn.",
            "letsTalk": "Let's talk"
        }, coopModels: {
            "title": "Cooperation models",
            "full_title": "Comprehensive Management",
            "full_desc": "Includes marketing, guest service, cleaning, minor repairs and price management. Perfect for investors who value their time.",
            "marketing_title": "Marketing and Reservations Only",
            "marketing_desc": "We take care of acquiring guests and handling online reservations, and you take care of greeting guests and cleaning."
        }, coopSteps: {
            "title": "How does the cooperation look like?",
            "step1_title": "Audit and valuation",
            "step1_desc": "We visit your property, check its potential and propose an optimal pricing strategy.",
            "step2_title": "Offer preparation",
            "step2_desc": "We create a professional description, organize a photo session and implement the property on booking platforms.",
            "step3_title": "Start of sales",
            "step3_desc": "We launch marketing campaigns and open the calendar for the first reservations.",
            "step4_title": "Management and profits",
            "step4_desc": "We take over full guest service and cleaning, and you receive a transparent report and profits every month."
        }, fuledaApartment: { "parter": { "description": "Apartment with two bedrooms located on the ground floor is a beautifully and stylishly finished property. Situated on Lake Dobskie, which is a quiet zone, it guarantees relaxation in peace and quiet, surrounded by beautiful, pristine Masurian nature.\n\nOur apartments are located in Fuleda on a peninsula on the shore of the lake. It offers a beautiful panoramic view of Lake Dobskie, Cormorant Island, and Helena Island. The apartment is luxuriously finished and ensures a high level of comfort. On site, you can use private access to the water, a barbecue, and a bonfire place. Giżycko (about 12km away) allows you to enjoy many tourist attractions, restaurants, and pubs. The location of the property also makes it easy to explore Masuria in terms of nature and history.\n\nThe Fuleda Apartment (ground floor) with a direct view of Lake Dobskie is located on the ground floor of the building, has two bedrooms, a kitchenette, a bathroom with a shower, and two covered terraces: one at the front of the building with a direct view of Lake Dobskie, the other at the back of the building.\n\nLocation: ground floor\nMaximum number of people: 2+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, fireplace, fold-out 2-person sofa, table, chairs, vacuum cleaner, iron, ironing board, air conditioning, clothes dryer, wardrobe\nBedroom 2 equipment: TV, 160x200 bed, two bedside tables, set of bedding, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, hair straightener, towels, shower gel, soap, body lotion\nFront terrace: armchairs, table, cocoon chair\nBack terrace: terrace furniture set, charcoal grill\nPrivate path to the lake with a bonfire and barbecue area, hammock, two deckchairs\nOther: internet, wifi\nThe apartment is fully equipped, heated, and provides a comfortable stay all year round.\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż where the Wolf's Lair - Hitler's headquarters is located. Nearby forests, meadows, cycling routes, playgrounds. The nearest shop is about 3km away." }, "pietro": { "description": "A beautifully finished apartment with two bedrooms and a mezzanine, located on the upper floor with a breathtaking view of Lake Dobskie. This peaceful, nature-surrounded location is perfect for complete relaxation.\n\nThe apartment offers a spacious living room with a kitchenette, a bathroom with a shower, and two bedrooms. The master bedroom features a 160x200 bed, while the second bedroom has two single beds. There is also an additional sleeping area on the mezzanine. The apartment is equipped with air conditioning, ensuring comfort even on hot days.\n\nLocation: upper floor\nMaximum number of people: 4+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, 160x200 bed, wardrobe, air conditioning\nBedroom 2 equipment: two single beds, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, towels, cosmetics\nTerrace: comfortable terrace furniture set with an amazing view of the lake.\nPrivate path to the lake with a bonfire and barbecue area, hammock.\nOther: internet, wifi\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż." } }, descKeys: {
            "location": "Location",
            "maxGuests": "Maximum number of guests",
            "kitchen": "Kitchen equipment",
            "bedroom1": "Bedroom 1 equipment",
            "bedroom2": "Bedroom 2 equipment",
            "bedroom3": "Bedroom 3 equipment",
            "bathroom": "Bathroom equipment",
            "living": "Living room equipment",
            "terraceFront": "Front terrace",
            "terraceBack": "Back terrace",
            "terrace": "Terrace",
            "balcony": "Balcony",
            "others": "Others",
            "included": "Included",
            "additional": "Additional information",
            "bedroom": "Bedroom equipment",
            "livingRoom": "Living room"
        } }),
    de: __assign(__assign({}, translationsLegal_1.translationsLegal.de), { "gdprPage": {
            "title": "Privacy Policy Clause (GDPR)",
            "intro": "According to Article 13 of the General Data Protection Regulation of the European Union as of April 27, 2016 (Official Journal of the EU L 119 of May 4, 2016), I inform you that:",
            "list": [
                "<strong>The data controller for your personal data is:</strong> RAD'LIGHT, Myśliwska 3, 11-500 Giżycko.",
                "<strong>Kontakt mit dem Datenschutzbeauftragten:</strong> rezervacje@mazury.holiday",
                "Die personenbezogenen Daten werden gemäß Art. 6 Abs. 1 lit. a des allgemeinen Datenschutzgesetzes vom 27. April 2016 verarbeitet, um die Dienstleistung durchzuführen.",
                "Die personenbezogenen Daten werden bis zum Widerruf der Einwilligung gespeichert.",
                "Sie haben das Recht, von dem Administrator Anfrage nach Zugriff auf Ihre personenbezogenen Daten, Anfrage zur Berichtigung, Löschung oder Einschränkung der Verarbeitung, Widerruf der Einwilligung sowie die Übertragung der Daten zu erteilen.",
                "Die Bereitstellung Ihrer personenbezogenen Daten ist freiwillig. Allerdings kann das Nichtbereitstellen von Daten dazu führen, dass es uns unmöglich macht, Sie im Zusammenhang mit der Durchführung der Dienstleistung zu kontaktieren. Gleichzeitig stimme ich gemäß Art. 6 Abs. 1 lit. a des allgemeinen Datenschutzgesetzes vom 27. April 2016 meine Einwilligung zur Verarbeitung meiner personenbezogenen Daten für telefonische oder e-mail-basierte Kontaktaufnahme zu."
            ]
        }, "contactExtra": {
            "callUs": "Rufen Sie uns an",
            "writeUs": "Schreiben Sie uns",
            "mapLabel": "Ortung:"
        }, "coopExtra": {
            "heroTitle": "B2B-Partnerschaft",
            "heroSubtitle": "IHR OBJEKT IN DEN BESTEN HANDELN AM MAZURACH",
            "securityTitle": "Sicherheit",
            "securityDesc": "Die Überprüfung der Gäste sowie die Versicherung im Falle von Schäden garantieren die Sicherheit Ihrer Investition.",
            "readyTitle": "Bereit für höhere Gewinne?",
            "readyDesc": "Kontaktieren Sie uns und stellen Sie fest, wie viel Ihr Apartment oder Haus auf den Mazurach verdienen kann.",
            "letsTalk": "Lassen Sie uns sprechen"
        }, "amenityNames": {
            "Klimatyzacja": "Klimaanlage",
            "WiFi": "WiFi",
            "Smart TV": "Smart TV",
            "Prysznic": "Waschbecken",
            "Ręczniki": "Handtücher",
            "Zmywarka": "Wäscheautomat",
            "Płyta indukcyjna": "Induktionstherme",
            "Pościel": "Bettwäsche",
            "Łóżka małżeńskie i pojedyncze": "Zweistöckige Bettwäsche und Einzelbettwäsche",
            "Prywatny taras z grillem": "Privater Balkon mit Grill",
            "Miejsce na ognisko": "Feuerstelle",
            "Dostęp do jeziora": "Zugang zum See",
            "Miejsce parkingowe": "Parkplatz",
            "W pełni wyposażony aneks kuchenny": "Voll ausgestatteter Küchenanhang",
            "Aneks kuchenny (płyta, lodówka, zmywarka)": "Küchenanhang (Herde, Kühlschrank, Wäscheautomat)",
            "Ekspres do kawy": "Kaffeeexpress",
            "Taras z meblami wypoczynkowymi": "Terrasse mit Komfortmöbeln",
            "Prywatne Jacuzzi": "Privater Jacuzzi",
            "Balkon z meblami wypoczynkowymi": "Balkon mit Komfortmöbeln"
        }, "nav": {
            "about": "Über uns",
            "apartments": "Zimmer",
            "cottages": "Häuschen",
            "charter": "Charter",
            "concerts": "Konzerte",
            "port": "Port",
            "attractions": "Aktivitäten",
            "cooperation": "Partnerschaften",
            "contact": "Kontakt",
            "rooms": " Zimmer",
            "bookBtn": "Reservieren",
            "language": "Sprache",
            "back": "Zurück",
            "euProjects": "EU-Projekte"
        }, "hero": {
            "title": "Urlaubsreisen auf den Mazuren",
            "subtitle": "ENTFÜHRE UNBEWUSSTE MEISTERSTUNDEN",
            "typewriterDesc": "Unsere Angebote entdecken",
            "apartmentsBtn": "Unsere Zimmer",
            "charterBtn": "730 067 027",
            "bookOnlineBtn": "Online buchen",
            "scrollDown": "Scroll down"
        }, "intro": {
            "tag": "Mazury.Holiday",
            "title": "Willkommen in der Welt",
            "titleHighlight": "der großen Seen",
            "p1": "Wir laden Sie ein, die Magie der Mazuren in unseren luxuriösen Zimmern, gemütlichen Häuschen und auf dem Schiff zu entdecken.",
            "p2": "Genieße Ruhe in Gdynia, wildem Natürliche in Fülsen oder Entspannung in Skorupi. Dein gewünschter Urlaub beginnt hier."
        }, "luxuryBenefits": {
            "tag": "Vorteile unserer Angebote",
            "title": "Luxus verbirgt sich in den Details",
            "quality": {
                "title": "Hohe Qualität der Ausstattung",
                "desc": "In jedem unserer Apartments haben wir versorgt, dass alles gut und angenehm ist. Wir hoffen, dass Sie alle verborgenen und sichtbaren Details bemerken werden"
            },
            "views": {
                "title": "Sichten auf das See",
                "desc": "Am schönen Sonntagen von Morgen bis Abend - Filme auf VOD können die schönen Sichten auf dem See Kisajno oder Dobskie ersetzen"
            },
            "comfort": {
                "title": "Schlaf in komfortablen Umständen",
                "desc": "Das Schlafen ist notwendig für den Ruhe und beeinflusst die Qualität Ihres Aufenthalts bei uns. Alle Betten sind mit sehr guten und angenehmen Matratzen ausgestattet"
            },
            "wifi": {
                "title": "Kostenloser WLAN",
                "desc": "Wir haben auf dem Gelände unserer Apartments eine WLAN-Verbindung bereitgestellt. Sie ist nicht notwendig während des Ruhe, aber hilft z.B. bei der Fernarbeit"
            },
            "gifts": {
                "title": "Startpaket",
                "desc": "Für jeden unserer Gäste haben wir ein kleines Geschenk vorbereitet, das Teil unserer Urlaubsangebote in unseren Apartments ist"
            },
            "flexible": {
                "title": "Flexibles Reservieren",
                "desc": "Wir verstehen, dass Pläne ändern können. Daher ermöglichen wir bei unvorhergesehenen Situationen die Änderung der Reise-Datum."
            }
        }, "apartments": {
            "title": "Unsere Apartments",
            "description": "Wählen Sie das ideale Ort für Ihren Urlauf.",
            "details": "Details",
            "pricePrefix": "von",
            "night": "Nacht",
            "people": "maximale Anzahl von Personen",
            "bookBtn": "RESERVEIEN SIE ES",
            "bookingTitle": "Reservieren Sie Ihren Aufenthalt",
            "bookingDesc": "Wählen Sie die Datum und überprüfen Sie Verfügbarkeit.",
            "items": {
                "stranda": {
                    features: { studio: "Studio", oneBedroom: "1 Schlafzimmer", twoBedrooms: "2 Schlafzimmer", jacuzzi: "Whirlpool", sauna: "Sauna" },
                    mapLabels: { parking: "PARKPLATZ", playground: "SPIELPLATZ", sauna: "SAUNA", beach: "STRAND", rentals: "VERLEIH", beachbar: "STRANDBAR", tavern: "TAVERNE", shop: "GESCHÄFT" },
                    mapTitle: "Gebäudestandorte",
                    filters: { jacuzzi: "Whirlpool", size: "Personenanzahl", sizeAny: "Beliebig", size4: "Max 4 Personen", size6: "Max 6 Personen", floor: "Etage", floorAny: "Beliebig", floorParter: "Erdgeschoss", floorPietro: "Obergeschoss" },
                    "title": "Apartments Strand Residence",
                    "location": "Giżycko, See Kisajno",
                    "description": "Die Apartments befinden sich am Strandport Strand im Rahmen des Apartmentkomplexes Strand Residence..."
                },
                "kisajno": {
                    "title": "Apartments Kisajno",
                    "location": "Giżycko, See Kisajno",
                    "description": "Luxus an der Küste von See Kisajno."
                },
                "fuleda": {
                    "title": "Apartments Fuleda",
                    "location": "Fuleda, das Dobskische See",
                    "description": "Ein Ruheparadies weit vom Stadtzentrum entfernt."
                },
                "domkiSkorupki": {
                    "title": "Hauswesen Skorupki",
                    "location": "Skorupki, das Tałty See",
                    "description": "Luxuriöse Häuser im Herzen der Mazurischen Natur."
                },
                "pokojeFuleda": {
                    "title": "Zimmer von Fuleda",
                    "location": "Fuleda, das Dobskische See",
                    "description": "Wohltuende Zimmer mit Aussicht auf den Ruhesee in der Ruhezone."
                },
                "mikolajki": {
                    "title": "Mikołajki Apartment",
                    "location": "Mikołajki, das Mikołajkische See",
                    "description": "Neuester Apartment im Herzen von Mikołajek."
                }
            }
        }, "cottagesAndRooms": {
            "title": "Unsere Häuser und Zimmer",
            "description": "Denken Sie sich die Nähe der Natur in komfortablen Bedingungen."
        }, "charter": {
            "tag": "Ohne Führerschein",
            "title": "Motorbootcharter",
            "description": "Das Motorboot Stillo 30 ist ein Einrichtung, die Sie ohne Führerschein fahren können.",
            "model": "Stillo 30 (2020)",
            "cabins": "3 Geschlossene Cabine",
            "checkBtn": "Verfügbarkeit prüfen",
            "premiumFleet": "Premium-Flotte",
            "feature1": "Ohne Führerschein",
            "feature2": "Jahr 2020",
            "feature3": "Luxuriöse Ausstattung",
            "detailsBtn": "Details ansehen",
            "thrusters": "Sauerstoffstrahlen",
            "heating": "Heizung",
            "modelVip": "Stillo 30 VIP",
            "boatType": "Luxuriöses Houseboat ohne Führerschein"
        }, "stranda": {
            "subtitle": "Wir laden Sie zu luxuriösen Apartments in Gdynia am Kisajno See ein.",
            "description": "Die Apartments befinden sich neben dem Strandport auf der Grundstücke des Apartmentkomplexes Stranda Residence in Gdynia. Die Nähe des Sees und der Portangebote (Wassersportsleihgut, Taverne, im Sommer Konzerte von Szantow-Rock), sowie das Stadtzentrum Gdynia bietet viele Formen aktiver Ruhe mit dem Großmazedonischen Seepfad.",
            "building": "Gebäude",
            "apartment": "Wohnung",
            "filters": {
                "jacuzzi": "Jacuzzi",
                "size": "Anzahl der Personen",
                "sizeAny": "Beliebig",
                "size4": "Max 4 Personen",
                "size6": "Max 6 Personen",
                "floor": "Etage",
                "floorAny": "Beliebig",
                "floorParter": "Erstgeschoss",
                "floorPietro": "Büro"
            },
            "mapTitle": "Gebäudestandorte",
            "mapLabels": { "parking": "PARKPLATZ", "playground": "SPIELPLATZ", "sauna": "SAUNA", "beach": "STRAND", "rentals": "VERLEIH", "beachbar": "STRANDBAR", "tavern": "TAVERNE", "shop": "GESCHÄFT" },
            "features": { "studio": "Studio", "bedroom1": "1 Schlafzimmer", "bedroom2": "2 Schlafzimmer", "jacuzzi": "Jacuzzi", "sauna": "Sauna" },
            "units": {
                "C404": {
                    "title": "Wohnung C404 Typ Studio",
                    "descriptionPart1": "Wohnungen des Typs Studio befinden sich im Gebäude C, sind dies ein Schlafraum mit einem doppelten Bett, einer ausbreitbaren Couch für 2 Personen, einem Wohnzimmer mit einer Küchenanlage, einer Badewanne mit Dusche und einem Balkon mit Aussicht auf den Strand und die Marinenhafen.",
                    "descriptionPart2": "Für maximal 4 Personen geeignet. Die Wohnung ist luxuriös eingerichtet und bietet einen hohen Komfort während der Ruhezeit.",
                    "descriptionPart3": "Auf dem Ort können Sie auf Ressourcen des Hafens wie: Taverne, Sommerkonzerte, Marina, Wassersportverleih usw. zugreifen."
                },
                "A103": {
                    "title": "Wohnung A103 Suite",
                    "descriptionPart1": "Die Wohnung A103 Suite befindet sich auf der ersten Etage des Gebäudes und hat einen großen und luftigen Wohnraum mit einer Küchenanlage und einer ausbreitbaren Couch, ein Schlafzimmer, eine Badewanne mit Dusche und einen großen Balkon mit Möbeln.",
                    "descriptionPart2": "Bietet komfortable Unterkünfte für Familien und Freunde.",
                    "descriptionPart3": "Die Nähe des Hafens und des Sees macht dies die perfekte Basis für Urlaubsreisen."
                },
                "A104": {
                    "title": "Wohnung A104 Delux mit Jacuzzi",
                    "descriptionPart1": "Die Wohnung A104 Delux mit privatem Jacuzzi auf dem Balkon befindet sich auf dem Erstgeschoss des Gebäudes A.",
                    "descriptionPart2": "Besteht aus einem großen und luftigen Wohnraum mit einer Küchenanlage und einer Couch, einem Schlafzimmer mit einem doppelten Bett, einer Badewanne mit Dusche und einem Balkon mit privatem Jacuzzi.",
                    "descriptionPart3": "Gesammtansicht des Sees Kisajno. Die Wohnung befindet sich am höchsten, was zu einzigartigen Aussichten führt."
                }
            }
        }, "details": {
            "about": "Über die Wohnung",
            "amenities": "Funktionen",
            "booking": "Reservierung",
            "checkAvailability": "Verfügbarkeit überprüfen und buchen.",
            "callBtn": "Anrufen",
            "lowPrice": "Gewährleistung der niedrigsten Preisgestaltung.",
            "priceFrom": "Preis ab",
            "guests": "Max. Anzahl der Personen",
            "backToList": "Zurück",
            "descriptionPart1": "Alle angebotenen Apartments sind luxuriös eingerichtet und bieten einen sehr großen Komfort für Ihren Aufenthalt.",
            "descriptionPart2": "Sie haben einen Salon mit TV und einer Küchenanlage, eine oder zwei Schlafzimmer mit TV, ein Bad mit Dusche, WLAN-Zugang, einen Balkon mit ausgeschlagenen Möbeln mit Blick auf das See, ein komfortables Bett sowie eine Reihe zusätzlicher Einrichtungen, die Ihren Aufenthalt erleichtern und angenehmen machen.",
            "descriptionPart3": "Zusätzlich haben die Apartments am oberen Stockwerk einen Ausblick auf den oberen Balkon mit Jacuzzi.",
            "gallery": "Galerie",
            "collapseGallery": "Verkleinere Galerie",
            "seeMorePhotos": "Mehr Fotos ansehen",
            "needHelp": "Brauchen Sie Hilfe?",
            "availability": " Verfügbarkeit",
            "items": {
                "view": "Seeblick",
                "ac": "Klimaanlage",
                "terrace": "Balkon mit Möbeln",
                "kitchen": "Kochraum (Herd, Kühlschrank, Waschmaschine)",
                "tv": "Smart TV (Salon + Schlafzimmer)",
                "wifi": "WLAN",
                "parking": "Parkplatz",
                "sauna": "Zugang zur Sauna",
                "iron": "Eisenbrenner und Tisch",
                "hairDryer": "Haarsträhnenfeiger",
                "coffee": "Kaffee-/Teepreparaturset",
                "roomSalon": "Salon",
                "roomKitchen": " Küche",
                "roomBedroom": "Schlafzimmer",
                "roomBathroom": "Badezimmer",
                "salonFeatures": "TV, Couch 2 Personen, Tisch, Stühle, Klimaanlage, WLAN",
                "kitchenFeatures": "Induktiver Herd, Kühlschrank, Waschmaschine, Mikrowelle, Komplette Tablett und Servietten",
                "bedroomFeatures": "TV, Bett 180x200, Bettwäsche-Paket, Haarspülmaschine, Pflegebrett, Eisenbrenner, Klimaanlage",
                "bathroomFeatures": "Dusche, Haarsträhnenfeiger, Schlafmatten, Körperpflegemittel",
                "terraceAndOther": "Balkon und weiteres"
            }
        }, "footer": {
            "brandDesc": "Die einzigartige und unveränderliche Zeit auf den Mazuren.",
            "navTitle": "Navigieren",
            "contactTitle": "Kontakt",
            "followTitle": "Folgen Sie uns",
            "rights": "Alle Rechte vorbehalten.",
            "linksTitle": "Links"
        }, "skorupki": {
            amenitiesTitle: "Ausstattung",
            aboutTitle: "Über die Ferienhäuser",
            "title": "Hauswürfel Skorupki",
            "subtitle": "Ihre luxuriöse Ferienwohnung im Herzen der Mazuren",
            "introTitle": "Kameraler Dorf auf den Mazuren",
            "descriptionPart1": "Die Hauswürfel Skorupki ist ein kameraler Dorf mit 10 eleganten Ferienhäusern in Skorupki, einer der ruhigsten und grünen Teile der Mazuren.",
            "descriptionPart2": "Dies ist eine Anfrage für Gäste, die Raum, Privatsphäre und einen hohen Standard schätzen, während sie gleichzeitig na Natur bleiben möchten. Die Häuser sind etwa 350 Meter vom See entfernt und bieten den Gästen ein ausgeschlossenes, privates Recreationsgebiet am Wasser.",
            "descriptionPart3": "🏡 Komfort und Eleganz für bis zu 6 Personen. Jedes Haus wurde so gestaltet, um maximalen Komfort im Urlaub zu gewährleisten: zwei unabhängige Schlafzimmer auf dem ersten Stock, a Salon mit einem platzierbaren Sofa auf dem Erdgeschoss, ein modernes, voll ausgestattetes Küchenanhang, eine elegante Badewanne mit Dusche, ein gepflastertes Balkon – ideale Stelle für einen morgendlichen Kaffee oder abends einen Weinschmauch. Sorgfältig gewählte Materialien, klare Innenausstattung und ein funktionaler Raumplan unterstützen sowohl kurze Aufenthalte als auch längere Ferien.",
            "descriptionPart4": "🌊 Privates Seegebiet. Gäste unserer Häuser haben Zugang zu einem dedizierten Recreationsbereich am Wasser, wo sie erwarten: ein klimatisches Lagerfeuerplatz, Spielplätze für Kinder, ein sorgfältig in die natürliche Umgebung eingearbeiteter Platz, Raum zur Entspannung, Ruhe und friedlichen Zeitvertreib am Wasser. Dies ist ideale Platzierung für abendliche Abende im Sommer und Momente der Entspannung ferne von dem täglichen Stress.",
            "externalAmenities": "🌲 Ruhe, Raum und Natur. Die Lage des Dorfes gewährleistet: eine kameralische Atmosphäre und Stille, Nähe des Sees und der mazurischen Wälder, ideale Bedingungen für Spaziergänge, Fahrräder und Ferien auf frischem Luft.",
            "areaTitle": "Warum die Hauswürfel Skorupki?",
            "areaDesc": "✔ Nur 10 Häuser – Kameralität und Privatsphäre. \n✔ 350 m vom See entfernt + privates Seegebiet. \n✔ Eleganter Standard und sorgfältig gestaltete Innenausstattung. \n✔ Ideale Stelle für einen friedlichen, hochwertigen Urlaub. \n✔ Servicestandard www.Mazury.Holiday",
            "amenitiesTitle": "Komfortable Einrichtungen in den Häusern",
            "galleryTitle": "Galerie",
            "expandGallery": "Mehr Fotos ansehen",
            "collapseGallery": "Galerie einklappen",
            "ctaTitle": "Die Magie von Skorupek entdecken",
            "ctaDesc": "Eine Ferienwohnung zu reservieren ist der erste Schritt zu unvergesslichen Urlauben. Rufen Sie uns an und fragen Sie nach freiem Termin.",
            "details": {
                "interiorTitle": "Innenraum voller Atem",
                "interiorDesc": "Auf dem Erdgeschoss wartet auf dich eine große, klimatisierte Freizeitzone mit großem Fernsehen und einem Sofa für zwei Personen. Das erste Stockwerk ist die Schlafzimmernzone: ein Gästezimmer mit einer Ehebett (180x200) sowie ein weiteres Zimmer mit zwei Einzelbetten (90x200), die verbunden werden können.",
                "terraceTitle": "Balkon und Natur",
                "terraceDesc": "Jedes Haus hat einen großen, gepflasterten Balkon mit Gartenmöbeln, Sitzleinen und einem eigenen Grill. Dies ist ideale Stelle für gemeinsame Abende unabhängig von dem Wetter. Vor dem Haus befindet sich ein privater Stück Gras.",
                "activityTitle": "Aktivität und Entspannung",
                "activityDesc": "Nur 350 Meter vom privaten Seegebiet entfernt, mit Brücken zum Fischen, einem Badmintonplatz am Strand und einem Spielplatz. Abends laden wir Sie zu einer gemeinsamen Altanzone an dem Lagerfeuer ein. Wir akzeptieren Haustiere – bringen Sie Ihren Hund mit!",
                "locationTitle": "Ortung und Einrichtungen",
                "locationDesc": "Sie sind nur 10 Minuten von Mikołajek und dem Tropikanal-Wasserpark entfernt. Am Standort gibt es kostenloses Parkplatz, schnelles WLAN sowie einen Startkorb (Kaffee, Tee, Wasser). Im Haus finden Sie auch ein Heizgerät, eine Pfanne zum Backen und eine Trockner für Kleidung.",
                "amenitiesBlockTitle": "AUSSTATTUNG UND DETAILS",
                "bedroomTitle": "Schlafzimmer und Wohnraum",
                "bedroomItems": [
                    "Maximal 6 Personen (ca. 55 m²)",
                    "Schlafzimmer 1: Doppelbett 180x200",
                    "Schlafzimmer 2: Zwei Betten 90x200 (Möglichkeit zur Verbindung)",
                    "Wohnraum: Klimaanlage, Smart TV, Couch für zwei Personen",
                    "Bettwäsche und Handtücher sind inbegriffen"
                ],
                "cottageAmenitiesTitle": "Kochraum und Terrasse",
                "cottageAmenitiesItems": [
                    "Waschmaschine und induktive Kochplatte",
                    "Kaffemaschine und Eisbox",
                    "Komplette Zubehör, Pfannen und Teller",
                    "Gepflasterte Terrasse, Liegestühle, privater Grill"
                ],
                "commonAreasTitle": "Privater Strandanschluss (350m)",
                "commonAreasItems": [
                    "Fischereibridge und Aussicht auf das See",
                    "Platz für ein Feuer und geflachste Altan",
                    "Kinderspielplatz",
                    "Sandstrandballcourt"
                ],
                "additionalTitle": "Zusätzliche Informationen",
                "additionalItems": [
                    "Startpaket: Wasser, Kaffee, Tee",
                    "Kostenloser Parkplatz und schnelles WLAN",
                    "Tierfreundlicher Objekt",
                    "Stahlspiegeleisen, Tisch und Trockner in jedem Zimmer"
                ],
                "price": "ab 350 € pro Nacht",
                "bookBtn": "Reservieren"
            },
            "amenities": {
                "fullEquip": "Voll ausgestattet",
                "garden": "Privater Garten",
                "bonfire": "Grill und Feuer",
                "parking": "Parkplatz",
                "wifi": "WLAN",
                "ac": "Klimaanlage",
                "waterAccess": "Zugang zum Wasser",
                "peace": "Stille und Ruhe"
            }
        }, "roomsPage": {
            "heroTitle": "Zimmer auf den Mazuren",
            "heroSubtitle": "Komfortable Zimmer in einer friedlichen Umgebung",
            "ctaText": "Suchst du mehr Raum auf Fuleda? Überprüfe unsere",
            "ctaLink": "Apartments auf Fuleda",
            "items": {
                "fuleda": {
                    "title": "Zimmer auf Fuleda",
                    "description": "Komfortable Zimmer am Dobskem Meer in der Ruhezone. Ideal für Familien und Naturliebhaber.",
                    "location": "Fuleda, Dobskes Meer",
                    "features": [
                        "2 Zimmer",
                        "Badezimmer",
                        " Küche",
                        "Terrasse",
                        "Zugang zum Meer"
                    ],
                    "priceLabel": "Preis",
                    "priceValue": "ab 375 € pro Nacht",
                    "detailsBtn": "DETAILS",
                    "bookBtn": "RESERVIEREN"
                }
            }
        }, "calendar": {
            "title": "Verfügbarkeit",
            "loading": "Laden...",
            "error": "Konnte die aktuellen Daten nicht laden. Versuchen wir es erneut in einer Minute.",
            "prevMonth": "Vorheriger Monat",
            "nextMonth": "Nächster Monat",
            "days": [
                "Mo",
                "Di",
                "Mi",
                "Do",
                "Fr",
                "Sa",
                "So"
            ],
            "legend": {
                "busy": "Belegt",
                "checkIn": "Möglicher Einzug",
                "checkOut": "Möglicher Auszug",
                "available": "Verfügbar"
            }
        }, "strandaTypes": {
            "oneBedroom": "mit einer Schlafzimmer",
            "oneBedroomJacuzzi": "mit einer Schlafzimmer und Jacuzzi",
            "jacuzziTerrace": "mit Jacuzzi auf dem Balkon",
            "twoBedrooms": "mit zwei Schlafzimmern",
            "deluxeJacuzzi": "Deluxe mit Jacuzzi",
            "deluxeSaunaJacuzzi": "Deluxe mit Sauna und Jacuzzi",
            "apartment": "Apartement",
            "studio": "Studio",
            "suite": "Suite"
        }, "strandaDescriptions": {
            "genericDesc": "Unsere Apartments befinden sich in Gdynia, am Strand in der Stranda Residence Hotel, über dem See Kisaio (der Tracz Inlet). Sie bietet einen schönen Blick auf die Landschaft des Sees Kisaio und den Meeresspurweg der großen Mazurischen Seen. Das Apartment ist luxuriös eingerichtet und bietet hohes Komfort in Ruhe. Auf dem Gelände können Sie von den Ressourcen des Hafens nutzen, wie zum Beispiel: Taverne, Sommerkonzerte, Marina, Wasserleihgeschäft usw.",
            "locationDesc": "Die Nähe zum Zentrum von Gdynia ermöglicht die Nutzung vieler touristischer Attraktionen, Angeboten von zahlreichen Restaurants und Bars. Die Lage des Objekts erleichtert auch das Entdecken der Mazur in ihrer natürlichen, historischen und unterhaltsamen Seite. Zu den meisten interessanten Orten für Besuch und Erkundung dauert etwa 15-35 Minuten Autofahren.",
            "A103": "Das Apartment A103 Suite befindet sich auf dem ersten Stock des Gebäudes und hat einen großen und luftigen Salon mit einer Küche an der Seite, einer ausbreiteten Couch, einem Schlafzimmer, einer Badewanne mit Dusche und einem großen Balkon mit Möbeln.",
            "A104": "Das Apartment A104 Deluxe mit privatem Jacuzzi auf dem Balkon befindet sich auf dem Erdgeschoss des Gebäudes A. Es besteht aus einem großen und luftigen Salon mit einer Küche an der Seite, einer Couch, einem Schlafzimmer mit einem doppelten Bett, einer Badewanne mit Dusche und einem Balkon, wo sich ein privater Jacuzzi befindet.",
            "A105": "Das Apartment A105 ist eine luxuriöse Einrichtung mit Jacuzzi, die einen komfortablen Aufenthalt in einem modernen Interieur bietet.",
            "B102": "Das Apartment B102 auf dem Erdgeschoss des Gebäudes B hat einen großen und luftigen Salon mit einer Küche an der Seite sowie einen eigenen Jacuzzi auf dem Balkon.",
            "B106": "Luxuriöses Apartment auf dem Erdgeschoss mit zwei Schlafzimmern und einem großen Salon.",
            "B202": "Ausgezeichnetes Apartment auf dem ersten Stock mit privater Sauna und Jacuzzi auf dem Balkon.",
            "C404": "Studio-Apartments befinden sich im Gebäude C, sind dies ein Unterkunftsort mit einem doppelten Bett, einer ausbreiteten Couch für 2 Personen, einem Salon mit einer Küche an der Seite, einer Badewanne mit Dusche und einem Balkon mit Blick auf den Tracz-Inlet und den Strand Stranda.",
            "C205": "Studio-Apartments befinden sich im Gebäude C, sind dies ein Unterkunftsort mit einem doppelten Bett, einer ausbreiteten Couch für 2 Personen, einem Salon mit einer Küche an der Seite, einer Badewanne mit Dusche und einem Balkon mit Blick auf den Tracz-Inlet und den See Kisaio.",
            "A204": "Das Apartment A204 Suite befindet sich auf dem ersten Stock des Gebäudes A und hat einen großen und luftigen Salon mit einer Küche an der Seite, einer ausbreiteten Couch, einem Schlafzimmer, einer Badewanne mit Dusche und einem ausgestatteten Balkon mit Blick auf den See Kisaio.",
            "A205": "Das Apartment A205 Suite hat einen großen und luftigen Salon mit einer Küche an der Seite, einer ausbreiteten Couch, einem Schlafzimmer, einer Badewanne mit Dusche und einem großen ausgestatteten Balkon mit Möbeln. Es befindet sich auf dem zweiten Stock des Gebäudes.",
            "A302": "Das Apartment A302 Suite befindet sich auf dem ersten Stock des Gebäudes A und hat einen großen und luftigen Salon mit einer Küche an der Seite, einer ausbreiteten Couch, einem Schlafzimmer, einer Badewanne mit Dusche und einem ausgestatteten Balkon mit Blick auf den See Kisaio.",
            "A305": "Das Apartment A305 Suite befindet sich auf dem dritten Stock des Gebäudes, von dem ein schöner Blick auf den See Kisaio ausgeht. Es hat einen großen und luftigen Salon mit einer Küche an der Seite, einer ausbreiteten Couch, einem Schlafzimmer, einer Badewanne mit Dusche und einem großen ausgestatteten Balkon mit Möbeln.",
            "A306": "Das Apartment A306 Suite hat einen großen und luftigen Salon mit einer Küche an der Seite, zwei Schlafzimmern, einer Badewanne mit Dusche und einem großen ausgestatteten Balkon mit Möbeln. Es befindet sich auf dem dritten Stock des Gebäudes.",
            "B103": "Das Apartment B103 Deluxe mit privatem Jacuzzi auf dem Balkon befindet sich auf dem Erdgeschoss des Gebäudes B. Es besteht aus einem großen und luftigen Salon mit einer Küche an der Seite, einer Couch, einem Schlafzimmer mit einem doppelten Bett, einer Badewanne mit Dusche und einem Balkon, wo sich ein privater Jacuzzi befindet. Die gesamte Einrichtung hat einen schönen Blick auf den See Kisaio, den Tracz-Inlet und den Strand Stranda.",
            "B201": "Das Apartment B201 Suite befindet sich auf dem ersten Stock des Gebäudes B und hat einen großen und luftigen Salon mit einer Küche an der Seite, zwei Schlafzimmern, zwei Badewanne, eine mit Dusche und eine mit Waschbecken, einen großen Balkon mit Blick auf den Tracz-Inlet und den See Kisaio.",
            "B304": "Apartamente B304 mit einer Einzimmerwohnung befinden sich im Gebäude B in der Schlafzimmermitte, dem Wohnraum mit einem Zubehörküche und einer platzierbaren Sofa für 2 Personen, dem Bad mit Dusche und dem Balkon mit einem schönen Aussicht auf das Seegebiet Kisajno.",
            "B305": "Apartamente B305 mit einer Einzimmerwohnung befinden sich im Gebäude B, in der Schlafzimmermitte, dem Wohnraum mit einem Zubehörküche und einer platzierbaren Sofa für 2 Personen, dem Bad mit Dusche und dem Balkon mit einem schönen Aussicht auf das Seegebiet Kisajno.",
            "B401": "Das Luxusapartment B401 befindet sich auf dem dritten oberen Stockwerk des Gebäudes. Es besteht aus einem großen und gemütlichen Wohnraum mit Zubehörküche und platzierbarer Sofa, einer Schlafzimmermitte, dem Bad mit Dusche, dem Balkon und einem großen Balkon auf dem Dach des Gebäudes. Alles bietet einen schönen Aussicht auf das Seegebiet.",
            "B402": "Das Suiteapartment B402 befindet sich auf dem dritten Stockwerk des Gebäudes, hat einen großen und gemütlichen Wohnraum mit Zubehörküche und platzierbarer Sofa, einer Schlafzimmermitte, dem Bad mit Dusche, dem Balkon und einem großen Balkon auf dem Dach mit Aussicht auf das Seegebiet.",
            "B404": "Das Suiteapartment B404 befindet sich auf dem dritten Stockwerk des Gebäudes, hat einen großen und gemütlichen Wohnraum mit Zubehörküche und platzierbarer Sofa, einer Schlafzimmermitte, dem Bad mit Dusche, dem Balkon und einem großen Balkon auf dem Dach mit Aussicht auf das Seegebiet.",
            "A403": "Das Suiteapartment A403 befindet sich auf dem oberen Stockwerk des Gebäudes A, hat einen großen und gemütlichen Wohnraum mit Zubehörküche und platzierbarer Sofa, einer Schlafzimmermitte, dem Bad mit Dusche, den unteren Balkon und einen großen Balkon auf dem Dach mit privater Jacuzzi und Aussicht auf das Strandport und die Traczinkale.",
            "C301": "Das Suiteapartment C301 befindet sich auf dem zweiten Stockwerk des Gebäudes C, hat einen großen und gemütlichen Wohnraum mit Zubehörküche und Sofa, zwei Schlafzimmermitte, dem Bad mit Dusche und den Balkon mit Aussicht auf die Traczinkale und den Strandport.",
            "C304": "Das Studioapartment C304 befindet sich auf dem zweiten Stockwerk des Gebäudes C, hat ein Unterkommen für 2 Personen mit einem Doppelbett, einer platzierbaren Sofa für 2 Personen, einen Wohnraum mit Zubehörküche, dem Bad mit Dusche und den Balkon mit Aussicht auf die Traczinkale und den Strandport. Das Studioapartment C304 (maximale Anzahl von Personen: 4).",
            "C_1_sypialnia": "Das Apartment im Gebäude C mit einer Einzimmerwohnung bietet Komfort für maximal 4 Personen.",
            "C_Studio": "Das Studio im Gebäude C ist das perfekte Ort für einen Urlaub mit Aussicht auf die Traczinkale.",
            "C_2_sypialnie": "Ein großes Apartment im Gebäude C mit zwei Schlafzimmer, ideal für Familien."
        }, "kisajnoPage": {
            "title": "Apartmente Kisajno",
            "subtitle": "Neptunport, Giżycko",
            "introTitle": "Eksklusive Qualität über dem See",
            "description": "Wir bieten ein modernes Apartment mit einer Fläche von 55 m² auf dem Erdgeschoss mit direktem Zugang zu den Uferwegen des Sees Kisajno. Ideal für Familien oder Freunde, bietet einen komfortablen Urlaub im Premiumstandard.",
            "features": [
                "2 Schlafzimmer mit großen Betten",
                "Wohnraum mit einer gemütlichen Sofa und TV",
                "Gänzliche Küche: Waschmaschine, Mikrowelle, Kühlschrank",
                "Klimaanlage und schnelles WLAN"
            ],
            "priceLabel": "Preis ab",
            "priceValue": "500 PLN",
            "priceUnit": "/ pro Nacht",
            "amenitiesTitle": "Bekleidungen",
            "bookingTitle": "Reservieren Sie Ihren Aufenthalt",
            "bookingDesc": "Wenden Sie sich direkt an uns, um die beste Angebotskette zu erhalten und die Verfügbarkeit im gewünschten Zeitraum zu überprüfen.",
            "callAction": "Anrufen",
            "amenities": {
                "view": "Aussicht auf den See",
                "ac": "Klimaanlage",
                "smartTv": "Smart TV",
                "wifi": "WLAN",
                "kitchen": "Ganze Küche",
                "dishwasher": "Waschmaschine",
                "parking": "Parkplatz",
                "port": "Neptun-Portheim"
            }
        }, "mikolajkiPage": {
            "title": "Mikołajki-Gigant-Apartement",
            "subtitle": "Mikołajkens-Center – Platz der Freiheit",
            "introTitle": "Komfortabler Apartment im Herzen von Mikołajken",
            "description": "Moderner und komfortabler Apartment in der Mitte von Mikołajken, neben dem Platz der Freiheit – ideale Lage für Menschen, die alles „zu Hand“ haben möchten. Das Apartment ist für maximal 4 Personen geeignet und besteht aus einer gemütlichen Schlafzimmer mit einem bequemen Doppelbett, einem Salon mit einer aufklappbaren Sofaecke (zusätzliche Schlafplätze), einem voll ausgestatteten Küchenanhang sowie einer modernen Badewanne.",
            "priceLabel": "Preis ab",
            "priceValue": "350 PLN",
            "priceUnit": "/ pro Nacht",
            "amenitiesTitle": "Komfortierungen",
            "bookingTitle": "Reservieren Sie Ihren Aufenthalt",
            "bookingDesc": "Kontaktieren Sie uns direkt oder machen Sie eine sofortige Online-Reservierung mit dem Button unten.",
            "callAction": "Rufen Sie an",
            "comfortTitle": "Komfort und Ausstattung",
            "comfortDesc": "Schlafzimmer mit einem Bett von 180x200, schnelles WLAN, Salon mit TV und aufklappbarer Sofaecke",
            "kitchenTitle": " Küche und Badezimmers",
            "kitchenDesc": "Küchenanhang mit Waschmaschine, moderne Badewanne mit Dusche, Startkoffer (Kaffee, Tee)",
            "locationTitle": "Umgebung und Lage",
            "locationDesc": "Ansicht auf den Innenpark, enges Mikołajken-Center neben dem Platz der Freiheit, nahe dem See",
            "collapseGallery": "Ziehen Sie die Galerie ein",
            "expandGallery": "Mehr Fotos ansehen",
            "bookBtn": "RESERVIEREN SIE ES",
            "amenities": {
                "view": "Ansicht auf den Parkplatz",
                "ac": "Klimaanlage",
                "smartTv": "Smart TV",
                "wifi": "kostenloses WLAN",
                "kitchen": "Küchenanhang",
                "dishwasher": "Waschmaschine",
                "parking": "Stadtzentrum",
                "port": "Na dem See"
            }
        }, "fuledaPage": {
            "title": "Fuleda Apartments",
            "subtitle": "Ruhe, Frieden, Natur am Dobslawer Meer",
            "introTitle": "Paradies der Ruhe in der Ruhenzone",
            "description": "Die Lage von Fuleda ist eine Anbotung fürjenige, die ein vollständiges Abwesenheit von der Zivilisation wünschen. Situatet über dem Gebiet der Ruhenzone am Dobslawer Meer bietet Bedingungen für echtes Entspannen im Umfeld eines Naturreserves.",
            "groundFloorTitle": "Parterapartment",
            "groundFloorDesc": "Zwei Schlafzimmer mit Klimaanlage (einschließlich eines mit Feuerstelle) und ein großes Terrasse mit direktem Zugang zum See.",
            "firstFloorTitle": "Penthouse",
            "firstFloorDesc": "Zwei Schlafzimmer mit Klimaanlage, stilvoll gestaltete Inneneinrichtung mit Aussicht auf das Naturreservat und vollständige Einrichtungen.",
            "amenitiesTitle": "Premium-Benutzerfreundliche Einrichtungen",
            "amenities": {
                "ac": "Klimaanlage",
                "fireplace": "Feuerstelle",
                "beach": "Privater Strand",
                "bonfire": "Rauchfeuerplatz",
                "wifi": "WiFi",
                "kitchen": "Komplette Küche",
                "washer": "Waschmaschine",
                "pier": "Zugang zum Brückenpont"
            }
        }, "categories": {
            "apartments": "Unsere Apartments",
            "cottages": "Unsere Häuser",
            "rooms": "Unsere Zimmer",
            "charter": "Charter"
        }, "attractionsPage": {
            "title": "Regionale Attraktionen",
            "subtitle": "Giżycko und Herz Mazur bieten zahlreiche Möglichkeiten",
            "boyen": {
                "title": "Boyen Castle",
                "desc": "Die 19. Jahrhundertige prussische Burg im Gestalt eines Sternes, ein historisches Schwerpunkt des Gebietes. Die perfekt erhaltenen Mauern, Torflügel und schlossähnliche Gebäude bilden einen einzigartigen Beispiel für eine Verteidigung."
            },
            "bridge": {
                "title": "Drehbrücke",
                "desc": "Ein einzigartiges technisches Patrimoni aus dem 19. Jahrhundert, der manuell von einem Betreuer betrieben wird. Verbindet die Ufer des Łucknerkanals und ist der einzige dieser Art aktiv laufende Brücke in Europa."
            },
            "port": {
                "title": "Giżycko & Ekomarina Port",
                "desc": "Der größte und neueste Hafen auf den Mazuren. Idealer Ort für einen Spaziergang, eine Mahlzeit im Hafen oder das Beginn eines Reises durch die großen Mazurischen Seen."
            },
            "water": {
                "title": "Kisajno- und Dobskosee",
                "desc": "Kristallklare Wasser, Naturlager und Ruhebereiche. Paradies für Naturliebhaber, Kanuisten und friedliches Booten weit vom Motorhafen entfernt."
            },
            "wolfsLair": {
                "title": "Wölfe in Szaniec",
                "desc": "Hauptquartier Hitlers in Gierlitz. Ein kompleks verborgener Bunkers im Wald, der die Geschichte des Zweiten Weltkriegs bezeugt."
            },
            "waterTower": {
                "title": "Druckwacht",
                "desc": "Eine historische Türme mit einem Aussichtsterrass, von der man das Panorama von Giżyck und umliegender Seen genießen kann. Innerhalb befindet sich ein Museum und eine Kaffeehalle."
            },
            "castle": {
                "title": "Krzyżacker Castle",
                "desc": "Ein restaurierter Schloss in Giżyck, heute ein luxuriöses Hotel St. Bruno. Ein Verbindung zwischen Geschichte und Moderne."
            },
            "bison": {
                "title": "Braunowka",
                "desc": "Eine demonstrative Braunowka in Wolisk. Möglichkeit zur Beobachtung der 'Könige des Waldes' auf einer Aussichtsterrasse in ihrem natürlichen Umfeld."
            }
        }, "cooperationPage": {
            "title": "Zusammenarbeit",
            "subtitle": "Dein Objekt in den besten Händen auf den Mazuren",
            "services": {
                "title": "Professionelles Management von Najmem",
                "desc": "Suchst du einen vertrauenswürdigen Partner für die Pflege deiner Immobilie? Mazury.Holiday ist ein Team von Experten, das alle Verantwortlichkeiten des kurzfristigen Mietens von dir übernimmt. Wir erhöhen die Einnahmen der Eigentümer während gleichzeitig den höchsten Servicestandards für Gäste gewährleisten."
            },
            "marketing": {
                "title": "Premium-Marketing",
                "desc": "Deine Immobilie erreicht die Spitze in Portalen wie Booking.com, Airbnb und unserer eigenen Plattform Mazury.Holiday. Wir führen Fotografien und Filme mit Dronen durch."
            },
            "guests": {
                "title": "Unbesetzter Mietvertrag",
                "desc": "Wir kümmern uns um den gesamten Prozess: von der Buchung und dem Bezahlvorgang über die professionelle Willkommenshaltung der Gäste bis hin zu ihrem 24/7-Support während ihres Aufenthalts."
            },
            "maintenance": {
                "title": "5-Sterne-Standards",
                "desc": "Unser Reinigungs- und Technikteam kümmert sich um jeden Detail. Deine Immobilie leuchtet immer neu und ist in idealer technischer Form vor jedem Gastanwurf."
            },
            "whyUs": {
                "title": "Warum solltest du mit uns zusammenarbeiten?",
                "point1": "Lokales Erfahrungswissen und Kenntnis des Mazurischen Marktes",
                "point2": "Transparenz im Rechnungsaufbau und der Eigentümerdashboard",
                "point3": "Stabile technische und wartungsbedürftige Pflege",
                "point4": "Optimierung der Preise (Revenue Management)"
            }
        }, "contactForm": {
            "title": "Schreib uns",
            "subtitle": "Hast Fragen? Möchtest du einen Aufenthalt buchen? Nutze das unten stehende Formular.",
            "name": "Name und Nachname",
            "email": "E-Mail-Adresse",
            "phone": "Telefonnummer",
            "subject": "Betreff",
            "message": "Nachrichtentext",
            "send": "Nachricht senden",
            "sending": "Versenden...",
            "success": "Die Nachricht wurde erfolgreich gesendet!",
            "error": "Es trat ein Fehler beim Senden der Nachricht. Versuchen Sie es noch einmal."
        }, "cookieConsent": {
            "title": "Cookies und Datenschutz 🍪",
            "description": "Wir schützen Ihre Privatsphäre. Sie können alle Cookie-Dateien akzeptieren oder Ihre Einwilligungen anpassen. Weitere Informationen finden Sie unter",
            "privacyLink": "Datenschutzerklärung",
            "acceptAll": "Alle akzeptieren",
            "customize": "Anpassen",
            "decline": "Ablehnen",
            "settingsTitle": "Einstellungen für Cookies",
            "back": "Zurück",
            "necessary": "Notwendige",
            "necessaryDesc": "Benötigt, um die Website zu betreiben.",
            "analytics": "Analytische",
            "analyticsDesc": "Helfen uns, die Website zu verbessern.",
            "marketing": "Marktkundliche",
            "marketingDesc": "Anpassung der Werbung an Sie.",
            "save": "Einstellungen speichern"
        }, "privacyPolicy": {
            "title": "Datenschutzerklärung und Cookie-Einstellungen",
            "intro": "Wir schätzen Ihre Privatsphäre. Lesen Sie unsere Datenschutzerklärung.",
            "content": "Diese Cookie-Richtlinie gilt für alle Internetdienste von mazury.holiday. Indem Sie unsere Seiten nutzen, erklären Sie sich mit dem Verwenden von Cookies gemäß dieser Richtlinie einverstanden. Wir verwenden Cookies, um unsere Seiten schneller und einfacher zu betreiben sowie die Inhalte und Werbung an Ihre Bedürfnisse anzupassen. Sie können jederzeit in Ihrer Browser-Einstellungen die Cookie-Einstellungen verwalten.",
            "sections": [
                {
                    "title": "Was sind Cookies?",
                    "content": "Cookies (englisch <em>cookies</em>) – kleine Textinformationen, die vom Webserver gesendet werden und auf der Seite des Benutzers gespeichert werden (normalerweise auf dem Festplattenlaufwerk). Die standardmäßigen Cookie-Parameter ermöglichen es dem Server, den Inhalt zu lesen, den er geschrieben hat. Cookies werden am häufigsten in Verbindung mit Zählern, Umfragen, Internet-Shoppingwarenkörben und Websites verwendet, die eine Anmeldung erfordern, Werbung und das Überwachen der Aktivität der Besucher."
                },
                {
                    "title": "Zu welchen Zwecken verwenden wir Cookies?",
                    "content": "Die Seiten von mazury.holiday verwenden Cookies für verschiedene Zwecke:",
                    "list": [
                        "um die Seiten von mazury.holiday schneller und einfacher zu betreiben",
                        "Um die Inhalte und Werbung auf den Seiten von mazury.holiday besser zu Ihren Erwartungen und Interessen anzupassen",
                        "um anonyme, aggregierte Statistiken sammeln zu können, die uns helfen, zu verstehen, wie Menschen unsere Seiten nutzen und dabei bei der Verbesserung ihrer Funktionalität und Inhalte helfen"
                    ]
                },
                {
                    "content": "Indem wir Cookies im beschriebenen Modus verwenden, identifizieren wir niemals die Identität der Benutzer auf Grundlage der Informationen, die in den Cookies gespeichert sind."
                },
                {
                    "title": "Zeitdauer der Speicherung von Daten in „Cookies”",
                    "content": "Wir verwenden zwei Arten von Cookies – <strong>sitzungsbezogen</strong> und <strong>fester</strong>. Die ersten bleiben nur auf Ihrem Gerät während des Nutzens der Seiten von mazury.holiday. Feste Cookies bleiben auf Ihrem Gerät so lange wie die Funktionsdauer festgelegt ist oder bis der Benutzer sie löscht."
                },
                {
                    "title": "Drittanbieter-Cookies",
                    "content": "Wenn Sie die Seiten von mazury.holiday nutzen, können Sie Cookies erhalten, die von Dritten mit denen wir zusammenarbeiten, wie z.B. Facebook, Google und auch von Unternehmen, die Werbeanzeigen führen. Weitere Informationen zu diesen Cookies finden Sie auf den Internetseiten der jeweiligen Drittanbieter."
                },
                {
                    "title": "Wie kann ich „Cookies“ löschen oder ändern?",
                    "content": "Die meisten Webbrowser sind standardmäßig so eingestellt, dass sie Cookies automatisch akzeptieren. Sie können jedoch die Einstellungen des Browsers ändern, sodass Cookies blockiert werden – ganz oder teilweise, z.B. nur von Drittanbietern, oder Sie erhalten jedes Mal eine Benachrichtigung, wenn ein Cookie auf Ihr Gerät gesendet wird.<br/><br/>Denken Sie jedoch daran, dass die Blockierung der von uns verwendeten Cookies möglicherweise negativ auf die Nutzung der Seiten von mazury.holiday Einfluss haben kann. Zum Beispiel können Sie nicht alle Bereiche der Seiten von mazury.holiday besuchen oder personalisierte Informationen während ihrer Nutzung erhalten. Sie verhindern auch das Sammeln anonymer Informationen über die Nutzung unserer Seiten zur ständigen Verbesserung des Inhalts und der Dienste von mazury.holiday."
                }
            ],
            "usefulLinks": "Nützliche Links",
            "linksDescription": "Benutzer sollten die Datenschutzrichtlinie dieser Unternehmen lesen, um ihre Regeln zum Umgang mit Cookies zu verstehen:",
            "manageCookies": "Um Ihre Cookie-Einstellungen zu verwalten, wählen Sie den Internetbrowser aus Ihrer Liste unten und folgen Sie den Anweisungen:",
            "mobileDevices": "Mobile Geräte:"
        }, "pokojeFuledaPage": {
            "heroTitle": "Fuleda Rooms",
            "price": "ab 375 zł pro Nacht",
            "description": "Wir bieten zwei Zimmer zur Miete an: einen mit einem Doppelbett und einen mit zwei Einzelbetten, einer Badstube mit Dusche und WC. Bei den Zimmern gibt es einen Balkon. Im separaten Gebäude, das sich um 10m vom Zimmer entfernt befindet, befindet sich die Küche mit einem zusätzlichen WC. Alles befindet sich auf der Halbinsel Fuledzki Róg an der Küste des Dobskersees mit einer Ruhezone im Freien des Folwark Fuleda. Ein wunderschönes Ort für Menschen, die den Wald, die Ruhe und den Frieden schätzen. Entfernt von der Stadt.\n\nEin Reihenhaus befindet sich auf privaten Grundstücken über dem Dobskersee. Im Hauptgebäude sind zwei Zimmer zur persönlichen Nutzung, eine Badstube mit Dusche und WC und ein Balkon. Neben dem Balkon befindet sich das Gebäude, in dem die Küche mit einem weiteren WC (auch für persönliche Nutzung) ist. Im anderen Teil des Gebäudes, um 20m entfernt, befindet sich ein privates Eingangsbereich zum See, auf dem ein Blickfeld mit Grillplatz, Feuerstelle und Windpferdshaus zu finden ist.\n\nUm 250m entfernt befindet sich eine öffentliche Strand. Fuleda liegt um 10km von Giżyck, 20km von Kętrzyna und Gierloyz, wo sich der Wolfsschloss-Hitler-Wohnung befindet. In der Nähe Wald, Heide, Radwege, Spielplatz. Der nächste Laden befindet sich etwa 3km entfernt.\n\nEmpfohlen für Familien mit Kindern, Fischern, Pilzsuchern und Naturliebhaber.",
            "amenitiesTitle": "Ausrüstung",
            "room1Title": "Zimmer 1 (2-Personen)",
            "room1Items": [
                "Betten für 2 Personen",
                "Ausgang zum Balkon",
                "Duster",
                "Trockner",
                "Kochfeld",
                "Spülmaschine"
            ],
            "room2Title": "Zimmer 2 (2 Betten)",
            "room2Items": [
                "Zwei Einzelbetten",
                "TV",
                "Ausgang zum Balkon"
            ],
            "kitchenTitle": " Küche",
            "kitchenNote": "(einzelnes Gebäude um 10m entfernt)",
            "kitchenItems": [
                "Kühlschrank",
                "Waschmaschine",
                "Mikrowelle",
                "Toastertopf",
                "Set von Tassen und Servietten",
                "Gasstove",
                "Kaffemaschine"
            ],
            "bathroomTitle": "Badezimmer",
            "bathroomItems": [
                "Sauna",
                "Wäscheleine",
                "Haarspender",
                "Tischlampe",
                "Handtücher",
                "Serviettenrollen",
                "Kosmetika"
            ],
            "terraceTitle": "Terrasse und Umgebung",
            "terraceItems": [
                "Große Terrasse",
                "Privater Zugang zum See",
                "Raum für Grill und Feuerwerk",
                "Sommerwiese",
                "Sichtbare Terrasse"
            ],
            "bookingTitle": "Reservierung",
            "bookingDesc": "Überprüfen Sie die Verfügbarkeit und buchen Sie Ihren Aufenthalt",
            "bookBtn": "BUCHEN SIE DEN",
            "callBtn": "Anrufen: 730 067 027",
            "bestPrice": "Beste Preise - buchen Sie direkt",
            "galleryTitle": "Galerie",
            "expandGallery": "Mehr Fotos ansehen",
            "collapseGallery": "Galerie einklappen"
        }, "charterPage": {
            "heroTitle": "Stillo 30 VIP",
            "heroSubtitle": "Motorboot Stillo 30 VIP",
            "mainTitle": "Dein luxuriöser Haus auf dem Wasser",
            "desc1": "<strong>Stillo 30 VIP</strong> ist der Nachfolger des bewährten und geschätzten Futury 870. Es ist ein Einrichtung, das darauf abzielt, die Erwartungen der strengsten Schiffsmütter in der Branche von wasserdicht und halbschiffartigen Booten (Houseboat) zu erfüllen. Nautische Eigenschaften, die vom mehrfach ausgezeichneten Vorgänger geprüft wurden, sind mit revolutionärer Praktizität verbunden.",
            "desc2": "Im Schiff finden Sie Platz für <strong>6 Schlafplätze</strong>, eine vollständig ausgestattete Badewanne und einen Salon mit panoramafen Fenstern und einem hohen Deck (ca. 190 cm), was das Gefühl eines echten Bootshauses vermittelt. Breite Halterungen führen zum unteren Terasse zur Feuerung, während eine niedrige Pfostenbucht vor dem Rumpf den Einstieg in die Wasser und das Schwimmen erleichtert.",
            "desc3": "Grundeigenschaften sind ein starkes angetriebenes Motorenhub 52KM, <strong>zwei Strömwerke</strong>, eine elektrische Kletterstiegekabine, Plastikbettmatratzen mit Pianoflage, unbeschränktes WLAN, ein Smart-TV, einen Espresso-Maschinenkit von Nespresso und vieles mehr…",
            "desc4": "Was wichtig ist für die Buchung: Die Einrichtung behält eine Geschwindigkeit unter 15 km/h, daher kann man in Polen mit <strong>keinem Führerschein</strong> steuern – nach einem kurzen Schulungsdurchgang erhalten Sie das Boot und fahren Sie auf dem Weg. Stillo 30 bietet also Luxus, Komfort und eine vollständige Mazedonische Abenteuerlust, während es gleichzeitig ein ideales Angebot für Familien und Freunde ist, die ihr erstes Erlebnis mit ihrem eigenen „Haus auf dem Wasser” suchen.",
            "vipAmenitiesTitle": "VIP-Benutzerfreundlichkeiten",
            "navAndDriveTitle": "Navigations- und Motoreinrichtung",
            "navAndDriveDesc": "Strömwerke (Dach/Rumpf), Karteitablet, 52KM-Motor",
            "vipStandardTitle": "Standard VIP",
            "vipStandardDesc": "Heizung, unbeschränktes WLAN, Smart-TV, Nespresso-Espresso-Maschine",
            "safetyTitle": "Sicherheit",
            "safetyDesc": "Komplette Notfallvorrichtung, 230V-Unterbrechungsinstallation, elektrische Kletterstiegekabine",
            "galleryTitle": "Galerie von Fotos",
            "expandGallery": "Mehr Fotos ansehen",
            "collapseGallery": "Galerie schließen",
            "bookTermTitle": "Termin buchen",
            "bookTermDesc": "Verfügbarkeit im Online-Kalender prüfen und Ihre Traumferien heute buchen.",
            "bookBtn": "BUCHEN",
            "techSpecsTitle": "Technische Daten",
            "specs": {
                "length": "Länge",
                "width": "Breite",
                "draft": "Tiefgang",
                "engine": "Motor",
                "cabins": "Kabine",
                "crew": "Bordpersonal"
            },
            "equipmentTitle": "Ausrüstung",
            "equipmentList": [
                "Strömwerk auf Dach und Rumpf",
                "Kochtisch im Cockpit",
                "SMART-TV (Smart-TV, YouTube)",
                "WiFi (ohne Grenzen), Radio/Bluetooth",
                "Steckdosen 12V (4 St.) und 230V (4 St.)",
                "Webasto-Wärmeanlage",
                "Wasserheizung (Boiler 30L)",
                "Moorbad mit Dusche",
                "Eiswürfelmaschine, Toaster, Kaffemaschine",
                "Nespresso-Express (+Kapseln)",
                "Vollständiges Küchenapparat",
                "Elektrische Katzenstiege",
                "Echosonde, Navigation - Plotter"
            ]
        }, cooperationPage: {
            "title": "Zusammenarbeit",
            "subtitle": "Ihre Immobilie in den besten Händen in Masuren",
            "services": {
                "title": "Professionelle Hausverwaltung",
                "desc": "Suchen Sie einen vertrauenswürdigen Partner, der sich um Ihre Immobilie kümmert? Mazury.Holiday ist ein Expertenteam, das Ihnen alle Pflichten im Zusammenhang mit der Kurzzeitmiete abnimmt. Wir steigern die Gewinne der Eigentümer und behalten gleichzeitig den höchsten Standard im Gästeservice bei."
            },
            "marketing": {
                "title": "Premium-Marketing",
                "desc": "Ihre Immobilie wird auf Spitzenplätzen in Portalen wie Booking.com, Airbnb und unserer eigenen Plattform Mazury.Holiday platziert. Wir führen Fotosessions und Drohnenvideos durch."
            },
            "guests": {
                "title": "Wartungsfreie Vermietung",
                "desc": "Wir kümmern uns um den gesamten Zyklus: von der Buchung und Zahlung über die professionelle Begrüßung der Gäste bis hin zur Betreuung während ihres Aufenthalts 24/7."
            },
            "maintenance": {
                "title": "5-Sterne-Standard",
                "desc": "Unser Reinigungs- und Technikteam kümmert sich um jedes Detail. Ihre Immobilie ist vor der Ankunft jedes Gastes immer blitzsauber und in perfektem technischen Zustand."
            },
            "whyUs": {
                "title": "Warum mit uns zusammenarbeiten?",
                "point1": "Lokale Erfahrung und Kenntnis des masurischen Marktes",
                "point2": "Transparentes Abrechnungssystem und Eigentümer-Panel",
                "point3": "Ständige technische und wartungstechnische Betreuung",
                "point4": "Preisoptimierung (Revenue Management)"
            }
        }, coopExtra: {
            "heroTitle": "B2B-Zusammenarbeit",
            "heroSubtitle": "IHRE IMMOBILIE IN DEN BESTEN HÄNDEN IN MASUREN",
            "securityTitle": "Sicherheit",
            "securityDesc": "Gästeüberprüfung und Schadensversicherung garantieren die Sicherheit Ihrer Investition.",
            "readyTitle": "Bereit für höhere Gewinne?",
            "readyDesc": "Kontaktieren Sie uns und sehen Sie, wie viel Ihre Wohnung oder Ihr Haus in Masuren verdienen kann.",
            "letsTalk": "Lass uns reden"
        }, coopModels: {
            "title": "Kooperationsmodelle",
            "full_title": "Umfassendes Management",
            "full_desc": "Umfasst Marketing, Gästeservice, Reinigung, kleinere Reparaturen und Preismanagement. Perfekt für Investoren, die ihre Zeit schätzen.",
            "marketing_title": "Nur Marketing und Reservierungen",
            "marketing_desc": "Wir kümmern uns um die Akquise von Gästen und die Abwicklung von Online-Reservierungen, und Sie kümmern sich um die Begrüßung der Gäste und die Reinigung."
        }, coopSteps: {
            "title": "Wie sieht die Zusammenarbeit aus?",
            "step1_title": "Audit und Bewertung",
            "step1_desc": "Wir besuchen Ihre Immobilie, prüfen ihr Potenzial und schlagen eine optimale Preisstrategie vor.",
            "step2_title": "Angebotserstellung",
            "step2_desc": "Wir erstellen eine professionelle Beschreibung, organisieren eine Fotosession und implementieren die Immobilie auf Buchungsplattformen.",
            "step3_title": "Verkaufsstart",
            "step3_desc": "Wir starten Marketingkampagnen und öffnen den Kalender für die ersten Reservierungen.",
            "step4_title": "Management und Gewinne",
            "step4_desc": "Wir übernehmen den kompletten Gästeservice und die Reinigung, und Sie erhalten jeden Monat einen transparenten Bericht und Gewinne."
        }, skorupki: {
            aboutTitle: "About the cottages",
            title: "Skorupki Cottages",
            subtitle: "Your luxury haven in the heart of Masuria",
            introTitle: "Intimate settlement in Masuria",
            descriptionPart1: "Skorupki Cottages is an intimate settlement of 10 elegant holiday cottages, located in the village of Skorupki, in one of the most peaceful and green parts of Masuria.",
            descriptionPart2: "The cottages are designed to blend harmoniously with the surroundings, offering high standards and comfort.",
            descriptionPart3: "Each cottage has a private terrace, a living room with a kitchenette, two bedrooms, and a modern bathroom.",
            descriptionPart4: "Direct access to the lake, private pier, and numerous attractions make it an ideal place for family holidays.",
            amenitiesTitle: "Cottage amenities"
        }, stranda: {
            filters: { "jacuzzi": "Whirlpool", "size": "Größe", "sizeAny": "Beliebig", "size4": "Max 4 Personen", "size6": "Max 6 Personen", "floor": "Etage", "floorAny": "Beliebig", "floorParter": "Erdgeschoss", "floorPietro": "Obergeschoss", "sauna": "Sauna", "floor1": "1. Etage", "floor2": "2. Etage", "floor3": "3. Etage" },
            mapTitle: "Gebäudestandorte",
            mapLabels: { "parking": "PARKPLATZ", "playground": "SPIELPLATZ", "sauna": "SAUNA", "beach": "STRAND", "rentals": "VERLEIH", "beachbar": "STRANDBAR", "tavern": "TAVERNE", "shop": "GESCHÄFT", "scooters": "VERLEIH" },
            features: { "studio": "Studio", "oneBedroom": "1 Schlafzimmer", "twoBedrooms": "2 Schlafzimmer", "jacuzzi": "Whirlpool", "sauna": "Sauna" }
        }, fuledaApartment: { "parter": { "description": "Das Apartment mit zwei Schlafzimmern im Erdgeschoss ist eine wunderschön und stilvoll eingerichtete Unterkunft. Am Dobskie-See gelegen, der eine Ruhezone ist, garantiert es Entspannung in Ruhe und Frieden, umgeben von wunderschöner, unberührter masurischer Natur.\n\nUnsere Apartments befinden sich in Fuleda auf einer Halbinsel am Ufer des Sees. Es bietet einen wunderschönen Panoramablick auf den Dobskie-See, die Kormoraninsel und die Helena-Insel. Das Apartment ist luxuriös ausgestattet und bietet hohen Komfort. Vor Ort können Sie den privaten Zugang zum Wasser, einen Grill und einen Lagerfeuerplatz nutzen. Giżycko (ca. 12 km entfernt) bietet viele Touristenattraktionen, Restaurants und Pubs.\n\nLage: Erdgeschoss\nMaximale Personenanzahl: 2+2\nKüchenausstattung: Tchibo Kapselkaffeemaschine, Herd, Backofen, Kühlschrank, Geschirrspüler, Geschirr und Besteck\nSchlafzimmer 1 Ausstattung: TV, Kamin, ausziehbares 2-Personen-Sofa, Tisch, Stühle, Staubsauger, Bügeleisen, Bügelbrett, Klimaanlage, Wäscheständer, Kleiderschrank\nSchlafzimmer 2 Ausstattung: TV, 160x200 Bett, zwei Nachttische, Bettwäsche, Kleiderschrank\nBadezimmerausstattung: Dusche, Waschmaschine, Haartrockner, Haarglätter, Handtücher, Duschgel, Seife, Körperlotion\nVordere Terrasse: Sessel, Tisch, Kokonsessel\nHintere Terrasse: Terrassenmöbel-Set, Holzkohlegrill\nPrivater Weg zum See mit Lagerfeuer- und Grillplatz, Hängematte, zwei Liegestühle\nSonstiges: Internet, WLAN\nDas Apartment ist komplett ausgestattet, beheizt und bietet das ganze Jahr über einen komfortablen Aufenthalt.\n\nFuleda liegt etwa 10 km von Giżycko, 20 km von Kętrzyn und Gierłoż entfernt." }, "pietro": { "description": "Ein wunderschön eingerichtetes Apartment mit zwei Schlafzimmern und einem Zwischengeschoss, im Obergeschoss gelegen mit atemberaubendem Blick auf den Dobskie-See. Diese friedliche, von Natur umgebene Lage ist perfekt für absolute Entspannung.\n\nDas Apartment bietet ein geräumiges Wohnzimmer mit Küchenzeile, ein Badezimmer mit Dusche und zwei Schlafzimmer. Das Hauptschlafzimmer verfügt über ein 160x200 Bett, während das zweite Schlafzimmer zwei Einzelbetten hat. Es gibt auch einen zusätzlichen Schlafbereich im Zwischengeschoss. Das Apartment ist mit Klimaanlage ausgestattet.\n\nLage: Obergeschoss\nMaximale Personenanzahl: 4+2\nKüchenausstattung: Tchibo Kapselkaffeemaschine, Herd, Backofen, Kühlschrank, Geschirrspüler, Geschirr und Besteck\nSchlafzimmer 1 Ausstattung: TV, 160x200 Bett, Kleiderschrank, Klimaanlage\nSchlafzimmer 2 Ausstattung: zwei Einzelbetten, Kleiderschrank\nBadezimmerausstattung: Dusche, Waschmaschine, Haartrockner, Handtücher, Kosmetik\nTerrasse: komfortables Terrassenmöbel-Set mit herrlichem Blick auf den See.\nPrivater Weg zum See mit Lagerfeuer- und Grillplatz, Hängematte.\nSonstiges: Internet, WLAN\n\nFuleda liegt etwa 10 km von Giżycko, 20 km von Kętrzyn und Gierłoż entfernt." } }, descKeys: {
            "location": "Lage",
            "maxGuests": "Maximale Gästezahl",
            "kitchen": "Küchenausstattung",
            "bedroom1": "Schlafzimmer 1 Ausstattung",
            "bedroom2": "Schlafzimmer 2 Ausstattung",
            "bedroom3": "Schlafzimmer 3 Ausstattung",
            "bathroom": "Badezimmerausstattung",
            "living": "Wohnzimmerausstattung",
            "terraceFront": "Vordere Terrasse",
            "terraceBack": "Hintere Terrasse",
            "terrace": "Terrasse",
            "balcony": "Balkon",
            "others": "Sonstiges",
            "included": "Inbegriffen",
            "additional": "Zusätzliche Informationen",
            "bedroom": "Schlafzimmerausstattung",
            "livingRoom": "Wohnzimmer"
        } }),
    es: __assign(__assign({}, translationsLegal_1.translationsLegal.es), { amenityNames: { "Klimatyzacja": "Aire acondicionado", "WiFi": "WiFi", "Smart TV": "Smart TV", "Prysznic": "Ducha", "Ręczniki": "Toallas", "Zmywarka": "Lavavajillas", "Płyta indukcyjna": "Placa de inducción", "Pościel": "Ropa de cama", "Łóżka małżeńskie i pojedyncze": "Camas dobles e individuales", "Prywatny taras z grillem": "Terraza privada con parrilla", "Miejsce na ognisko": "Zona de fogata", "Dostęp do jeziora": "Acceso al lago", "Miejsce parkingowe": "Aparcamiento", "W pełni wyposażony aneks kuchenny": "Cocina americana totalmente equipada", "Aneks kuchenny (płyta, lodówka, zmywarka)": "Cocina americana (placa, nevera, lavavajillas)", "Ekspres do kawy": "Cafetera", "Taras z meblami wypoczynkowymi": "Terraza con muebles de exterior", "Prywatne Jacuzzi": "Jacuzzi privado", "Balkon z meblami wypoczynkowymi": "Balcón con muebles de exterior" }, nav: { about: "Nosotros", apartments: "Apartamentos", cottages: "Cabañas", charter: "Chárter", port: "Puerto", attractions: "Atracciones", cooperation: "Cooperación", contact: "Contacto", rooms: "Habitaciones", bookBtn: "Reservar", language: "Idioma", back: "Volver" }, hero: { title: "Vacaciones en Masuria", subtitle: "MOMENTOS ÚNICOS", apartmentsBtn: "Nuestros Apartamentos", charterBtn: "730 067 027" }, luxuryBenefits: {
            tag: "Ventajas de nuestra oferta",
            title: "El lujo está en los detalles",
            quality: { title: "Acabados de alta calidad", desc: "Nos hemos esmerado en los acabados de cada uno de nuestros apartamentos. Esperamos que note todos los detalles, tanto los ocultos como los visibles." },
            views: { title: "Vistas al lago", desc: "En los hermosos días soleados, desde el amanecer hasta el atardecer, la televisión y las películas de VOD pueden ser reemplazadas por las hermosas vistas del lago Kisajno o Dobskie." },
            comfort: { title: "Duerma en condiciones confortables", desc: "El sueño es esencial para el descanso y afecta la calidad de su estancia con nosotros. Todas las camas están equipadas con colchones muy buenos y cómodos." },
            wifi: { title: "Wi-Fi gratuito", desc: "Hemos preparado una conexión Wi-Fi en nuestros apartamentos. No es necesario para relajarse, pero ayuda, por ejemplo, para el trabajo remoto." },
            gifts: { title: "Kit de bienvenida", desc: "Para cada uno de nuestros huéspedes, hemos preparado un pequeño obsequio, que es un elemento de nuestra oferta vacacional en los apartamentos." },
            flexible: { title: "Reserva flexible", desc: "Entendemos que no todos los viajes pueden planificarse por completo. Por eso ofrecemos condiciones flexibles de reserva y cancelación." }
        }, intro: { tag: "Mazury.Holiday", title: "Bienvenido a", titleHighlight: "Grandes Lagos", p1: "Descubra la magia de Masuria.", p2: "Ya sea descanso en Giżycko o lujo en Fuleda." }, apartments: { title: "Nuestros Apartamentos", description: "Elija el lugar perfecto.", details: "Detalles", pricePrefix: "desde", night: "noche", people: "pers.", bookBtn: "BOOK NOW", items: { stranda: { title: "Apartamentos Stranda", location: "Giżycko", description: "Confort en el puerto Stranda." }, kisajno: { title: "Apartamentos Kisajno", location: "Giżycko", description: "Lujo en el lago Kisajno." }, fuleda: { title: "Apartamentos Fuleda", location: "Fuleda, Jezioro Dobskie", description: "Oasis de paz." }, domkiSkorupki: { title: "Cabañas Skorupki", location: "Skorupki, Lago Tałty", description: "Cabañas de lujo en el corazón de la naturaleza de Masuria." }, pokojeFuleda: { title: "Habitaciones Fuleda", location: "Fuleda, Lago Dobskie", description: "Habitaciones acogedoras con vista al lago en zona de silencio." }, mikolajki: { title: "Apartamento Gigu Mikołajki", location: "Plac Wolności, Mikołajki", description: "Moderno apartamento en el centro de Mikołajki." } },
            seeCottage: "Ver cabañas",
            seeRooms: "Ver habitaciones"
        }, cottagesAndRooms: {
            title: "Nuestras cabañas y habitaciones",
            description: "Siente la cercanía de la naturaleza en condiciones confortables."
        }, categories: { apartments: "Nuestros Apartamentos", cottages: "Nuestras Cabañas", rooms: "Nuestras Habitaciones", charter: "Chárter" }, charter: { tag: "Sin licencia", title: "Alquiler de Yates", description: "Yate Stillo 30 sin licencia.", model: "Stillo 30 (2020)", cabins: "3 Cabinas", checkBtn: "Disponibilidad", premiumFleet: "Premium", feature1: "Sin licencia", feature2: "2020", feature3: "Lujo", detailsBtn: "Detalles" }, stranda: {
            filters: { "jacuzzi": "Jacuzzi", "size": "Size", "sizeAny": "Any", "size4": "Max 4 people", "size6": "Max 6 people", "floor": "Floor", "floorAny": "Any", "floorParter": "Ground floor", "floorPietro": "Upper floor", "sauna": "Sauna", "floor1": "1st Floor", "floor2": "2nd Floor", "floor3": "3rd Floor" }, subtitle: "Lujo en Lago Kisajno", description: "Diseño moderno y naturaleza.", building: "Edificio", apartment: "Apartamento",
            mapTitle: "Ubicación de edificios",
            mapLabels: { "parking": "APARCAMIENTO", "playground": "PARQUE INFANTIL", "sauna": "SAUNA", "beach": "PLAYA", "rentals": "ALQUILER", "beachbar": "CHIRINGUITO", "tavern": "TABERNA", "shop": "TIENDA", "scooters": "ALQUILER" },
            features: { "studio": "Estudio", "oneBedroom": "1 Dormitorio", "twoBedrooms": "2 Dormitorios", "jacuzzi": "Jacuzzi", "sauna": "Sauna" }
        }, details: { about: "Sobre", amenities: "Comodidades", booking: "Reserva", checkAvailability: "Verificar disponibilidad.", callBtn: "Llamar", lowPrice: "Mejor precio.", descriptionPart1: "Apartamento de lujo en", descriptionPart2: "Stranda Residence.", descriptionPart3: "Vistas inolvidables.", items: { view: "Vistas al lago", ac: "Aire acond.", terrace: "Terraza", kitchen: "Cocina", tv: "Smart TV", wifi: "WiFi", parking: "Parking", sauna: "Sauna" } }, footer: { brandDesc: "Momentos únicos.", navTitle: "Navegación", contactTitle: "Contacto", followTitle: "Síguenos", rights: "Reservados todos los derechos.", linksTitle: "Enlaces" }, contactForm: {
            title: "Escríbenos",
            subtitle: "¿Tienes preguntas? ¿Quieres reservar una estancia? Usa el formulario a continuación.",
            name: "Nombre y apellido",
            email: "Correo electrónico",
            phone: "Número de teléfono",
            subject: "Asunto",
            message: "Mensaje",
            send: "Enviar mensaje",
            sending: "Enviando...",
            success: "¡Mensaje enviado con éxito!",
            error: "Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo."
        }, cookieConsent: {
            title: "Cookies y Privacidad 🍪",
            description: "Nos importa su privacidad. Puede aceptar todas las cookies o personalizar sus consentimientos. Más en la",
            privacyLink: "Política de Privacidad",
            acceptAll: "Aceptar todas",
            customize: "Personalizar",
            decline: "Rechazar",
            settingsTitle: "Configuración de cookies",
            back: "Volver",
            necessary: "Necesarias",
            necessaryDesc: "Requeridas para el funcionamiento del sitio.",
            analytics: "Analíticas",
            analyticsDesc: "Nos ayudan a mejorar el sitio.",
            marketing: "Marketing",
            marketingDesc: "Personalización de anuncios para usted.",
            save: "Guardar configuración"
        }, privacyPolicy: {
            title: "Política de Privacidad y Cookies",
            intro: "Valoramos su privacidad, por favor lea nuestra política de privacidad.",
            content: "Esta Política de Cookies se aplica a todos los sitios web de mazury.holiday. Al utilizar nuestros sitios, usted acepta el uso de cookies de acuerdo con esta política. Utilizamos cookies para que nuestros sitios funcionen más rápido, sean más fáciles de usar y para personalizar el contenido y los anuncios. Puede gestionar la configuración de las cookies en su navegador en any time.",
            usefulLinks: "Enlaces útiles",
            mobileDevices: "Dispositivos móviles:"
        }, roomsPage: {
            heroTitle: "Habitaciones en Masuria",
            heroSubtitle: "Habitaciones cómodas en zona tranquila",
            ctaText: "¿Buscas apartamentos más grandes? Mira nuestros",
            ctaLink: "Apartamentos Fuleda",
            items: {
                fuleda: {
                    title: "Habitaciones Fuleda",
                    description: "Habitaciones cómodas junto al lago Dobskie en zona de silencio. Perfecto para familias y amantes de la naturaleza.",
                    location: "Fuleda, Lago Dobskie",
                    features: ["2 habitaciones", "Baño", "Cocina", "Terraza", "Acceso al lago"],
                    priceLabel: "Precio",
                    priceValue: "desde 375 PLN/noche",
                    detailsBtn: "DETALLES",
                    bookBtn: "RESERVAR"
                }
            }
        }, calendar: {
            title: "Disponibilidad",
            loading: "Cargando...",
            error: "Error al cargar datos. Reintentando...",
            prevMonth: "Mes anterior",
            nextMonth: "Mes siguiente",
            days: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
            legend: {
                busy: "Ocupado",
                checkIn: "Entrada posible",
                checkOut: "Salida posible",
                available: "Disponible"
            }
        }, kisajnoPage: {
            title: "Apartamentos Kisajno",
            subtitle: "Lujo junto al lago",
            introTitle: "Interiores Exclusivos",
            description: "Apartamentos diseñados para los huéspedes más exigentes. Espacio, luz y vistas al lago Kisajno crean una atmósfera única de relajación.",
            features: [
                "Vista Panorámica",
                "Acceso a Sauna",
                "Parking Privado",
                "Cerca del Puerto"
            ],
            priceLabel: "Precio desde",
            priceValue: "450",
            priceUnit: "PLN / noche",
            amenitiesTitle: "Comodidades",
            amenities: {
                ac: "Aire Acondicionado",
                wifi: "WiFi Rápido",
                smartTv: "Smart TV 55\""
            }
        }, mikolajkiPage: {
            title: "Apartamento Gigu Mikołajki",
            subtitle: "Centro de Mikołajki – Plac Wolności",
            introTitle: "Cómodo apartamento en el corazón de Mikołajki",
            description: "Un apartamento moderno y confortable situado en el corazón de Mikołajki, en la Plaza Wolności – la ubicación perfecta para los huéspedes que desean tener todo a mano. El apartamento está diseñado para un máximo de 4 personas y consta de un acogedor dormitorio con una cómoda cama doble, una sala de estar con un sofá cama (espacio adicional para dormir), una cocina americana totalmente equipada y un baño moderno.",
            priceLabel: "Precio desde",
            priceValue: "350 PLN",
            priceUnit: "/ noche",
            amenitiesTitle: "Servicios",
            bookingTitle: "Reserve su estancia",
            bookingDesc: "Contáctenos directamente o realice una reserva en línea inmediata utilizando el botón de abajo.",
            callAction: "Llamar",
            comfortTitle: "Confort y Equipamiento",
            comfortDesc: "Dormitorio con cama de 180x200, WiFi rápido, salón con TV y sofá cama",
            kitchenTitle: "Cocina y Baño",
            kitchenDesc: "Cocina americana con lavavajillas, baño moderno con ducha, kit de inicio (café, té)",
            locationTitle: "Entorno y Ubicación",
            locationDesc: "Vistas al patio interior, pleno centro de Mikołajki en la Plaza Wolności, cerca del lago",
            collapseGallery: "Contraer galería",
            expandGallery: "Ver más fotos",
            bookBtn: "RESERVAR AHORA",
            amenities: {
                view: "Vista al patio",
                ac: "Aire acondicionado",
                smartTv: "Smart TV",
                wifi: "WiFi gratuito",
                kitchen: "Cocina americana",
                dishwasher: "Lavavajillas",
                parking: "Centro de la ciudad",
                port: "Cerca del lago"
            }
        }, fuledaPage: {
            title: "Apartamentos Fuleda",
            subtitle: "Silencio, paz, naturaleza en el lago Dobskie",
            introTitle: "Oasis de paz en zona de silencio",
            description: "La ubicación de Fuleda es una propuesta para aquellos que quieren desconectarse completamente del bullicio de la civilización. Ubicado junto al lago Dobskie, cubierto por la zona de silencio, ofrece condiciones para una verdadera relajación rodeado de una reserva natural.",
            groundFloorTitle: "Apartamento Planta Baja",
            groundFloorDesc: "Amplio salón con chimenea, aire acondicionado, dormitorio y enorme terraza con acceso directo al lago.",
            firstFloorTitle: "Apartamento Primer Piso",
            firstFloorDesc: "Apartamento con acabados elegantes y vistas a la reserva, equipado con aire acondicionado y todas las comodidades.",
            amenitiesTitle: "Comodidades Premium",
            amenities: {
                ac: "Aire Acondicionado",
                fireplace: "Chimenea",
                beach: "Playa privada",
                bonfire: "Lugar para hogueras",
                wifi: "WiFi",
                kitchen: "Cocina completa",
                washer: "Lavadora",
                pier: "Acceso al muelle"
            }
        }, skorupki: {
            aboutTitle: "Sobre las cabañas",
            title: "Cabañas Skorupki",
            subtitle: "Lujo en la naturaleza",
            introTitle: "Asentamiento íntimo en Masuria",
            descriptionPart1: "Cabañas Skorupki es un asentamiento íntimo de 10 elegantes cabañas de vacaciones, ubicado en el pueblo de Skorupki, en una de las partes más tranquilas y verdes de Masuria.",
            descriptionPart2: "Esta es una propuesta para huéspedes que aprecian el espacio, la privacidad y un alto estándar, y al mismo tiempo quieren estar cerca de la naturaleza. Las cabañas están ubicadas a unos 350 metros del lago, y los huéspedes tienen a su disposición un área recreativa privada separada junto al agua.",
            descriptionPart3: "🏡 Confort y elegancia para hasta 6 personas. Cada cabaña fue diseñada para asegurar el máximo confort de descanso: dos dormitorios independientes en el primer piso, una sala de estar con sofá cama en la planta baja, una cocina moderna totalmente equipada, un baño elegante con ducha, una terraza cubierta: el lugar perfecto para el café de la mañana o una copa de vino por la noche. Materiales cuidadosamente seleccionados, interiores luminosos y una distribución funcional favorecen tanto estancias cortas como descansos más largos.",
            descriptionPart4: "🌊 Zona privada junto al lago. Los huéspedes de nuestras cabañas tienen acceso a un área recreativa dedicada junto al lago, donde espera: un lugar atmosférico para una hoguera, un parque infantil para niños, discretamente inscrito en el entorno natural, un espacio para la relajación, el descanso y pasar tiempo tranquilamente junto al agua. Es el espacio perfecto para las noches de verano y momentos de silencio lejos de la prisa diaria.",
            externalAmenities: "🌲 Paz, espacio y naturaleza. La ubicación del asentamiento asegura: una atmósfera íntima y silencio, proximidad a lagos y bosques de Masuria, excelentes condiciones para caminar, andar en bicicleta y recreación al aire libre.",
            areaTitle: "¿Por qué Cabañas Skorupki?",
            areaDesc: "✔ solo 10 cabañas – intimidad y privacidad. \n✔ 350 m del lago + área privada junto al agua. \n✔ estándar elegante e interiores refinados. \n✔ lugar perfecto para un descanso tranquilo y de calidad. \n✔ estándar de servicio www.Mazury.Holiday",
            amenitiesTitle: "Comodidades",
            amenities: {
                fullEquip: "Equipamiento completo",
                garden: "Jardín privado",
                bonfire: "Parrilla y hoguera",
                parking: "Estacionamiento",
                wifi: "WiFi",
                ac: "Aire Acondicionado",
                waterAccess: "Acceso al agua",
                peace: "Silencio y paz"
            },
            details: {
                interiorTitle: "Un interior espacioso",
                interiorDesc: "En la planta baja le espera una amplia zona de estar: el corazón de la casa, donde podrá pasar las tardes juntos en un cómodo sofá cama. La planta superior es la zona de dormitorio: encontrará un dormitorio principal y una segunda habitación con camas individuales (con opción de unirlas), ofreciendo flexibilidad ya sea que venga con familia o amigos.",
                terraceTitle: "Terraza y naturaleza",
                terraceDesc: "Sabemos que el clima puede ser caprichoso, por eso su casa tiene una gran terraza cubierta. Es una \"habitación al aire libre\" adicional, perfecta para el café de la mañana o la lectura nocturna, sin importar la lluvia o el sol. También tiene su propio trozo de césped frente a la cabaña.",
                activityTitle: "Actividad y relajación",
                activityDesc: "Solo unos pasos lo separan de la orilla del lago. Puede pescar desde nuestro muelle, jugar un partido de voleibol o simplemente mirar el agua mientras los niños juegan en el parque infantil. Por la noche, lo invitamos a la zona común con glorietas para una hoguera bajo las estrellas. ¡Y si tiene un amigo de cuatro patas, tráigalo con usted!",
                locationTitle: "¿Qué hay de la ubicación?",
                locationDesc: "Estás en el corazón de las atracciones, pero lejos del bullicio. Sube al coche y en 10 minutos estarás en el Parque Acuático Tropikana o en el Pueblo de la Vela. ¿Te apetece historia? La Fortaleza Boyen está a menos de media hora. Puede aparcar su coche de forma segura y gratuita con nosotros, y gracias al WiFi rápido, podrá compartir sus fotos de vacaciones de inmediato.",
                amenitiesBlockTitle: "EQUIPAMIENTO Y DETALLES",
                bedroomTitle: "Dormitorio y sueño",
                bedroomItems: [
                    "Máx. huéspedes: 6",
                    "Dormitorio 1: Cama doble",
                    "Dormitorio 2: Dos camas individuales (se pueden unir)",
                    "Salón: Sofá cama (para 2 personas)",
                    "Ropa de cama incluida"
                ],
                cottageAmenitiesTitle: "Comodidades de la cabaña",
                cottageAmenitiesItems: [
                    "Amplia terraza cubierta",
                    "Zona verde privada frente a la entrada",
                    "Cocina americana totalmente equipada",
                    "Zona de comedor"
                ],
                commonAreasTitle: "Áreas comunes y recreación",
                commonAreasItems: [
                    "Acceso directo al lago (línea de costa)",
                    "Muelle (pesca posible)",
                    "Lugar designado para hogueras",
                    "Glorietas de jardín cubiertas",
                    "Parque infantil",
                    "Cancha de voleibol"
                ],
                additionalTitle: "Información adicional",
                additionalItems: [
                    "Se admiten mascotas (Pet-friendly)",
                    "Aparcamiento gratuito en las instalaciones",
                    "Alrededores: Bosques (recogida de setas), silencio, naturaleza"
                ],
                price: "desde 350 PLN / noche",
                bookBtn: "Reservar"
            },
            ctaTitle: "Experimenta la magia de Skorupki",
            ctaDesc: "Reservar una cabaña es el primer paso para unas vacaciones inolvidables."
        }, pokojeFuledaPage: {
            heroTitle: "Residencia Fuleda",
            price: "desde 375 PLN/noche",
            description: "We offer two rooms for rent: one with a double bed, the other with two single beds, a bathroom with a shower and a toilet. There is a covered terrace next to the rooms. In a separate building located 10m from the rooms, there is a kitchen with an additional toilet. Everything is located on the Fuledzki Róg peninsula on the shores of Lake Dobskie, with a quiet zone on the fenced grounds of the Fuleda Farm. A wonderful place for people who appreciate wild nature, peace, and quiet. Away from the city.\n\nA terraced building located on private allotments by Lake Dobskie. In the main building for private use there are two rooms, a bathroom with a shower and a toilet, and a covered terrace. Opposite the terrace, at a distance of about 10m, there is a building with a kitchen and a second toilet (also for private use). On the other side of the building, at a distance of about 20m, there is a private path to the lake, where there is a viewing terrace with a grill, a place for a bonfire, and a rowing boat.\n\nRecommended for families with children, anglers, mushroom pickers, and nature lovers.\n\nEquipment: Wifi, TV, washing machine, iron, ironing board, hair dryer, vacuum cleaner, fan, microwave, toaster, kettle, gas stove, fridge, coffee machine, dishes, pots, cutlery, cups.\nBedding and towels provided upon check-in.\n\nRoom 1: bed for 2 people, access to the terrace, vacuum cleaner, hair dryer, iron, ironing board.\nRoom 2: two single beds, TV, access to the terrace.\nBathroom: shower, washing machine, hair dryer, hair straightener, towels, bathrobes, cosmetics.\nKitchen (in a building 10m away): fridge, dishwasher, microwave, toaster, set of dishes and cutlery.\nTerrace: spacious terrace, private path to the lake, place for a grill and bonfire.",
            amenitiesTitle: "Comodidades",
            room1Title: "Habitación 1 (Doble)",
            room1Items: ["Cama doble", "Acceso a terraza", "Aspiradora", "Secador de pelo", "Plancha", "Tabla de planchar"],
            room2Title: "Habitación 2 (Dos camas)",
            room2Items: ["Dos camas individuales", "TV", "Acceso a terraza"],
            kitchenTitle: "Cocina",
            kitchenNote: "(edificio separado a 10m)",
            kitchenItems: ["Nevera", "Lavavajillas", "Microondas", "Tostadora", "Vajilla y cubiertos", "Estufa de gas", "Café y té"],
            bathroomTitle: "Baño",
            bathroomItems: ["Ducha", "Lavadora", "Secador de pelo", "Alisador", "Toallas", "Albornoces", "Artículos de aseo"],
            terraceTitle: "Terraza y Alrededores",
            terraceItems: ["Amplia terraza", "Acceso privado al lago", "Zona de parrilla y hoguera", "Bote de remos", "Terraza mirador"],
            bookingTitle: "Reserva",
            bookingDesc: "Verificar disponibilidad y reservar",
            bookBtn: "RESERVAR AHORA",
            callBtn: "Llamar: 730 067 027",
            bestPrice: "Mejores precios - reserva directa",
            galleryTitle: "Galería",
            expandGallery: "Ver más fotos",
            collapseGallery: "Contraer galería"
        }, charterPage: {
            heroTitle: "Stillo 30 VIP",
            heroSubtitle: "Yate a motor Stillo 30 VIP",
            mainTitle: "Tu hogar de lujo en el agua",
            desc1: "<strong>Stillo 30 VIP</strong> es el sucesor del probado y valorado Futura 870. Es una unidad diseñada para satisfacer las expectativas de los armadores más exigentes en el sector de las casas flotantes de desplazamiento y semi-planeo. Cualidades náuticas, probadas en el galardonado predecesor, combinadas con una practicidad revolucionaria.",
            desc2: "A bordo encontrarás hasta <strong>6 plazas para dormir</strong>, un baño completo y un salón con ventanas panorámicas y un techo alto (aprox. 190 cm), que da la sensación de un verdadero apartamento en el agua. Las amplias cubiertas laterales conducen a la terraza para tomar el sol en proa, y la plataforma de baño baja en popa facilita el descenso al agua y el amarre en el muelle.",
            desc3: "Las ventajas básicas incluyen un potente motor estacionario de 52CV, <strong>dos hélices de maniobra</strong>, molinete de ancla eléctrico, colchones de espuma termoplástica, WiFi ilimitado, TV con Smart TV Max, cafetera Nespresso y muchos otros...",
            desc4: "Lo importante para el alquiler: la unidad mantiene una velocidad inferior a 15 km/h, por lo que en Polonia se puede conducir <strong>sin licencia</strong> – después de una breve formación recoges el yate y te pones en marcha. Stillo 30 ofrece por tanto lujo, comodidad y la plenitud de la aventura de Masuria, y al mismo tiempo es una elección ideal para familias y grupos de amigos que buscan su primera experiencia con su propio 'hogar en el agua'.",
            vipAmenitiesTitle: "Comodidades VIP",
            navAndDriveTitle: "Navegación y Propulsión",
            navAndDriveDesc: "Hélices de maniobra (Proa/Popa), Tablet con mapas de lagos, Motor 52CV",
            vipStandardTitle: "Estándar VIP",
            vipStandardDesc: "Calefacción, WiFi Ilimitado, VOD y HBO Max, Cafetera Nespresso",
            safetyTitle: "Seguridad",
            safetyDesc: "Equipo de rescate completo, Instalación 230V Non-Stop, Molinete de ancla eléctrico",
            galleryTitle: "Galería de Fotos",
            expandGallery: "Ver más fotos",
            collapseGallery: "Contraer galería",
            bookTermTitle: "Reservar Fecha",
            bookTermDesc: "Verifica la disponibilidad en nuestro calendario en línea y reserva tus vacaciones soñadas hoy mismo.",
            bookBtn: "RESERVARLO",
            techSpecsTitle: "Datos Técnicos",
            specs: {
                length: "Longitud",
                width: "Ancho",
                draft: "Calado",
                engine: "Motor",
                cabins: "Cabinas",
                crew: "Tripulación"
            },
            equipmentTitle: "Equipamiento",
            equipmentList: [
                "Hélices de maniobra de proa y popa",
                "Mesa de bañera",
                "SMART TV (Smart TV, YouTube)",
                "WiFi (ilimitado), Radio/Bluetooth",
                "Enchufes 12V (4 uds.) y 230V (4 uds.)",
                "Calefacción Webasto",
                "Agua caliente (Caldera 30L)",
                "Inodoro marino con ducha",
                "Máquina de hielo, Tostadora, Hervidor",
                "Cafetera Nespresso (+cápsules)",
                "Equipamiento de cocina completo",
                "Molinete de ancla eléctrico",
                "Ecosonda, Navegación - Plotter"
            ]
        }, strandaTypes: {
            oneBedroom: "con un dormitorio",
            oneBedroomJacuzzi: "con un dormitorio y jacuzzi",
            jacuzziTerrace: "con jacuzzi en la terraza",
            twoBedrooms: "con dos dormitorios",
            deluxeJacuzzi: "Deluxe con jacuzzi",
            deluxeSaunaJacuzzi: "Deluxe con sauna y jacuzzi",
            apartment: "Apartamento",
            studio: "Estudio",
            suite: "Suite",
        }, strandaDescriptions: {
            genericDesc: "Nuestros apartamentos están ubicados en Giżycko, junto al puerto Stranda en los edificios residenciales Stranda Residence, a orillas del lago Kisajno (bahía Tracz). Ofrece una hermosa vista panorámica del lago Kisajno y la ruta de los Grandes Lagos de Masuria. El apartamento está lujosamente equipado y garantiza un alto confort de descanso. En el lugar, puede utilizar los recursos del puerto como: taberna, conciertos en la temporada de verano, marina, alquiler de equipos acuáticos, etc.",
            locationDesc: "La proximidad al centro de Giżycko le permite disfrutar de muchas atracciones turísticas, ofertas de muchos restaurantes y pubs. La ubicación de la instalación también facilita la exploración de Masuria en términos de naturaleza, historia y entretenimiento. Plaza de garaje incluida.",
            A103: "El apartamento A103 Suite está situado en la primera planta del edificio, tiene un gran salón amplio con cocina americana y sofá cama, un dormitorio, un baño con ducha y una gran terraza con muebles.",
            A104: "El apartamento A104 Delux con jacuzzi privado en la terraza se encuentra en la planta baja del edificio A. Consta de un amplio salón con cocina americana y sofá, un dormitorio con cama doble, un baño con ducha, una terraza donde hay un jacuzzi privado.",
            A105: "El apartamento A105 es una unidad de lujo con jacuzzi, que ofrece una relajación cómoda en un interior moderno.",
            B102: "El apartamento B102 ubicado en la planta baja del edificio B tiene un amplio salón con cocina americana y su propio jacuzzi en la terraza.",
            B106: "Apartamento de lujo en la planta baja con dos dormitorios y amplio salón.",
            B202: "Apartamento único al primer piso con sauna privada y jacuzzi en la terraza.",
            C404: "Los apartamentos estudio están ubicados en el edificio C, son alojamientos con una cama doble, un sofá cama para 2 personas, un salón con cocina americana, un baño con ducha y una terraza con vistas a la bahía Tracz y el puerto Stranda."
        }, cooperationPage: {
            "title": "Cooperación",
            "subtitle": "Su propiedad en las mejores manos en Masuria",
            "services": {
                "title": "Gestión Profesional de Propiedades",
                "desc": "¿Busca un socio de confianza para cuidar de su propiedad? Mazury.Holiday es un equipo de expertos que le quitará de encima todas las responsabilidades asociadas al alquiler a corto plazo. Aumentamos los beneficios de los propietarios manteniendo el más alto estándar de servicio al huésped."
            },
            "marketing": {
                "title": "Marketing Premium",
                "desc": "Su propiedad se ubicará en los primeros puestos de portales como Booking.com, Airbnb y nuestra plataforma Mazury.Holiday. Realizamos sesiones de fotos y videos con drones."
            },
            "guests": {
                "title": "Alquiler sin mantenimiento",
                "desc": "Nos encargamos de todo el ciclo: desde la reserva y los pagos, pasando por la recepción profesional de los huéspedes, hasta el apoyo durante su estancia 24/7."
            },
            "maintenance": {
                "title": "Estándar de 5 estrellas",
                "desc": "Nuestro equipo de limpieza y técnico cuida cada detalle. Su propiedad siempre está impecable y en perfecto estado técnico antes de la llegada de cada huésped."
            },
            "whyUs": {
                "title": "¿Por qué trabajar con nosotros?",
                "point1": "Experiencia local y conocimiento del mercado de Masuria",
                "point2": "Sistema de facturación transparente y panel de propietarios",
                "point3": "Cuidado técnico y de mantenimiento constante",
                "point4": "Optimización de precios (Revenue Management)"
            }
        }, coopExtra: {
            "heroTitle": "Cooperación B2B",
            "heroSubtitle": "SU PROPIEDAD EN LAS MEJORES MANOS EN MASURIA",
            "securityTitle": "Seguridad",
            "securityDesc": "La verificación de los huéspedes y el seguro de daños garantizan la seguridad de su inversión.",
            "readyTitle": "¿Listo para mayores beneficios?",
            "readyDesc": "Póngase en contacto con nosotros y vea cuánto puede ganar su apartamento o casa en Masuria.",
            "letsTalk": "Hablemos"
        }, coopModels: {
            "title": "Modelos de cooperación",
            "full_title": "Gestión integral",
            "full_desc": "Incluye marketing, atención al cliente, limpieza, reparaciones menores y gestión de precios. Perfecto para inversores que valoran su tiempo.",
            "marketing_title": "Solo marketing y reservas",
            "marketing_desc": "Nosotros nos encargamos de adquirir huéspedes y gestionar reservas en línea, y usted se encarga de recibir a los huéspedes y limpiar."
        }, coopSteps: {
            "title": "¿Cómo es la cooperación?",
            "step1_title": "Auditoría y valoración",
            "step1_desc": "Visitamos su propiedad, comprobamos su potencial y proponemos una estrategia de precios óptima.",
            "step2_title": "Preparación de la oferta",
            "step2_desc": "Creamos una descripción profesional, organizamos una sesión de fotos e implementamos la propiedad en las plataformas de reserva.",
            "step3_title": "Inicio de ventas",
            "step3_desc": "Lanzamos campañas de marketing y abrimos el calendario para las primeras reservas.",
            "step4_title": "Gestión y beneficios",
            "step4_desc": "Asumimos el servicio completo de huéspedes y limpieza, y usted recibe un informe transparente y beneficios cada mes."
        }, fuledaApartment: { "parter": { "description": "Apartment with two bedrooms located on the ground floor is a beautifully and stylishly finished property. Situated on Lake Dobskie, which is a quiet zone, it guarantees relaxation in peace and quiet, surrounded by beautiful, pristine Masurian nature.\n\nOur apartments are located in Fuleda on a peninsula on the shore of the lake. It offers a beautiful panoramic view of Lake Dobskie, Cormorant Island, and Helena Island. The apartment is luxuriously finished and ensures a high level of comfort. On site, you can use private access to the water, a barbecue, and a bonfire place. Giżycko (about 12km away) allows you to enjoy many tourist attractions, restaurants, and pubs. The location of the property also makes it easy to explore Masuria in terms of nature and history.\n\nThe Fuleda Apartment (ground floor) with a direct view of Lake Dobskie is located on the ground floor of the building, has two bedrooms, a kitchenette, a bathroom with a shower, and two covered terraces: one at the front of the building with a direct view of Lake Dobskie, the other at the back of the building.\n\nLocation: ground floor\nMaximum number of people: 2+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, fireplace, fold-out 2-person sofa, table, chairs, vacuum cleaner, iron, ironing board, air conditioning, clothes dryer, wardrobe\nBedroom 2 equipment: TV, 160x200 bed, two bedside tables, set of bedding, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, hair straightener, towels, shower gel, soap, body lotion\nFront terrace: armchairs, table, cocoon chair\nBack terrace: terrace furniture set, charcoal grill\nPrivate path to the lake with a bonfire and barbecue area, hammock, two deckchairs\nOther: internet, wifi\nThe apartment is fully equipped, heated, and provides a comfortable stay all year round.\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż where the Wolf's Lair - Hitler's headquarters is located. Nearby forests, meadows, cycling routes, playgrounds. The nearest shop is about 3km away." }, "pietro": { "description": "A beautifully finished apartment with two bedrooms and a mezzanine, located on the upper floor with a breathtaking view of Lake Dobskie. This peaceful, nature-surrounded location is perfect for complete relaxation.\n\nThe apartment offers a spacious living room with a kitchenette, a bathroom with a shower, and two bedrooms. The master bedroom features a 160x200 bed, while the second bedroom has two single beds. There is also an additional sleeping area on the mezzanine. The apartment is equipped with air conditioning, ensuring comfort even on hot days.\n\nLocation: upper floor\nMaximum number of people: 4+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, 160x200 bed, wardrobe, air conditioning\nBedroom 2 equipment: two single beds, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, towels, cosmetics\nTerrace: comfortable terrace furniture set with an amazing view of the lake.\nPrivate path to the lake with a bonfire and barbecue area, hammock.\nOther: internet, wifi\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż." } } }),
    it: __assign(__assign({}, translationsLegal_1.translationsLegal.it), { nav: { about: "Chi siamo", apartments: "Appartamenti", cottages: "Case", charter: "Noleggio", port: "Porto", attractions: "Attrazioni", cooperation: "Cooperazione", contact: "Contatti", rooms: "Camere", bookBtn: "Prenota", language: "Lingua", back: "Indietro" }, hero: { title: "Vacanze in Masuria", subtitle: "MOMENTI UNICI", apartmentsBtn: "I nostri appartamenti", charterBtn: "Noleggio Yacht" }, intro: { tag: "Mazury.Holiday", title: "Benvenuti nei", titleHighlight: "Grandi Laghi", p1: "Scopri la magia della Masuria.", p2: "Relax a Giżycko o lusso a Fuleda." }, apartments: { title: "Appartamenti", description: "Scegli il posto perfetto.", details: "Dettagli", pricePrefix: "da", night: "notte", people: "pers.", bookBtn: "RESERVAR", items: { stranda: { title: "Stranda", location: "Giżycko", description: "Comfort al porto." }, kisajno: { title: "Kisajno", location: "Giżycko", description: "Lusso sul lago." }, fuleda: { title: "Fuleda", location: "Fuleda, Jezioro Dobskie", description: "Oasi di pace." }, domkiSkorupki: { title: "Case Skorupki", location: "Skorupki, Lago Tałty", description: "Case di lusso nel cuore della natura masuriana." }, pokojeFuleda: { title: "Camere Fuleda", location: "Fuleda, Lago Dobskie", description: "Camere accoglienti con vista lago in zona di silenzio." }, mikolajki: { title: "Appartamento Gigu Mikołajki", location: "Plac Wolności, Mikołajki", description: "Moderno appartamento nel centro di Mikołajki." } },
            seeCottage: "Vedi le case",
            seeRooms: "Vedi le camere"
        }, cottagesAndRooms: {
            title: "Le nostre case e camere",
            description: "Senti la vicinanza della natura in condizioni confortevoli."
        }, categories: { apartments: "I nostri Appartamenti", cottages: "Le nostre Case", rooms: "Le nostre Camere", charter: "Noleggio" }, charter: { tag: "Senza patente", title: "Noleggio Yacht", description: "Stillo 30 senza patente.", model: "Stillo 30 (2020)", cabins: "3 Cabine", checkBtn: "Disponibilità", premiumFleet: "Premium", feature1: "No patente", feature2: "2020", feature3: "Lusso", detailsBtn: "Dettagli" }, stranda: {
            filters: { "jacuzzi": "Jacuzzi", "size": "Size", "sizeAny": "Any", "size4": "Max 4 people", "size6": "Max 6 people", "floor": "Floor", "floorAny": "Any", "floorParter": "Ground floor", "floorPietro": "Upper floor", "sauna": "Sauna", "floor1": "1st Floor", "floor2": "2nd Floor", "floor3": "3rd Floor" }, subtitle: "Lusso sul lago", description: "Design moderno e natura.", building: "Edificio", apartment: "Appartamento",
            mapTitle: "Posizione degli edifici",
            mapLabels: { "parking": "PARCHEGGIO", "playground": "PARCO GIOCHI", "sauna": "SAUNA", "beach": "SPIAGGIA", "rentals": "NOLEGGIO", "beachbar": "CHIOSCO", "tavern": "TAVERNA", "shop": "NEGOZIO", "scooters": "NOLEGGIO" },
            features: { "studio": "Monolocale", "oneBedroom": "1 Camera", "twoBedrooms": "2 Camere", "jacuzzi": "Vasca idromassaggio", "sauna": "Sauna" }
        }, details: { about: "Info", amenities: "Servizi", booking: "Prenotazione", checkAvailability: "Controlla disponibilità.", callBtn: "Chiama", lowPrice: "Miglior prezzo.", descriptionPart1: "Appartamento di lusso in", descriptionPart2: "Stranda Residence.", descriptionPart3: "Vista indimenticabile.", items: { view: "Vista lago", ac: "Aria cond.", terrace: "Terrazza", kitchen: "Cucina", tv: "Smart TV", wifi: "WiFi", parking: "Parcheggio", sauna: "Sauna" } }, footer: { brandDesc: "Momenti unici.", navTitle: "Navigazione", contactTitle: "Contatti", followTitle: "Seguici", rights: "Tutti i diritti riservati.", linksTitle: "Link" }, contactForm: {
            title: "Scrivici",
            subtitle: "Hai domande? Vuoi prenotare un soggiorno? Usa il modulo qui sotto.",
            name: "Nome e cognome",
            email: "Indirizzo email",
            phone: "Numero di telefono",
            subject: "Oggetto",
            message: "Messaggio",
            send: "Invia messaggio",
            sending: "Invio in corso...",
            success: "Messaggio inviato con successo!",
            error: "Si è verificato un errore durante l'invio del messaggio. Riprova."
        }, skorupki: {
            aboutTitle: "Sulle case",
            title: "Case Skorupki",
            subtitle: "La tua oasi di lusso nel cuore della Masuria",
            introTitle: "Relax a ritmo lento",
            descriptionPart1: "Le case a Skorupki sono un luogo unico sulla mappa della Masuria, creato per persone che cercano intimità, lusso e vicinanza alla natura.",
            descriptionPart2: "Ogni casa è stata progettata pensando al comfort dei nostri ospiti, combinando soluzioni moderne con l'atmosfera tradizionale masuriana.",
            descriptionPart3: "Il fascino di Skorupki risiede soprattutto nell'autenticità e nell'armonia con l'ambiente.",
            descriptionPart4: "La vicinanza del Lago Dobskie permette di fare kayak, pescare e lunghe passeggiate.",
            areaTitle: "Area",
            areaDesc: "Case confortevoli per famiglie e gruppi",
            locationTitle: "Posizione",
            locationDesc: "Skorupki, vicino a Giżycko e Mikołajki",
            amenitiesTitle: "Servizi",
            galleryTitle: "Galleria",
            expandGallery: "Guarda più foto",
            collapseGallery: "Comprimi galleria",
            ctaTitle: "Senti la magia di Skorupki",
            ctaDesc: "Prenotare una casa è il primo passo per una vacanza indimenticabile.",
            amenities: {
                fullEquip: "Attrezzatura completa",
                garden: "Giardino privato",
                bonfire: "Griglia e falò",
                parking: "Parcheggio",
                wifi: "WiFi",
                ac: "Aria condizionata",
                waterAccess: "Accesso all'acqua",
                peace: "Pace e tranquillità"
            },
            details: {
                interiorTitle: "Interni spaziosi",
                interiorDesc: "Al piano terra vi aspetta una spaziosa zona giorno...",
                terraceTitle: "Terrazza e natura",
                terraceDesc: "Sappiamo che il tempo può essere capriccioso...",
                activityTitle: "Attività e relax",
                activityDesc: "Pochi passi vi separano dalla riva del lago...",
                locationTitle: "E la posizione?",
                locationDesc: "Siete nel cuore delle attrazioni, ma lontani dal trambusto...",
                amenitiesBlockTitle: "ATTREZZATURE E DETTAGLI",
                bedroomTitle: "Camera da letto e sonno",
                bedroomItems: [
                    "Max ospiti: 6",
                    "Camera 1: Letto matrimoniale",
                    "Camera 2: Due letti singoli",
                    "Soggiorno: Divano letto",
                    "Biancheria inclusa"
                ],
                cottageAmenitiesTitle: "Servizi della casa",
                cottageAmenitiesItems: [
                    "Terrazza coperta",
                    "Area verde privata",
                    "Angolo cottura attrezzato",
                    "Zona pranzo"
                ],
                commonAreasTitle: "Aree comuni",
                commonAreasItems: [
                    "Accesso al lago",
                    "Molo",
                    "Area falò",
                    "Gazebo",
                    "Parco giochi",
                    "Campo da pallavolo"
                ],
                additionalTitle: "Info aggiuntive",
                additionalItems: [
                    "Pet-friendly",
                    "Parcheggio gratuito",
                    "Dintorni: Foreste, natura"
                ],
                price: "da 350 PLN / notte",
                bookBtn: "Prenota"
            }
        }, strandaTypes: {
            oneBedroom: "con una camera da letto",
            oneBedroomJacuzzi: "con una camera da letto e vasca idromassaggio",
            jacuzziTerrace: "con vasca idromassaggio sulla terrazza",
            twoBedrooms: "con due camere da letto",
            deluxeJacuzzi: "Deluxe con vasca idromassaggio",
            deluxeSaunaJacuzzi: "Deluxe con sauna e vasca idromassaggio",
            apartment: "Appartamento",
            studio: "Monolocale",
            suite: "Suite",
        }, strandaDescriptions: {
            genericDesc: "I nostri appartamenti si trovano a Giżycko, vicino al porto Stranda negli edifici residenziali Stranda Residence, sulla riva del lago Kisajno (baia Tracz). Offre una bellissima vista panoramica sul lago Kisajno e sulla rotta dei Grandi Laghi Masuri. L'appartamento è lussuosamente rifinito e garantisce un elevato comfort di riposo. In loco, è possibile utilizzare le risorse del porto come: taverna, concerti nella stagione estiva, porto turistico, noleggio di attrezzature acquatiche, ecc.",
            locationDesc: "La vicinanza al centro di Giżycko permette di godere di molte attrazioni turistiche, offerte di molti ristoranti e bar. La posizione della struttura facilita anche l'esplorazione della Masuria in termini di natura, storia e divertimento. Posto auto incluso.",
            A103: "L'appartamento A103 Suite si trova al primo piano dell'edificio, dispone di un ampio soggiorno con angolo cottura e divano letto, una camera da letto, un bagno con doccia e una grande terrazza con mobili.",
            A104: "L'appartamento A104 Delux con jacuzzi privata sulla terrazza si trova al piano terra dell'edificio A. È composto da un ampio soggiorno con angolo cottura e divano, una camera con un letto matrimoniale, un bagno con doccia, una terrazza dove si trova una jacuzzi privata.",
            A105: "L'appartamento A105 è un'unità di lusso con jacuzzi, offrendo un relax confortevole in interni moderni.",
            B102: "L'appartamento B102 situato al piano terra dell'edificio B dispone di un ampio soggiorno con angolo cottura e la propria jacuzzi sulla terrazza.",
            B106: "Appartamento di lusso al piano terra con due camere da letto e ampio soggiorno.",
            B202: "Appartamento unico al primo piano con sauna privata e jacuzzi sulla terrazza.",
            C404: "Gli appartamenti monolocali si trovano nell'edificio C, sono alloggi con un letto matrimoniale, un divano letto per 2 persone, un soggiorno con angolo cottura, un bagno con doccia e una terrazza con vista sulla baia Tracz e sul porto Stranda."
        }, kisajnoPage: {
            title: "Appartamenti Kisajno",
            subtitle: "Porto Neptun, Giżycko",
            introTitle: "Standard unico sul lago",
            description: "Offriamo un moderno appartamento di 55 m², situato al piano terra con accesso diretto al fascino del lago Kisajno. Ideale per famiglie o gruppi di amici, garantisce un riposo confortevole in standard premium.",
            features: [
                "2 camere da letto separate con grandi letti",
                "Soggiorno con comodo divano e TV",
                "Cucina completa: lavastoviglie, microonde, frigorifero",
                "Aria condizionata e WiFi veloce"
            ],
            priceLabel: "Prezzo da",
            priceValue: "500 PLN",
            priceUnit: "/ notte",
            amenitiesTitle: "Servizi",
            bookingTitle: "Prenota il tuo soggiorno",
            bookingDesc: "Contattaci direttamente per ottenere la migliore offerta e controllare la disponibilità nelle date selezionate.",
            callAction: "Chiama",
            amenities: {
                view: "Vista lago",
                ac: "Aria condizionata",
                smartTv: "Smart TV",
                wifi: "WiFi",
                kitchen: "Cucina completa",
                dishwasher: "Lavastoviglie",
                parking: "Parcheggio",
                port: "Porto Neptun"
            }
        }, mikolajkiPage: {
            title: "Appartamento Gigu Mikołajki",
            subtitle: "Centro di Mikołajki – Plac Wolności",
            introTitle: "Accogliente appartamento nel cuore di Mikołajki",
            description: "Un appartamento moderno e confortevole situato nel pieno centro di Mikołajki, in Piazza Wolności – la posizione ideale per gli ospiti che desiderano avere tutto a portata di mano. L'appartamento è progettato per un massimo di 4 persone e comprende un'accogliente camera da letto con un comodo letto matrimoniale, un soggiorno con divano letto (spazio per posti letto aggiuntivi), un angolo cottura completamente attrezzato e un bagno moderno.",
            priceLabel: "Prezzo da",
            priceValue: "350 PLN",
            priceUnit: "/ notte",
            amenitiesTitle: "Servizi",
            bookingTitle: "Prenota il tuo soggiorno",
            bookingDesc: "Contattaci direttamente o effettua una prenotazione online immediata utilizzando il pulsante qui sotto.",
            callAction: "Chiama",
            comfortTitle: "Comfort e Attrezzature",
            comfortDesc: "Camera da letto con letto 180x200, WiFi veloce, soggiorno con TV e divano letto",
            kitchenTitle: "Cucina e Bagno",
            kitchenDesc: "Angolo cottura con lavastoviglie, bagno moderno con doccia, kit de benvenuto (caffè, tè)",
            locationTitle: "Dintorni e Posizione",
            locationDesc: "Vista sul cortile interno, pieno centro di Mikołajki in Piazza Wolności, vicino al lago",
            collapseGallery: "Comprimi galleria",
            expandGallery: "Vedi altre foto",
            bookBtn: "PRENOTA ORA",
            amenities: {
                view: "Vista sul cortile",
                ac: "Aria condizionata",
                smartTv: "Smart TV",
                wifi: "WiFi gratuito",
                kitchen: "Angolo cottura",
                dishwasher: "Lavastoviglie",
                parking: "Centro città",
                port: "Vicino al lago"
            }
        }, fuledaPage: {
            title: "Appartamenti Fuleda",
            subtitle: "Silenzio, pace, natura sul lago Dobskie",
            introTitle: "Oasis di pace nella zona del silenzio",
            description: "La posizione di Fuleda è una proposta per coloro che vogliono staccare completamente dal trambusto della civiltà. Situato sul lago Dobskie, coperto dalla zona del silenzio, offre condizioni per un vero relax circondato da una riserva naturale.",
            groundFloorTitle: "Appartamento Piano Terra",
            groundFloorDesc: "Ampio soggiorno con camino, aria condizionata, camera da letto e enorme terrazza con accesso diretto al lago.",
            firstFloorTitle: "Appartamento Primo Piano",
            firstFloorDesc: "Appartamento rifinito con stile con vista sulla riserva, dotato di aria condizionata e tutti i comfort.",
            amenitiesTitle: "Servizi Premium",
            amenities: {
                ac: "Aria condizionata",
                fireplace: "Camino",
                beach: "Spiaggia privata",
                bonfire: "Luogo per falò",
                wifi: "WiFi",
                kitchen: "Cucina completa",
                washer: "Lavatrice",
                pier: "Accesso al molo"
            }
        }, cookieConsent: {
            title: "Cookie e Privacy 🍪",
            description: "Teniamo alla tua privacy. Puoi accettare tutti i cookie o personalizzare i tuoi consensi. Maggiori informazioni nella",
            privacyLink: "Informativa sulla Privacy",
            acceptAll: "Accetta tutti",
            customize: "Personalizza",
            decline: "Rifiuta",
            settingsTitle: "Impostazioni dei cookie",
            back: "Indietro",
            necessary: "Necessari",
            necessaryDesc: "Richiesti per il funzionamento del sito.",
            analytics: "Analitici",
            analyticsDesc: "Ci aiutano a migliorare il sito.",
            marketing: "Marketing",
            marketingDesc: "Personalizzazione degli annunci per te.",
            save: "Salva impostazioni"
        }, privacyPolicy: {
            title: "Informativa sulla Privacy e sui Cookie",
            intro: "Diamo valore alla tua privacy, ti preghiamo di leggere la nostra informativa sulla privacy.",
            content: "La presente Informativa sui Cookie si applica a tutti i siti web di mazury.holiday. Utilizzando i nostri siti, l'utente acconsente all'uso dei cookie in conformità con la presente informativa. Utilizziamo i cookie per far funzionare i nostri siti in modo più rapido e semplice, e per personalizzare contenuti e annunci. È possibile gestire le impostazioni dei cookie nel proprio browser in qualsiasi momento.",
            usefulLinks: "Link utili",
            mobileDevices: "Dispositivi mobili:"
        }, cooperationPage: {
            "title": "Cooperazione",
            "subtitle": "La tua proprietà nelle migliori mani in Masuria",
            "services": {
                "title": "Gestione Professionale delle Proprietà",
                "desc": "Cerchi un partner di fiducia per prendersi cura della tua proprietà? Mazury.Holiday è un team di esperti che ti toglierà tutte le responsabilità associate all'affitto a breve termine. Aumentiamo i profitti dei proprietari mantenendo il più alto standard di servizio agli ospiti."
            },
            "marketing": {
                "title": "Marketing Premium",
                "desc": "La tua proprietà sarà posizionata ai primi posti su portali come Booking.com, Airbnb e la nostra piattaforma Mazury.Holiday. Realizziamo sessioni fotografiche e video con droni."
            },
            "guests": {
                "title": "Affitto Senza Pensieri",
                "desc": "Ci occupiamo dell'intero ciclo: dalla prenotazione e pagamenti, all'accoglienza professionale degli ospiti, fino al supporto durante il loro soggiorno 24/7."
            },
            "maintenance": {
                "title": "Standard 5 Stelle",
                "desc": "Il nostro team di pulizia e tecnico cura ogni dettaglio. La tua proprietà è sempre scintillante e in perfette condizioni tecniche prima dell'arrivo di ogni ospite."
            },
            "whyUs": {
                "title": "Perché lavorare con noi?",
                "point1": "Esperienza locale e conoscenza del mercato masuriano",
                "point2": "Sistema di fatturazione trasparente e pannello proprietari",
                "point3": "Costante assistenza tecnica e di manutenzione",
                "point4": "Ottimizzazione dei prezzi (Revenue Management)"
            }
        }, coopExtra: {
            "heroTitle": "Cooperazione B2B",
            "heroSubtitle": "LA TUA PROPRIETÀ NELLE MIGLIORI MANI IN MASURIA",
            "securityTitle": "Sicurezza",
            "securityDesc": "La verifica degli ospiti e l'assicurazione contro i danni garantiscono la sicurezza del tuo investimento.",
            "readyTitle": "Pronto per maggiori profitti?",
            "readyDesc": "Contattaci e scopri quanto può guadagnare il tuo appartamento o la tua casa in Masuria.",
            "letsTalk": "Parliamone"
        }, coopModels: {
            "title": "Modelli di cooperazione",
            "full_title": "Gestione Completa",
            "full_desc": "Include marketing, servizio ospiti, pulizia, piccole riparazioni e gestione dei prezzi. Perfetto per gli investitori che danno valore al proprio tempo.",
            "marketing_title": "Solo Marketing e Prenotazioni",
            "marketing_desc": "Ci occupiamo di acquisire ospiti e gestire prenotazioni online, e tu ti occupi di accogliere gli ospiti e pulire."
        }, coopSteps: {
            "title": "Come si svolge la cooperazione?",
            "step1_title": "Audit e valutazione",
            "step1_desc": "Visitiamo la tua proprietà, verifichiamo il suo potenziale e proponiamo una strategia di prezzo ottimale.",
            "step2_title": "Preparazione dell'offerta",
            "step2_desc": "Creiamo una descrizione professionale, organizziamo una sessione fotografica e implementiamo la proprietà sulle piattaforme di prenotazione.",
            "step3_title": "Inizio delle vendite",
            "step3_desc": "Lanciamo campagne di marketing e apriamo il calendario per le prime prenotazioni.",
            "step4_title": "Gestione e profitti",
            "step4_desc": "Ci occupiamo del servizio ospiti completo e della pulizia, e tu ricevi un rapporto trasparente e profitti ogni mese."
        }, fuledaApartment: { "parter": { "description": "Apartment with two bedrooms located on the ground floor is a beautifully and stylishly finished property. Situated on Lake Dobskie, which is a quiet zone, it guarantees relaxation in peace and quiet, surrounded by beautiful, pristine Masurian nature.\n\nOur apartments are located in Fuleda on a peninsula on the shore of the lake. It offers a beautiful panoramic view of Lake Dobskie, Cormorant Island, and Helena Island. The apartment is luxuriously finished and ensures a high level of comfort. On site, you can use private access to the water, a barbecue, and a bonfire place. Giżycko (about 12km away) allows you to enjoy many tourist attractions, restaurants, and pubs. The location of the property also makes it easy to explore Masuria in terms of nature and history.\n\nThe Fuleda Apartment (ground floor) with a direct view of Lake Dobskie is located on the ground floor of the building, has two bedrooms, a kitchenette, a bathroom with a shower, and two covered terraces: one at the front of the building with a direct view of Lake Dobskie, the other at the back of the building.\n\nLocation: ground floor\nMaximum number of people: 2+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, fireplace, fold-out 2-person sofa, table, chairs, vacuum cleaner, iron, ironing board, air conditioning, clothes dryer, wardrobe\nBedroom 2 equipment: TV, 160x200 bed, two bedside tables, set of bedding, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, hair straightener, towels, shower gel, soap, body lotion\nFront terrace: armchairs, table, cocoon chair\nBack terrace: terrace furniture set, charcoal grill\nPrivate path to the lake with a bonfire and barbecue area, hammock, two deckchairs\nOther: internet, wifi\nThe apartment is fully equipped, heated, and provides a comfortable stay all year round.\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż where the Wolf's Lair - Hitler's headquarters is located. Nearby forests, meadows, cycling routes, playgrounds. The nearest shop is about 3km away." }, "pietro": { "description": "A beautifully finished apartment with two bedrooms and a mezzanine, located on the upper floor with a breathtaking view of Lake Dobskie. This peaceful, nature-surrounded location is perfect for complete relaxation.\n\nThe apartment offers a spacious living room with a kitchenette, a bathroom with a shower, and two bedrooms. The master bedroom features a 160x200 bed, while the second bedroom has two single beds. There is also an additional sleeping area on the mezzanine. The apartment is equipped with air conditioning, ensuring comfort even on hot days.\n\nLocation: upper floor\nMaximum number of people: 4+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, 160x200 bed, wardrobe, air conditioning\nBedroom 2 equipment: two single beds, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, towels, cosmetics\nTerrace: comfortable terrace furniture set with an amazing view of the lake.\nPrivate path to the lake with a bonfire and barbecue area, hammock.\nOther: internet, wifi\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż." } } }),
    fr: __assign(__assign({}, translationsLegal_1.translationsLegal.fr), { nav: { about: "À propos", apartments: "Appartements", cottages: "Chalets", charter: "Location", port: "Port", attractions: "Attractions", cooperation: "Coopération", contact: "Contact", rooms: "Chambres", bookBtn: "Réserver", language: "Langue", back: "Retour" }, hero: { title: "Vacances en Mazurie", subtitle: "MOMENTS UNIQUES", apartmentsBtn: "Nos Appartements", charterBtn: "Location de Yacht" }, intro: { tag: "Mazury.Holiday", title: "Bienvenue aux", titleHighlight: "Grands Lacs", p1: "Découvrez la magie de la Mazurie.", p2: "Repos à Giżycko ou luxe à Fuleda." }, apartments: { title: "Nos Appartements", description: "Choisissez l'endroit idéal.", details: "Détails", pricePrefix: "dès", night: "nuit", people: "pers.", bookBtn: "RESERVAR", items: { stranda: { title: "Stranda", location: "Giżycko", description: "Confort au port." }, kisajno: { title: "Kisajno", location: "Giżycko", description: "Luxe sur le lac." }, fuleda: { title: "Fuleda", location: "Fuleda, Jezioro Dobskie", description: "Oasis de paix." }, domkiSkorupki: { title: "Chalets Skorupki", location: "Skorupki, Lac Tałty", description: "Chalets de luxe au cœur de la nature masurienne." }, pokojeFuleda: { title: "Chambres Fuleda", location: "Fuleda, Lac Dobskie", description: "Chambres douillettes avec vue sur le lac en zone de silence." }, mikolajki: { title: "Appartement Gigu Mikołajki", location: "Plac Wolności, Mikołajki", description: "Appartement moderne au centre de Mikołajki." } } }, cottagesAndRooms: {
            title: "Nos chalets et chambres",
            description: "Ressentez la proximité de la nature dans des conditions confortables."
        }, categories: { apartments: "Nos Appartements", cottages: "Nos Chalets", rooms: "Nos Chambres", charter: "Location" }, charter: { tag: "Sans permis", title: "Location Yacht", description: "Stillo 30 sans permis.", model: "Stillo 30 (2020)", cabins: "3 Cabines", checkBtn: "Disponibilité", premiumFleet: "Premium", feature1: "Sans permis", feature2: "2020", feature3: "Luxe", detailsBtn: "Détails" }, stranda: { subtitle: "Luxe sur le lac", description: "Design moderne et nature.", building: "Bâtiment", apartment: "Appartement",
            filters: { "jacuzzi": "Jacuzzi", "size": "Size", "sizeAny": "Any", "size4": "Max 4 people", "size6": "Max 6 people", "floor": "Floor", "floorAny": "Any", "floorParter": "Ground floor", "floorPietro": "Upper floor", "sauna": "Sauna", "floor1": "1st Floor", "floor2": "2nd Floor", "floor3": "3rd Floor" },
            mapTitle: "Emplacement des bâtiments",
            mapLabels: { "parking": "PARKING", "playground": "AIRE DE JEUX", "sauna": "SAUNA", "beach": "PLAGE", "rentals": "LOCATION", "beachbar": "BAR DE PLAGE", "tavern": "TAVERNE", "shop": "BOUTIQUE", "scooters": "LOCATION" },
            features: { "studio": "Studio", "oneBedroom": "1 Chambre", "twoBedrooms": "2 Chambres", "jacuzzi": "Jacuzzi", "sauna": "Sauna" }
        }, details: { about: "À propos", amenities: "Équipements", booking: "Réservation", checkAvailability: "Vérifier dispo.", callBtn: "Appeler", lowPrice: "Meilleur prix.", descriptionPart1: "Appartement de luxe", descriptionPart2: "à Stranda.", descriptionPart3: "Vue inoubliable.", items: { view: "Vue lac", ac: "Clim", terrace: "Terrasse", kitchen: "Cuisine", tv: "Smart TV", wifi: "WiFi", parking: "Parking", sauna: "Sauna" } }, footer: { brandDesc: "Moments uniques.", navTitle: "Navigation", contactTitle: "Contact", followTitle: "Suivez-nous", rights: "Tous droits réservés.", linksTitle: "Liens" }, cooperationPage: {
            title: "Coopération",
            subtitle: "Votre propriété entre de bonnes mains",
            services: {
                title: "Gestion Complète",
                desc: "Nous nous occuperons de votre appartement, chalet ou propriété en Mazurie. Nous offrons une gamme complète de services, du marketing au nettoyage."
            },
            marketing: {
                title: "Marketing Professionnel",
                desc: "Nous nous occupons de la visibilité de votre offre sur les portails de réservation les plus populaires."
            },
            guests: {
                title: "Service Clients",
                desc: "Nous assurons des check-in, check-out professionnels et un soutien aux clients tout au long de leur séjour."
            },
            maintenance: {
                title: "Entretien et Nettoyage",
                desc: "Votre propriété sera toujours prête à accueillir des clients selon les normes les plus élevées."
            },
            whyUs: {
                title: "Pourquoi collaborer avec nous?",
                point1: "Expérience locale et connaissance du marché masurien",
                point2: "Système de règlement transparent et panneau propriétaire",
                point3: "Entretien technique constant et maintenance",
                point4: "Optimisation des prix (Revenue Management)"
            }
        }, contactForm: {
            title: "Écrivez-nous",
            subtitle: "Vous avez des questions ? Vous souhaitez réserver un séjour ? Utilisez le formulaire ci-dessous.",
            name: "Nom et prénom",
            email: "Adresse e-mail",
            phone: "Numéro de téléphone",
            subject: "Sujet",
            message: "Message",
            send: "Envoyer le message",
            sending: "Envoi en cours...",
            success: "Message envoyé avec succès !",
            error: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer."
        }, strandaTypes: {
            oneBedroom: "avec une chambre",
            oneBedroomJacuzzi: "avec une chambre et jacuzzi",
            jacuzziTerrace: "avec jacuzzi sur la terrasse",
            twoBedrooms: "avec deux chambres",
            deluxeJacuzzi: "Deluxe avec jacuzzi",
            deluxeSaunaJacuzzi: "Deluxe avec sauna et jacuzzi",
            apartment: "Appartement",
            studio: "Studio",
            suite: "Suite",
        }, strandaDescriptions: {
            genericDesc: "Nos appartements sont situés à Giżycko, près du port Stranda dans les immeubles résidentiels Stranda Residence, sur la rive du lac Kisajno (baie Tracz). Il offre une belle vue panoramique sur le lac Kisajno et la route des Grands Lacs de Mazurie. L'appartement est luxueusement fini et assure un grand confort de repos. Sur place, vous pouvez utiliser les ressources du port telles que : taverne, concerts en saison estivale, marina, location d'équipements nautiques, etc.",
            locationDesc: "La proximité du centre de Giżycko vous permet de profiter de nombreuses attractions touristiques, des offres de nombreux restaurants et pubs. L'emplacement de l'établissement facilite également l'exploration de la Mazurie en termes de nature, d'histoire et de divertissement. Place de parking incluse.",
            A103: "L'appartement A103 Suite est situé au premier étage du bâtiment, dispose d'un grand et spacieux salon avec kitchenette et canapé-lit, une chambre, une salle de bain avec douche et une grande terrasse avec mobilier.",
            A104: "L'appartement A104 Delux avec jacuzzi privé sur la terrasse est situé au rez-de-chaussée du bâtiment A. Il se compose d'un salon spacieux avec kitchenette et canapé, une chambre avec un lit double, une salle de bain avec douche, une terrasse où se trouve un jacuzzi privé.",
            A105: "L'appartement A105 est une unité de luxe avec jacuzzi, offrant une détente confortable dans un intérieur moderne.",
            B102: "L'appartement B102 situé au rez-de-chaussée du bâtiment B dispose d'un salon spacieux avec kitchenette et son propre jacuzzi sur la terrasse.",
            B106: "Appartement de luxe au rez-de-chaussée avec deux chambres et grand salon.",
            B202: "Appartement unique au premier étage avec sauna privé et jacuzzi sur la terrasse.",
            C404: "Les studios sont situés dans le bâtiment C, ce sont des hébergements avec un lit double, un canapé-lit pour 2 personnes, un salon avec kitchenette, une salle de bain avec douche et une terrasse donnant sur la baie Tracz et le port Stranda."
        }, kisajnoPage: {
            title: "Appartements Kisajno",
            subtitle: "Port Neptun, Giżycko",
            introTitle: "Standard unique au bord du lac",
            description: "Nous proposons un appartement moderne de 55 m², situé au rez-de-chaussée avec accès direct aux charmes du lac Kisajno. Idéal pour les familles ou les groupes d'amis, il assure un repos confortable dans un standard premium.",
            features: [
                "2 chambres séparées avec grands lits",
                "Salon avec canapé confortable et TV",
                "Cuisine complète : lave-vaisselle, micro-ondes, réfrigérateur",
                "Climatisation et WiFi rapide"
            ],
            priceLabel: "Prix à partir de",
            priceValue: "500 PLN",
            priceUnit: "/ nuit",
            amenitiesTitle: "Équipements",
            bookingTitle: "Réservez votre séjour",
            bookingDesc: "Contactez-nous directement pour obtenir la meilleure offre et vérifier la disponibilité aux dates sélectionnées.",
            callAction: "Appeler",
            amenities: {
                view: "Vue lac",
                ac: "Clim",
                smartTv: "Smart TV",
                wifi: "WiFi",
                kitchen: "Cuisine complète",
                dishwasher: "Lave-vaisselle",
                parking: "Parking",
                port: "Port Neptun"
            }
        }, mikolajkiPage: {
            title: "Appartement Gigu Mikołajki",
            subtitle: "Centre de Mikołajki – Place Wolności",
            introTitle: "Appartement confortable au cœur de Mikołajki",
            description: "Un appartement moderne et confortable situé en plein cœur de Mikołajki, sur la Place Wolności – l'emplacement idéal pour les personnes qui souhaitent tout avoir à portée de main. L'appartement est conçu pour un maximum de 4 personnes et se compose d'une chambre douillette avec un lit double confortable, d'un salon avec canapé-lit (couchage supplémentaire), d'une kitchenette entièrement équipée et d'une salle de bain moderne.",
            priceLabel: "Prix dès",
            priceValue: "350 PLN",
            priceUnit: "/ nuit",
            amenitiesTitle: "Équipements",
            bookingTitle: "Réservez votre séjour",
            bookingDesc: "Contactez-nous directement ou effectuez une réservation en ligne immédiate en utilisant le bouton ci-dessous.",
            callAction: "Appeler",
            comfortTitle: "Confort & Équipement",
            comfortDesc: "Chambre avec lit 180x200, WiFi rapide, salon avec TV et canapé-lit",
            kitchenTitle: "Cuisine & Salle de Bain",
            kitchenDesc: "Kitchenette avec lave-vaisselle, salle de bain moderne avec douche, kit de démarrage (café, thé)",
            locationTitle: "Environnement & Emplacement",
            locationDesc: "Vue sur la cour intérieure, plein centre de Mikołajki sur la Place Wolności, proche du lac",
            collapseGallery: "Fermer la galerie",
            expandGallery: "Voir plus de photos",
            bookBtn: "RÉSERVER",
            amenities: {
                view: "Vue sur la cour",
                ac: "Climatisation",
                smartTv: "Smart TV",
                wifi: "WiFi gratuit",
                kitchen: "Kitchenette",
                dishwasher: "Lave-vaisselle",
                parking: "Centre-ville",
                port: "Proche du lac"
            }
        }, fuledaPage: {
            title: "Appartements Fuleda",
            subtitle: "Silence, paix, nature sur le lac Dobskie",
            introTitle: "Oasis de paix en zone de silence",
            description: "L'emplacement de Fuleda est une proposition pour ceux qui veulent se couper complètement de l'agitation de la civilisation. Situé au bord du lac Dobskie, couvert par la zone de silence, il offre des conditions pour une véritable détente entourée d'une réserve naturelle.",
            groundFloorTitle: "Appartement Rez-de- chaussée",
            groundFloorDesc: "Deux chambres climatisées (dont une avec cheminée) et immense terrasse avec accès direct au lac.",
            firstFloorTitle: "Appartement Premier Étage",
            firstFloorDesc: "Deux chambres climatisées, intérieur élégamment fini avec vue sur la réserve et tous les équipements.",
            amenitiesTitle: "Équipements Premium",
            amenities: {
                ac: "Clim",
                fireplace: "Cheminée",
                beach: "Plage privée",
                bonfire: "Lieu de feu de camp",
                wifi: "WiFi",
                kitchen: "Cuisine complète",
                washer: "Machine à laver",
                pier: "Accès à la jetée"
            }
        }, roomsPage: {
            heroTitle: "Chambres en Mazurie",
            heroSubtitle: "Chambres confortables dans une zone calme",
            ctaText: "Vous cherchez plus d'espace à Fuleda ? Découvrez nos",
            ctaLink: "Appartements Fuleda",
            items: {
                fuleda: {
                    title: "Chambres Fuleda",
                    description: "Chambres confortables au bord du lac Dobskie dans une zone de silence. Parfait pour les familles et les amoureux de la nature.",
                    location: "Fuleda, Lac Dobskie",
                    features: ["2 chambres", "Salle de bain", "Cuisine", "Terrasse", "Accès au lac"],
                    priceLabel: "Prix",
                    priceValue: "dès 375 PLN/nuit",
                    detailsBtn: "DÉTAILS",
                    bookBtn: "RÉSERVER"
                }
            }
        }, cookieConsent: {
            title: "Cookies et Confidentialité 🍪",
            description: "Nous attachons de l'importance à votre vie privée. Vous pouvez accepter tous les cookies ou personnaliser vos consentements. Plus d'infos dans la",
            privacyLink: "Politique de Confidentialité",
            acceptAll: "Tout accepter",
            customize: "Personnaliser",
            decline: "Refuser",
            settingsTitle: "Paramètres des cookies",
            back: "Retour",
            necessary: "Nécessaires",
            necessaryDesc: "Requis pour le fonctionnement du site.",
            analytics: "Analytiques",
            analyticsDesc: "Nous aident à améliorer le site.",
            marketing: "Marketing",
            marketingDesc: "Personnalisation des publicités pour vous.",
            save: "Enregistrer les paramètres"
        }, privacyPolicy: {
            title: "Politique de Confidentialité et Cookies",
            intro: "Nous apprécions votre vie privée, veuillez lire notre politique de confidentialité.",
            content: "Cette politique en matière de cookies s'applique à tous les sites Web de mazury.holiday. En utilisant nos sites, vous acceptez l'utilisation de cookies conformément à cette politique. Nous utilisons des cookies pour rendre nos sites plus rapides, plus faciles à utiliser et pour personnaliser le contenu et les publicités. Vous pouvez gérer vos paramètres de cookies dans votre navigateur à tout moment.",
            usefulLinks: "Liens utiles",
            mobileDevices: "Appareils mobiles :"
        }, fuledaApartment: { "parter": { "description": "Apartment with two bedrooms located on the ground floor is a beautifully and stylishly finished property. Situated on Lake Dobskie, which is a quiet zone, it guarantees relaxation in peace and quiet, surrounded by beautiful, pristine Masurian nature.\n\nOur apartments are located in Fuleda on a peninsula on the shore of the lake. It offers a beautiful panoramic view of Lake Dobskie, Cormorant Island, and Helena Island. The apartment is luxuriously finished and ensures a high level of comfort. On site, you can use private access to the water, a barbecue, and a bonfire place. Giżycko (about 12km away) allows you to enjoy many tourist attractions, restaurants, and pubs. The location of the property also makes it easy to explore Masuria in terms of nature and history.\n\nThe Fuleda Apartment (ground floor) with a direct view of Lake Dobskie is located on the ground floor of the building, has two bedrooms, a kitchenette, a bathroom with a shower, and two covered terraces: one at the front of the building with a direct view of Lake Dobskie, the other at the back of the building.\n\nLocation: ground floor\nMaximum number of people: 2+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, fireplace, fold-out 2-person sofa, table, chairs, vacuum cleaner, iron, ironing board, air conditioning, clothes dryer, wardrobe\nBedroom 2 equipment: TV, 160x200 bed, two bedside tables, set of bedding, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, hair straightener, towels, shower gel, soap, body lotion\nFront terrace: armchairs, table, cocoon chair\nBack terrace: terrace furniture set, charcoal grill\nPrivate path to the lake with a bonfire and barbecue area, hammock, two deckchairs\nOther: internet, wifi\nThe apartment is fully equipped, heated, and provides a comfortable stay all year round.\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż where the Wolf's Lair - Hitler's headquarters is located. Nearby forests, meadows, cycling routes, playgrounds. The nearest shop is about 3km away." }, "pietro": { "description": "A beautifully finished apartment with two bedrooms and a mezzanine, located on the upper floor with a breathtaking view of Lake Dobskie. This peaceful, nature-surrounded location is perfect for complete relaxation.\n\nThe apartment offers a spacious living room with a kitchenette, a bathroom with a shower, and two bedrooms. The master bedroom features a 160x200 bed, while the second bedroom has two single beds. There is also an additional sleeping area on the mezzanine. The apartment is equipped with air conditioning, ensuring comfort even on hot days.\n\nLocation: upper floor\nMaximum number of people: 4+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, 160x200 bed, wardrobe, air conditioning\nBedroom 2 equipment: two single beds, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, towels, cosmetics\nTerrace: comfortable terrace furniture set with an amazing view of the lake.\nPrivate path to the lake with a bonfire and barbecue area, hammock.\nOther: internet, wifi\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż." } } }),
    cs: {
        nav: { about: "O nás", apartments: "Apartmány", cottages: "Chaty", charter: "Pronájem", port: "Přístav", attractions: "Atrakce", cooperation: "Spolupráce", contact: "Kontakt", rooms: "Pokoje", bookBtn: "Rezervovat", language: "Jazyk", back: "Zpět",
            concerts: "Koncerty",
            euProjects: "EU Projekty"
        },
        hero: { title: "Dovolená na Mazurách", subtitle: "JEDINEČNÉ OKAMŽIKY", apartmentsBtn: "Naše Apartmány", charterBtn: "730 067 027", scrollDown: "Dolů",
            typewriterDesc: "Podívejte se na naši nabídku",
            bookOnlineBtn: "Rezervovat online"
        },
        intro: { tag: "Mazury.Holiday", title: "Vítejte na", titleHighlight: "Mazurech", p1: "Objevte kouzlo Mazur.", p2: "Odpočinek v Giżycku." },
        luxuryBenefits: {
            tag: "Výhody naší nabídky",
            title: "Luxus je v detailech",
            quality: { title: "Vysoká kvalita povrchových úprav", desc: "V každém našem apartmánu jsme dbali na povrchovou úpravu. Doufáme, že si všimnete všech skrytých i viditelných detailů" },
            views: { title: "Výhledy na jezero", desc: "V krásných slunečných dnech, od východu do západu slunce - TV a filmy na VODu mohou nahradit krásné výhledy na jezero Kisajno nebo Dobské" },
            comfort: { title: "Spánek v komfortních podmínkách", desc: "Spánek je nezbytný pro odpočinek a ovlivňuje kvalitu vašeho pobytu u nás. Všechny postele jsou vybaveny velmi dobrými a pohodlnými matracemi" },
            wifi: { title: "Bezplatné Wi-Fi", desc: "V našich apartmánech jsme připravili připojení Wi-Fi. Není nezbytné pro odpočinek, ale pomáhá například při práci na dálku" },
            gifts: { title: "Startovací balíček", desc: "Pro každého našeho hosta jsme připravili malý dárek, který je součástí naší nabídky dovolené v apartmánech" },
            flexible: { title: "Flexibilní rezervace", desc: "Chápeme, že ne každý výlet lze plně naplánovat. Proto nabízíme flexibilní podmínky rezervace a zrušení" }
        },
        apartments: { title: "Naše Apartmány", description: "Vyberte si místo.", details: "Podrobnosti", pricePrefix: "od", night: "noc", people: "os.", bookBtn: "RESERVAR", items: { stranda: { title: "Stranda", location: "Giżycko", description: "Komfort v přístavu." }, kisajno: { title: "Kisajno", location: "Giżycko", description: "Luxus u jezera." }, fuleda: { title: "Fuleda", location: "Fuleda, Jezioro Dobskie", description: "Oáza klidu." }, domkiSkorupki: { title: "Domky Skorupki", location: "Skorupki, jezero Tałty", description: "Luxusní domky v srdci mazurské přírody." }, pokojeFuleda: { title: "Pokoje Fuleda", location: "Fuleda, Jezero Dobské", description: "Útulné pokoje s výhledem na jezero v klidové zóně." }, mikolajki: { title: "Apartmán Gigu Mikołajki", location: "Plac Wolności, Mikołajki", description: "Moderní apartmán v samém centru Mikołajek." } },
            bookingTitle: "Zarezervujte si pobyt",
            bookingDesc: "Vyberte termíny a zkontrolujte dostupnost.",
            seeCottage: "Zobrazit chaty",
            seeRooms: "Zobrazit pokoje"
        },
        cottagesAndRooms: {
            title: "Naše domky a pokoje",
            description: "Pociťte blízkost přírody v komfortních podmínkách."
        },
        categories: { apartments: "Naše Apartmány", cottages: "Naše Chaty", rooms: "Naše Pokoje", charter: "Pronájem" },
        charter: { tag: "Bez průkazu", title: "Pronájem Jachty", description: "Stillo 30 bez průkazu.", model: "Stillo 30 (2020)", cabins: "3 Kabiny", checkBtn: "Dostupnost", premiumFleet: "Premium", feature1: "Bez průkazu", feature2: "2020", feature3: "Luxus", detailsBtn: "Detaily", thrusters: "Příďové motory", heating: "Topení a Klimatizace", modelVip: "Stillo 30 VIP", boatType: "Luxusní hausbót bez průkazu" },
        stranda: {
            subtitle: "Luxus u jezera", description: "Moderní design.", building: "Budova", apartment: "Apartmán",
            filters: { "jacuzzi": "Jacuzzi", "size": "Size", "sizeAny": "Any", "size4": "Max 4 people", "size6": "Max 6 people", "floor": "Floor", "floorAny": "Any", "floorParter": "Ground floor", "floorPietro": "Upper floor", "sauna": "Sauna", "floor1": "1st Floor", "floor2": "2nd Floor", "floor3": "3rd Floor" },
            units: {
                "C404": {
                    "title": "Apartmán C404 typu Studio",
                    "descriptionPart1": "Apartmány typu Studio se nacházejí v budově C. Jde o ubytování s jednou manželskou postelí, rozkládací pohovkou pro 2 osoby, obývacím pokojem s kuchyňským koutem, koupelnou se sprchou a terasou s výhledem na zátoku Tracz a přístav Stranda.",
                    "descriptionPart2": "Určeno pro maximálně 4 osoby. Apartmán je luxusně zařízený a poskytuje vysoký komfort odpočinku.",
                    "descriptionPart3": "Na místě můžete využít vybavení přístavu, jako je: taverna, letní koncerty, přístav, půjčovna vodního vybavení atd."
                },
                "A103": {
                    "title": "Apartmán A103 Suite",
                    "descriptionPart1": "Apartmán A103 Suite se nachází v prvním patře budovy. Má velký a prostorný obývací pokoj s kuchyňským koutem a rozkládací pohovkou, ložnici, koupelnu se sprchou a velkou terasu s nábytkem.",
                    "descriptionPart2": "Zajišťuje pohodlný odpočinek pro rodiny a skupiny přátel.",
                    "descriptionPart3": "Blízkost přístavu a jezera z něj činí ideální výchozí bod."
                },
                "A104": {
                    "title": "Apartmán A104 Deluxe s vířivkou",
                    "descriptionPart1": "Apartmán A104 Deluxe se soukromou vířivkou na terase se nachází v přízemí budovy A.",
                    "descriptionPart2": "Skládá se z prostorného obývacího pokoje s kuchyňským koutem a pohovkou, ložnice s jednou manželskou postelí, koupelny se sprchou a terasy, kde se nachází soukromá vířivka.",
                    "descriptionPart3": "To vše s krásným výhledem na jezero Kisajno. Apartmán je umístěn nejvýše, což zajišťuje výjimečné výhledy."
                }
            },
            mapTitle: "Umístění budov",
            mapLabels: { "parking": "PARKOVIŠTĚ", "playground": "HŘIŠTĚ", "sauna": "SAUNA", "beach": "PLÁŽ", "rentals": "PŮJČOVNA", "beachbar": "PLÁŽOVÝ BAR", "tavern": "TAVERNA", "shop": "OBCHOD", "scooters": "PŮJČOVNA" },
            features: { "studio": "Studio", "oneBedroom": "1 Ložnice", "twoBedrooms": "2 Ložnice", "jacuzzi": "Vířivka", "sauna": "Sauna" }
        },
        details: { about: "O apartmánu", amenities: "Vybavení", booking: "Rezervace", checkAvailability: "Ovĕřit dostupnost.", callBtn: "Zavolat", lowPrice: "Nejlepší cena.", descriptionPart1: "Luxusní apartmán v", descriptionPart2: "Stranda Residence.", descriptionPart3: "Výhled na jezero.", items: { view: "Výhled", ac: "Klima", terrace: "Terasa", kitchen: "Kuchyně", tv: "TV", wifi: "WiFi", parking: "Parkování", sauna: "Sauna",
                iron: "Žehlička a žehlicí prkno",
                hairDryer: "Fén",
                coffee: "Set na přípravu kávy/čaje",
                roomSalon: "Obývací pokoj",
                roomKitchen: "Kuchyně",
                roomBedroom: "Ložnice",
                roomBathroom: "Koupelna",
                salonFeatures: "TV, pohovka pro 2 osoby, stůl, židle, klimatizace, wifi",
                kitchenFeatures: "indukční deska, lednice, myčka, mikrovlnná trouba, sada nádobí a příborů",
                bedroomFeatures: "TV, postel 180x200, povlečení, sušák na prádlo, žehlicí prkno, žehlička, klimatizace",
                bathroomFeatures: "sprcha, fén, župany, tělové mléko",
                terraceAndOther: "Terasa a Ostatní"
            },
            priceFrom: "Cena od",
            guests: "Max. počet osob",
            backToList: "Návrat",
            gallery: "Galerie",
            collapseGallery: "Skrýt galerii",
            seeMorePhotos: "Zobrazit další fotografie",
            needHelp: "Potřebujete pomoc?",
            availability: "Dostupnost"
        },
        footer: { brandDesc: "Jedinečné chvíle.", navTitle: "Navigace", contactTitle: "Kontakt", followTitle: "Sledujte", rights: "Všechna práva vyhrazena.", linksTitle: "Odkazy" },
        skorupki: {
            aboutTitle: "O chatách",
            title: "Domky Skorupki",
            subtitle: "Váš luxusní úkryt v srdci Mazur",
            introTitle: "Relaxace v pomalém rytmu",
            descriptionPart1: "Domky ve Skorupkách jsou jedinečným místem na mapě Mazur, vytvořeným pro lidi hledající soukromí, luxus a blízkost přírody.",
            descriptionPart2: "Každý domek byl navržen s ohledem na pohodlí našich hostů, spojující moderní řešení s tradiční mazurskou atmosférou.",
            descriptionPart3: "Kouzlo Skorupek spočívá především v autentičnosti a harmonii s okolím.",
            descriptionPart4: "Blízkost jezera Dobské umožňuje jízdu na kajaku, rybaření a dlouhé procházky.",
            areaTitle: "Plocha",
            areaDesc: "Komfortní domky pro rodiny a skupiny",
            locationTitle: "Lokalita",
            locationDesc: "Skorupki, poblíž Giżycka a Mikołajek",
            amenitiesTitle: "Vybavení",
            galleryTitle: "Galerie",
            expandGallery: "Zobrazit více fotek",
            collapseGallery: "Sbalit galerii",
            ctaTitle: "Zažijte kouzlo Skorupek",
            ctaDesc: "Rezervace domku je prvním krokem k nezapomenutelné dovolené.",
            amenities: {
                fullEquip: "Plné vybavení",
                garden: "Soukromá zahrada",
                bonfire: "Gril a ohniště",
                parking: "Parkování",
                wifi: "WiFi",
                ac: "Klimatizace",
                waterAccess: "Přístup k vodě",
                peace: "Ticho a klid"
            },
            details: {
                interiorTitle: "Prostorný interiér",
                interiorDesc: "V přízemí na vás čeká prostorný obývací prostor – srdce domu, kde můžete trávit večery společně na pohodlné rozkládací pohovce. Horní patro je spací zóna: najdete zde hlavní ložnici a druhý pokoj se samostatnými lůžky (možnost spojení), což dává flexibilitu, ať už přijedete s rodinou nebo skupinou přátel.",
                terraceTitle: "Terasa a příroda",
                terraceDesc: "Víme, že počasí může být rozmarné, proto má váš dům velkou zastřešenou terasu. Je to další \"venkovní pokoj\" – ideální pro ranní kávu nebo večerní čtení/odpočinek, bez ohledu na déšť nebo slunce. Před domem máte také svůj vlastní kousek trávníku.",
                activityTitle: "Aktivity a relaxace",
                activityDesc: "Jen pár kroků vás dělí od břehu jezera. Můžete rybařit z našeho mola, zahrát si volejbal nebo se jen dívat na vodu, zatímco si děti hrají na hřišti. Večer vás zveme do společného prostoru s altány na táborák pod hvězdami. A pokud máte čtyřnohého přítele – vezměte ho s sebou, všichni milují zvířata!",
                locationTitle: "A co lokalita?",
                locationDesc: "Jste v samém srdci atrakcí, přesto daleko od shonu. Naskočte do auta a za 10 minut jste v aquaparku Tropikana nebo v Sailing Village. Máte chuť na historii? Pevnost Boyen je vzdálena méně než půl hodiny. Auto zaparkujete bezpečně a zdarma u nás a díky rychlé Wi-Fi můžete okamžitě sdílet své fotografie z dovolené.",
                amenitiesBlockTitle: "VYBAVENÍ A DETAILY",
                bedroomTitle: "Ložnice a spánek",
                bedroomItems: [
                    "Max. hostů: 6",
                    "Ložnice 1: Manželská postel",
                    "Ložnice 2: Dvě samostatná lůžka (lze spojit)",
                    "Obývací pokoj: Rozkládací pohovka (pro 2 osoby)",
                    "Ložní prádlo v ceně"
                ],
                cottageAmenitiesTitle: "Vybavení chaty",
                cottageAmenitiesItems: [
                    "Prostorná, zastřešená terasa",
                    "Soukromá zelená plocha před vchodem",
                    "Plně vybavený kuchyňský kout",
                    "Jídelní kout"
                ],
                commonAreasTitle: "Společné prostory a rekreace",
                commonAreasItems: [
                    "Přímý přístup k jezeru (pobřeží)",
                    "Molo (možnost rybaření)",
                    "Vyhrazené místo na táborák",
                    "Zastřešené zahradní altány",
                    "Dětské hřiště",
                    "Volejbalové hřiště"
                ],
                additionalTitle: "Další informace",
                additionalItems: [
                    "Domácí mazlíčci vítáni (Pet-friendly)",
                    "Parkování zdarma v areálu",
                    "Okolí: Lesy (houbaření), ticho, příroda"
                ],
                price: "od 350 PLN / noc",
                bookBtn: "Rezervovat"
            },
            externalAmenities: "🌲 Klid, prostor a příroda. Poloha osady zajišťuje: komorní atmosféru a ticho, blízkost jezer a mazurských lesů, vynikající podmínky pro procházky, jízdu na kole a odpočinek na čerstvém vzduchu."
        },
        roomsPage: {
            heroTitle: "Pokoje na Mazurách",
            heroSubtitle: "Komfortní pokoje v klidné oblasti",
            ctaText: "Hledáte větší apartmány? Podívejte se na naše",
            ctaLink: "Apartmány Fuleda",
            items: {
                fuleda: {
                    title: "Pokoje Fuleda",
                    description: "Komfortní pokoje u jezera Dobskie v tiché zóně. Ideální pro rodiny a milovníky přírody.",
                    location: "Fuleda, jezero Dobské",
                    features: ["2 pokoje", "Koupelna", "Kuchyně", "Terasa", "Přístup k jezeru"],
                    priceLabel: "Cena",
                    priceValue: "od 375 PLN/noc",
                    detailsBtn: "PODROBNOSTI",
                    bookBtn: "REZERVUJTE"
                }
            }
        },
        calendar: {
            title: "Dostupnost",
            loading: "Načítání...",
            error: "Nepodařilo se načíst aktuální data. Zkuste to prosím za chvíli.",
            prevMonth: "Předchozí měsíc",
            nextMonth: "Příští měsíc",
            days: ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'],
            legend: {
                busy: "Obsazeno",
                checkIn: "Možný příjezd",
                checkOut: "Možný odjezd",
                available: "Dostupné"
            }
        },
        strandaTypes: {
            oneBedroom: "s jednou ložnicí",
            oneBedroomJacuzzi: "s jednou ložnicí a vířivkou",
            jacuzziTerrace: "s vířivkou na terase",
            twoBedrooms: "se dvěma ložnicemi",
            deluxeJacuzzi: "Deluxe s vířivkou",
            deluxeSaunaJacuzzi: "Deluxe se saunou a vířivkou",
            apartment: "Apartmán",
            studio: "Studio",
            suite: "Suite",
        },
        strandaDescriptions: {
            genericDesc: "Naše apartmány se nacházejí v Giżycku, u přístavu Stranda v komplexu Stranda Residence.",
            locationDesc: "Blízkost centra Giżycka umožňuje využívat mnoho turistických atrakcí.",
            A103: "Apartmán A103 Suite se nachází v prvním patře, má prostorný obývací pokoj s kuchyňským koutem.",
            A104: "Apartmán A104 Delux s soukromou vířivkou na terase se nachází v přízemí budovy A.",
            A105: "Apartmán A105 je luxusní jednotka s vířivkou.",
            B102: "Apartmán B102 v přízemí budovy B má prostorný obývací pokoj a vlastní vířivku na terase.",
            B106: "Luxusní apartmán v přízemí se dvěma ložnicemi.",
            B202: "Jedinečný apartmán v prvním patře se soukromou saunou a vířivkou.",
            C404: "Studio apartmány se nacházejí v budově C, jsou to ubytování s jednou manželskou postelí.",
            C205: "Apartmány typu Studio se nacházejí v budově C. Jde o ubytování s jednou manželskou postelí, rozkládací pohovkou pro 2 osoby, obývacím pokojem s kuchyňským koutem, koupelnou se sprchou a terasou s výhledem na zátoku Tracz a přístav Stranda.",
            A204: "Apartmán A204 Suite se nachází v prvním patře budovy A, má velký a prostorný obývací pokoj s kuchyňským koutem, rozkládací pohovkou, ložnici, koupelnu se sprchou a zastřešenou terasu s výhledem na jezero Kisajno.",
            A205: "Apartmán A205 Suite má velký a prostorný obývací pokoj s kuchyňským koutem a rozkládací pohovkou, ložnici, koupelnu se sprchou a velkou zastřešenou terasu s nábytkem. Nachází se ve druhém patře budovy.",
            A302: "Apartmán A302 Suite se nachází v prvním patře budovy A, má velký a prostorný obývací pokoj s kuchyňským koutem a rozkládací pohovkou, ložnici, koupelnu se sprchou a zastřešenou terasu s výhledem na jezero Kisajno.",
            A305: "Apartmán A305 Suite se nachází ve třetím patře budovy, odkud je krásný výhled na jezero Kisajno. Má velký a prostorný obývací pokoj s kuchyňským koutem a rozkládací pohovkou, ložnici, koupelnu se sprchou a velkou zastřešenou terasu s nábytkem.",
            A306: "Apartmán A306 Suite má velký a prostorný obývací pokoj s kuchyňským koutem a rozkládací pohovkou, dvě ložnice, koupelnu se sprchou a velkou zastřešenou terasu s nábytkem. Nachází se ve třetím patře budovy.",
            B103: "Apartmán B103 Deluxe se soukromou vířivkou na terase se nachází v přízemí budovy B. Skládá se z prostorného obývacího pokoje s kuchyňským koutem a pohovkou, ložnice s jednou manželskou postelí, koupelny se sprchou a terasy, kde se nachází soukromá vířivka. To vše s krásným výhledem na jezero Kisajno, zátoku Tracz a přístav Stranda.",
            B201: "Apartmán B201 Suite se nachází v prvním patře budovy B, má velký a prostorný obývací pokoj s kuchyňským koutem, dvě ložnice, dvě koupelny (jednu se sprchou, druhou s vanou) a velkou terasu s výhledem na zátoku Tracz a jezero Kisajno.",
            B304: "Apartmány B304 s 1 ložnicí se nacházejí v budově B. V ložnici je manželská postel, obývací pokoj s kuchyňským koutem a rozkládací pohovkou pro 2 osoby, koupelna se sprchou a terasa s krásným výhledem na jezero Kisajno.",
            B305: "Apartmány B305 s 1 ložnicí se nacházejí v budově B. V ložnici je manželská postel, obývací pokoj s kuchyňským koutem a rozkládací pohovkou pro 2 osoby, koupelna se sprchou a terasa s krásným výhledem na jezero Kisajno.",
            B401: "Apartmán B401 Deluxe se nachází ve 3. nejvyšším patře budovy. Skládá se z prostorného obývacího pokoje s kuchyňským koutem a rozkládací pohovkou, ložnice, koupelny se sprchou, balkonu a velké střešní terasy budovy. To vše s krásným výhledem na jezero.",
            B402: "Apartmán B402 Suite se nachází ve třetím patře budovy, má velký a prostorný obývací pokoj s kuchyňským koutem a rozkládací pohovkou, ložnici, koupelnu se sprchou, balkon a velkou střešní terasu s výhledem na jezero.",
            B404: "Apartmán B404 Suite se nachází ve třetím patře budovy, má velký a prostorný obývací pokoj s kuchyňským koutem a rozkládací pohovkou, ložnici, koupelnu se sprchou, balkon a velkou střešní terasu s výhledem na jezero.",
            A403: "Apartmán A403 Suite se nachází v nejvyšším 3. patře budovy A, má velký a prostorný obývací pokoj s kuchyňským koutem a rozkládací pohovkou, ložnici, koupelnu se sprchou, spodní terasu a střešní terasu se soukromou vířivkou s výhledem na přístav Stranda a zátoku Tracz.",
            C301: "Apartmán C301 Suite se nachází ve druhém patře budovy C, má prostorný obývací pokoj s kuchyňským koutem a pohovkou, dvě ložnice, koupelnu se sprchou a terasu s výhledem na zátoku Tracz a přístav Stranda.",
            C304: "Apartmán C304 Studio se nachází ve druhém patře budovy C, poskytuje ubytování s manželskou postelí, rozkládací pohovkou pro 2 osoby, obývacím pokojem s kuchyňským koutem, koupelnou se sprchou a terasou s výhledem na zátoku Tracz a přístav Stranda. C304 Studio (maximální počet osob 4).",
            C_1_sypialnia: "Apartmán v budově C s 1 ložnicí, nabízející pohodlný odpočinek pro maximálně 4 osoby.",
            C_Studio: "Studio v budově C, vynikající místo k odpočinku s výhledem na zátoku Tracz.",
            C_2_sypialnie: "Prostorný apartmán v budově C se 2 ložnicemi, ideální pro rodiny."
        },
        kisajnoPage: {
            title: "Apartmány Kisajno",
            subtitle: "Přístav Neptun, Giżycko",
            introTitle: "Výjimečný standard u jezera",
            description: "Nabízíme moderní apartmán 55 m² v přízemí s přímým přístupem k jezeru Kisajno.",
            features: [
                "2 oddělené ložnice s velkými postelemi",
                "Obývací pokoj s pohodlnou pohovkou a TV",
                "Plná kuchyně: myčka, mikrovlnná trouba, lednice",
                "Klimatizace a rychlé WiFi"
            ],
            priceLabel: "Cena od",
            priceValue: "500 PLN",
            priceUnit: "/ noc",
            groundFloorTitle: "Apartmán Přízemí",
            groundFloorDesc: "Prostorný obývací pokoj s krbem, klimatizací, ložnice a velká terasa s přímým přístupem k jezeru.",
            firstFloorTitle: "Apartmán Patro",
            amenitiesTitle: "Vybavení",
            bookingTitle: "Rezervujte si pobyt",
            bookingDesc: "Kontaktujte nás přímo pro nejlepší nabídku.",
            callAction: "Zavolat",
            amenities: {
                view: "Výhled na jezero",
                ac: "Klimatizace",
                smartTv: "Smart TV",
                wifi: "WiFi",
                kitchen: "Plná kuchyně",
                dishwasher: "Myčka",
                parking: "Parkování",
                port: "Přístav Neptun"
            }
        },
        mikolajkiPage: {
            title: "Apartmán Gigu Mikołajki",
            subtitle: "Centrum Mikołajek – Plac Wolności",
            introTitle: "Komfortní apartmán v srdci Mikołajek",
            description: "Moderní a komfortní apartmán situovaný v samém srdci Mikołajek na náměstí Plac Wolności – ideální lokalita pro hosty, kteří chtějí mít vše po ruce. Apartmán je určen pro maximálně 4 osoby a skládá se z útulné ložnice s pohodlnou manželskou postelí, obývacího pokoje s rozkládací pohovkou (další místa na spaní), plně vybaveného kuchyňského koutu a moderní koupelny.",
            priceLabel: "Cena od",
            priceValue: "350 PLN",
            priceUnit: "/ noc",
            amenitiesTitle: "Vybavení",
            bookingTitle: "Rezervujte si svůj pobyt",
            bookingDesc: "Kontaktujte nás přímo nebo proveďte okamžitou online rezervaci pomocí tlačítka níže.",
            callAction: "Zavolat",
            comfortTitle: "Komfort a Vybavení",
            comfortDesc: "Ložnice s postelí 180x200, rychlá WiFi, obývací pokoj s TV a rozkládací pohovkou",
            kitchenTitle: "Kuchyně a Koupelna",
            kitchenDesc: "Kuchyňský kout s myčkou, moderní koupelna se sprchou, startovací sada (káva, čaj)",
            locationTitle: "Okolí a Lokalita",
            locationDesc: "Výhled do vnitřního dvora, samotné centrum Mikołajek na náměstí Plac Wolności, blízko jezera",
            collapseGallery: "Sbalit galerii",
            expandGallery: "Zobrazit více fotografií",
            bookBtn: "REZERVOVAT",
            amenities: {
                view: "Výhled do dvora",
                ac: "Klimatizace",
                smartTv: "Smart TV",
                wifi: "WiFi zdarma",
                kitchen: "Kuchyňský kout",
                dishwasher: "Myčka nádobí",
                parking: "Centrum města",
                port: "Blízko jezera"
            }
        },
        fuledaPage: {
            title: "Apartmány Fuleda",
            subtitle: "Ticho, klid, příroda u jezera Dobské",
            introTitle: "Oáza klidu v tiché zóně",
            description: "Lokalita Fuleda je návrh pro ty, kteří se chtějí zcela odříznout od shonu civilizace.",
            groundFloorTitle: "Apartmán Přízemí",
            groundFloorDesc: "Prostorný obývací pokoj s krbem, klimatizací a velkou terasou.",
            firstFloorTitle: "Apartmán Patro",
            firstFloorDesc: "Stylově zařízený apartmán s výhledem na rezervaci.",
            amenitiesTitle: "Premium Vybavení",
            amenities: {
                ac: "Klimatizace",
                fireplace: "Krb",
                beach: "Soukromá pláž",
                bonfire: "Ohniště",
                wifi: "WiFi",
                kitchen: "Plná kuchyně",
                washer: "Pračka",
                pier: "Přístup k molu"
            }
        },
        attractionsPage: {
            title: "Regionální atrakce",
            subtitle: "Giżycko a srdce Mazur nabízí mnoho možností",
            boyen: {
                title: "Pevnost Boyen",
                desc: "Pruská pevnost ve tvaru hvězdy z 19. století."
            },
            bridge: {
                title: "Otočný most",
                desc: "Unikátní technická památka z 19. století."
            },
            port: {
                title: "Přístav Giżycko & Plavby",
                desc: "Největší přístav na Mazurech."
            },
            water: {
                title: "Jezero Kisajno a Dobské",
                desc: "Křišťálově čistá voda, zóny ticha a ostrovy."
            },
            wolfsLair: {
                "title": "Vlčí doupě",
                "desc": "Hitlerův hlavní stan v Gierłożi. Komplex bunkrů ukrytý v lese, svědek historie druhé světové války."
            },
            waterTower: {
                "title": "Vodárenská věž",
                "desc": "Historická věž s vyhlídkovou terasou, ze které se otevírá panorama Giżycka a okolních jezer. Uvnitř muzeum a kavárna."
            },
            castle: {
                "title": "Křižácký hrad",
                "desc": "Zrekonstruovaný hrad v Giżycku, v současnosti luxusní hotel St. Bruno. Spojení historie s moderností."
            },
            bison: {
                "title": "Zubří ohrada",
                "desc": "Ukázková zubří ohrada ve Wolisku. Možnost pozorovat 'krále pralesa' z vyhlídkové plošiny v jejich přirozeném prostředí."
            }
        },
        contactForm: {
            title: "Napište nám",
            subtitle: "Máte dotazy? Chcete rezervovat pobyt?",
            name: "Jméno a příjmení",
            email: "E-mailová adresa",
            phone: "Telefonní číslo",
            subject: "Předmět",
            message: "Zpráva",
            send: "Odeslat zprávu",
            sending: "Odesílání...",
            success: "Zpráva byla úspěšně odeslána!",
            error: "Při odesílání došlo k chybě."
        },
        cookieConsent: {
            title: "Cookies a Soukromí 🍪",
            description: "Dbáme na vaše soukromí. Můžete přijmout všechna cookies nebo upravit své preference. Více v",
            privacyLink: "Zásadách ochrany osobních údajů",
            acceptAll: "Přijmout vše",
            customize: "Upravit",
            decline: "Odmítnout",
            settingsTitle: "Nastavení cookies",
            back: "Zpět",
            necessary: "Nezbytné",
            necessaryDesc: "Vyžadováno pro fungování webu.",
            analytics: "Analytické",
            analyticsDesc: "Pomáhají nám vylepšovat web.",
            marketing: "Marketingové",
            marketingDesc: "Personalizované reklamy.",
            save: "Uložit nastavení"
        },
        privacyPolicy: {
            title: "Zásady ochrany osobních údajů a souborů cookie",
            intro: "Vážíme si vašeho soukromí, přečtěte si prosím naše zásady ochrany osobních údajů.",
            content: "Tyto Zásady používání souborů cookie se vztahují na všechny webové stránky mazury.holiday. Používáním našich stránek souhlasíte s používáním souborů cookie v souladu s těmito zásadami. Soubory cookie používáme k tomu, aby naše stránky fungovaly rychleji, snadněji se používaly a abychom přizpůsobili obsah a reklamy. Nastavení souborů cookie můžete kdykoli spravovat ve svém prohlížeči.",
            usefulLinks: "Užitečné odkazy",
            mobileDevices: "Mobilní zařízení:",
            sections: [
                {
                    "title": "Co jsou to soubory cookie?",
                    "content": "Soubory cookie (angl. <em>cookies</em>) – malé textové informace odesílané webovým serverem a ukládané na straně uživatele (obvykle na pevném disku). Výchozí parametry cookies umožňují číst informace v nich obsažené pouze serveru, který je vytvořil. Cookies se nejčastěji používají u počítadel, anket, internetových obchodů, stránek vyžadujících přihlášení, reklam a k monitorování aktivity návštěvníků."
                },
                {
                    "title": "K čemu používáme cookies?",
                    "content": "Stránky mazury.holiday používají cookies pro různé účely:",
                    "list": [
                        "aby stránky mazury.holiday fungovaly rychleji a byly snáze použitelné",
                        "aby se lépe přizpůsobil obsah a reklamy dostupné na stránkách mazury.holiday vašim očekáváním a zájmům",
                        "k shromažďování anonymních, agregovaných statistik, které nám umožňují porozumět tomu, jak lidé používají naše stránky, a pomáhají nám zlepšovat jejich funkčnost a obsah"
                    ]
                },
                {
                    "content": "Při používání cookies výše popsaným způsobem nikdy neidentifikujeme totožnost uživatelů na základě informací uložených v cookies."
                },
                {
                    "title": "Doba uchování dat v „cookies“",
                    "content": "Používáme dva druhy cookies – <strong>relační</strong> a <strong>trvalé</strong>. První z nich zůstávají na vašem zařízení pouze během používání stránek mazury.holiday. Trvalé cookies zůstávají na vašem zařízení po dobu nastavenou v parametrech cookies nebo dokud je uživatel nesmaže."
                },
                {
                    "title": "Cookies třetích stran",
                    "content": "Při používání stránek mazury.holiday můžete obdržet cookies pocházející od spolupracujících třetích stran, jako je např. Facebook, Google, a také od firem realizujících reklamní kampaně. Další informace o těchto cookies najdete na webových stránkách jednotlivých třetích stran."
                },
                {
                    "title": "Jak smazat nebo změnit nastavení „cookies“?",
                    "content": "Většina internetových prohlížečů je původně nastavena na automatické přijímání cookies. Můžete však změnit nastavení prohlížeče tak, aby byly cookies blokovány – zcela nebo částečně, např. pouze od třetích stran, nebo abyste vždy obdrželi zprávu v okamžiku, kdy jsou cookies odesílány do vašeho zařízení.<br/><br/>Pamatujte však, že pokud zablokujete námi používané cookies, může to negativně ovlivnit pohodlí při používání stránek mazury.holiday, např. nebudete moci navštívit určité oblasti stránek mazury.holiday nebo nebudete dostávat personalizované informace při jejich prohlížení. Znemožníte nám také shromažďování anonymních informací o používání našich stránek za účelem neustálého zlepšování obsahu a služeb mazury.holiday."
                }
            ],
            linksDescription: "Uživatelé by si měli přečíst zásady ochrany osobních údajů těchto firem, aby poznali jejich pravidla pro používání souborů cookie:",
            manageCookies: "Pro správu nastavení cookies vyberte ze seznamu níže internetový prohlížeč, který používáte, a postupujte podle pokynů:"
        },
        pokojeFuledaPage: {
            heroTitle: "Rezidence Fuleda",
            price: "od 375 PLN/noc",
            description: "We offer two rooms for rent: one with a double bed, the other with two single beds, a bathroom with a shower and a toilet. There is a covered terrace next to the rooms. In a separate building located 10m from the rooms, there is a kitchen with an additional toilet. Everything is located on the Fuledzki Róg peninsula on the shores of Lake Dobskie, with a quiet zone on the fenced grounds of the Fuleda Farm. A wonderful place for people who appreciate wild nature, peace, and quiet. Away from the city.\n\nA terraced building located on private allotments by Lake Dobskie. In the main building for private use there are two rooms, a bathroom with a shower and a toilet, and a covered terrace. Opposite the terrace, at a distance of about 10m, there is a building with a kitchen and a second toilet (also for private use). On the other side of the building, at a distance of about 20m, there is a private path to the lake, where there is a viewing terrace with a grill, a place for a bonfire, and a rowing boat.\n\nRecommended for families with children, anglers, mushroom pickers, and nature lovers.\n\nEquipment: Wifi, TV, washing machine, iron, ironing board, hair dryer, vacuum cleaner, fan, microwave, toaster, kettle, gas stove, fridge, coffee machine, dishes, pots, cutlery, cups.\nBedding and towels provided upon check-in.\n\nRoom 1: bed for 2 people, access to the terrace, vacuum cleaner, hair dryer, iron, ironing board.\nRoom 2: two single beds, TV, access to the terrace.\nBathroom: shower, washing machine, hair dryer, hair straightener, towels, bathrobes, cosmetics.\nKitchen (in a building 10m away): fridge, dishwasher, microwave, toaster, set of dishes and cutlery.\nTerrace: spacious terrace, private path to the lake, place for a grill and bonfire.",
            amenitiesTitle: "Vybavení",
            room1Title: "Pokoj 1 (Dvoulůžkový)",
            room1Items: ["Manželská postel", "Vstup na terasu", "Vysavač", "Fén", "Žehlička", "Žehlicí prkno"],
            room2Title: "Pokoj 2 (Dvě lůžka)",
            room2Items: ["Dvě samostatná lůžka", "TV", "Vstup na terasu"],
            kitchenTitle: "Kuchyně",
            kitchenNote: "(samostatná budova 10m)",
            kitchenItems: ["Lednice", "Myčka", "Mikrovlnná trouba", "Toustovač", "Nádobí a příbory", "Plynový sporák", "Káva a čaj"],
            bathroomTitle: "Koupelna",
            bathroomItems: ["Sprcha", "Pračka", "Fén", "Žehlička na vlasy", "Ručníky", "Župany", "Toaletní potřeby"],
            terraceTitle: "Terasa a okolí",
            terraceItems: ["Prostorná terasa", "Soukromý přístup k jezeru", "Místo na gril a ohniště", "Veslice", "Vyhlídková terasa"],
            bookingTitle: "Rezervace",
            bookingDesc: "Zkontrolujte dostupnost a rezervujte",
            bookBtn: "REZERVOVAT NYNÍ",
            callBtn: "Volejte: 730 067 027",
            bestPrice: "Nejlepší ceny - rezervujte přímo",
            galleryTitle: "Galerie",
            expandGallery: "Zobrazit více fotek",
            collapseGallery: "Sbalit galerii"
        },
        charterPage: {
            heroTitle: "Stillo 30 VIP",
            heroSubtitle: "Motorová jachta Stillo 30 VIP",
            mainTitle: "Váš luxusní domov na vodě",
            desc1: "<strong>Stillo 30 VIP</strong> je nástupcem osvědčené a ceněné Futury 870. Jedná se o jednotku navrženou tak, aby splnila očekávání nejnáročnějších majitelů lodí v sektoru výtlačných a polokluzných hausbótů. Nautické kvality, ověřené u oceňovaného předchůdce, spojené s revoluční praktičností.",
            desc2: "Na palubě najdete až <strong>6 míst na spaní</strong>, plnohodnotnou koupelnu a obývací pokoj s panoramatickými okny a vysokým stropem (cca 190 cm), což dává pocit skutečného apartmánu na vodě. Široké boční paluby vedou na příďovou terasu na opalování a nízká koupací plošina na zádi usnadňuje vstup do vody a kotvení u mola.",
            desc3: "Mezi základní výhody patří silný stacionární motor 52 koní, <strong>dva dokormidlovací zařízení</strong>, elektrický kotevní vrátek, matrace s termoplastickou pěnou, neomezené WiFi, TV s Smart TV Max, kávovar Nespresso a mnoho dalšího...",
            desc4: "Co je důležité pro charter: jednotka udržuje rychlost pod 15 km/h, takže v Polsku ji můžete řídit <strong>bez průkazu</strong> – po krátkém zaškolení si převezmete jachtu a vyrazíte na trasu. Stillo 30 tedy nabízí luxus, pohodlí a plnost masurského dobrodružství a zároveň je ideální volbou pro rodiny a skupiny přátel hledající svou první zkušenost s vlastním „domem na vodě“.",
            vipAmenitiesTitle: "VIP Vybavení",
            navAndDriveTitle: "Navigace a Pohon",
            navAndDriveDesc: "Dokormidlovací zařízení (Příď/Záď), Tablet s mapami jezer, Motor 52 koní",
            vipStandardTitle: "VIP Standard",
            vipStandardDesc: "Topení, Neomezené WiFi, VOD a HBO Max, Kávovar Nespresso",
            safetyTitle: "Bezpečnost",
            safetyDesc: "Plná záchranná výbava, Instalace 230V Non-Stop, Elektrický kotevní vrátek",
            galleryTitle: "Fotogalerie",
            expandGallery: "Zobrazit více fotek",
            collapseGallery: "Sbalit galerii",
            bookTermTitle: "Rezervovat termín",
            bookTermDesc: "Zkontrolujte dostupnost v našem online kalendáři a rezervujte si svou vysněnou dovolenou ještě dnes.",
            bookBtn: "REZERVUJTE TO",
            techSpecsTitle: "Technické údaje",
            specs: {
                length: "Délka",
                width: "Šířka",
                draft: "Ponor",
                engine: "Motor",
                cabins: "Kabiny",
                crew: "Posádka"
            },
            equipmentTitle: "Vybavení",
            equipmentList: [
                "Příďové a záďové kormidelní zařízení",
                "Kokpitový stůl",
                "SMART TV (Smart TV, YouTube)",
                "WiFi (neomezené), Rádio/Bluetooth",
                "Zásuvky 12V (4 ks) a 230V (4 ks)",
                "Topení Webasto",
                "Teplá voda (Bojler 30L)",
                "Mořské WC se sprchou",
                "Výrobník ledu, Toustovač, Rychlovarná konvice",
                "Kávovar Nespresso (+kapsle)",
                "Plné kuchyňské vybavení",
                "Elektrický kotevní vrátek",
                "Echolot, Navigace - Plotter"
            ]
        },
        amenityNames: {
            "Klimatyzacja": "Klimatizace",
            "WiFi": "WiFi",
            "Smart TV": "Smart TV",
            "Prysznic": "Sprcha",
            "Ręczniki": "Ručníky",
            "Zmywarka": "Myčka nádobí",
            "Płyta indukcyjna": "Indukční deska",
            "Pościel": "Lůžkoviny",
            "Łóżka małżeńskie i pojedyncze": "Manželské a samostatné postele",
            "Prywatny taras z grillem": "Soukromá terasa s grilem",
            "Miejsce na ognisko": "Ohniště",
            "Dostęp do jeziora": "Přístup k jezeru",
            "Miejsce parkingowe": "Parkovací místo",
            "W pełni wyposażony aneks kuchenny": "Plně vybavený kuchyňský kout",
            "Aneks kuchenny (płyta, lodówka, zmywarka)": "Kuchyňský kout (deska, lednice, myčka)",
            "Ekspres do kawy": "Kávovar",
            "Taras z meblami wypoczynkowymi": "Terasa se zahradním nábytkem",
            "Prywatne Jacuzzi": "Soukromá vířivka",
            "Balkon z meblami wypoczynkowymi": "Balkon se zahradním nábytkem"
        },
        contactExtra: {
            "callUs": "Zavolejte nám",
            "writeUs": "Napište nám",
            "mapLabel": "Mapa umístění:"
        },
        cooperationPage: {
            "title": "Spolupráce",
            "subtitle": "Vaše nemovitost v nejlepších rukou na Mazurách",
            "services": {
                "title": "Profesionální správa nemovitostí",
                "desc": "Hledáte spolehlivého partnera, který se postará o vaši nemovitost? Mazury.Holiday je tým odborníků, který z vašich ramen sejme všechny povinnosti spojené s krátkodobým pronájmem. Zvyšujeme zisky majitelů při zachování nejvyššího standardu služeb hostům."
            },
            "marketing": {
                "title": "Prémiový marketing",
                "desc": "Vaše nemovitost se umístí na předních pozicích na portálech jako Booking.com, Airbnb a na naší platformě Mazury.Holiday. Provádíme focení a videa z dronu."
            },
            "guests": {
                "title": "Pronájem bez údržby",
                "desc": "Staráme se o celý cyklus: od rezervace a plateb, přes profesionální přivítání hostů až po podporu během jejich pobytu 24/7."
            },
            "maintenance": {
                "title": "5hvězdičkový standard",
                "desc": "Náš úklidový a technický tým se stará o každý detail. Vaše nemovitost je před příjezdem každého hosta vždy zářivě čistá a v perfektním technickém stavu."
            },
            "whyUs": {
                "title": "Proč s námi spolupracovat?",
                "point1": "Místní zkušenosti a znalost mazurského trhu",
                "point2": "Transparentní zúčtovací systém a panel majitele",
                "point3": "Neustálá technická a údržbová péče",
                "point4": "Optimalizace cen (Revenue Management)"
            }
        },
        coopExtra: {
            "heroTitle": "B2B spolupráce",
            "heroSubtitle": "VAŠE NEMOVITOST V NEJLEPŠÍCH RUKOU NA MAZURÁCH",
            "securityTitle": "Bezpečnost",
            "securityDesc": "Ověření hostů a pojištění proti škodám zaručují bezpečnost vaší investice.",
            "readyTitle": "Připraveni na vyšší zisky?",
            "readyDesc": "Kontaktujte nás a zjistěte, kolik může váš apartmán nebo dům na Mazurách vydělat.",
            "letsTalk": "Pojďme si promluvit"
        },
        coopModels: {
            "title": "Modely spolupráce",
            "full_title": "Komplexní správa",
            "full_desc": "Zahrnuje marketing, služby pro hosty, úklid, drobné opravy a správu cen. Ideální pro investory, kteří si cení svého času.",
            "marketing_title": "Pouze marketing a rezervace",
            "marketing_desc": "My se staráme o získávání hostů a vyřizování online rezervací a vy se staráte o přivítání hostů a úklid."
        },
        coopSteps: {
            "title": "Jak vypadá spolupráce?",
            "step1_title": "Audit a ocenění",
            "step1_desc": "Navštívíme vaši nemovitost, zkontrolujeme její potenciál a navrhneme optimální cenovou strategii.",
            "step2_title": "Příprava nabídky",
            "step2_desc": "Vytvoříme profesionální popis, zorganizujeme focení a implementujeme nemovitost na rezervační platformy.",
            "step3_title": "Zahájení prodeje",
            "step3_desc": "Spustíme marketingové kampaně a otevřeme kalendář pro první rezervace.",
            "step4_title": "Správa a zisky",
            "step4_desc": "Převezmeme kompletní služby hostům a úklid a vy každý měsíc obdržíte transparentní zprávu a zisky."
        },
        fuledaApartment: { "parter": { "description": "Apartment with two bedrooms located on the ground floor is a beautifully and stylishly finished property. Situated on Lake Dobskie, which is a quiet zone, it guarantees relaxation in peace and quiet, surrounded by beautiful, pristine Masurian nature.\n\nOur apartments are located in Fuleda on a peninsula on the shore of the lake. It offers a beautiful panoramic view of Lake Dobskie, Cormorant Island, and Helena Island. The apartment is luxuriously finished and ensures a high level of comfort. On site, you can use private access to the water, a barbecue, and a bonfire place. Giżycko (about 12km away) allows you to enjoy many tourist attractions, restaurants, and pubs. The location of the property also makes it easy to explore Masuria in terms of nature and history.\n\nThe Fuleda Apartment (ground floor) with a direct view of Lake Dobskie is located on the ground floor of the building, has two bedrooms, a kitchenette, a bathroom with a shower, and two covered terraces: one at the front of the building with a direct view of Lake Dobskie, the other at the back of the building.\n\nLocation: ground floor\nMaximum number of people: 2+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, fireplace, fold-out 2-person sofa, table, chairs, vacuum cleaner, iron, ironing board, air conditioning, clothes dryer, wardrobe\nBedroom 2 equipment: TV, 160x200 bed, two bedside tables, set of bedding, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, hair straightener, towels, shower gel, soap, body lotion\nFront terrace: armchairs, table, cocoon chair\nBack terrace: terrace furniture set, charcoal grill\nPrivate path to the lake with a bonfire and barbecue area, hammock, two deckchairs\nOther: internet, wifi\nThe apartment is fully equipped, heated, and provides a comfortable stay all year round.\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż where the Wolf's Lair - Hitler's headquarters is located. Nearby forests, meadows, cycling routes, playgrounds. The nearest shop is about 3km away." }, "pietro": { "description": "A beautifully finished apartment with two bedrooms and a mezzanine, located on the upper floor with a breathtaking view of Lake Dobskie. This peaceful, nature-surrounded location is perfect for complete relaxation.\n\nThe apartment offers a spacious living room with a kitchenette, a bathroom with a shower, and two bedrooms. The master bedroom features a 160x200 bed, while the second bedroom has two single beds. There is also an additional sleeping area on the mezzanine. The apartment is equipped with air conditioning, ensuring comfort even on hot days.\n\nLocation: upper floor\nMaximum number of people: 4+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, 160x200 bed, wardrobe, air conditioning\nBedroom 2 equipment: two single beds, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, towels, cosmetics\nTerrace: comfortable terrace furniture set with an amazing view of the lake.\nPrivate path to the lake with a bonfire and barbecue area, hammock.\nOther: internet, wifi\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż." } },
        descKeys: {
            "location": "Umístění",
            "maxGuests": "Maximální počet hostů",
            "kitchen": "Vybavení kuchyně",
            "bedroom1": "Vybavení ložnice 1",
            "bedroom2": "Vybavení ložnice 2",
            "bedroom3": "Vybavení ložnice 3",
            "bathroom": "Vybavení koupelny",
            "living": "Vybavení obývacího pokoje",
            "terraceFront": "Přední terasa",
            "terraceBack": "Zadní terasa",
            "terrace": "Terasa",
            "balcony": "Balkon",
            "others": "Ostatní",
            "included": "V nabídce",
            "additional": "Další informace",
            "bedroom": "Vybavení ložnice",
            "livingRoom": "Obývací pokoj"
        }
    },
    lt: __assign(__assign({}, translationsLegal_1.translationsLegal.lt), { "termsPage": {
            "title": "Reglamentas serviso",
            "intro": "Šiek tiekantis Reglament nurodoja naudojimo įsigyti paslaugas atskiriamųjų namų, namų ir charterių paslaugų, kuriuos Mazury.Holiday suteikia. Rezervacijos atlikimas yra vienodai kaip susipažinimas su ir priėmimas Reglamento nurodymais.",
            "sections": [
                {
                    "title": "§1. Bendra informacija",
                    "list": [
                        "Paslaugų duomenys ir tvarkytojas yra firmos RAD'LIGHT, Myśliwska 3, 11-500 Giżycko.",
                        "Šis Reglament taikomas visoms rezervacijoms, atlikomoms per interneto svetainę mazury.holiday, telefoną arba el. paštą.",
                        "Hotelio darbo laikas pradedamas 15:00 dienos prijungimo metu ir baigiasi 11:00 dienos išeities metu."
                    ]
                },
                {
                    "title": "§2. Rezervacija ir mokėjimas",
                    "list": [
                        "Rezervacijos gali būti atliktos per rezervavimo sistemą, telefonu arba el. paštu.",
                        "Rezervacija gauna garantinio statuso po įmoka, kuri yra 30% paslaugų bendros vertės, nurodytus paslaugų duomenys.",
                        "Nepažymėtas įmokos terminas yra vienodas kaip rezervacijos atšaukimas.",
                        "Paskutinė paslaugų mokesčių suma gauna galimybę iki dienos prijungimo, kai duoda klavesus.",
                        "Jeigu vartotojas atmink paslaugas, įmoka nereikalauja grąžinimo. Jeigu paslaugos trukmė mažėja, paslaugų duomenys nereikalauja grąžinimo už nepanaudotus dienas."
                    ]
                },
                {
                    "title": "§3. Paslaugų sąlygos",
                    "list": [
                        "Viesasis privalomas pateikti tobulęs dokumento tokiu kaip pasiūlėjimas, kuriame yra fotografija, metu prijungimo metu.",
                        "Paslaugosje esančios žmonės skaičius negali viršyti rezervacijos metu nurodyto skaičiaus. Nenurodžiamos žmonės gali būti pasiekti paslaugų teritoriją tik nuo 8:00 iki 22:00, su paslaugų duomenys suteikimu.",
                        "Atskirameje namuose ir namuose yra galimybė palinkti smukusius gyvūnus tik po priėmimo į rezervaciją ir gautos paslaugų duomenys priėmimo.",
                        "Viesasis privalomas atsakyti už visus materialius suteikiamus dažniausiems neseniai gyvūnams, kuriuos jis arba jie padeda ištrinti.",
                        "Paslaugosje yra galimybė priimti šiek tiekantis paslaugas nuo 22:00 iki 7:00 dienos kitos metų."
                    ]
                },
                {
                    "title": "§4. Paslaugos su gyvūnais",
                    "list": [
                        "Paslaugos su gyvūnais yra galima tik po priėmimo į rezervaciją ir gautos paslaugų duomenys priėmimo.",
                        "Pirktis gyvūno gali būti pridėtas papildomas mokesčius pagal laikomą kainą.",
                        "Gyvūno savininkas atsakoma už visus finansinius ir įstatymus atsakomybes dėl galimų daugybos nurodymų, padarytų gyvūnuje įsekmėje.",
                        "Gyvūnai negali būti palikti vienas namuose ar domkeje be užtikrinimo. Šunsiai turi būti išvykdyti į smycius bendrosios sritis teritorijoje."
                    ]
                },
                {
                    "title": "§5. Galimybės",
                    "list": [
                        "Pateiktoji paslauga nesuteikia atsakomybės už gatvę paliktaus gyvūno.",
                        "Pateiktoji paslauga turėtų tekti nepriimti gatvę paliktojo, kuris iš anksto nurodė savo nesklandumą Reglamentui, padarydamas daugybos nurodymus arba škodą į paslaugos objektą ar kitoms gatvėms.",
                        "Jeigu Reglamento nurodymai bus nesuteikti, Pateiktoji paslauga turėtų tekti išmeldyti gatvę paliktają be grįžtamasis mokesčiai."
                    ]
                }
            ]
        }, "gdprPage": {
            "title": "Informacinio sąlygos (RODO)",
            "intro": "Pagal art. 13 bendrojiame duomenų apsaugos reglamente, priimtame 2016 metu 27 kovo dalyje (EUCJ L 119 nuo 4 mėg.), informuoju, kad:",
            "list": [
                "<strong>Informacijos savininkas yra:</strong> RAD'LIGHT, Myśliwska 3, 11-500 Giżycko.",
                "<strong>Kontaktas su informacijos savininku:</strong> rezerwacje@mazury.holiday",
                "Jūsų duomenys bus naudojami paslaugos vykdyti pagal art. 6 ust. 1 lit. a bendrojiame duomenų apsaugos reglamente, priimtame 2016 metu 27 kovo dalyje.",
                "Jūsų duomenys bus saugomi iki Jūsų sutikimo atšaukimo.",
                "Jūs turite teisę užsibrėžti informacijos savininkui prieigą į savo duomenis, jų suteikimą, šalinimą arba apriboti naudojimą, atšaukti sutikimą ir perkelti duomenis.",
                "Jūsų duomenys yra pasirinktiniai, tačiau jei juos nesuteiksime, galėtume neįmanoma susisiekti su Jumis už paslaugos vykdyti. Tačiau pagal art.6 ust.1 lit. a bendrojiame duomenų apsaugos reglamente, priimtame 2016 metu 27 kovo dalyje, suteikiu sutikimą naudojant savo duomenis telefoninėje ar elektroniniame kontaktui apie paslaugos vykdyti."
            ]
        }, "contactExtra": {
            "callUs": "Skambinkite mums",
            "writeUs": "Rašykite mums",
            "mapLabel": "Vietovės žemėlapis:"
        }, "coopExtra": {
            "heroTitle": "B2B bendradarbiavimas",
            "heroSubtitle": "JūSŲ OBJEKTAS MAZURUJE",
            "securityTitle": "Saugumas",
            "securityDesc": "Gostų vertifikacija ir draudimas už širdies nusivartojimą garantuoja jūsų investicijos saugumą.",
            "readyTitle": "Ar esate gotas gauti didesnes lėšas?",
            "readyDesc": "Susisiekite su mumis ir sužinokite, kiek galėtų uždirbti jūsų atstovaus namo ar domero Mazurųje.",
            "letsTalk": "Sužinokime"
        }, "amenityNames": {
            "Klimatyzacja": "Klimatinis konsolis",
            "WiFi": "WiFi",
            "Smart TV": "Smart TV",
            "Prysznic": "Prasciausias širdies stebuklis",
            "Ręczniki": "Ruošiniai",
            "Zmywarka": "Zvaigždžių vaikas",
            "Płyta indukcyjna": "Indukcinė plitas",
            "Pościel": "Poliūtis",
            "Łóżka małżeńskie i pojedyncze": "Vidutinio dydžio ir vienos žmonės namai",
            "Prywatny taras z grillem": "Privatus taras su grillu",
            "Miejsce na ognisko": "Lietusis vietovėje",
            "Dostęp do jeziora": "Jūros prieiga",
            "Miejsce parkingowe": "Parkavimo vietovė",
            "W pełni wyposażony aneks kuchenny": "Išplėstas vaikų namas",
            "Aneks kuchenny (płyta, lodówka, zmywarka)": "Vaikų namas (plokštynė, kibicėlė, zvaigždžių vaikas)",
            "Ekspres do kawy": "Kavosas expressas",
            "Taras z meblami wypoczynkowymi": "Taras su vaikščiotinėmis mebliu",
            "Prywatne Jacuzzi": "Privatus Jacuzzi",
            "Balkon z meblami wypoczynkowymi": "Balkonas su vaikščiotinėmis mebliu"
        }, "nav": {
            "about": "Apie mus",
            "apartments": "Atstovai",
            "cottages": "Miestai",
            "charter": "Charteris",
            "concerts": "Koncertai",
            "port": "Portas",
            "attractions": "Atrakcijos",
            "cooperation": "Sprendimai",
            "contact": "Kontaktai",
            "rooms": "Kambariai",
            "bookBtn": "Rezervuoti",
            "language": "Kalba",
            "back": "Grįžti",
            "euProjects": "EUK projektai"
        }, "hero": {
            "title": "Mazurų vakancijos",
            "subtitle": "PATIKRINK, KĄ Galiu Jums Padėti",
            "typewriterDesc": "Patikrinkite musiątę",
            "apartmentsBtn": "Mūsų atstovavimai",
            "charterBtn": "730 067 027",
            "bookOnlineBtn": "Rezervuokite online",
            "scrollDown": "Nusileiskite žemėlapiui"
        }, "intro": {
            "tag": "Mazury.Holiday",
            "title": "Sveikas šiek tiekose",
            "titleHighlight": "Dideliuose jūriose",
            "p1": "Laukime Jums atidaryti Mazurų magiją mūsų luksusiniuose atstovavimais, klimatinėse namuose ir yate paslūgai.",
            "p2": "Sukurti laisvę Giżyckuje, džiaugtis natura Fuleduje arba nuolatyti Skorupkose. Jūsų tikslus vactionas prasideda šiuo metu."
        }, "luxuryBenefits": {
            "tag": "Mūsų paslaugos savybės",
            "title": "Luksus yra detalėse",
            "quality": {
                "title": "Sunkinga baigiamasis",
                "desc": "Kiekvienam mūsų atstovavimui dėmesys buvo užtikrintas. Mes tikimės, kad Jums pasižymėtumėte visus paslėptus ir matomus detalius"
            },
            "views": {
                "title": "Jūrių perspektyvos",
                "desc": "Atsižvelgiant į šiek tiekų svarbiausius dienas - nuo šiaurės iki vėkesies, filmai VOD galėtų užtikrinti Jums šiek tiekų perspektyvas Kisajnoje arba Dobskame"
            },
            "comfort": {
                "title": "Laisvumas keliuose",
                "desc": "Slinkus laikas yra nebesikeičiamas ir turi įtaką jūsų paslaugos kalidadui už mūsų. Visi šiek tiekų kabinetai yra įgyvendinti su geresnėmis ir komfotinėmis matavimais"
            },
            "wifi": {
                "title": "Nemokamas Wi-Fi",
                "desc": "Mūsų atstovavimai priklauso nuo nemokamo Wi-Fi ryšio. Jis nėra būtinas keliuose, bet padeda, pvz., dirbant nuotoliniuose"
            },
            "gifts": {
                "title": "Startinė sarašas",
                "desc": "Kiekvienam iš mūsų gamininkų prikračiaujiame su mažuoju atvykojoje, kuris yra elementas mūsų vactiono paslaugų pakankamoje"
            },
            "flexible": {
                "title": "Elastinė rezerwacija",
                "desc": "Jie žina, kad planai gali keistis. Dėl to galime leisti datų keitimą situacijose, kai yra nepakankamai laiko arba kitos atvejai."
            }
        }, "apartments": {
            "title": "Mūsų apartamentai",
            "description": "Pasirinkite tinkamus vietovę savo vactionui.",
            "details": "Sudėtingumai",
            "pricePrefix": "nuo",
            "night": "nakties",
            "people": "maksimali žmonių skaičius",
            "bookBtn": "UžSAKYTI Jį",
            "bookingTitle": "Užsakykite atvykojimą",
            "bookingDesc": "Pasirinkite datus ir patikrinkite galimybę.",
            "items": {
                "stranda": {
                    features: { studio: "Studija", oneBedroom: "1 Miegamasis", twoBedrooms: "2 Miegamieji", jacuzzi: "Sūkurinė vonia", sauna: "Pirtis" },
                    mapLabels: { parking: "AIKŠTELĖ", playground: "ŽAIDIMŲ AIKŠTELĖ", sauna: "PIRTIS", beach: "PAPLŪDIMYS", rentals: "NUOMA", beachbar: "PAPLŪDIMIO BARAS", tavern: "SMUKLĖ", shop: "PARDUOTUVĖ" },
                    mapTitle: "Pastatų vieta",
                    filters: { jacuzzi: "Sūkurinė vonia", size: "Žmonių skaičius", sizeAny: "Bet koks", size4: "Iki 4 žmonių", size6: "Iki 6 žmonių", floor: "Aukštas", floorAny: "Bet koks", floorParter: "Pirmas aukštas", floorPietro: "Antras aukštas" },
                    "title": "Apartamentai Stranda Residence",
                    "location": "Giżycko, jezioro Kisajno",
                    "description": "Apartamentai yra prie Stranda porto kompleksui Stranda Residence..."
                },
                "kisajno": {
                    "title": "Apartamentai Kisajno",
                    "location": "Giżycko, jezioro Kisajno",
                    "description": "Luksusas už jūsų keliučioje."
                },
                "fuleda": {
                    "title": "Apartamentai Fuleda",
                    "location": "Fuledas, Dobskoje jūzias",
                    "description": "Nuo miesto žingsnio vidurio laukimas"
                },
                "domkiSkorupki": {
                    "title": "Skorupki domai",
                    "location": "Skorupki, Tałty jūzias",
                    "description": "Mazurskios naturos širdies domai"
                },
                "pokojeFuleda": {
                    "title": "Fuledas kambieri aiškumas",
                    "location": "Fuledas, Dobskoje jūzias",
                    "description": "Sveikatai kambieri su jūzio perspektyva centruojant"
                },
                "mikolajki": {
                    "title": "Mikołajki apartamentai",
                    "location": "Mikołajki, Mikołajskis jūzias",
                    "description": "Naujas atsargusis apartamentas Mikołajke centroje"
                }
            }
        }, "cottagesAndRooms": {
            "title": "Mūsų domai ir kambieri aiškumas",
            "description": "Sveikatos aplinka naturėje komfortuose"
        }, "charter": {
            "tag": "Be vairavimo licencijos",
            "title": "Motorsvorčio jachtas charteris",
            "description": "Stillo 30 motorsvorčio jachtas, kurį galima dirbti be vairavimo licencijos",
            "model": "Stillo 30 (2020)",
            "cabins": "Trys uždarytos kabiniai",
            "checkBtn": "Patikrinkite galimybę",
            "premiumFleet": "Premium flota",
            "feature1": "Bez patento",
            "feature2": "Metai 2020",
            "feature3": "Luksusinė įranga",
            "detailsBtn": "Peržiūrėk detalius informacijas",
            "thrusters": "Sterilizavimas struikiais",
            "heating": "Širdies šiek tiekimas",
            "modelVip": "Stillo 30 VIP",
            "boatType": "Luksusinis Houseboat be patento"
        }, "stranda": {
            "subtitle": "Sveiki atvykę į luksusines aukščiojius apartamentus Giżyckoje už Kisajnojį jūriu",
            "description": "Apartamentai yra Stranda portui prieiga, Stranda Residence komplekso viduje. Jūsų vietovė yra giliai susijusi su jūriu ir porto paslaugomis (vandens įrankio užtikrinimo lentva, taverna, vandens šventėje - rock koncertai), taip pat Giżyckos centras suteikia daugybę aktyvių laiko suvokimų Mūsų Didžiųjų Jeziorų Marškoje.",
            "building": "Budynas",
            "apartment": "Apartamentas",
            "filters": {
                "jacuzzi": "Jacuzzi",
                "size": "Žmonių skaičius",
                "sizeAny": "Bet koks",
                "size4": "Maksimaliai 4 žmonės",
                "size6": "Maksimaliai 6 žmonės",
                "floor": "Kondygnacija",
                "floorAny": "Bet koks",
                "floorParter": "Pirmasis",
                "floorPietro": "Kambas"
            },
            "mapTitle": "Pastatų vietos",
            "mapLabels": { "parking": "AIKŠTELĖ", "playground": "ŽAIDIMŲ AIKŠTELĖ", "sauna": "PIRTIS", "beach": "PAPLŪDIMYS", "rentals": "NUOMA", "beachbar": "PAPLŪDIMIO BARAS", "tavern": "TAVERNA", "shop": "PARDUOTUVĖ" },
            "features": { "studio": "Studija", "bedroom1": "1 Miegamasis", "bedroom2": "2 Miegamieji", "jacuzzi": "Sūkurinė vonia", "sauna": "Pirtis" },
            "units": {
                "C404": {
                    "title": "Komandina C404 tipo Studio",
                    "descriptionPart1": "Komandinia tipo Studio yra suteikiama į budynuką C, tai yra nocleginė vietovė su dviejų žmonių staliu, plitai išdėstytą sofa, salonu su kūryba ir vaikščiotėsu, vaikščiotėsu su prysniuku ir tarasu su Valonos Tracioje ir Strandų portui rodymu.",
                    "descriptionPart2": "Nurodyta maksimaliai 4 žmonėms. Komandina yra luksusinai uždengta ir suteikia aukščioji komforto vypokojimo vietovė.",
                    "descriptionPart3": "Vietovėje galima naudoti porto išteklius, tokius kaip: taverna, lankstai šeimose, marina, vandens įmoka, itp."
                },
                "A103": {
                    "title": "Komandina A103 Suite",
                    "descriptionPart1": "Komandina A103 Suite yra pirmame kambuose budynukui, ji turėtų didelę ir plitą saloną su kūryba ir vaikščiotėsu, sypialnius, vaikščiotęsu su prysniuku ir didelę tarasu su mebliu.",
                    "descriptionPart2": "Ji suteikia komfortinį vypokojimą šiek tiekams ir grupėms draugų.",
                    "descriptionPart3": "Porto ir jūros nuotolis padeda ji būti idealios laikinoji vietovė."
                },
                "A104": {
                    "title": "Komandina A104 Delux su jacuzzi",
                    "descriptionPart1": "Komandina A104 Delux su privačiu jacuziija tarase yra parterėje budynukui A.",
                    "descriptionPart2": "Ji sudarytas iš plitai saloną su kūryba ir sofa, sypialnius su dviejų žmonių staliu, vaikščiotęsu su prysniuku ir tarasu, kur yra privačia jacuziija.",
                    "descriptionPart3": "Viskas turėtų plakantį Valonos Kisajno rodymą. Komandina yra aukščiausioje vietovėje, tai padeda suteikti atskirius rodymus."
                }
            }
        }, "details": {
            "about": "Apie komandinę",
            "amenities": "Privalumai",
            "booking": "Rezervacija",
            "checkAvailability": "Patikrinkite galimybę ir rezervuokite.",
            "callBtn": "Skambinkite",
            "lowPrice": "Garantija mažiausios kainos.",
            "priceFrom": "Kaina nuo",
            "guests": "Maksimali ilgis žmonių",
            "backToList": "Atgal",
            "descriptionPart1": "Visi suteikti atstovai yra užtikrinti luksus ir suteikia labai didelę komfortą laikymosi.",
            "descriptionPart2": "Jie turi saloną su TV ir kūrybiškam staliukui, vieną ar duos savininkų su TV, vaistinės kambariu su prysniu, prieigą prie WiFi, tarasę su laikomis laikymosi meilėse su vandenyno perspektyva, suteiktingus šiek tiek išlaidoms ir užtikrinantys labiau laikymosi.",
            "descriptionPart3": "Taip pat atstovai esanči aiškiausiuose vietomis turi prieigą į tarasę su jacuzi.",
            "gallery": "Galėjimas",
            "collapseGallery": "Sukontrauki galėjimą",
            "seeMorePhotos": "Žiūrėk daugiau nuotarų",
            "needHelp": "Reikalauja padės?",
            "availability": "Pasiekiamumas",
            "items": {
                "view": "Vandenyno perspektyva",
                "ac": "Klimatizacija",
                "terrace": "Taras su laikomis laikymosi meilėse",
                "kitchen": "Kūrybiškas staliukas (paltas, kibutis, vaistinės mašina)",
                "tv": "Smart TV (Salonas + Sypininkas)",
                "wifi": "WiFi",
                "parking": "Parkavimo vietovė",
                "sauna": "Prieigą prie saunos",
                "iron": "Žemėlaukimas ir stulė",
                "hairDryer": "Kūrybiškas staliukas",
                "coffee": "Kava/herbatos paruosimo stakas",
                "roomSalon": "Salonas",
                "roomKitchen": "Kučios",
                "roomBedroom": "Sypialnis",
                "roomBathroom": "Laukimas",
                "salonFeatures": "TV, sofa 2os., stalo, kiekvienių, klimatizacija, wifi",
                "kitchenFeatures": "indukcinis platininkas, lūkesys, vaikštinės mašina, mikrovanduo, komplet nakties ir šaltinių",
                "bedroomFeatures": "TV, 180x200 lėktuvas, komplet sietių, mašina užtikrinti atsiejimą nuo vaikštinio, praskirstymo stalo, želzainis, klimatizacija",
                "bathroomFeatures": "prysnys, vaikštinės susžirgimo mašina, šlafroki, tūkstančių balsamas",
                "terraceAndOther": "Taras ir kitos dalys"
            }
        }, "footer": {
            "brandDesc": "Jūsų luksusios pristatytis Mazurose.",
            "navTitle": "Navigacija",
            "contactTitle": "Kontaktai",
            "followTitle": "Obserwuoję mes",
            "rights": "Visi teisiniai pranašumai užtikrinta.",
            "linksTitle": "Nuorodos"
        }, "skorupki": {
            amenitiesTitle: "Patogumai",
            aboutTitle: "Apie namelius",
            "title": "Skorupki domkai",
            "subtitle": "Jūsų luksusios pristatytis šiek tiek Mazurose",
            "introTitle": "Kamerales domkai Mazurose",
            "descriptionPart1": "Skorupki domkai yra kamerales domkai 10 elegančių vaction domkų, suteikiančių laisvę, požymingos vietovėje Skorupki, vienoje iš Mazeurojų geriausių ir žaliuvių vietose.",
            "descriptionPart2": "Štai propozicija dėl gamininkų, kurių reikalauja tarptautinioje aplinkoje, privatumo ir aukšto standardo, tačiau norint likti įvairiame pasaulyje. Namai yra išdėstyti nuo jezioro 350 metrų atstumą, o gamininkams prieinamas atskiras, privatus rekreacijos teritorija už vandenio.",
            "descriptionPart3": "🏡 Komfortas ir elegancija į 6 asmenis. Kiekvienas namas buvo projektuotas taip, kad padėtų gamininkams tapti mažiau įvairiame pasaulyje: dviejos nepriklausomos sypialnys antrašteje, salonas su plakantai sofais parterėje, naujas, pilno išsikurto kūrybos namas, elegančiausiai atlikta vaistinė, uždengtas tarasas – idealus vietovės, kurios padėtų jums pradėti savaitę arba baigti savaitę.",
            "descriptionPart4": "🌊 Privatus teritorijos už vandenio. Gamininkai mūsų namų turi prieigą į atskirą rekreacijos teritoriją už vandenio, kuriame yra: šiek tiekalis vietovėje, vaikų žaidimų laukas, diskretus įterptas į natūralią aplinką, vietovė, kurios padėtų jums susisiekti su savimi ir tapti mažiau įvairiame pasaulyje.",
            "externalAmenities": "🌲 Spokojimas, tarptautinioje aplinkoje ir natura. Mūsų gyveninio vietovės yra išdėstytos taip, kad padėtų jums tapti mažiau įvairiame pasaulyje: kameralus atmosferos ir ticha, gamininkai gali likti nuo jezioro ir mazurskių širdies, idealūs sąlygos laikyti savaitę arba baigti savaitę.",
            "areaTitle": "Dlaczego Namai Skorupkės?",
            "areaDesc": "✔ tik 10 namų – kameralumas ir privatumas. \n✔ nuo jezioro 350 metrų atstumą + atskiras, privatus teritorijos už vandenio. \n✔ elegančiausias standardas ir išdėstyti viduje. \n✔ idealus vietovės, kurios padėtų jums tapti mažiau įvairiame pasaulyje. \n✔ standartinė tvarkymo programa www.Mazury.Holiday",
            "amenitiesTitle": "Udogodnimas namuose",
            "galleryTitle": "Galerija",
            "expandGallery": "Žiūrėk daugiau nuotarų",
            "collapseGallery": "Sukompresuoti galeriją",
            "ctaTitle": "Pajungti Skorupeles magiją",
            "ctaDesc": "Rezervacija namo yra pirmas žingsnis į neapamatinę vakacijos. Užtikrinkite savo laiką ir užsakykite laisvius terminus.",
            "details": {
                "interiorTitle": "Viduje plėštas",
                "interiorDesc": "Parterėje yra ilgasis, klimatizuotas namas su didiu televizoriu ir sofa su spanio funkcija. Antrašte yra sypialnis su mažausiu kameriniu laikmena (180x200) ir antras pokoj su dviejais vienos vietos laikmenomis (90x200), kurios galėtų būti susijusios.",
                "terraceTitle": "Taras ir natura",
                "terraceDesc": "Kiekvienas namas turi didelį, uždengtą tarasą su parkavimo mebliu, kroviniuose ir savo grilgu. Tai idealus vietovės, kurios padėtų jums tapti mažiau įvairiame pasaulyje. Prie namo yra atskiras tranklys plotas.",
                "activityTitle": "Aktyvumas ir laikymas",
                "activityDesc": "Tik 350 metrų nuo privatus, atskiras teritorijos už vandenio su pomostu į fiskavimą, plaukščių lauką ir vaikų žaidimų lauką. Šiek tiekalis yra prieinamas dalyviams savaitgaliais. Akceptuojame gyvūnus – užtikrinkite savo šuo su jumis!",
                "locationTitle": "Lokacija ir udogodnimas",
                "locationDesc": "Jūs esate 10 minučių nuo Mikołajek ir Tropikano vandens parko. Šiek tiekalis yra prieinamas nemokamai, greitas WiFi ir pristatymas (kava, herbata, vода). Namuose galėtumėte rasti ir žemėlankį, plukščių stulę ir mažgiklinį.",
                "amenitiesBlockTitle": "IŠMOKIMAS IR IŠSILIKIMAI",
                "bedroomTitle": "Sypialnia ir salonas",
                "bedroomItems": [
                    "Maksimaliai 6 asmenys (aproximacinai 55 m²)",
                    "Sypialnis 1: dviejų žmonių lėktuvas 180x200",
                    "Sypialnis 2: du lėktuvai 90x200 (galimas susijungimas)",
                    "Salonas: klimatinis valdymas, smart TV, dviejų žmonių sofa",
                    "Pieno ir ruošimio įrankiai yra įtraukti į kainą"
                ],
                "cottageAmenitiesTitle": "Kūryba ir tarpa",
                "cottageAmenitiesItems": [
                    "Vandens keleiviai ir indukcijos platinės",
                    "Kofeinos ekspresas ir lodo kalorometras",
                    "Visa išlaidų sąskaita, garneriai ir stulai",
                    "Uždengtas tarpas, ležikliai, privatus grillas"
                ],
                "commonAreasTitle": "Privataus ribojimo linija (350m)",
                "commonAreasItems": [
                    "Vandens užtikrinimo pomostas ir jūros perspektyva",
                    "Vieta gaminimui ir uždengtam altanai",
                    "Vaikų žaidimų laukas",
                    "Plėtinio žaidimų teritorija"
                ],
                "additionalTitle": "Papildomos informacijos",
                "additionalItems": [
                    "Pradinių įrankių paketas: vanduo, kofeina, teja",
                    "Nemokamas parkavimas ir greitas WiFi",
                    "Obiekt prijatiam žvaigždžiutiklėms",
                    "Sienos, stulė ir šiekūra kiekvieno namoje"
                ],
                "price": "nuo 350 € / dieną",
                "bookBtn": "Rezervuokite"
            },
            "amenities": {
                "fullEquip": "Viskas įtrauktas",
                "garden": "Privatus rūšis",
                "bonfire": "Grillas ir palaikas",
                "parking": "Parkavimas",
                "wifi": "WiFi",
                "ac": "Klimatininkas",
                "waterAccess": "Prieieji vanduo",
                "peace": "Tolis ir laimingas"
            }
        }, "roomsPage": {
            "heroTitle": "Mazurų kambariai",
            "heroSubtitle": "Komfortiniai kambariai laimingame vietovėje",
            "ctaText": "Ieškote daugiau tarpusavybės Fuledyje? Patikrinkite mus",
            "ctaLink": "Fuledo atstovai",
            "items": {
                "fuleda": {
                    "title": "Fuledo kambariai",
                    "description": "Komfortiniai kambariai virš Dobskojo jūros, laimingame paukščiu. Idealūs šiek tiekams ir naturų mielieji.",
                    "location": "Fuleda, Dobskaus jūra",
                    "features": [
                        "2 kambariai",
                        "Lavanas",
                        "Kūryba",
                        "Darbas",
                        "Pasiekimas į žaliasęs"
                    ],
                    "priceLabel": "Kaina",
                    "priceValue": "nuo 375 €/diena",
                    "detailsBtn": "DETALIAI",
                    "bookBtn": "rezervuoti"
                }
            }
        }, "calendar": {
            "title": "Galimybė",
            "loading": "Kraunama...",
            "error": "Nepavyko užkrauti naujausius duomenis. Bandykime dar kartą po kelių minutę.",
            "prevMonth": "Anksčiausias mėnuo",
            "nextMonth": "Sekmingas mėnuo",
            "days": [
                "Pn",
                "Atsiainė",
                "Treciadienis",
                "Ketvirtadienis",
                "Penktadienis",
                "Šeštadienis",
                "Sekmadienis"
            ],
            "legend": {
                "busy": "Užimamas",
                "checkIn": "Galimas atvykimas",
                "checkOut": "Galimas išvykimas",
                "available": "Pasiekiamas"
            }
        }, "strandaTypes": {
            "oneBedroom": "su vienu vaikščiotu",
            "oneBedroomJacuzzi": "su vienu vaikščiotu ir jacuzzi",
            "jacuzziTerrace": "su jacuzzi ant tarasto",
            "twoBedrooms": "su dviejus vaikščiotis",
            "deluxeJacuzzi": "Delux su jacuzzi",
            "deluxeSaunaJacuzzi": "Delux su sauną ir jacuzzi",
            "apartment": "Atstovaus",
            "studio": "Studijos",
            "suite": "Suite"
        }, "strandaDescriptions": {
            "genericDesc": "Mūsų atstovai suteikiama Giżyckuje, prie Stranda porto Stranda Residence, ant Kisajno jūros (Tracz zatoka). Jie užtikrina šiek tiek piękną perspektyvą į Kisajno jūrų panoramą ir Didžioji Mazurų jūrių turizmo kelionė. Atstovai yra luksusiai atlikęs ir suteikiama aukštas vypokyčio komfortas. Šiuo metu galima naudoti porto resursus tokius kaip: taverna, lankstai šeimose, marina, vandens įrankių užtikrinimo lentva, ir kt.",
            "locationDesc": "Giżyckos centras yra geresnis vietovės turizmo atrakcijoms, restauracijoms ir pubams. Objekto vieta padeda lengviau žinoti Mazurus prirodoje, istorijoje ir vaidmenyse. Daugybę vietų reikalingų redagavimo yra apie 15-35 minutės atstumui automobiliu.",
            "A103": "Atstovas A103 Suite yra pirmame stambelyje, turintis didelį ir platus saloną su aneksemu kūryba ir išskirstytu sofa, vaikščiotę, saloną ir bažnyčią su prysniukui ir dideliu tarasu su mebėlėmis.",
            "A104": "Atstovas A104 Delux su privačiu jacuzzi ant tarasto yra antrame stambelyje. Jis sudarytas iš platus salono su aneksemu kūryba ir sofa, vienos vaikščioties sėkmės, bažnyčią su prysniukui ir taraso su privačiu jacuzzi įtrauktas į kainą.",
            "A105": "Atstovas A105 yra luksusias vienetas su jacuzzi, suteikiantis komfortinį vypokyčio laikymą naujame stambelyje.",
            "B102": "Atstovas B102 yra antrame stambelyje, turintis platus saloną su aneksemu kūryba ir savo tarasu su jacuzzi.",
            "B106": "Luksusias atstovai ant parterio su dviejus vaikščiotys ir didelis salonas.",
            "B202": "Atsinganantis aptarimas pirmajame aukšte, su privačiau saunou ir jacuziijiu tarase.",
            "C404": "Studijiniai aptarimai yra budynke C, tai nocleginio vietovės vienas duomenys, dviejų žmonių dvikamasis kameris, plakantasis sofa 2 asmenims, salonas su kūrybiškame kambaryse, vaikščiotė su prysniu ir taras su Valonos Traciu ir Stranda portui.",
            "C205": "Studijiniai aptarimai yra budynke C, tai nocleginio vietovės vienas duomenys, dviejų žmonių dvikamasis kameris, plakantasis sofa 2 asmenims, salonas su kūrybiškame kambaryse, vaikščiotė su prysniu ir taras su Valonos Traciu ir Stranda portui.",
            "A204": "Aptarimas A204 Suite yra pirmajame aukšte budynke A, jis turi didelę ir plakantą saloną su kūrybiškame kambaryse, plakantą sofa, kambarį, vaikščiotę su prysniu ir taras su Valonos Kisajno vandeniu.",
            "A205": "Aptarimas A205 Suite turi didelę ir plakantą saloną su kūrybiškame kambaryse ir plakantą sofa, kambarį, vaikščiotę su prysniu ir didelę tarasą su mebėlėmis. Jis yra antrajame aukšte budynke.",
            "A302": "Aptarimas A302 Suite yra pirmajame aukšte budynke A, jis turi didelę ir plakantą saloną su kūrybiškame kambaryse ir plakantą sofa, kambarį, vaikščiotę su prysniu ir taras su Valonos Kisajno vandeniu.",
            "A305": "Aptarimas A305 Suite yra antrajame aukšte budynke, jis turi šiek tiek plakantą saloną su kūrybiškame kambaryse ir plakantą sofa, kambarį, vaikščiotę su prysniu ir didelę tarasą su mebėlėmis.",
            "A306": "Aptarimas A306 Suite turi didelę ir plakantą saloną su kūrybiškame kambaryse ir plakantą sofa, duos kambarius, vaikščiotę su prysniu ir didelę tarasą su mebėlėmis. Jis yra antrajame aukšte budynke.",
            "B103": "Aptarimas B103 Delux su privačiau jacuziijiu tarase yra parterioje budynke B. Jis turi didelę ir plakantą saloną su kūrybiškame kambaryse ir sofa, kambarį su dviejų žmonių dvikamasis kameris, vaikščiotę su prysniu, taras su privačiu jacuziijiu. Jis turi šiek tiek plakantą tarasą su Valonos Traciu ir Stranda vandeniu.",
            "B201": "Aptarimas B201 Suite yra pirmajame aukšte budynke B, jis turi didelę ir plakantą saloną su kūrybiškame kambaryse ir sofa, duos kambarius, dviejų vaikščiotių (vienas su prysniu, kitas su vanduo), didelę tarasą su Valonos Traciu ir Valonos Kisajno vandeniu.",
            "B304": "Aptarimai B304 su vienu kambarium yra budynke B, jie turi dviejų žmonių dvikamasis kameris, plakantą sofa 2 asmenims, salonas su kūrybiškame kambaryse, vaikščiotę su prysniu ir taras su Valonos Kisajno vandeniu.",
            "B305": "Aptarimai B305 su vienu kambarium yra budynke B, jie turi dviejų žmonių dvikamasis kameris, plakantą sofa 2 asmenims, salonas su kūrybiškame kambaryse, vaikščiotę su prysniu ir taras su Valonos Kisajno vandeniu.",
            "B401": "Aptarimas B401 Delux yra 3 aukšte budynke. Jis turi didelę ir plakantą saloną su kūrybiškame kambaryse ir sofa, kambarį, vaikščiotę su prysniu, balkoną ir didelę tarasą į viršinio dėžutę budynke. Jis turi šiek tiek plakantą tarasą su Valonos vandeniu.",
            "B402": "Aptarimas B402 Suite yra pirmajame aukšte budynke, jis turi didelę ir plakantą saloną su kūrybiškame kambaryse ir sofa, kambarį, vaikščiotę su prysniu, balkoną ir didelę tarasą į viršinio dėžutę budynke su Valonos vandeniu.",
            "B404": "Aptarimas B404 Suite yra pirmajame aukšte budynke, jis turi didelę ir plakantą saloną su kūrybiškame kambaryse ir sofa, kambarį, vaikščiotę su prysniu, balkoną ir didelę tarasą į viršinio dėžutę budynke su Valonos vandeniu.",
            "A403": "Aptarimas A403 Suite yra 3 aukšte budynke A. Jis turi didelę ir plakantą saloną su kūrybiškame kambaryse ir sofa, kambarį, vaikščiotę su prysniu, tarasą žemėje ir didelę tarasą į viršinio dėžutę budynke su privačiu jacuziijiu Valonos Stranda ir Traciu vandeniu.",
            "C301": "Aptarimas C301 Suite yra antrajame aukšte budynke C, jis turi didelę ir plakantą saloną su kūrybiškame kambaryse ir sofa, duos kambarius, vaikščiotę su prysniu ir taras su Valonos Traciu ir Stranda portui.",
            "C304": "Aptarimas C304 Studio yra antrajame aukšte budynke C, tai nocleginio vietovės vienas duomenys, dviejų žmonių dvikamasis kameris, plakantą sofa 2 asmenims, salonas su kūrybiškame kambaryse, vaikščiotę su prysniu ir taras su Valonos Traciu ir Stranda portui. C304 Studio (maksimalus skaičius žmonių 4).",
            "C_1_sypialnia": "Aptarimas budynke C su vienu kambarium, suteikiantis komfortinį vėlšį maksimaliai 4 žmoniams.",
            "C_Studio": "Studio budynke C yra idealus vietovės vėlšio su Valonos Traciu peržiūra.",
            "C_2_sypialnie": "Pasikasis aptarnas budynku C su 2 sypialniais, idealus rodinoms."
        }, "kisajnoPage": {
            "title": "Aptarmentai Kisajno",
            "subtitle": "Neptuno portas, Giżycko",
            "introTitle": "Atlikęs standardas uježiamejeje",
            "description": "Suteikiame naująj aptarną plotyje 55 m², esančią parterėje su tiesiomis į Kisajno jūros uježiamus. Idealus rodinoms ar grupėms žiniučiųse, suteikiant komfortinį vypokštinimą standartui premium.",
            "features": [
                "2 Atskirios sypialnys su dideliomis lėkais",
                "Saliu su kūrybiškai šiek tiekama sofa ir TV",
                "Ilgasis vaikų namas: vaikų stovu, mikroviltis, lęka",
                "Klimatizacija ir greitas WiFi"
            ],
            "priceLabel": "Kaina nuo",
            "priceValue": "500 PLN",
            "priceUnit": "/ diena",
            "amenitiesTitle": "Papildomai",
            "bookingTitle": "Rezervuokite savo laiką",
            "bookingDesc": "Susisiekite su mumis tiesiogiai, kad gautumėte geriausią pasiūlymą ir patikrintumėte galimybę užsisakyti norimuje terminu.",
            "callAction": "Valdykite",
            "amenities": {
                "view": "Jūros perspektyva",
                "ac": "Klimatizacija",
                "smartTv": "Smart TV",
                "wifi": "WiFi",
                "kitchen": "Pilnas namokas",
                "dishwasher": "Vanduo",
                "parking": "Parkavimas",
                "port": "Neptuno portas"
            }
        }, "mikolajkiPage": {
            "title": "Mikołajkinio gijausis",
            "subtitle": "Mikołajke centras – Vilniaus sviesos laukas",
            "introTitle": "Komfortinis Mikołajkinio gijausis",
            "description": "Naujas ir komfortinis Mikołajkinio gijausis, priklausantis nuo Vilniaus sviesos lauko – ideali vieta žmonėms, kurios nori turi viską „prie mano“. Gijausis prižymintas 4 asmenims ir sudarytas iš šiek tiek sypialnio su komfotinėmis dviejų vietomis kovoju, salonio su plakantuoja tvarkytojo sofa (platumus vietos spaniai), pilnai įgūstumo aneksas namokui ir naujasis namokausis.",
            "priceLabel": "Kaina nuo",
            "priceValue": "350 PLN",
            "priceUnit": "/ diena",
            "amenitiesTitle": "Privalumai",
            "bookingTitle": "Rezervuokite savo laiką",
            "bookingDesc": "Susisiekite su mumis tiesiogiai arba užsakykite nuoširdžio rezervacijos internetu naudojant mygtuką žemiau.",
            "callAction": "Skambinkite",
            "comfortTitle": "Komfortas ir įgūdžiai",
            "comfortDesc": "Sypialnis su 180x200 kovoju, greitas WiFi, salonas su TV ir plakantuoja sofa",
            "kitchenTitle": "Namokas ir namokausis",
            "kitchenDesc": "Aneksas namokui su vanduo, naujasis namokausis su prysniuviu, pradinių įrankių komplektas (kava, kavos sienė)",
            "locationTitle": " aplinka ir vieta",
            "locationDesc": "Vaizdas į vidinį dėžutę, šiek tiek centrum Mikołajek prie Vilniaus sviesos aikščioje, nuojei vandenynio",
            "collapseGallery": "Sukonkruoti galeriją",
            "expandGallery": "Žiūrėti daugiau vaizdų",
            "bookBtn": "rezervuokite jį dabar",
            "amenities": {
                "view": "Vaizdas į dėžutę",
                "ac": "Klimatizacija",
                "smartTv": "Smart TV",
                "wifi": "Nemokamas WiFi",
                "kitchen": "Kukuruzės aikščioje",
                "dishwasher": "Zmywarka",
                "parking": "Miesto centras",
                "port": "Nuojei vandenynio"
            }
        }, "fuledaPage": {
            "title": "Fuleda Įžvalgos",
            "subtitle": "Tolis, laimingas, natura už Dobskojo vandenynio stebėklį",
            "introTitle": "Laisva oaza laimės šiek tiek tylaose",
            "description": "Fuleda Įžvalgos vieta yra pasiūlymas žmoniamis, kuriems norima pilno atskirumos nuo miesto gyvenimo. Šiek tiek aukščiau Dobskojo vandenynio stebėklio sritis, ji leidžia gauti tikslų laimę aplink miestinius rezerwatus.",
            "groundFloorTitle": "Pirmasis aukštas",
            "groundFloorDesc": "Du sypialnys su klimatizacijomis (įskaitant vieną su kominkiu) ir didelė taras su tiesiogineje ieškojimo vandenynio priemonės.",
            "firstFloorTitle": "Antrasis aukštas",
            "firstFloorDesc": "Du sypialnys su klimatizacijomis, styliausiai atlikta išteklių ir sienos su Dobskojo rezerwato perspektyva ir pilnos udogodnimas.",
            "amenitiesTitle": "Premium udogodnienia",
            "amenities": {
                "ac": "Klimatyzacija",
                "fireplace": "Kominek",
                "beach": "Privatės plėšys",
                "bonfire": "Lietusis",
                "wifi": "WiFi",
                "kitchen": "Planačia kūryba",
                "washer": "Svariklis",
                "pier": "Prieieji pomostas"
            }
        }, "categories": {
            "apartments": "Mūsų atstovavimai",
            "cottages": "Mūsų namai",
            "rooms": "Mūsų kambariai",
            "charter": "Charteris"
        }, "attractionsPage": {
            "title": "Regiono atrakcijos",
            "subtitle": "Giżycko ir Mazurų kalvė yra daugybė galimybių",
            "boyen": {
                "title": "Twierdza Boyen",
                "desc": "XIX amžiaus prancūzskas twierdžio forma, svarbus istorinis taškas regionui. Istoriniai aukštai ir namai su visomis savo elementais yra unikalus atsargavimo pavyzdys."
            },
            "bridge": {
                "title": "Kreiptasis mostas",
                "desc": "Unikalus XIX amžiaus technologijos žymas, dirbtinis vieno operacoriaus. Jis jungia lietuviškų ir prancūzų kanałus ir yra vienas tik šiek tiek įgyvendinti kreiptasis mostai Europoje."
            },
            "port": {
                "title": "Giżycko & Ekomarina portas",
                "desc": "Didžiausias ir naujausias portas Mažurams. Idealus vietovės užvaizduoti, gaminant savarankišką paštę arba pradeda nuvažiuoti į Didžiusius Mazurskie Jūros."
            },
            "water": {
                "title": "Kisajno ir Dobsko Jūra",
                "desc": "Krystalinė vanduo, prietaisiniai aplinka ir tyla sritis. Lankstumas užvaizduoti naturai, kajakarstvo ir atsargus žemėlaukio."
            },
            "wolfsLair": {
                "title": "Wilczy Szaniec",
                "desc": "Hitlero pagrindinis namas Gierlozyje. Siaurininkų kompleksas, pasivertę į aplinką, kaip simbolis Antrasis pasaulyje karo."
            },
            "waterTower": {
                "title": "Ciśniečio tvirta",
                "desc": "Atsargus tvirta tvirta su perspektyvos tarase, iš kurios atvaizduojamas Gižyko miestas ir jų aplinkiniai jūros. Tarase yra muzejas ir kava."
            },
            "castle": {
                "title": "Krzyżackasis namas",
                "desc": "Atsargus užtikrintas namas Gižykyje, dabar luksusinis St. Bruno hotelis. Sujungimas tarp istorijos ir šiuolaikinio."
            },
            "bison": {
                "title": "Żubrų parkas",
                "desc": "Demonstracinis žubrų parkas Woliskuose. Galimybė stebeti 'kralius pusčies' iš perspektyvos tarase jų natūraliame aplinkinyje."
            }
        }, "cooperationPage": {
            "title": "Sąveika",
            "subtitle": "Jūsų objektas mažiausiose rukomis Mažurams",
            "services": {
                "title": "Profesionalus Namų tvarkymas",
                "desc": "Ieškote savo priitarimo partnerio jūsų nuotoliniame namuose? Mazury.Holiday yra komandos ekspertų, kurių pagalba atlieka visus jūsų nuotolinio namų tvarkymo užduotis. Atidarykime jums jūsų sėkmę, padedant didinti savo sėkmę ir priimant didžiausią klientų patikrinimą."
            },
            "marketing": {
                "title": "Atsargus Marketingas",
                "desc": "Jūsų namas atsiranda pagrindiniame vietovėje portalais tokiais kaip Booking.com, Airbnb ir mūsų autorskai platforma Mazury.Holiday. Atlikame nuotolinio namų foto ir vaizdo sesijas."
            },
            "guests": {
                "title": "Bevartus Nuotolis",
                "desc": "Atlieka visą procesą nuo rezervacijos ir mokėjimo, per profesinį sveikatą, iki 24/7 pagalba jūsų klientams."
            },
            "maintenance": {
                "title": "5-Gwiazdkinis Standardas",
                "desc": "Mūsų spraukininkai ir technikai dirba su kiekviena detalium. Jūsų nuomone lėka ir yra idealios techniškai priprastos prie kiekvieno gaminio."
            },
            "whyUs": {
                "title": "Dlaczego turime su jumis dirbtis?",
                "point1": "Vietiniame patirtimi ir žinoma Mazuriančiai rinkos",
                "point2": "Perpildomas sąskaitavimo sistema ir vartotojo panelė",
                "point3": "Stabili techniška ir konserwacinė pagalba",
                "point4": "Kainų optimizacija (Pajamų valdymas)"
            }
        }, "contactForm": {
            "title": "Rašykite mums",
            "subtitle": "Jūs turite klausimai? Norėtumėte rezervuoti atsilankimą? Naudokite formularį žemiau.",
            "name": "Vardas ir pavardė",
            "email": "El. pašto adresas",
            "phone": "Telefonas",
            "subject": "Tema",
            "message": "Žinutės turinys",
            "send": "Siųsti žinutę",
            "sending": "Siunčiama...",
            "success": "Žinutė sėkmingai siųsta!",
            "error": "Klaida siunčiant žinutę. Bandykite dar kartą."
        }, "cookieConsent": {
            "title": "Sukūrykles ir Privatumas 🍪",
            "description": "Mes dirbame su jūsų privatumu. Galite priimti visus suteikiamus pliktus arba nurodyti savo sutikimus. Daugiau informacijos apie",
            "privacyLink": "Privatumo politiką",
            "acceptAll": "Priimti visus",
            "customize": "Nustatyti",
            "decline": "Atmestis",
            "settingsTitle": "Sėkmens savybes nustatymas",
            "back": "Grįžti",
            "necessary": "Būtina",
            "necessaryDesc": "Reikalaujami, kad veiktų svetainė.",
            "analytics": "Analitinės",
            "analyticsDesc": "Jums padeda pagerinti svetainę.",
            "marketing": "Marketinginiai",
            "marketingDesc": "Priklauso reklamos jums.",
            "save": "Išsaugoti nustatymus"
        }, "privacyPolicy": {
            "title": "Sutartis apie privatumą ir sėkmens savybes",
            "intro": "Mes remimės jūsų privatumu, perskaitykite mūsų sutartį apie privatumą.",
            "content": "Ši Sutartis apie sėkmens savybes taikoma visoms internetiniams svetainėms mazury.holiday. Naudodamiesi mūsų svetainemis, priimtumėte naudoti sėkmens savybes pagal šią sutartį. Mes naudojame sėkmens savybes, kad mes galėtume jums padėti greičiau ir lengviau naudotis svetainėmis ir kad priimtume įvairias reklamos ir turinio paskirties pagal jūsų poreikius. Bet kada galėsite valdyti savo sėkmens savybių nustatymus savo naršyklėje.",
            "sections": [
                {
                    "title": "Kas yra sėkmens savybė?",
                    "content": "Sėkmens savybė (angl. <em>cookies</em>) – maži tekstiniai informacijos, siunčiami internetiniu serveriu ir saugomi jūsų kompiuteryje (dažniausiai į diską). Numatomi parametrai sėkmens savybėms leidžia nuskaityti informaciją, kurią jie turėtų, tik serveriu, kuris juos sukūrė. Sėkmens savybės yra dažniausiai naudojamos licencijavimui, sondams, internetiniu parduotuvėmis, svetainėmis, reikalaujančiomis registracijos, reklamomis ir monitoriuojant žmonių veiklą."
                },
                {
                    "title": "Kad kuriame sėkmens savybes?",
                    "content": "Svetainės mazury.holiday naudoja sėkmens savybes įvairiais tikslais:",
                    "list": [
                        "norint, kad svetainės mazury.holiday galėtų veikti greičiau ir būti lengviau naudotis",
                        "Norint gerai suteikti turinio ir reklamos, prieinamios mazury.holiday svetainėse, jums atitinkant savo tikslus ir interesus",
                        "norint gauti anonimines, suskirstytoje statistikos duomenis, kurie leidžia mums suprantoti kaip žmonės naudoja musų svetaines ir padeda joms padėti padėti joms funkcionalumui ir turinio pakeitimui"
                    ]
                },
                {
                    "content": "Naudojant sūriukus šiuo atveju niekada nurodome vartotojo identitetos pagal informaciją, saugomą įsivertiniuose sūriukuose."
                },
                {
                    "title": "Duomenų saugojimo laikotarpis „cookies“",
                    "content": "Naudojame du sėkmęs – <strong>sesijines</strong> ir <strong>ilgalaikinis</strong>. Šie pirmieji išlieka jūsų įrenginyje tik tada, kai naudoja mazury.holiday svetaines. Ilgalaikiniai sūriukai išlieka jūsų įrenginyje tol kol jiems nustato laiko funkcijos arba kol vartotojas juos ištrins."
                },
                {
                    "title": "Trečiųjų šalių sūriukai",
                    "content": "Korzystant mazury.holiday svetainėse galiu gauti sūriukus, išsamesnius su kuriomis susijusių su mumis trečiomis šalimis, tokiais kaip Facebook ir Google, taip pat su reklamos kampanijoms vykstančiomis firmomis. Daugiau informacijos apie šiuos sūriukus galima gauti mazury.holiday svetainėse."
                },
                {
                    "title": "Kaip ištrinti arba keisti „cookies“ nustatymus?",
                    "content": "Dauguma internetinių naršyklės pradžiau yra nustatyta automatiskai priimti sūriukus. Tačiau galite pakeisti naršyklės nustatymus, kad blokuotumėte sūriukus – visiems ar tik kai kuriamoms suteikti, pvz., tik trečiomis šalimis, arba taip pat gauti pranešimus, kai jie išsiunčiami į jūsų įrenginy.<br/><br/>Atminkite, kad jei blokuosite naudojamos sūriukus mums, tai gal galėtų turėti negatyvias poveikį jūsų naudojimui mazury.holiday svetainėse, pvz., galiu nebegalėti peržiūrėti kai kuriose svetainėse arba gauti spersonalizuotus informacijas. Taip pat negalėsime gauti anoniminių duomenų apie jūsų naudojimą mums padėti išlieka jums svetainių turinio ir paslaugų."
                }
            ],
            "usefulLinks": "Naudingos nuorodos",
            "linksDescription": "Jūs turite perskaityti šios firmos privatumo politiką, kad suprantumėte jų suteikiamus sūriukus:",
            "manageCookies": "Norint valdyti savo sūriuku nustatymus, pasirinkite naršyklę internete, kuri naudojate ir vykdykite pagal žmonių instrukcijas:",
            "mobileDevices": "Mobiliniai įrenginiai:"
        }, "pokojeFuledaPage": {
            "heroTitle": "Fuleda kambariai",
            "price": "nuo 375 €/diena",
            "description": "Norim išsiųsti du kambarius: vieną su dviejų sienos, kitą su dviejų vienosios sienos, vaikščioji kambarys su prysniukui ir vėliuviu. Kambaryse yra taras. Atskirame budynaku, atstumant 10m nuo kambarių, yra vaikščioji kambarys su papildomu vėliuviu. Viskas yra Fuledžki Rógjeje, priejeje į Jūdžiaus jūrią, su tyla ir laukeliu Folwark Fuleda. Idealus vietovė dėl žmonių, kuriuos reikalauja vaikščios, tyla ir serenitys. Atstumant nuo miesto.\n\nSekmingai išsiųsta įvairiose sienos budynakui, priklausomai nuo jūsų naudojamo įrenginio. Pagrindinis budynkas turėtų du kambarius, vaikščioji kambarys su prysniukui ir vėliuviu, taras. Taip pat yra kelių nuo taros iki kitos sienos, kurie leidžia pasiekti vaikščiojį kambarį, turinčio grillą, palaiką ir vėlę.\n\nNuo 250m atstumant yra bendrovaikščios plaže. Fuleda yra nuo Giżykų apie 10km, nuo Kętrzynos ir Gieržylo, kur yra Wilczy šaniec Hitlero kwatera. Nuo mažiausio lasinio, lankstinių, ciklų ir žaidimų vietovės. Šiek tiek yra nuo miesto apie 3km.\n\nPriklauso nuo jūsų poreikių rodintiems šiuos kambarius: šešiai, vėdkarzai, grzybiavimas ir žmonės, kuriuos reikalauja vaikščios.",
            "amenitiesTitle": "Išdėstymas",
            "room1Title": "Kambarys 1 (2-osobinis)",
            "room1Items": [
                "Sienos sienos",
                "Atidarius į taras",
                "Oskirvėjas",
                "Sausininkas",
                "Lietus",
                "Prasklaida"
            ],
            "room2Title": "Pokalbis 2 (2 lėktuvos)",
            "room2Items": [
                "Du lėktuvai vienas po kito",
                "TV",
                "Išeiti į tarpa"
            ],
            "kitchenTitle": "Kūryba",
            "kitchenNote": "(atskiras namas 10m)",
            "kitchenItems": [
                "Laukva",
                "Vandens keletojas",
                "Mikrovalandas",
                "Tostorius",
                "Komplektas kelių ir šaltinių",
                "Gazinė kūryba",
                "Kava expressas"
            ],
            "bathroomTitle": "Bendruomenės",
            "bathroomItems": [
                "Prančia",
                "Slinkimas",
                "Sausainės šiek tiek",
                "Paviršinio rūšis",
                "Klavišai",
                "Kroviniukai",
                "Kosmetika"
            ],
            "terraceTitle": "Taras ir aplinka",
            "terraceItems": [
                "Platinantis taras",
                "Privatus vandens išeitis",
                "Grilla ir šaltinis",
                "Vėliavos lūkesčiai",
                "Peržiūros taras"
            ],
            "bookingTitle": "Rezervacija",
            "bookingDesc": "Patikrinkite galimybę ir rezervuokite savo laiką",
            "bookBtn": "REZERVIUOKITE Jį",
            "callBtn": "Skambinkite: 730 067 027",
            "bestPrice": "Sunkūs kainos - rezervuokite tiesiogiai",
            "galleryTitle": "Galėjimo galerija",
            "expandGallery": "Žiūrėkite į daugiau nuotarų",
            "collapseGallery": "Sutraukti galėjimą"
        }, "charterPage": {
            "heroTitle": "Stillo 30 VIP",
            "heroSubtitle": "Jacht motorowy Stillo 30 VIP",
            "mainTitle": "Twój luksusowy dom na wodzie",
            "desc1": "<strong>Stillo 30 VIP</strong> to następca sprawdzonej i cenionej Futury 870. Jest jednostką mającą na celu zaspokojenie oczekiwań najbardziej wymagających armatorów w sektorze jachtów wypornościowych i pół ślizgowych typu Houseboat. Walory nautyczne, sprawdzone w wielokrotnie nagradzanym poprzedniku, połączone z rewolucyjną praktycznością.",
            "desc2": "Na pokładzie znajdziesz do <strong>6 miejsc do spania</strong>, pełnowymiarową łazienkę oraz salon z panoramicznymi oknami i wysokim (ok. 190 cm) stropem, co daje poczucie prawdziwego apartamentu na wodzie. Szerokie półpokłady prowadzą na dziobowy taras do opalania, a niska platforma kąpielowa u rufy ułatwia zejście do wody oraz cumowanie przy pomoście.",
            "desc3": "Podstawowe atuty to mocny silnik stacjonarny 52KM, <strong>dwa stery strumieniowe</strong>, elektryczna winda kotwiczna, materace z pianką termoplastyczną, WiFi bez ograniczeń, TV ze Smart TV, ekspres do kawy Nespresso i wiele innych…",
            "desc4": "Co ważne dla czarteru: jednostka utrzymuje prędkość poniżej 15 km/h, więc w Polsce można nią sterować <strong>bez patentu</strong> – po krótkim przeszkoleniu odbierasz jacht i ruszasz w trasę. Stillo 30 oferuje więc luksus, wygodę i pełnię mazurskiej przygody, a jednocześnie jest idealnym wyborem dla rodzin i grup przyjaciół szukających pierwszego doświadczenia z własnym „domem na wodzie”.",
            "vipAmenitiesTitle": "Udogodnienia VIP",
            "navAndDriveTitle": "Nawigacja i Napęd",
            "navAndDriveDesc": "Stery strumieniowe (Dziób/Rufa), Tablet z mapami jezior, Silnik 52KM",
            "vipStandardTitle": "Standard VIP",
            "vipStandardDesc": "Ogrzewanie, WiFi bez limitu, Smart TV, Ekspres Nespresso",
            "safetyTitle": "Bezpieczeństwo",
            "safetyDesc": "Pełne wyposażenie ratunkowe, Instalacja 230V Non-Stop, Elektryczna winda kotwiczna",
            "galleryTitle": "Galeria Zdjęć",
            "expandGallery": "Zobacz więcej zdjęć",
            "collapseGallery": "Zwiń galerię",
            "bookTermTitle": "Zarezerwuj Termin",
            "bookTermDesc": "Sprawdź dostępność w naszym kalendarzu online i zarezerwuj swoje wakacje marzeń już dziś.",
            "bookBtn": "ZAREZERWUJ GO",
            "techSpecsTitle": "Dane Techniczne",
            "specs": {
                "length": "Ilgis",
                "width": "Šieksta",
                "draft": "Naudžiavimas",
                "engine": "Motinas",
                "cabins": "Kabynės",
                "crew": "Komanda"
            },
            "equipmentTitle": "Aparatas",
            "equipmentList": [
                "Stereo stresmiesys į kūną ir rūfę",
                "Kabynos stalo",
                "TV SMART (Smart TV, YouTube)",
                "WiFi (be ribų), Radio/Bluetooth",
                "12V gniazda (4 vienas) ir 230V gniazda (4 vienas)",
                "Webasto širdies ilgai",
                "Širdies vanduo (Bojleras 30L)",
                "Mergimasis su prysniukui",
                "Kostkarka į lodų, tosteris, czajnikas",
                "Nespresso ekspresas (+kapsulės)",
                "Viskas kūrybingas",
                "Elektrinė šieksta kotwiczio",
                "Echosonda, Navigacija - Ploteris"
            ]
        }, cooperationPage: {
            "title": "Bendradarbiavimas",
            "subtitle": "Jūsų turtas geriausiose rankose Mozūrijoje",
            "services": {
                "title": "Profesionalus turto valdymas",
                "desc": "Ieškote patikimo partnerio, kuris pasirūpintų jūsų turtu? Mazury.Holiday yra ekspertų komanda, kuri nuims nuo jūsų pečių visas su trumpalaike nuoma susijusias pareigas. Didiname savininkų pelną išlaikydami aukščiausią svečių aptarnavimo standartą."
            },
            "marketing": {
                "title": "Premium rinkodara",
                "desc": "Jūsų turtas užims aukščiausias vietas tokiuose portaluose kaip Booking.com, Airbnb ir mūsų platformoje Mazury.Holiday. Atliekame fotosesijas ir vaizdo įrašus dronu."
            },
            "guests": {
                "title": "Nuoma be rūpesčių",
                "desc": "Rūpinamės visu ciklu: nuo užsakymo ir mokėjimų, per profesionalų svečių pasitikimą, iki palaikymo viešnagės metu 24/7."
            },
            "maintenance": {
                "title": "5 žvaigždučių standartas",
                "desc": "Mūsų valymo ir techninė komanda rūpinasi kiekviena detale. Prieš atvykstant kiekvienam svečiui jūsų turtas visada spindi ir yra idealios techninės būklės."
            },
            "whyUs": {
                "title": "Kodėl verta dirbti su mumis?",
                "point1": "Vietinė patirtis ir Mozūrijos rinkos išmanymas",
                "point2": "Skaidri atsiskaitymo sistema ir savininko skydelis",
                "point3": "Nuolatinė techninė ir priežiūros globa",
                "point4": "Kainų optimizavimas (Pajamų valdymas)"
            }
        }, coopExtra: {
            "heroTitle": "B2B bendradarbiavimas",
            "heroSubtitle": "JŪSŲ TURTAS GERIAUSIOSE RANKOSE MOZŪRIJOJE",
            "securityTitle": "Saugumas",
            "securityDesc": "Svečių patikrinimas ir draudimas nuo žalos garantuoja jūsų investicijos saugumą.",
            "readyTitle": "Pasiruošę didesniam pelnui?",
            "readyDesc": "Susisiekite su mumis ir sužinokite, kiek gali uždirbti jūsų apartamentai ar namas Mozūrijoje.",
            "letsTalk": "Pasikalbėkime"
        }, coopModels: {
            "title": "Bendradarbiavimo modeliai",
            "full_title": "Visapusiškas valdymas",
            "full_desc": "Apima rinkodarą, svečių aptarnavimą, valymą, smulkius remontus ir kainų valdymą. Puikiai tinka investuotojams, vertinantiems savo laiką.",
            "marketing_title": "Tik rinkodara ir rezervacijos",
            "marketing_desc": "Mes rūpinamės svečių pritraukimu ir internetinių rezervacijų tvarkymu, o jūs rūpinatės svečių priėmimu ir valymu."
        }, coopSteps: {
            "title": "Kaip atrodo bendradarbiavimas?",
            "step1_title": "Auditas ir vertinimas",
            "step1_desc": "Aplankome jūsų turtą, patikriname jo potencialą ir pasiūlome optimalią kainodaros strategiją.",
            "step2_title": "Pasiūlymo paruošimas",
            "step2_desc": "Sukuriame profesionalų aprašymą, organizuojame fotosesiją ir patalpiname turtą rezervavimo platformose.",
            "step3_title": "Pardavimų pradžia",
            "step3_desc": "Pradedame rinkodaros kampanijas ir atidarome kalendorių pirmosioms rezervacijoms.",
            "step4_title": "Valdymas ir pelnas",
            "step4_desc": "Perimame visą svečių aptarnavimą ir valymą, o jūs kiekvieną mėnesį gaunate skaidrią ataskaitą ir pelną."
        }, skorupki: {
            aboutTitle: "About the cottages",
            title: "Skorupki Cottages",
            subtitle: "Your luxury haven in the heart of Masuria",
            introTitle: "Intimate settlement in Masuria",
            descriptionPart1: "Skorupki Cottages is an intimate settlement of 10 elegant holiday cottages, located in the village of Skorupki, in one of the most peaceful and green parts of Masuria.",
            descriptionPart2: "The cottages are designed to blend harmoniously with the surroundings, offering high standards and comfort.",
            descriptionPart3: "Each cottage has a private terrace, a living room with a kitchenette, two bedrooms, and a modern bathroom.",
            descriptionPart4: "Direct access to the lake, private pier, and numerous attractions make it an ideal place for family holidays.",
            amenitiesTitle: "Cottage amenities"
        }, stranda: {
            filters: { "jacuzzi": "Jacuzzi", "size": "Size", "sizeAny": "Any", "size4": "Max 4 people", "size6": "Max 6 people", "floor": "Floor", "floorAny": "Any", "floorParter": "Ground floor", "floorPietro": "Upper floor", "sauna": "Sauna", "floor1": "1st Floor", "floor2": "2nd Floor", "floor3": "3rd Floor" },
            mapTitle: "Pastatų vieta",
            mapLabels: { "parking": "AIKŠTELĖ", "playground": "ŽAIDIMŲ AIKŠTELĖ", "sauna": "PIRTIS", "beach": "PAPLŪDIMYS", "rentals": "NUOMA", "beachbar": "PAPLŪDIMIO BARAS", "tavern": "SMUKLĖ", "shop": "PARDUOTUVĖ", "scooters": "NUOMA" },
            features: { "studio": "Studija", "oneBedroom": "1 Miegamasis", "twoBedrooms": "2 Miegamieji", "jacuzzi": "Sūkurinė vonia", "sauna": "Pirtis" }
        }, fuledaApartment: { "parter": { "description": "Apartment with two bedrooms located on the ground floor is a beautifully and stylishly finished property. Situated on Lake Dobskie, which is a quiet zone, it guarantees relaxation in peace and quiet, surrounded by beautiful, pristine Masurian nature.\n\nOur apartments are located in Fuleda on a peninsula on the shore of the lake. It offers a beautiful panoramic view of Lake Dobskie, Cormorant Island, and Helena Island. The apartment is luxuriously finished and ensures a high level of comfort. On site, you can use private access to the water, a barbecue, and a bonfire place. Giżycko (about 12km away) allows you to enjoy many tourist attractions, restaurants, and pubs. The location of the property also makes it easy to explore Masuria in terms of nature and history.\n\nThe Fuleda Apartment (ground floor) with a direct view of Lake Dobskie is located on the ground floor of the building, has two bedrooms, a kitchenette, a bathroom with a shower, and two covered terraces: one at the front of the building with a direct view of Lake Dobskie, the other at the back of the building.\n\nLocation: ground floor\nMaximum number of people: 2+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, fireplace, fold-out 2-person sofa, table, chairs, vacuum cleaner, iron, ironing board, air conditioning, clothes dryer, wardrobe\nBedroom 2 equipment: TV, 160x200 bed, two bedside tables, set of bedding, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, hair straightener, towels, shower gel, soap, body lotion\nFront terrace: armchairs, table, cocoon chair\nBack terrace: terrace furniture set, charcoal grill\nPrivate path to the lake with a bonfire and barbecue area, hammock, two deckchairs\nOther: internet, wifi\nThe apartment is fully equipped, heated, and provides a comfortable stay all year round.\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż where the Wolf's Lair - Hitler's headquarters is located. Nearby forests, meadows, cycling routes, playgrounds. The nearest shop is about 3km away." }, "pietro": { "description": "A beautifully finished apartment with two bedrooms and a mezzanine, located on the upper floor with a breathtaking view of Lake Dobskie. This peaceful, nature-surrounded location is perfect for complete relaxation.\n\nThe apartment offers a spacious living room with a kitchenette, a bathroom with a shower, and two bedrooms. The master bedroom features a 160x200 bed, while the second bedroom has two single beds. There is also an additional sleeping area on the mezzanine. The apartment is equipped with air conditioning, ensuring comfort even on hot days.\n\nLocation: upper floor\nMaximum number of people: 4+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, 160x200 bed, wardrobe, air conditioning\nBedroom 2 equipment: two single beds, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, towels, cosmetics\nTerrace: comfortable terrace furniture set with an amazing view of the lake.\nPrivate path to the lake with a bonfire and barbecue area, hammock.\nOther: internet, wifi\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż." } } }),
    dk: {
        nav: { about: "Om os", apartments: "Lejligheder", cottages: "Hytter", charter: "Charter", port: "Havn", attractions: "Attraktioner", cooperation: "Samarbejde", contact: "Kontakt", rooms: "Værelser", bookBtn: "Book nu", language: "Sprog", back: "Tilbage" },
        hero: { title: "Ferie i Masurien", subtitle: "UNIKKE ØJEBLIKKE", apartmentsBtn: "Lejligheder", charterBtn: "Yachtcharter" },
        intro: { tag: "Mazury.Holiday", title: "Velkommen til", titleHighlight: "De Store Søer", p1: "Oplev magien.", p2: "Hvile i Giżycko." },
        apartments: { title: "Lejligheder", description: "Vælg det perfekte sted.", details: "Detaljer", pricePrefix: "fra", night: "nat", people: "pers.", bookBtn: "BOOK NOW", items: { stranda: { title: "Stranda", location: "Giżycko", description: "Komfort." }, kisajno: { title: "Kisajno", location: "Giżycko", description: "Luksus." }, fuleda: { title: "Fuleda", location: "Fuleda, Jezioro Dobskie", description: "Oase." }, domkiSkorupki: { title: "Skorupki Hytter", location: "Skorupki, Tałty Sø", description: "Luksushytter i hjertet af den masuriske natur." }, pokojeFuleda: { title: "Fuleda Værelser", location: "Fuleda, Dobskie Sø", description: "Hyggelige værelser med søudsigt i stilhedszonen." }, mikolajki: { title: "Gigu Lejlighed Mikołajki", location: "Plac Wolności, Mikołajki", description: "Moderne lejlighed i centrum af Mikołajki." } } },
        cottagesAndRooms: {
            title: "Vores hytter og værelser",
            description: "Mærk naturens nærhed under komfortable forhold."
        },
        categories: { apartments: "Lejligheder", cottages: "Hytter", rooms: "Værelser", charter: "Charter" },
        charter: { tag: "Uden certifikat", title: "Leje af Yacht", description: "Stillo 30.", model: "Stillo 30", cabins: "3 Kahytter", checkBtn: "Tjek", premiumFleet: "Premium", feature1: "Ingen licens", feature2: "2020", feature3: "Luksus", detailsBtn: "Se detaljer" },
        stranda: { subtitle: "Luksus ved søen", description: "Moderne design.", building: "Bygning", apartment: "Lejlighed",
            filters: { "jacuzzi": "Jacuzzi", "size": "Size", "sizeAny": "Any", "size4": "Max 4 people", "size6": "Max 6 people", "floor": "Floor", "floorAny": "Any", "floorParter": "Ground floor", "floorPietro": "Upper floor", "sauna": "Sauna", "floor1": "1st Floor", "floor2": "2nd Floor", "floor3": "3rd Floor" },
            mapTitle: "Bygningernes placering",
            mapLabels: { "parking": "PARKERING", "playground": "LEGEPLADS", "sauna": "SAUNA", "beach": "STRAND", "rentals": "UDLEJNING", "beachbar": "STRANDBAR", "tavern": "VÆRTSHUS", "shop": "BUTIK", "scooters": "UDLEJNING" },
            features: { "studio": "Studio", "oneBedroom": "1 Soveværelse", "twoBedrooms": "2 Soveværelser", "jacuzzi": "Jacuzzi", "sauna": "Sauna" }
        },
        details: { about: "Om", amenities: "Faciliteter", booking: "Booking", checkAvailability: "Tjek ledighed.", callBtn: "Ring", lowPrice: "Bedste pris.", descriptionPart1: "Luksus lejlighed", descriptionPart2: "i Stranda.", descriptionPart3: "Søudsigt.", items: { view: "Søudsigt", ac: "Aircon", terrace: "Terrasse", kitchen: "Køkken", tv: "TV", wifi: "WiFi", parking: "Parkering", sauna: "Sauna" } },
        footer: { brandDesc: "Unikke øjeblikke.", navTitle: "Navigation", contactTitle: "Kontakt", followTitle: "Følg os", rights: "Alle rettigheder forbeholdes.", linksTitle: "Links" },
        cookieConsent: {
            title: "Cookies & Privatliv 🍪",
            description: "Vi går op i dit privatliv. Du kan acceptere alle cookies eller tilpasse dine præferencer. Læs mere i vores",
            privacyLink: "Privatlivspolitik",
            acceptAll: "Accepter alle",
            customize: "Tilpas",
            decline: "Afvis",
            settingsTitle: "Cookie-indstillinger",
            back: "Tilbage",
            necessary: "Nødvendige",
            necessaryDesc: "Kræves for at hjemmesiden kan fungere.",
            analytics: "Analyse",
            analyticsDesc: "Hjælper os med at forbedre hjemmesiden.",
            marketing: "Marketing",
            marketingDesc: "Personlig annoncering.",
            save: "Gem indstillinger"
        },
        privacyPolicy: {
            title: "Privatlivs- og Cookiepolitik",
            intro: "Vi værdsætter dit privatliv, læs venligst vores privatlivspolitik.",
            content: "Denne cookiepolitik gælder for alle mazury.holiday-websteder. Ved at bruge vores sider accepterer du brugen af cookies i overensstemmelse med denne politik. Vi bruger cookies til at få vores sider til at fungere hurtigere, være nemmere at bruge og til at tilpasse indhold og annoncer. Du kan til enhver tid administrere dine cookie-indstillinger i din browser.",
            usefulLinks: "Nyttige links",
            mobileDevices: "Mobil enheder:"
        },
        mikolajkiPage: {
            title: "Gigu Lejlighed Mikołajki",
            subtitle: "Centrum af Mikołajki – Plac Wolności",
            introTitle: "Komfortabel lejlighed i hjertet af Mikołajki",
            description: "En moderne og komfortabel lejlighed beliggende i hjertet af Mikołajki på Plac Wolności – den perfekte beliggenhed for gæster, der vil have alt tæt på. Lejligheden er beregnet til maksimalt 4 personer og består af et hyggeligt soveværelse med en behagelig dobbeltseng, en stue med sovesofa (ekstra sovepladser), et fuldt udstyret tekøkken samt et moderne badeværelse.",
            priceLabel: "Pris fra",
            priceValue: "350 PLN",
            priceUnit: "/ nat",
            amenitiesTitle: "Faciliteter",
            bookingTitle: "Book dit ophold",
            bookingDesc: "Kontakt os direkte eller foretag en øjeblikkelig online booking ved hjælp af knappen nedenfor.",
            callAction: "Ring",
            comfortTitle: "Komfort & Udstyr",
            comfortDesc: "Soveværelse med 180x200 seng, hurtig WiFi, stue med tv og sovesofa",
            kitchenTitle: "Køkken & Badeværelse",
            kitchenDesc: "Tekøkken med opvaskemaskine, moderne badeværelse med bruser, startsæt (kaffe, te)",
            locationTitle: "Omgivelser & Beliggenhed",
            locationDesc: "Gårdsudsigt, det absolutte centrum af Mikołajki på Wolności-pladsen, tæt på søen",
            collapseGallery: "Minimer galleri",
            expandGallery: "Se flere billeder",
            bookBtn: "BESTIL NU",
            amenities: {
                view: "Gårdsudsigt",
                ac: "Aircondition",
                smartTv: "Smart TV",
                wifi: "Gratis WiFi",
                kitchen: "Tekøkken",
                dishwasher: "Opvaskemaskine",
                parking: "Bymidte",
                port: "Tæt på søen"
            }
        },
        fuledaApartment: { "parter": { "description": "Apartment with two bedrooms located on the ground floor is a beautifully and stylishly finished property. Situated on Lake Dobskie, which is a quiet zone, it guarantees relaxation in peace and quiet, surrounded by beautiful, pristine Masurian nature.\n\nOur apartments are located in Fuleda on a peninsula on the shore of the lake. It offers a beautiful panoramic view of Lake Dobskie, Cormorant Island, and Helena Island. The apartment is luxuriously finished and ensures a high level of comfort. On site, you can use private access to the water, a barbecue, and a bonfire place. Giżycko (about 12km away) allows you to enjoy many tourist attractions, restaurants, and pubs. The location of the property also makes it easy to explore Masuria in terms of nature and history.\n\nThe Fuleda Apartment (ground floor) with a direct view of Lake Dobskie is located on the ground floor of the building, has two bedrooms, a kitchenette, a bathroom with a shower, and two covered terraces: one at the front of the building with a direct view of Lake Dobskie, the other at the back of the building.\n\nLocation: ground floor\nMaximum number of people: 2+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, fireplace, fold-out 2-person sofa, table, chairs, vacuum cleaner, iron, ironing board, air conditioning, clothes dryer, wardrobe\nBedroom 2 equipment: TV, 160x200 bed, two bedside tables, set of bedding, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, hair straightener, towels, shower gel, soap, body lotion\nFront terrace: armchairs, table, cocoon chair\nBack terrace: terrace furniture set, charcoal grill\nPrivate path to the lake with a bonfire and barbecue area, hammock, two deckchairs\nOther: internet, wifi\nThe apartment is fully equipped, heated, and provides a comfortable stay all year round.\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż where the Wolf's Lair - Hitler's headquarters is located. Nearby forests, meadows, cycling routes, playgrounds. The nearest shop is about 3km away." }, "pietro": { "description": "A beautifully finished apartment with two bedrooms and a mezzanine, located on the upper floor with a breathtaking view of Lake Dobskie. This peaceful, nature-surrounded location is perfect for complete relaxation.\n\nThe apartment offers a spacious living room with a kitchenette, a bathroom with a shower, and two bedrooms. The master bedroom features a 160x200 bed, while the second bedroom has two single beds. There is also an additional sleeping area on the mezzanine. The apartment is equipped with air conditioning, ensuring comfort even on hot days.\n\nLocation: upper floor\nMaximum number of people: 4+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, 160x200 bed, wardrobe, air conditioning\nBedroom 2 equipment: two single beds, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, towels, cosmetics\nTerrace: comfortable terrace furniture set with an amazing view of the lake.\nPrivate path to the lake with a bonfire and barbecue area, hammock.\nOther: internet, wifi\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż." } }
    },
    // Minimal placeholders for others to ensure structure (programmatic copy would be safer but user wants specific)
    se: {
        nav: { about: "Om oss", apartments: "Lägenheter", cottages: "Stugor", charter: "Charter", port: "Hamn", attractions: "Sevärdheter", cooperation: "Samarbete", contact: "Kontakt", rooms: "Rum", bookBtn: "Boka", language: "Språk", back: "Tillbaka" },
        hero: { title: "Semester i Masurien", subtitle: "UNIKA STUNDER", apartmentsBtn: "Lägenheter", charterBtn: "Yacht" },
        intro: { tag: "Mazury.Holiday", title: "Välkommen", titleHighlight: "Sjöarna", p1: "Upptäck magin.", p2: "Avkoppling." },
        apartments: { title: "Våra Lägenheter", description: "Välj plats.", details: "Detaljer", pricePrefix: "från", night: "natt", people: "pers", bookBtn: "RESERVAR", items: { stranda: { title: "Stranda", location: "Giżycko", description: "Komfort." }, kisajno: { title: "Kisajno", location: "Giżycko", description: "Lyx." }, fuleda: { title: "Fuleda", location: "Fuleda, Jezioro Dobskie", description: "Oas." }, domkiSkorupki: { title: "Skorupki Stugor", location: "Skorupki, Tałty Sjön", description: "Lyxiga stugor i hjärtat af den masuriska naturen." }, pokojeFuleda: { title: "Fuleda Rum", location: "Fuleda, Dobskie Sjön", description: "Mysiga rum med sjöutsikt i tystnadzonen." }, mikolajki: { title: "Gigu Lägenhet Mikołajki", location: "Plac Wolności, Mikołajki", description: "Modern lägenhet i centrum av Mikołajki." } } },
        cottagesAndRooms: {
            title: "Våra stugor och rum",
            description: "Känn närheten till naturen under bekväma förhållanden."
        },
        categories: { apartments: "Våra Lägenheter", cottages: "Stugor", rooms: "Rum", charter: "Charter" },
        charter: { tag: "Utan licens", title: "Båtcharter", description: "Stillo 30.", model: "Stillo 30", cabins: "3 Hytter", checkBtn: "Kolla", premiumFleet: "Premium", feature1: "Ingen licens", feature2: "2020", feature3: "Lyx", detailsBtn: "Detaljer" },
        stranda: { subtitle: "Lyx vid sjön", description: "Modern design.", building: "Byggnad", apartment: "Lägenhet",
            filters: { "jacuzzi": "Jacuzzi", "size": "Size", "sizeAny": "Any", "size4": "Max 4 people", "size6": "Max 6 people", "floor": "Floor", "floorAny": "Any", "floorParter": "Ground floor", "floorPietro": "Upper floor", "sauna": "Sauna", "floor1": "1st Floor", "floor2": "2nd Floor", "floor3": "3rd Floor" },
            mapTitle: "Byggnaders plats",
            mapLabels: { "parking": "PARKERING", "playground": "LEKPLATS", "sauna": "BASTU", "beach": "STRAND", "rentals": "UTHYRNING", "beachbar": "STRANDBAR", "tavern": "TAVERN", "shop": "BUTIK", "scooters": "UTHYRNING" },
            features: { "studio": "Studio", "oneBedroom": "1 Sovrum", "twoBedrooms": "2 Sovrum", "jacuzzi": "Jacuzzi", "sauna": "Bastu" }
        },
        details: { about: "Om", amenities: "Bekvämligheter", booking: "Bokning", checkAvailability: "Kolla ledighet.", callBtn: "Ring", lowPrice: "Bästa pris.", descriptionPart1: "Lyxlägenhet", descriptionPart2: "Stranda.", descriptionPart3: "Sjöutsikt.", items: { view: "Sjöutsikt", ac: "AC", terrace: "Terrass", kitchen: "Kök", tv: "TV", wifi: "WiFi", parking: "Parkering", sauna: "Bastu" } },
        footer: { brandDesc: "Unika stunder.", navTitle: "Navigering", contactTitle: "Kontakt", followTitle: "Följ", rights: "Alla rättigheter.", linksTitle: "Länkar" },
        cookieConsent: {
            title: "Cookies & Integritet 🍪",
            description: "Vi bryr oss om din integritet. Du kan acceptera alla cookies eller anpassa dina inställningar. Läs mer i vår",
            privacyLink: "Integritetspolicy",
            acceptAll: "Acceptera alla",
            customize: "Anpassa",
            decline: "Neka",
            settingsTitle: "Cookie-inställningar",
            back: "Tillbaka",
            necessary: "Nödvändiga",
            necessaryDesc: "Krävs för att webbplatsen ska fungera.",
            analytics: "Analys",
            analyticsDesc: "Hjälper oss att förbättra webbplatsen.",
            marketing: "Marknadsföring",
            marketingDesc: "Personlig annonsering.",
            save: "Spara inställningar"
        },
        privacyPolicy: {
            title: "Integritets- och Cookiepolicy",
            intro: "Vi värdesätter din integritet, vänligen läs vår integritetspolicy.",
            content: "Denna cookiepolicy gäller för alla mazury.holiday-webbplatser. Genom att använda våra sidor samtycker du till användningen av cookies i enlighet med denna policy. Vi använder cookies för att få våra sidor att fungere snabbare, vara enklare att använda och för att anpassa innehåll och annonser. Du kan när som helst hantera dina cookie-inställningar i din webbläsare.",
            usefulLinks: "Användbara länkar",
            mobileDevices: "Mobila enheter:"
        },
        mikolajkiPage: {
            title: "Gigu Lägenhet Mikołajki",
            subtitle: "Mikołajki centrum – Plac Wolności",
            introTitle: "Komfortabel lägenhet i hjärtat av Mikołajki",
            description: "En modern och bekväm lägenhet belägen i hjärtat av Mikołajki vid Plac Wolności – det perfekta läget för gäster som vill ha nära till allt. Lägenheten rymmer upp till 4 personer och består av ett mysigt sovrum med en bekväm dubbelsäng, ett vardagsrum med en bäddsoffa (extra sovplatser), ett fullt utrustat pentry och ett modernt badrum.",
            priceLabel: "Pris från",
            priceValue: "350 PLN",
            priceUnit: "/ natt",
            amenitiesTitle: "Bekvämligheter",
            bookingTitle: "Boka din vistelse",
            bookingDesc: "Kontakta oss direkt eller gör en direkt onlinebokning med knappen nedan.",
            callAction: "Ring",
            comfortTitle: "Komfort & Utrustning",
            comfortDesc: "Sovrum med 180x200 säng, snabbt WiFi, vardagsrum med TV och bäddsoffa",
            kitchenTitle: "Kök & Badrum",
            kitchenDesc: "Pentry med diskmaskin, modernt badrum med dusch, startkit (kaffe, te)",
            locationTitle: "Omgivning & Läge",
            locationDesc: "Innergårdsutsikt, absolutte centrum av Mikołajki vid Wolności-torget, nära sjön",
            collapseGallery: "Stäng galleri",
            expandGallery: "Visa fler bilder",
            bookBtn: "BOKA NU",
            amenities: {
                view: "Innergårdsutsikt",
                ac: "Luftkonditionering",
                smartTv: "Smart-TV",
                wifi: "Gratis WiFi",
                kitchen: "Pentry",
                dishwasher: "Diskmaskin",
                parking: "Stadskärna",
                port: "Nära sjön"
            }
        },
        fuledaApartment: { "parter": { "description": "Apartment with two bedrooms located on the ground floor is a beautifully and stylishly finished property. Situated on Lake Dobskie, which is a quiet zone, it guarantees relaxation in peace and quiet, surrounded by beautiful, pristine Masurian nature.\n\nOur apartments are located in Fuleda on a peninsula on the shore of the lake. It offers a beautiful panoramic view of Lake Dobskie, Cormorant Island, and Helena Island. The apartment is luxuriously finished and ensures a high level of comfort. On site, you can use private access to the water, a barbecue, and a bonfire place. Giżycko (about 12km away) allows you to enjoy many tourist attractions, restaurants, and pubs. The location of the property also makes it easy to explore Masuria in terms of nature and history.\n\nThe Fuleda Apartment (ground floor) with a direct view of Lake Dobskie is located on the ground floor of the building, has two bedrooms, a kitchenette, a bathroom with a shower, and two covered terraces: one at the front of the building with a direct view of Lake Dobskie, the other at the back of the building.\n\nLocation: ground floor\nMaximum number of people: 2+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, fireplace, fold-out 2-person sofa, table, chairs, vacuum cleaner, iron, ironing board, air conditioning, clothes dryer, wardrobe\nBedroom 2 equipment: TV, 160x200 bed, two bedside tables, set of bedding, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, hair straightener, towels, shower gel, soap, body lotion\nFront terrace: armchairs, table, cocoon chair\nBack terrace: terrace furniture set, charcoal grill\nPrivate path to the lake with a bonfire and barbecue area, hammock, two deckchairs\nOther: internet, wifi\nThe apartment is fully equipped, heated, and provides a comfortable stay all year round.\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż where the Wolf's Lair - Hitler's headquarters is located. Nearby forests, meadows, cycling routes, playgrounds. The nearest shop is about 3km away." }, "pietro": { "description": "A beautifully finished apartment with two bedrooms and a mezzanine, located on the upper floor with a breathtaking view of Lake Dobskie. This peaceful, nature-surrounded location is perfect for complete relaxation.\n\nThe apartment offers a spacious living room with a kitchenette, a bathroom with a shower, and two bedrooms. The master bedroom features a 160x200 bed, while the second bedroom has two single beds. There is also an additional sleeping area on the mezzanine. The apartment is equipped with air conditioning, ensuring comfort even on hot days.\n\nLocation: upper floor\nMaximum number of people: 4+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, 160x200 bed, wardrobe, air conditioning\nBedroom 2 equipment: two single beds, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, towels, cosmetics\nTerrace: comfortable terrace furniture set with an amazing view of the lake.\nPrivate path to the lake with a bonfire and barbecue area, hammock.\nOther: internet, wifi\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż." } }
    },
    no: {
        nav: { about: "Om oss", apartments: "Leiligheter", cottages: "Hytter", charter: "Charter", port: "Havn", attractions: "Attraksjoner", cooperation: "Samarbeid", contact: "Kontakt", rooms: "Rom", bookBtn: "Bestill", language: "Språk", back: "Tilbake" },
        hero: { title: "Ferie i Masuria", subtitle: "UNIKE ØYEBLIKK", apartmentsBtn: "Leiligheter", charterBtn: "Yacht" },
        intro: { tag: "Mazury.Holiday", title: "Velkommen", titleHighlight: "Innsjøene", p1: "Oppdag magien.", p2: "Avslapning." },
        apartments: { title: "Våre Leiligheter", description: "Velg sted.", details: "Detaljer", pricePrefix: "fra", night: "natt", people: "pers", bookBtn: "RESERVAR", items: { stranda: { title: "Stranda", location: "Giżycko", description: "Komfort." }, kisajno: { title: "Kisajno", location: "Giżycko", description: "Luksus." }, fuleda: { title: "Fuleda", location: "Fuleda, Jezioro Dobskie", description: "Oase." }, domkiSkorupki: { title: "Skorupki Hytter", location: "Skorupki, Tałty Innsjø", description: "Luksuriøse hytter i hjertet av masurisk natur." }, pokojeFuleda: { title: "Fuleda Rom", location: "Fuleda, Dobskie Innsjø", description: "Koselige rom med utsikt over innsjøen i stillhetssonen." }, mikolajki: { title: "Gigu Leilighet Mikołajki", location: "Plac Wolności, Mikołajki", description: "Moderne leilighet i sentrum av Mikołajki." } } },
        cottagesAndRooms: {
            title: "Våre hytter og rom",
            description: "Føl nærheten til naturen under komfortable forhold."
        },
        categories: { apartments: "Våre Leiligheter", cottages: "Hytter", rooms: "Rom", charter: "Charter" },
        charter: { tag: "Uten lisens", title: "Båtutleie", description: "Stillo 30.", model: "Stillo 30", cabins: "3 Lugarer", checkBtn: "Sjekk", premiumFleet: "Premium", feature1: "Ingen lisens", feature2: "2020", feature3: "Luksus", detailsBtn: "Detaljer" },
        stranda: { subtitle: "Luksus", description: "Moderne.", building: "Bygning", apartment: "Leilighet",
            filters: { "jacuzzi": "Jacuzzi", "size": "Size", "sizeAny": "Any", "size4": "Max 4 people", "size6": "Max 6 people", "floor": "Floor", "floorAny": "Any", "floorParter": "Ground floor", "floorPietro": "Upper floor", "sauna": "Sauna", "floor1": "1st Floor", "floor2": "2nd Floor", "floor3": "3rd Floor" },
            mapTitle: "Bygningers plassering",
            mapLabels: { "parking": "PARKERING", "playground": "LEKEPLASS", "sauna": "BADSTUE", "beach": "STRAND", "rentals": "UTLEIE", "beachbar": "STRANDBAR", "tavern": "TAVERNA", "shop": "BUTIKK", "scooters": "UTLEIE" },
            features: { "studio": "Studio", "oneBedroom": "1 Soverom", "twoBedrooms": "2 Soverom", "jacuzzi": "Jacuzzi", "sauna": "Badstue" }
        },
        details: { about: "Om", amenities: "Fasiliteter", booking: "Bestilling", checkAvailability: "Sjekk.", callBtn: "Ring", lowPrice: "Best pris.", descriptionPart1: "Luksus", descriptionPart2: "Stranda.", descriptionPart3: "Utsikt.", items: { view: "Utsikt", ac: "AC", terrace: "Terresse", kitchen: "Kjøkken", tv: "TV", wifi: "WiFi", parking: "Parkering", sauna: "Badstue" } },
        footer: { brandDesc: "Unike øyeblikk.", navTitle: "Navigasjon", contactTitle: "Kontakt", followTitle: "Følg", rights: "Alle rettigheter.", linksTitle: "Lenker" },
        cookieConsent: {
            title: "Cookies & Personvern 🍪",
            description: "Vi bryr oss om ditt personvern. Du kan godta alle informasjsonskapsler eller tilpasse dine valg. Les mer i vår",
            privacyLink: "Personvernerklæring",
            acceptAll: "Godta alle",
            customize: "Tilpass",
            decline: "Avvis",
            settingsTitle: "Innstillinger for informasjonskapsler",
            back: "Tilbake",
            necessary: "Nødvendige",
            necessaryDesc: "Påkrevd for at nettstedet skal fungere.",
            analytics: "Analyse",
            analyticsDesc: "Hjelper oss med å forbedre nettstedet.",
            marketing: "Markedsføring",
            marketingDesc: "Personlisert annonsering.",
            save: "Lagre innstillinger"
        },
        privacyPolicy: {
            title: "Personvern- og informasjonskapselpolicy",
            intro: "Vi verdsetter ditt personvern, vennligst les vår personvernerklæring.",
            content: "Denne policyen for informasjonskapsler gjelder for alle mazury.holiday-nettsteder. Ved å bruke våre sider samtykker du til bruk av informasjonskapsler i samsvar med denne policyen. Vi bruker informasjonskapsler for å få sidene våre til å fungere raskere, være enklere å bruke og for å tilpasse innhold og annonser. Du kan når som helst administrere innstillingene for informasjonskapsler i nettleseren din.",
            usefulLinks: "Nyttige lenker",
            mobileDevices: "Mobile enheter:"
        },
        mikolajkiPage: {
            title: "Gigu Leilighet Mikołajki",
            subtitle: "Mikołajki sentrum – Plac Wolności",
            introTitle: "Komfortabel leilighet i hjertet av Mikołajki",
            description: "En moderne og komfortabel leilighet som ligger midt i sentrum av Mikołajki ved Plac Wolności – den perfekte beliggenheten for gjester som ønsker å ha alt lett tilgjengelig. Leiligheten er beregnet for opptil 4 personer og består av et koselig soverom med en komfortabel dobbeltseng, en stue med sovesofa (ekstra soveplasser), en fullt utstyrt kjøkkenkrok og et moderne bad.",
            priceLabel: "Pris fra",
            priceValue: "350 PLN",
            priceUnit: "/ natt",
            amenitiesTitle: "Fasiliteter",
            bookingTitle: "Bestill ditt opphold",
            bookingDesc: "Kontakt oss direkte eller foretag en umiddelbar online-bestilling ved å bruke knappen nedenfor.",
            callAction: "Ring",
            comfortTitle: "Komfort og Utstyr",
            comfortDesc: "Soverom med 180x200 seng, rask WiFi, stue med TV og sovesofa",
            kitchenTitle: "Kjøkken og Bad",
            kitchenDesc: "Kjøkkenkrok med oppvaskmaskin, moderne bad med dusj, startsett (kaffe, te)",
            locationTitle: "Omgivelser og Beliggenhet",
            locationDesc: "Bakgårdsutsikt, midt i sentrum av Mikołajki på Wolności-plassen, nær sjøen",
            collapseGallery: "Lukk galleri",
            expandGallery: "Se flere bilder",
            bookBtn: "BESTILL NÅ",
            amenities: {
                view: "Bakgårdsutsikt",
                ac: "Aircondition",
                smartTv: "Smart-TV",
                wifi: "Gratis WiFi",
                kitchen: "Kjøkkenkrok",
                dishwasher: "Oppvaskemaskine",
                parking: "Sentrum",
                port: "Nær innsjøen"
            }
        },
        fuledaApartment: { "parter": { "description": "Apartment with two bedrooms located on the ground floor is a beautifully and stylishly finished property. Situated on Lake Dobskie, which is a quiet zone, it guarantees relaxation in peace and quiet, surrounded by beautiful, pristine Masurian nature.\n\nOur apartments are located in Fuleda on a peninsula on the shore of the lake. It offers a beautiful panoramic view of Lake Dobskie, Cormorant Island, and Helena Island. The apartment is luxuriously finished and ensures a high level of comfort. On site, you can use private access to the water, a barbecue, and a bonfire place. Giżycko (about 12km away) allows you to enjoy many tourist attractions, restaurants, and pubs. The location of the property also makes it easy to explore Masuria in terms of nature and history.\n\nThe Fuleda Apartment (ground floor) with a direct view of Lake Dobskie is located on the ground floor of the building, has two bedrooms, a kitchenette, a bathroom with a shower, and two covered terraces: one at the front of the building with a direct view of Lake Dobskie, the other at the back of the building.\n\nLocation: ground floor\nMaximum number of people: 2+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, fireplace, fold-out 2-person sofa, table, chairs, vacuum cleaner, iron, ironing board, air conditioning, clothes dryer, wardrobe\nBedroom 2 equipment: TV, 160x200 bed, two bedside tables, set of bedding, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, hair straightener, towels, shower gel, soap, body lotion\nFront terrace: armchairs, table, cocoon chair\nBack terrace: terrace furniture set, charcoal grill\nPrivate path to the lake with a bonfire and barbecue area, hammock, two deckchairs\nOther: internet, wifi\nThe apartment is fully equipped, heated, and provides a comfortable stay all year round.\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż where the Wolf's Lair - Hitler's headquarters is located. Nearby forests, meadows, cycling routes, playgrounds. The nearest shop is about 3km away." }, "pietro": { "description": "A beautifully finished apartment with two bedrooms and a mezzanine, located on the upper floor with a breathtaking view of Lake Dobskie. This peaceful, nature-surrounded location is perfect for complete relaxation.\n\nThe apartment offers a spacious living room with a kitchenette, a bathroom with a shower, and two bedrooms. The master bedroom features a 160x200 bed, while the second bedroom has two single beds. There is also an additional sleeping area on the mezzanine. The apartment is equipped with air conditioning, ensuring comfort even on hot days.\n\nLocation: upper floor\nMaximum number of people: 4+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, 160x200 bed, wardrobe, air conditioning\nBedroom 2 equipment: two single beds, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, towels, cosmetics\nTerrace: comfortable terrace furniture set with an amazing view of the lake.\nPrivate path to the lake with a bonfire and barbecue area, hammock.\nOther: internet, wifi\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż." } }
    },
    fi: {
        nav: { about: "Meistä", apartments: "Huoneistot", cottages: "Mökit", charter: "Vuokraus", port: "Satama", attractions: "Nähtävyydet", cooperation: "Yhteistyö", contact: "Yhteystiedot", rooms: "Huoneet", bookBtn: "Varaa", language: "Kieli", back: "Takaisin" },
        hero: { title: "Loma", subtitle: "AINUTLAATUINEN", apartmentsBtn: "Huoneistot", charterBtn: "Venevuokraus" },
        intro: { tag: "Mazury.Holiday", title: "Tervetuloa", titleHighlight: "Järvet", p1: "Koe taika.", p2: "Lepo." },
        apartments: { title: "Huoneistot", description: "Valitse.", details: "Tiedot", pricePrefix: "alk.", night: "yö", people: "hlö", bookBtn: "RESERVAR", items: { stranda: { title: "Stranda", location: "Giżycko", description: "Mukavuus." }, kisajno: { title: "Kisajno", location: "Giżycko", description: "Luksus." }, fuleda: { title: "Fuleda", location: "Fuleda, Jezioro Dobskie", description: "Rauha." }, domkiSkorupki: { title: "Skorupki Mökit", location: "Skorupki, Tałty Järvi", description: "Luksusmökkejä masurialaisen luonnon sydämessä." }, pokojeFuleda: { title: "Fuleda Huoneet", location: "Fuleda, Dobskie Järvi", description: "Viihtyisiä huoneita järvinäköalalla hiljaisella vyöhykkeellä." }, mikolajki: { title: "Gigu Huoneisto Mikołajki", location: "Plac Wolności, Mikołajki", description: "Moderni huoneisto Mikołajkin keskustassa." } } },
        cottagesAndRooms: {
            title: "Meidän mökkimme ja huoneemme",
            description: "Tunne luonnon läheisyys mukavissa olosuhteissa."
        },
        categories: { apartments: "Huoneistot", cottages: "Mökit", rooms: "Huoneet", charter: "Vuokraus" },
        charter: { tag: "Ilman lupaa", title: "Venevuokraus", description: "Stillo 30.", model: "Stillo 30", cabins: "3 Hyttiä", checkBtn: "Tarkista", premiumFleet: "Premium", feature1: "Ei lupaa", feature2: "2020", feature3: "Luksus", detailsBtn: "Tiedot" },
        stranda: { subtitle: "Luksus", description: "Moderni.", building: "Rakennus", apartment: "Huoneisto",
            filters: { "jacuzzi": "Jacuzzi", "size": "Size", "sizeAny": "Any", "size4": "Max 4 people", "size6": "Max 6 people", "floor": "Floor", "floorAny": "Any", "floorParter": "Ground floor", "floorPietro": "Upper floor", "sauna": "Sauna", "floor1": "1st Floor", "floor2": "2nd Floor", "floor3": "3rd Floor" },
            mapTitle: "Rakennusten sijainti",
            mapLabels: { "parking": "PYSÄKÖINTI", "playground": "LEIKKIPAIKKA", "sauna": "SAUNA", "beach": "RANTA", "rentals": "VUOKRAUS", "beachbar": "RANTABAARI", "tavern": "TAVERNA", "shop": "KAUPPA", "scooters": "VUOKRAUS" },
            features: { "studio": "Yksiö", "oneBedroom": "1 Makuuhuone", "twoBedrooms": "2 Makuuhuonetta", "jacuzzi": "Poreallas", "sauna": "Sauna" }
        },
        details: { about: "Tietoa", amenities: "Varusteet", booking: "Varaus", checkAvailability: "Tarkista.", callBtn: "Soita", lowPrice: "Paras hinta.", descriptionPart1: "Luksus", descriptionPart2: "Stranda.", descriptionPart3: "Näkymä.", items: { view: "Näkymä", ac: "Ilmastointi", terrace: "Terassi", kitchen: "Keittiö", tv: "TV", wifi: "WiFi", parking: "Pysäköinti", sauna: "Sauna" } },
        footer: { brandDesc: "Ainutlaatuista.", navTitle: "Navigaatio", contactTitle: "Yhteystiedot", followTitle: "Seuraa", rights: "Kaikki oikeudet.", linksTitle: "Linkit" },
        cookieConsent: {
            title: "Evästeet ja Yksityisyys 🍪",
            description: "Välitämme yksityisyydestäsi. Voit hyväksyä kaikki evästeet tai muokata asetuksiasi. Lue lisää",
            privacyLink: "Tietosuojaselosteestamme",
            acceptAll: "Hyväksy kaikki",
            customize: "Mukauta",
            decline: "Hylkää",
            settingsTitle: "Evästeasetukset",
            back: "Takaisin",
            necessary: "Välttämättömät",
            necessaryDesc: "Vaaditaan sivuston toimintaan.",
            analytics: "Analytiikka",
            analyticsDesc: "Auttaa meitä parantamaan sivustoa.",
            marketing: "Markkinointi",
            marketingDesc: "Personoitu mainonta.",
            save: "Tallenna asetukset"
        },
        privacyPolicy: {
            title: "Tietosuoja- ja evästekäytäntö",
            intro: "Arvostamme yksityisyyttäsi, lue tietosuojakäytäntömme.",
            content: "Tämä evästekäytäntö koskee kaikkia mazury.holiday-verkkosivustoja. Käyttämällä sivustojamme hyväksyt evästeiden käytön tämän käytännön mukaisesti. Käytämme evästeitä saadaksemme sivumme toimimaan nopeammin, olemaan helpompi käyttää ja personoidaksemme sisältöä ja mainoksia. Voit hallita evästeasetuksiasi selaimessasi milloin tahansa.",
            usefulLinks: "Hyödyllisiä linkkejä",
            mobileDevices: "Mobiililaitteet:"
        },
        mikolajkiPage: {
            title: "Gigu Huoneisto Mikołajki",
            subtitle: "Mikołajkin keskusta – Plac Wolności",
            introTitle: "Mukava huoneisto Mikołajkin sydämessä",
            description: "Moderni ja mukava huoneisto Mikołajkin sydämessä, Plac Wolności -aukiolla – täydellinen sijainti vieraille, jotka haluavat kaiken olevan lähellä. Huoneisto on tarkoitettu enintään 4 hengelle ja siihen kuuluu viihtyisä makuuhuone mukavalla parivuoteella, olohuone vuodesohvalla (lisävuodepaikkoja), täysin varustettu keittokomero ja moderni kylpyhuone.",
            priceLabel: "Hinta alk.",
            priceValue: "350 PLN",
            priceUnit: "/ yö",
            amenitiesTitle: "Mukavuudet",
            bookingTitle: "Varaa majoituksesi",
            bookingDesc: "Ota yhteyttä suoraan meihin tai tee välitön online-varaus alla olevalla painikkeella.",
            callAction: "Soita",
            comfortTitle: "Mukavuus & Varustelu",
            comfortDesc: "Makuuhuone 180x200 sängyllä, nopea WiFi, olohuone TV:llä ja vuodesohvalla",
            kitchenTitle: "Keittiö & Kylpyhuone",
            kitchenDesc: "Keittokomero astianpesukoneella, moderni kylpyhuone suihkulla, aloitussarja (kahvi, tee)",
            locationTitle: "Ympäristö & Sijainti",
            locationDesc: "Sisäpihanäkymä, Mikołajkin aivan keskustassa Wolności-aukiolla, lähellä järveä",
            collapseGallery: "Pienennä galleria",
            expandGallery: "Näytä lisää kuvia",
            bookBtn: "VARAA NYT",
            amenities: {
                view: "Sisäpihanäkymä",
                ac: "Ilmastointi",
                smartTv: "Smart TV",
                wifi: "Ilmainen WiFi",
                kitchen: "Keittokomero",
                dishwasher: "Astianpesukone",
                parking: "Keskusta",
                port: "Lähellä järveä"
            }
        },
        fuledaApartment: { "parter": { "description": "Apartment with two bedrooms located on the ground floor is a beautifully and stylishly finished property. Situated on Lake Dobskie, which is a quiet zone, it guarantees relaxation in peace and quiet, surrounded by beautiful, pristine Masurian nature.\n\nOur apartments are located in Fuleda on a peninsula on the shore of the lake. It offers a beautiful panoramic view of Lake Dobskie, Cormorant Island, and Helena Island. The apartment is luxuriously finished and ensures a high level of comfort. On site, you can use private access to the water, a barbecue, and a bonfire place. Giżycko (about 12km away) allows you to enjoy many tourist attractions, restaurants, and pubs. The location of the property also makes it easy to explore Masuria in terms of nature and history.\n\nThe Fuleda Apartment (ground floor) with a direct view of Lake Dobskie is located on the ground floor of the building, has two bedrooms, a kitchenette, a bathroom with a shower, and two covered terraces: one at the front of the building with a direct view of Lake Dobskie, the other at the back of the building.\n\nLocation: ground floor\nMaximum number of people: 2+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, fireplace, fold-out 2-person sofa, table, chairs, vacuum cleaner, iron, ironing board, air conditioning, clothes dryer, wardrobe\nBedroom 2 equipment: TV, 160x200 bed, two bedside tables, set of bedding, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, hair straightener, towels, shower gel, soap, body lotion\nFront terrace: armchairs, table, cocoon chair\nBack terrace: terrace furniture set, charcoal grill\nPrivate path to the lake with a bonfire and barbecue area, hammock, two deckchairs\nOther: internet, wifi\nThe apartment is fully equipped, heated, and provides a comfortable stay all year round.\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż where the Wolf's Lair - Hitler's headquarters is located. Nearby forests, meadows, cycling routes, playgrounds. The nearest shop is about 3km away." }, "pietro": { "description": "A beautifully finished apartment with two bedrooms and a mezzanine, located on the upper floor with a breathtaking view of Lake Dobskie. This peaceful, nature-surrounded location is perfect for complete relaxation.\n\nThe apartment offers a spacious living room with a kitchenette, a bathroom with a shower, and two bedrooms. The master bedroom features a 160x200 bed, while the second bedroom has two single beds. There is also an additional sleeping area on the mezzanine. The apartment is equipped with air conditioning, ensuring comfort even on hot days.\n\nLocation: upper floor\nMaximum number of people: 4+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, 160x200 bed, wardrobe, air conditioning\nBedroom 2 equipment: two single beds, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, towels, cosmetics\nTerrace: comfortable terrace furniture set with an amazing view of the lake.\nPrivate path to the lake with a bonfire and barbecue area, hammock.\nOther: internet, wifi\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż." } }
    }
};
