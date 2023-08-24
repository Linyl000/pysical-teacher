<script>
// //全局变量
// const globalData = {
// 	innerAudioContext: '', //音频对象
// 	audioSrc: '' // 音频地址
// };
// // 初始化音频信息
// function initAudio() {
// 	//创建背景对象 设置自动播放 音频地址 循环播放
// 	globalData.innerAudioContext = uni.createInnerAudioContext();
// 	globalData.innerAudioContext.autoplay = true;
// 	globalData.innerAudioContext.src = 'http://music.163.com/song/media/outer/url?id=36587407.mp3';
// 	globalData.innerAudioContext.loop = true;
// }
// // 播放事件
// function audioPlay() {
// 	globalData.innerAudioContext.play();
// }
// // 暂停事件
// function audioPause() {
// 	globalData.innerAudioContext.pause();
// }
import { mapGetters, mapMutations, mapState } from 'vuex';
export default {
	data() {
		return {
			//全局变量
			globalData: {
				innerAudioContext: '', //音频对象
				audioSrc: '' // 音频地址
			},
			lookImg: true
		};
	},
	computed: {
		...mapState(['playAudio'])
	},
	onLaunch: function() {
		//当整个项目启动，渲染完成时触发（全局只触发一次）
		// // 存在 就播放
		if (this.playAudio) {
			// this.initAudio();
		}
	},
	onShow: function() {
		// 小程序自动更新
		if (wx.canIUse('getUpdateManager')) {
			const updateManager = wx.getUpdateManager();
			updateManager.onCheckForUpdate(function(res) {
				// 请求完新版本信息的回调
				if (res.hasUpdate) {
					updateManager.onUpdateReady(function() {
						wx.showModal({
							title: '更新提示',
							content: '新版本已经准备好，是否重启应用？',
							success: function(res) {
								if (res.confirm) {
									// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
									updateManager.applyUpdate();
								}
							}
						});
					});
					updateManager.onUpdateFailed(function() {
						// 新的版本下载失败
						wx.showModal({
							title: '已经有新版本了哟~',
							content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
						});
					});
				}
			});
		} else {
			wx.showModal({
				title: '提示',
				content: '当前微信版本过低，可能无法使用某些功能，请升级到最新微信版本后重试。'
			});
		}
	},
	onHide: function() {
		console.log('App Hide');
	},
	//----------自定义方法
	methods: {
		//初始化音频信息
		initAudio() {
			//创建背景对象 设置自动播放 音频地址 循环播放
			this.globalData.innerAudioContext = uni.createInnerAudioContext();
			this.globalData.innerAudioContext.autoplay = true;
			this.globalData.innerAudioContext.src = 'http://music.163.com/song/media/outer/url?id=36587407.mp3';
			this.globalData.innerAudioContext.loop = true;
		},
		// 播放事件
		audioPlay() {
			this.globalData.innerAudioContext.play();
		},
		// 暂停事件
		audioPause() {
			this.globalData.innerAudioContext.pause();
		},
		changeAudioState(state) {
			//判断本地决定要不要播放
			if (state) {
				this.audioPlay();
			} else {
				this.audioPause();
			}
		}
	}
};
</script>

<style lang="scss">
@import '@/uni_modules/uview-ui/index.scss';
/*  #ifdef  H5  */
// body {
// 	max-width: 560px; //最大宽度自己可以调整
// 	margin: auto !important;
// 	.page {
// 		width: 100%;
// 	}
// }
/*  #endif  */
/*每个页面公共css */
.page {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 750rpx;
	overflow: hidden;
	box-sizing: border-box;
	background-color: rgba(255, 255, 255, 1);
}
.container {
	width: 100%;
	padding: 20rpx;
	padding-bottom: 0 !important;
}
</style>
