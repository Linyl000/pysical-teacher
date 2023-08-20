import {
	post,
	get
} from '@/api/api.js'

//教师评价列表
export function evaluate(data) {
	return get('/base/evaluate/listAll', data)
}
