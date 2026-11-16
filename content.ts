/**
 * Alle zichtbare tekst en feiten van deze demo.
 * Slug "vanmourik-demo" is de data-demo van de Sleads-analytics en blijft staan.
 * Niets verzinnen: geen KvK, btw, openingstijden, socials, WhatsApp, keurmerken of reviews.
 */
export const content = {
  slug: "vanmourik-demo",

  company: {
    name: "Van Mourik Installatietechniek",
    motto: "Van Mourik Installatie techniek: voor meer dan warmte!",
    mottoLead: "Hieruit is ons motto gekomen:",
    street: "Tonnendijk 114",
    postalCode: "7681 BR",
    city: "Vroomshoop",
    email: "contact@mourikvan.nl",
    logo: "/logo.png",
    phones: [
      {
        label: "Telefoon",
        short: "Tel.",
        display: "0546-641662",
        href: "tel:+31546641662",
      },
      {
        label: "Mobiel",
        short: "Mob.",
        display: "06-53339778",
        href: "tel:+31653339778",
      },
    ],
  },

  colors: {
    ink: "#0A0A0A",
    papier: "#F6F1EA",
    vlak: "#EDE6DC",
    wit: "#FFFFFF",
    oranje: "#E0953A",
    link: "#7A4510",
  },

  seo: {
    title: "Van Mourik Installatietechniek in Vroomshoop",
    description:
      "Van Mourik Installatietechniek in Vroomshoop is gespecialiseerd in de aanleg en reparatie van verwarming, CV, dakwerk, sanitair en duurzaamheid. Meer dan twintig jaar ervaring. Vrijblijvend een offerte aanvragen.",
    lang: "nl",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Verwarming", href: "/verwarming" },
    { label: "Sanitair", href: "/sanitair" },
    { label: "Dakwerk", href: "/dakwerk" },
    { label: "Duurzaamheid", href: "/duurzaamheid" },
    { label: "Doe het zelf", href: "/doe-het-zelf" },
    { label: "Contact", href: "/contact" },
    { label: "Offerte", href: "/offerte" },
  ],

  home: {
    title: "Welkom bij Van Mourik Installatietechniek",
    intro:
      "Van Mourik Installatietechniek in Vroomshoop is gespecialiseerd in de aanleg en reparatie van verwarming, CV, dakwerk, sanitair en duurzaamheid. Wij bieden u advies op maat, kwaliteit, flexibiliteit en vakmanschap. Dit kunnen wij u bieden door meer dan twintig jaar ervaring op alle fronten van een nieuwbouw of juist verbouw.",
    experience: "Meer dan twintig jaar ervaring.",
    look: "Kijk gerust rond om een indruk te krijgen van onze specialiteiten.",
    invite:
      "Mocht u vragen hebben of vrijblijvend een offerte willen aanvragen, dan kunt u te allen tijde contact met ons opnemen.",
    hub: "warmte",
    stripAlt:
      "Smalle strook: links een badkamer met douche en wastafel, in het midden een dakraam in een pannendak, rechts een paneelradiator.",
    fields: [
      {
        code: "01 VERWARMING",
        text: "Aanleg en reparatie van verwarming en CV.",
        href: "/verwarming",
        tone: "papier" as const,
      },
      {
        code: "02 SANITAIR",
        text: "Waterontharders van BWT. Zijdezacht water.",
        href: "/sanitair",
        tone: "vlak" as const,
      },
      {
        code: "03 DAKWERK",
        text: "Aanleg en reparatie van dakwerk.",
        href: "/dakwerk",
        tone: "vlak" as const,
      },
      {
        code: "04 DUURZAAM",
        text: "Het Hybride Wonen van AWB.",
        href: "/duurzaamheid",
        tone: "papier" as const,
      },
    ],
  },

  verwarming: {
    title: "Verwarming",
    description:
      "Aanleg en reparatie van verwarming en CV door Van Mourik Installatietechniek in Vroomshoop.",
    body: "Van Mourik Installatietechniek in Vroomshoop is gespecialiseerd in de aanleg en reparatie van verwarming en CV. Wij bieden u advies op maat, kwaliteit, flexibiliteit en vakmanschap. Dit kunnen wij u bieden door meer dan twintig jaar ervaring op alle fronten van een nieuwbouw of juist verbouw.",
  },

  sanitair: {
    title: "Sanitair",
    description:
      "Sanitair en de waterontharders van BWT bij Van Mourik Installatietechniek in Vroomshoop.",
    bridge:
      "Van Mourik Installatietechniek is gespecialiseerd in de aanleg en reparatie van sanitair. Hieronder staat de tekst over de waterontharders van BWT.",
    heading: "Waterontharders van BWT",
    intro:
      "Met de waterontharders van BWT zet u hard water om in zijdezacht water. Minder kalk in uw leidingwater zorgt voor heel veel voordelen:",
    benefits: [
      "Geen kalk op sanitair en kranen",
      "Uw ramen en auto streeploos wassen",
      "Een zachtere huid en glanzend haar",
      "Huidverbetering voor personen met eczeem en psoriasis",
      "Minder gebruik van detergenten en zeep",
      "Een zachte was, kleuren blijven langer mooi",
      "Bescherming van uw huishoudelijke apparatuur en leidingen",
      "Daling van uw energiekosten",
    ],
    close: "BWT-waterontharders maken het verschil voor uw hele gezin!",
    caption: "Foto's van BWT.",
    photoAlt:
      "Blauwe BWT-waterontharder met een zak zout en een filter, bij een koperen leidingset.",
    photoAltSmall: "Blauwe BWT-waterontharder. Iemand zit op de kap.",
  },

  dakwerk: {
    title: "Dakwerk",
    description:
      "Aanleg en reparatie van dakwerk door Van Mourik Installatietechniek in Vroomshoop.",
    body: "Van Mourik Installatietechniek in Vroomshoop is gespecialiseerd in de aanleg en reparatie van dakwerk, naast verwarming, CV, sanitair en duurzaamheid.",
    caption: "Dakraam in een pannendak, uit de kopstrook van de website.",
    alt: "Dakraam in een pannendak.",
  },

  duurzaamheid: {
    title: "Duurzaamheid",
    description:
      "Tekst van AWB over Het Hybride Wonen en de GeniaHybrid, op de site van Van Mourik Installatietechniek.",
    bridge:
      "Duurzaamheid hoort bij de specialisatie van Van Mourik Installatietechniek, naast verwarming, CV, dakwerk en sanitair. De tekst hieronder is van AWB en gaat over Het Hybride Wonen en de GeniaHybrid.",
    awbTitle: "AWB introduceert Het Hybride Wonen",
    lead: "Met de perfecte balans tussen gas en elektra bespaart u het meest.",
    intro:
      "Met het Hybride Wonen biedt AWB u de optimale balans tussen gas en elektra. Daarmee kan er aanzienlijk op energielasten bespaard worden. De GeniaHybrid is een totaalsysteem dat bestaat uit een lucht/water warmtepomp en een HR-ketel. Het hele systeem wordt centraal aangestuurd door de unieke Dynamische Systeem Intelligentie (DSI). Met de optimale balans tussen warmtepomp en ketel kan het voordeel oplopen tot maar liefst 35% besparing op primaire energie en CO2-emissie. Voor woningbouwverenigingen levert dit een bijdrage op in de energielabelverbetering.",
    benefitsTitle: "Voordelen",
    benefits: [
      "Dé duurzame oplossing in bestaande bouw",
      "Labelverbetering; bespaar tot 35% op primaire energie en CO2",
      "DSI (Dynamische Systeem Intelligentie) voor een perfecte balans tussen gas en elektra",
      "Eén professionele partner voor tevens Technisch Project Advies & Services",
      "Totaal comfortsysteem; CV, tapwater en koeling",
    ],
    techniqueTitle: "De hybride techniek",
    technique:
      "De GeniaHybrid combineert twee technieken: de conventionele HR-ketel en de lucht/water warmtepomp. De HR-ketel bereidt het tapwater en de ruimteverwarming wordt met name gerealiseerd door de duurzame lucht/water warmtepomp. De ventilator in de warmtepomp zuigt buitenlucht aan. Hieruit haalt de warmtepomp energie in de vorm van warmte. Deze warmte wordt middels een compressor naar een hoger energieniveau gebracht en via een platenwisselaar overgedragen aan het CV-systeem. Een extra hydraulische unit maakt de verbinding tussen de warmtepomp en het CV-systeem. De Dynamische Systeem Intelligentie berekent en stuurt het totale systeem op wat het meest energie- en kostenefficiënt is: gas via de HR-ketel, of lucht (en elektra) via de warmtepomp.",
    dsiTitle: "De Dynamische Systeem Intelligentie (DSI)",
    dsi: "De DSI maakt continu een efficiëntieberekening op basis van de COP en de ingegeven energieprijzen. Elke 10 minuten kan er geschakeld worden tussen beide systemen. Voor de gemiddelde „zachte” temperaturen wordt de warmtebehoefte volledig verzorgd door de warmtepomp. Voor de lage temperaturen schakelt het systeem tussen de ketel en de warmtepomp op basis van de DSI. Wanneer de opbrengst van de warmtepomp niet toereikend is, door extreem lage buitentemperaturen, komt ook de ketel in bedrijf.",
    closing:
      "Met het Hybride Wonen biedt AWB u de optimale balans tussen gas en elektra. Daarmee kan er aanzienlijk op energielasten bespaard worden en profiteert de eindgebruiker van totaalcomfort in de woning.",
    caption: "Foto van AWB bij Het Hybride Wonen.",
    alt: "Fabrikantfoto van AWB: een lucht-waterwarmtepomp, een binnenunit, een HR-ketel en een man met een balans tussen een vlam en een stekker.",
  },

  doeHetZelf: {
    title: "Doe het zelf",
    description:
      "Doe het zelf: neem contact op met Van Mourik Installatietechniek en praat het door.",
    body: "Hebt u een vraag over iets wat u zelf wilt doen, dan praten wij dat met u door. Bel of mail ons. U kunt ook vrijblijvend een offerte aanvragen.",
  },

  contact: {
    title: "Contact",
    description:
      "Contact met Van Mourik Installatietechniek, Tonnendijk 114, 7681 BR Vroomshoop. Telefoon 0546-641662, mobiel 06-53339778, contact@mourikvan.nl.",
    intro:
      "U kunt te allen tijde contact met ons opnemen, voor een vraag of voor een vrijblijvende offerte.",
  },

  offerte: {
    title: "Offerte",
    description:
      "Vrijblijvend een offerte aanvragen bij Van Mourik Installatietechniek in Vroomshoop.",
    intro: "Vraag vrijblijvend een offerte aan.",
    phonesLead: "Liever even bellen? Dat kan ook, te allen tijde.",
  },

  form: {
    note: "Naam, telefoon en bericht zijn verplicht. Er gaat niets naar een server. De knop opent uw e-mailprogramma met een bericht aan contact@mourikvan.nl, beginnend met: Goedendag,",
    naam: "Naam",
    telefoon: "Telefoon",
    email: "E-mail",
    emailOptional: "niet verplicht",
    bericht: "Bericht",
    contactSubject: "Bericht via de website",
    contactSubmit: "Bericht openen in e-mail",
    offerteSubject: "Offerteaanvraag",
    offerteSubmit: "Offerte openen in e-mail",
  },

  privacy: {
    title: "Privacy",
    description:
      "Privacy van deze conceptwebsite: cookieloze meting, geen formulier op een server.",
    paragraphs: [
      "Dit is een conceptwebsite, gemaakt door Sleads voor Van Mourik Installatietechniek. Het is geen pagina uit de administratie van het bedrijf, en er staan hier geen juridische claims op die het bedrijf niet zelf heeft gepubliceerd.",
      "De site plaatst geen cookies. Sleads meet een bezoek cookieloos, alleen om te zien of dit concept bekeken wordt. Er is geen account. Formulieren slaan niets op: een knop opent het e-mailprogramma op uw apparaat, gericht aan contact@mourikvan.nl.",
      "Een vraag over het werk stelt u aan Van Mourik Installatietechniek. Een vraag over deze conceptsite kunt u stellen aan Sleads.",
    ],
  },

  notFound: {
    title: "Deze pagina bestaat niet",
    body: "Het adres klopt niet, of de pagina is er niet. Ga terug naar de startpagina, of neem contact op.",
    home: "Naar de startpagina",
    contact: "Contact",
  },

  ui: {
    skip: "Naar inhoud",
    menu: "Menu",
    close: "Sluit",
    call: "Bellen",
    barQuote: "Offerte",
    quote: "Offerte aanvragen",
    mobileMenu: "Mobiel menu",
    mainMenu: "Hoofdmenu",
    privacy: "Privacy",
    concept: "Concept door Sleads",
    sleads: "https://sleads.nl",
  },
};

export type Content = typeof content;
