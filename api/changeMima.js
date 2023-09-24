import {
	post,
	get
} from '@/api/api.js'

//修改重置密码
export function resetPwd(data) {
	return post('/system/user/resetPwd', data)
}
