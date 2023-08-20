import {
	post,
	get
} from '@/api/api.js'

//获取人员信息
export function deptStuList(data) {
	return get('/system/user/deptStuList', data)
}
