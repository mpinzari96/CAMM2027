# CAMM Conference 2027

Official registration and information website for the **CAMM Conference 2027** (Christian American Media Ministry Conference).

## Event Details

- **Dates**: January 22-23, 2027
- **Location**: Bible Baptist Church, Sacramento, CA
- **Contact**: (916) 822-1472

## Features

- Modern, dark atmospheric design with sky-blue accents
- Interactive conference schedule with day tabs and track filtering
- 4 specialized media tracks: Video, Audio, Projection, Photography
- Subsplash registration integration with ad-blocker detection and fallback
- FAQ section with expandable answers
- Mobile-responsive design
- Feedback page for attendee input

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main conference page
│   ├── feedback/
│   │   └── page.tsx      # Feedback form page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles and theme
├── lib/
│   └── conference-data.ts # Centralized conference data
public/
└── camm-logo-new.png     # CAMM Conference logo
```

## Configuration

All conference details (dates, venue, schedule, FAQs, etc.) are centralized in `src/lib/conference-data.ts` for easy updates.

## License

© 2027 CAMM Conference. All rights reserved.
