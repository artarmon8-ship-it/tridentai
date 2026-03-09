# TridentAI Website

A complete production-ready website for TridentAI consulting company.

## Tech Stack
-   **Frontend**: Next.js, React, TailwindCSS, Framer Motion
-   **Backend**: Node.js, Express
-   **Database**: PostgreSQL, Prisma ORM
-   **DevOps**: Docker, render.yaml

## Local Development (Docker)
1. Ensure Docker Desktop is installed.
2. Run `docker-compose up --build`
3. The frontend will be available at [http://localhost:3000](http://localhost:3000)
4. The backend API will be available at [http://localhost:5000](http://localhost:5000)

## Deployment (Render.com)
This project is configured to deploy easily on Render via the Blueprint `render.yaml`.
1. Fork or push this repository to GitHub.
2. In Render dashboard, create a new "Blueprint Instance" and connect your repository.
3. Render will automatically provision the PostgreSQL database, the Node backend, and the Next.js frontend web service.
