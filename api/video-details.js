import {
	post,
	get
} from '@/api/api.js'

//获取人员信息
export function vofdbk(data) {
	return get('/exam/vofdbk/list', data)
}
