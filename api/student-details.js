import {
	post,
	get
} from '@/api/api.js'

//学生详情作业/考试信息
export function result(data) {
	return get('/work/studentWork/result/list', data)
}
