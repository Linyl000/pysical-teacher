import {
	post,
	get
} from '@/api/api.js'

//获取人员信息
export function workList(data) {
	return get('/work/coureseTask/workList', data)
}
