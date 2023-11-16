import {
	post,
	get
} from '@/api/api.js'

//获取相关班级列表
export function dept(data) {
	return get('/system/dept/list', data)
}
