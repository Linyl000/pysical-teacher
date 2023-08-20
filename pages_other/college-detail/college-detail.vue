<template>
	<z-paging ref="paging" loading-more-no-more-text="THE END" v-model="list" @query="getList" class="page">
		<u-cell-group>
			<u-cell
				icon="../../../../../../../../../static/teachersay.png"
				:title="i.deptName"
				:label="i.orderNum + '人'"
				:isLink="true"
				@click="goStudents"
			></u-cell>
		</u-cell-group>
		<view class="average-box">
			<view class="completes">人均训练数据</view>
			<div class="all-data">
				<div class="datas">
					<span
						style="font-weight: 600;color: #5D4FDC;
font-size: 48rpx;padding: 26rpx 0;"
					>
						xxxx
					</span>
					<span>训练分钟</span>
				</div>
				<div class="datas">
					<span
						style="font-weight: 600;color: #5D4FDC;
				font-size: 48rpx;padding: 26rpx 0;"
					>
						xxxx
					</span>
					<span>训练次数</span>
				</div>
			</div>
		</view>
		<!-- <view class="chart-box">
			<view class="completes">平均作业/考核完成率</view>
			<div class="charts">1111</div>
		</view> -->
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
				<div>综合评分</div>
				<div>班级排名</div>
			</div>
			<div class="small-colum" v-for="i in 10" :key="i">
				<div>
					<image src="../../static/logout.png" style="width: 60rpx;height: 60rpx;vertical-align: middle;margin-right: 10rpx;"></image>
					111
				</div>
				<div>
					<span class="score">4444</span>
					<span class="colums">分</span>
				</div>
				<div>{{ i + 1 }}</div>
			</div>
		</div>
	</z-paging>
</template>

<script>
import { deptStuList } from '@/api/students.js';
export default {
	data() {
		return {
			list1: [
				{
					name: '学习情况'
				}
			],
			current: 0,
			list: [],
			i: null
		};
	},
	onLoad(option) {
		this.i = JSON.parse(option.i);
	},
	methods: {
		getList(pageNo, pageSize) {
			//
		},
		goStudents() {
			uni.navigateTo({
				url: '/pages_other/students/students?i=' + JSON.stringify(this.i)
			});
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
.average-box {
	display: flex;
	flex-direction: column;
	height: 220rpx;
	width: 630rpx;
	background-color: rgb(255, 255, 255);
	border-radius: 32rpx;
	margin: 16rpx auto 26rpx;
	padding: 24rpx;
	font-weight: 600;
	.all-data {
		display: flex;
		justify-content: space-around;
		font-size: 38rpx;
		.datas {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
}
.chart-box {
	display: flex;
	flex-direction: column;
	height: 566rpx;
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
