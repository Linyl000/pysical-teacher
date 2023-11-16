<template>
	<z-paging ref="paging" loading-more-no-more-text="THE END" v-model="list" @query="getList" class="page">
		<view class="name">{{ i.taskName }}</view>
		<view class="people">{{ i.deptName }}({{ i.allNum }}人)</view>
		<view class="chart-box">
			<view class="completes">完成率</view>
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
				<div style="text-align: left;">
					<image :src="i.avatar" style="width: 50rpx;height: 50rpx;vertical-align: middle;"></image>
					{{ i.nickName }}
				</div>
				<div>{{ i.studentNo }}</div>
				<div v-if="i.finishStatus !== '0'" class="colum-taskscore">
					<text class="score-1" v-if="i.workScore == -1">评分中</text>
					<text class="score-3" v-else-if="i.workScore == -2">成绩出错，等待教师复核</text>
					<text class="score-1" v-else>{{ i.workScore }}</text>
					<text v-if="i.workScore !== -1 && i.workScore !== -2" class="score-2">分</text>
				</div>
				<div v-else class="score">未完成</div>
				<u-icon name="arrow-right" size="14" @click="goStudentAnswer(i)"></u-icon>
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
		getList(page, limit) {
			this.type = this.type === 1 ? 0 : 1;
			teacherSelectStuWork({ taskId: this.i.id, deptId: this.i.deptId, finishStatus: this.type, pageNum: page, pageSize: limit })
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
		},
		goStudentAnswer(i) {
			uni.navigateTo({
				url: '/pages_other/studentAnswer/studentAnswer?student=' + JSON.stringify(i)
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
	font-size: 32rpx;
	font-weight: 600;
	margin: 0 18rpx 22rpx;
}
.chart-box {
	position: relative;
	display: flex;
	flex-direction: column;
	// height: 596rpx;
	width: 670rpx;
	background-color: rgb(255, 255, 255);
	border-radius: 32rpx;
	margin: auto;
	padding: 24rpx;
	font-weight: 600;
	.completes {
		position: absolute;
		top: 24rpx;
		left: 24rpx;
	}
	.charts {
		width: 470rpx;
		height: 470rpx;
		margin: 0 auto;
		// background-color: pink;
	}
	.ok-number {
		margin-top: 20rpx;
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
		align-items: center;
		min-height: 80rpx;
		line-height: 80rpx;
		font-size: 28rpx;
		color: #888888;
		line-height: 1.4;
		text-align: center;
		div:first-child {
			width: 35%;
		}
		div:nth-child(2) {
			width: 40%;
		}
		div:nth-child(3) {
			width: 25%;
		}
		.colum-taskscore {
			color: rgba(224, 105, 105, 1);
			.score-1 {
				font-size: 40rpx;
			}
			.score-2 {
				font-size: 28rpx;
			}
			.score-3 {
				font-size: 26rpx;
			}
		}
	}
}
</style>
