import {
	post,
	get
} from '@/api/api.js'

//获取人员信息
export function getInfo(data) {
	return get('/getInfo', data)
}
