import axios from "@/service/api"

export const getList = () => {
  const baseUrl = '/member?admin_id=5e09b9e0e4b1c78b2ddde7bd&skip=0&limit=10'
  return axios.get(baseUrl)
};
