import axios from "@/service/api"
import {PREFIX} from "@/service/config.default"

export const getArticleList = (c_id) => {
  const baseUrl = `${PREFIX}/article/${c_id}`
  return axios.get(baseUrl)
};
