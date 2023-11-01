import { createServiceNoToken } from "./axios";

const url = "https://testapi.io/api/linhld4395";

const instance = createServiceNoToken(url);

export const getAllStudent = async () => {
  const response = await instance.get("students");
  return response.data.data;
};