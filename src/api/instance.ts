/**
 * name: instance.ts
 * desc: the axios instance should be decalred here.
 */

import axios from 'axios';
import { StorageHelper } from "../utils/storage";

/**
 * declare the instance.
 */
const instance = axios.create({
    baseURL: "http://admin.comprehensive-first-aid.net/api",
    params: {},
});

/**
 * add a request interceptor.
 */
instance.interceptors.request.use(async config => {
    let userInfo = await StorageHelper.get("@USER");
    if (userInfo) {
        config.headers['Authorization'] = `Bearer ${userInfo.accessToken}`;
    }

    return config;
});

/**
 * export instance as default.
 */
export default instance;