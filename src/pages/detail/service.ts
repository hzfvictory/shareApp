import axios from "@/service/api"
import {PREFIX} from "@/service/config.default"

export const getArticleDetail = (id) => {
  const baseUrl = `${PREFIX}/article-detail/${id}`;
  return axios.get(baseUrl)
};
