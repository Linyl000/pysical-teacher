import {
	post,
	get
} from '@/api/api.js'

//查询学生分数信息列表
export function teacherSelectStuWork(data) {
	return get('/work/studentWork/teacherSelectStuWork/list', data)
}
