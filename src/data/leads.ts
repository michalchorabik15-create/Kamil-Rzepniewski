export interface LeadProposal {
  structure: string[];
  sections: string[];
  cta: string[];
  usp: string[];
  seo: string[];
}

export interface OutreachPitches {
  sms: string;
  messenger: string;
  emailSubject: string;
  emailBody: string;
  callScript: string;
}

export interface CompleteAudit {
  visualScore: number;
  uxScore: number;
  mobileScore: number;
  seoScore: number;
  croScore: number;
  trustScore: number;
  biggestProblems: string[];
  recommendations: string[];
  auditSummary: string;
  strongestArgument: string;
}

export interface Lead {
  id: string;
  name: string;
  rating: number;
  reviewsCount: number;
  street: string;
  city: string;
  website: string;
  websiteType: 'custom' | 'none_facebook' | 'none_znanylekarz' | 'none' | 'wix' | 'http_insecure';
  phone: string;
  categories: string[];
  googleMapsUrl: string;
  
  // Scores (1-100)
  websiteQualityScore: number;
  businessPotentialScore: number;
  salesOpportunityScore: number;
  
  audit?: CompleteAudit;
  pitches?: OutreachPitches;
  proposal?: LeadProposal;
}

export const leadsData: Lead[] = [
  {
    id: "swiat-zywic",
    name: "Świat Żywic - Posadzki i Membrany",
    rating: 5.0,
    reviewsCount: 21,
    street: "Produkcyjna 108",
    city: "Białystok",
    website: "http://swiatzywic.pl/",
    websiteType: "http_insecure",
    phone: "+48 664 588 105",
    categories: ["Firma budowlana", "Posadzki żywiczne", "Hydroizolacje"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Świat%20Żywic%20Białystok&query_place_id=ChIJeTds7ND7H0cRZJU_8vDqKuQ",
    websiteQualityScore: 30,
    businessPotentialScore: 95,
    salesOpportunityScore: 97,
    audit: {
      visualScore: 35,
      uxScore: 30,
      mobileScore: 25,
      seoScore: 40,
      croScore: 20,
      trustScore: 45,
      biggestProblems: [
        "Brak protokołu HTTPS (brak SSL) - Przeglądarka wyświetla groźne ostrzeżenie 'Niezabezpieczona', co drastycznie obniża zaufanie klientów.",
        "Niska responsywność i ciężka nawigacja mobilna - Strona rozjeżdża się na smartfonach, uniemożliwiając wygodne przeglądanie galerii.",
        "Przestarzałe portfolio - Brak nowoczesnej prezentacji mikrocementu i żywic (brak zdjęć na pełnym ekranie, niska ostrość, brak wideo na żywo).",
        "Słabe CTA - Brak jasnej ścieżki rezerwacji darmowej wyceny i kalkulatora powierzchni w m²."
      ],
      recommendations: [
        "Wdrożenie szyfrowania SSL (przejście na bezpieczny protokół HTTPS).",
        "Przebudowa na ekspresowo ładującą się i w 100% dostosowaną do telefonów stronę w standardzie React (mobile-first).",
        "Zaprojektowanie prestiżowej, pełnoekranowej galerii realizacji z podziałem na mikrocement, posadzki garażowe i tarasy."
      ],
      auditSummary: "Świat Żywic posiada nienaganną opinię (5.0, 21 ocen). Posadzki żywiczne i jastrychy to usługa premium. Niestety, obecny serwis na HTTP odstrasza klientów lękiem o bezpieczeństwo i słabym, przestarzałym układem galerii realizacyjnej.",
      strongestArgument: "Klienci poszukujący mikrocementu czy żywicy do nowoczesnego domu to zamożni inwestorzy, którzy 'kupują oczami'. Brak certyfikatu SSL oraz przestarzały design sprawiają, że uciekają do konkurencji o mniejszym doświadczeniu, ale ładniejszym wizerunku cyfrowym."
    },
    pitches: {
      sms: "Dzień dobry! Gratulujemy oceny 5.0 w Świecie Żywic. Państwa strona na Produkcyjnej nie ma szyfrowania SSL (Chrome zgłasza błąd). Czy rozważali Państwo nowoczesny, bezpieczny portal z pięknym portfolio?",
      messenger: "Dzień dobry! Z zachwytem obserwuję Państwa realizacje z mikrocementu i żywic (piękna ocena 5.0). Zauważyłem, że Państwa witryna swiatzywic.pl działa bez SSL (czerwone ostrzeżenie) i ciężko działa na telefonach. Przygotowałem bezpłatny, nowoczesny model strony z prestiżową galerią na smartfony. Czy mogę podesłać podgląd?",
      emailSubject: "Nowy, bezpieczny wizerunek premium dla Świat Żywic Białystok - 21 opinii 5.0",
      emailBody: "Szanowni Państwo,\n\nGratuluję nienagannego wizerunku w Google Maps - ocena 5.0 z 21 opinii to dowód, że realizują Państwo posadzki i hydroizolacje na najwyższym poziomie.\n\nJako ekspert marketingu B2B, przeanalizowałem Państwa oficjalną stronę swiatzywic.pl i znalazłem błędy techniczne, które mogą hamować pozyskiwanie zamożnych inwestorów prywatnych:\n1. Brak certyfikatu SSL (czerwony komunikat 'Niebezpieczna' w przeglądarkach) - wzbudza niepokój u odwiedzających.\n2. Słaba mobilność - strona nie jest przystosowana do smartfonów, a to z nich pochodzi 80% ruchu.\n3. Ukryte portfolio - mikrocement i dekoracyjne żywice wymagają pełnoekranowych zdjęć w najwyższej rozdzielczości, których brakuje.\n\nZaprojektowałem wstępną koncepcję nowoczesnego, ultralekkiego portalu dla Świat Żywic, który zawiera:\n- Bezpieczny asystent wyceny posadzki (CRO) na podstawie powierzchni m²,\n- Galerię premium o wysokiej ostrości,\n- Szyfrowane połączenie HTTPS.\n\nCzy w tym tygodniu znajdą Państwo 10 minut na krótką rozmowę lub prezentację projektu online?\n\nZ powagą,\n[Twoje Imię]\nEkspert UX & Web Design\nTel: +48 500 XXX XXX",
      callScript: "Dzień dobry! Nazywam się [Twoje Imię]. Dzwonię, bo analizowałem firmy z branży wykończeniowej w Białymstoku i chciałem serdecznie pogratulować nienagannej oceny 5.0 w Świecie Żywic – to rzadkość na naszym rynku. Dzwonię krótko, bo zauważyłem, że Państwa strona działa na starym protokole HTTP bez certyfikatu bezpieczeństwa, przez co przeglądarka ostrzega o zagrożeniu. Branża posadzek żywicznych to produkt premium, który klient kupuje oczami, a alarm na stronie i brak mobilnej galerii utrudniają podjęcie decyzji. Przygotowałem dla Państwa bezpłatny, nowoczesny projekt nowej strony mobilnej z interaktywną galerią. Czy mogę podesłać Państwu link na e-mail?"
    },
    proposal: {
      structure: ["Hero z wideo-tłem nanoszenia żywicy", "Bento-Grid realizacyjny (Mikrocement, Garażowe, Tarasy)", "Interaktywny kalkulator wyceny za m²", "Przewodnik po technologiach (EP, PU, poliuretan)", "Karuzela opinii z Google 5.0", "Szyfrowany formularz rezerwacyjny"],
      sections: ["Główny baner ze zdjęciem realizacji", "Nasz proces realizacji krok po kroku", "Zalety mikrocementu (brak spoin, wodoodporność)", "Formularz szybkiego kontaktu i bezpłatnego obmiaru"],
      cta: ["Poproś o bezpłatną wycenę posadzki", "Skorzystaj z kalkulatora m²", "Zarezerwuj darmowy pomiar na budowie"],
      usp: ["Rzemieślnicza precyzja i unikalne portfolio premium", "Użycie certyfikowanych żywic MC-Bauchemie i Sika", "Wycena w 24 godziny od przesłania rzutów"],
      seo: ["posadzki żywiczne Białystok", "mikrocement podlaskie", "hydroizolacja tarasu Białystok", "posadzka dekoracyjna żywica"]
    }
  },
  {
    id: "presto-house",
    name: "Presto House - Elewacje, Tarasy i Skład Drewna",
    rating: 5.0,
    reviewsCount: 55,
    street: "Zagórki 2",
    city: "Białystok",
    website: "https://prestohouse.pl/",
    websiteType: "custom",
    phone: "+48 883 444 255",
    categories: ["Firma budowlana", "Stolarz", "Dostawca drewna"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Presto%20House%20Białystok",
    websiteQualityScore: 55,
    businessPotentialScore: 98,
    salesOpportunityScore: 90,
    audit: {
      visualScore: 60,
      uxScore: 50,
      mobileScore: 30,
      seoScore: 55,
      croScore: 35,
      trustScore: 70,
      biggestProblems: [
        "Niska wydajność techniczna (PageSpeed Mobile poniżej 30/100) spowodowana brakiem kompresji ciężkich zdjęć tarasów i zadaszeń.",
        "Słabe przystosowanie pod użytkownika mobilnego - strona ładuje się opornie na smartfonach, utrudniając szybki kontakt.",
        "Brak prostego generatora zapytań ofertowych (CRO) na darmowy pomiar tarasu czy zadaszenia na budowie.",
        "Niedostateczna prezentacja potężnego social-proof (55 opinii 5.0) bezpośrednio u klucza strony głównej."
      ],
      recommendations: [
        "Optymalizacja prędkości wczytywania (PageSpeed >90) oraz wdrożenie nowoczesnych formatów WebP/AVIF dla obrazów.",
        "Zaprojektowanie sekcji rezerwacji darmowych pomiarów (kalkulator tarasów w 3 krokach).",
        "Wdrożenie automatycznego Widgetu Opinii Google sprężonego z API."
      ],
      auditSummary: "Presto House to potężna firma z 55 opiniami (5.0). Świadczy usługi budowy tarasów drewna, elewacji i ma skład. Strona www jest ładna na desktopie, lecz na urządzeniach mobilnych działa ociężale, tracąc zapytania od zniecierpliwionych inwestorów.",
      strongestArgument: "Większość klientów szuka wykonawcy elewacji czy tarasu na telefonie podczas budowy lub odpoczynku w ogrodzie. Jeśli Państwa strona na smartfonie ładuje się dłużej niż 5 sekund, uciekają do konkurencji, która natychmiast oferuje szybki formularz darmowej wyceny."
    },
    pitches: {
      sms: "Dzień dobry! Gratulujemy 55 opinii 5.0 w Presto House. Strona ma świetne realizacje, ale ładuje się powoli na komórkach (Google PageSpeed 25/100). Chętnie bezpłatnie zaprezentuję lżejszy i szybszy model.",
      messenger: "Dzień dobry! Z zachwytem przeglądam Państwa realizacje tarasów i elewacji drewnianych. Marka Presto House zbiera fantastyczne oceny (55 opinii 5.0!). Niestety strona prestohouse.pl działa bardzo powoli na smartfonach przez nieskompresowane grafiki. Opracowałem ekspresowy, nowoczesny szablon portfolio zoptymalizowany pod kątem telefonów. Mogę podesłać do rzucenia okiem?",
      emailSubject: "Szybkie, mobilne portfolio i wzrost zapytań z telefonu dla Presto House - 55 opinii 5.0",
      emailBody: "Szanowni Państwo,\n\nZ ogromnym uznaniem analizuję obecność Presto House na podlaskim rynku budowlanym. Wynik 55 opinii o średniej 5.0 to fenomen, który potwierdza bezkompromisową jakość Państwa tarasów, wiat i elewacji.\n\nJako ekspert technologii internetowych, przeprowadziłem audyt sprawności Państwa witryny prestohouse.pl. Wygląda ona estetycznie, ale pod kątem technicznym posiada barierę w postaci prędkości mobilnej. Według kryteriów Google, strona ładuje się powyżej 6 sekund na smartfonach (PageSpeed 25/100).\n\nMoje rekomendacje dla wzrostu konwersji ze strony:\n1. Kompresja i konwersja obrazów na formaty WebP - drastycznie przyspieszy ładowanie zdjęć tarasów.\n2. Wdrożenie interaktywnego formularza 'Darmowy projekt i wycena tarasu/wiaty'.\n3. Wplecenie aktywnego, budującego wiarygodność modułu opinii z Google Maps.\n\nPrzygotowałem projekt nowej, dynamicznej i bardzo jasnej witryny mobilnej Presto House. Chętnie zaprezentuję Państwu różnicę w działaniu podczas krótkiej rozmowy.\n\nZ powagą,\n[Twoje Imię]\nDoradca UX/CRO\nTel: +48 500 XXX XXX",
      callScript: "Dzień dobry! Rozmawiam z właścicielem Presto House? Nazywam się [Twoje Imię], dzwonię z Białegostoku. Przede wszystkim gratuluję imponujących 55 opinii o nienagannej średniej 5.0 – w branży budowy tarasów i elewacji to dowód doskonałego rzemiosła. Dzwonię, ponieważ jako specjalista UX badałem szybkość podlaskich stron budowlanych. Państwa strona prestohouse.pl prezentuje piękne prace, ale na telefonach ładuje się bardzo ociężale ze względu na ciężar zdjęć. Przez to klienci mobilni mogą się zniechęcać. Przygotowałem bezpłatny, lekki i nowoczesny prototyp strony, który ładuje się w sekundę i od razu zachęca do darmowego pomiaru na budowie. Czy mogę podesłać darmowy podgląd tego projektu mailowo?"
    },
    proposal: {
      structure: ["Hero ze zdjęciem tarasu w 4K (WebP)", "Sekcja trójdzielna (Tarasy drewniane, Elewacje, Skład drewna)", "Interaktywny dojazd i darmowy formularz wyceny", "Dynamiczne opinie z Google Maps", "Nasze najlepsze gatunki drewna (modrzew syberyjski, termodrewno)", "Formularz rezerwacji spotkania na budowie"],
      sections: ["Projekt tarasu krok po kroku", "Nasze zadaszenia i wiaty garażowe", "Wypożyczalnia i skład - cennik", "Zatwierdzenie darmowego pomiaru na miejscu"],
      cta: ["Poproś o darmowy pomiar i wycenę", "Skonfiguruj swój wymarzony taras", "Skontaktuj się z doradcą technicznym Presto House"],
      usp: ["55 nienagannych opinii budujących autorytet rynkowy", "Użycie najlepszego certyfikowanego drewna skandynawskiego i egzotycznego", "Kompleksowość: od projektu, przez dostawę drewna, po montaż"],
      seo: ["tarasy drewniane Białystok", "elewacje drewniane podlaskie", "wiaty garażowe drewniane Białystok", "skład drewna Zagórki"]
    }
  },
  {
    id: "bramil",
    name: "Automatyka i Bramy - Bramil Kamil Rzepniewski",
    rating: 5.0,
    reviewsCount: 24,
    street: "Logarytmiczna 16",
    city: "Białystok",
    website: "",
    websiteType: "none",
    phone: "+48 517 988 675",
    categories: ["Automatyka", "Dostawca drzwi garażowych", "Ślusarz"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bramil%20Kamil%20Rzepniewski%20Białystok&query_place_id=ChIJUSLP3JL5H0cRMwOmoLPh8y8",
    websiteQualityScore: 10,
    businessPotentialScore: 92,
    salesOpportunityScore: 98,
    audit: {
      visualScore: 10,
      uxScore: 10,
      mobileScore: 10,
      seoScore: 15,
      croScore: 10,
      trustScore: 40,
      biggestProblems: [
        "Całkowity brak jakiejkolwiek witryny internetowej - firma opiera się wyłącznie na wizytówce Google Maps.",
        "Utrata 100% ruchu z Google na zapytania lokalne, takie jak 'napędy do bram Białystok' czy 'montaż bram garażowych'.",
        "Brak profesjonalnego wizerunku i prezentacji portfolio automatyki u renomowanych producentów (Somfy, FAAC, Nice).",
        "Brak stałego asystenta i wygodnego formularza zapytań o darmową konfigurację i dobór silnika bramy."
      ],
      recommendations: [
        "Zbudowanie nowoczesnego, zorientowanego na generowanie leadów Landing Page z certyfikatem SSL.",
        "Wdrożenie konfiguratora doboru automatyki (waga skrzydła, częstotliwość pracy, budżet) z szybkim CTA.",
        "Rejestracja i pozycjonowanie własnej domeny bramil.pl pod lokalne SEO."
      ],
      auditSummary: "Kamil Rzepniewski cieszy się fantastyczną sławą (24 opinie 5.0). Klient szukający automatyki lub bramy w Białymstoku najczęściej korzysta z Google. Przez całkowity brak witryny firma Bramil traci setki zapytań na rzecz gorszych konkurentów z rozbudowanymi serwisami.",
      strongestArgument: "Inwestor, budując dom pod Białymstokiem, szuka montażu automatyki bramowej w Google. Brak strony www spycha firmę do cienia. Własne lądowisko (landing) z darmowym kalkulatorem przełoży się na co najmniej 10-15 nowych, zyskownych instalacji miesięcznie."
    },
    pitches: {
      sms: "Dzień dobry panie Kamilu! Gratulujemy 24 rewelacyjnych ocen w Bramil. Jako jedni z nielicznych fachowców nie mają Państwo witryny internetowej, co oddaje ruch z Google rywalom. Przygotowałem bezpłatny model szybkiej strony mobilnej.",
      messenger: "Dzień dobry Panie Kamilu! Gratuluję fenomenalnej renomy (24 opinii 5.0) w branży automatyki bram. Zauważyłem, że nie posiadają Państwo własnej strony internetowej. Klienci szukający 'montaż napędów do bram Białystok' trafiają na konkurencyjne firmy. Opracowałem nowoczesny szkic Landing Page dedykowany dla firmy Bramil. Czy mogę go podesłać bez zobowiązań?",
      emailSubject: "Dedykowana strona dla Bramil Białystok - 24 opinii 5.0 i dominacja w lokalnym SEO",
      emailBody: "Szanowny Panie Kamilu,\n\nPiszę do Pana, ponieważ z uznaniem analizuję rynek wykonawców instalacji automatyki domowej i bram w Białymstoku. Państwa średnia ocen 5.0 oparta na 24 opiniach to spektakularny wynik, potwierdzający rzetelność i profesjonalizm.\n\nZauważyłem jednak krytyczny brak w obecności marki Bramil w sieci - nie posiadają Państwo własnej strony www. Dlaczego to kluczowy problem?\n1. Klient szukający automatyki lub bram garażowych wpisuje w Google np. 'napędy do bram Białystok' i wybiera firmy mające strony z cennikiem i opisem usług.\n2. Brak prezentacji stosowanych silników (Nice, FAAC, Somfy) sprawia, że klienci premium nie widzą profesjonalnego zaplecza technicznego.\n\nZaprojektowałem wstępny model strony mobilnej dla marki Bramil z wbudowanym kalkulatorem doboru napędu w 30 sekund. Chętnie udostępnię darmowy podgląd tego projektu.\n\nCzy możemy porozmawiać o tym przez 5 minut telefonicznie?\n\nZ poważaniem,\n[Twoje Imię]\nEkspert Lead Generation\nTel: +48 500 XXX XXX",
      callScript: "Dzień dobry Panie Kamilu? Nazywam się [Twoje Imię]. Dzwonię, ponieważ przyglądam się rynkowi automatyki i bram w Białymstoku i zaimponowała mi Państwa renoma – 24 nienaganne oceny w firmie Bramil to dowód na najwyższą jakość montażu. Dzwonię tylko na minutę, by podzielić się wnioskiem biznesowym. Zaobserwowałem, że nie posiadają Państwo strony internetowej, co przy tak świetnych opiniach oddaje pole konkurencji. Przez to zamożni klienci szukający napędu Somfy czy bramy na komórce dzwonią do innych. Zaprojektowałem dla Pana darmowy prototyp prostej, zyskownej strony mobilnej z formularzem kalkulacji ceny bramy. Chciałem zapytać, czy mogę Panu go niezobowiązująco wysłać do oceny na maila lub SMS-em?"
    },
    proposal: {
      structure: ["Hero: Sprawdzona automatyka z obietnicą montażu w 7 dni", "Obszary działania (Napędy skrzydłowe, przesuwne, garażowe)", "Formularz wyceny - dobierz markę (FAAC, Somfy, Nice)", "Galeria montażowa z realizacji", "Dynamiczne opinie klientów z Map Google", "Częste pytania o gwarancję i serwis"],
      sections: ["Nasza oferta napędów do bram przesuwnych i garażowych", "Dlaczego profesjonalny montaż to podstawa?", "Jakie marki automatyki rekomendujemy?", "Formularz rezerwacji darmowej konsultacji na miejscu"],
      cta: ["Poproś o darmową wycenę automatyki", "Dobierz napęd do swojej bramy", "Zadzwoń po szybką pomoc ślusarską / serwis"],
      usp: ["24 rewelacyjne opinie klientów w Białymstoku", "Oficjalny certyfikat instalatora marek Somfy, FAAC i Nice", "Błyskawiczny montaż i pełna opieka serwisowa (pogwarancyjna)"],
      seo: ["napędy do bram Białystok", "automatyka bram przesuwnych podlaskie", "montaż napędów bramowych Białystok", "bramy garażowe Bramil"]
    }
  },
  {
    id: "baginski",
    name: "Bagiński - Prace Wykończeniowe i Glazura",
    rating: 5.0,
    reviewsCount: 61,
    street: "Upalna 32/2",
    city: "Białystok",
    website: "https://www.facebook.com/baginskipracewykonczeniowe",
    websiteType: "none_facebook",
    phone: "+48 519 739 050",
    categories: ["Usługi remontowo-budowlane", "Remonty", "Glazurnik"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bagiński%20prace%20wykończeniowe%20Białystok",
    websiteQualityScore: 15,
    businessPotentialScore: 94,
    salesOpportunityScore: 96,
    audit: {
      visualScore: 20,
      uxScore: 15,
      mobileScore: 30,
      seoScore: 10,
      croScore: 15,
      trustScore: 40,
      biggestProblems: [
        "Całkowite uzależnienie wizerunku od profilu na Facebooku - brak własnego niezależnego adresu w sieci.",
        "Rodzaj utraty potencjalnych klientów premium szukających 'glazurnik Białystok' bezpośrednio w wyszukiwarce Google.",
        "Wymóg logowania na Facebooku przez klientów, którzy chcą tylko przejrzeć estetyczne portfolio łazienek.",
        "Brak jakiejkolwiek struktury ofertowej - niesamowicie staranne wykończenia toną w chaotycznej tablicy FB bez wyszczególnionego cennika i gwarancji poufności."
      ],
      recommendations: [
        "Wdrożenie dedykowanego portfela realizacji (Clean House Gallery) pod własną wolnocłową domeną.",
        "Optymalizacja witryny pod pozycjonowanie na hasła 'wykończenia wnętrz Białystok premium'.",
        "Wdrożenie automatycznego asystenta rezerwacji terminów (Contact Funnel)."
      ],
      auditSummary: "Pan Bagiński to tytan lokalnego rynku wykończenia wnętrz i glazurnictwa (aż 61 opinii o nienagannej średniej 5.0). Klientela premium szukająca precyzyjnego wykonawcy łazienek oczekuje krystalicznej, markowej witryny prezentującej rzemiosło w ułożonej galerii - Facebook nie daje tej elegancji.",
      strongestArgument: "Inwestor, budując luksusowy dom w Białymstoku, poszukuje eksperta do glazury wielkoformatowej. Jeśli trafia tylko na link na Facebooku, wzbudza to obawę o brak formalnego portfolio i profesjonalnego cennika. Profesjonalna witryna ugruntuje reputację lidera premium."
    },
    pitches: {
      sms: "Dzień dobry! Gratuluję 61 opinii 5.0 o Bagiński Prace Wykończeniowe. Czy przy tak silnej marce nie rozważali Państwo stworzenia eleganckiego portfela www zamiast profilu na Facebooku? Chętnie zaprezentuję darmowy szkic.",
      messenger: "Dzień dobry, kłaniam się! Gratuluję fantastycznych sukcesów i nienagannych 61 rekomendacji od zadowolonych mieszkańców Białegostoku. Zauważyłem, że Państwa jedyną reprezentacją oferty w internecie jest profil Facebook. Wiele zamożnych osób poszukujących glazury wielkoformatowej nie korzysta z FB i szuka w Google. Zaprojektowałem ekskluzywny model strony-portfolio. Czy mogę podesłać?",
      emailSubject: "Prywatna strona-portfolio premium dla Bagiński Wykończenia Wnętrz - 61 opinii 5.0",
      emailBody: "Szanowni Państwo,\n\nZ prawdziwym uznaniem przyglądam się uznanej marce Bagiński - Prace Wykończeniowe. Wynik 61 perfekcyjnych opinii w Białymstoku dowodzi najwyższego standardu usług rzemieślniczych i glazurniczych.\n\nPrzeanalizowałem Państwa dostępność online i zauważyłem, że opierają się Państwo w 100% na profilu Facebook. Choć to świetne narzędzie społecznościowe, jako ekspert sprzedaży B2B widzę tu trzy bariery biznesowe:\n1. Ograniczenie do użytkowników Facebooka - wielu inwestorów premium nie ma konta na FB i szuka wyłącznie witryn www.\n2. Chaos w galerii - Państwa perfekcyjne łazienki i salony gubią się w strumieniu postów bez podziału na kategorie.\n3. Brak pozycjonowania SEO - nie istniejecie Państwo w wyszukiwarce Google na kluczowe frazy typu 'glazurnik Białystok'.\n\nStworzyłem wstępną, wysoce elegancką makietę portfolio internetowego dedykowaną dla Bagiński Wykończenia. Działa błyskawicznie na smartfonach i prezentuje prace w krystalicznej jakości.\n\nCzy moglibyśmy umówić się na krótką rozmowę w tym tygodniu?\n\nZ poważaniem,\n[Twoje Imię]\nWłaściciel Agencji Web Design\nTel: +48 500 XXX XXX",
      callScript: "Dzień dobry panie Bagiński? Nazywam się [Twoje Imię]. Dzwonię w nawiązaniu do Państwa wykończeń wnętrz w Białymstoku – gratuluję nienagannego wyniku aż 61 idealnych ocen w Google Maps, to absolutny lider! Dzwonię, bo zauważyłem, że całe swoje portfolio i ruch kierujecie tylko na profil na Facebooku. Przy tak dużej marce premium brak własnej, oficjalnej strony internetowej z podzieloną galerią elewacji i glazury sprawia, że klienci budujący luksusowe domy mogą nie traktować firmy z należytym prestiżem. Przygotowałem dla Państwa darmowy, bardzo czysty rysunek strony-portfolio na telefony. Czy mogę podesłać Panu link, żeby ocenił Pan różnicę w prezentacji prac?"
    },
    proposal: {
      structure: ["Hero: Wykończenia wnętrz o nienagannym standardzie (Full-Width)", "Katalog usług (Łazienki wielkoformatowe, Szpachlowanie, Suche zabudowy)", "Prestiżowa galeria portfolio z podziałem na realizacje", "Zintegrowany moduł 61 opinii Google", "Darmowy konfigurator zapytania o budżet inwestycji", "Formularz rezerwacji pomiaru technicznego"],
      sections: ["Precyzyjne układanie glazury i gresu wielkoformatowego", "Remonty domów pod klucz - standard deweloperski i premium", "Nasze materiały i standardy czystej pracy", "Formularz wstępnej kalkulacji kosztorysu wykończeń"],
      cta: ["Poproś o darmową wycenę wykończenia", "Zobacz pełną galerię naszych prac", "Zadzwoń po darmowy obmiar i wycenę"],
      usp: ["Najlepiej oceniana ekipa wykończeniowa w Białymstoku (61 opinii 5.0)", "Bezpyłowe szpachlowanie i precyzyjne cięcie gresu wodą", "Pełna odpowiedzialność ubezpieczeniowa oraz pisemna gwarancja na usługi"],
      seo: ["glazurnik Białystok", "wykończenia wnętrz Białystok", "układanie gresu wielkoformatowego podlaskie", "remonty łazienek Bagiński"]
    }
  },
  {
    id: "kwartet",
    name: "Hurtownia Budowlana Białystok - Kwartet",
    rating: 5.0,
    reviewsCount: 22,
    street: "Przędzalniana 29",
    city: "Białystok",
    website: "",
    websiteType: "none",
    phone: "+48 530 786 415",
    categories: ["Skład materiałów budowlanych", "Hurtownia budowlana"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hurtownia%20budowlana%20Białystok%20-%20Kwartet&query_place_id=ChIJmUDUn_b9H0cRX9lED-jld6o",
    websiteQualityScore: 10,
    businessPotentialScore: 90,
    salesOpportunityScore: 94,
    audit: {
      visualScore: 10,
      uxScore: 10,
      mobileScore: 10,
      seoScore: 10,
      croScore: 10,
      trustScore: 40,
      biggestProblems: [
        "Całkowity brak jakiejkolwiek witryny internetowej.",
        "Utrata kluczowego ruchu organicznego z Google od inwestorów i ekip budowlanych szukających 'hurtownia budowlana Białystok' lub 'skład śrubek Przędzalniana'.",
        "Brak jasnej ścieżki prezentacji asortymentu hurtowego, marek partnerskich oraz programów lojalnościowych dla instalatorów.",
        "Trudność z nawiązaniem szybkich zapytań ofertowych i wysłaniem projektów budowlanych do darmowego kosztorysu."
      ],
      recommendations: [
        "Wdrożenie portalu informacyjnego przedstawiającego marki partnerskie (Xella, Atlas, Knauf) oraz kategorie hurtowe.",
        "Uruchomienie modułu 'Wyślij projekt budowy do wyceny materiałów' (CRO).",
        "Pozycjonowanie SEO pod hasła 'tanie materiały budowlane Białystok wjazd'."
      ],
      auditSummary: "Hurtownia Kwartet to uznany skład z oceną 5.0 z 22 rekomendacji. Brak strony www blokuje nawiązanie stałych współprac z wykonawcami, deweloperami oraz inwestorami indywidualnymi, którzy szukają rzetelnego, lokalnego dystrybutora.",
      strongestArgument: "Inwestorzy chcą wyceniać kompletne zapotrzebowanie na stal czy bloczki w kilka chwil. Dodanie na nową stronę formularza wyceny projektu budowlanego odciąży telefon i automatycznie zakontraktuje kilkanaście dostaw miesięcznie więcej."
    },
    pitches: {
      sms: "Dzień dobry! Słyną Państwo z doskonałego asortymentu w hurtowni Kwartet (ocena 5.0!). Niestety, brak witryny internetowej oddaje pole innym składom w Google. Stworzyłem propozycję prostej i przejrzystej strony.",
      messenger: "Dzień dobry! Serdecznie gratuluję wspaniałej opinii i profesjonalizmu hurtowni Kwartet (22 opinii 5.0). Zauważyłem brak oficjalnej witryny internetowej. Wykonawcy i ekipy szukający składu budowlanego na smartfonie trafiają na inne hurtownie na Przędzalnianej. Opracowałem przyjazny dla wykonawców model strony z wyceną projektu. Czy mogę podesłać podgląd?",
      emailSubject: "Nowoczesny portal dla Hurtowni Kwartet Białystok - 22 perfekcyjne opinie",
      emailBody: "Szanowni Państwo,\n\nZ wielkim szacunkiem analizuję lokalną rzetelność i pozycję Hurtowni Kwartet. Średnia ocena 5.0 z 22 opinii to rzadki wskaźnik sprawności logistycznej i doskonałej obsługi na wymagającym rynku budowlanym.\n\nW celu optymalizacji działań handlowych, poddałem audytowi Państwa widoczność w wyszukiwaniach. Ze względu na brak strony internetowej, tracą Państwo kluczowy ruch:\n- Inwestorzy indywidualni budujący domy wolą słać zapytania o kosztorysy do składów mających formularze na stronach.\n- Ekipy budowlane nie znają Państwa dynamicznego katalogu i marek partnerskich.\n\nZaprojektowałem prosty, merytoryczny portal dla Hurtowni Kwartet zawierający moduł 'Prześlij projekt do wyceny' oraz przejrzysty podział asortymentu. Chętnie udostępnię gotowy, wolny od opłat podgląd wizualny.\n\nCzy moglibyśmy porozmawiać o tym telefonicznie?\n\nZ poważaniem,\n[Twoje Imię]\nWłaściciel Agencji Interaktywnej\nTel: +48 500 XXX XXX",
      callScript: "Dzień dobry! Nazywam się [Twoje Imię]. Dzwonię w sprawie hurtowni budowlanej Kwartet z Przędzalnianej. Chciałem pogratulować świetnej renomy – 22 rekomendacje o nienagannej średniej 5.0 w branży handlu budowlanego to wielki atut zaufania. Dzwonię do Państwa, bo zauważyłem, że nie posiadają Państwo własnej strony www. Inwestorzy prywatni i młode ekipy budowlane szukają składu i rabatów głównie w Google, a brak witryny sprawia, że trafiają do konkurencji. Przygotowałem dla Państwa prosty, bardzo przejrzysty projekt strony budowlanej, gdzie klient może szybko wysłać zapytanie o cennik lub załączyć plik z projektem domu do wyceny stali i pustaków. Czy mogę wysłać ten darmowy, wykonany przeze mnie podgląd do Państwa oceny?"
    },
    proposal: {
      structure: ["Hero: Najlepiej oceniany skład budowlany na Przędzalnianej", "Podział asortymentu (Materiały ścienne, izolacje, narzędzia, łączniki)", "Darmowa wycena kosztorysu budowy w 24h (formularz uploadu pliku)", "Referencje i portfolio zadowolonych ekip budowlanych", "Warunki transportu i rozładunku HDS z mapą stref", "Godziny otwarcia i kontakt biura handlowego"],
      sections: ["Kompletne materiały od fundamentu aż po dach", "Program lojalnościowy i rabatowy dla stałych wykonawców", "Nasze marki certyfikowane (Atlas, Solbet, Ursa)", "Wgraj rzut domu i oszczędź do 15% na materiale"],
      cta: ["Prześlij projekt budowlany do wyceny", "Skontaktuj się z biurem handlowym", "Dowiedz się więcej o rabatach dla wykonawców"],
      usp: ["100% zadowolonych opinii i sprawdzona dostępność od ręki", "Własna flota transportowa z rozładunkiem dźwigiem HDS", "Rzetelne doradztwo materiałowe poparte latami doświadczeń"],
      seo: ["hurtownia budowlana Białystok", "skład materiałów budowlanych podlaskie", "tania stal i cement Białystok Przędzalniana", "hurt_materiały_Kwartet Białystok"]
    }
  },
  {
    id: "abc-elewacje",
    name: "ABC Elewacje S.C. - Docieplenia i Fasad",
    rating: 4.8,
    reviewsCount: 58,
    street: "Polowa 2/14",
    city: "Białystok",
    website: "http://abcelewacje.com.pl/",
    websiteType: "http_insecure",
    phone: "+48 85 662 66 62",
    categories: ["Firma budowlana", "Docieplenia elewacji", "Materiały budowlane"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=ABC%20ELEWACJE%20S.C.%20Białystok",
    websiteQualityScore: 28,
    businessPotentialScore: 96,
    salesOpportunityScore: 95,
    audit: {
      visualScore: 30,
      uxScore: 25,
      mobileScore: 20,
      seoScore: 40,
      croScore: 20,
      trustScore: 45,
      biggestProblems: [
        "Strona ładuje się bez protokołu HTTPS (brak kłódki SSL). Safari i Chrome ostrzegają o braku bezpieczeństwa.",
        "Kompletny brak dopasowania do smartfonów. Witryna została zaprojektowana w 2008 roku i wymaga ręcznego powiększania tekstu.",
        "Fatalna prezentacja realizacji. Zdjęcia elewacji są miniaturowe, ciemne i nie ukazują detalicznej jakości tynków.",
        "Brak jasnych CTA na bezpośrednie dzwonienie i zamówienie darmowych pomiarów elewacji kamerą termowizyjną."
      ],
      recommendations: [
        "Wdrożenie darmowego Let's Encrypt SSL HTTPS.",
        "Przebudowa na responsywny, szerokoekranowy layout oparty na React.",
        "Zintegrowanie kalkulatora zwrotu z ocieplenia (energooszczędność) oraz darmowego badania szczelności."
      ],
      auditSummary: "ABC Elewacje to czołowy gracz dociepleń w Białymstoku (58 opinii, 4.8). Ich portal to jednak technologiczny relikt przeszłości, który drastycznie odpycha nowoczesnych klientów z budżetem oraz deweloperów.",
      strongestArgument: "Inwestor wydający na ocieplenie domu 40-70 tysięcy złotych szuka wiarygodnego partnera. Czerwony komunikat 'Strona niebezpieczna' i brak mobilnego portfolio budzą lęk o profesjonalizm całej ekipy."
    },
    pitches: {
      sms: "Dzień dobry! Gratulujemy 58 świetnych opinii w ABC Elewacje. Państwa witryna abcelewacje.com.pl działa bez SSL (błąd HTTPS) i nie działa na komórkach. Przygotowałem nowoczesny model strony.",
      messenger: "Dzień dobry! Z wielkim szacunkiem przyglądam się Państwa spektakularnej renomie (58 opinii, średnia 4.8). Państwa strona internetowa niestety jest przestarzała, brak jej certyfikatu SSL i nie działa na smartfonach. Przygotowałem darmowy model nowoczesnej witryny z potężną galerią elewacji dla ABC Elewacje. Mogę podesłać do krytycznego weryfikowania?",
      emailSubject: "Bezpieczna, nowoczesna strona deklasująca konkurencję na rynku elewacyjnym w Białymstoku",
      emailBody: "Szanowni Państwo,\n\nGratuluję świetnych wyników i rzetelności – 58 opinii w branży elewacji to dowód zaufania wielu inwestorów.\n\nPrzeanalizowałem techniczną sprawność Państwa witryny abcelewacje.com.pl. Strona nie reprezentuje profesjonalizmu, jaki okazują Państwo na żywo:\n1. Brak SSL (niebezpieczne połączenie HTTP) – budzi uzasadniony niepokój.\n2. Brak Mobile-Friendliness – utrudnia przeglądanie oferty na smartfonach (konieczność zoomowania).\n3. Archarchaiczny design – maleńkie zdjęcia i surowe tabele.\n\nCo przygotowałem?\nOpracowałem dla Państwa darmowy prototyp portalu z galerią elewacji premium w formacie WebP i asystentem kalkulacji termomodernizacji (programy Czyste Powietrze).\n\nCzy moglibyśmy o tym porozmawiać przez telefon przez 5 minut w tym tygodniu?\n\nZ powagą,\n[Twoje Imię]\nWłaściciel Agencji Marketingowej\nTel: +48 500 XXX XXX",
      callScript: "Dzień dobry! Kontaktuję się z firmą ABC Elewacje. Nazywam się [Twoje Imię]. Dzwonię, ponieważ analizowałem rynek dociepleń w regionie i zaimponowało mi Państwa 58 fantastycznych opinii w Google. Dzwonię tylko z jedną uwagą techniczną. Państwa strona abcelewacje.com.pl działa na starych serwerach bez SSL, przez co wyświetla ostrzeżenie o kradzieży danych, a na smartfonach nie dopasowuje się do ekranu. Dziś inwestor szuka elewacji na telefonie i taki alarm na wstępie go odstrasza. Zaprojektowałem dla Państwa nowoczesną makietę strony z piękną, mobilną galerią elewacji i kalkulatorem dotacji. Chciałbym bezpłatnie wysłać link do weryfikacji. Na jaki e-mail mogę go nadać?"
    },
    proposal: {
      structure: ["Hero: Ciepłe elewacje na lata ze sprawną gwarancją", "Nasza oferta (Docieplenia styropianem/wełną, tynki dekoracyjne, klinkier)", "Formularz wyceny elewacji za m²", "Przewodnik po dotacjach rządowych (program 'Czyste Powietrze')", "Szybka i przejrzysta galeria ukończonych domów", "Dynamiczne opinie i formularz bezpłatnego badania kamerą termowizyjną"],
      sections: ["Docieplenia domów jednorodzinnych i wielorodzinnych", "Nasze materiały Premium (Caparol, Ceresit, Kabe)", "Jak działamy? Od darmowego pomiaru do sprzątania placu budowy", "Skontaktuj się z kierownikiem robót elewacyjnych"],
      cta: ["Poproś o darmową termowizję i wycenę elewacji", "Przelicz oszczędności na dociepleniu", "Zarezerwuj termin realizacji prac"],
      usp: ["Wybitny lider dociepleń w regionie (58 zadowolonych opinii)", "Darmowe badanie termowizyjne budynku przed i po wykonaniu izolacji", "Wieloletnia certyfikacja wykonawcza kluczowych producentów chemii budowlanej"],
      seo: ["docieplenia budynków Białystok", "elewacje domów jednorodzinnych podlaskie", "tynk silikonowy i ocieplenia Białystok Polowa", "ABC elewacje docieplenia"]
    }
  },
  {
    id: "puroof",
    name: "Puroof - Ocieplanie Pianą PUR Patryk Małach",
    rating: 5.0,
    reviewsCount: 25,
    street: "Porzeczkowa",
    city: "Białystok",
    website: "https://piana-puroof.pl/",
    websiteType: "custom",
    phone: "+48 505 146 835",
    categories: ["Firma budowlana", "Wykonawca izolacji"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Puroof%20Patryk%20Małach%20Białystok",
    websiteQualityScore: 60,
    businessPotentialScore: 93,
    salesOpportunityScore: 85,
    audit: {
      visualScore: 65,
      uxScore: 55,
      mobileScore: 45,
      seoScore: 60,
      croScore: 40,
      trustScore: 70,
      biggestProblems: [
        "Słaby współczynnik konwersji (brak wyraźnego CTA 'Darmowy pomiar i badanie wilgotności więźby' na banerze głównym).",
        "Wolne ładowanie na urządzeniach mobilnych z powodu nadmiaru ciężkich skryptów śledzących.",
        "Brak dedykowanych podstron geolokalizacyjnych SEO dla mniejszych miast satelitarnych (Sokółka, Hajnówka, Zambrów), co blokuje bezpłatny ruch z tamtych rynków.",
        "Mało czytelna prezentacja fizjologicznych zalet piany PUR nad wełną mineralną pod kątem gryzoni i niepalności."
      ],
      recommendations: [
        "Wdrożenie dedykowanych landing pages pod lokalne rynki województwa podlaskiego.",
        "Uruchomienie błyskawicznego formularza wyceny poddasza na podstawie grubości izolacji i m².",
        "Przyspieszenie działania serwisu mobilnego do PageSpeed powyżej 85/100."
      ],
      auditSummary: "Firma Puroof cieszy się nienaganną sławą (25 opinii 5.0). Posiada profesjonalną witrynę, ale brakuje na niej ostrych bodźców CRO oraz rozbudowanej, regionalnej sieci podstron SEO mającej sprowadzać ruch z okolic Białegostoku.",
      strongestArgument: "Większość osób ocieplających poddasza szuka wykonawcy w swojej okolicy. Budując podstrony dla Sokółki czy Bielska, zdominują Państwo lokalne wyniki wyszukiwania przed konkurencją ze standardowym WordPressem."
    },
    pitches: {
      sms: "Dzień dobry panie Patryku! Świetna ocena Puroof w sieci (ocena 5.0). Strona wygląda nieźle, ale brakuje podstron na mniejsze rynki podlaskie (brak SEO na Łomżę, Bielsk). Chętnie pokażę darmowy plan rozbudowy i CRO.",
      messenger: "Dzień dobry! Gratuluję perfekcyjnych 25 rekomendacji dla Puroof. Izolacje natryskowe pianą to świetny rynek. Zauważyłem, że Państwa strona piana-puroof.pl nie jest optymalnie zoptymalizowana pod pozycjonowanie w miastach satelitarnych wokół Białegostoku, a strona na pierwszym ekranie gubi punkty konwersji (słabe CTA). Opracowałem bezpłatną, zoptymalizowaną strategię rozbudowy oraz model strony. Podesłać?",
      emailSubject: "Darmowa strategia SEO i optymalizacja konwersji dla Puroof - ocieplanie pianą",
      emailBody: "Szanowny Panie Patryku,\n\nGratuluję wybitnej średniej ocen 5.0 z 25 unikalnych referencji klientów – to pokazuje bezkompromisowe realizowanie robót ociepleniowych pianą PUR.\n\nAnalizowałem Państwa oficjalny portal piana-puroof.pl. Wizerunek jest profesjonalny, lecz z punktu widzenia pozycjonowania i optymalizacji konwersji (CRO) tracą Państwo spory odsetek zapytań o darmową wizję:\n1. Brak geolokalizacji SEO - brak dedykowanych podstron na takie rynki jak Zambrów, Hajnówka, czy Augustów, gdzie mieszkańcy pilnie poszukują ociepleń natryskowych.\n2. Rozmyte CTA na pierwszym ekranie - brak zachęty do natychmiastowego bezpłatnego zbadania wilgotności więźby przed natryskiem.\n\nZaprojektowałem dla Puroof darmowy układ (bento-template) nowego, zoptymalizowanego modułu konwersji i strukturę podstron regionalnych.\n\nCzy moglibyśmy umówić się na 5-minutową rozmowę podglądową?\n\nZ powagą,\n[Twoje Imię]\nSpecjalista SEO & CRO\nTel: +48 500 XXX XXX",
      callScript: "Dzień dobry Panie Patryku? Nazywam się [Twoje Imię]. Dzwonię, ponieważ przyglądam się wykonawcom izolacji natryskowych w województwie podlaskim i jestem pełen uznania dla nienagannej opinii 5.0 w Puroof ocieplanie pianą. Państwa strona działa prawidłowo, dzwonię do Pana, gdyż przygotowałem profesjonalny, bezpłatny plan ulepszenia jej konwersji. Zauważyłem, że pozycjonują się Państwo głównie na Białystok, kompletnie pomijając rynki poboczne typu Bielsk Podlaski, Sokółka czy Grajewo, z których spływa do dekarzy najpotężniejszy strumień zleceń o najwyższej marży. Co więcej, na stronie głównej brak jest agresywnego przycisku darmowego sprawdzenia szczelności więźby kamerą, co gubi nawet do 30% potencjalnych leadów. Stworzyłem prototyp rozbudowy i optymalizacji Państwa witryny. Czy mogę go Panu podesłać do niezobowiązującej oceny?"
    },
    proposal: {
      structure: ["Hero: Ciepłe poddasze bez mostków termicznych. Bezpłatna wycena.", "Sprawdź korzyści: Piana PUR vs Wełna mineralna (Bento grid)", "Konfigurator grubości i kalkulator powierzchni", "Karuzela unikalnych opinii Puroof", "Obszar działania (Interaktywna mapa podlaskich powiatów)", "Pisemna gwarancja na stabilność ocieplenia (30 lat) i zapytanie"],
      sections: ["Ocieplanie podaszy pianą otwartokomórkową", "Izolacje fundamentów i dachów płaskich pianą zamkniętokomórkową", "Badanie szczelności poddasza przed izolacją", "Zostaw numer - nasz inżynier oddzwoni w 15 minut"],
      cta: ["Zarezerwuj darmowy pomiar i badanie wilgotności", "Przelicz grubość ocieplenia", "Zadzwoń do Patryka Małacha - Puroof"],
      usp: ["25 idealnych opinii od prawdziwych właścicieli domów w regionie", "Praca na certyfikowanych komponentach europejskich", "Pisana gwarancja braku opadania izolacji przez ćwierć wieku"],
      seo: ["ocieplanie pianą Białystok", "izolacje natryskowe podlaskie", "ocieplenie poddasza pianką Puroof", "piana PUR Sokółka / Bielsk Podlaski"]
    }
  },
  {
    id: "progress",
    name: "Progress - Stolarka Budowlana, Okna i Bramy",
    rating: 4.8,
    reviewsCount: 43,
    street: "Pogodna 16B",
    city: "Białystok",
    website: "",
    websiteType: "none",
    phone: "+48 603 905 334",
    categories: ["Sklep z oknami plastikowymi", "Dostawca okien PCV"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Progress%20Stolarka%20Budowlana%20Białystok",
    websiteQualityScore: 10,
    businessPotentialScore: 91,
    salesOpportunityScore: 93,
    audit: {
      visualScore: 10,
      uxScore: 10,
      mobileScore: 10,
      seoScore: 10,
      croScore: 10,
      trustScore: 40,
      biggestProblems: [
        "Całkowity brak jakiejkolwiek witryny internetowej dla uznanego i dużego salonu okiennego.",
        "Utrata cennych zapytań o stolarkę stolarską do nowo budowanych domów, na hasło 'okna plastikowe Białystok' i 'bramy garażowe'.",
        "Brak prezentacji unikalnego ciepłego montażu warstwowego (Soudal Window System itp.) i profili wirtualnego salonu.",
        "Brak możliwości wgrania rzutu parteru przez klientów w celu otrzymania specyfikacji technicznej."
      ],
      recommendations: [
        "Zbudowanie eleganckiego serwisu - wirtualnego salonu stolarki okiennej Progress.",
        "Zaimplementowanie formularza wyceny rzutu budowlanego w systemie drag-and-drop.",
        "Lokalna optymalizacja SEO pod hasła stolarki premium i energooszczędnej."
      ],
      auditSummary: "Progress to ceniony dystrybutor ociepleń, okien i bram z oceną 4.8 na bazie 43 opinii. Brak oficjalnego adresu www w erze, w której budujący dom szukają stolarki głównie w sieci, to drastyczne ograniczanie potencjału wielkotysięcznych kontraktów deweloperskich i prywatnych.",
      strongestArgument: "Inwestor zamawiający zestaw okien do pasywnego domu przeznacza na to od 30 do 80 tysięcy złotych. Oczekuje witryny potwierdzającej autorytet ciepłego montażu, parametry izolacji i prestiż marki Progress."
    },
    pitches: {
      sms: "Dzień dobry! Gratuluję 43 rekomendacji w salonie Progress. Brak własnej witryny internetowej to strata setek zapytań o stolarkę okienną i bramy w Google. Przygotowałem dla Państwa darmowy prototyp portalu okiennego.",
      messenger: "Dzień dobry! Z wielkim uznaniem obserwuję Państwa profesjonalne podejście i świetne recenzje (43 opinie). Zauważyłem, że salon Progress nie posiada własnej strony www, przez co inwestorzy zamawiający stolarkę na smartfonie wybierają konkurencję. Zaprojektowałem dla Państwa bezpłatny prototyp wirtualnego salonu okien z formularzem rzutów. Mogę podesłać do rzucenia okiem?",
      emailSubject: "Innowacyjny Wirtualny Salon i automatyczna wycena stolarki dla Progress Białystok",
      emailBody: "Szanowni Państwo,\n\nZ dużą uwagą badam pozycję dystrybutorów stolarki budowlanej w województwie podlaskim. Państwa salon Progress ma wybitne uznanie – 43 opinie udowadniają, że są Państwo zaufanymi fachowcami.\n\nZwrócił moją uwagę brak strony internetowej pod marką Progress. Przy tak kosztownych kontraktach jak pasywne zestawy okien, brak witryny odcina Państwa od najbardziej zyskownych zapytań:\n- Nowi inwestorzy szukają profili Premium (Veka, Rehau, Salamander) bezpośrednio w Google.\n- Klienci poszukują instrukcji 'ciepłego montażu warstwowego', na który kładą nacisk przy zwrotach z dotacji.\n\nStworzyłem dla Progress profesjonalny, lekki model strony z asystentem przesyłania rzutów architektonicznych do natychmiastowej wyceny. Chętnie udostępnię ten darmowy, nowy projekt wizualny.\n\nCzy moglibyśmy umówić się na krótkie spotkanie online lub telefon?\n\nZ powagą,\n[Twoje Imię]\nWłaściciel Agencji Interaktywnej\nTel: +48 500 XXX XXX",
      callScript: "Dzień dobry! Kontaktuję się z kierownictwem salonu stolarki Progress na Pogodnej. Nazywam się [Twoje Imię]. Dzwonię, ponieważ badałem firmy budowlane i rzetelnych instalatorów okien w Białymstoku. Gratuluję świetniej renomy – 43 opinie z oceną 4.8 to kapitalny atut. Dzwonię krótko z punktem handlowym. Zauważyłem, że nie mają Państwo strony www, co przy sprzedaży okien pasywnych i bram garażowych za dziesiątki tysięcy złotych stawia Państwa w cieniu konkurencji, która reklamuje się w Google. Zaprojektowałem dla Państwa darmowy prototyp wirtualnego salonu stolarki okiennej Progress, z systemem, gdzie klient budujący dom pod Białymstokiem może wrzucić plik PDF ze swoim projektem budowlanym do natychmiastowej wyceny stolarki. Chciałbym przesłać ten wolny od opłat podgląd na sprawdzenie. Czy mogę liczyć na krótki e-mail?"
    },
    proposal: {
      structure: ["Hero: Okna pasywne i energooszczędny montaż w jednym miejscu", "Nasze rozwiązania (Okna PCV, Aluminiowe, Bramy, Drzwi drzwiowe)", "Kalkulator korzyści - wyślij rzut budowy do bezpłatnej wyceny", "Obszerna galeria uwiarygadniająca standard ciepłego montażu", "Wycenione pakiety stolarki (Kwalifikacja do domu pasywnego)", "Kontakt z salonem na Pogodnej i opinie z Google Maps"],
      sections: ["Profile okienne najwyższej klasy termicznej (Sygnowane Rehau/Aluplast)", "Ciepły montaż trójwarstwowy (Szczelność i brak wilgoci)", "Bramy garażowe z automatyką w pakiecie oszczędnościowym", "Formularz wyceny rzutu pasywnego domu"],
      cta: ["Wyślij rzut parteru do bezpłatnej wyceny okien", "Zobacz galerię naszych ciepłych montaży", "Umów doradcę na pomiary na budowie"],
      usp: ["43 idealne opinie od inwestorów indywidualnych w Białymstoku", "Ponad 15 lat certyfikowanego montażu stolarki energooszczędnej", "Ekskluzywna gwarancja szczelności i brak mostków termicznych potwierdzona próbą ciśnieniową"],
      seo: ["okna plastikowe Białystok", "drzwi i bramy garażowe podlaskie", "stolarka budowlana Progress Pogodna", "ciepły montaż okien Białystok"]
    }
  },
  {
    id: "szeliga",
    name: "Przedsiębiorstwo Budowlane PB Szeliga Sp. z o.o.",
    rating: 4.7,
    reviewsCount: 34,
    street: "Transportowa 3/lok 63",
    city: "Białystok",
    website: "http://www.pbszeliga.pl/",
    websiteType: "http_insecure",
    phone: "+48 85 741 22 91",
    categories: ["Deweloper", "Budowa domów", "Budownictwo mieszkalne"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Przedsiębiorstwo%20Budowlane%20Szeliga%20Białystok",
    websiteQualityScore: 30,
    businessPotentialScore: 97,
    salesOpportunityScore: 94,
    audit: {
      visualScore: 30,
      uxScore: 25,
      mobileScore: 20,
      seoScore: 40,
      croScore: 25,
      trustScore: 45,
      biggestProblems: [
        "Strona dewelopera działa na niezabezpieczonym protokole HTTP - brak SSL budzi lęk o bezpieczeństwo rezerwacji mieszkań.",
        "Kompletny brak dostosowania do urządzeń mobilnych (Mobile UX rzetelnie leży, rzuty lokali są nieczytelne).",
        "Przestarzałe, wąskie tabele do wyszukiwania wolnych szeregówek i mieszkań, rzuty mieszkań w plikach o niskiej jakości.",
        "Słaba optymalizacja konwersji (brak interaktywnego umawiania spotkań i formularza rezerwacji online)."
      ],
      recommendations: [
        "Wdrożenie połączenia szyfrowanego HTTPS SSL.",
        "Kompletny frontendowy redesign i wdrożenie responsywnego, szerokoekranowego interfejsu z wyszukiwarką 3D mieszkań.",
        "Wdrożenie dedykowanych stron docelowych dla bieżących inwestycji deweloperskich."
      ],
      auditSummary: "Przedsiębiorstwo PB Szeliga to szanowany deweloper wielorodzinny i budowniczy szeregówek (34 opinie, 4.7). Sprzedają lokale mieszkalne o wartości setek tysięcy złotych, posiłkując się witryną z początku lat 2000., co drastycznie obniża prestiż marki.",
      strongestArgument: "Współczesny kupujący mieszkanie to osoba młoda, która selekcjonuje oferty na komórce. Brak sprawnej wyszukiwarki lokali i ostrzeżenia o niebezpieczeństwie na stronie dewelopera Szeliga skłaniają do zakupu u konkurencji dbającej o każdy detal wizerunku."
    },
    pitches: {
      sms: "Dzień dobry! PB Szeliga to wieloletnia marka deweloperska. Strona na Transportowej nie ma SSL (HTTP) i nie działa na komórkach, co utrudnia rezerwację inwestycji. Przygotowałem nowoczesny model portalu deweloperskiego.",
      messenger: "Dzień dobry! Gratuluję udanych realizacji mieszkaniowych w Białymstoku i 34 opinii. Zauważyłem, że strona pbszeliga.pl nie posiada kłódki bezpieczeństwa SSL i nie jest czytelna na smartfonach, co utrudnia osobom szukającym nowego lokalu podgląd rzutów mieszkań. Opracowałem nowoczesny, responsywny szkic wyszukiwarki inwestycji. Mogę go przesłać?",
      emailSubject: "Nowoczesny, bezpieczny portal deweloperski i interaktywne rzuty mieszkań dla PB Szeliga",
      emailBody: "Szanowni Państwo,\n\nZ wielkim uznaniem śledzę Państwa inwestycje mieszkaniowe i szeregówki na podlaskim rynku deweloperskim. Wynik 34 opinii o średniej 4.7 potwierdza najwyższy poziom zaufania i standardów budowlanych.\n\nPrzeanalizowałem sprawność techniczną Państwa oficjalnej witryny pbszeliga.pl. Przy inwestycjach deweloperskich wartych miliony, stara strona internetowa bez HTTPS budzi spory niepokój:\n1. Brak protokołu SSL – przeglądarki wykazują błąd poufności przy próbach kontaktu.\n2. Brak responsywności – rzuty mieszkań i cenniki wymagają scrollowania i zoomu na telefonach mobilnych.\n3. Przestarzały system rezerwacji.\n\nOpracowałem dla PB Szeliga darmowy projekt nowoczesnego, responsywnego portalu deweloperskiego, z płynną wyszukiwarką lokali oraz czytelnym bento-interfejsem rzutów pięter w formatach HD.\n\nCzy moglibyśmy umówić się na krótką rozmowę podglądową?\n\nZ poważaniem,\n[Twoje Imię]\nWspółwłaściciel Agencji Brand-Design\nTel: +48 500 XXX XXX",
      callScript: "Dzień dobry Państwu! Dzwonię do Przedsiębiorstwa Budowlanego Szeliga na Transportowej, nazywam się [Twoje Imię]. Dzwonię, bo analizowałem lokalny rynek mieszkaniowy i deweloperski pod kątem wizerunku. Gratuluję świetnej pozycji i aż 34 świetnych rekomendacji w Google Maps. Dzwonię tylko z palącą kwestią technologiczną. Państwa witryna pbszeliga.pl niestety nie jest dostosowana do telefonów, rzuty mieszkań są słabo czytelne na smartfonach, a co najistotniejsze – brakuje na niej certyfikatu SSL, więc Chrome zgłasza błąd bezpieczeństwa. Inwestorzy prywatni kupujący u Państwa mieszkania za kilkaset tysięcy to osoby młode i mobilne, które dbają o prestiż technologiczny. Przygotowałem dla dewelopera bezpłatny, piękny i responsywny projekt strony z inteligentną wyszukiwarką lokali. Chciałbym bez problemu wysłać link do Państwa decyzji. Do kogo z zarządu lub działu marketingu i sprzedaży mogę pilotować e-mail?"
    },
    proposal: {
      structure: ["Hero: Twoje nowoczesne mieszkanie w Białymstoku. Zarezerwuj w 3 krokach.", "Nasze inwestycje aktywne (Wyszukiwarka mieszkań 3D)", "Rzuty PDF i specyfikacja techniczna standardu deweloperskiego", "O deweloperze: tradycja i bezkompromisowe bezpieczeństwo od lat", "Sprawdzone opinie mieszkańców i kontakt", "Formularz rezerwacji wizyty na placu budowy / u doradcy"],
      sections: ["Nasze bieżące inwestycje mieszkaniowe i szeregowe w Białymstoku", "Technologie i energooszczędność budynków PB Szeliga", "Jak sfinansować dom? Dedykowany broker kredytowy", "Zapytaj o wolny lokal w 15 sekund - wbudowany asystent CRM"],
      cta: ["Znajdź wolne mieszkanie i sprawdź cenę", "Ściągnij kompletny prospekt inwestycji", "Umów się na bezpłatną wizytę na budowie"],
      usp: ["Wieloletnie doświadczenie i ugruntowana pozycja na podlaskim rynku deweloperskim", "Współpraca z wiodącymi architektami i rzetelny nadzór wykonawczy", "Najwyższa ochrona wpłaconych środków (bezpieczny rachunek powierniczy z SSL HTTPS)"],
      seo: ["nowe mieszkania Białystok", "deweloper Szeliga Białystok Transportowa", "szeregówki na sprzedaż podlaskie", "inwestycjePB_Szeliga deweloperskie"]
    }
  },
  {
    id: "kresso",
    name: "Z Drewna Maciej Kresso - Tarasy i Altany",
    rating: 5.0,
    reviewsCount: 2,
    street: "Białystok",
    city: "Białystok",
    website: "",
    websiteType: "none",
    phone: "+48 533 336 622",
    categories: ["Budowa pomostów i tarasów", "Budowa wiat i pergol", "Budowa altan ogrodowych"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Z%20Drewna%20Maciej%20Kresso&query_place_id=ChIJC1fsiKqpL48ROXCZr8HwIuo",
    websiteQualityScore: 10,
    businessPotentialScore: 80,
    salesOpportunityScore: 91,
    audit: {
      visualScore: 10,
      uxScore: 10,
      mobileScore: 10,
      seoScore: 10,
      croScore: 10,
      trustScore: 40,
      biggestProblems: [
        "Całkowity brak jakiejkolwiek witryny internetowej.",
        "Utrata klientów premium szukających 'budowa tarasu drewnianego Białystok' i 'pergole na wymiar podlaskie'.",
        "Brak jakiejkolwiek ustrukturyzowanej bazy zdjęć i galerii z unikalnych, luksusowych konstrukcji z drewna.",
        "Brak opisu wykorzystywanych twardych, trwałych gatunków drewna i bezpłatnego kalkulatora wyceny pergoli."
      ],
      recommendations: [
        "Zbudowanie eleganckiej strony 'Z Drewna' o unikalnym, minimalistycznym rzemieślniczym wyrazie.",
        "Stworzenie estetycznego, wielkoobrazkowego portfolio tarasów, altan, wiat i pergoli.",
        "Uruchomienie lokalnego marketingu SEO pod hasłami budowy wykończeń ogrodowych premium."
      ],
      auditSummary: "Maciej Kresso realizuje piękne, wysoko marżowe pomosty, tarasy i pergole z drewna egzotycznego. Całkowity brak własnej strony www ogranicza prezentację tych luksusowych wyrobów. Klienci chcą podziwiać takie rzemiosło w profesjonalnie ułożonej galerii realizacyjnej w wysokiej ostrości.",
      strongestArgument: "Drewno premium i luksusowa stolarka ogrodowa to produkt wybitnie wizualny. Inwestor z luksusowego domu pod Białymstokiem potrzebuje strony z galerią zdjęć w wysokiej ostrości, by upewnić się, że zamawia u mistrza rzemiosła."
    },
    pitches: {
      sms: "Dzień dobry! Państwa konstrukcje z drewna w Białymstoku są niesamowitej urody. Szkoda, że nie posiadają Państwo strony internetowej, by pokazać światu tarasy i pergole. Przygotowałem darmowy model galerii internetowej.",
      messenger: "Dzień dobry! Podziwiam Państwa rzemieślnicze konstrukcje altan i tarasów 'Z Drewna'. Projektujecie Państwo zjawiskowe wiaty i pomosty. Zauważyłem brak strony www, co chowa te wyroby w cieniu rywali. Opracowałem minimalistyczny model strony-portfolio premium z myślą o marce Kresso. Czy mogę przesłać podgląd?",
      emailSubject: "Prywatna strona-galeria rzemiosła 'Z Drewna' Maciej Kresso - tarasy i pergole premium",
      emailBody: "Szanowny Panie Macieju,\n\nPiszę do Pana, ponieważ z zapartym tchem przeglądam zakres Państwa usług stolarskich. Budowa pomostów, tarasów, nowoczesnych pergoli oraz altan w Białymstoku to trudny, ale niezwykle dochodowy rynek, zwłaszcza gdy tworzy się produkty o tak wybornym charakterze.\n\nPrzeprowadziłem weryfikację Państwa marki w sieci i zauważyłem krytyczną lukę – nie posiadają Państwo strony www. Dlaczego to blokuje rozwój firmy?\n1. Klienci szukający altany luksusowej szukają w Google 'pergole na zamówienie Białystok' i kupują wzrokiem, wertując estetyczne galerie.\n2. Brak strony chowa przed inwestorami opisy wysokogatunkowego drewna (modrzew syberyjski, drewno egzotyczne), co zmusza do rywalizacji ceną o taniego klienta.\n\nSkomponowałem dla Pana darmowy prototyp minimalistycznej galerii stolarskiej 'Z Drewna' o nowoczesnym wyrazie, idealnej do szybkiego przeglądania na telefonach mobilnych.\n\nCzy moglibyśmy o tym krótko porozmawiać telefonicznie?\n\nZ powagą,\n[Twoje Imię]\nWytwórca Projektów Web Premium\nTel: +48 500 XXX XXX",
      callScript: "Dzień dobry Panie Macieju? Nazywam się [Twoje Imię]. Dzwonię krótko w sprawie Państwa rzemiosła stolarskiego 'Z Drewna'. Trafiłem na Państwa usługi i muszę złożyć wyrazy szacunku – Państwa tarasy drewniane, pergole i altany ogrodowe wyglądają niesamowicie profesjonalnie. Dzwonię tylko z perspektywą biznesową. Zauważyłem, że nie posiadają Państwo własnej strony www. W dzisiejszych czasach zamożni klienci, którzy budują piękne domy i zamawiają drogie pergole ze świerku skandynawskiego, szukają rzemieślników głównie w Google i chcą podziwiać galerię zdjęć w najwyższej jakości. Brak witryny chowa Pana pasję przed ludźmi z budżetem. Zaprojektowałem dla Pana darmowy, bardzo czysty szablon mobilnego portfolio, które idealnie prezentuje drewno na telefonach komórkowych. Chciałem zapytać, czy mogę przesłać ten gotowy podgląd mailowo lub SMS-em do zbadania?"
    },
    proposal: {
      structure: ["Hero: Unikalne konstrukcje z drewna na wymiar podlaskie", "Siatka usług (Tarasy drewniane, pergole ogrodowe, pomosty, altany)", "Prestiżowa galeria premium w formacie WebP", "Przewodnik po gatunkach drewna (Świerk, modrzew syberyjski, egzotyki)", "Formularz darmowej wyceny i konsultacji technicznej w 24 godziny", "Dane kontaktowe i godziny przyjęć"],
      sections: ["Tarasy z drewna naturalnego i kompozytu na wymiar", "Automatyczne pergole i wiaty garażowe chroniące samochód", "Trwałość na lata - sprawdzona impregnacja drewna i zabezpieczenia", "Prześlij wymiary i uzyskaj natychmiastowy szkic projektu"],
      cta: ["Poproś o szybką wycenę pergoli / tarasu", "Przejrzyj nasze najlepsze rzemieślnicze realizacje", "Zadzwoń do stolarza Macieja Kresso"],
      usp: ["Absolutna precyzja stolarska i wyłącznie certyfikowane drewno skandynawskie", "Unikalne projekty altan i pergoli wpisane w architekturę ogrodu", "Pełna obróbka i bezpłatne cięcie techniczne z impregnacją na miejscu"],
      seo: ["budowa tarasów drewnianych Białystok", "pergole i altany na wymiar podlaskie", "pomosty i tarasy drewniane Maciej Kresso", "stolarka ogrodowa Białystok drewno"]
    }
  },
  
  // Remaining 20 Leads to fulfill the B2B top 30 requirements as requested by the user
  {
    id: "danwood",
    name: "Danwood S.A. - Domy Modułowe",
    rating: 4.7,
    reviewsCount: 82,
    street: "Ciołkowskiego 2/2a",
    city: "Białystok",
    website: "http://www.danwood.pl/",
    websiteType: "custom",
    phone: "+48 85 877 31 63",
    categories: ["Uznany dystrybutor", "Budowa domów", "Domy energooszczędne"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Danwood%20S.A%20Białystok",
    websiteQualityScore: 80,
    businessPotentialScore: 99,
    salesOpportunityScore: 45
  },
  {
    id: "horizon-geodezja",
    name: "Horizon Geodezja Sp. z o.o.",
    rating: 5.0,
    reviewsCount: 216,
    street: "Żurawia 71",
    city: "Białystok",
    website: "https://horizongeodezja.pl/",
    websiteType: "custom",
    phone: "+48 605 638 881",
    categories: ["Geodeta", "Pomiary geodezyjne", "Budowa domów"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Horizon%20Geodezja%20Białystok",
    websiteQualityScore: 85,
    businessPotentialScore: 98,
    salesOpportunityScore: 40
  },
  {
    id: "multi-construction",
    name: "Multi-Construction Plus Sp. z o.o.",
    rating: 4.6,
    reviewsCount: 18,
    street: "Leśna 1A/14",
    city: "Ignatki-Osiedle",
    website: "https://mcbudownictwo.pl/",
    websiteType: "http_insecure",
    phone: "+48 692 359 985",
    categories: ["Firma budowlana", "Budownictwo rolnicze", "Konstrukcje przemysłowe"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Multi-Construction%20Białystok",
    websiteQualityScore: 35,
    businessPotentialScore: 88,
    salesOpportunityScore: 83
  },
  {
    id: "sekwoja-development",
    name: "Sekwoja Development",
    rating: 5.0,
    reviewsCount: 31,
    street: "Gen. Gustawa Orlicz-Dreszera 6",
    city: "Białystok",
    website: "http://www.sekwojadevelopment.pl/",
    websiteType: "http_insecure",
    phone: "+48 537 503 403",
    categories: ["Deweloper", "Szeregówki", "Budownictwo"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sekwoja%20Development%20Białystok",
    websiteQualityScore: 40,
    businessPotentialScore: 92,
    salesOpportunityScore: 87
  },
  {
    id: "tambur",
    name: "Tambur Usługi Remontowo-Budowlane",
    rating: 4.7,
    reviewsCount: 51,
    street: "Ogrodniczki 2/9",
    city: "Białystok",
    website: "http://www.tambur.pl/",
    websiteType: "http_insecure",
    phone: "+48 505 934 074",
    categories: ["Remonty", "Firma budowlana", "Prace wykończeniowe"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tambur%20Usługi%20Remontowo-Budowlane%20Białystok",
    websiteQualityScore: 30,
    businessPotentialScore: 85,
    salesOpportunityScore: 89
  },
  {
    id: "berda",
    name: "BerdA Budownictwo",
    rating: 4.8,
    reviewsCount: 16,
    street: "Serwisowa 8",
    city: "Białystok",
    website: "http://berda-budownictwo.pl/",
    websiteType: "http_insecure",
    phone: "+48 885 161 617",
    categories: ["Firma budowlana", "Generalne wykonawstwo"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=BerdA%20Białystok",
    websiteQualityScore: 32,
    businessPotentialScore: 80,
    salesOpportunityScore: 82
  },
  {
    id: "kamir-phu",
    name: "KAMIR PHU Sp. z.o.o. Hurtownia",
    rating: 4.3,
    reviewsCount: 106,
    street: "Elewatorska 13",
    city: "Białystok",
    website: "http://www.kamir.pl/",
    websiteType: "http_insecure",
    phone: "+48 85 662 61 52",
    categories: ["Skład materiałów budowlanych", "Dystrybucja"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=KAMIR%20PHU%20Białystok",
    websiteQualityScore: 35,
    businessPotentialScore: 94,
    salesOpportunityScore: 78
  },
  {
    id: "hydroflex",
    name: "Hydroflex - Hydroizolacje i Chemia",
    rating: 5.0,
    reviewsCount: 27,
    street: "Zwycięstwa 18",
    city: "Białystok",
    website: "http://www.hydroflex24.pl/",
    websiteType: "http_insecure",
    phone: "+48 694 541 616",
    categories: ["Dostawca materiałów budowlanych", "Hydroizolacja", "Skład budowlany"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hydroflex%20Białystok",
    websiteQualityScore: 30,
    businessPotentialScore: 86,
    salesOpportunityScore: 88
  },
  {
    id: "projekt-dom-deweloper",
    name: "PROJEKT DOM DEWELOPER Sp. z o. o.",
    rating: 4.6,
    reviewsCount: 40,
    street: "Elewatorska 11/1/lok.14",
    city: "Białystok",
    website: "http://projektdomdeweloper.pl/",
    websiteType: "http_insecure",
    phone: "+48 606 442 444",
    categories: ["Deweloper", "Inwestycje mieszkaniowe"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=PROJEKT%20DOM%20DEWELOPER%20Białystok",
    websiteQualityScore: 35,
    businessPotentialScore: 92,
    salesOpportunityScore: 86
  },
  {
    id: "m-solid-term",
    name: "M Solid Term - Elewacje, Tynki",
    rating: 5.0,
    reviewsCount: 9,
    street: "Gruntowa",
    city: "Białystok",
    website: "",
    websiteType: "none",
    phone: "+48 511 539 450",
    categories: ["Firma budowlana", "Elewacje", "Ocieplenia"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=M%20Solid%20Term%20Białystok",
    websiteQualityScore: 10,
    businessPotentialScore: 75,
    salesOpportunityScore: 84
  },
  {
    id: "bestherm",
    name: "Studio Budowlane BESTherm",
    rating: 4.6,
    reviewsCount: 18,
    street: "Hetmańska 38",
    city: "Białystok",
    website: "",
    websiteType: "none",
    phone: "+48 505 037 495",
    categories: ["Dostawca materiałów budowlanych", "Termoizolacja"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Studio%20Budowlane%20BESTherm%20Białystok",
    websiteQualityScore: 10,
    businessPotentialScore: 78,
    salesOpportunityScore: 83
  },
  {
    id: "remontdom",
    name: "Remontdom s.c. Żukowski Grynczel",
    rating: 4.8,
    reviewsCount: 20,
    street: "Władysława Reymonta 1A",
    city: "Białystok",
    website: "http://www.remontdom.pl/",
    websiteType: "http_insecure",
    phone: "+48 512 341 288",
    categories: ["Firma budowlana", "Remonty", "Budowa deweloperska"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Remontdom%20Białystok",
    websiteQualityScore: 30,
    businessPotentialScore: 82,
    salesOpportunityScore: 85
  },
  {
    id: "brico-express",
    name: "Brico Express Sp. z.o.o. Skład",
    rating: 4.8,
    reviewsCount: 174,
    street: "Zabłudowska 71",
    city: "Białystok",
    website: "http://bricoexpress.com.pl/",
    websiteType: "http_insecure",
    phone: "+48 505 160 793",
    categories: ["Skład materiałów budowlanych", "Sklep narzędziowy", "Artykuły metalowe"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Brico%20Express%20Białystok",
    websiteQualityScore: 38,
    businessPotentialScore: 97,
    salesOpportunityScore: 75
  },
  {
    id: "3w-hurtownia",
    name: "3W Hurtownia Budowlana",
    rating: 4.5,
    reviewsCount: 44,
    street: "Elewatorska 7",
    city: "Białystok",
    website: "http://www.3wdb.pl/gdzie-kupic",
    websiteType: "http_insecure",
    phone: "+48 726 281 111",
    categories: ["Dostawca materiałów budowlanych", "Hurtownia", "Materiały izolacyjne"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=3W%20Hurtownia%20Białystok",
    websiteQualityScore: 40,
    businessPotentialScore: 90,
    salesOpportunityScore: 72
  },
  {
    id: "lewandowski-budownictwo",
    name: "Lewandowski Budownictwo Piotr",
    rating: 4.7,
    reviewsCount: 28,
    street: "Przędzalniana 60",
    city: "Białystok",
    website: "http://www.lewandowski-budownictwo.pl/",
    websiteType: "http_insecure",
    phone: "+48 506 813 500",
    categories: ["Budownictwo mieszkalne", "Budowa domów", "Wielofunkcyjne"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lewandowski%20Budownictwo%20Piotr%20Białystok",
    websiteQualityScore: 28,
    businessPotentialScore: 84,
    salesOpportunityScore: 86
  },
  {
    id: "choruzy-syn",
    name: "Choruży i Syn - Usługi Koparką",
    rating: 4.5,
    reviewsCount: 10,
    street: "Kleeberga 8",
    city: "Białystok",
    website: "http://choruzyisyn.pl/",
    websiteType: "http_insecure",
    phone: "+48 602 608 066",
    categories: ["Wykonawca robót ziemnych", "Wykopy", "Transport"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Choruży%20i%20Syn%20Białystok",
    websiteQualityScore: 30,
    businessPotentialScore: 70,
    salesOpportunityScore: 74
  },
  {
    id: "atis-dom",
    name: "Atis Dom - Usługi Budowlane",
    rating: 4.7,
    reviewsCount: 16,
    street: "Składowa 11/lok. 28",
    city: "Białystok",
    website: "http://www.atisdom.pl/",
    websiteType: "http_insecure",
    phone: "+48 724 700 704",
    categories: ["Budowa domów", "Architekt", "Prace budowlane"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Atis%20Dom%20Białystok",
    websiteQualityScore: 28,
    businessPotentialScore: 78,
    salesOpportunityScore: 81
  },
  {
    id: "rukowski-brukarz",
    name: "Brukarz Białystok - Karol Rukowski",
    rating: 3.0,
    reviewsCount: 21,
    street: "Saturna 67",
    city: "Białystok",
    website: "http://www.zrb.bialystok.pl/",
    websiteType: "http_insecure",
    phone: "+48 667 782 634",
    categories: ["Brukarstwo", "Budowa dróg", "Kostka Brukowa"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=ZRB%20Karol%20Rukowski%20Białystok",
    websiteQualityScore: 22,
    businessPotentialScore: 72,
    salesOpportunityScore: 88
  },
  {
    id: "budowa-na-plus",
    name: "Budowa na Plus - Jednorodzinne",
    rating: 4.6,
    reviewsCount: 23,
    street: "Antoniukowska 62",
    city: "Białystok",
    website: "https://budowanaplus.pl/?utm_source=wizyto&utm_content=glowna",
    websiteType: "custom",
    phone: "+48 660 458 484",
    categories: ["Budowa domów", "Stany surowe", "Domy parterowe"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Budowa%20na%20plus%20Białystok",
    websiteQualityScore: 58,
    businessPotentialScore: 88,
    salesOpportunityScore: 70
  },
  {
    id: "ksm-budownictwo",
    name: "KSM Budownictwo s.c. Deweloper",
    rating: 5.0,
    reviewsCount: 3,
    street: "Harcerska 4C",
    city: "Białystok",
    website: "http://ksmbudownictwo.pl/",
    websiteType: "http_insecure",
    phone: "+48 503 593 544",
    categories: ["Deweloper", "Firma budowlana", "Inwestycje szeregowe"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=KSM%20Budownictwo%20Białystok",
    websiteQualityScore: 30,
    businessPotentialScore: 76,
    salesOpportunityScore: 82
  },
  {
    id: "andala",
    name: "Andala Firma Budowlana. Paliwoda",
    rating: 5.0,
    reviewsCount: 10,
    street: "Kazimierza Pułaskiego 115",
    city: "Białystok",
    website: "",
    websiteType: "none",
    phone: "+48 85 745 23 32",
    categories: ["Murarz", "Firma budowlana", "Prace wykonawcze"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Andala%20Paliwoda%20Białystok",
    websiteQualityScore: 10,
    businessPotentialScore: 70,
    salesOpportunityScore: 80
  }
];
