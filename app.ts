import { createApp, createRouter, defineEventHandler, toWebHandler } from "h3";
import { env } from "~/env.config.ts";

export const app = createApp();

const router = createRouter();

app.use(router);

router.get(
  "/",
  defineEventHandler((_event) => {
    return { hello: "world!" };
  })
);

const handler: (req: Request) => Promise<Response> = toWebHandler(app);

Deno.serve({ port: env.PORT }, handler);
