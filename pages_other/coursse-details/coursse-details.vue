<template>
	<z-paging ref="paging" loading-more-no-more-text="THE END" v-model="list" @query="getList" class="page">
		<view class="name">【{{ i.type === 0 ? '作业' : '考核' }}】{{ i.taskName }}</view>
		<view class="people">{{ i.deptName }}({{ i.allNum }}人)</view>
		<view class="chart-box">
			<view class="completes">本次{{ i.type === 0 ? '作业' : '考核' }}完成率</view>
			<div class="charts"><qiun-data-charts type="pie" :chartData="chartsDataPie1" :echartsH5="true" :echartsApp="true" /></div>
			<view class="ok-number">{{ i.finishNum }}/{{ i.allNum }}人已完成</view>
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
			@change="tabChange"
		></u-tabs>
		<div class="type">
			<div class="small-colum">
				<div>姓名</div>
				<div>学号</div>
				<div>成绩</div>
			</div>
			<div class="small-colum" v-for="i in list" :key="i">
				<div>
					<image :src="i.avatar" style="width: 50rpx;height: 50rpx;vertical-align: middle;"></image>
					{{ i.nickName }}
				</div>
				<div>{{ i.studentNo }}</div>
				<div v-if="i.finishStatus !== '0'">
					<span class="score">{{ i.workScore === -1 ? '评分中' : i.workScore === -2 ? '成绩出错，请后台修改' : i.workScore }}</span>
					<span v-if="i.workScore > -1" class="colums">分</span>
				</div>
				<div v-else class="score">未完成</div>
			</div>
		</div>
	</z-paging>
</template>

<script>
import { teacherSelectStuWork } from '@/api/coursse-details.js';
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
			type: 0,
			list: [],
			i: null,
			chartsDataPie1: []
		};
	},
	onLoad(option) {
		this.i = JSON.parse(option.i);
		this.chartsDataPie1 = {
			series: [
				{
					data: [
						{
							name: '已完成',
							value: this.i.finishNum
						},
						{
							name: '未完成',
							value: this.i.allNum - this.i.finishNum
						}
					]
				}
			]
		};
	},
	methods: {
		getList(pageNo, pageSize) {
			this.type = this.type === 1 ? 0 : 1;
			teacherSelectStuWork({ taskId: this.i.id, deptId: this.i.deptId, finishStatus: this.type })
				.then(res => {
					this.list = res.data;
					this.$refs.paging.complete(res.data);
				})
				.catch(res => {
					this.$refs.paging.complete(false);
				});
		},
		tabChange({ index }) {
			this.$refs.paging.reload();
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
		// background-color: pink;
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
