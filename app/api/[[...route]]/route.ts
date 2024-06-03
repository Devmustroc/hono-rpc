import {Hono} from 'hono';
import { handle } from 'hono/vercel';
import { authHandler, initAuthConfig, verifyAuth } from "@hono/auth-js"
import {getAuthConfig} from "@/auth.config";
import quotes from "@/app/api/[[...route]]/quotes";



export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.use("*", initAuthConfig(getAuthConfig));
app.use("/auth/*", authHandler());

const route = app.route('/quotes', quotes);

export type AppType = typeof route

export const GET = handle(app);
export const POST = handle(app);