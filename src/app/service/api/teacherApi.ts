import { createServiceNoToken } from "./axios";

const url = "https://testapi.io/api/linhld4395";

const instance = createServiceNoToken(url);

export const getAllTeacher = async () => {
  const response = await instance.get("teachers");
  return response.data.data;
};
