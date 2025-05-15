import {
  createError,
  defineEventHandler,
  readBody,
  readFormData,
  sendNoContent,
} from "h3";
import { parseFormDataToObject } from "~/utils/formdata.util.ts";

export default defineEventHandler(async (event) => {
  const body = await (async () => {
    const contentType = event.headers.get("Content-Type")?.split(";")[0];
    if (contentType === "application/json") {
      return await readBody(event);
    }
    if (contentType === "multipart/form-data") {
      const formData = await readFormData(event);
      return parseFormDataToObject(formData, { array: "files" });
    }
    throw createError({ status: 415 });
  })();

  console.log(body);

  return sendNoContent(event);
});
