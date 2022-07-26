import request from './axios'
export declare type getTopicsParam = {
  page: number
  limit: number
  tab: string
}
/**
 * 获取主题列表
 * @param params
 * @returns Promise
 */
export const getTopics = (params: getTopicsParam) => {
  return request.get('/api/v1/topics', { params })
}
/**
 * 获取文章详情
 * @param id
 * @returns Promise
 */
export const getTopicDetail = (id: string | undefined) => {
  return request.get(`/api/v1/topic/${id}`)
}
/**
 * 获取用户详情
 * @param loginname
 * @returns Promise
 */
export const getUser = (loginname: string | undefined) => {
  return request.get(`/api/v1/user/${loginname}`)
}
