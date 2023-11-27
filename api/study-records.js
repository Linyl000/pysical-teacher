import {
	post,
	get,
	put
} from '@/api/api.js'

//学生个人学习记录列表
export function studyRecordList(data) {
	return get('/base/studyRecord/list', data)
}

//学习记录更新记录时长
export function studyRecordAdd(data) {
	return post('/base/studyRecord', data)
}
//学生个人学习记录列表
export function studyRecordUp(data) {
	return put('/base/studyRecord', data)
}
