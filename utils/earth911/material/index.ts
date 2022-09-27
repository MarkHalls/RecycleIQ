import { getAllMaterials } from "./getAllMaterials.ts";
import { getMaterialById } from "./getMaterialById.ts";
import { getMaterialByIdList } from "./getMaterialByIdList.ts";

export interface Material {
  description: string;
  url: string;
  description_legacy: string;
  material_id: number;
  long_description: string;
  family_ids: number[];
  image: string;
  image_url?: string;
}

export interface ResponseSuccess {
  search_time: string;
  num_results: number;
  result: Material[];
}

export interface ResponseError {
  error: string;
}

export { getAllMaterials, getMaterialById, getMaterialByIdList };
