import { e911, e911_key } from "../index.ts";
import { materialImages } from "../images.ts";

interface Material {
  description: string;
  url: string;
  description_legacy: string;
  material_id: number;
  long_description: string;
  family_ids: [number];
  image: string;
}

interface MaterialResponse {
  search_time: string;
  num_results: number;
  result: [Material];
}

export const getAllMaterials = async () => {
  const searchParams = new URLSearchParams({ ...e911_key });
  const res = await e911.get(`earth911.getMaterials`, { searchParams })
    .json() as MaterialResponse;
  const results = res.result;

  const materialIds = Object.keys(materialImages);

  return results;
};
