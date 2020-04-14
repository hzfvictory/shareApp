import axios from "@/service/api"
import {PREFIX} from "@/service/config.default"

export const weChatLogin = (code, params) => {
  const baseUrl = `${PREFIX}/wxlogin/${code}`;
  return axios.get(baseUrl, params)
};



