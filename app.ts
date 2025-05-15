import { createApp, toWebHandler } from "h3";
import { env } from "~/env.config.ts";
import routes from "~/routes/routes.ts";

export const app = createApp();

app.use(routes);

const handler: (req: Request) => Promise<Response> = toWebHandler(app);

Deno.serve({ port: env.PORT }, handler);
