import axios from "@/service/api"
import {PREFIX} from "@/service/config.default"

//文章分类列表
export const queryArticleList = (userId: string) => {
  const baseUrl = `${PREFIX}/share/${userId}/categories`;
  return axios.get(baseUrl);
};
//文章分类添加
export const addArticleList = (userId: string, params: any) => {
  const baseUrl = `${PREFIX}/share/${userId}/category`;
  return axios.post(baseUrl, params);
};
//文章分类删除
export const sectionDelete = (id: string, params: any) => {
  const baseUrl = `${PREFIX}/category/${id}`;
  return axios.put(baseUrl, params);
};
//文章分类编辑
export const sectionEdit = (id: string, params: any) => {
  const baseUrl = `${PREFIX}/category/${id}`;
  return axios.put(baseUrl, params);
};
