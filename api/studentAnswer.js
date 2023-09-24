import {
	post,
	get
} from '@/api/api.js'

//学生考试答题详情
export function examDetail(data) {
	return get('/exam/examDetail/list', data)
}
