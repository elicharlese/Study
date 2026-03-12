# Learning Platform

A Next.js-based learning platform with an interactive UI for exploring academic majors and minors across many categories.

## Project Structure

This is a monorepo using pnpm:
- `apps/web/` — The Next.js 15 web application (main app)
- `apps/desktop/` — Electron desktop app (not active on Replit)
- `apps/mobile/` — Mobile app (not active on Replit)

## Running the App

The main workflow runs: `pnpm run dev`
- Dev server: `cd apps/web && next dev -p 5000 -H 0.0.0.0`
- Start server: `cd apps/web && next start -p 5000 -H 0.0.0.0`
- Port: **5000** (required for Replit webview)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Monorepo**: NX

## Replit Notes

- Port 5000 with `0.0.0.0` host binding is required for Replit preview pane compatibility
- Turbopack is disabled in the dev command for stability in Replit environment
- Desktop/mobile apps are not configured for Replit
