// 共享数据存储处
// 1. 导入 Vue 和 Vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 2. 将 Vuex 安装为 Vue 的插件
Vue.use(Vuex)

// 3. 创建 Store 的实例对象
const store = new Vuex.Store({
	// TODO：挂载 store 模块 （数据/计算属性/修改方法/异步方法）
	state: {
		//数据 从本地拿或者设置默认值
		userInfo: uni.getStorageSync('userInfo') || {},
		//是否播放音频
		playAudio: uni.getStorageSync('playAudio') || true
	},
	getters: {},
	mutations: {
		// 更新用户的基本信息
		updateUserInfo(state) {
			//前台先uni.setStorageSync('userInfo', userInfo)保存数据 再直接调用该函数
			state.userInfo = uni.getStorageSync('userInfo')
		},
		//修改播放状态
		updatePlayAudio(state) {
			state.playAudio = uni.getStorageSync('playAudio')
		},
		//登出
		logout(state) {
			uni.removeStorageSync('userInfo')
			state.user_info = {}
		}
	},
	actions: {}
})

// 4. 向外共享 Store 的实例对象
export default store
