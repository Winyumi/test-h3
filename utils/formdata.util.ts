type ParseFormDataToObjectOptions = {
  /**
   * Convert values into arrays.
   * - `auto` - Convert values to arrays if duplicate keys exist. (Default)
   * - `files` - Convert only Files to arrays regardless of number of keys.
   * - `all` - Convert all values to arrays regardless of number of keys.
   * - `none` - Do not convert to arrays and allow overwriting of values.
   */
  array?: "auto" | "files" | "all" | "none";
};

export function parseFormDataToObject(
  formData: FormData,
  options?: ParseFormDataToObjectOptions
) {
  const obj: Record<string, FormDataEntryValue | FormDataEntryValue[]> = {};
  const array = options?.array ?? "auto";

  for (const [key, value] of formData.entries()) {
    if (array === "auto") {
      if (key in obj) {
        if (!Array.isArray(obj[key])) obj[key] = [obj[key]];
        obj[key].push(value);
      } else {
        obj[key] = value;
      }
    }

    if (array === "files") {
      if (value instanceof File) {
        if (!Array.isArray(obj[key])) obj[key] = [];
        obj[key].push(value);
      } else {
        obj[key] = value;
      }
    }

    if (array === "all") {
      if (!Array.isArray(obj[key])) obj[key] = [];
      obj[key].push(value);
    }

    if (array === "none") {
      obj[key] = value;
    }
  }

  return obj;
}
