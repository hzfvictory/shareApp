import axios from "@/service/api"
import {PREFIX} from "@/service/config.default"

export const getList = () => {
  const baseUrl = `${PREFIX}/member?admin_id=5e09b9e0e4b1c78b2ddde7bd&skip=0&limit=10`
  return axios.get(baseUrl)
};

//获取banner
export const queryBanner = (userId: string) => {
  const baseUrl = `${PREFIX}/share/${userId}/banner`;
  return axios.get(baseUrl);
};

//获取banner
export const addBanner = (userId: string, params: any[]) => {
  const baseUrl = `${PREFIX}/share/${userId}/banner`;
  return axios.post(baseUrl, params);
};

//获取所有的文章列表
export const queryArticleList = (id: string, params?: any) => {
  const baseUrl = `${PREFIX}/share/articles/${id}`;
  return axios.get(baseUrl, {params});
};
