import { db } from "../../db/mongo";
export async function findProperties() {
  const properties = await db.collection("property").find().toArray();
  return properties;
}
