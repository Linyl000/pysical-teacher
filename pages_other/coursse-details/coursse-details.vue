<template>
	<z-paging ref="paging" loading-more-no-more-text="THE END" v-model="list" @query="getList" class="page">
		<view class="name">【作业/考核】太极八法五步-第六式</view>
		<view class="people">八段锦-xx学院(xx人)</view>
		<view class="chart-box">
			<view class="completes">本次作业/考核完成率</view>
			<div class="charts">1111</div>
			<view class="ok-number">30/60人已完成</view>
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
				<div>姓名</div>
				<div>学号</div>
				<div>成绩</div>
			</div>
			<div class="small-colum" v-for="i in 10" :key="i">
				<div>
					<image src="../../static/logout.png" style="width: 60rpx;height: 60rpx;vertical-align: middle;margin-right: 10rpx;"></image>
					111
				</div>
				<div>222</div>
				<!-- <div>未完成</div> -->
				<div>
					<span class="score">4444</span>
					<span class="colums">分</span>
				</div>
			</div>
		</div>
	</z-paging>
</template>

<script>
export default {
	data() {
		return {
			list1: [
				{
					name: '已完成'
				},
				{
					name: '未完成'
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
		getList(pageNo, pageSize) {
			//
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	background-color: rgba(248, 248, 248, 1);
}
.name {
	font-size: 42rpx;
	font-weight: 600;
	margin: 22rpx 18rpx;
}
.people {
	font-size: 36rpx;
	font-weight: 600;
	margin: 0 18rpx 22rpx;
}
.chart-box {
	display: flex;
	flex-direction: column;
	height: 596rpx;
	width: 630rpx;
	background-color: rgb(255, 255, 255);
	border-radius: 32rpx;
	margin: 16rpx auto;
	padding: 24rpx;
	font-weight: 600;
	.completes {
	}
	.charts {
		width: 450rpx;
		height: 450rpx;
		margin: 26rpx auto;
		background-color: pink;
	}
	.ok-number {
		text-align: center;
	}
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
