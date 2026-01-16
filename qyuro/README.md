# Qyuro UI (Dash2)

Dark, cinematic chat UI built with Next.js, Tailwind CSS, and Firebase Auth.

## Getting started

1. Install dependencies:
   - `npm install`
2. Add Firebase configuration to `.env.local` (see `.env.example`).
3. Place your background video at `public/background-video.mp4`.
   - Optional: add a poster image at `public/background-poster.jpg`.
4. Start the dev server:
   - `npm run dev`

Open `http://localhost:3000` to view the UI.

## Firebase Auth

The sign-in screen supports Google login and email/password login via Firebase.
Set the following values in `.env.local`:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
