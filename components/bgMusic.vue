<template>
	<!-- <div class="comps"> -->
	<view class="comps-box" ref="box" @click="changeBgShow">
		<img v-if="myAudio" class="bg" src="../static/音乐.png" alt="" />
		<img v-else class="bg" src="../static/音乐2.png" alt="" />
	</view>
	<!-- </div> -->
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

const App = getApp();
export default {
	//获取小程序实例
	computed: {
		...mapState(['playAudio'])
	},
	data() {
		return {
			myAudio: true
		};
	},
	onLoad() {
		this.myAudio = this.playAudio;
	},
	methods: {
		//查看修改音频状态
		...mapMutations(['updatePlayAudio']),
		changeBgShow() {
			this.myAudio = !this.myAudio;

			// //如果开启了 直接开启声音且 app下次开启也有声音
			// //如果关闭了 直接停止声音且 app下次开启也没声音
			uni.setStorageSync('playAudio', this.myAudio);
			this.updatePlayAudio();
			//先操作播放与否再存储本地
			App.changeAudioState(this.myAudio);
		}
	}
};
</script>

<style lang="less">
.bg {
	position: absolute;
	top: 26rpx;
	right: 20rpx;
	width: 80rpx;
	height: 80rpx;
	z-index: 10000;
}
</style>
