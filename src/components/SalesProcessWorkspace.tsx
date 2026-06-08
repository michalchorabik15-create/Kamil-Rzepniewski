import React, { useState } from "react";
import { 
  Phone, HelpCircle, Shield, Award, Sparkles, MessageSquare, 
  Mail, ClipboardList, CheckCircle, Copy, AlertCircle, ChevronRight, 
  Flame, User, RefreshCw, Send, Check, ChevronDown, BookOpen, Star, Globe
} from "lucide-react";
import { leadsData, Lead } from "../data/leads";

interface SalesProcessWorkspaceProps {
  onSelectLeadFromGuide?: (lead: Lead) => void;
}

export default function SalesProcessWorkspace({ onSelectLeadFromGuide }: SalesProcessWorkspaceProps) {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedObjection, setSelectedObjection] = useState<string>("mamy_juz_strone");
  const [selectedClosingStyle, setSelectedClosingStyle] = useState<string>("spotkanie");
  const [selectedFollowUp, setSelectedFollowUp] = useState<string>("post_call");
  const [selectedLeadId, setSelectedLeadId] = useState<string>("swiat-zywic");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Filter out the TOP 10 leads manually based on our new leads list
  const topTenLeads = leadsData.filter(lead => 
    ["swiat-zywic", "presto-house", "bramil", "baginski", "kwartet", 
     "abc-elewacje", "puroof", "progress", "szeliga", "kresso"].includes(lead.id)
  );

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const stepsList = [
    { num: 1, title: "1. Kontakt Telefon", icon: Phone },
    { num: 2, title: "2. Analiza Potrzeb", icon: ClipboardList },
    { num: 3, title: "3. Prezentacja Wartości", icon: Award },
    { num: 4, title: "4. Obsługa Obiekcji", icon: Shield },
    { num: 5, title: "5. Zamknięcie", icon: Flame },
    { num: 6, title: "6. Sekwencja Follow-up", icon: Mail },
    { num: 7, title: "7. TOP 10 Personalizacja", icon: Sparkles },
  ];

  // Wants List (15 diagnostic questions for construction & finishing field)
  const needsQuestions = [
    {
      category: "A. Źródła i pochodzenie klientów",
      questions: [
        {
          q: "1. Skąd obecnie pozyskują Państwo najbardziej zyskowne zlecenia budowlane – z poleceń znajomych, z Map Google, czy z portali ogłoszeniowych typu Oferteo/OLX?",
          purpose: "Pozwala zbadać rentowność kanałów i wykazuje wysoki koszt prowizji płaconych pośrednikom.",
          tip: "Jeśli klient opiera się tylko na poleceniach, powiedz mu, że nowoczesna strona www uwiarygadnia polecenie u inwestorów z budżetem, którzy przed podpisaniem umowy za 50k i tak sprawdzą go w Google."
        },
        {
          q: "2. Jaki procent klientów dzwoni do Państwa bezpośrednio z wyszukiwarki Google na hasła niszowe i wysokomarżowe (np. mikrocement Białystok, montaż tarasów egzotycznych)?" ,
          purpose: "Uświadamia klientowi, jak dużą część zyskownych zapytań lokalnych z wyszukiwarki oddaje konkurentom.",
          tip: "Wykonawcy często realizują tanie, proste zlecenia z ogólnopolskich portali, pomijając fakt, że lokalne wyszukiwania w Google przynoszą klientów premium bez prowizji."
        },
        {
          q: "3. Czy mierzą Państwo statystyki swojej wizytówki w Mapach Google – ile osób miesięcznie klika trasę dojazdu lub przycisk telefonu?" ,
          purpose: "Sprawdza poziom analityki i wykazuje potencjał konwersji.",
          tip: "Większość ekip budowlanych nie wie o tych liczbach, a to doskonały punkt wyjścia do zaoferowania audytu i integracji SEO."
        }
      ]
    },
    {
      category: "B. Konwersja i efektywność obecnej obecności online",
      questions: [
        {
          q: "4. Czy Państwa obecny profil społecznościowy na Facebooku lub stara witryna generują regularne zapytania o wolne terminy i kompletną wycenę rzutu domu?",
          purpose: "Sprawdzenie, czy obecne kanały pełnią rolę żywej machiny sprzedażowej, czy są tylko 'martwym szyldem'.",
          tip: "Inwestorzy rzadko piszą o dużych projektach wykończeniowych na Facebooku; brak bezpiecznego, przejrzystego formularza na stronie hamuje zlecenia."
        },
        {
          q: "5. Ile zapytań o kosztorysy i rzuty budowlane otrzymują Państwo średnio w tygodniu ze swojej obecnej ścieżki cyfrowej?",
          purpose: "Określenie punktu wyjścia (lead flow) w celu wyliczenia stopy zwrotu z inwestycji (ROI).",
          tip: "Porównaj koszt nowej, zoptymalizowanej strony z marżą z pojedynczego zlecenia na taras czy ocieplenie. Strona zwraca się po 1 zleceniu!"
        },
        {
          q: "6. Czy nowi inwestorzy narzekali kiedykolwiek na utrudniony dostęp do zdjęć realizacji lub cennika na telefonach komórkowych?",
          purpose: "Identyfikuje błędy mobilnego UX i potęguje potrzebę natychmiastowych zmian.",
          tip: "Stare strony budowlane posiadają portfolio w ociężałych, spowalniających skryptach, które nie ładują się na smartfonach na placu budowy."
        }
      ]
    },
    {
      category: "C. Cele biznesowe i finansowe",
      questions: [
        {
          q: "7. Jaki jest Państwa optymalny cel na ten sezon – czy chcą Państwo pozyskać więcej zleceń, by zapełnić kalendarz nowej ekipy, czy dążą do podniesienia cen za m² i pracy dla klientów premium?" ,
          purpose: "Dostosowanie oferty pod realny cel biznesowy klienta.",
          tip: "Dla zapełnienia kalendarza proponujemy lokalne SEO i kampanie; dla wzrostu cen i marki premium – ekskluzywny, unikalny redesign strony."
        },
        {
          q: "8. Czy planują Państwo rozbudowę firmy o kolejne brygady wykonawcze, rozszerzenie parku maszynowego lub handlowego w najbliższych miesiącach?",
          purpose: "Badanie ambicji i zapotrzebowania na stałą, wydajną machinę generowania zapytań B2B.",
          tip: "Utrzymanie stałych ekip roboczych przy braku ciągłości zleceń to największa zmora finansowa przedsiębiorców budowlanych."
        },
        {
          q: "9. Ile wolnych tygodni w sezonie bez zakontraktowanego zlecenia uważa Pan/Pani za krytyczny spadek rentowności i stratę gotówki, której musimy uniknąć?",
          purpose: "Uświadamia realną stratę finansową (przestoje ekip) i pozycjonuje koszt strony jako ubezpieczenie od braku pracy.",
          tip: "Tydzień przestoju 4-osobowej ekipy wykończeniowej to około 7,000 - 10,000 zł straconego zysku. Nowoczesna strona zapobiega przestojom."
        }
      ]
    },
    {
      category: "D. Problemy marketingowe i reputacja",
      questions: [
        {
          q: "10. Jak dbają Państwo o poufność i profesjonalizm zgłoszeń – czy nie obawiają się Państwo, że brak kłódki bezpieczeństwa SSL (ostrzeżenie Chrome) zniechęca deweloperów lub zamożnych inwestorów?",
          purpose: "Pokazanie barier psychologicznych i braku certyfikacji.",
          tip: "Firmy deweloperskie i zamożni partnerzy zwracają uwagę na bezpieczeństwo i cyfrowy autorytet podmiotu przed podjęciem negocjacji."
        },
        {
          q: "11. Jak radzą sobie Państwo w sytuacjach, gdy konkurencja podbiera Państwa potencjalnych klientów tańszą, lecz gorszą jakościowo ofertą i jak pokazują Państwo techniczną przewagę online?",
          purpose: "Ustalenie potrzeby budowy silnej tożsamości USP, która uniemożliwia walkę wyłącznie niską ceną.",
          tip: "Zamiast konkurować stawką za m², nowa strona www uczy inwestora, dlaczego profesjonalny montaż warstwowy czy certyfikowany tynk są droższe."
        },
        {
          q: "12. Czy posiadają Państwo system zbierania i prezentowania autentycznego dowodu społecznego (rekomendacji, zdjęć przed/po), czy ten potencjał marnuje się w Mapach Google?",
          purpose: "Identyfikuje brak spójności wizerunkowej i potrzebę integracji opinii.",
          tip: "Proponujemy dynamiczne zasysanie 5-gwiazdkowych opinii z Google wprost na stronę główną, co natychmiast kładzie na łopatki konkurencję."
        }
      ]
    },
    {
      category: "E. Plany długofalowego rozwoju",
      questions: [
        {
          q: "13. Gdzie widzą Państwo swój biznes w perspektywie kolejnych 3-5 lat – jako zaufanego systemowego lidera budowlanego w Białymstoku, czy wolą Państwo pozostać przy mniejszej skali?",
          purpose: "Pozwala dopasować technologię (skalowalna struktura React pod pozycjonowanie w całym województwie).",
          tip: "Firmy z wizją lidera potrzebują elastycznego kodu i solidnego regionalnego SEO, aby systematycznie przejmować rynki okolicznych miast."
        },
        {
          q: "14. Czy rozważają Państwo zautomatyzowanie procesu wycen (np. interaktywny formularz zbierający metraż, rzuty i oczekiwany standard), aby zaoszczędzić czas spędzony na telefonie?",
          purpose: "Korzyść oszczędności czasu i eliminacji niekwalifikowanych, tanich leadów.",
          tip: "Kalkulator budżetowy na stronie przefiltruje klientów 'szukających najtaniej' i dostarczy gotowe, wartościowe zapytania."
        },
        {
          q: "15. Czy chcą Państwo uniezależnić się od rosnących stawek prowizyjnych lub podwyżek cen na portalach pośredniczących i zbudować bezpłatny dopływ zleceń z wyszukiwarki?",
          purpose: "Ostateczny argument finansowy na rzecz trwałego, własnego pozycjonowania (Local SEO).",
          tip: "Posiadanie własnej, pozycjonowanej witryny to budowa trwałego aktywa firmy, które nie generuje kosztów za kliknięcie i zabezpiecza zlecenia."
        }
      ]
    }
  ];

  // Obiecje (Objections deck for construction & renovation domain)
  const objectionsData: Record<string, { label: string; resp: string; probe: string; follow: string }> = {
    mamy_juz_strone: {
      label: "Mamy już stronę internetową",
      resp: "Doskonale to rozumiem i cieszę się, że dbają Państwo o obecność w sieci – to już stawia Państwa przed częścią branży. Moim celem nie jest jednak nakłanianie Państwa do bezcelowej zmiany, ale wskazanie technicznych błędów, które obecnie mogą blokować napływ najbardziej opłacalnych zleceń. Przeprowadzona przeze mnie analiza wykazuje, że Państwa witryna ładuje się na telefonach bardzo wolno (ponad 6 sekund) ze względu na nieskompresowane zdjęcia z budowy, a przy próbie wejścia Google wyświetla groźny komunikat o braku certyfikatu bezpieczeństwa SSL. Dziś ponad 85% inwestorów szuka wykonawcy na telefonie i taki błąd od razu kieruje ich do konkurencji.",
      probe: "Jak oceniają Państwo liczbę zapytań o luksusowe realizacje napływających bezpośrednio z obecnej strony – czy daje ona Państwu tyle wysokomarżowych prac, ile by chcieli, czy jest traktowana tylko jako rzadko odwiedzany adres?",
      follow: "Zamiast drogiej rewolucji, proponuję czyszczenie błędów mobilnych oraz wdrożenie ultralekkiego, nowoczesnego portfolio. Sprawi to, że strona zacznie aktywnie zarabiać i ułatwi inwestorom podsyłanie rzutów domów do wyceny. Przygotowałem już bezpłatny podgląd takiego projektu, który chętnie udostępnię."
    },
    nie_potrzebujemy_strony: {
      label: "Nie potrzebujemy strony internetowej",
      resp: "Rozumiem Państwa punkt widzenia – w budownictwie rzetelna praca i polecenia 'z ust do ust' to absolutny fundament. Warto jednak spojrzeć na stronę www pod innym kątem: dzisiaj nie służy ona tylko do szukania losowych zleceń, ale przede wszystkim do uwiarygodnienia polecenia. Inwestor, który wydaje na taras, elewację czy wykończenie domu kilkadziesiąt tysięcy złotych, po otrzymaniu polecenia i tak wpisuje Państwa nazwę w Google. Jeśli widzi brak strony, brak profesjonalnie ułożonego portfolio lub przestarzałą grafikę, w jego umyśle pojawia się obawa o profesjonalizm wykonawcy i ucieka do konkurenta, który uwiarygodnił się estetyczną witryną.",
      probe: "Czy zdarzyło się Państwu kiedyś, że potencjalny klient premium po rozmowie telefonicznej przestał się odzywać tylko dlatego, że nie mógł w prosty sposób zweryfikować Państwa wcześniejszych prac w uporządkowanej galerii?",
      follow: "Proponuję stworzenie minimalistycznego, wybitnie rzemieślniczego portfolio 'Z Drewna' lub 'Prace Premium'. Bez zbędnego lania wody – wyłącznie ostre zdjęcia realizacji przed/po, certyfikaty, zintegrowane opinie z Google Maps i szybkie połączenie telefoniczne jednym kliknięciem."
    },
    nie_mamy_budzetu: {
      label: "Nie mamy budżetu",
      resp: "W pełni rozumiem – przy rosnących kosztach materiałów i paliw każdy wydatek musi być dokładnie przemyślany i generować zysk. Dlatego proponuję spojrzeć na nową stronę nie jak na koszt reklamowy, lecz jak na narzędzie, które natychmiast zapobiega przestojom brygad. Wystarczy, że nowa strona i lepsze pozycjonowanie przyniosą zaledwie jedno średnie zlecenie na ocieplenie, wykończenie czy montaż ogrodzenia w skali roku, a inwestycja zwraca się trzykrotnie z samej marży handlowej.",
      probe: "Gdybyśmy wspólnie wdrożyli projekt, który eliminuje puste tygodnie w sezonie i automatycznie ściąga zlecenia o wyższej marży bez Państwa wysiłku, jaki budżet uważałby Pan za opłacalny jako inwestycję?",
      follow: "Możemy rozbić cały proces na bezpieczne etapy lub uzgodnić dogodne rozliczenie abonamentowe bądź ratalne. Na start wdrożymy kluczowy, szybki Landing Page z darmowym certyfikatem bezpieczeństwa, który natychmiast zacznie ułatwiać zbieranie zapytań."
    },
    klienci_z_polecenia: {
      label: "Mamy zlecenia wyłącznie z polecenia",
      resp: "Serdeczne gratulacje – to najlepszy dowód na to, że świadczą Państwo usługi budowlane na najwyższym poziomie rzemiosła. Polecenia to fundament stabilności. Współczesny inwestor zachowuje się jednak zupełnie inaczej niż jeszcze kilka lat temu. Gdy słyszy rekomendację, od razu szuka Państwa na swoim smartfonie, by zobaczyć skalę i estetykę wykonanych prac, sprawdzić z jakich surowców korzystacie lub ułatwić sobie dojazd do składu. Brak oficjalnego adresu sprawia, że polecenie wizerunkowo traci na sile, a zamożny klient może po cichu wybrać kogoś innego.",
      probe: "Czy nie uważają Państwo, że warto ułatwić swoim dotychczasowym klientom polecanie Waszej firmy poprzez dostarczenie im estetycznej, szybkiej wizytówki internetowej, którą mogą w kilka sekund wysłać znajomemu na WhatsAppie?",
      follow: "Zaproponuję wykonanie niezwykle czystej strony mobilnej, zorientowanej wyłącznie na budowanie zachwytu i autorytetu. Zawiera ona dynamiczną sekcję opinii z Google, dużą mobilną galerię przed/po i bezpośredni przycisk dzwonienia, idealny pod kciuk na telefonie."
    },
    musze_sie_zastanowic: {
      label: "Muszę się zastanowić",
      resp: "Całkowicie naturalne – decyzja o zmianie wizerunku firmy i wdrożeniu nowej machiny leadowej wymaga namysłu i wyboru zaufanego partnera IT. Chcę się tylko upewnić, czy posiadają Państwo komplet faktów technicznych. Każdy tydzień działania na ociężałej stronie bez SSL i bez pozycjonowania mobilnego oznacza, że wartościowe zapytania od budujących domy uciekają prosto na konta konkurencji reklamującej się w Google.",
      probe: "Nad którym elementem mojej propozycji chciałby się Pan zastanowić najgłębiej – nad budżetem wdrożenia, zakresem technologicznym, czy może czasem wykonania przed szczytem sezonu?",
      follow: "Aby uprościć ten proces, prześlę Panu spersonalizowany, w pełni działający prototyp nowej witryny na naszym serwerze testowym. Może go Pan bez pośpiechu kliknąć na swoim telefonie, zobaczyć jak ekspresowo ładują się obrazy i samodzielnie podjąć decyzję."
    },
    prosze_wyslac_oferte: {
      label: "Proszę wysłać ofertę na e-mail",
      resp: "Z przyjemnością przygotuję i wyślę spersonalizowane podsumowanie z pełnym zakresem cenowym. Jednak moje doświadczenie w branży budowlanej uczy, że bezduszna oferta pdf rzadko oddaje realną wartość funkcjonalną. Wolę najpierw w 2 minuty wykazać, jak konkretnie nowa strona wyeliminuje problemy ze zbieraniem rzutów do wyceny.",
      probe: "Czy możemy umówić się na dosłownie 5 minut rozmowy telefonicznej lub wideo w czwartek, podczas której wyświetlę na ekranie darmowy projekt strony głównej przygotowany dla Państwa firmy i od razu dopasuję idealną ofertę?",
      follow: "Wysyłam na Państwa maila krótki raport z audytu technicznego (3 największe problemy obecnego serwisu) wraz z linkiem do prototypu. Po przejrzeniu zatelefonuję za dwa dni, by krótko i merytorycznie usłyszeć Państwa zdanie."
    },
    nie_mam_teraz_czasu: {
      label: "Nie mam teraz czasu",
      resp: "Całkowicie to rozumiem – na budowie, przy obmiarach i nadzorze ekip czas ucieka w mgnieniu oka, a nadmiar pracy to codzienność profesjonalnego wykonawcy. Bardzo to szanuję i obiecuję nie marnować ani sekundy Pana dnia na nudne zebrania. Nasza agencja świadczy usługi w formule 'bezobsługowej' dla wykonawcy: to my przejmujemy 100% spraw technicznych, piszemy teksty na bazie opinii, optymalizujemy zdjęcia inwestycji i wdrażamy bezpieczny SSL.",
      probe: "W jaki dzień i o której godzinie miałby Pan dosłownie 5 minut na spokojną rozmowę telefoniczną w aucie – czy w środę na koniec dnia, czy w piątek rano przed wejściem ekipy na budowę?",
      follow: "Zapisuję termin w swoim kalendarzu CRM i wyślę krótkie przypomnienie SMS-em. W międzyczasie prześlę do przejrzenia 1-minutowe wideo z prezentacją gotowego projektu, które może Pan wygodnie odtworzyć na smartfonie podczas przerwy na kawę."
    },
    konkurencja_tez_ma_slaba_strone: {
      label: "Konkurencja też ma słabą stronę",
      resp: "To trafna uwaga – lokalny rynek budowlany i wykończeniowy w Białymstoku wciąż mocno drzemie technologicznie. Wiele ekip ma stare strony lub opiera się wyłącznie na przypadkowych postach na Facebooku. Proszę jednak spojrzeć na to nie jako na powód do bezczynności, ale jak na gigantyczną przewagę rynkową! Gdy konkurenci zaniedbują wizerunek, wdrożenie przez Państwa krystalicznej, bezpiecznej i nowoczesnej witryny z pozycjonowaniem sprawia, że natychmiast dominujecie wizerunkowo i stajecie się marką numer jeden w regionie.",
      probe: "Czy woli Pan pozostać w szarym środku podlaskiej stawki wykonawców, czy wykorzystać słabość techniczną konkurencji i zająć pozycję bezdyskusyjnego lidera w Google?",
      follow: "Pokażę Panu, jak w 30 dni od wdrożenia lokalnego SEO na frazy premium prześcigniemy konkurencję w wynikach wyszukiwania, przekierowując najbardziej luksusowe zlecenia od inwestorów bezpośrednio na Państwa telefon."
    }
  };

  // Closing Styles
  const closingStyles: Record<string, { title: string; desc: string; template: string }> = {
    spotkanie: {
      title: "1. Umówienie krótkiej prezentacji wideo (Live Demo)",
      desc: "Zaproponowanie bezstresowego, 10-minutowego spotkania online w celu wyświetlenia zrobionego specjalnie prototypu na ekranie.",
      template: "Panie Macieju/Kamilu, rozumiem, że czas na budowie jest bezcenny i nie chcę Panu zawracać głowy pisaniem maili. Przygotowałem już kompletny, działający podgląd nowej strony dla Państwa firmy. Najwygodniej będzie, jeśli wspólnie rzucimy na niego okiem podczas krótkiej, 10-minutowej prezentacji na ekranie komputera lub telefonu w środę lub czwartek. Kliknie Pan formularz kalkulatora wyceny i sam zdecyduje, czy idziemy w tym kierunku. Kiedy pasuje Panu bardziej – środa o 16:00, czy może czwartek o 9:00 rano przed obmiarami?"
    },
    wyslanie_audytu: {
      title: "2. Wysłanie autorskiego audytu techniczno-marketingowego",
      desc: "Zajawienie krytycznych wad i zabezpieczenie zgody na dostarczenie profesjonalnego raportu SEO bezpośrednio na e-mail.",
      template: "Panie Kamilu, na podstawie mojego audytu technicznego opracowałem szczegółowy, 3-stronicowy raport użyteczności i błędów mobilnych dla Państwa profilu bramil.pl. Wynika z niego wprost, dlaczego przy tak genialnej opinii tracą Państwo część zleceń z telefonów. Chcę przekazać ten audyt całkowicie bezpłatnie, by mógł Pan sam przekazać go swoim serwisantom lub ocenić osobiście. Potrzebuję tylko potwierdzić, czy bramilbramy@outlook.com to najlepszy e-mail, bym mógł go nadać w ciągu godziny i zatelefonować jutro po krótkie wnioski?"
    },
    wyslanie_makiety: {
      title: "3. Udostępnienie interaktywnej makiety nowej witryny",
      desc: "Wywołanie zachwytu poprzez pokazanie gotowego prototypu z logo klienta, jego własnymi zdjęciami budów i komentarzami.",
      template: "Panie Patryku, z racji tego, że firma Puroof cieszy się perfekcyjną renomą i ma 25 idealnych opinii, zaangażowałem naszych projektantów i przygotowaliśmy spersonalizowaną, testową makietę nowej strony WWW na superszybkim silniku React. Skopiowaliśmy Państwa obecne zdjęcia, wdrożyliśmy krystaliczny SSL i przyspieszyliśmy ładowanie obrazów do miliona. Wyślę Panu unikalny podgląd SMS-em lub mailem – może go Pan otworzyć na telefonie i osobiście ocenić, jak luksusowo to wygląda. Dokąd skierować ten bezpieczny link podglądowy?"
    },
    prezentacja_oferty: {
      title: "4. Szybka, elastyczna prezentacja oferty finansowej (ROI)",
      desc: "Przejście bezpośrednio do konkretnej propozycji handlowej wykazując zwrot z inwestycji po pozyskaniu 1-2 prac.",
      template: "Szanowni Państwo, wiemy dokładnie, jakie kroki podjąć, by zabezpieczyć Państwa wizerunek i zagwarantować stały napływ leadów z całego województwa podlaskiego. Dla tak zaufanej marki budowlanej proponujemy nasz pakiet Lead Machine w jednorazowej cenie inwestycji. Biorąc pod uwagę puste tygodnie w sezonie i marżę z jednego standardowego zlecenia, ta witryna spłaci się w 100% już przy pierwszej wykonanej elewacji lub tarasie. Czy możemy dopełnić formalności w tym tygodniu, by uruchomić pozycjonowany portal przed przyszłym miesiącem?"
    },
    kolejny_kontakt: {
      title: "5. Zabezpieczenie precyzyjnego terminu kolejnego kontaktu",
      desc: "Zapisanie precyzyjnej daty i godziny ponownej rozmowy (Follow-up Call) bez pozostawiania tematu w zawieszeniu.",
      template: "W pełni rozumiem, że jest Pan teraz zajęty odbiorem robót. Zaproponuję prosty układ: prześlę na Pana e-mail oraz SMS podsumowanie poprawek technicznych wraz z linkiem do prototypu, aby mógł Pan spokojnie kliknąć to na telefonie w wolnej chwili wieczorem. Zapisuję w swoim kalendarzu ponowną, minutową rozmowę w poniedziałek o godzinie 11:30. Omówimy wtedy Pana wrażenia z makiety i ewentualne poprawki rzemieślnicze. Czy ta godzina będzie dla Pana komfortowa?"
    }
  };

  // Follow-up templates
  const followUpTemplates: Record<string, { time: string; text: string }> = {
    post_call: {
      time: "Natychmiast po rozmowie telefonicznej (do 30 minut)",
      text: "Dzień dobry [Imię Rozmówcy],\n\nDziękuję za niezwykle miłą i merytoryczną rozmowę telefoniczną dotyczącą wizerunku i bezpieczeństwa firmy [Nazwa Firmy] w Białymstoku.\n\nZgodnie z obietnicą, przesyłam bezpośredni, bezpieczny link do przygotowanego przeze mnie projektu nowej, dedykowanej strony internetowej: [URL_POGLADU_STRONY]\n\nProjekt został stworzony specjalnie po to, aby:\n- Zaimplementować certyfikat bezpieczeństwa SSL (brak alarmów w przeglądarkach),\n- Przyspieszyć czas ładowania na telefonach do mniej niż 1.5 sekundy (Mobile-First),\n- Wprowadzić przejrzysty moduł przesyłania rzutów budowlanych do szybkiej wyceny rzemieślniczej.\n\nZachęcam do otwarcia powyższego linku bezpośrednio na swoim smartfonie, by przetestować intuicyjne działanie galerii.\n\nZgodnie z naszym ustaleniem, skontaktuję się z Państwem telefonicznie w [Dzień Tygodnia] o godzinie [Godzina], aby krótko poznać opinie na temat zaprojektowanej makiety.\n\nZ wyrazami szacunku,\n[Twoje Imię i Nazwisko]\nEkspert ds. Lead Generation i Web Design\n[Twój Telefon]"
    },
    day_3: {
      time: "Po 3 dniach od rozmowy (Przypomnienie o makiecie / Wartość SEO)",
      text: "Dzień dobry [Imię Rozmówcy],\n\nPozwalam sobie na krótki, serdeczny kontakt w nawiązaniu do naszej rozmowy telefonicznej sprzed 3 dni.\n\nMam nadzieję, że udało się Państwu w wolnej chwili zerknąć na przesłaną przeze mnie interaktywną makietę strony dla [Nazwa Firmy]. Chciałby dodać jeden niezwykle ważny aspekt rynkowy, którego nie poruszyłem w rozmowie.\n\nObecnie, ze względu na brak pozycjonowania mobilnego, Państwa firma traci miesięcznie dziesiątki organicznych wyszukiwań od inwestorów w Białymstoku wpisujących w wyszukiwarkę: '[Główna Fraza SEO]'. Nowy projekt przygotowaliśmy w czystej strukturze kodu, co pozwoli Państwu wyprzedzić konkurencję i zająć pozycję lidera w Google w ciągu 4-6 tygodni od wdrożenia.\n\nCzy udało się Państwu ocenić projekt i czy znajdą Państwo 3 minuty na krótkie podsumowanie telefoniczne jutro rano?\n\nPozdrawiam serdecznie,\n[Twoje Imię i Nazwisko]\n[Twój Telefon]"
    },
    day_7: {
      time: "Po 7 dniach od rozmowy (Przełamywanie obojętności / ROI)",
      text: "Szanowny Panie / Szanowna Pani,\n\nMija dokładnie tydzień od naszej rozmowy na temat optymalizacji ścieżki rezerwacji nowej strony internetowej w firmie [Nazwa Firmy].\n\nWiem, że codzienne nadzorowanie budów i koordynacja prac wymagają pełnego skupienia, dlatego piszę z bardzo konkretnym i uproszczonym podsumowaniem finansowym.\n\nWdrożenie krystalicznego SSL oraz zoptymalizowanego asystenta przesyłania rzutów technicznych podnosi u wykonawców budowlanych konwersję ze strony średnio o 25% już w pierwszym miesiącu. To dodatkowe zapytania o luksusowe zlecenia bez zwiększania wydatków na reklamę.\n\nChciałbym zaproponować krótki, 5-minutowy telefon w tym tygodniu, by odpowiedzieć na ewentualne pytania lub dostosować budżet i formy płatności (oferujemy dogodne rozliczenie abonamentowe lub ratalne).\n\nZ wyrazami szacunku,\n[Twoje Imię i Nazwisko]\nEkspert UX & SEO dla Branży Budowlanej\n[Twój Telefon]"
    },
    day_14: {
      time: "Po 14 dniach od rozmowy (Ostatnia szansa / Zamknięcie pętli)",
      text: "Szanowny Panie / Szanowna Pani [Imię],\n\nPiszę do Pani po raz ostatni w sprawie propozycji wdrożenia nowego, luksusowego portalu oraz uregulowania wizytówki Google dla firmy [Nazwa Firmy].\n\nSzanuję Państwa czas, dlatego jeśli ten temat nie jest obecnie priorytetem rozwojowym w Państwa planach rocznych, w pełni to rozumiem i obiecuję nie przesyłać kolejnych wiadomości.\n\nPozostawiam aktywny link do darmowego prototypu strony na naszym serwerze testowym do końca tygodnia: [URL_POGLADU_STRONY]. Jeśli w przyszłości zdecydują się Państwo zdominować lokalny rynek budowlany w Białymstoku i zapewnić inwestorom najwyższe zaufanie, zapraszam do bezpośredniego kontaktu.\n\nŻyczę wielu zyskownych zrealizowanych inwestycji i bezpiecznej pracy na budowach!\n\nZ poważaniem,\n[Twoje Imię i Nazwisko]\nEkspert ds. Wizerunku Biznesu Budowlanego\n[Twój Telefon]"
    }
  };

  // Personalization data for top 10 construction companies
  const personalizedScenarios: Record<string, {
    leadName: string;
    details: string;
    stage1Hook: string;
    problemsToAddress: string[];
    arguments: { title: string; desc: string }[];
    customObjections: { obj: string; resp: string }[];
  }> = {
    "swiat-zywic": {
      leadName: "Świat Żywic - Posadzki i Membrany",
      details: "Brak szyfrowania SSL (HTTPS), przestarzała mobilna galeria, trudny do odnalezienia cennik za m². Piękna ocena 5.0 z 21 opinii.",
      stage1Hook: "Dzień dobry! Rozmawiam z właścicielem Świata Żywic? Gratuluję nienagannego wizerunku – ocena 5.0 z 21 opinii to wielka duma w branży posadzkarskiej. Dzwonię krótko z Białegostoku. Przyjrzałem się Państwa oficjalnej stronie swiatzywic.pl i zlokalizowałem błąd techniczny. Strona działa bez szyfrowania SSL, przez co Google wyświetla groźny czerwony komunikat 'Niebezpieczna'. Posadzki żywiczne to produkt premium, który inwestorzy indywidualni 'kupują oczami' na smartfonie. Taki alarm na starcie budzi niepokój i niszczy zaufanie. Opracowałem dla Państwa darmowy, ultralekki projekt strony z mobilną galerią i kalkulatorem posadzki. Czy mogę podesłać podgląd?",
      problemsToAddress: [
        "Groźny błąd braku SSL (HTTPS), który budzi obawę przed wysyłaniem zapytań u klientów premium.",
        "Surowa, rozjeżdżająca się na telefonach galeria zdjęć z realizacji (żywice i mikrotekstrury wymagają najwyższej jakości wizualnej).",
        "Brak prostego formularza CRO, zbierającego powierzchnię w m² do błyskawicznej kalkulacji."
      ],
      arguments: [
        { title: "Zapewnienie Bezpieczeństwa (SSL)", desc: "Wdrożenie certyfikatu poufności HTTPS zapobiegającego blokadzie przeglądarek i uwiarygodniającego markę na Produkcyjnej." },
        { title: "Szybka Galeria HD", desc: "Nowoczesne prezentowanie wyjątkowych prac (mikrocement, żywice) w pełnym formacie, bez opóźniania telefonów." },
        { title: "Asystent Wycen za m²", desc: "Zintegrowanie prostego kalkulatora powierzchni, który drastycznie skróci czas ustalania szczegółów zlecenia." }
      ],
      customObjections: [
        { obj: "Klienci dzwonią do nas bezpośrednio z Map Google lub poleceń", resp: "Doskonale, Mapy i polecenia to Państwa potęga. Ale proszę pomyśleć o inwestorze, który dostaje polecenie do Świata Żywic. To osoba zamożna, wykańczająca luksusowy dom. Chce wejść na stronę, by zobaczyć jak prezentuje się mikrocement w nowoczesnym salonie. Gdy widzi błąd bezpieczeństwa i ociężałe mobile, jego entuzjazm opada. Piękna, krystaliczna witryna to tarcza, która zabezpiecza i pieczętuje każde polecenie budując wizerunek lidera." }
      ]
    },
    "presto-house": {
      leadName: "Presto House - Elewacje, Tarasy i Skład Drewna",
      details: "Dramatycznie wolne ładowanie mobilne (PageSpeed Mobile poniżej 30/100) przez nieskompresowane ryciny tarasów. Prestiżowe 55 opinii 5.0.",
      stage1Hook: "Dzień dobry! Zwracam się do kierownictwa Presto House. Gratuluję spektakularnych sukcesów rynkowych w Białymstoku – 55 perfekcyjnych opinii o średniej 5.0 to fenomen na rynku budowy tarasów i elewacji. Przeprowadziłem audyt sprawności Państwa witryny prestohouse.pl. Wygląda ładnie, ale na telefonach ładuje się powyżej 6 sekund przez zbyt ciężkie, nieskompresowane zdjęcia realizacji (PageSpeed 25/100). Inwestor szukający wykonawcy tarasu na telefonie w ogrodzie traci cierpliwość i przechodzi do szybszej konkurencji. Opracowałem lekki model witryny z natychmiastowym wczytywaniem. Mogę podesłać?",
      problemsToAddress: [
        "Drastycznie wolne działanie mobilne (PageSpeed poniżej 30/100) skutkujące ucieczką zabieganych inwestorów.",
        "Słaba integracja potężnego autorytetu rynkowego (55 opinii 5.0) bezpośrednio w sekcji Hero.",
        "Brak jasnego, wyróżniającego się wezwania do rezerwacji darmowych pomiarów geodezyjnych lub obmiarów na budowie."
      ],
      arguments: [
        { title: "Przyspieszenie do Standardu React", desc: "Migracja na superszybki kod Next-Gen wczytujący portfolio tarasów w ułamku sekundy na smartfonach." },
        { title: "Automatyczny Widget GBP", desc: "Integracja opinii z Google Maps w czasie rzeczywistym bezpośrednio przed oczyma każdego odwiedzającego." },
        { title: "Darmowy Pomiar jako Magnet (Lead Magnet)", desc: "Zaprojektowanie angażującego formularza do zapisu na darmowy obmiar na budowie z rezerwacją." }
      ],
      customObjections: [
        { obj: "Nasza strona przecież ładnie wygląda na komputerze", resp: "Zgadzam się, na komputerze w biurze działa stabilnie i prezentuje się estetycznie. Jednak statystyki pokazują, że ponad 80% współczesnych inwestorów indywidualnych przegląda oferty tarasów, altan czy elewacji na telefonie komórkowym wieczorem lub bezpośrednio na placu budowy. Optymalizacja pod telefony (mobile-first) to dzisiaj warunek konieczny do podwojenia liczby zapytań." }
      ]
    },
    "bramil": {
      leadName: "Automatyka i Bramy - Bramil Kamil Rzepniewski",
      details: "Całkowity brak oficjalnej witryny (brak domeny). Firma polega wyłącznie na wizytówce Google Maps o genialnej renomie (24 opinie 5.0).",
      stage1Hook: "Dzień dobry Panie Kamilu! Gratuluję 24 fantastycznych ocen 5.0 w firmie Bramil – to rzadki dowód solidności w branży napędów bramowych. Dzwonię krótko z Białegostoku, ponieważ jako specjalista od pozyskiwania klientów zauważyłem, że nie posiadają Państwo własnej strony internetowej. Klienci szukający 'napędy do bram Białystok' czy 'montaż bram garażowych podlaskie' w wyszukiwarce Google trafiają wyłącznie na konkurencję mającą witryny z katalogiem silników. Zaprojektowałem dla Pana darmowy darmowy szablon strony z kalkulatorem automatyki. Mogę podesłać podgląd?",
      problemsToAddress: [
        "Całkowity brak reprezentacji biznesu w sieci (brak domeny i strony), co eliminuje pozycjonowanie organiczne SEO.",
        "Tracenie wartościowego, lokalnego ruchu z wyszukiwań od nowo dewelopowanych domów pod Białymstokiem.",
        "Brak możliwości ułożenia estetycznego katalogu proponowanej automatyki (FAAC, Somfy) i cenników."
      ],
      arguments: [
        { title: "Nowoczesny Landing Page bramil.pl", desc: "Stworzenie szybkiej, zyskownej wizytówki zorientowanej na natychmiastowe telefony i wyceny." },
        { title: "Konfigurator Doboru Bramy", desc: "Wdrożenie prostego asystenta (4 pytania o wymiary i wagę), który automatycznie przelicza sugerowaną specyfikację." },
        { title: "Przejęcie Ruchu z Google", desc: "Lokalne pozycjonowanie na podlaskie słowa kluczowe gwarantujące stały napływ zleceń poza poleceniami." }
      ],
      customObjections: [
        { obj: "Nie potrzebuję strony, mam stały dopływ zleceń w regionie", resp: "Cudownie to słyszeć, nienaganna praca zawsze się broni. Jednak bez własnej domeny, marka Bramil jest w 100% zależna od algorytmu Google Maps. Jeśli konkurent zacznie masowo kupować reklamy lub pozycjonować się nad Panem, Pana telefon ucichnie. Własna strona www to trwały fundament i ubezpieczenie biznesu, które uniezależnia Pana od zmian w Google i otwiera bramy do kontraktów B2B oraz zleceń premium." }
      ]
    },
    "baginski": {
      leadName: "Bagiński - Prace Wykończeniowe i Glazura",
      details: "Brak strony www (firma korzysta wyłącznie z profilu na Facebooku). Imponujące 61 opinii 5.0 w Google Maps.",
      stage1Hook: "Dzień dobry panie Bagiński! Gratuluję kolosalnego sukcesu wizerunkowego – aż 61 opinii ze średnią 5.0 to absolutny rekord i dowód najwyższego kunsztu glazurniczego w Białymstoku. Zwróciłem uwagę, że Państwa jedyną reprezentacją oferty w sieci jest profil na Facebooku. Klienci premium wykańczający luksusowe domy szukają rzemieślników bezpośrednio w Google i często nie mają konta na FB. Co więcej, chaos na tablicy FB uniemożliwia rzetelne posegregowanie galerii gresu wielkoformatowego. Zaprojektowałem dla Pana prestiżowe portfolio internetowe. Czy mogę podesłać bezpłatny link?",
      problemsToAddress: [
        "Uzależnienie marki od Facebooka (wymóg logowania dla klienta, brak pozycjonowania w Google SEO na frazy wykończeniowe).",
        "Wysokiej klasy glazurnictwo i rzemiosło toną w strumieniu chaotycznych postów społecznościowych bez ładu.",
        "Brak prostego kalkulatora budżetu wykończenia m² łazienki, co utrudnia wstępne kalkulacje."
      ],
      arguments: [
        { title: "Prestiżowa Galeria Premium", desc: "Stworzenie przejrzystego, eleganckiego albumu z podziałem na łazienki, salony, płytki wielkoformatowe i rzuty." },
        { title: "Własna Markowa Domena", desc: "Budowa niezależności w sieci pod własnym szyldem z zabezpieczeniem HTTPS SSL." },
        { title: "Dominacja pod 'glazurnik Białystok'", desc: "Wdrożenie struktur pozycjonowania sprowadzających bogatych klientów prosto z wyszukiwarki." }
      ],
      customObjections: [
        { obj: "Nasza strona Facebookowa doskonale nam zastępuje stronę www", resp: "Facebook doskonale buduje zasięg, ale zamożny inwestor, który chce zlecić wykończenie luksusowej łazienki za 40,000 zł, rzadko przeszukuje posty na FB. Oczekuje dedykowanej strony premium, która ułoży prace w katalog, wykaże gwarancję rzemieślniczą i ułatwi cichy kontakt. Dodatkowo, trzymanie wszystkich jajek w jednym koszu na FB niesie ryzyko nagłej utraty dostępu do profilu." }
      ]
    },
    "kwartet": {
      leadName: "Hurtownia Budowlana Białystok - Kwartet",
      details: "Brak witryny internetowej dla dużego składu budowlanego z 22 opiniami 5.0. Wyraźne straty zapytań handlowych B2B.",
      stage1Hook: "Dzień dobry! Zwracam się do działu handlowego hurtowni Kwartet. Gratuluję nienagannych 22 opinii 5.0 na Przędzalnianej. Dzwonię ze specjalistyczną uwagą biznesową. Państwa skład budowlany ma doskonałe opinie, lecz brak strony internetowej sprawia, że ekipy budowlane i nowi inwestorzy w Białymstoku szukając składu kupują materiały u konkurencji mającej proste kalkulatory online. Zaprojektowałem dla Kwartetu prosty portal informacyjny, na którym wykonawca może wgrać rzut domu w PDF w celu otrzymania darmowej wyceny stali i bloczków ściennych w 24h. Mogę zaprezentować ten bezpłatny podgląd?",
      problemsToAddress: [
        "Całkowity brak portalu www składu budowlanego uniemożliwiający pozyskiwanie stałych partnerstw B2B z ekipami dekarskimi.",
        "Brak jasnego przedstawienia asortymentu (stal, izolacje, chemia) i marek partnerskich.",
        "Utrata bezpłatnego ruchu z Google Maps od osób szukających tanich materiałów w okolicy."
      ],
      arguments: [
        { title: "Moduł 'Wgraj Projekt do Wyceny'", desc: "Niezwykle zyskowna funkcjonalność (CRO) odciążająca telefon i zbierająca pliki z projektami od inwestorów." },
        { title: "Baza Lojalnościowa dla Ekip", desc: "Wydzielona przestrzeń na stronie objaśniająca systemy rabatowe i transport z HDS na terenie województwa." },
        { title: "Hurtowe SEO na Przędzalnianą", desc: "Pozycjonowanie pod hasła składu i tanich bloczków, generujące stały napływ hurtowych zamówień." }
      ],
      customObjections: [
        { obj: "Mamy stałych odbiorców i nie prowadzimy sprzedaży internetowej", resp: "W pełni to rozumiem, handel hurtowy opiera się na relacjach. Proponowany portal nie ma być sklepem internetowym (e-commerce). Ma pełnić funkcję potężnej wizytówki handlowej B2B. Umożliwi on nowym firmom wykonawczym i inwestorom indywidualnym szybkie przesłanie projektu domu do wyceny materiałowej bezpośrednio ze smartfona na budowie, co automatycznie zakontraktuje dla hurtowni Kwartet kilkanaście nowych dużych wysyłek miesięcznie." }
      ]
    },
    "abc-elewacje": {
      leadName: "ABC Elewacje S.C. - Docieplenia i Fasad",
      details: "Brak SSL (Insecure), archaiczny szablon z lat 2005-2008 nieprzystosowany do mobilności. Znakomite 58 opinii (4.8).",
      stage1Hook: "Dzień dobry! Rozmawiam z kierownikiem robót w ABC Elewacje? Gratuluję świetnej, dojrzałej marki i 58 opinii. To kolosalny atut. Zauważyłem jednak krytyczny błąd na Państwa stronie abcelewacje.com.pl. Witryna nie posiada certyfikatu SSL (brak kłódki) i została stworzona kilkanaście lat temu – ma maleńki, wąski layout, który zupełnie rozjeżdża się na smartfonach. Inwestor budujący dom, widząc alarm o zagrożeniu kradzieży danych i nieczytelne zdjęcia elewacji, szybko ucieka do rywali. Zaprojektowałem dla Państwa nowoczesną i bezpieczną witrynę z galerią domów w wysokiej jakości. Czy mogę podesłać darmowy link podglądowy?",
      problemsToAddress: [
        "Groźny błąd braku SSL (HTTPS), który budzi obawę przed wyciekiem u deweloperów.",
        "Brak jakiegokolwiek dostosowania mobilnego (Mobile UX nie istnieje), co zniechęca do pozostania na witrynie.",
        "Miniaturowe, ciemne zdjęcia i przestarzały układ graficzny niedający poczucia usługi premium."
      ],
      arguments: [
        { title: "Instalacja SSL i Bezpieczeństwo", desc: "Uruchomienie bezpiecznego szyforwania Let's Encrypt eliminującego ostrzeżenia w Chrome i Safari." },
        { title: "Szerokoekranowy Layout HTML5", desc: "Stworzenie dynamicznej galerii elewacji premium w formacie WebP prezentującej strukturę tynków w HD." },
        { title: "Kalkulator Czystego Powietrza (CRO)", desc: "Wdrożenie interaktywnego kalkulatora wyliczającego dotację na docieplenia ścian z dotacji rządowej." }
      ],
      customObjections: [
        { obj: "Nasza stara strona nam na razie wystarcza, i tak mamy dużo pracy", resp: "To dowód na to, jak rzetelnymi są Państwo fachowcami. Jednak stara witryna bez SSL z lat 2000-cznych obniża postrzeganą wartość wykonawczą. Inwestor, który płaci za docieplenie i tynk ponad 50 tysięcy złotych, oczekuje wizerunku na najwyższym poziomie. Nowoczesna, ustrukturyzowana strona www pozwoli Państwu podnieść marżę na m² oraz łatwiej selekcjonować dochodowe zlecenia od deweloperów." }
      ]
    },
    "puroof": {
      leadName: "Puroof - Ocieplanie Pianą PUR Patryk Małach",
      details: "Słabe wskaźniki CRO (brak CTA 'Darmowy pomiar poddasza' na banerze), brak SEO geo-podstron dla Sokółki i Hajnówki. 25 idealnych ocen.",
      stage1Hook: "Dzień dobry Panie Patryku! Gratuluję 25 kapitalnych ocen 5.0 dla marki Puroof – to wspaniały wynik w izolacjach natryskowych. Państwa strona piana-puroof.pl wygląda poprawnie, dzwonię do Pana z Białegostoku, bo jako doradca SEO zlokalizowałem spory niewykorzystany potencjał. Pozycjonujecie się Państwo głównie na stolicę województwa, pomijając rynki Sokółki, Hajnówki czy Bielska, z których dekarze pozyskują najbardziej marżowe zlecenia. Na stronie głównej brak też wyraźnego przycisku zapisu na bezpłatny obmiar. Przygotowałem dla Puroof darmowy plan optymalizacji konwersji i strukturę SEO. Mogę go Panu wysłać?",
      problemsToAddress: [
        "Słaby współczynnik CRO na pierwszym ekranie - brak zachęty do zapisu na darmowe badanie wilgotności więźby.",
        "Niewykorzystane pozycjonowanie w miastach satelitarnych województwa podlaskiego.",
        "Ograniczony czas wczytywania zasobów graficznych procesu natrysku piany na smartfonach."
      ],
      arguments: [
        { title: "Zwiększenie Konwersji (CRO)", desc: "Wdrożenie agresywnej, zoptymalizowanej zachęty 'Darmowy obmiar i badanie wilgotności' sprowadzającej leady." },
        { title: "Budowa Siatki SEO Geo", desc: "Stworzenie sieci podstron dedykowanych dla Sokółki, Hajnówki, Bielska i Siemiatycz w celu przejęcia tamtejszego rynku." },
        { title: "Proces Natrysku na Wideo", desc: "Zoptymalizowanie i wdrożenie dynamicznych, szybkich formatów wideo pokazujących zalety piany PUR na żywo." }
      ],
      customObjections: [
        { obj: "Strona działa poprawnie i nie chcę zmieniać czegoś, co jest OK", resp: "To świetne podejście, też nie lubię psuć działających rzeczy. Ale proszę pomyśleć, że z obecnej strony dowiaduje się o Panu tylko klient z Białegostoku. Budując dedykowaną, regionalną siatkę SEO i zwiększając konwersję na darmowy pomiar wilgotności drewna, możemy z tego samego budżetu reklamowego wygenerować nawet o 35% więcej konkretnych zapytań w ujęciu regionalnym bez żadnych nakładów na Google Ads." }
      ]
    },
    "progress": {
      leadName: "Progress - Stolarka Budowlana, Okna i Bramy",
      details: "Całkowity brak oficjalnej strony salonu stolarki. Doskonała renoma w Google i aż 43 opinie (4.8).",
      stage1Hook: "Dzień dobry! Zwracam się do właścicieli salonu Progress na Pogodnej. Nazywam się [Twoje Imię], dzwonię z Białegostoku. Gratuluję świetnej opinii – 43 rekomendacje z oceną 4.8 to dowód, że klienci bardzo chętnie polecają Państwa okna i ciepły montaż. Dzwonię, bo zauważyłem, że nie posiadają Państwo oficjalnej witryny internetowej. Inwestor szukający stolarki energooszczędnej i bram na wymiar wpisuje w wyszukiwarkę 'okna plastikowe Białystok' i trafia do konkurencji, która reklamuje profile w sieci. Przygotowałem dla Państwa darmowy prototyp wirtualnego salonu stolarki Progress z asystentem przesyłania rzutów. Mogę go podesłać?",
      problemsToAddress: [
        "Całkowity brak portalu www renomowanego dystrybutora okien, bram i rolet.",
        "Utrata wielotysięcznych zleceń na stolarkę do pasywnych domów jednorodzinnych na podlaskim rynku.",
        "Brak możliwości ustrukturyzowanej prezentacji oferowanych marek (Veka, Rehau, Salamander) i standardów montażowych."
      ],
      arguments: [
        { title: "Wirtualny Salon Stolarki Progress", desc: "Stworzenie rzetelnej, markowej wizytówki uwiarygodniającej wiedzę techniczną i zaawansowany montaż warstwowy." },
        { title: "Formularz Przesyłania Rzutów", desc: "Wdrożenie mechanizmu zbierającego zapytania ofertowe - klient wygodnie wgrywa rzuty architektoniczne domu do wyceny okien." },
        { title: "Optymalizacja pod Dotacje", desc: "Edukacyjna sekcja pomagająca inwestorom dopasować okna energooszczędne pod aktualne wytyczne termomodernizacyjne." }
      ],
      customObjections: [
        { obj: "Klienci odwiedzają nasz salon osobiście i nie potrzebujemy witryny", resp: "Oczywiście, wizyta w salonie na Pogodnej i bezpośredni kontakt z doradcą to najlepszy sposób sprzedaży. Jednak zanim klient fizycznie do Państwa przyjedzie, selekcjonuje salony w internecie. Jeśli nie ma Was w sieci, to w ogóle nie dowiaduje się o Waszym profesjonalizmie i jedzie do salonów, które ułatwiły mu kontakt formularzem online. Bezpieczna, nowoczesna strona to po prostu potężny przedłużacz Państwa salonu fizycznego." }
      ]
    },
    "szeliga": {
      leadName: "Przedsiębiorstwo Budowlane PB Szeliga Sp. z o.o.",
      details: "Brak certyfikatu SSL (groźne ostrzeżenia HTTP), stara witryna deweloperska niedostosowana do smartfonów. 34 cenne opinie.",
      stage1Hook: "Dzień dobry Państwu! Dzwonię do sekretariatu PB Szeliga. Gratuluję udanych inwestycji mieszkaniowych i 34 świetnych opinii klientów. Nazywam się [Twoje Imię]. Przyjrzałem się oficjalnemu portalowi pbszeliga.pl pod kątem wygody osób kupujących nowe mieszkania. Zlokalizowałem spory problem wizerunkowy: witryna działa na niezaszyfrowanym protokole HTTP bez SSL (Chrome wykazuje alarm), rzuty lokali są nieczytelne i zupełnie niedostosowane do telefonów. Dla młodych osób kupujących mieszkanie za pół miliona złotych to potężny zgrzyt zaufania. Zaprojektowałem bezpieczny i responsywny portal deweloperski z wyszukiwarką mieszkań. Mogę przesłać podgląd?",
      problemsToAddress: [
        "Witryna szanowanego dewelopera działa na niezabezpieczonym protokole HTTP bez SSL (potężny cios w wiarygodność finansową).",
        "Rzuty lokali podane są w brzydkich plikach o niskiej rozdzielczości, niedostosowanych do ekranów smartfonów.",
        "Brak nowoczesnego, przejrzystego systemu rezerwacji online lub sprawnego asystenta rekrutacji leadów."
      ],
      arguments: [
        { title: "Zabezpieczenie SSL i Prestiż", desc: "Uruchomienie połączenia szyfrowanego HTTPS o najwyższym stopniu zaufania dla transakcji mieszkaniowych." },
        { title: "Dynamiczne Rzuty Lokali", desc: "Wdrożenie responsywnego szablonu prezentującego rzuty pięter i statusy mieszkań (wolne / zajęte) w formacie HD na smartfonach." },
        { title: "Lądowiska Inwestycji", desc: "Zaprojektowanie angażujących landing pages dla każdej nowo budowanej inwestycji szeregowców i bloków." }
      ],
      customObjections: [
        { obj: "Inwestorzy i tak przyjeżdżają do nas podpisać umowę, strona to tylko dodatek", resp: "To absolutna racja, zakup mieszkania to kluczowa decyzja życiowa. Proszę jednak zauważyć, że pierwsza selekcja ofert deweloperskich odbywa się dzisiaj w 90% na ekranie smartfona. Jeśli strona nie pozwala młodemu klientowi na wygodne i płynne powiększenie rzutu mieszkania na telefonie, a przeglądarka ostrzega o niebezpieczeństwie kradzieży haseł, deweloper Szeliga wizerunkowo sporo traci przed konkurentami oferującymi luksusowe interaktywne portale 3D." }
      ]
    },
    "kresso": {
      leadName: "Z Drewna Maciej Kresso - Tarasy i Altany",
      details: "Całkowity brak strony www dla luksusowego producenta wiat, pergoli i tarasów z drewna premium (tarasy egzotyczne).",
      stage1Hook: "Dzień dobry Panie Macieju! Nazywam się [Twoje Imię], zajmuję się budową nowoczesnych wizytówek dla rzemieślników budowlanych w Białymstoku. Gratuluję świetnej, starannej pracy na Państwa profilu – konstrukcje altan ogrodowych i tarasów 'Z Drewna' to czysty kunszt estetyczny. Dzwonię, ponieważ zauważyłem, że nie posiadają Państwo własnej witryny internetowej. Luksusowa architektura ogrodowa i tarasy egzotyczne wymagają perfekcyjnej ekspozycji w sieci, ponieważ inwestorzy z budżetem kupują oczami na smartfonie. Brak strony uniemożliwia im przejrzenie galerii przed/po. Zaprojektowałem dla Pana minimalistyczny, bardzo czysty rysunek strony stolarskiej o wysokiej klasie. Czy mogę przesłać Pana link?",
      problemsToAddress: [
        "Całkowity brak portalu www dla wysokomarżowych luksusowych usług stolarki ogrodowej (tarasy, altany, pergole).",
        "Utrata klientów indywidualnych w Białymstoku na zapytania organiczne 'budowa tarasów drewnianych' i 'altany na zamówienie'.",
        "Brak bazy opisów stosowanych surowców premium (modrzew syberyjski, termodrewno)."
      ],
      arguments: [
        { title: "Aesthetic Craft Portfolio", desc: "Stworzenie minimalistycznej, eleganckiej witryny z wielkimi zdjęciami wykonanej stolarki w najwyższej ostrości." },
        { title: "Kompilacja Gatunków Drewna", desc: "Rzetelny przewodnik edukacyjny uświadamiający inwestorów, dlaczego twarde gatunki drewna są warte dopłaty." },
        { title: "Formularz Wyceny Wykończeń", desc: "Szybki generator pytań (m², typ konstrukcji, wybór drewna) dostarczający gotowe, wycenione leady." }
      ],
      customObjections: [
        { obj: "Dopiero się rozwijamy i nie mam środków na skomplikowane strony www", resp: "Rozumiem to doskonale, na początku inwestycje w park maszynowy i materiały są priorytetem. Dlatego nie proponuję Panu wielkiego, drogiego portalu. Dla marki rzemieślniczej 'Z Drewna' najlepszym rozwiązaniem jest tzw. One Page Portfolio – czysty, jednoplanszowy szablon pokazujący kunszt rzeźbiarski, zdjęcia, bezpośredni telefon i zintegrowane opinie. Koszt wdrożenia jest bardzo niski, a strona spłaci się przy pierwszym zleceniu na małą pergolę ogrodową." }
      ]
    }
  };

  const currentScenario = personalizedScenarios[selectedLeadId] || personalizedScenarios["swiat-zywic"];

  return (
    <div className="space-y-6" id="sales-process-container">
      {/* Header section with status styling */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-red-950/60 text-red-405 border border-red-900/40 rounded-xl">
            <Flame className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-100 tracking-tight">PROCES SPRZEDAŻY DLA SEKTORA BUDOWLANO-WYKOŃCZENIOWEGO</h2>
            <p className="text-xs text-slate-400">Kompleksowy lejek B2B: od zimnej słuchawki, przez analizę potrzeb, aż po bazy kampanii dla TOP 10 Białystok.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="text-xs font-mono font-bold bg-slate-950 text-indigo-400 px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-1.5">
            🎯 Target: Budownictwo i Wykończenia PL
          </span>
          <span className="text-xs font-mono font-bold bg-emerald-950/60 text-emerald-400 px-3 py-1.5 rounded-lg border border-emerald-900/40 flex items-center gap-1.5">
            ✓ Konsultatywny Model Sprzedaży
          </span>
        </div>
      </div>

      {/* Main Process Selector Stepper */}
      <div className="grid grid-cols-2 md:grid-cols-7 gap-2" id="process-stepper-grid">
        {stepsList.map((step) => {
          const Icon = step.icon;
          const isActive = activeStep === step.num;
          return (
            <button
              key={step.num}
              onClick={() => setActiveStep(step.num)}
              className={`p-3.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                isActive 
                  ? "bg-indigo-600 border-indigo-550 text-white shadow-lg shadow-indigo-500/10" 
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-indigo-400"}`} />
              <span className="text-xs font-bold leading-tight block truncate w-full">{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* STEP 1: CONVERSATION START */}
      {activeStep === 1 && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6 animate-fade-in" id="step-one-details">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-800/80">
            <Phone className="w-5 h-5 text-indigo-400" />
            <h3 className="font-extrabold text-slate-100 text-base">Etap 1: Pierwszy Kontakt Telefoniczny (Skrypt Rozmowy Outbound)</h3>
          </div>

          <p className="text-sm text-slate-350 leading-relaxed">
            Poniższy skrypt reprezentuje <b>nowoczesne, konsultacyjne podejście partnerskie</b>. Celem nie jest wciskanie usług, lecz postawienie diagnozy technicznej, ocieplenie relacji i wzbudzenie obaw o przestoje brygad oraz uciekanie dużych zleceń do konkurencji.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm" id="phone-script-stages">
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 space-y-4">
              <h4 className="font-bold text-indigo-300 flex items-center gap-1.5 border-b border-slate-850 pb-2">
                <span className="bg-indigo-950 text-indigo-400 w-5 h-5 rounded-full flex items-center justify-center text-xs">1</span> 
                Rozpoczęcie rozmowy & Przedstawienie się
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed italic">
                Wypowiadaj słowa ze spokojem i pewnością siebie. Od razu oddaj szacunek dla renomy firmy budowlanej.
              </p>
              <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-850 font-mono text-xs text-slate-300 leading-relaxed relative">
                "Dzień dobry, czy rozmawiam z panem [Nazwisko / Właścicielem]? Dzień dobry, nazywam się [Twoje Imię]. Dzwonię krótko z Białegostoku. Przyglądam się lokalnym wykonawcom i hurtowniom w branży budowlanej – chciałem serdecznie pogratulować świetnych opinii w Maps Google. Ocena średnia [Ocena] i tyle komentarzy to wielka duma."
              </div>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 space-y-4">
              <h4 className="font-bold text-indigo-300 flex items-center gap-1.5 border-b border-slate-850 pb-2">
                <span className="bg-indigo-950 text-indigo-400 w-5 h-5 rounded-full flex items-center justify-center text-xs">2</span>
                Zbudowanie zainteresowania (Haczyk)
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed italic">
                Szybko łączymy reputację firmy z odkrytym błędem technicznym, tworząc obawę o straty finansowe.
              </p>
              <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-850 font-mono text-xs text-slate-300 leading-relaxed">
                "Dzwonię tylko z jedną uwagą techniczną. Przeprowadziliśmy lokalny audyt wizerunkowo-mobilny wykonawców. Zauważyłem, że przy tak wspaniałych pracach, Państwa strona nie ma pozycjonowania i niszczy zaufanie przez błąd SSL ('Witryna niebezpieczna') / uniemożliwia wygodny przegląd portfolio na komórkach. Dziś inwestor szuka elewacji lub tarasów na smartfonie, i taki zator kieruje go do innych salonów."
              </div>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 space-y-4">
              <h4 className="font-bold text-indigo-300 flex items-center gap-1.5 border-b border-slate-850 pb-2">
                <span className="bg-indigo-950 text-indigo-400 w-5 h-5 rounded-full flex items-center justify-center text-xs">3</span>
                Zadawanie pytań diagnostycznych (Analiza bólu)
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed italic">
                Uruchomienie pytań diagnostycznych, które zmuszą wykonawcę do nazwania braków w zleceniach.
              </p>
              <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-850 font-mono text-xs text-slate-300 leading-relaxed">
                "Proszę powiedzieć, czy obecnie mierzą Państwo ruch z organicznej wyszukiwarki Google na swoją stronę, czy opieracie się głównie na poleceniach lub płatnych portalach pośredniczących? I jak oceniają Państwo liczbę przesyłanych rzutów budów ułatwioną z telefonu?"
              </div>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 space-y-4">
              <h4 className="font-bold text-indigo-300 flex items-center gap-1.5 border-b border-slate-850 pb-2">
                <span className="bg-indigo-950 text-indigo-400 w-5 h-5 rounded-full flex items-center justify-center text-xs">4</span>
                Przejście do makiety i zamknięcie rozmowy
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed italic">
                Przedstawienie darmowej propozycji bez zobowiązań w celu zacieśnienia kontaktu.
              </p>
              <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-850 font-mono text-xs text-slate-300 leading-relaxed">
                "Nadrzędnym celem jest zabezpieczenie Państwa prestiżu i pomoc w zapełnieniu kalendarza prac zyskownymi leadami bez kosztów prowizji. Zaprojektowałem darmowy model ultralekkiej, pozycjonowanej strony mobilnej z wygodnym formularzem wyceny rzutów budowlanych. Czy mogę podesłać Panu link, by mógł Pan sam to kliknąć i przymierzyć pod swoją firmę?"
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: NEEDS ANALYSIS */}
      {activeStep === 2 && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6 animate-fade-in" id="step-two-details">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-800/80">
            <ClipboardList className="w-5 h-5 text-indigo-400" />
            <h3 className="font-extrabold text-slate-100 text-base">Etap 2: Kompleksowa Analiza Potrzeb (15 Pytań Diagnostycznych dla Budownictwa)</h3>
          </div>

          <p className="text-sm text-slate-350 leading-relaxed">
            Używaj tych pytań podczas rozmów kwalifikacyjnych lub audytowych. Pomagają one bezlitośnie obnażyć problemy z pozyskiwaniem zleceń, brakiem analityki oraz marnotrawstwem dotychczasowej renomy w Google Maps.
          </p>

          <div className="space-y-4" id="needs-questions-accordion">
            {needsQuestions.map((group, idx) => (
              <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-3">
                <h4 className="text-xs font-mono font-bold text-indigo-400 tracking-wider uppercase">{group.category}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {group.questions.map((qObj, qIdx) => (
                    <div key={qIdx} className="bg-slate-900 p-3.5 rounded-lg border border-slate-800/60 flex flex-col justify-between">
                      <div>
                        <p className="text-xs font-bold text-slate-200 leading-relaxed mb-2">{qObj.q}</p>
                        <p className="text-[10px] text-slate-400 leading-relaxed bg-slate-950 p-2 rounded border border-slate-850">
                          🎯 <b>Cel pytania:</b> {qObj.purpose}
                        </p>
                      </div>
                      <p className="text-[10px] text-indigo-300 mt-2 font-mono">
                        💡 <b>Wskazówka handlowa:</b> {qObj.tip}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STEP 3: VALUE PRESENTATION */}
      {activeStep === 3 && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6 animate-fade-in" id="step-three-details">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-800/80">
            <Award className="w-5 h-5 text-indigo-400" />
            <h3 className="font-extrabold text-slate-100 text-base">Etap 3: Prezentacja Wartości - Argumenty Biznesowe i Techniczne</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm" id="value-arguments">
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 space-y-2">
              <h4 className="font-bold text-emerald-400">📈 Argumenty Biznesowe (Zwrot z Inwestycji - ROI)</h4>
              <p className="text-slate-300 leading-relaxed text-xs">
                Uświadom wykonawcy, że koszt nowej strony to drobna kwota przy rentowności jego zleceń. Jedna wykonana posadzka, tynk elewacyjny czy zestaw okien do domu pasywnego kompletnie pokrywają wydatek na portal. Reszta roku to czysty zysk z darmowego ruchu.
              </p>
            </div>
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 space-y-2">
              <h4 className="font-bold text-indigo-455 text-indigo-300">📣 Argumenty Marketingowe (CRO & UX)</h4>
              <p className="text-slate-300 leading-relaxed text-xs">
                Zaoferuj asystenta ładowania rzutów. Zamiast zmuszać klienta do opisywania domów przez telefon, inwestor przeciąga projekt architektoniczny rzutu parteru bezpośrednio do formularza na witrynie. To oszczędza setki roboczogodzin właściciela firmy.
              </p>
            </div>
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 space-y-2">
              <h4 className="font-bold text-sky-400">🔍 Argumenty SEO (Lokalna Dominacja Google)</h4>
              <p className="text-slate-300 leading-relaxed text-xs">
                Skierowanie działań na frazy lokalne miast satelitarnych (Sokółka, Hajnówka itp.). Rywale pozycjonują się wyłącznie na Białystok, co pozwala w mgnieniu oka przejąć wartościowy ruch z silnie rozbudowujących się powiatów przyległych.
              </p>
            </div>
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 space-y-2">
              <h4 className="font-bold text-amber-400">💎 Argumenty Wiarygodności (Social-Proof)</h4>
              <p className="text-slate-300 leading-relaxed text-xs">
                Integracja unikalnego API Maps z dynamicznie wczytywanymi ocenami. Gdy zamożny klient premium wchodzi na stronę i widzi od razu zsynchronizowany, żywy widget opinii 5.0 od realnych sąsiadów - jego opór przed współpracą spada do zera.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* STEP 4: OBJECTION HANDLING */}
      {activeStep === 4 && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6 animate-fade-in" id="step-four-details">
          <div className="flex border-b border-slate-800/80 pb-4 justify-between items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-indigo-400" />
              <h3 className="font-extrabold text-slate-100 text-base">Etap 4: Skuteczne Pokonywanie Obiekcji Klienta</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.keys(objectionsData).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedObjection(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedObjection === key
                      ? "bg-indigo-600 text-white border border-indigo-500"
                      : "bg-slate-950 text-slate-400 border border-slate-850 hover:text-slate-200"
                  }`}
                >
                  {objectionsData[key].label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="objection-drill-down">
            {/* Answer */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 md:col-span-1 space-y-2">
              <h4 className="text-xs font-bold text-red-405 uppercase tracking-wider flex items-center gap-1">
                <AlertCircle className="w-4 h-4 text-red-500" /> Gotowe przełamanie (Skrypt)
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-900 p-3.5 rounded border border-slate-850 italic font-medium">
                "{objectionsData[selectedObjection]?.resp}"
              </p>
            </div>

            {/* Probe Question */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 md:col-span-1 space-y-2">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                <HelpCircle className="w-4 h-4 text-amber-500" /> Pytanie sondujące zamykające
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-900 p-3.5 rounded border border-slate-850">
                "{objectionsData[selectedObjection]?.probe}"
              </p>
            </div>

            {/* Next steps and soft offering */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 md:col-span-1 space-y-2">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Kolejny krok / Propozycja soft
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-900 p-3.5 rounded border border-slate-850">
                {objectionsData[selectedObjection]?.follow}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* STEP 5: CLOSING TECHNIQUES */}
      {activeStep === 5 && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6 animate-fade-in" id="step-five-details">
          <div className="flex border-b border-slate-800/80 pb-4 justify-between items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-indigo-400" />
              <h3 className="font-extrabold text-slate-100 text-base">Etap 5: 5 Skutecznych Strategii na Zamknięcie Rozmowy</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.keys(closingStyles).map((styleKey) => (
                <button
                  key={styleKey}
                  onClick={() => setSelectedClosingStyle(styleKey)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedClosingStyle === styleKey
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-950 text-slate-400 border border-slate-850 hover:text-slate-200"
                  }`}
                >
                  {styleKey === "spotkanie" && "Wideo Spotkanie"}
                  {styleKey === "wyslanie_audytu" && "Audyt na Mail"}
                  {styleKey === "wyslanie_makiety" && "Darmowa Makieta"}
                  {styleKey === "prezentacja_oferty" && "Szczegółowa Oferta"}
                  {styleKey === "kolejny_kontakt" && "Kolejny Telefon"}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 space-y-3" id="closing-style-details">
            <div className="flex justify-between items-center pb-2 border-b border-slate-850">
              <span className="text-sm font-bold text-slate-250 text-slate-200">{closingStyles[selectedClosingStyle]?.title}</span>
              <button
                onClick={() => copyToClipboard(closingStyles[selectedClosingStyle]!.template, "closing")}
                className="p-1.5 px-3 text-xs text-slate-400 hover:text-indigo-400 bg-slate-900 border border-slate-800 rounded flex items-center gap-1 transition-all cursor-pointer"
              >
                {copiedKey === "closing" ? <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedKey === "closing" ? "Skopiowano!" : "Skopiuj szablon rozmowy"}
              </button>
            </div>
            <p className="text-xs text-slate-400 font-mono italic">{closingStyles[selectedClosingStyle]?.desc}</p>
            <div className="bg-slate-900 p-4 rounded-xl text-sm italic font-medium text-slate-300 border border-slate-850 leading-relaxed whitespace-pre-line">
              "{closingStyles[selectedClosingStyle]?.template}"
            </div>
          </div>
        </div>
      )}

      {/* STEP 6: FOLLOW-UP SEQUENCE */}
      {activeStep === 6 && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6 animate-fade-in" id="step-six-details">
          <div className="flex border-b border-slate-800/80 pb-4 justify-between items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-indigo-400" />
              <h3 className="font-extrabold text-slate-100 text-base">Etap 6: Sekwencja Wiadomości Follow-up (Zwalczanie Obywatelskości)</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.keys(followUpTemplates).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedFollowUp(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedFollowUp === key
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-950 text-slate-400 border border-slate-850 hover:text-slate-200"
                  }`}
                >
                  {key === "post_call" && "Mail 1: Od razu po telefonie"}
                  {key === "day_3" && "Mail 2: Po 3 dniach"}
                  {key === "day_7" && "Mail 3: Po 7 dniach"}
                  {key === "day_14" && "Mail 4: Po 14 dniach (Ostatni)"}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 space-y-4" id="follow-up-details">
            <div className="flex justify-between items-center pb-2 border-b border-slate-850">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider block">Sugerowany czas nadania:</span>
                <span className="text-sm font-bold text-slate-200">{followUpTemplates[selectedFollowUp]?.time}</span>
              </div>
              <button
                onClick={() => copyToClipboard(followUpTemplates[selectedFollowUp]!.text, "followup")}
                className="p-1.5 px-3 text-xs text-slate-400 hover:text-indigo-400 bg-slate-900 border border-slate-800 rounded flex items-center gap-1 transition-all cursor-pointer"
              >
                {copiedKey === "followup" ? <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedKey === "followup" ? "Skopiowano!" : "Skopiuj gotowy e-mail"}
              </button>
            </div>
            <div className="bg-slate-900 p-4 rounded-xl text-xs font-mono text-slate-350 border border-slate-850 leading-relaxed whitespace-pre-line">
              {followUpTemplates[selectedFollowUp]?.text}
            </div>
          </div>
        </div>
      )}

      {/* STEP 7: PERSONALIZATION FOR TOP 10 */}
      {activeStep === 7 && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6 animate-fade-in" id="step-seven-details">
          <div className="flex flex-wrap border-b border-slate-800/80 pb-4 justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <h3 className="font-extrabold text-slate-100 text-base">Etap 7: Indywidualne Scenariusze dla TOP 10 Najlepszych Handlowo Leadów</h3>
            </div>
            <div className="flex gap-2 items-center text-xs">
              <span className="text-slate-400 font-bold">Wybierz firmę budowlaną:</span>
              <select
                value={selectedLeadId}
                onChange={(e) => setSelectedLeadId(e.target.value)}
                className="bg-slate-950 border border-slate-800 text-indigo-400 font-bold px-3 py-1.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                {topTenLeads.map((lead) => (
                  <option key={lead.id} value={lead.id}>
                    {lead.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6" id="personalization-inner">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 flex flex-wrap justify-between gap-4 items-center">
              <div>
                <h4 className="font-bold text-slate-100 text-sm">{currentScenario?.leadName}</h4>
                <p className="text-xs text-indigo-400 font-medium mt-1 font-mono">🔍 Diagnoza: {currentScenario?.details}</p>
              </div>
              <button
                onClick={() => {
                  const correlatedLead = leadsData.find(l => l.id === selectedLeadId);
                  if (correlatedLead && onSelectLeadFromGuide) {
                    onSelectLeadFromGuide(correlatedLead);
                  }
                }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-550 text-white text-xs font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-1 cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5" /> Przejdź do pełnej karty audytu
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cold call opening hook */}
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/85 space-y-3 relative">
                <div className="flex justify-between items-center pb-2 border-b border-slate-850">
                  <h4 className="text-xs font-bold text-red-405 uppercase tracking-wider flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-red-500" /> Dedykowany haczyk na pierwszą rozmowę
                  </h4>
                  <button
                    onClick={() => copyToClipboard(currentScenario!.stage1Hook, "hook")}
                    className="p-1 px-2 text-xs text-slate-400 hover:text-indigo-400 bg-slate-900 border border-slate-800 rounded flex items-center gap-1 transition-all cursor-pointer"
                  >
                    {copiedKey === "hook" ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    Copy
                  </button>
                </div>
                <p className="text-xs text-slate-350 leading-relaxed bg-slate-900 p-3.5 rounded border border-slate-850 whitespace-pre-line italic">
                  "{currentScenario?.stage1Hook}"
                </p>
              </div>

              {/* Problems list */}
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/85 space-y-3">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider border-b border-slate-850 pb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-500" /> 3 kluczowe wady technologiczne do wyciągnięcia
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {currentScenario?.problemsToAddress.map((prob, i) => (
                    <li key={i} className="flex gap-2 items-start bg-slate-900/40 p-2.5 rounded border border-slate-850/60">
                      <span className="text-red-400 font-extrabold font-mono">•</span>
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Business propositions */}
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/85 space-y-3">
                <h4 className="text-xs font-bold text-indigo-405 uppercase text-indigo-300 tracking-wider border-b border-slate-850 pb-2">
                  💎 3 dedykowane argumenty rynkowego wzrostu
                </h4>
                <div className="space-y-3">
                  {currentScenario?.arguments.map((arg, i) => (
                    <div key={i} className="bg-slate-900/60 p-3 rounded-lg border border-slate-850">
                      <p className="text-xs font-bold text-slate-100 mb-1">➔ {arg.title}</p>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{arg.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Objections */}
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/85 space-y-3">
                <h4 className="text-xs font-bold text-emerald-450 uppercase text-emerald-400 tracking-wider border-b border-slate-850 pb-2">
                  🛡️ Pokonanie specyficznej obiekcji klienta
                </h4>
                <div className="space-y-2.5">
                  {currentScenario?.customObjections.map((objInfo, i) => (
                    <div key={i} className="space-y-2">
                      <p className="text-xs font-bold text-red-400">Pytanie/Obiekcja: "{objInfo.obj}"</p>
                      <div className="bg-emerald-955/15 p-3.5 rounded-lg border border-emerald-900/20 text-xs italic text-emerald-200 leading-relaxed font-semibold">
                        Odpowiedź: "{objInfo.resp}"
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
