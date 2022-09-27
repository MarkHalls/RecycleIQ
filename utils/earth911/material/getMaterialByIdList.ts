import { getAllMaterials } from "./getAllMaterials.ts";
import { Err, Ok, Result } from "../../result/index.ts";

import { Material } from "./index.ts";

export const getMaterialByIdList = async (
  idList: [number],
): Promise<Result<Material[], string>> => {
  const allMaterials = await getAllMaterials();

  if (allMaterials.ok) {
    return Ok(
      allMaterials.value.filter((mat) => idList.includes(mat.material_id)),
    );
  } else {
    return Err(allMaterials.error);
  }
};
