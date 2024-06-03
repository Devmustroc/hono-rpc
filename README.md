# Descovering Hono RPC

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This Project is a quotes app that fetches quotes from an API and displays them on the page,

# The stack used in this project are:
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com/)
- [Hono JS](https://hono.dev/)
- [Bun](https://bun.sh/)
- [DrizzleORM](https://orm.drizzle.team/)
- [NeonTech Database](https://neon.tech/)

# running the project

add a `.env` file in the root of the project and add the following variables:
```env
AUTH_SECRET=""

GITHUB_ID=""
GITHUB_SECRET=""

DATABASE_URL=""
```

before running the project, you need to install the dependencies by running the following command:
```bun
bun install
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

