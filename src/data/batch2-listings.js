// Second field-collection batch — 51 businesses, collected directly
// (name + phone only, no photos/GPS yet). Categories were inferred from
// each business's name against the existing CATEGORIES taxonomy — a few
// are genuine guesses, flagged in comments below, not confirmed with the
// business owner. IDs start at 120 to avoid colliding with anything
// already in constants.js (max existing ID was 119).

export const BATCH_2_LISTINGS = [
  { id:120, name:'Qal Decor', nameAm:'ቃል ዲኮር', cat:'Home & Gifts', city:'Butajira', emoji:'🎁', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251912467256', desc:'Home decor items.' },
  { id:121, name:'Real Computer', nameAm:'ሪል ኮምፒውተር', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251916552285', desc:'Computer sales and service.' },
  { id:122, name:'Eyta Eyeglasses', nameAm:'እይታ መነጽር', cat:'Healthcare', city:'Butajira', emoji:'👓', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251928289155', desc:'Eyeglasses and optics.' },
  { id:123, name:'Nathan Cosmetics', nameAm:'ናታን ኮስሞቲክስ', cat:'Beauty & Barber', city:'Butajira', emoji:'💄', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251913265409', desc:'Cosmetics shop.' },
  // Guess: could be jewelry (Fashion & Clothing) instead of Home & Gifts — confirm with owner.
  { id:124, name:'Marco Silver', nameAm:'ማርኮ ሲልቨር', cat:'Home & Gifts', city:'Butajira', emoji:'🎁', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251926612643', desc:'Silver items.' },
  // Guess: "Velo" meaning unconfirmed — assumed bicycle-related. Same phone as Qal Decor (id:120), possibly same owner/second line of business.
  { id:125, name:'Qal Velo', nameAm:'ቃል ቬሎ', cat:'Automotive & Parts', city:'Butajira', emoji:'🏍', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251912467256', desc:'Bicycle shop.' },
  { id:126, name:'Shebal Velo', nameAm:'ሸባል ቬሎ', cat:'Automotive & Parts', city:'Butajira', emoji:'🏍', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251910002194', desc:'Bicycle shop.' },
  { id:127, name:'Seya Mobile', nameAm:'ሰያ ሞባይል', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251939513125', desc:'Mobile phones and accessories.' },
  { id:128, name:'National Electronics', nameAm:'ብሔራዊ ኤሌክትሮኒክስ', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251913155948', desc:'Electronics shop.' },
  { id:129, name:'Aida Pharmacy', nameAm:'አይዳ መድሃኒት', cat:'Healthcare', city:'Butajira', emoji:'🏥', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251916761615', desc:'Pharmacy — medicine and health products.' },
  { id:130, name:'Nejashi Socks', nameAm:'ነጃሺ ካልሲ', cat:'Fashion & Clothing', city:'Butajira', emoji:'👗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251916487930', desc:'Socks shop.' },
  { id:131, name:'Arada Pharmacy', nameAm:'አራዳ መድሃኒት', cat:'Healthcare', city:'Butajira', emoji:'🏥', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251912839798', desc:'Pharmacy — medicine and health products.' },
  { id:132, name:'Tewekil Household and Gift Items', nameAm:'ተወኪል የቤት እና የስጦታ ዕቃዎች መሸጫ', cat:'Home & Gifts', city:'Butajira', emoji:'🎁', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251941308755', desc:'Household and gift items.' },
  // Guess: "Sanitary" assumed to mean bathroom/plumbing fixtures — could also be Home & Gifts.
  { id:133, name:'Umi Sanitary', nameAm:'ኡሚ ሳኒተሪ', cat:'Construction', city:'Butajira', emoji:'🏗', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251915690617', desc:'Sanitary and plumbing fixtures.' },
  { id:134, name:'Adane Mobile', nameAm:'አዳነ ሞባይል', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Mobile phones and accessories.' },
  { id:135, name:'Firdos Bakery', nameAm:'ፍርዶስ ዳቦ', cat:'Grocery & Bakery', city:'Butajira', emoji:'🛒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911737094', desc:'Bakery — bread.' },
  { id:136, name:'Abuzer Spare Parts', nameAm:'አቡዘር እስፔርፓርት', cat:'Automotive & Parts', city:'Butajira', emoji:'🏍', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251913230269', desc:'Spare parts.' },
  { id:137, name:'Ahbab Bakery', nameAm:'አህባብ ዳቦ', cat:'Grocery & Bakery', city:'Butajira', emoji:'🛒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911540211', desc:'Bakery — bread.' },
  { id:138, name:'Muhedin Frash — Turkish Carpets and Flooring', nameAm:'ሙህዲን ፍራሽ የቱርክ ምንጣፎችና ወለል', cat:'Home & Gifts', city:'Butajira', emoji:'🎁', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251964089170', desc:'Turkish carpets, mattresses, and flooring.' },
  { id:139, name:'Etete Supermarket', nameAm:'እቴቴ ሱፐር ማርኬት', cat:'Grocery & Bakery', city:'Butajira', emoji:'🛒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911523515', desc:'Supermarket.' },
  { id:140, name:'Selam Bakery', nameAm:'ሰላም ዳቦ', cat:'Grocery & Bakery', city:'Butajira', emoji:'🛒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911492515', desc:'Bakery — bread.' },
  { id:141, name:'Habib Spare Parts', nameAm:'ሀቢብ እስፔርፓርት', cat:'Automotive & Parts', city:'Butajira', emoji:'🏍', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911552447', desc:'Spare parts.' },
  { id:142, name:'Mesob Bakery', nameAm:'መሶብ ዳቦ', cat:'Grocery & Bakery', city:'Butajira', emoji:'🛒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251908910999', desc:'Bakery — bread.' },
  { id:143, name:'Nesihat Muslim Restaurant', nameAm:'ነሲሀት የሙስሊም ሬስቶራንት', cat:'Food & Drink', city:'Butajira', emoji:'🍽', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251916295700', desc:'Muslim restaurant.' },
  { id:144, name:'Dr. Ahmed Dental Care', nameAm:'ዶክተር አህመድ የጥርስ ህክምና', cat:'Healthcare', city:'Butajira', emoji:'🏥', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251910207541', desc:'Dental clinic.' },
  { id:145, name:'Enat Bakery', nameAm:'እናት ዳቦ', cat:'Grocery & Bakery', city:'Butajira', emoji:'🛒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251969559369', desc:'Bakery — bread.' },
  { id:146, name:'World Bright College', nameAm:'ወርልድ ብራይት ኮሌጅ', cat:'Education', city:'Butajira', emoji:'🎓', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'College.' },
  { id:147, name:'Sofi Computer', nameAm:'ሶፊ ኮምፒውተር', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911687307', desc:'Computer sales and service.' },
  { id:148, name:'Fuad Spare Parts', nameAm:'ፉአድ መለዋወጫ', cat:'Automotive & Parts', city:'Butajira', emoji:'🏍', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251939396928', desc:'Spare parts.' },
  // Guess: could be Construction instead of Tech & IT (solar installation vs. solar equipment retail).
  { id:149, name:'Li Solar — Solar Products Shop', nameAm:'ሊ ሶላር የሶላር እቃዎች መሸጫ', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251912039140', desc:'Solar products shop.' },
  { id:150, name:'Hosanna Hotel', nameAm:'ሆሳና ሆቴል', cat:'Hotels', city:'Butajira', emoji:'🏨', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911587384', desc:'Hotel.' },
  { id:151, name:'Super Bakery and Cake', nameAm:'ሱፐር ዳቦና ኬክ', cat:'Grocery & Bakery', city:'Butajira', emoji:'🛒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Bakery — bread and cake.' },
  { id:152, name:'South Bar and Restaurant', nameAm:'ሳውዝ ባርና ሬስቶራንት', cat:'Food & Drink', city:'Butajira', emoji:'🍽', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Bar and restaurant.' },
  { id:153, name:'Kibru Yisfaw Spare Parts', nameAm:'ክብሩ ይስፋው መለዋወጫ', cat:'Automotive & Parts', city:'Butajira', emoji:'🏍', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251912871602', desc:'Spare parts.' },
  { id:154, name:'Shell Motel', nameAm:'ሼል ሞቴል', cat:'Hotels', city:'Butajira', emoji:'🏨', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Motel.' },
  { id:155, name:'Dania Supermarket', nameAm:'ዳኒያ ሱፐር ማርኬት', cat:'Grocery & Bakery', city:'Butajira', emoji:'🛒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251941555566', desc:'Supermarket.' },
  { id:156, name:'Lefot Bakery and Cake', nameAm:'ለፎት ዳቦና ኬክ', cat:'Grocery & Bakery', city:'Butajira', emoji:'🛒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251925637610', desc:'Bakery — bread and cake.' },
  { id:157, name:'Beteseb Eyeglasses', nameAm:'ቤተሰብ መስታወት', cat:'Healthcare', city:'Butajira', emoji:'👓', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251913313041', desc:'Eyeglasses and optics.' },
  { id:158, name:'Butajira Pharmacy', nameAm:'ቡታጅራ መድሃኒት', cat:'Healthcare', city:'Butajira', emoji:'🏥', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251937448943', desc:'Pharmacy — medicine and health products.' },
  { id:159, name:'Yami Mini Market', nameAm:'ያሚ ሚኒ ማርኬት', cat:'Grocery & Bakery', city:'Butajira', emoji:'🛒', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251911423673', desc:'Mini market.' },
  { id:160, name:'Aymen Decor', nameAm:'አይመን ዲኮር', cat:'Home & Gifts', city:'Butajira', emoji:'🎁', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251913379526', desc:'Home decor items.' },
  { id:161, name:'Zebider Guest House', nameAm:'ዘቢዳር የእንግዳ ማረፊያ', cat:'Hotels', city:'Butajira', emoji:'🏨', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251912264123', desc:'Guest house / lodge.' },
  { id:162, name:'Maida Fruit Juice', nameAm:'ማኢዳ ፍሩት ጁስ', cat:'Food & Drink', city:'Butajira', emoji:'🍽', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Fresh fruit juice.' },
  { id:163, name:'Mihret Juice', nameAm:'ምህረት ጁስ', cat:'Food & Drink', city:'Butajira', emoji:'🍽', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Fresh juice.' },
  { id:164, name:'Addis Decor', nameAm:'አዲስ ዲኮር', cat:'Home & Gifts', city:'Butajira', emoji:'🎁', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Home decor items.' },
  { id:165, name:'Reqiq Solar', nameAm:'ረቂቅ ሶላር', cat:'Tech & IT', city:'Butajira', emoji:'💻', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251964060772', desc:'Solar products shop.' },
  { id:166, name:'Foyat Dental Care', nameAm:'ፎያት የጥርስ ህክምና', cat:'Healthcare', city:'Butajira', emoji:'🏥', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251910037581', desc:'Dental clinic.' },
  { id:167, name:'Dr. Jemal Medium Clinic', nameAm:'ዶክተር ጀማል መካከለኛ ክሊኒክ', cat:'Healthcare', city:'Butajira', emoji:'🏥', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251912685727', desc:'Medium clinic.' },
  { id:168, name:'Abdi Spare Parts', nameAm:'አብዲ መለዋወጫ', cat:'Automotive & Parts', city:'Butajira', emoji:'🏍', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251916501177', desc:'Spare parts.' },
  { id:169, name:'Adem Aman Kurt and Kitfo', nameAm:'አደም አማን ቁርጥና ክትፎ', cat:'Food & Drink', city:'Butajira', emoji:'🍽', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'', desc:'Kurt and kitfo (raw/rare beef dishes).' },
  { id:170, name:'Mussa Kurt and Kitfo', nameAm:'ሙሳ ቁርጥና ክትፎ', cat:'Food & Drink', city:'Butajira', emoji:'🍽', rating:0, reviews:0, badge:'new', tabs:['new'], phone:'+251925398881', desc:'Kurt and kitfo (raw/rare beef dishes).' },
];
