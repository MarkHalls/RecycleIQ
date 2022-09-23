import { Handlers, PageProps } from "$fresh/server.ts";
import { getAllMaterials } from "../../utils/earth911/material/index.ts";

export const handler: Handlers<any | null> = {
  async GET(_, ctx) {
    const mats = await getAllMaterials();
    console.log(mats[0]);

    if (mats.length < 1) {
      return ctx.render(null);
    }

    return ctx.render(JSON.stringify(mats[0]));
  },
};

export default function Page({ data }: PageProps<any | null>) {
  if (!data) {
    return <h1>couldn't fetch earth</h1>;
  }
  return <div>{data}</div>;
}
