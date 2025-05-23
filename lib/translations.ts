'use client';

import { useLanguage } from './LanguageContext';

export type Language = 'fr' | 'en' | 'de' | 'nl';

// Définition des clés de traduction par section
type NavigationKeys = 'home' | 'domain' | 'cottages' | 'information' | 'reviews' | 'contact';
type FooterKeys = 'termsOfUse' | 'termsOfSale' | 'blog';
type HomeKeys = 'heroTitle' | 'heroSubtitle' | 'discoverButton';
type CommonKeys = 'bookNow' | 'learnMore' | 'contactUs';
type CottagesKeys = 'capacity' | 'surface' | 'equipment' | 'features';
type ReviewsKeys = 'reviewsTitle' | 'leaveReview';
type InformationKeys = 
  | 'infoHeroTitle' 
  | 'infoHeroSubtitle'
  | 'welcomeTitle'
  | 'welcomeText'
  | 'activitiesTitle'
  | 'activitiesSubtitle'
  | 'canoeing'
  | 'canoeingDesc'
  | 'chauvetCave'
  | 'chauvetCaveDesc'
  | 'hiking'
  | 'hikingDesc'
  | 'castle'
  | 'castleDesc'
  | 'lavender'
  | 'lavenderDesc'
  | 'speleology'
  | 'speleologyDesc'
  | 'faqTitle'
  | 'faqSubtitle'
  | 'bookButton'
  | 'viewWebsite';

// Clés de traduction spécifiques au gîte Chateaunette
type ChateaunetteKeys = 
  | 'cottageTitle'
  | 'cottageSubtitle'
  | 'cottageDescription'
  | 'cottageHistoryTitle'
  | 'cottageHistoryText'
  | 'bookStay'
  | 'parking'
  | 'wifi'
  | 'stairs'
  | 'familyRooms'
  | 'nonSmoking'
  | 'terrace'
  | 'finalQuote'
  | 'finalQuoteAuthor';

// Type global pour toutes les clés de traduction
type TranslationKeys = 
  | NavigationKeys 
  | FooterKeys 
  | HomeKeys 
  | CommonKeys 
  | CottagesKeys 
  | ReviewsKeys
  | InformationKeys
  | ChateaunetteKeys;

type Translations = {
  [K in Language]: {
    [T in TranslationKeys]: string;
  };
};

const translations: Translations = {
  fr: {
    // Navigation existante
    home: 'Accueil',
    domain: 'Le Domaine',
    cottages: 'Nos Gîtes',
    information: 'Informations',
    reviews: 'Avis',
    contact: 'Contact',

    // Footer existant
    termsOfUse: 'Conditions d\'utilisation',
    termsOfSale: 'Conditions générales de vente',
    blog: 'Blog',

    // Page d'accueil existante
    heroTitle: 'Le Mas d\'Eylieux',
    heroSubtitle: 'Un domaine d\'exception au Sud de l\'Ardèche',
    discoverButton: 'Nous découvrir',

    // Commun existant
    bookNow: 'Réserver maintenant',
    learnMore: 'En savoir plus',
    contactUs: 'Nous contacter',

    // Gîtes existant
    capacity: 'Capacité',
    surface: 'Superficie',
    equipment: 'Équipements',
    features: 'Points forts',

    // Avis existant
    reviewsTitle: 'Vos Témoignages',
    leaveReview: 'Laissez votre avis',

    // Nouvelles traductions pour la page Informations
    infoHeroTitle: 'DÉCOUVERTES',
    infoHeroSubtitle: 'Une sélection d\'expériences uniques en Ardèche méridionale',
    welcomeTitle: 'Bienvenue en Ardèche',
    welcomeText: 'Le Mas d\'Eylieux se situe sur les hauteurs de Saint Montan, en Ardèche, localisé entre Lyon et Marseille.',
    activitiesTitle: 'ACTIVITÉS À DÉCOUVRIR',
    activitiesSubtitle: 'Explorez les merveilles de notre région',
    
    // Activités
    canoeing: 'DESCENTE DES GORGES DE L\'ARDÈCHE',
    canoeingDesc: 'Parcourez les majestueuses Gorges de l\'Ardèche en canoë ou kayak avec vos proches pour une aventure inoubliable.',
    chauvetCave: 'LA GROTTE CHAUVET',
    chauvetCaveDesc: 'Explorez la Grotte Chauvet, classée au patrimoine mondial de l\'UNESCO, et émerveillez-vous devant ses peintures préhistoriques exceptionnelles.',
    hiking: 'RANDONNÉES PROCHE DU MAS D\'EYLIEUX',
    hikingDesc: 'Évadez-vous en pleine nature ardéchoise en suivant des sentiers pittoresques à travers des paysages variés.',
    castle: 'CHATEAU MEDIEVAL DE SAINT MONTAN',
    castleDesc: 'Partez à la découverte d\'un château fortifié. Explorez ses remparts, ses ruelles et plongez dans l\'histoire du village.',
    lavender: 'LE MUSÉE DE LA LAVANDE',
    lavenderDesc: 'Découvrez les secrets de la lavande au Musée de la Lavande et plongez dans l\'histoire de cette plante emblématique de la Provence.',
    speleology: 'SPÉLÉOLOGIE EN ARDÈCHE',
    speleologyDesc: 'Partez à la découverte des grottes ardéchoises et explorez leurs merveilles souterraines en toute sécurité.',

    // FAQ
    faqTitle: 'Questions Fréquentes',
    faqSubtitle: 'Tout ce que vous devez savoir pour votre séjour à Saint-Montan',

    // Boutons
    bookButton: 'Réserver votre activité',
    viewWebsite: 'Visitez le site internet',

    // Traductions spécifiques au gîte Chateaunette
    cottageTitle: 'Chateaunette',
    cottageSubtitle: 'Un gîte aux grands volumes',
    cottageDescription: 'Le gîte Châteaunette est le plus grand des hébergements du Mas. Doté de deux chambres, d\'une mezzanine avec lit, et d\'une grande cuisine équipée, il allie charme authentique et confort moderne. La terrasse, orientée Est, invite à des repas conviviaux avec vue sur la nature environnante.',
    cottageHistoryTitle: 'L\'Histoire de Chateaunette',
    cottageHistoryText: 'Lorsque nos premiers hôtes découvrirent ce gîte, ils le baptisèrent "Châteaunette", tant les grands espaces ainsi que la hauteur sous plafond leur rappelaient un petit château. Spacieux et lumineux, avec ses deux chambres, son salon et sa mezzanine, il offre un véritable espace de vie où le confort moderne côtoie l\'authenticité du mas.',
    bookStay: 'Réserver votre séjour',
    parking: 'Parking privé',
    wifi: 'Connexion Wi-Fi gratuite',
    stairs: 'Escaliers',
    familyRooms: 'Chambres familiales',
    nonSmoking: 'Logement non-fumeurs',
    terrace: 'Terrasse',
    finalQuote: 'Le bonheur réside dans les petites choses, et souvent dans le calme des pierres anciennes.',
    finalQuoteAuthor: '~ Antoine de Saint-Exupéry, Le Petit Prince',
  },
  en: {
    // Existing translations...
    home: 'Home',
    domain: 'The Domain',
    cottages: 'Our Cottages',
    information: 'Information',
    reviews: 'Reviews',
    contact: 'Contact',
    termsOfUse: 'Terms of Use',
    termsOfSale: 'Terms of Sale',
    blog: 'Blog',
    heroTitle: 'Le Mas d\'Eylieux',
    heroSubtitle: 'An exceptional estate in Southern Ardèche',
    discoverButton: 'Discover more',
    bookNow: 'Book now',
    learnMore: 'Learn more',
    contactUs: 'Contact us',
    capacity: 'Capacity',
    surface: 'Surface area',
    equipment: 'Equipment',
    features: 'Features',
    reviewsTitle: 'Your Reviews',
    leaveReview: 'Leave a review',

    // New translations for Information page
    infoHeroTitle: 'DISCOVERIES',
    infoHeroSubtitle: 'A selection of unique experiences in Southern Ardèche',
    welcomeTitle: 'Welcome to Ardèche',
    welcomeText: 'Le Mas d\'Eylieux is located in the heights of Saint Montan, in Ardèche, between Lyon and Marseille.',
    activitiesTitle: 'ACTIVITIES TO DISCOVER',
    activitiesSubtitle: 'Explore the wonders of our region',
    
    // Activities
    canoeing: 'ARDÈCHE GORGES DESCENT',
    canoeingDesc: 'Navigate the majestic Ardèche Gorges by canoe or kayak with your loved ones for an unforgettable adventure.',
    chauvetCave: 'CHAUVET CAVE',
    chauvetCaveDesc: 'Explore the Chauvet Cave, a UNESCO World Heritage site, and marvel at its exceptional prehistoric paintings.',
    hiking: 'HIKING NEAR MAS D\'EYLIEUX',
    hikingDesc: 'Escape into the Ardèche wilderness following picturesque trails through varied landscapes.',
    castle: 'MEDIEVAL CASTLE OF SAINT MONTAN',
    castleDesc: 'Discover a fortified castle. Explore its ramparts, streets and dive into the village\'s history.',
    lavender: 'THE LAVENDER MUSEUM',
    lavenderDesc: 'Discover the secrets of lavender at the Lavender Museum and delve into the history of this emblematic Provence plant.',
    speleology: 'CAVING IN ARDÈCHE',
    speleologyDesc: 'Discover the Ardèche caves and explore their underground wonders safely.',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Everything you need to know for your stay in Saint-Montan',

    // Buttons
    bookButton: 'Book your activity',
    viewWebsite: 'Visit website',

    // Traductions spécifiques au gîte Chateaunette
    cottageTitle: 'Chateaunette',
    cottageSubtitle: 'A spacious cottage',
    cottageDescription: 'The Chateaunette cottage is the largest accommodation at the Mas. With two bedrooms, a mezzanine with a bed, and a fully equipped kitchen, it combines authentic charm and modern comfort. The east-facing terrace invites you to enjoy convivial meals with a view of the surrounding nature.',
    cottageHistoryTitle: 'The History of Chateaunette',
    cottageHistoryText: 'When our first guests discovered this cottage, they named it "Chateaunette," as the spaciousness and high ceilings reminded them of a small castle. Spacious and bright, with its two bedrooms, living room, and mezzanine, it offers a true living space where modern comfort meets the authenticity of the mas.',
    bookStay: 'Book your stay',
    parking: 'Private parking',
    wifi: 'Free Wi-Fi',
    stairs: 'Stairs',
    familyRooms: 'Family rooms',
    nonSmoking: 'Non-smoking accommodation',
    terrace: 'Terrace',
    finalQuote: 'Happiness lies in the little things, and often in the calm of ancient stones.',
    finalQuoteAuthor: '~ Antoine de Saint-Exupéry, The Little Prince',
  },
  de: {
    // Navigation
    home: 'Startseite',
    domain: 'Das Anwesen',
    cottages: 'Unsere Ferienhäuser',
    information: 'Informationen',
    reviews: 'Bewertungen',
    contact: 'Kontakt',

    // Footer
    termsOfUse: 'Nutzungsbedingungen',
    termsOfSale: 'Allgemeine Geschäftsbedingungen',
    blog: 'Blog',

    // Homepage
    heroTitle: 'Le Mas d\'Eylieux',
    heroSubtitle: 'Ein außergewöhnliches Anwesen im Süden der Ardèche',
    discoverButton: 'Mehr entdecken',

    // Common
    bookNow: 'Jetzt buchen',
    learnMore: 'Mehr erfahren',
    contactUs: 'Kontaktieren Sie uns',

    // Cottages
    capacity: 'Kapazität',
    surface: 'Fläche',
    equipment: 'Ausstattung',
    features: 'Besonderheiten',

    // Reviews
    reviewsTitle: 'Ihre Bewertungen',
    leaveReview: 'Bewertung schreiben',

    // Information page
    infoHeroTitle: 'ENTDECKUNGEN',
    infoHeroSubtitle: 'Eine Auswahl einzigartiger Erlebnisse in der südlichen Ardèche',
    welcomeTitle: 'Willkommen in der Ardèche',
    welcomeText: 'Le Mas d\'Eylieux liegt in den Höhen von Saint Montan, in der Ardèche, zwischen Lyon und Marseille.',
    activitiesTitle: 'AKTIVITÄTEN ZU ENTDEKKEN',
    activitiesSubtitle: 'Erkunden Sie die Wunder unserer Region',
    
    // Activities
    canoeing: 'ARDÈCHE-SCHLUCHTEN ABFAHRT',
    canoeingDesc: 'Befahren Sie die majestätischen Ardèche-Schluchten mit Kanu oder Kajak mit Ihren Liebsten für ein unvergessliches Abenteuer.',
    chauvetCave: 'CHAUVET-HÖHLE',
    chauvetCaveDesc: 'Entdecken Sie die Chauvet-Höhle, ein UNESCO-Weltkulturerbe, und bewondern Sie ihre außergewöhnlichen prähistorischen Malereien.',
    hiking: 'WANDERN IN DER NÄHE VON MAS D\'EYLIEUX',
    hikingDesc: 'Entfliehen Sie in die Ardèche-Wildnis und folgen Sie malerischen Pfaden durch abwechslungsreiche Landschaften.',
    castle: 'MITTELALTERLICHE BURG VON SAINT MONTAN',
    castleDesc: 'Entdecken Sie eine befestigte Burg. Erkunden Sie ihre Festungsmauern, Gassen und tauchen Sie in die Geschichte des Dorfes ein.',
    lavender: 'DAS LAVENDELMUSEUM',
    lavenderDesc: 'Entdecken Sie die Geheimnisse des Lavendels im Lavendelmuseum und tauchen Sie in die Geschichte dieser emblematischen provenzalischen Pflanze ein.',
    speleology: 'HÖHLENFORSCHUNG IN DER ARDÈCHE',
    speleologyDesc: 'Entdecken Sie die Höhlen der Ardèche und erkunden Sie ihre unterirdischen Wunder in Sicherheit.',

    // FAQ
    faqTitle: 'Häufig gestellte Fragen',
    faqSubtitle: 'Alles, was Sie für Ihren Aufenthalt in Saint-Montan wissen müssen',

    // Buttons
    bookButton: 'Aktivität buchen',
    viewWebsite: 'Website besuchen',

    // Chateaunette specific translations
    cottageTitle: 'Chateaunette',
    cottageSubtitle: 'Ein geräumiges Ferienhaus',
    cottageDescription: 'Das Chateaunette ist die größte Unterkunft im Mas. Mit zwei Schlafzimmern, einer Galerie mit Bett und einer voll ausgestatteten Küche vereint es authentischen Charme und modernen Komfort. Die nach Osten ausgerichtete Terrasse lädt zu geselligen Mahlzeiten mit Blick auf die umgebende Natur ein.',
    cottageHistoryTitle: 'Die Geschichte von Chateaunette',
    cottageHistoryText: 'Als unsere ersten Gäste dieses Haus entdeckten, nannten sie es "Chateaunette", da die Weite und die hohen Decken sie an ein kleines Schloss erinnerten. Geräumig und hell, mit zwei Schlafzimmern, einem Wohnzimmer und einer Galerie, bietet es einen echten Wohnraum, in dem moderner Komfort auf die Authentizität des Mas trifft.',
    bookStay: 'Aufenthalt buchen',
    parking: 'Privatparkplatz',
    wifi: 'Kostenloses WLAN',
    stairs: 'Treppen',
    familyRooms: 'Familienzimmer',
    nonSmoking: 'Nichtraucherunterkunft',
    terrace: 'Terrasse',
    finalQuote: 'Das Glück liegt in den kleinen Dingen und oft in der Ruhe alter Steine.',
    finalQuoteAuthor: '~ Antoine de Saint-Exupéry, Der kleine Prinz',
  },
  nl: {
    // Existing translations...
    home: 'Home',
    domain: 'Het Domein',
    cottages: 'Onze Gîtes',
    information: 'Informatie',
    reviews: 'Beoordelingen',
    contact: 'Contact',
    termsOfUse: 'Gebruiksvoorwaarden',
    termsOfSale: 'Verkoopvoorwaarden',
    blog: 'Blog',
    heroTitle: 'Le Mas d\'Eylieux',
    heroSubtitle: 'Een uitzonderlijk landgoed in Zuid-Ardèche',
    discoverButton: 'Ontdek meer',
    bookNow: 'Nu boeken',
    learnMore: 'Meer informatie',
    contactUs: 'Neem contact op',
    capacity: 'Capaciteit',
    surface: 'Oppervlakte',
    equipment: 'Uitrusting',
    features: 'Kenmerken',
    reviewsTitle: 'Uw Beoordelingen',
    leaveReview: 'Schrijf een beoordeling',

    // New translations for Information page
    infoHeroTitle: 'ONTDEKKINGEN',
    infoHeroSubtitle: 'Een selectie van unieke ervaringen in Zuid-Ardèche',
    welcomeTitle: 'Welkom in de Ardèche',
    welcomeText: 'Le Mas d\'Eylieux ligt in de heuvels van Saint Montan, in de Ardèche, tussen Lyon en Marseille.',
    activitiesTitle: 'ACTIVITEITEN OM TE ONTDEKKEN',
    activitiesSubtitle: 'Verken de wonderen van onze regio',
    
    // Activities
    canoeing: 'AFDALING VAN DE ARDÈCHE KLOVEN',
    canoeingDesc: 'Vaar door de majestueuze Ardèche-kloven per kano of kajak met uw dierbaren voor een onvergetelijk avontuur.',
    chauvetCave: 'CHAUVET GROT',
    chauvetCaveDesc: 'Verken de Chauvet-grot, UNESCO-werelderfgoed, en bewonder de uitzonderlijke prehistorische schilderingen.',
    hiking: 'WANDELEN BIJ MAS D\'EYLIEUX',
    hikingDesc: 'Ontsnap in de Ardèche-wildernis via schilderachtige paden door gevarieerde landschappen.',
    castle: 'MIDDELEEUWS KASTEEL VAN SAINT MONTAN',
    castleDesc: 'Ontdek een versterkt kasteel. Verken de vestingmuren, straatjes en duik in de geschiedenis van het dorp.',
    lavender: 'HET LAVENDELMUSEUM',
    lavenderDesc: 'Ontdek de geheimen van lavendel in het Lavendelmuseum en verdiep je in de geschiedenis van deze emblematische Provençaalse plant.',
    speleology: 'GROTVERKENNING IN DE ARDÈCHE',
    speleologyDesc: 'Ontdek de grotten van de Ardèche en verken hun ondergrondse wonderen in alle veiligheid.',

    // FAQ
    faqTitle: 'Veelgestelde Vragen',
    faqSubtitle: 'Alles wat u moet weten voor uw verblijf in Saint-Montan',

    // Buttons
    bookButton: 'Boek uw activiteit',
    viewWebsite: 'Bezoek website',

    // Traductions spécifiques au gîte Chateaunette
    cottageTitle: 'Chateaunette',
    cottageSubtitle: 'Een ruim vakantiehuis',
    cottageDescription: 'De Chateaunette is de grootste accommodatie van het Mas. Met twee slaapkamers, een mezzanine met een bed en een volledig uitgeruste keuken combineert het authentieke charme en modern comfort. Het oostelijk gelegen terras nodigt uit voor gezellige maaltijden met uitzicht op de omringende natuur.',
    cottageHistoryTitle: 'De Geschiedenis van Chateaunette',
    cottageHistoryText: 'Toen onze eerste gasten dit huisje ontdekten, noemden ze het "Chateaunette", omdat de ruimte en hoge plafonds hen deden denken aan een klein kasteel. Ruim en licht, met twee slaapkamers, een woonkamer en een mezzanine, biedt het een echte leefruimte waar modern comfort samenkomt met de authenticiteit van het mas.',
    bookStay: 'Boek uw verblijf',
    parking: 'Privéparking',
    wifi: 'Gratis Wi-Fi',
    stairs: 'Trappen',
    familyRooms: 'Familiekamers',
    nonSmoking: 'Niet-roken accommodatie',
    terrace: 'Terras',
    finalQuote: 'Geluk schuilt in de kleine dingen, en vaak in de rust van oude stenen.',
    finalQuoteAuthor: '~ Antoine de Saint-Exupéry, De Kleine Prins',
  }
};

export const useTranslation = () => {
  const { language } = useLanguage();
  
  return (key: TranslationKeys): string => {
    return translations[language][key];
  };
};