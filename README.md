# KHANIFY TECHNOLOGIES

Company website built with React, Vite, JSX, Tailwind CSS, React Router, and Lucide icons.

## Run
- npm install
- npm run dev
- npm run lint
- npm run build
- npm run preview

## Pages
Home, About, Services, Our Work, Contact, and Book a Strategic Call.
Responsive navigation, service FAQs, project category filters, and an inquiry draft form are included.

## Connect contact and booking
Copy .env.example to .env.local and set VITE_CONTACT_EMAIL and VITE_BOOKING_URL.
Restart Vite after changes. Both values are public client configuration; do not put secrets here.
The contact form prepares a mailto draft that the visitor must send in their email app.
Without an email, it prepares a copyable draft and explicitly states that nothing was sent.
The booking page links to your scheduling provider when configured. Without a link it clearly states scheduling is not connected.

## Content
The portfolio entries are explicitly labeled illustrative concepts, not client work.
Replace with approved project stories when available. No client results or testimonials are invented.
The homepage is in src/pages/Home.jsx; shared sections are in src/components/SiteSections.jsx. Other routes are in src/App.jsx; service and concept data are in src/siteData.js; styling is in src/index.css.
Configure hosting to serve index.html for application routes.
