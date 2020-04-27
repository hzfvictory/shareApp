import axios from "@/service/api"
import {PREFIX} from "@/service/config.default"

//获取所有的文章列表
export const queryArticleList = (id: string, params?: any) => {
  const baseUrl = `${PREFIX}/share/articles/${id}`;
  return axios.get(baseUrl, params);
};
