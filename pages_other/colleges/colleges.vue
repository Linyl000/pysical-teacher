<template>
	<view class="page" style="background-color: #f8f8f8;">
		<u-cell-group>
			<u-cell
				v-for="i in 10"
				:key="i"
				icon="../../../../../../../../../static/teachersay.png"
				:title="'xx学院'"
				:label="'人'"
				:isLink="true"
				@click="goCollegeDetail"
			></u-cell>
		</u-cell-group>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		goCollegeDetail() {
			uni.navigateTo({
				url: '/pages_other/college-detail/college-detail'
			});
		}
	}
};
</script>

<style lang="scss">
/deep/.u-cell {
	.u-cell__body {
		width: 686rpx;
		height: 140rpx;
		background: #ffffff;
		border-radius: 26rpx;
		margin: 20rpx auto 10rpx;
	}
	.u-line {
		border: 0 !important;
	}
	.u-cell__title-text {
		font-size: 38rpx !important;
		font-weight: 600;
	}
	.u-cell__label {
		font-size: 32rpx !important;
	}
	.u-icon {
		margin: 0 12rpx;
		width: 66rpx;
		height: 66rpx;
		image {
			width: 100% !important;
			height: 100% !important;
		}
		text {
			font-size: 52rpx !important;
		}
	}
}
</style>
