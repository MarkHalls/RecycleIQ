import { getAllMaterials } from "./getAllMaterials.ts";
import { Err, Ok, Result } from "../../result/index.ts";

import { Material } from "./index.ts";

export const getMaterialById = async (
  id: number,
): Promise<Result<Material, string>> => {
  const allMaterials = await getAllMaterials();
  if (allMaterials.ok) {
    return Ok(
      allMaterials.value.filter((material) => material.material_id === id)[0],
    );
  } else {
    return Err(allMaterials.error);
  }
};
