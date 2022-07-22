import request from './axios'
export declare type getTopicsParam = {
  page: number
  limit: number
  tab: string
}
//获取主题列表
export const getTopics = (params: getTopicsParam) => {
  return request.get('/api/v1/topics', { params })
}
//获取文章详情
export const getTopicDetail = (id: string) => {
  return request.get(`/api/v1/topics/${id}`)
}
//获取用户详情
export const getUser = (loginname: string) => {
  return request.get(`/api/v1/user/${loginname}`)
}
