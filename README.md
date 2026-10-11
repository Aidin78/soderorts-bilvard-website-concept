# Söderorts Bilvård – redesign concept

A redesign proposal for [soderortsbilvard.se](https://soderortsbilvard.se/), a car care and tyre service business in Johanneshov, Stockholm. It is built with Next.js 16 (App Router, Cache Components), TypeScript, and Tailwind CSS 4.

All public content is in Swedish. Business facts, prices, terms and photos come from the current website (checked 2026-10-11). Nothing has been invented: no reviews, ratings, statistics or services.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional, see below
npm run dev                  # http://localhost:3000
```

Checks:

```bash
npx tsc --noEmit
npm run lint
npm run build
```

## Project structure

```
src/
  app/                    Routes, metadata, sitemap, robots, OG image, icon
    tjanster/[slug]/      The five main service pages (data-driven)
    tjanster/ovriga-tjanster/
    priser/ boka/ om-oss/ kontakt/ integritet/
    kontakt/actions.ts    Server Action for the contact form
  components/
    layout/               Header, mobile menu, footer, sticky mobile bar
    home/                 Homepage sections
    service/              Service page template
    sections/             Shared sections (hero, CTA, location, reviews, map)
    contact/              Contact form (React Hook Form + Zod)
    ui/                   Primitives (buttons, prices, FAQ, labels)
  content/                All content and data: the single source of truth
    business.ts           Address, phone, hours, links
    pricing.ts            All prices, conditions and notes
    services.ts           Main services: copy, packages, FAQ
    other-services.ts     Engine wash, paint protection, window film, storage
    booking.ts            Booking paths and cancellation terms
  lib/                    SEO helpers, formatting, schema, mail, rate limiting
  assets/images/          Photos from the current website
```

To change a price, edit only `src/content/pricing.ts`. Every page (price list, service pages, homepage) reads from it. The content files are plain typed data, so they can later be swapped for a CMS without touching the components.

## Booking

The current website has two booking paths, and the redesign keeps both. None of the booking is simulated.

| Service | Path |
|---|---|
| Tyre change (däckskifte) | The existing online calendar, the **Amelia** WordPress plugin at `/boka-tid-v2/`. The page links to it, controlled by `TIRE_BOOKING_URL`. |
| Everything else | Phone, e-mail or the contact form. This matches `/boka-tid-ovrigt/` on the current site. |

Amelia runs inside WordPress and has no hosted booking page of its own. Moving the site to Vercel therefore requires one of these:

1. **Keep WordPress for booking only**, on a subdomain such as `boka.soderortsbilvard.se`, and set `TIRE_BOOKING_URL` to it. This is the quickest option.
2. **Integrate Amelia's REST API** (requires an Amelia Elite licence) to show available times on the new site.
3. **Switch to a booking service with a hosted or embeddable calendar** (for example BokaDirekt or Timecenter) and link or embed it.

Verified terms are shown wherever bookings happen:

- Cancel or rebook at least 24 hours in advance.
- A missed booking is charged 500 kr.
- Stored tyres are prepared the day before the visit.

## Contact form

- The same Zod schema runs on the client (React Hook Form) and on the server (Server Action).
- Spam protection: a honeypot field, a minimum fill time and a per-IP rate limit (5 submissions per 10 minutes, kept in memory). On serverless hosting, use a shared store such as Upstash Redis or Vercel Firewall rules for a strict limit.
- Mail is delivered through the Resend HTTP API, so no SDK dependency is needed. Until `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` are set, the form is shown **disabled** with a clear phone and e-mail alternative. It never shows a success message unless the mail provider accepted the message.
- The contact page is prerendered, so the mail variables must be present **at build time**.

## SEO

- Every page has its own title, description, canonical URL and Open Graph data.
- `sitemap.xml` and `robots.txt` are generated.
- Structured data: `AutoWash` + `TireShop` (LocalBusiness) with address, coordinates and opening hours. Service pages also have `FAQPage`, and all subpages have `BreadcrumbList`.
- **301 redirects** in `next.config.ts` cover all old URLs: service pages, booking pages, blog posts and policy pages.
- The thin location pages (`/bilverkstad-*`, `/bilservice-*`) are merged into the homepage and service pages instead of being rebuilt as duplicate content.
- The `/bromsbyte-*` pages redirect to `/tjanster`, because brake work cannot be verified as a current service.

## Privacy and security

- The original site's customer directory pages (`/kundkatalogen`, `/kundkatalogens-listor`) were **not** visited or migrated.
- Google Maps loads only after the visitor clicks "Visa karta".
- Reviews come from Reco's official widget (live data, not copied).
- No analytics or marketing cookies are set.
- Security headers are set in `next.config.ts`.
- API keys are only read server-side (`server-only`).

## Before going live: owner decisions

- [ ] Approve `/integritet`. It describes how this site handles data and should be checked against the company's existing data protection policy.
- [ ] Migrate "Allmänna villkor" (DRF/Konsumentverket terms) from the current site if it should stay public. It is not linked yet.
- [ ] Explain what differs between **Silver** and **Guld** storage. Only the names and prices are published today.
- [ ] Confirm opening hours. The footer says Mon–Fri 07–17; some Saturdays are open according to the booking FAQ.
- [ ] Choose the booking setup (see above) and configure Resend for the contact form.
- [ ] Confirm the photo rights. All photos come from the current website.

## Deploying to Vercel

1. Import the repository in Vercel. The framework is detected automatically.
2. Set the environment variables from `.env.example`.
3. Point the domain at the project. WordPress (for the booking calendar) must first be moved to a subdomain if it should stay.
