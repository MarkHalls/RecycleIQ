import { e911, e911_key } from "../index.ts";
import { Material, ResponseError, ResponseSuccess } from "./index.ts";
import { materialImages } from "../images.ts";
import { Err, Ok, Result } from "../../result/index.ts";

const addImageToMaterial = (material: Material): Material => {
  const imageUrl =
    materialImages[material.material_id as keyof typeof materialImages];

  return {
    ...material,
    image_url: imageUrl,
  };
};

export const getAllMaterials = async (): Promise<
  Result<Material[], string>
> => {
  const searchParams = new URLSearchParams({ ...e911_key });
  const res: ResponseSuccess | ResponseError = await e911.get(
    `earth911.getMaterials`,
    { searchParams },
  )
    .json();

  if ("result" in res) {
    return Ok(res.result.map(addImageToMaterial));
  } else {
    return Err(res.error);
  }
};
