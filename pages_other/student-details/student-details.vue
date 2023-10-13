<template>
	<z-paging ref="paging" loading-more-no-more-text="THE END" v-model="list" @query="getList" class="page">
		<template #top>
			<view class="block_5">
				<image :src="i.avatar" class="image_3"></image>
				<view class="text-group_5">
					<text lines="1" class="text_3">{{ i.nickName }}</text>
					<text lines="1" class="text_4">{{ i.studentNo }}</text>
				</view>
			</view>
			<!-- <u-tabs
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
			></u-tabs> -->
			<view class="course-des-box">
				<view class="block_3"></view>
				<text lines="1" class="text_7">作业状况</text>
			</view>
		</template>
		<div class="type">
			<div class="small-colum">
				<div class="colum-tasktime">时间</div>
				<div class="colum-taskname">题目名称</div>
				<div class="colum-taskscore">成绩</div>
			</div>
			<div class="small-colum" v-for="i in list" :key="i.taskId">
				<div class="colum-tasktime">{{ i.endTime | removeFirstFive | removeLastThree }}</div>
				<div class="colum-taskname">{{ i.taskName }}</div>
				<div class="colum-taskscore" v-if="i.finishStatus !== '0'">
					<!-- <span class="score">{{ i.workScore === -1 ? '评分中' : i.workScore === -2 ? '成绩出错，请后台修改' : i.workScore }}</span>
					<span v-if="i.workScore > -1" class="colums">分</span> -->
					<text class="score-1" v-if="i.workScore == -1">评分中</text>
					<text class="score-3" v-else-if="i.workScore == -2">成绩出错，请后台修改</text>
					<text class="score-1" v-else>{{ i.workScore }}</text>
					<text v-if="i.workScore !== -1 && i.workScore !== -2" class="score-2">分</text>
				</div>
				<div v-else class="score">未完成</div>
				<u-icon name="arrow-right" size="14" @click="goStudentAnswer(i)"></u-icon>
			</div>
		</div>
		<template #bottom>
			<view class="button_1" @click="goBack">返回</view>
		</template>
	</z-paging>
</template>

<script>
import { result } from '@/api/student-details.js';
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
			type: 0,
			list: [],
			i: null
		};
	},
	filters: {
		removeFirstFive(value) {
			if (typeof value === 'string' && value.length > 5) {
				return value.slice(5);
			} else {
				return value;
			}
		},
		removeLastThree(value) {
			if (typeof value === 'string' && value.length > 3) {
				return value.slice(0, -3);
			} else {
				return value;
			}
		}
	},
	onLoad(option) {
		this.i = JSON.parse(option.i);
	},
	methods: {
		getList(page, limit) {
			result({ pageNum: page, pageSize: limit, studentId: this.i.userId })
				.then(res => {
					this.list = res.rows;
					this.$refs.paging.complete(res.rows);
				})
				.catch(res => {
					this.$refs.paging.complete(false);
				});
		},
		goBack() {
			uni.navigateBack({});
		},
		tabChange({ index }) {
			this.type = index;
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
	padding: 30rpx;
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
		font-size: 28rpx;
		color: #888888;
		line-height: 1.4;
		div {
			text-align: center;
		}
		.colum-tasktime {
			width: 27%;
		}
		.colum-taskname {
			width: 46%;
			box-sizing: border-box;
			// padding: 0 10rpx;
			// white-space: nowrap;
			// overflow: hidden;
			// text-overflow: ellipsis;
		}
		.colum-taskscore {
			width: 25%;
			color: rgba(224, 105, 105, 1);
		}
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
</style>
