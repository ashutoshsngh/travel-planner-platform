# Travel planner platform

Next.js 15 frontend. Backends: Contentful. Direct SDK calls from the frontend.

## Run with Docker

```bash
cp .env.example .env.local
# fill in real credentials in .env.local
docker compose up
```

App runs at http://localhost:3000.

## Run without Docker

```bash
npm install
cp .env.example .env.local
npm run dev
```
