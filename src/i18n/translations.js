// Bilingual text for Netsadr. Add new keys here as more of the site gets
// translated — the Header/Nav and Home page are covered first since that's
// what was requested; Jobs, Institutions, individual listing pages, and the
// ~115 business `desc` fields are NOT yet covered and are a separate,
// larger follow-up (most listings only have `nameAm`, not a translated
// description at all).

export const TRANSLATIONS = {
  en: {
    // Header & Navigation
    brand: 'NetsaDr',
    brandSub: 'netsadr.et',
    navHome: 'Home',
    navJobs: 'Jobs',
    navInstitutions: 'Institutions',
    listFree: '+ List Free',
    liveLabel: 'LIVE',

    // Hero
    heroKicker: "🇪🇹 Butajira's Free Business Directory",
    heroTitlePrefix: 'Find Any Butajira ',
    heroTitleHighlight: 'Business',
    heroTitleSuffix: ', Instantly',
    heroTagline: 'ነፃ ድር — Directory · Jobs · Institutions',
    allCategories: 'All categories',
    searchPlaceholder: 'Search businesses, products, services…',
    searchButton: 'Search',

    // Stats
    statsBusinesses: 'Businesses listed',
    statsCities: 'Cities',
    statsFree: 'To list your business',
    statsFreeLabel: 'Free',

    // Browse
    browseByCity: '📍 BROWSE BY CITY',
    all: 'All',
    browseByCategory: 'Browse by category',

    // Quick categories (only ones explicitly given — others keep existing text)
    catFashion: 'Fashion & Clothing',
    catFood: 'Food & Drink',
    catTech: 'Tech & IT',
    catHomeGifts: 'Home & Gifts',
    catBeauty: 'Beauty & Barber',
    catHotels: 'Hotels',
  },
  am: {
    brand: 'ነጻድር',
    brandSub: 'netsadr.et',
    navHome: 'መነሻ ገጽ',
    navJobs: 'ሥራዎች',
    navInstitutions: 'ተቋማት',
    listFree: '+ በነጻ ያስመዝግቡ',
    liveLabel: 'በቀጥታ',

    heroKicker: '🇪🇹 የቡታጅራ ነጻ የንግድ ማውጫ',
    heroTitlePrefix: 'ማንኛውንም የቡታጅራ ',
    heroTitleHighlight: 'ንግድ',
    heroTitleSuffix: ' በቅጽበት ያግኙ',
    heroTagline: 'ነፃ ድር — ማውጫ · ሥራዎች · ተቋማት',
    allCategories: 'ሁሉም ምድቦች',
    searchPlaceholder: 'ንግዶችን፣ ምርቶችን፣ አገልግሎቶችን ይፈልጉ...',
    searchButton: 'ፈልግ',

    statsBusinesses: 'የተመዘገቡ ንግዶች',
    statsCities: 'ከተማ',
    statsFree: 'ንግድዎን ለማስመዝገብ',
    statsFreeLabel: 'በነጻ',

    browseByCity: '📍 በከተማ ይፈልጉ',
    all: 'ሁሉም',
    browseByCategory: 'በምድብ ይፈልጉ',

    catFashion: 'የፋሽን እና የልብስ መደብሮች',
    catFood: 'ምግብ እና መጠጥ',
    catTech: 'ቴክኖሎጂ እና አይቲ (IT)',
    catHomeGifts: 'የቤት እቃዎች እና ስጦታዎች',
    catBeauty: 'ውበት እና የፀጉር አስተካካይ',
    catHotels: 'ሆቴሎች',
  },
};

// Category labels are stored in English in constants.js (CATEGORIES/LISTINGS)
// since that's what filtering logic matches against. This maps the known
// English labels to Amharic for DISPLAY ONLY — the underlying filter value
// never changes, so switching language never breaks a selected filter.
// Categories not listed here (most of them, for now) just show in English
// even when Amharic is selected — that's a gap, not a bug, until someone
// supplies Amharic names for the rest.
export const CATEGORY_LABEL_AM = {
  'Fashion & Clothing': 'የፋሽን እና የልብስ መደብሮች',
  'Food & Drink': 'ምግብ እና መጠጥ',
  'Tech & IT': 'ቴክኖሎጂ እና አይቲ (IT)',
  'Home & Gifts': 'የቤት እቃዎች እና ስጦታዎች',
  'Beauty & Barber': 'ውበት እና የፀጉር አስተካካይ',
  'Hotels': 'ሆቴሎች',
};

export function categoryLabel(englishLabel, lang) {
  if (lang !== 'am') return englishLabel;
  return CATEGORY_LABEL_AM[englishLabel] || englishLabel;
}

// Amharic versions of the rotating ticker messages in constants.js
// (TICKERS array). Matched by index — if TICKERS in constants.js changes,
// this needs updating too, since there's no shared key between them.
export const TICKERS_AM = [
  'አዲስ ተጀምሯል በቡታጅራ — ንግድዎን በነጻ ያስመዝግቡ',
  'አዲስ፦ ረድኤት ሆቴል ቡታጅራ አሁን በNetsadr.et ላይ ተመዝግቧል',
  'ንግድዎን በነጻ በnetsadr.et ላይ ያስመዝግቡ',
];
