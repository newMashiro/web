import axios from 'axios';
import qs from 'qs'

let base = 'http://10.0.95.226:8081';

export const requestLogin = params => { return axios.post(`${base}/login`, qs.stringify(params)).then(res => res.data); };

export const requestRegister = params => { return axios.post(`${base}/register`, params) };

export const getUserList = params => { return axios.post(`${base}/user/uerAndRoleList`, { params: params }); };

export const getUserListPage = params => { return axios.post(`${base}/user/list`, params ); };

export const getLostListPage = params => { return axios.post(`${base}/lost/list`, params ); };

export const removeUser = params => { return axios.post(`${base}/user/delete`,params,{headers:{
    'Content-Type': 'application/json;charset=UTF-8' 
  }}) };

export const getRole = params => { return axios.post(`${base}/user/getRole`, params) };

export const deleteUser = params => { return axios.post(`${base}/user/deleteUser`, params) };

export const update = params => { return axios.post(`${base}/user/update`, params) };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

export const advancedGeneral = params => { return axios.post(`${base}/thingsIdentify/advancedGeneral`, qs.stringify(params)) };

export const getArticleShowList = params => { return axios.post(`${base}/article/getArticleShowList`, params ); };

export const getArticleShowById = params => { return axios.post(`${base}/article/getArticleShowById`, params,{headers:{
  'Content-Type': 'application/json;charset=UTF-8' 
}} ); };

export const addArticle = params => { return axios.post(`${base}/article/addArticle`, params ); };

export const praiseClicksAddOne = params => { return axios.post(`${base}/article/praiseClicksAddOne`, params ); };

export const uploadPicture = params => { return axios.post(`${base}/article/uploadPicture`, params ); };

/**
 * 查询失物
 * @param params
 * @returns {AxiosPromise}
 */
export const listNotClaim = params => {
    return axios.post(`${base}/lost/notClaim`, params)
}

/**
 * 查询拾物
 * @param params
 * @returns {AxiosPromise}
 */
export const listClaim = params => {
    return axios.post(`${base}/lost/claim`, params)
}

/**
 * 根据用户id查询信息
 * @param params
 * @returns {AxiosPromise}
 */
export const getUserById = params => {
    return axios.post(`${base}/user/getUser/` + params.id)
}