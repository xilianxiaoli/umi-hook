import { get } from '../utils/useRequest'

export const getUserInfo = (params: any) => get('/api/goods/list',params)
