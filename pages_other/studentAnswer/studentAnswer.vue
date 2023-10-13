<template>
	<z-paging ref="paging" loading-more-no-more-text="THE END" v-model="list" @query="getList" class="page">
		<!-- <view class="name">{{ examPaperName }}</view> -->
		<!-- <div class="stu-intro">
			<view class="left">
				<text lines="1" class="text_3">{{ nickName }}</text>
				<text lines="1" class="text_4">{{ studentNo }}</text>
			</view>
			<div class="right"></div>
		</div> -->
		<view class="course-des-box">
			<view class="block_3"></view>
			<text lines="1" class="text_7">{{ nickName }}本次作业详情</text>
		</view>
		<div class="question" v-for="(i, index) in list" :key="i.id">
			<view class="course-des-box2">
				<view class="block_3"></view>
				<text lines="1" class="text_7">题目{{ index + 1 }} ({{ i.titleScore }}分)</text>
			</view>
			<div class="title">{{ i.titleContent }}</div>
			<div class="stu-arr">
				学生答案：
				<span v-if="i.titleType === '0'">{{ i.answer }}</span>
				<span v-else-if="i.titleType === '1'">{{ i.answerArr }}</span>
				<span v-else-if="i.titleType === '2'">{{ i.answer === '0' ? '正确' : '错误' }}</span>
				<span v-else-if="i.titleType === '3'"><video :src="i.answer" style="width: 360rpx; height: 220rpx;"></video></span>
			</div>
			<div class="corr-arr">
				正确答案：
				<span v-if="i.titleType === '0' || i.titleType === '1'">{{ i.correctAnswer }}</span>
				<span v-else-if="i.titleType === '2'">{{ i.correctAnswer === '0' ? '正确' : '错误' }}</span>
				<span v-else-if="i.titleType === '3'"><video :src="i.correctAnswer" style="width: 360rpx; height: 220rpx;"></video></span>
				<div style="color: rgba(93, 79, 220, 1);text-align: center;font-size: 30rpx;" v-if="i.titleType === '3'" @click="goVideoDetails(i)">
					点击查看详情分析>>
				</div>
			</div>
		</div>
	</z-paging>
</template>

<script>
import { examDetail } from '@/api/studentAnswer.js';
export default {
	data() {
		return {
			examRecordId: null,
			list: [],
			examPaperName: '',
			nickName: '',
			studentNo: ''
		};
	},
	onLoad(option) {
		this.nickName = JSON.parse(option.student).nickName;
		this.studentNo = JSON.parse(option.student).studentNo;
		this.examPaperName = JSON.parse(option.student).examPaperName;
		this.examRecordId = JSON.parse(option.student).id;
	},
	methods: {
		getList(page, limit) {
			examDetail({ pageNum: page, pageSize: limit, examRecordId: this.examRecordId })
				.then(res => {
					this.list = res.rows;
					this.$refs.paging.complete(res.rows);
				})
				.catch(res => {
					this.$refs.paging.complete(false);
				});
		},
		goVideoDetails(i) {
			uni.navigateTo({
				url: '/pages_other/video-details/video-details?video=' + JSON.stringify(i)
			});
		}
	}
};
</script>

<style lang="less" scoped>
.page {
	background-color: #f8f8f8;
}
.question {
	width: 718rpx;
	background: #ffffff;
	box-shadow: 0rpx 0rpx 8rpx 0rpx rgba(0, 0, 0, 0.1);
	border-radius: 16rpx;
	padding: 32rpx;
	box-sizing: border-box;
	margin: 16rpx auto;
	margin-bottom: 20rpx;
	line-height: 60rpx;
	.course-des-box2 {
		flex-direction: row;
		display: flex;
		align-items: center;
	}
	.block_3 {
		background-color: rgba(93, 79, 220, 1);
		border-radius: 8rpx;
		width: 16rpx;
		height: 26rpx;
		display: flex;
		flex-direction: column;
	}
	.text_7 {
		margin-left: 10rpx;
		font-weight: 600;
		font-size: 30rpx;
	}
}
.name {
	font-size: 42rpx;
	font-weight: 600;
	padding: 22rpx 20rpx;
	background-color: #fff;
}
.stu-intro {
	background-color: #fff;
	.left {
		padding: 0 20rpx 30rpx;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.text_3 {
			height: 64rpx;
			overflow-wrap: break-word;
			font-size: 36rpx;
			font-weight: 600;
			white-space: nowrap;
			line-height: 64rpx;
		}
		.text_4 {
			height: 36rpx;
			overflow-wrap: break-word;
			font-size: 24rpx;
			white-space: nowrap;
			line-height: 36rpx;
			margin-top: 8rpx;
		}
	}
	.right {
	}
}
</style>
