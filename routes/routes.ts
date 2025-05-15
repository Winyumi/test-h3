import { createRouter } from "h3";
import helloGet from "./hello/hello.get.ts";
import helloPost from "./hello/hello.post.ts";

const routes = createRouter();

routes.get("/hello", helloGet);
routes.post("/hello", helloPost);

export default routes;
