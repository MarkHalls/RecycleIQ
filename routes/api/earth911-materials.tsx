import { Handlers, PageProps } from "$fresh/server.ts";
import { getAllMaterials } from "../../utils/earth911/material/index.ts";

export const handler: Handlers<any | null> = {
  async GET(_, ctx) {
    const mats = await getAllMaterials();

    if (!mats.ok) {
      console.error(mats.error);
      return ctx.render(mats.error);
    }
    console.log(mats.value[0]);

    return ctx.render(JSON.stringify(mats.value[0]));
  },
};

export default function Page({ data }: PageProps<any | null>) {
  if (!data) {
    return <h1>couldn't fetch earth</h1>;
  }
  return <div>{data}</div>;
}
