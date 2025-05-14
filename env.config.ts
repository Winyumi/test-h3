import * as e from "envalid";

export const env = e.cleanEnv(Deno.env.toObject(), {
  DEV: e.bool({ default: false }),
  PORT: e.num({ default: 3000 }),
});

export const dev = env.DEV;
