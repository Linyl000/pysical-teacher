<template>
	<z-paging ref="paging" loading-more-no-more-text="THE END" v-model="list" @query="getList" class="page">
		<view class="block_5">
			<image
				src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/c5b841efbf714a2cb7f869bcda97adb7_mergeImage.png"
				class="image_3"
			></image>
			<view class="text-group_5">
				<text lines="1" class="text_3">杜若</text>
				<text lines="1" class="text_4">大数据二班</text>
			</view>
		</view>
		<u-tabs
			lineColor="#5d4fdc"
			:list="list1"
			lineWidth="40"
			:itemStyle="{
				height: '100rpx'
			}"
			:activeStyle="{
				fontWeight: 'bold'
			}"
			lineHeight="5"
		></u-tabs>
		<div class="type">
			<div class="small-colum">
				<div>时间</div>
				<div>题目名称</div>
				<div>成绩</div>
			</div>
			<div class="small-colum" v-for="i in 10" :key="i">
				<div>111/22/11</div>
				<div>八段锦第一节</div>
				<!-- <div>未完成</div> -->
				<div>
					<span class="score">4444</span>
					<span class="colums">分</span>
				</div>
			</div>
		</div>
		<view class="button_1" @click="goBack">返回</view>
	</z-paging>
</template>

<script>
export default {
	data() {
		return {
			list1: [
				{
					name: '作业情况'
				},
				{
					name: '考核情况'
				}
			],
			current: 0,
			list: []
		};
	},
	onLoad() {
		this.getList();
	},
	methods: {
		goBack() {
			uni.navigateBack({});
		}
	}
};
</script>

<style lang="scss" scoped>
.block_5 {
	width: 700rpx;
	flex-direction: row;
	display: flex;
	align-items: center;
	margin: 20rpx auto;

	.image_3 {
		width: 120rpx;
		height: 120rpx;

		border-radius: 50%;
		margin-right: 24rpx;
	}
	.text-group_5 {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.text_3 {
			height: 64rpx;
			overflow-wrap: break-word;
			font-size: 40rpx;
			font-weight: 600;
			white-space: nowrap;
			line-height: 64rpx;
		}
		.text_4 {
			height: 36rpx;
			overflow-wrap: break-word;
			font-size: 28rpx;
			white-space: nowrap;
			line-height: 36rpx;
			margin-top: 8rpx;
		}
	}
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

.type {
	width: 718rpx;
	background: #ffffff;
	box-shadow: 0rpx 0rpx 8rpx 0rpx rgba(0, 0, 0, 0.1);
	border-radius: 16rpx;
	padding: 32rpx;
	box-sizing: border-box;
	margin: 16rpx auto;
	.title {
		height: 48rpx;
		font-size: 32rpx;
		color: #2a2a2a;
		line-height: 48rpx;
	}
	.type-item {
		display: flex;
		height: 90rpx;
		align-items: center;
		.item-title {
			flex: 1;
			color: #888888;
		}
	}
	.small-colum {
		display: flex;
		justify-content: space-between;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 28rpx;
		color: #888888;
		div {
			width: 25%;
			text-align: center;
		}
		.score {
			color: rgba(224, 105, 105, 1);
			font-size: 36rpx;
		}
		.colums {
			color: rgba(224, 105, 105, 1);
			font-size: 28rpx;
		}
	}
}
</style>
