import * as fs from 'fs';
import { translations } from './src/lib/translations';

const plAttractions = {
      "title": "Atrakcje regionu",
      "subtitle": "Giżycko i serce Mazur oferują mnóstwo możliwości",
      "showOnMap": "Pokaż na mapie",
      "tags": {
        "history": "Historia",
        "architecture": "Architektura",
        "education": "Edukacja",
        "monument": "Zabytek",
        "technology": "Technika",
        "gizycko": "Giżycko",
        "sailing": "Żeglarstwo",
        "recreation": "Rekreacja",
        "center": "Centrum",
        "nature": "Natura",
        "silence": "Cisza",
        "landscape": "Krajobraz",
        "ww2": "II Wojna Światowa",
        "museum": "Muzeum",
        "view": "Punkt widokowy",
        "cafe": "Kawiarnia",
        "hotel": "Hotel",
        "animals": "Zwierzęta"
      },
      "boyen": {
        "title": "Twierdza Boyen",
        "desc": "XIX-wieczna twierdza w kształcie gwiazdy, kluczowy punkt historyczny regionu. Doskonale zachowane mury, bramy i budynki koszarowe stanowią unikalny przykład sztuki fortyfikacyjnej."
      },
      "bridge": {
        "title": "Most Obrotowy",
        "desc": "Unikalny XIX-wieczny zabytek techniki, obsługiwany ręcznie przez jednego operatora. Łączy brzegi Kanału Łuczańskiego i jest jedynym czynnym mostem tego typu w Europie."
      },
      "port": {
        "title": "Port Giżycko & Ekomarina",
        "desc": "Największy i najnowocześniejszy port na Mazurach. Idealne miejsce na spacer, kolację w porcie lub rozpoczęcie rejsu po Wielkich Jeziorach Mazurskich."
      },
      "water": {
        "title": "Jezioro Kisajno i Dobskie",
        "desc": "Krystalicznie czysta woda, rezerwaty przyrody i strefy ciszy. Raj dla miłośników natury, kajakarstwa i spokojnego żeglowania z dala od zgiełku motorówek."
      },
      "wolfsLair": {
        "title": "Wilczy Szaniec",
        "desc": "Kwatera Główna Hitlera w Gierłoży. Ukryty w lesie kompleks bunkrów, będący świadkiem historii II wojny światowej."
      },
      "waterTower": {
        "title": "Wieża Ciśnień",
        "desc": "Zabytkowa wieża ciśnień z tarasem widokowym, z którego roztacza się panorama Giżycka i okolicznych jezior. Wewnątrz znajduje się muzeum i kawiarnia."
      },
      "castle": {
        "title": "Zamek Krzyżacki",
        "desc": "Odrestaurowany zamek w Giżycku, w którym obecnie mieści się luksusowy Hotel St. Bruno. Połączenie historii z nowoczesnością."
      },
      "bison": {
        "title": "Zagroda Żubrów",
        "desc": "Pokazowa zagroda żubrów w Wolisku. Szansa na obserwację królów puszczy z platformy widokowej w ich naturalnym środowisku."
      }
};

const enAttractions = {
      "title": "Regional attractions",
      "subtitle": "Giżycko and the heart of Masuria offer plenty of opportunities",
      "showOnMap": "Show on map",
      "tags": {
        "history": "History",
        "architecture": "Architecture",
        "education": "Education",
        "monument": "Monument",
        "technology": "Technology",
        "gizycko": "Giżycko",
        "sailing": "Sailing",
        "recreation": "Recreation",
        "center": "Center",
        "nature": "Nature",
        "silence": "Silence",
        "landscape": "Landscape",
        "ww2": "WW2",
        "museum": "Museum",
        "view": "Viewpoint",
        "cafe": "Cafe",
        "hotel": "Hotel",
        "animals": "Animals"
      },
      "boyen": {
        "title": "Boyen Fortress",
        "desc": "A 19th-century star-shaped Prussian fortress, a key historical point of the region. Perfectly preserved walls, gates, and barracks buildings represent a unique example of fortification."
      },
      "bridge": {
        "title": "Swing Bridge",
        "desc": "A unique 19th-century monument of technology, operated manually by a single operator. It connects the banks of the Łuczański Canal and is the only active bridge of this type in Europe."
      },
      "port": {
        "title": "Port Giżycko & Ekomarina",
        "desc": "The largest and most modern port in Masuria. An ideal place for a walk, dinner at the port, or starting a cruise on the Great Masurian Lakes."
      },
      "water": {
        "title": "Kisajno and Dobskie Lakes",
        "desc": "Crystal clear water, nature reserves, and quiet zones. A paradise for lovers of nature, kayaking, and peaceful sailing away from the motorboat noise."
      },
      "wolfsLair": {
        "title": "Wolf's Lair",
        "desc": "Hitler's Headquarters in Gierłoż. A complex of bunkers hidden in the forest, witnessing the history of World War II."
      },
      "waterTower": {
        "title": "Water Tower",
        "desc": "A historic water tower with an observation deck offering a panoramic view of Giżycko and the surrounding lakes. Inside, there is a museum and a cafe."
      },
      "castle": {
        "title": "Teutonic Castle",
        "desc": "A restored castle in Giżycko, now the luxury St. Bruno Hotel. A combination of history and modernity."
      },
      "bison": {
        "title": "Bison Enclosure",
        "desc": "A demonstration bison enclosure in Wolisko. An opportunity to observe the 'kings of the forest' from a viewing platform in their natural environment."
      }
};

const deAttractions = {
      "title": "Regionale Sehenswürdigkeiten",
      "subtitle": "Giżycko und das Herz Masurens bieten viele Möglichkeiten",
      "showOnMap": "Auf der Karte anzeigen",
      "tags": {
        "history": "Geschichte",
        "architecture": "Architektur",
        "education": "Bildung",
        "monument": "Denkmal",
        "technology": "Technik",
        "gizycko": "Lötzen (Giżycko)",
        "sailing": "Segeln",
        "recreation": "Erholung",
        "center": "Zentrum",
        "nature": "Natur",
        "silence": "Stille",
        "landscape": "Landschaft",
        "ww2": "Zweiter Weltkrieg",
        "museum": "Museum",
        "view": "Aussichtspunkt",
        "cafe": "Café",
        "hotel": "Hotel",
        "animals": "Tiere"
      },
      "boyen": {
        "title": "Feste Boyen",
        "desc": "Eine sternförmige preußische Festung aus dem 19. Jahrhundert, ein wichtiger historischer Punkt der Region. Perfekt erhaltene Mauern, Tore und Kasernengebäude stellen ein einzigartiges Beispiel der Befestigungskunst dar."
      },
      "bridge": {
        "title": "Drehbrücke",
        "desc": "Ein einzigartiges technisches Denkmal aus dem 19. Jahrhundert, das von einem einzigen Bediener manuell betrieben wird. Es verbindet die Ufer des Łuczański-Kanals und ist die einzige aktive Brücke dieser Art in Europa."
      },
      "port": {
        "title": "Hafen Giżycko & Ekomarina",
        "desc": "Der größte und modernste Hafen in Masuren. Ein idealer Ort für einen Spaziergang, ein Abendessen im Hafen oder den Beginn einer Kreuzfahrt auf den Großen Masurischen Seen."
      },
      "water": {
        "title": "Kisajno- und Dobskie-Seen",
        "desc": "Kristallklares Wasser, Naturschutzgebiete und Ruhezonen. Ein Paradies für Naturliebhaber, Kanufahrer und ruhiges Segeln abseits des Motorbootlärms."
      },
      "wolfsLair": {
        "title": "Wolfsschanze",
        "desc": "Hitlers Hauptquartier in Gierłoż. Ein im Wald versteckter Bunkerkomplex, der die Geschichte des Zweiten Weltkriegs bezeugt."
      },
      "waterTower": {
        "title": "Wasserturm",
        "desc": "Ein historischer Wasserturm mit Aussichtsplattform, der einen Panoramablick auf Giżycko und die umliegenden Seen bietet. Im Inneren befindet sich ein Museum und ein Café."
      },
      "castle": {
        "title": "Deutschordensburg",
        "desc": "Eine restaurierte Burg in Giżycko, heute das luxuriöse St. Bruno Hotel. Eine Kombination aus Geschichte und Moderne."
      },
      "bison": {
        "title": "Wisentgehege",
        "desc": "Ein Demonstrations-Wisentgehege in Wolisko. Eine Gelegenheit, die 'Könige des Waldes' von einer Aussichtsplattform in ihrer natürlichen Umgebung zu beobachten."
      }
};

if (translations.pl) translations.pl.attractionsPage = plAttractions;
if (translations.en) translations.en.attractionsPage = enAttractions;
if (translations.de) translations.de.attractionsPage = deAttractions;

const output = `export const translations = ${JSON.stringify(translations, null, 2)};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.pl;
`;

fs.writeFileSync('src/lib/translations.ts', output);
console.log("Fixed src/lib/translations.ts successfully");
