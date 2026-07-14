// ── Brand Colors ─────────────────────────────────────────────
export const C = {
  green:      '#1D9E75',
  greenDark:  '#0F6E56',
  greenLight: '#E1F5EE',
  amber:      '#EF9F27',
  charcoal:   '#2C2C2A',
  gold:       '#C9A84C',
  black:      '#1A1A18',
};

// ── Social Links ─────────────────────────────────────────────
export const SOCIALS = [
  { label: 'Facebook',  handle: 'netsadr',  url: 'https://facebook.com/netsadr',   icon: 'fb' },
  { label: 'Instagram', handle: 'netsa_dr', url: 'https://instagram.com/netsa_dr', icon: 'ig' },
  { label: 'TikTok',    handle: 'netsa_dr', url: 'https://tiktok.com/@netsa_dr',   icon: 'tt' },
  { label: 'Telegram',  handle: 'netsadr',  url: 'https://t.me/netsadr',           icon: 'tg' },
];

// ── Contact ───────────────────────────────────────────────────
export const CONTACT = {
  phone:    '+251 931 631 332',
  email:    'elias.netsadr@gmail.com',
  location: 'Butajira, Ethiopia',
  domainEt: 'netsadr.et',
  domainCom:'netsadr.com',
  founder:  'Elias Sisay',
};

// ── Categories ────────────────────────────────────────────────
// Counts are computed live from LISTINGS in Home.jsx — never hardcode
// numbers here. A real "3" is more credible than a fake "3,240" the
// moment a visitor scrolls past your actual listings.
export const CATEGORIES = [
  { icon: '🍽', label: 'Food & Drink'      },
  { icon: '🏨', label: 'Hotels'            },
  { icon: '👗', label: 'Fashion & Clothing'},
  { icon: '📸', label: 'Photo & Video'     },
  { icon: '🏍', label: 'Automotive & Parts'},
  { icon: '🎁', label: 'Home & Gifts'      },
  { icon: '🛒', label: 'Grocery & Bakery'  },
  { icon: '💇', label: 'Beauty & Barber'   },
  { icon: '🌾', label: 'Agriculture'       },
  { icon: '🏗', label: 'Construction'      },
  { icon: '🏥', label: 'Healthcare'        },
  { icon: '🏦', label: 'Banks & Finance'   },
  { icon: '🏠', label: 'Real Estate'       },
  { icon: '📦', label: 'Wholesale & B2B'   },
  { icon: '🎓', label: 'Education'         },
  { icon: '💻', label: 'Tech & IT'         },
  { icon: '🚚', label: 'Transport'         },
];

// ── Institutions (kept separate from the paid business directory) ──
// Small deliberate test set — churches, mosques, gov/utility offices.
// This is not the core product and doesn't generate revenue. Watch
// whether people actually click these before adding more.
// Shape matches LISTINGS (cat/rating/reviews/badge/tabs) so the shared
// ListingDetail page renders correctly instead of hitting undefined
// fields. `type` is kept as the semantic label; `cat` mirrors it for
// display. rating/reviews are 0 until real data exists — don't invent
// numbers here either. phone is blank until you collect real ones;
// ListingDetail hides the Call/WhatsApp buttons when phone is empty.
export const INSTITUTIONS = [
  { id:101, name:'Butajira Ethiopian Orthodox Church',           type:'Church',     cat:'Church',     city:'Butajira', emoji:'⛪', rating:0, reviews:0, badge:'new', tabs:[], phone:'', desc:'' },
  { id:102, name:'Butajira Grand Mosque',                        type:'Mosque',     cat:'Mosque',     city:'Butajira', emoji:'🕌', rating:0, reviews:0, badge:'new', tabs:[], phone:'', desc:'' },
  { id:103, name:'Butajira Water Supply Office',                 type:'Utility',    cat:'Utility',    city:'Butajira', emoji:'🚰', rating:0, reviews:0, badge:'new', tabs:[], phone:'', desc:'' },
  { id:104, name:'Ethiopian Electric Utility – Butajira Branch', type:'Utility',    cat:'Utility',    city:'Butajira', emoji:'⚡', rating:0, reviews:0, badge:'new', tabs:[], phone:'', desc:'' },
  { id:105, name:'Butajira Woreda Administration Office',        type:'Government', cat:'Government', city:'Butajira', emoji:'🏛', rating:0, reviews:0, badge:'new', tabs:[], phone:'', desc:'' },
];

// ── Cities ────────────────────────────────────────────────────
// Butajira only, matching current scope. Add a city here only once
// you're actually accepting and publishing listings from it.
export const CITIES = ['Butajira'];

// ── Ticker messages ───────────────────────────────────────────
// Keep these true. Swap in real listing names as you seed — do not
// put fake counts or invented activity back here.
export const TICKERS = [
  'Just launched in Butajira — list your business free',
  'New: Rediet Hotel Butajira now listed on Netsadr.et',
  'Register your business free on netsadr.et',
];

// ── Sample Listings ───────────────────────────────────────────
// Butajira only, matching actual launch scope. Add your real seeded
// listings here as you collect them — don't add other cities until
// you're actually expanding there.
export const LISTINGS = [
  { id:10, name:'Rediet Hotel Butajira',         cat:'Hotels', city:'Butajira', emoji:'🏨', rating:4, reviews:22, badge:'verified', tabs:['featured','toprated'], phone:'+251461150005', desc:'The best known hotel in Butajira. Restaurant, bar, conference hall and WiFi.' },
  { id:11, name:'Butajira Bright Hotel',         cat:'Hotels', city:'Butajira', emoji:'🌟', rating:4, reviews:14, badge:'new',      tabs:['new','featured'],       phone:'+251461150564', desc:'Comfortable hotel with bar, restaurant and parking in Butajira.' },
  { id:12, name:'Kaf Hotel Butajira',            cat:'Hotels', city:'Butajira', emoji:'🏩', rating:3, reviews:9,  badge:'new',      tabs:['new'],                   phone:'+251461150443', desc:'Budget friendly hotel on Addis–Arba Minch road, Butajira.' },
  { id:13, name:'Yadi Pictures', cat:'Photo & Video', city:'Butajira', emoji:'📸', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251912112633', desc:'Photo studio — photos and video for weddings, birthdays, and other ceremonies. Near Zebidar Building.' },
  { id:14, name:'Time Café', cat:'Food & Drink', city:'Butajira', emoji:'☕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251977212891', desc:'Café service. Near Guzolma Building.' },
  { id:15, name:'Danayit Café', cat:'Food & Drink', city:'Butajira', emoji:'☕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251984192223', desc:'Café service. Near Guzolma Building.' },
  { id:16, name:'Beya Motor Byscle', cat:'Automotive & Parts', city:'Butajira', emoji:'🏍', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251925585155', desc:'Motorcycle spare parts. Near Mars tower.' },
  { id:17, name:'Amu Home Collection', cat:'Home & Gifts', city:'Butajira', emoji:'🎁', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251912434268', desc:'Home goods and household items. Near Mars tower.' },
  { id:18, name:'Landa Brand', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251964255730', desc:'Trousers, t-shirts, and other clothing. Near Mars tower.' },
  { id:19, name:'Beki 12 Pictures', cat:'Photo & Video', city:'Butajira', emoji:'📸', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251964090690', desc:'Photo studio — photos and video for weddings, birthdays, and other ceremonies. Near Guzolma Building.' },
  { id:20, name:'Redu Collection', cat:'Home & Gifts', city:'Butajira', emoji:'🎁', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911944743', desc:'Home goods and household items. Near Mars tower.' },
  { id:21, name:'Surprise Gift', cat:'Home & Gifts', city:'Butajira', emoji:'🎁', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Gift shop. Near Mars tower.' },
  { id:22, name:'Zola Gift', cat:'Home & Gifts', city:'Butajira', emoji:'🎁', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251929097934', desc:'Gift shop. Near Guzolma Building.' },
  { id:23, name:'Muler Bar and Restaurant', cat:'Food & Drink', city:'Butajira', emoji:'🍽', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251909167909', desc:'Bar and restaurant. Near Zebidar Building.' },
  { id:24, name:'Shewaber Restaurant', cat:'Food & Drink', city:'Butajira', emoji:'🍽', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251912743595', desc:'Restaurant. Near Zebidar Building.' },
  { id:25, name:'Jenber Restaurant', cat:'Food & Drink', city:'Butajira', emoji:'🍽', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Restaurant. Near Zebidar Building.' },
  { id:26, name:'Rak Sanitary', cat:'Construction', city:'Butajira', emoji:'🚿', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251916839718', desc:'Sanitary ware and electrical supplies. Near Zebidar Building.' },
  { id:27, name:'Terefe Hotel', cat:'Hotels', city:'Butajira', emoji:'🏨', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Hotel.' },
  { id:28, name:'Alem Hospital', cat:'Healthcare', city:'Butajira', emoji:'🏥', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Hospital.' },
  { id:29, name:'Jimma Coffee', cat:'Food & Drink', city:'Butajira', emoji:'☕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251984197091', desc:'Coffee house. Near Guzolma Building.' },
  { id:30, name:'Naol Grossary', cat:'Grocery & Bakery', city:'Butajira', emoji:'🛒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251913732648', desc:'Grocery store. Near Alem Hospital.' },
  { id:31, name:'Jano Bar', cat:'Food & Drink', city:'Butajira', emoji:'🍺', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Bar. Near Alem Hospital.' },
  { id:32, name:'Habteyes Garment', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251912096182', desc:'Garments and clothing. Near Alem Hospital.' },
  { id:33, name:'Meri Leljoch Albasat', cat:'Fashion & Clothing', city:'Butajira', emoji:'🧒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251925579837', desc:"Children's clothing. Near Alem Hospital." },
  { id:34, name:'Endalkachew Garment', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911075389', desc:'Garments and clothing.' },
  { id:35, name:'Eshetu Garment', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251913399111', desc:'Garments and clothing.' },
  { id:36, name:'Denbel Garment', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911059043', desc:'Garments and clothing.' },
  { id:37, name:'Maid Bread', cat:'Grocery & Bakery', city:'Butajira', emoji:'🍞', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911474700', desc:'Bakery — bread.' },
  { id:38, name:'Dagna Kfle Fashion', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911273905', desc:'Clothing shop.' },
  { id:39, name:'Amen Leljoch', cat:'Fashion & Clothing', city:'Butajira', emoji:'🧒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251919904467', desc:"Children's clothing." },
  { id:40, name:'Nib Yegbrna Gbat', cat:'Agriculture', city:'Butajira', emoji:'🌾', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251916258171', desc:'Agricultural products and farm supplies.' },
  { id:41, name:'Azarya Mezmur Bet', cat:'Home & Gifts', city:'Butajira', emoji:'🎵', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251910902992', desc:'Protestant gospel music shop — CDs and religious media.' },
  { id:42, name:'Cheru Electronics', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251923133357', desc:'Electronics and computer sales.' },
  { id:43, name:'Fele Barber', cat:'Beauty & Barber', city:'Butajira', emoji:'💇', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251916273246', desc:'Barber shop.' },
  { id:44, name:'Tedi Barber', cat:'Beauty & Barber', city:'Butajira', emoji:'💇', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251915666240', desc:'Barber shop.' },
  { id:45, name:'Mesfin Printing', cat:'Tech & IT', city:'Butajira', emoji:'🖨', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251934132798', desc:'Printing services.' },
  { id:46, name:'Azi Key Wet', cat:'Food & Drink', city:'Butajira', emoji:'🍲', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251941011163', desc:'Food — wet (Ethiopian stew) vendor.' },
  { id:47, name:'Web Computer', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251917065734', desc:'Computer center.' },
  { id:48, name:'Medi Bete Wbet', cat:'Beauty & Barber', city:'Butajira', emoji:'💇', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251964259315', desc:'Beauty salon for women.' },
  { id:49, name:'Amanuel Antipest', cat:'Construction', city:'Butajira', emoji:'🐜', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251907930102', desc:'Pest control service.' },
  { id:50, name:'Ani Yemushra Albasat', cat:'Fashion & Clothing', city:'Butajira', emoji:'👗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251927005706', desc:'Wedding clothing rental.' },
  { id:51, name:'Redu Beauty', cat:'Beauty & Barber', city:'Butajira', emoji:'💇', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251967747981', desc:'Beauty salon for women.' },
  { id:52, name:'Ro Collection', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251974169088', desc:'Clothing shop.' },
  { id:53, name:'Birana Computer', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251927840084', desc:'Computer training center.' },
  { id:54, name:'Hop Moriew and Wifi Center', cat:'Tech & IT', city:'Butajira', emoji:'📶', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251932632948', desc:'Wifi center.' },
  { id:55, name:'Ethio Computer School', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251985452644', desc:'Computer school.' },
  { id:56, name:'Pergamon Beauty Center', cat:'Beauty & Barber', city:'Butajira', emoji:'💇', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251988954545', desc:'Beauty center for women.' },
  { id:57, name:'Darma Consulting Engineering PLC', cat:'Construction', city:'Butajira', emoji:'🏗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911435027', desc:'Engineering consulting.' },
  { id:58, name:'Kidus Computer', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251972728372', desc:'Computer sales and services.' },
  { id:59, name:'Rediet Collection', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251927556373', desc:'Clothing shop.' },
  { id:60, name:'Mares Bonda', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251902033377', desc:'Clothing shop (Bonda cloth).' },
  { id:61, name:'Kidu Collection', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251912666315', desc:'Clothing shop.' },
  { id:62, name:'Tada Brand', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251979791041', desc:'Clothing shop.' },
  { id:63, name:'Seada Collection', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251939130458', desc:'Clothing shop.' },
  { id:64, name:'Selina Fashion', cat:'Fashion & Clothing', city:'Butajira', emoji:'👗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251920651623', desc:'Clothing shop.' },
];

// ── Pricing Plans ─────────────────────────────────────────────
export const PLANS = [
  {
    name: 'Free',
    price: 0,
    color: C.green,
    features: [
      'Basic business listing',
      'Business name & phone',
      'City and category',
      '1 photo',
      'Standard search ranking',
    ],
    cta: 'Get started free',
  },
  {
    name: 'Standard',
    price: 800,
    color: C.green,
    badge: 'Popular',
    features: [
      'Everything in Free',
      'Full photo gallery (10 photos)',
      'WhatsApp connect button',
      'Business description',
      'Opening hours',
      'Priority in category search',
      'Monthly analytics report',
    ],
    cta: 'Start Standard',
  },
  {
    name: 'Premium',
    price: 2500,
    color: C.gold,
    badge: '⭐ Best',
    features: [
      'Everything in Standard',
      'Featured on homepage',
      'Gold verified badge',
      'Top of all search results',
      'Unlimited photos',
      'Video embed',
      'Dedicated account manager',
      'Social media promotion',
    ],
    cta: 'Go Premium',
  },
];
