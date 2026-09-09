# PropertyPoint.id — PROJECT NOTES
## Master Project & Learning Log
**Last updated:** 4 September 2026

---

# 1. PROJECT OVERVIEW

**Project:** PropertyPoint.id  
**Hosting:** GitHub Pages  
**Repository:** `propertypointid-sys/propertypoint.id`  
**Local project path:** `G:\My Drive\PROPERTY\PointProperty.id\PropertyPoint.id`

PropertyPoint.id is a property discovery and lead-generation platform.

Core concept:

**PropertyPoint → SeVIA → Hadi**

- PropertyPoint = property gateway / discovery platform
- SeVIA = AI Property Concierge
- Hadi = human Property Specialist / advisor

The current website is a working static website. The next major evolution is to make it dynamic and personalized through SeVIA while preserving the existing PropertyPoint flow.

---

# 2. DEVELOPMENT PRINCIPLE

> **ADD, CONNECT, IMPROVE — NOT REWRITE**

The existing website must remain functional.

Before changing code:
1. Audit the current HTML, CSS and JavaScript.
2. Understand the existing state/flow.
3. Identify the safest SeVIA bridge point.
4. Make changes incrementally.
5. Test after each meaningful change.

---

# 3. CURRENT WEBSITE FLOW

## Step 1 — Main Intent

- BUY
- SELL
- RENT
- INVEST
- PRIMARY
- I'M NOT SURE

## Step 2 — Dynamic titles

BUY: **What are you looking to buy?**  
SELL: **What would you like to sell?**  
RENT: **What are you looking to rent?**  
INVEST: **What type of opportunity interests you?**  
PRIMARY: **What kind of primary project?**  
UNSURE: **How can we help you?**

## BUY
- House — Landed residential property
- Apartment — Apartment & condominium
- Commercial — Shop house, office & commercial
- Warehouse — Warehouse & industrial property
- Land — Land & development opportunities
- Primary Project — New development opportunities
- Other — Something else

## SELL
- House — Sell a landed property
- Apartment — Sell an apartment
- Commercial — Sell commercial property
- Warehouse — Sell warehouse / industrial
- Land — Sell land
- Other — Something else

## RENT
- House — House for rent
- Apartment — Apartment for rent
- Commercial — Shop house / office
- Warehouse — Warehouse / industrial
- Other — Something else

## INVEST
- Residential — House & apartment opportunities
- Commercial — Commercial investment
- Warehouse — Industrial & logistics
- Land — Land investment opportunities
- Primary Project — New development opportunities
- Open to Ideas — Show me interesting opportunities

## PRIMARY
- Residential Project — New house & residential launches
- Apartment Project — New apartment launches
- Commercial Project — Shop house & commercial projects
- Warehouse / Industrial — Industrial & logistics projects
- Investment Opportunity — Projects with investment potential
- Show Me What's New — Explore current opportunities

## I'M NOT SURE
- I'm Looking to Buy — Help me understand what to buy
- I'm Looking to Sell — Help me evaluate my property
- I'm Looking to Invest — Help me find an opportunity
- I'm Exploring — I just want to see what's interesting

The existing flow then includes area selection and a result summary/WhatsApp handover.

---

# 4. CURRENT WHATSAPP FLOW

Existing inquiry template:

Hello PropertyPoint.id,
I found your website and I'm interested in a property opportunity.

I'm looking to: ${action}

Property type:
${property}

Preferred area:
${area}

Please let me know what opportunities may be available.

Thank you.

Generic Let's Talk:

Hello PropertyPoint.id,

I would like to know more about your property services and opportunities.

Thank you.

---

# 5. KNOWN FIXES / TECHNICAL LESSONS

## I'm Not Sure bug

WhatsApp previously showed the wrong property type for the I'M NOT SURE flow.

Fixed in commit:

`1485b7c` — `Fix unsure inquiry flow`

## PNG optimization

Optimized large icon assets:

- `assets/icons/optimized/exploring.png`
- `assets/icons/optimized/looking-buy.png`
- `assets/icons/optimized/show-me.png`
- `assets/icons/optimized/to-invest.png`

Commit:

`354e9d0` — `Optimize large icon assets`

Original large versions removed in:

`188b262` — `Remove unused large icon assets`

## Case-sensitive filename issue

Windows is case-insensitive; GitHub Pages/web hosting can be case-sensitive.

`other.png` was renamed through Git to:

`Other.png`

Current intended mapping:

`"Other": "assets/icons/Other.png"`

Potential latent issue:

`"Open to Ideas": "assets/icons/other.png"`

Do not change blindly. Verify during audit.

---

# 6. KNOWN UX ISSUES — TO REVISIT

Previously observed:
1. Mobile input area could appear too narrow.
2. Send button could consume too much width.
3. Back navigation needed improvement.
4. Start Over needed clear behavior.
5. Find Your Property navigation needed to reliably open the intended flow.

IMPORTANT: The newly uploaded current code contains Back buttons and Start Over. Therefore these items must be **verified against the current implementation during Audit #1**, rather than assumed to still be bugs.

---

# 7. SEVIA — AI PROPERTY CONCIERGE

## Locked name

Use exactly:

> **SeVIA**

Meaning:

> **Self-Evolving Virtual Intelligence Assistant**

For PropertyPoint:

> **SeVIA = AI Property Concierge**

SeVIA should feel like Hadi's partner, not a generic chatbot.

---

# 8. LOCKED SEVIA WELCOME

> **Hi, I'm SeVIA.**  
> **PropertyPoint's AI Property Concierge, partnering with Hadi.**  
> **Let's find what you're really looking for.**

---

# 9. SEVIA EXPERIENCE

Example:

**BUY → HOUSE → PIK**

Then show:

### Want help narrowing it down?

> I can help you narrow down your options based on your needs, budget and preferences.

Language choices:
- 🇮🇩 Bahasa Indonesia
- 🇬🇧 English
- 🇨🇳 中文 Mandarin

Language selection belongs with the SeVIA invitation.

The client must also have a clear Skip / Continue to WhatsApp path.

---

# 10. SEVIA CONVERSATION DESIGN

SeVIA should be conversational, not a rigid questionnaire.

After each client answer:
1. Understand it.
2. Respond naturally.
3. Ask the next sensible question.
4. Maintain relevant context.

Client may type free-form answers or choose options.

Client may ask side questions such as:
- Who am I chatting with?
- How about Kelapa Gading?
- What about PIK2?
- What's the difference?

SeVIA should follow the conversation naturally rather than forcing the client back into a fixed sequence.

---

# 11. SEVIA THREE BROAD MODES

## DISCOVERY
Understand:
- budget
- purpose
- size / bedrooms
- condition
- preferences
- location flexibility

## CONVERSATION
Handle:
- side questions
- comparisons
- changing preferences
- natural dialogue
- context retention

## QUALIFICATION
Consolidate the conversation into a useful property profile.

Example:

BUY  
HOUSE  
Budget: ± IDR 8B  
Initial area: PIK  
Also considering: PIK2 / Kelapa Gading  
Purpose: Investment  
Priority: Capital appreciation  
Location flexibility: Open

Then:

> Continue on WhatsApp

---

# 12. AI ROLE BOUNDARY

SeVIA is primarily:

> **Needs analyzer + qualification layer**

It is not primarily an inventory salesman.

SeVIA must never pretend to be Hadi.

If asked who the client is chatting with, SeVIA should transparently identify itself as PropertyPoint's AI Property Concierge partnering with Hadi.

SeVIA may suggest directions but must not claim actual available inventory unless verified inventory data is connected.

Preferred wording:
- may be worth exploring
- could be suitable
- depending on priorities
- one direction to consider

---

# 13. AREA RESEARCH

SeVIA may eventually research current area information such as:
- PIK
- PIK2
- Kelapa Gading
- other relevant locations

Current/changing information should use web/search grounding when appropriate.

Area research is guidance, not a guarantee.

Future capability levels:

**Level 1:** needs discovery / direction  
**Level 2:** area research  
**Level 3:** actual property matching after verified inventory database exists

Do not jump to Level 3 without reliable inventory.

---

# 14. CLIENT LANGUAGES

Current strategy:

1. Bahasa Indonesia
2. English
3. Mandarin / Chinese

No need to add Japanese, Malay or other languages at this stage.

Selected language must appear in the agent summary:

> 🌐 Client Language: Mandarin / English / Bahasa Indonesia

---

# 15. WHATSAPP HANDOVER

Client-facing WhatsApp should follow the selected language.

Agent-facing summary should include:
- Client language
- Need / action
- Property type
- Preferred area
- Budget
- Purpose
- Preferences
- Location flexibility
- AI insight
- Relevant conversation context

Goal:

> Hadi receives a qualified conversation, not just a phone number.

---

# 16. SEVIA VISUAL IDENTITY

SeVIA is envisioned as:
- futuristic female Asian AI character
- premium
- professional
- elegant
- modern
- approachable
- restrained rather than overly sci-fi

No logos on the character.

## International
Futuristic luxury professional outfit.

## Indonesia
Futuristic Indonesian-inspired styling, not traditional kebaya.

Preferred direction:
modern navy / cream / gold with subtle Indonesian / batik-inspired detailing.

## Mandarin
Futuristic Chinese-inspired styling.

Preferred direction:
red / white / black / gold with Chinese-inspired floral/detail elements.

---

# 17. CHARACTER CONTINUITY RULE

For each language, Main (#1) and Guiding (#2) assets must preserve:
- same face
- same hairstyle
- same costume
- same colors
- same design details

Only the pose should change.

Do not redesign the outfit between poses.

---

# 18. SEVIA ASSET FOLDER

Planned location:

`assets/sevia/`

Core planned assets:

```text
assets/
└── sevia/
    ├── sevia-international.png
    ├── sevia-international2.png
    ├── sevia-indonesia.png
    ├── sevia-indonesia2.png
    ├── sevia-mandarin.png
    ├── sevia-mandarin2.png
    ├── bg-international.png
    ├── bg-indonesia.png
    └── bg-mandarin.png
```

PNG is acceptable for now.

Optimization to WebP can happen after the experience works correctly.

A previously generated profile SeVIA image had an unwanted background and is NOT considered final.

---

# 19. SEVIA BACKGROUNDS

All backgrounds must contain:
- no SeVIA
- no UI
- no text
- no logo

## Indonesia
Modern Indonesian luxury residence / tropical urban estate:
- tropical plants
- subtle Nusantara architectural cues
- pool
- warm earthy premium atmosphere
- subtle Jakarta/Tangerang urban context

Avoid generic mountains/hills.

## Mandarin
- Chinese pavilion / lattice elements
- red lanterns
- blossom
- water
- sophisticated urban / Shanghai-style skyline
- red/gold accents

Must remain visually distinct from Indonesia.

---

# 20. SEVIA UI

Preferred:
- futuristic
- premium
- clean
- glass panels
- restrained futuristic details
- highly usable

## Navigation

Back and Home should be:
- near the top
- clearly visible
- high contrast
- clearly clickable
- horizontally separated

Back = left.

Home = right.

Home circular icon = right side of Home button/pill.

The old top navigation:

BUY | SELL | RENT | INVEST | PRIMARY | COMMERCIAL

is considered unnecessary inside SeVIA because Back/Home provide navigation.

---

# 21. TAGLINE

Use exactly:

> **Connecting People, Places, Opportunities & Prosperity**

Do not split it into separate vertical words.

Avoid unnecessary duplication.

---

# 22. SEVIA TRANSITION

The current PropertyPoint interface should transform smoothly into SeVIA.

It must not feel like opening a separate website.

Use a gradual transition through:
- animation
- lighting
- background transition
- UI transformation

Conceptual duration discussed:

approximately 0.8–1.5 seconds.

Exact timing is not locked.

Core principle:

> **PropertyPoint should feel like it is transforming into SeVIA.**

---

# 23. MOBILE SEVIA

Mobile should use a vertical adaptation while preserving:
- same visual language
- premium/futuristic feel
- clear navigation
- usable conversation

---

# 24. AI ENGINE ARCHITECTURE

Current prototype direction:

> **Gemini**

Frontend must remain engine-agnostic.

Future engine could change without rebuilding the SeVIA UI.

Architecture:

PropertyPoint frontend
↓
Secure backend / proxy
↓
AI engine

Never expose API keys directly in:
- `script.js`
- HTML
- public frontend files

---

# 25. GEMINI ACCOUNT

Existing Google account:

`propertypoint.id@gmail.com`

No new email account is needed.

Intended organization:

`propertypoint.id@gmail.com`
↓
Google AI Studio
↓
PropertyPoint Google Cloud Project
↓
Gemini API / Auth Key
↓
Secure backend / proxy
↓
PropertyPoint.id
↓
SeVIA

API credentials must remain server-side.

Current Gemini setup should use Google's current Auth Key approach rather than old Standard Key instructions.

---

# 26. GEMINI / SEVIA MEMORY

Gemini does not automatically have permanent knowledge of SeVIA.

SeVIA's:
- identity
- personality
- role
- rules
- qualification logic
- transparency rules
- language behavior

must be supplied through system instructions/configuration.

Conversation context must be managed by the application/backend or supported conversation mechanisms.

Do not assume vendor-side memory is permanent.

---

# 27. COST STRATEGY

Initial goal:

> Build and test with minimal / zero cost where practical.

Gemini is favored for prototyping because selected Gemini API models/usage have free-tier options.

Once PropertyPoint generates income:

> Pay for the AI if needed.

The engine can later be upgraded or changed according to quality, cost, reliability, context and business needs.

---

# 28. DEVELOPMENT ROADMAP — LOCKED

1. **Audit website**
2. **Bridge to SeVIA Experience**
3. **SeVIA Experience** — redesign / UI change
4. **SeVIA Welcome**
5. **Name**
6. **Conversational AI**
7. **AI Qualification**
8. **WhatsApp Handover**
9. **Connect to AI Engine**
10. **Testing**
11. **Final Polish**

This is planning only until Hadi explicitly says implementation should begin.

---

# 29. NEXT STEP — AUDIT #1

The current uploaded source files are:
- `index.html`
- `style.css`
- `script.js`

They should be audited together before any SeVIA implementation.

Audit:
1. HTML structure
2. CSS architecture
3. JavaScript/state flow
4. Step navigation
5. Property-type logic
6. Area selection
7. Result summary
8. WhatsApp generation
9. Asset paths
10. Mobile behavior
11. Existing bugs
12. Safest SeVIA integration point

Do not start coding before the audit is understood.

---

# 30. PROJECT NOTES RULE

Maintain ONE master file:

`PROJECT_NOTES.md`

Do not create a new notes file for every discussion.

Update current decisions in place.

Append important:
- learning
- bugs
- fixes
- architecture decisions
- UI decisions
- completed work
- unresolved issues

Git commit history provides technical version history.

If a new master copy is downloaded later:
- replace the old `PROJECT_NOTES.md`
- keep the filename exactly `PROJECT_NOTES.md`

---

# 31. CURRENT STATUS

## Established / working
- Existing PropertyPoint static flow
- GitHub Pages hosting
- BUY / SELL / RENT / INVEST / PRIMARY / UNSURE structure
- Area selection
- Result summary
- WhatsApp handover
- Back controls in current code
- Start Over in current code
- SeVIA concept
- SeVIA name and intro
- SeVIA visual direction
- Three-language strategy
- AI qualification concept
- Secure backend/proxy principle
- Gemini prototype direction
- Development roadmap

## Not yet implemented
- SeVIA bridge
- SeVIA transition
- Final SeVIA experience UI
- SeVIA welcome implementation
- Name capture implementation
- Conversational AI
- AI qualification
- Multilingual AI
- AI WhatsApp handover
- Secure Gemini connection
- Full testing
- Final polish

## Items to verify during audit
- Mobile input/layout behavior
- Back navigation behavior
- Start Over behavior
- Find Your Property navigation
- `Open to Ideas` icon path case issue
- Final profile SeVIA asset
- Any other asset path mismatches
- Current CSS/JS redundancy or conflicts

---

# 32. CORE PRODUCT PHILOSOPHY

The goal is not to make PropertyPoint complicated.

The goal is to make it feel:

> **Alive. Intelligent. Personal. Useful.**

The visitor should feel that PropertyPoint understands what they are trying to accomplish.

SeVIA should reduce the gap between:

> "I am looking for something"

and:

> "Hadi now understands exactly what I need."

Ideal experience:

**PropertyPoint discovers intent.**  
**SeVIA understands needs.**  
**SeVIA qualifies the opportunity.**  
**Hadi takes over when human advice is valuable.**

---

# END OF PROJECT NOTES
