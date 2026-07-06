# Netsadr.et — Ethiopia's Free Business Network
### Built by Elias Sisay · elias.netsadr@gmail.com · +251 931 631 332

---

## How to run this project on your computer

### Step 1 — Install Node.js (only once)
Download and install Node.js from:
https://nodejs.org/en/download

Choose the **LTS version** (the green button). After installing,
open CMD and verify it worked:

```
node --version
npm --version
```

Both should show version numbers. If yes, continue.

---

### Step 2 — Copy the project to your computer
Put the netsadr folder somewhere easy, for example:
```
C:\Users\Elias\Desktop\netsadr
```

---

### Step 3 — Open CMD in the project folder
Option A: In Windows Explorer, go into the netsadr folder,
then type "cmd" in the address bar and press Enter.

Option B: Open CMD and type:
```
cd Desktop\netsadr
```

---

### Step 4 — Install dependencies (only once)
```
npm install
```
Wait for it to finish. This downloads all required packages.
It may take 2–5 minutes depending on your internet speed.

---

### Step 5 — Start the development server
```
npm start
```

This will automatically open your browser at:
http://localhost:3000

Your Netsadr.et website is now running locally!

---

### Step 6 — Build for production (when ready to deploy)
```
npm run build
```

This creates a `build` folder with your final website files
ready to upload to any web hosting service.

---

## Project structure

```
netsadr/
├── public/
│   └── index.html          ← Main HTML file
├── src/
│   ├── App.js              ← Main router (controls pages)
│   ├── index.js            ← Entry point
│   ├── data/
│   │   └── constants.js    ← All brand colors, listings, categories
│   ├── components/
│   │   └── UI.jsx          ← Shared components (Navbar, Footer, Logo, etc.)
│   └── pages/
│       ├── Home.jsx        ← Homepage with search, categories, listings
│       ├── ListingDetail.jsx ← Business profile page
│       ├── ListBusiness.jsx  ← Free listing registration form
│       ├── Pricing.jsx     ← Pricing plans page
│       ├── Marketplace.jsx ← Buy/sell marketplace with cart
│       ├── Tenders.jsx     ← Government and private tenders
│       └── Jobs.jsx        ← Job listings
└── package.json            ← Project dependencies
```

---

## How to add a new business listing

Open `src/data/constants.js` and add to the LISTINGS array:

```javascript
{
  id: 13,
  name: 'Your Business Name',
  cat: 'Hotels',              // must match a CATEGORY label
  city: 'Butajira',
  emoji: '🏨',
  rating: 4,
  reviews: 5,
  badge: 'new',               // 'new', 'verified', or 'premium'
  tabs: ['featured', 'new'],  // 'featured','toprated','new','wholesale'
  phone: '+251 9XX XXX XXX',
  desc: 'Description of the business.',
},
```

Save the file. The browser refreshes automatically.

---

## Brand colors

| Color       | Hex       | Used for                        |
|-------------|-----------|----------------------------------|
| Green       | #1D9E75   | Primary brand, buttons           |
| Dark green  | #0F6E56   | Logo background, depth           |
| Light green | #E1F5EE   | Backgrounds, badges              |
| Amber       | #EF9F27   | Accents, phone numbers           |
| Charcoal    | #2C2C2A   | Dark surfaces                    |
| Gold        | #C9A84C   | Premium, navbar border           |
| Black       | #1A1A18   | Navbar, dark cards               |

---

## Social media handles

| Platform  | Handle     | URL                              |
|-----------|------------|----------------------------------|
| Facebook  | netsadr    | facebook.com/netsadr             |
| Instagram | netsa_dr   | instagram.com/netsa_dr           |
| TikTok    | netsa_dr   | tiktok.com/@netsa_dr             |
| Telegram  | netsadr    | t.me/netsadr                     |

---

## Contact
Elias Sisay — Founder and CEO
Phone: +251 931 631 332
Email: elias.netsadr@gmail.com
Location: Butajira, Ethiopia
Website: netsadr.et · netsadr.com
