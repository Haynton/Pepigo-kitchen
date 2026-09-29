# Pepigo Kitchen

A responsive one-page website for Pepigo Kitchen, a shared professional kitchen in Saint-Herblain (Nantes, France) for food entrepreneurs, caterers and artisans.

**Live:** [www.pepigo-kitchen.fr](https://www.pepigo-kitchen.fr)

> The website is written in French, since it targets local French-speaking food professionals.

## Context

Pepigo Kitchen rents a fully equipped professional kitchen on a flexible monthly plan with no long-term commitment. The goal of the site is to turn a visitor into a contact: present the offer, the equipment and the target audience, then make it easy to send an inquiry.

## Features

- One-page layout with anchor navigation: hero gallery, about, equipment, target profiles, pricing, FAQ and contact
- Interactive FAQ accordion in vanilla JavaScript (one item open at a time, animated, keyboard operable)
- Contact form handled by Netlify Forms, with a honeypot field against spam and a confirmation page after submission
- Legal notice page and a custom 404 page
- Responsive layout

## Technical details

- **Stack:** semantic HTML5, custom CSS3 (no framework), vanilla JavaScript (ES module)
- **CSS architecture:** split into small files by responsibility (`base`, `components`, `layout`, `utilities`), with CSS variables and a single entry stylesheet
- **Accessibility:** `lang` attribute, descriptive `alt` text, labels linked to form fields, `autocomplete` attributes, focusable accordion headers usable with Enter and Space
- **SEO and sharing:** meta description, Open Graph and Twitter Card tags
- **Performance:** WebP images, priority hint on the hero image, inline SVG icons (no icon library, no extra requests)
- **Icons and metadata:** full favicon set and a web app manifest
- **Hosting:** Netlify, with automatic deployment on every push

## Project structure

```
.
├── assets/
│   ├── favicon/          # favicons and touch icons
│   └── images/           # kitchen photos (WebP)
├── components/
│   └── accordion.js      # FAQ accordion (ES module)
├── css/
│   ├── base/             # reset, global styles, variables
│   ├── components/       # accordion, button, card, form, icon
│   ├── layout/           # header, footer, sections
│   ├── utilities/        # helpers, responsive rules
│   └── style.css         # main entry point
├── legal/                # legal notice page
├── success/              # form confirmation page
├── 404.html              # custom error page
├── index.html            # main page
└── site.webmanifest      # web app manifest
```

## Run locally

No dependencies to install. Open `index.html` in a browser, or use a local server:

```bash
git clone https://github.com/Haynton/Pepigo-kitchen.git
cd Pepigo-kitchen
npx serve .
# or
python3 -m http.server
```

> The contact form only works once deployed on Netlify (Netlify Forms).

## Deployment

The site is deployed on Netlify. Each push triggers a new deployment automatically, and Netlify detects the HTML form and handles submissions.

## What I learned

- Structuring a growing stylesheet into small, maintainable CSS modules without a framework
- Building a reusable accordion in vanilla JavaScript, with keyboard support
- Setting up a serverless contact flow with Netlify Forms, including spam protection and a confirmation page
- Designing a site around a business goal: getting qualified inquiries from a specific audience

## Author

Built by [Anthony Quenet](https://www.anthonyquenet.com) ([@Haynton](https://github.com/Haynton)).
