<template>
	<view class="page">
		<view class="input_1"><u--input placeholder="请输入账号" v-model="value" @change="change" border="none" fontSize="18"></u--input></view>
		<view class="input_1">
			<u--input placeholder="请输入密码" v-model="value2" @change="change" border="none" fontSize="18"></u--input>
		</view>
		<view class="button_1" @click="toIndex">登录</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		toIndex() {
			uni.switchTab({
				url: '/pages/index/index'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.input_1 {
	width: 630rpx;
	margin: 40rpx 0 0 32rpx;
	padding: 0 30rpx;
	background-color: rgba(248, 248, 248, 1);
	border-radius: 16rpx;
	height: 120rpx;
}
.button_1 {
	border-radius: 48rpx;
	width: 448rpx;
	height: 96rpx;
	margin: 40rpx auto;
	font-size: 32rpx;
	font-weight: 600;
	text-align: center;
	line-height: 96rpx;
	color: rgba(255, 255, 255, 1);
	// background-color: #dfe1e5;
	background-color: rgba(93, 79, 220, 1);
}
/deep/.u-radio-group {
	flex: 0 !important;
}
/deep/.u-radio-group--row {
	margin: 40rpx 130rpx 0;
	justify-content: space-around;
	height: 120rpx;
}
/deep/.u-input {
	height: 100%;
}
</style>
