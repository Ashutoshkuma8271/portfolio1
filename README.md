# Zeenat Kureshi — Official Digital Platform

> **Official Personal Brand & Executive Portal**  
> *Film Producer | GCC–India Trade Commissioner | National President — All India Jamiatul Quresh Women Cell*

---

## Overview

This repository contains the production source code for **ZeenatKureshi.com**, a bespoke executive personal brand website engineered with modern web standards. The platform follows an editorial luxury aesthetic—combining obsidian dark surfaces, crisp typography, and champagne gold metallic accents—designed for high performance, smooth interactivity, and full responsiveness across all device viewports.

---

## Technology Stack

- **Markup:** HTML5 (Semantic & SEO-optimized)
- **Styling:** Vanilla CSS3 (Custom Design Tokens, Flexbox, Grid, Glassmorphism, Zero Framework Overhead)
- **Scripting:** Vanilla JavaScript (ES6+ for View Routing, Modals, Form Validation, and Scroll-Spy)
- **Typography:** Google Fonts (*Cinzel*, *Cormorant Garamond*, *Plus Jakarta Sans*, *Syne*)
- **Icons & Graphics:** Inline Scalable Vector Graphics (SVG)
- **Compatibility:** All modern browsers (Chrome, Safari, Firefox, Edge) & mobile devices (iOS, Android)

---

## Directory Structure

```text
├── index.html            # Main application entry point & section views
├── sitemap.xml           # XML Sitemap for search engine indexing
├── robots.txt            # Crawler configuration file
├── css/
│   └── style.css         # Complete design system, theme tokens & responsive styles
├── js/
│   └── app.js            # Interactive logic, navigation tracking, modals & handlers
└── README.md             # Project documentation
```

---

## Core Sections & Features

1. **Hero & Brand Banner:** Positioning headline, key impact metrics ($500M+ Trade Facilitation, 15+ Delegations, 50,000+ Women Empowered), and primary calls-to-action.
2. **Press & Media Marquee:** Verified international media credentials and summit features (*Forbes Middle East, Gulf News, Financial Times, Times of India*).
3. **Strategic Verticals:** Interactive overview of the four core pillars:
   - *GCC–India Trade*
   - *Cinema & Media Production*
   - *Women Leadership & Social Stewardship*
   - *Sovereign & Private Investment Advisory*
4. **Biography & Milestone Timeline:** Executive leadership profile, credential summary, international honors, and chronological milestone track (2021–2025).
5. **Executive Photo Gallery:** Curated editorial showcase featuring high-profile delegations, summits, and award ceremonies.
6. **Trade & Investment Advisory:** Cross-border corridor framework paired with a structured VIP qualification form.
7. **Media, Press & Broadcasts:** Video interview showcases with embedded modal playback, press coverage archives, and downloadable Electronic Press Kit (EPK).
8. **Women Leadership Cell:** Initiatives, metrics, and national summit registration for the *All India Jamiatul Quresh Women Cell*.
9. **Executive Dispatches & Insights:** Thought leadership articles designed for search engine visibility and policy analysis.
10. **Liaison & Executive Contact:** Direct secretariat details (Dubai & New Delhi), verified WhatsApp business integration, and official communication form.

---

## Deployment & Hosting Guide

This project is a static web application and can be hosted on any web server or static hosting provider with zero server-side dependencies.

### Option 1: Netlify / Vercel (Recommended)
1. Connect your GitHub repository (`portfolio1`) to Netlify or Vercel.
2. Build Settings:
   - **Build Command:** *(Leave blank)*
   - **Publish Directory:** `.` *(Root directory)*
3. Deploy. Automated SSL (HTTPS) is provisioned instantly.

### Option 2: GitHub Pages
1. Navigate to **Repository Settings** > **Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Set the branch to `main` and folder to `/ (root)`, then click **Save**.

### Option 3: Traditional Web Hosting (cPanel / Apache / Nginx)
Upload all files (`index.html`, `sitemap.xml`, `robots.txt`, `css/`, `js/`) to the `public_html` directory of your web server.

---

## Configuration & Integration

### Connecting the Contact Form to Email
The contact form is configured to accept POST submissions via any form endpoint provider (e.g., Formspree, Web3Forms, or custom mailer):

In `index.html` (Line ~686):
```html
<form id="generalContactForm" action="https://formspree.io/f/YOUR_ENDPOINT_ID" method="POST">
```
Replace `YOUR_ENDPOINT_ID` with your active form endpoint ID.

### Updating the WhatsApp Liaison Number
To update the direct WhatsApp concierge link, search for `971500000000` across `index.html` and `js/app.js` and replace it with the official international phone number (including country code).

### Activating Google Analytics (GA4)
In `index.html` (Line ~25), uncomment the Google Tag Manager snippet and replace `G-XXXXXXXXXX` with your actual Google Analytics Measurement ID:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## License & Intellectual Property

&copy; 2026 Zeenat Kureshi. All rights reserved.  
All brand assets, photography, and editorial copy are proprietary.
