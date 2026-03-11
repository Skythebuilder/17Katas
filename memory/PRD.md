# 17Katas — PRD

## Original Problem Statement
Build a premium, dark luxury landing page for "17Katas" — India's first performance-based content distribution platform.

## Architecture
- **Frontend**: React (CRA + CRACO), Tailwind CSS, Lucide React icons
- **Backend**: FastAPI + MongoDB (Motor async driver)
- **Fonts**: Bebas Neue (headlines), Barlow Condensed (labels), Manrope (body) via Google Fonts
- **Animations**: CSS Intersection Observer scroll reveal, CSS keyframe ticker

## Brand
- Colors: #080808 (deep black), #E8000D (blood red)
- Feel: Ferrari x Bloomberg — luxury meets underground

## Core Requirements (Static)
- Single-page landing, 9 sections
- Waitlist form submissions stored in MongoDB
- Mobile responsive
- No white/grey backgrounds; black only
- Red used ONLY for accents/CTAs

## What's Been Implemented (v1 — 2025-02)
- **Navbar**: Fixed, 17KATAS logo + tagline + Join Beta CTA
- **Hero**: Full-screen, "CONTENT THAT PAYS" in Bebas Neue ~13vw, red glow, dual CTAs, metrics row
- **Ticker**: Red bar rotating -0.8deg, infinite scroll with all brand messages
- **Stats**: 3-column grid — ₹50+, 0 Days, 100% with hover red transitions
- **How It Works**: 3 step cards with large ghost number overlay, hover bottom-line animation
- **Why 17Katas**: 4 feature cards with Lucide icons, gap-px grid
- **Dual Waitlist Forms**: Brand (name, email, brand_name, budget_range) + Distributor (name, email, handle, primary_skill). Both connected to MongoDB via POST /api/waitlist/brand and POST /api/waitlist/distributor. Validation + success/error states.
- **Manifesto**: Large centered Bebas Neue quote, red accent lines
- **Footer**: Logo + tagline + copyright
- **Global**: Noise grain texture, cut-corner buttons (clip-path), scroll reveal animations (Intersection Observer), noise texture overlay

## API Endpoints
- GET /api/ — health check
- POST /api/waitlist/brand — store brand entry
- POST /api/waitlist/distributor — store distributor entry
- GET /api/waitlist — retrieve all entries (admin)

## Test Results (iteration_1)
- Backend: 100% pass
- Frontend: 100% pass

## Prioritized Backlog

### P0 (MVP — Done)
- [x] All 9 sections built
- [x] Waitlist form + MongoDB integration
- [x] Brand typography (Bebas Neue, Barlow Condensed, Manrope)
- [x] Cut-corner buttons
- [x] Scroll reveal animations
- [x] Red/Black only palette

### P1 (Next Phase)
- [ ] Email notification on waitlist signup (via Resend or SendGrid)
- [ ] Admin dashboard to view waitlist entries
- [ ] Waitlist count display (social proof)
- [ ] Rate limiting / duplicate email prevention on API
- [ ] Server-side email format validation

### P2 (Future)
- [ ] OG image for social sharing
- [ ] Blog/updates section
- [ ] Referral system for waitlist
- [ ] Campaign calculator widget (estimate budget vs views)
