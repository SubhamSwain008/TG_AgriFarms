# tgaf_agriFarms  Website Development Guide

## WHAT THIS WEBSITE IS

This is a **single-page product showcase website** for **tgaf_agriFarms**, a company that mainly sells **chilli powder and spices**. The brand tagline is **"Pure · Spicy · Authentic"**.

It is NOT a multi-page website. Everything is on ONE page. Navigation links scroll to different sections on that same page.

The website does NOT have any backend, database, login system, or payment system. It is a **static frontend-only** website.

---

## HOW TO RUN THE WEBSITE

### Step 1: Install Node.js

You need Node.js version 18 or higher. Check if you have it:

```bash
node --version
```

If you don't have it, install it from https://nodejs.org

### Step 2: Install dependencies

Open a terminal, go to the `agrifarm` folder, and run:

```bash
cd agrifarm
npm install
```

This installs all the packages the website needs. You only need to do this once (or when you add new packages).

### Step 3: Start the development server

```bash
npm run dev
```

This starts the website at **http://localhost:3000**. Open this in your browser.

Every time you save a file, the browser will automatically show your changes.

### Step 4: Build for production

When you want to deploy the website:

```bash
npm run build
npm start
```

`npm run build` creates an optimized version. `npm start` runs that optimized version.

---

## PROJECT FILE STRUCTURE

```
agrifarm/
├── app/                          ← MAIN APP FOLDER (Next.js App Router)
│   ├── globals.css               ← Global styles + Tailwind import
│   ├── layout.js                 ← Root HTML layout (title, font, metadata)
│   └── page.js                   ← Main page  imports and renders all sections
│
├── components/                   ← ALL UI COMPONENTS LIVE HERE
│   ├── Navbar.jsx                ← Sticky navigation bar + mobile menu
│   ├── Hero.jsx                  ← Big hero banner (first thing visitors see)
│   ├── Products.jsx              ← Product listing section (contains product data)
│   ├── ProductCard.jsx           ← Single product card (reusable)
│   ├── AboutProduct.jsx          ← 4 feature cards (why choose us)
│   ├── AboutUs.jsx               ← Company story + mission
│   ├── Contact.jsx               ← Contact form + address/phone/email
│   └── Footer.jsx                ← Footer with links, logo, socials
│
├── public/                       ← STATIC FILES (images, logos, etc.)
│   └── logo.png                  ← The tgaf_agriFarms logo
│
├── next.config.mjs               ← Next.js configuration
├── postcss.config.mjs            ← PostCSS config (needed for Tailwind)
├── jsconfig.json                 ← JavaScript path aliases
├── package.json                  ← Project dependencies and scripts
└── eslint.config.mjs             ← Linting rules
```

---

## HOW EACH FILE WORKS (DETAILED)

### `app/page.js`

This is the **main page**. It imports every section component and renders them in order:

```
Navbar → Hero → Products → AboutProduct → AboutUs → Contact → Footer
```

If you want to **add a new section**, create a new component in `components/` and import it here.

If you want to **reorder sections**, change the order of the components in this file.

If you want to **remove a section**, delete its import and its usage from this file.

### `app/layout.js`

This wraps the entire website. It sets:
- The page title (what shows in the browser tab)
- The meta description (what Google shows)
- The font (Inter from Google Fonts)

**To change the page title**, edit the `metadata` object in this file.

### `app/globals.css`

Contains:
- `@import "tailwindcss"`  this loads Tailwind CSS (DO NOT REMOVE THIS LINE)
- `scroll-behavior: smooth`  makes clicking nav links scroll smoothly
- Body background color: `#fffaf5` (warm cream/off-white)

### `components/Navbar.jsx`

- Has `"use client"` at the top because it uses React hooks (useState, useEffect)
- Shows the logo image from `/logo.png`
- Shows the brand name "tgaf_agriFarms"
- Navigation links: Home, Products, About Product, About Us, Contact
- On desktop: horizontal menu
- On mobile: hamburger icon that opens a dropdown menu
- Becomes white/blurred when you scroll down (sticky behavior)

### `components/Hero.jsx`

- The big banner at the top of the page
- Shows the logo image large on the right side
- Shows headline, tagline, and two buttons
- "View Products" button scrolls to the products section
- Stats row: 5 Spice Varieties, 10K+ Customers, 100% Pure

### `components/Products.jsx`

- Contains the **product data array**  this is where all product names, descriptions, and prices are defined
- Renders 6 ProductCard components in a responsive grid
- Currently shows: CAMEROON PEPPE, HOT PEPPE POWDER, HOT DELICIOUS PEPPE, Whole Dried Chillies, Smoked Chilli Powder, Combo Pack

**To add a new product**: Add a new object to the `products` array with `id`, `name`, `description`, and `price`.

**To change a product's info**: Edit the corresponding object in the `products` array.

**To remove a product**: Delete that object from the array.

### `components/ProductCard.jsx`

- A **reusable** component that displays a single product
- Receives a `product` prop with `name`, `description`, `price`
- Shows a placeholder icon area (where real product images would go)
- Has hover effects (lifts up, shadow appears)
- Has a "View Details" button (currently does nothing  needs implementation)

### `components/AboutProduct.jsx`

- Shows 4 feature cards: Pure & Natural, Sun-Dried Process, Quality Tested, Farm-to-Door Delivery
- Each card has an icon, title, and description
- Icons are inline SVGs from Heroicons

### `components/AboutUs.jsx`

- Shows the logo image on the left
- Company story text on the right
- Mission statement in a highlighted card
- Stats: 5 Spice Varieties, 10K+ Orders Shipped, 100% Pure

### `components/Contact.jsx`

- Has `"use client"` because it uses React hooks for the form
- Form with Name, Email, Message fields
- On submit: prevents page reload, logs form data to console, clears form
- Shows contact info: email, phone, address
- Map placeholder (not a real map  just a placeholder box)

### `components/Footer.jsx`

- Shows logo + brand name
- Quick links (same as navbar links)
- Contact info repeated
- Social media icon links (Facebook, Twitter, Instagram, LinkedIn)  currently link to `#` (placeholder)
- Copyright text

---

## COLOR SCHEME

The website uses colors inspired by the logo (red chillies, golden wheat, earthy brown):

| Purpose            | Color                                      | Tailwind Class Examples                    |
| ------------------- | ------------------------------------------ | ------------------------------------------ |
| **Primary**         | Deep red / crimson                         | `text-red-700`, `bg-red-700`, `from-red-700` |
| **Secondary**       | Amber / golden                             | `text-amber-600`, `to-amber-600`           |
| **Accent gradient** | Red → Amber                                | `bg-gradient-to-r from-red-700 to-amber-600` |
| **Background**      | Warm cream `#fffaf5`                       | Set in `globals.css`                       |
| **Section bg**      | Light orange / red tints                   | `bg-orange-50/40`, `bg-red-50`             |
| **Text primary**    | Dark stone/brown                           | `text-stone-900`                           |
| **Text secondary**  | Medium stone                               | `text-stone-600`, `text-stone-500`         |
| **Borders**         | Light stone                                | `border-stone-100`, `border-red-100`       |
| **Hover effects**   | Red tones                                  | `hover:text-red-700`, `hover:bg-red-50`    |
| **Footer bg**       | Very dark brown                            | `bg-stone-900`                             |
| **Button primary**  | Red gradient                               | `bg-gradient-to-r from-red-700 to-red-600` |
| **Shadows**         | Red-tinted                                 | `shadow-red-200`, `shadow-red-100`         |

**If you want to change the color scheme**, you need to search-and-replace the Tailwind color classes across all components. The main colors used are:
- `red-700`, `red-600`, `red-400`, `red-100`, `red-50` (primary reds)
- `amber-600`, `amber-500`, `amber-400`, `amber-100` (golden accents)
- `orange-50` (background tints)
- `stone-900`, `stone-800`, `stone-600`, `stone-500`, `stone-400`, `stone-100` (neutrals/text)

---

## HOW TO MAKE COMMON CHANGES

### Change the logo

1. Put your new logo file in the `public/` folder
2. Name it `logo.png` (replace the existing one), OR
3. If you use a different filename, search all files for `/logo.png` and replace with your new filename

The logo is used in: `Navbar.jsx`, `Hero.jsx`, `AboutUs.jsx`, `Footer.jsx`

### Change contact information

Contact info appears in TWO places:
1. `components/Contact.jsx`  the contact section
2. `components/Footer.jsx`  the footer

You must update BOTH files when changing email, phone, or address.

### Change the page title / SEO description

Edit the `metadata` object in `app/layout.js`.

### Add real product images

Currently products show placeholder icons. To add real images:

1. Put product images in the `public/` folder (e.g., `public/products/chilli-powder.jpg`)
2. In `Products.jsx`, add an `image` field to each product object: `image: "/products/chilli-powder.jpg"`
3. In `ProductCard.jsx`, replace the placeholder div with:
   ```jsx
   import Image from "next/image";
   // ...
   <Image src={product.image} alt={product.name} width={400} height={300} className="w-full h-52 object-cover" />
   ```

### Make the "View Details" button work

Currently the button in `ProductCard.jsx` does nothing. Options:
- Open a modal/popup with product details
- Scroll to a detail section
- Link to a WhatsApp order message

### Connect the contact form to actually send emails

Currently it just logs to the console. To make it send real emails:
- Use a service like EmailJS, Formspree, or Resend
- OR add an API route in `app/api/contact/route.js` with a server-side email sender

### Add a new section to the page

1. Create a new file in `components/` (e.g., `Testimonials.jsx`)
2. Write your component with an `id` attribute on the section (e.g., `id="testimonials"`)
3. Import it in `app/page.js` and add it in the desired position
4. If you want a nav link, add it to the `navLinks` array in `Navbar.jsx`

### Make the social media links work

In `Footer.jsx`, find the `socialIcons` array. Each social link currently has `href="#"`. Replace `#` with your actual social media URLs.

---

## TECHNOLOGY STACK

| Technology       | Version  | Purpose                                    |
| ---------------- | -------- | ------------------------------------------ |
| **Next.js**      | 16.1.6   | React framework (App Router)               |
| **React**        | 19.2.3   | UI library                                 |
| **Tailwind CSS** | 4.x      | Utility-first CSS (all styling)            |
| **PostCSS**      | via @tailwindcss/postcss | CSS processing              |
| **Node.js**      | 18+      | Runtime                                    |

### Important notes about this stack:
- This project uses **JavaScript** (`.js` and `.jsx` files), NOT TypeScript
- Styling is done entirely with **Tailwind CSS utility classes**  there are no separate CSS files per component
- **No external UI libraries** are used (no shadcn, no MUI, no Bootstrap)
- The `next/image` component is used for images (provides automatic optimization)

---

## "use client" EXPLANATION

Some files have `"use client"` at the very top. This is required by Next.js when a component uses:
- `useState` (for tracking state like form inputs or menu open/closed)
- `useEffect` (for side effects like listening to scroll events)
- Event handlers that need client-side JavaScript

Files with `"use client"`:
- `Navbar.jsx`  uses useState (menu toggle) and useEffect (scroll detection)
- `Contact.jsx`  uses useState (form field values)

Files WITHOUT `"use client"` run on the server by default (faster initial load):
- `Hero.jsx`, `Products.jsx`, `ProductCard.jsx`, `AboutProduct.jsx`, `AboutUs.jsx`, `Footer.jsx`

**Rule**: Only add `"use client"` when you NEED hooks or browser-only APIs. If you add useState/useEffect to a component, you MUST add `"use client"` at the top.

---

## TAILWIND CSS  HOW IT WORKS HERE

Tailwind CSS v4 is used. Unlike older versions, there is NO `tailwind.config.js` file.

**How it is set up:**
1. `postcss.config.mjs` tells PostCSS to use `@tailwindcss/postcss`
2. `app/globals.css` has `@import "tailwindcss"` which loads all Tailwind utilities
3. You use Tailwind classes directly in JSX: `className="text-red-700 font-bold px-4"`

**If Tailwind classes are not working:**
- Make sure `@import "tailwindcss"` is in `globals.css`
- Make sure `postcss.config.mjs` has `"@tailwindcss/postcss": {}`
- Restart the dev server (`Ctrl+C`, then `npm run dev`)

---

## RESPONSIVE DESIGN BREAKPOINTS

The website uses Tailwind's mobile-first responsive prefixes:

| Prefix | Screen width | Example                                     |
| ------ | ------------ | --------------------------------------------- |
| (none) | 0px+         | `grid-cols-1` (mobile default)               |
| `sm:`  | 640px+       | `sm:grid-cols-2` (tablet)                    |
| `md:`  | 768px+       | `md:flex` (show desktop nav)                 |
| `lg:`  | 1024px+      | `lg:grid-cols-3` (desktop)                   |

Mobile-first means: write mobile styles first, then add `sm:` / `md:` / `lg:` for larger screens.

---

## DEPLOYMENT

### Option 1: Vercel (Recommended  Free)

1. Push code to GitHub
2. Go to https://vercel.com
3. Import your GitHub repo
4. Vercel auto-detects Next.js and deploys

### Option 2: Static Export

If you want plain HTML/CSS/JS files:

1. Add this to `next.config.mjs`:
   ```js
   const nextConfig = { output: 'export' };
   ```
2. Run `npm run build`
3. Upload the `out/` folder to any static hosting (Netlify, GitHub Pages, etc.)

**Note**: With static export, `next/image` optimization won't work. You'll need to add `unoptimized: true` to your image config or use `<img>` tags instead.

---

## FUTURE DEVELOPMENT IDEAS

### Priority 1  Quick Wins
- [ ] Replace product image placeholders with real product photos
- [ ] Add real social media URLs in Footer
- [ ] Update contact email/phone/address with real info
- [ ] Connect contact form to an email service (EmailJS or Formspree)

### Priority 2  Enhancements
- [ ] Add product detail modals (click "View Details" → popup with more info)
- [ ] Add a "Buy Now" / "Order on WhatsApp" button per product
- [ ] Add customer testimonials/reviews section
- [ ] Add an image gallery/carousel to the hero section
- [ ] Add Google Maps embed in the Contact section

### Priority 3  Advanced
- [ ] Add a backend API for real product management
- [ ] Add a shopping cart system
- [ ] Add payment gateway integration (Razorpay, Stripe)
- [ ] Add user authentication for wholesale customers
- [ ] Add multi-language support (Hindi, Telugu, English)
- [ ] Add blog/recipes section to drive SEO traffic

---

## COMMON MISTAKES TO AVOID

1. **Do NOT delete `@import "tailwindcss"` from globals.css**  it breaks all styling
2. **Do NOT add `"use client"` to `layout.js` or `page.js`**  they should stay as server components
3. **Do NOT put images outside the `public/` folder**  Next.js only serves static files from `public/`
4. **Do NOT use `<img>` tag**  use `import Image from "next/image"` and `<Image />` component instead
5. **Do NOT install TypeScript**  this project is JavaScript only
6. **Do NOT install UI libraries like shadcn, MUI, Bootstrap**  the design uses only Tailwind CSS
7. **When editing product data**, edit the `products` array in `components/Products.jsx`, NOT in ProductCard
8. **When changing nav links**, update the `navLinks` array in `components/Navbar.jsx` AND make sure the target section has a matching `id` attribute
