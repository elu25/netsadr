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
  { icon: '👞', label: 'Shoes & Bags'      },
  { icon: '🌶', label: 'Spices & Baltna'   },
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
  { id:10, name:'Rediet Hotel Butajira', nameAm:'ረዲኤት ሆቴል',         cat:'Hotels', city:'Butajira', emoji:'🏨', rating:4, reviews:22, badge:'verified', tabs:['featured','toprated'], phone:'+251461150005', desc:'The best known hotel in Butajira. Restaurant, bar, conference hall and WiFi.' },
  { id:11, name:'Butajira Bright Hotel', nameAm:'ብራይት ሆቴል',         cat:'Hotels', city:'Butajira', emoji:'🌟', rating:4, reviews:14, badge:'new',      tabs:['new','featured'],       phone:'+251461150564', desc:'Comfortable hotel with bar, restaurant and parking in Butajira.' },
  { id:12, name:'Kaf Fikadu Asore Hotel', nameAm:'ካፍ ፍቃዱ አሶሬ ሆቴል',            cat:'Hotels', city:'Butajira', emoji:'🏩', rating:3, reviews:9,  badge:'new',      tabs:['new'],                   phone:'+251461150443', desc:'Budget friendly hotel on Addis–Arba Minch road, Butajira.' },
  { id:13, name:'Yadi Pictures', nameAm:'ያዲ ፒክቸርስ (ያዲ ፎቶ)', cat:'Photo & Video', city:'Butajira', emoji:'📸', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251912112633', desc:'Photo studio — photos and video for weddings, birthdays, and other ceremonies. Near Zebidar Building.' },
  { id:14, name:'Time Café', nameAm:'ታይም ካፌ', cat:'Food & Drink', city:'Butajira', emoji:'☕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251977212891', desc:'Café service. Near Guzolma Building.' },
  { id:15, name:'Danayit Café', nameAm:'ዳናይት ካፌ', cat:'Food & Drink', city:'Butajira', emoji:'☕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251977733741', phone2:'+251954043732', desc:'Café service. Near Guzolma Building.' },
  { id:16, name:'Beya Motor Byscle', nameAm:'በያ የሞተር ሳይክል ስፔርፓርት', cat:'Automotive & Parts', city:'Butajira', emoji:'🏍', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251925585155', desc:'Motorcycle spare parts. Near Mars tower.' },
  { id:17, name:'Amu Home Collection', nameAm:'አሙ ሆም ኮሌክሽን', cat:'Home & Gifts', city:'Butajira', emoji:'🎁', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251912434268', desc:'Home goods and household items. Near Mars tower.' },
  { id:18, name:'Landa Brand', nameAm:'ላንዳ ብራንድ', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251964255730', desc:'Trousers, t-shirts, and other clothing. Near Mars tower.' },
  { id:19, name:'Beki 12 Production', nameAm:'ቤኪ 12 ፕሮዳክሽን', cat:'Photo & Video', city:'Butajira', emoji:'📸', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251964090690', desc:'Photo studio — photos and video for weddings, birthdays, and other ceremonies. Near Guzolma Building.' },
  { id:20, name:'Redu Collection', nameAm:'ረዱ ኮሌክሽን', cat:'Home & Gifts', city:'Butajira', emoji:'🎁', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911944743', desc:'Home goods and household items. Near Mars tower.' },
  { id:21, name:'Surprise Gift', nameAm:'ሰርፕራይዝ ግፍት (የስጦታ ዕቃዎች)', cat:'Home & Gifts', city:'Butajira', emoji:'🎁', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Gift shop. Near Mars tower.' },
  { id:22, name:'Zola Gift', nameAm:'ዞላ ግፍት (የስጦታ ዕቃዎች)', cat:'Home & Gifts', city:'Butajira', emoji:'🎁', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251929097934', desc:'Gift shop. Near Guzolma Building.' },
  { id:23, name:'Muler Bar and Restaurant', nameAm:'ሙለር ባርና ሬስቶራንት', cat:'Food & Drink', city:'Butajira', emoji:'🍽', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251909167909', desc:'Bar and restaurant. Near Zebidar Building.' },
  { id:24, name:'Shewaber Restaurant', nameAm:'ሸዋበር ሬስቶራንት', cat:'Food & Drink', city:'Butajira', emoji:'🍽', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251912743595', desc:'Restaurant. Near Zebidar Building.' },
  { id:25, name:'Jenber Restaurant', nameAm:'ጀንበር ሬስቶራንት', cat:'Food & Drink', city:'Butajira', emoji:'🍽', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Restaurant. Near Zebidar Building.' },
  { id:26, name:'Rak Sanitary', nameAm:'ራቅ ሳኒተሪ (የመታጠቢያ ቤት ዕቃዎች)', cat:'Construction', city:'Butajira', emoji:'🚿', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251916839718', desc:'Sanitary ware and electrical supplies. Near Zebidar Building.' },
  { id:27, name:'Terefe Hotel', nameAm:'ተረፈ ሆቴል', cat:'Hotels', city:'Butajira', emoji:'🏨', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Hotel.' },
  { id:28, name:'Alem Hospital', nameAm:'ዓለም ሆስፒታል', cat:'Healthcare', city:'Butajira', emoji:'🏥', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Hospital.' },
  { id:29, name:'Jimma Coffee', nameAm:'ጅማ ቡና', cat:'Food & Drink', city:'Butajira', emoji:'☕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251984197091', desc:'Coffee house. Near Guzolma Building.' },
  { id:30, name:'Naol Grossary', nameAm:'ናኦል ግሮሰሪ', cat:'Grocery & Bakery', city:'Butajira', emoji:'🛒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251913732648', desc:'Grocery store. Near Alem Hospital.' },
  { id:31, name:'Jano Bar', nameAm:'ጃኖ ባር', cat:'Food & Drink', city:'Butajira', emoji:'🍺', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Bar. Near Alem Hospital.' },
  { id:32, name:'Habteyes Garment', nameAm:'ሀብተየስ ጋርመንት', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251912096182', desc:'Garments and clothing. Near Alem Hospital.' },
  { id:33, name:'Meri Leljoch Albasat', nameAm:'መሪ ለልጆች አልባሳት', cat:'Fashion & Clothing', city:'Butajira', emoji:'🧒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251925579837', desc:"Children's clothing. Near Alem Hospital." },
  { id:34, name:'Endalkachew Garment', nameAm:'እንደልካቸው ጋርመንት', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911075389', desc:'Garments and clothing.' },
  { id:35, name:'Eshetu Garment', nameAm:'እሸቱ ጋርመንት', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251913399111', desc:'Garments and clothing.' },
  { id:36, name:'Denbel Garment', nameAm:'ደንበል ጋርመንት', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911059043', desc:'Garments and clothing.' },
  { id:37, name:'Maid Bread', nameAm:'ማይድ ዳቦ (ዳቦ ቤት)', cat:'Grocery & Bakery', city:'Butajira', emoji:'🍞', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911474700', desc:'Bakery — bread.' },
  { id:38, name:'Dagna Kfle Fashion', nameAm:'ዳኛ ክፍሌ ፋሽን', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911273905', desc:'Clothing shop.' },
  { id:39, name:'Amen Leljoch', nameAm:'አሜን ለልጆች', cat:'Fashion & Clothing', city:'Butajira', emoji:'🧒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251919904467', desc:"Children's clothing." },
  { id:40, name:'Nib Yegbrna Gbat', nameAm:'ንብ የግብርና ግብዓት', cat:'Agriculture', city:'Butajira', emoji:'🌾', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251916258171', desc:'Agricultural products and farm supplies.' },
  { id:41, name:'Azarya Mezmur Bet', nameAm:'አዛርያ መዝሙር ቤት', cat:'Home & Gifts', city:'Butajira', emoji:'🎵', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251910902992', desc:'Protestant gospel music shop — CDs and religious media.' },
  { id:42, name:'Cheru Electronics', nameAm:'ቸሩ ኤሌክትሮኒክስ', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251923133357', desc:'Electronics and computer sales.' },
  { id:43, name:'Fele Barber', nameAm:'ፈለ ፀጉር ቤት (ባርበር)', cat:'Beauty & Barber', city:'Butajira', emoji:'💇', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251916273246', desc:'Barber shop.' },
  { id:44, name:'Tedi Barber', nameAm:'ቴዲ ፀጉር ቤት (ባርበር)', cat:'Beauty & Barber', city:'Butajira', emoji:'💇', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251915666240', desc:'Barber shop.' },
  { id:45, name:'Mesfin Printing', nameAm:'መስፍን ህትመት (ፕሪንቲንግ)', cat:'Tech & IT', city:'Butajira', emoji:'🖨', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251934132798', desc:'Printing services.' },
  { id:46, name:'Azi Key Wet', nameAm:'አዚ ቀይ ወጥ', cat:'Food & Drink', city:'Butajira', emoji:'🍲', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251941011163', desc:'Food — wet (Ethiopian stew) vendor.' },
  { id:47, name:'Web Computer', nameAm:'ዌብ ኮምፒውተር', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251917065734', desc:'Computer center.' },
  { id:48, name:'Medi Bete Wbet', nameAm:'ሜዲ የውበት ቤት', cat:'Beauty & Barber', city:'Butajira', emoji:'💇', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251964259315', desc:'Beauty salon for women.' },
  { id:49, name:'Amanuel Antipest', nameAm:'አማኑኤል የተባይ ማጥፊያ (አንቲፔስት)', cat:'Construction', city:'Butajira', emoji:'🐜', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251907930102', desc:'Pest control service.' },
  { id:50, name:'Ani Yemushra Albasat', nameAm:'አኒ የሙሽራ አልባሳት', cat:'Fashion & Clothing', city:'Butajira', emoji:'👗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251927005706', desc:'Wedding clothing rental.' },
  { id:51, name:'Redu Beauty', nameAm:'ረዱ ቢውቲ (ውበት ሳሎን)', cat:'Beauty & Barber', city:'Butajira', emoji:'💇', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251967747981', desc:'Beauty salon for women.' },
  { id:52, name:'Ro Collection', nameAm:'ሮ ኮሌክሽን', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251974169088', desc:'Clothing shop.' },
  { id:53, name:'Birana Computer', nameAm:'ብራና ኮምፒውተር', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251927840084', desc:'Computer training center.' },
  { id:54, name:'Hop Moriew and Wifi Center', nameAm:'ሆፕ ሞሪው እና የዋይፋይ ማእከል', cat:'Tech & IT', city:'Butajira', emoji:'📶', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251932632948', desc:'Wifi center.' },
  { id:55, name:'Ethio Computer School', nameAm:'ኢትዮ ኮምፒውተር ትምህርት ቤት', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251985452644', desc:'Computer school.' },
  { id:56, name:'Pergamon Beauty Center', nameAm:'ፔርጋሞን የውበት ማዕከል', cat:'Beauty & Barber', city:'Butajira', emoji:'💇', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251988954545', desc:'Beauty center for women.' },
  { id:57, name:'Darma Consulting Engineering PLC', nameAm:'ዳርማ ኮንሰልቲንግ ኢንጂነሪንግ ኃ/የተ/የግ/ማኅበር', cat:'Construction', city:'Butajira', emoji:'🏗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911435027', desc:'Engineering consulting.' },
  { id:58, name:'Kidus Computer', nameAm:'ኪዱስ ኮምፒውተር', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251972728372', desc:'Computer sales and services.' },
  { id:59, name:'Rediet Collection', nameAm:'ረዲኤት ኮሌክሽን', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251927556373', desc:'Clothing shop.' },
  { id:60, name:'Mares Bonda', nameAm:'ማርስ ቦንዳ', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251902033377', desc:'Clothing shop (Bonda cloth).' },
  { id:61, name:'Kidu Collection', nameAm:'ኪዱ ኮሌክሽን', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251912666315', desc:'Clothing shop.' },
  { id:62, name:'Tada Brand', nameAm:'ታዳ ብራንድ', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251979791041', desc:'Clothing shop.' },
  { id:63, name:'Seada Collection', nameAm:'ሰዓዳ ኮሌክሽን', cat:'Fashion & Clothing', city:'Butajira', emoji:'👕', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251939130458', desc:'Clothing shop.' },
  { id:64, name:'Selina Fashion', nameAm:'ሰሊና ፋሽን', cat:'Fashion & Clothing', city:'Butajira', emoji:'👗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251920651623', desc:'Clothing shop.' },
  { id:65, name:'Sebaw Electronics', nameAm:'ሰባው ኤሌክትሮኒክስ', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Electronics and computer sales.' },
  { id:66, name:'AK Electronics', nameAm:'ኤኬ ኤሌክትሮኒክስ', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Electronics and computer sales.' },
  { id:67, name:'Habesha Electronics', nameAm:'ሐበሻ ኤሌክትሮኒክስ', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Electronics and computer sales.' },
  { id:68, name:'Zitu Electronics', nameAm:'ዚቱ ኤሌክትሮኒክስ', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Electronics and computer sales.' },
  { id:69, name:'Tom General Trading', nameAm:'ቶም ጠቅላላ ንግድ', cat:'Wholesale & B2B', city:'Butajira', emoji:'📦', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'General trading.' },
  { id:70, name:'Heyir General Trading', nameAm:'ሄይር ጠቅላላ ንግድ', cat:'Wholesale & B2B', city:'Butajira', emoji:'📦', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'General trading.' },
  { id:71, name:'Sami Electronics', nameAm:'ሳሚ ኤሌክትሮኒክስ', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Electronics and computer sales.' },
  { id:72, name:'Li Solar', nameAm:'ሊ ሶላር', cat:'Construction', city:'Butajira', emoji:'☀️', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Solar energy products and installation.' },
  { id:73, name:'Photo Zena', nameAm:'ፎቶ ዜና', cat:'Photo & Video', city:'Butajira', emoji:'📸', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Photo studio.' },
  { id:74, name:'Muba Mobile Center', nameAm:'ሙባ ሞባይል ማዕከል', cat:'Tech & IT', city:'Butajira', emoji:'📱', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Mobile phone shop.' },
  { id:75, name:'Bushra Mobile Center', nameAm:'ቡሽራ ሞባይል ማዕከል', cat:'Tech & IT', city:'Butajira', emoji:'📱', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Mobile phone shop.' },
  { id:76, name:'Eza Mobile Center', nameAm:'እዛ ሞባይል ማዕከል', cat:'Tech & IT', city:'Butajira', emoji:'📱', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Mobile phone shop.' },
  { id:77, name:'MH Mobile Center', nameAm:'ኤምኤች ሞባይል ማዕከል', cat:'Tech & IT', city:'Butajira', emoji:'📱', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Mobile phone shop.' },
  { id:78, name:'Tigst Fre Kurt Bet', nameAm:'ትዕግሥት ፍሬ ቁርጥ ቤት', cat:'Food & Drink', city:'Butajira', emoji:'🍽', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Bar and restaurant.' },
  { id:79, name:'Photo Sharp', nameAm:'ፎቶ ሻርፕ', cat:'Photo & Video', city:'Butajira', emoji:'📸', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Photo studio.' },
  { id:80, name:'Photo Sami', nameAm:'ፎቶ ሳሚ', cat:'Photo & Video', city:'Butajira', emoji:'📸', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Photo studio.' },
  { id:81, name:'Nova Pictures', nameAm:'ኖቫ ፒክቸርስ', cat:'Photo & Video', city:'Butajira', emoji:'📸', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251964086371', desc:'Photo studio.' },
  { id:82, name:'Kidst Bete Wbet', nameAm:'ቅድስት የውበት ሳሎን', cat:'Beauty & Barber', city:'Butajira', emoji:'💇', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Beauty salon for women.' },
  { id:83, name:'Hafi Beauty Salon', nameAm:'ሀፊ የውበት ሳሎን', cat:'Beauty & Barber', city:'Butajira', emoji:'💇', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Beauty salon for women.' },
  { id:84, name:'Grace Shoes', nameAm:'ግሬስ ጫማ', cat:'Shoes & Bags', city:'Butajira', emoji:'👞', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Shoes and bags.' },
  { id:85, name:'Unique Bread', nameAm:'ዩኒክ ዳቦ ቤት', cat:'Grocery & Bakery', city:'Butajira', emoji:'🍞', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Bakery — bread.' },
  { id:86, name:'Sofi Super Market', nameAm:'ሶፊ ሱፐር ማርኬት', cat:'Grocery & Bakery', city:'Butajira', emoji:'🛒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Mini market / grocery.' },
  { id:87, name:'Belay Mini Market', nameAm:'በላይ ሚኒ ማርኬት', cat:'Grocery & Bakery', city:'Butajira', emoji:'🛒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Mini market / grocery.' },
  { id:88, name:'Abiti Bar and Restaurant', nameAm:'አቢቲ ባርና ሬስቶራንት', cat:'Food & Drink', city:'Butajira', emoji:'🍽', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Bar and restaurant.' },
  { id:89, name:'Family Construction Materials', nameAm:'ፋሚሊ የሕንፃ መሣሪያ', cat:'Construction', city:'Butajira', emoji:'🏗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Construction materials.' },
  { id:90, name:'Bisrat Mezene Kurt Bet', nameAm:'ብሥራት መዘነ ቁርጥ ቤት', cat:'Food & Drink', city:'Butajira', emoji:'🍽', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Bar and restaurant.' },
  { id:91, name:'Amen Vegetables', nameAm:'አሜን አትክልትና ፍራፍሬ', cat:'Grocery & Bakery', city:'Butajira', emoji:'🥬', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Vegetables and fruits.' },
  { id:92, name:'Hani Super Market', nameAm:'ሀኒ ሱፐር ማርኬት', cat:'Grocery & Bakery', city:'Butajira', emoji:'🛒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Mini market / grocery.' },
  { id:93, name:'Yumtabi Boutique', nameAm:'ዩምታቢ ቡቲክ', cat:'Fashion & Clothing', city:'Butajira', emoji:'👗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Fashion clothing boutique.' },
  { id:94, name:'Allah Wekil Boutique', nameAm:'አላህ ወኪል ቡቲክ', cat:'Fashion & Clothing', city:'Butajira', emoji:'👗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Fashion clothing boutique.' },
  { id:95, name:'Fast Boutique', nameAm:'ፋስት ቡቲክ', cat:'Fashion & Clothing', city:'Butajira', emoji:'👗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Fashion clothing boutique.' },
  { id:96, name:'Selam Boutique', nameAm:'ሰላም ቡቲክ', cat:'Fashion & Clothing', city:'Butajira', emoji:'👗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Fashion clothing boutique.' },
  { id:97, name:'Beteseb Shoes', nameAm:'ቤተሰብ ጫማ', cat:'Shoes & Bags', city:'Butajira', emoji:'👞', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Shoes and bags.' },
  { id:98, name:'Abyssinia Fashion', nameAm:'አቢሲኒያ ፋሽን', cat:'Fashion & Clothing', city:'Butajira', emoji:'👗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Fashion clothing.' },
  { id:99, name:'Abraham Boutique', nameAm:'አብርሃም ቡቲክ', cat:'Fashion & Clothing', city:'Butajira', emoji:'👗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Fashion clothing boutique.' },
  { id:100, name:'Grace Wears a Country Dress', nameAm:'ግሬስ የሀገር ባህል ልብስ', cat:'Fashion & Clothing', city:'Butajira', emoji:'👘', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Traditional and wedding clothing rental.' },
  { id:101, name:'Mubarak Boutique', nameAm:'ሙባረክ ቡቲክ', cat:'Fashion & Clothing', city:'Butajira', emoji:'👗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Fashion clothing boutique.' },
  { id:102, name:'Universal Boutique', nameAm:'ዩኒቨርሳል ቡቲክ', cat:'Fashion & Clothing', city:'Butajira', emoji:'👗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Fashion clothing boutique.' },
  { id:103, name:'Habesha Silver Jewelry Store', nameAm:'ሐበሻ የብር ጌጣጌጥ', cat:'Fashion & Clothing', city:'Butajira', emoji:'💍', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Silver jewelry shop.' },
  { id:104, name:'Sime Fashion', nameAm:'ሲሜ ፋሽን', cat:'Fashion & Clothing', city:'Butajira', emoji:'👗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Fashion clothing.' },
  { id:105, name:'Danayit Fashion', nameAm:'ዳናይት ፋሽን', cat:'Fashion & Clothing', city:'Butajira', emoji:'👗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Fashion clothing.' },
  { id:106, name:'Hyber Style', nameAm:'ኅብር ስታይል', cat:'Fashion & Clothing', city:'Butajira', emoji:'👗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Fashion clothing.' },
  { id:107, name:'Henok Bag Shop', nameAm:'ሄኖክ ቦርሳ ሱቅ', cat:'Shoes & Bags', city:'Butajira', emoji:'👜', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Bags shop.' },
  { id:108, name:'Ewnet Mulunesh Baltna', nameAm:'እውነት ሙሉነሽ ባልትና', cat:'Spices & Baltna', city:'Butajira', emoji:'🌶', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Traditional spices and condiments.' },
  { id:109, name:'Bereka Baltna', nameAm:'በረካ ባልትና', cat:'Spices & Baltna', city:'Butajira', emoji:'🌶', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Traditional spices and condiments.' },
  { id:110, name:'Sadi Baltna', nameAm:'ሳዲ ባልትና', cat:'Spices & Baltna', city:'Butajira', emoji:'🌶', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Traditional spices and condiments.' },
  { id:111, name:'Selam Baltna', nameAm:'ሰላም ባልትና', cat:'Spices & Baltna', city:'Butajira', emoji:'🌶', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Traditional spices and condiments.' },
  { id:112, name:'Merkato Baltna', nameAm:'መርካቶ ባልትና', cat:'Spices & Baltna', city:'Butajira', emoji:'🌶', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Traditional spices and condiments.' },
  { id:113, name:'Amba Baltna', nameAm:'አምባ ባልትና', cat:'Spices & Baltna', city:'Butajira', emoji:'🌶', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Traditional spices and condiments.' },
  { id:114, name:'Roman Baltna', nameAm:'ሮማን ባልትና', cat:'Spices & Baltna', city:'Butajira', emoji:'🌶', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Traditional spices and condiments.' },
  { id:115, name:'Harom Baltna', nameAm:'ሀሮም ባልትና', cat:'Spices & Baltna', city:'Butajira', emoji:'🌶', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Traditional spices and condiments.' },
  { id:116, name:'Feti Baltna', nameAm:'ፈቲ ባልትና', cat:'Spices & Baltna', city:'Butajira', emoji:'🌶', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Traditional spices and condiments.' },
  { id:117, name:'Amin Electronics Trading', nameAm:'አሚን ኤሌክትሮኒክስ ንግድ', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Electronics and computer trading.' },
  { id:118, name:'Meki Electronics', nameAm:'መኪ ኤሌክትሮኒክስ', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Electronics and computer sales.' },
  { id:119, name:'Tare Smart Phone', nameAm:'ታሬ ስማርት ፎን', cat:'Tech & IT', city:'Butajira', emoji:'📱', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Mobile phone shop.' },
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
