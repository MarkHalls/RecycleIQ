import ky from "https://cdn.skypack.dev/ky?dts";

export const e911 = ky.create({
  prefixUrl: "https://api.earth911.com/",
});

export const e911_key = {
  api_key: Deno.env.get("earth911_key") || "",
};
