import { createRouter } from "h3";
import helloGet from "./hello/hello.get.ts";

const routes = createRouter();

routes.get("/hello", helloGet);

export default routes;
