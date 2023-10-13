<template>
	<view class="page">
		<image
			src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfdc8a0df423b1c5f1e10f7d4f410c9d435efe0b84da663ab42a81215f801956d"
			class="image_2"
		></image>
		<view class="group_3">
			<text lines="1" class="text_3">智能体育平台</text>
			<view class="tag_1"><text lines="1" class="text_4">教师端</text></view>
		</view>
		<text lines="1" decode="true" class="text_5">福州师范大学体育课程服务平台&nbsp;&nbsp;</text>
		<view class="button_1" @click="goFirstInfo"><text lines="1" class="text_6">账号密码登录</text></view>
		<view class="image-text_3">
			<u-checkbox-group v-model="checkboxValue1"><u-checkbox shape="circle" label=" " activeColor="#5D4FDC"></u-checkbox></u-checkbox-group>
			<view class="text-group_1">
				<text>请认真阅读</text>
				<text style="color:#5D4FDC;">用户协议，</text>
				<text style="color:#5D4FDC;">隐私协议</text>
				<text>后登录</text>
			</view>
		</view>
		<image
			src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/c90dc28369cf4be9b8570d9fe93c4dc2_mergeImage.png"
			class="image_4"
		></image>
	</view>
</template>

<script>
export default {
	data() {
		return { checkboxValue1: [''] };
	},
	methods: {
		goFirstInfo() {
			if (!this.checkboxValue1.length) {
				uni.showToast({
					duration: 2000,
					title: '请勾选同意用户协议，隐私协议按钮',
					icon: 'none'
				});
				return;
			}
			uni.navigateTo({
				url: '/pages/login/login'
			});
		}
	}
};
</script>

<style lang="scss">
.image_2 {
	width: 434rpx;
	height: 434rpx;
	margin: 176rpx 0 0 162rpx;
}
.group_3 {
	width: 400rpx;
	height: 48rpx;
	flex-direction: row;
	display: flex;
	justify-content: space-between;
	margin: 88rpx 0 0 232rpx;
}
.text_3 {
	width: 288rpx;
	height: 48rpx;
	overflow-wrap: break-word;

	font-size: 48rpx;
	font-family: PingFangSC-Semibold;
	font-weight: 600;
	text-align: center;
	white-space: nowrap;
	line-height: 48rpx;
}
.tag_1 {
	background-color: rgba(93, 79, 220, 1);
	border-radius: 8rpx;
	height: 48rpx;
	display: flex;
	flex-direction: column;
	width: 96rpx;
}
.text_4 {
	width: 72rpx;
	height: 36rpx;
	overflow-wrap: break-word;
	color: rgba(255, 255, 255, 1);
	font-size: 24rpx;
	font-family: PingFangSC-Semibold;
	font-weight: 600;
	text-align: center;
	white-space: nowrap;
	line-height: 36rpx;
	margin: 6rpx 0 0 12rpx;
}
.text_5 {
	width: 420rpx;
	height: 40rpx;
	overflow-wrap: break-word;
	color: rgba(50, 50, 50, 1);
	font-size: 28rpx;
	font-family: PingFangSC-Regular;
	font-weight: normal;
	text-align: center;
	white-space: nowrap;
	line-height: 40rpx;
	margin: 24rpx 0 0 166rpx;
}
.button_1 {
	box-shadow: 0px 4px 4px 0px rgba(93, 79, 220, 0.1);
	background-color: rgba(93, 79, 220, 1);
	border-radius: 60rpx;
	height: 120rpx;
	display: flex;
	flex-direction: column;
	width: 686rpx;
	margin: 70rpx 0 0 32rpx;
}
.text_6 {
	width: 686rpx;
	height: 120rpx;
	overflow-wrap: break-word;
	color: rgba(255, 255, 255, 1);
	font-size: 36rpx;
	font-family: PingFangSC-Semibold;
	font-weight: 600;
	text-align: center;
	line-height: 120rpx;
}
.image-text_3 {
	flex-direction: row;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	margin-top: 20rpx;
}
.text-group_1 {
	font-size: 26rpx;
	text-align: center;
	line-height: 48rpx;
	color: rgba(136, 136, 136, 1);
}
.image_4 {
	position: absolute;
	left: 32rpx;
	top: 32rpx;
	width: 660rpx;
	height: 660rpx;
}
</style>
