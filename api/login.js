import {
	post,
	get
} from '@/api/api.js'

//登录
export function login(data) {
	return post('/login', data)
}
