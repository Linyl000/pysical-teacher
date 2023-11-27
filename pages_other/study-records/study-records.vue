<template>
	<z-paging ref="paging" loading-more-no-more-text="THE END" v-model="list" @query="getList" class="page">
		<template #top>
			<view class="search-box">
				<u-search placeholder="搜索课程记录" v-model="courseName" @search="getList(1, 10)" @custom="getList(1, 10)"></u-search>
			</view>
		</template>
		<div v-for="(i, index) in list" :key="index">
			<view class="text-wrapper_1">
				{{ i.recordTime }}
				<!-- 	<text lines="1" class="text_5">02</text>
			<text lines="1" class="text_6">/23</text> -->
			</view>
			<view class="container" v-for="j in i.tkyStudyRecords" :key="j.taskId" @click="goCurriculum(j)">
				<video class="img-main" :src="j.taskVideo" :controls="false" :show-center-play-btn="false"></video>
				<view class="right-content">
					<view lines="1" class="title">{{ j.taskName }}</view>
					<view lines="1" class="details">
						<span>已学习{{ j.allTime | getAllTime }}</span>
						<!-- <text style="color: rgb(224, 105, 105);">已播放98%</text> -->
					</view>
				</view>
			</view>
		</div>
	</z-paging>
</template>

<script>
import { studyRecordList, studyRecordAdd, studyRecordUp } from '@/api/study-records.js';
export default {
	data() {
		return {
			list: [],
			userId: '',
			courseName: ''
		};
	},
	filters: {
		getAllTime(data) {
			let totalSeconds = Math.floor(data / 1000);
			let totalMinutes = Math.floor(totalSeconds / 60);
			let totalHours = Math.floor(totalMinutes / 60);

			let minutes = totalMinutes % 60;
			let seconds = totalSeconds % 60;
			let milliseconds = data % 1000;
			return `${totalHours}小时${minutes}分钟${seconds}秒`;
		}
	},
	onLoad(option) {
		this.userId = option.userId;
	},
	methods: {
		getList(page, limit) {
			studyRecordList({ pageNum: page, pageSize: limit, userId: this.userId, courseName: this.courseName })
				.then(res => {
					this.list = res.data;
					this.$refs.paging.complete(res.data);
				})
				.catch(res => {
					this.$refs.paging.complete(false);
				});
		},
		goCurriculum(i) {
			uni.navigateTo({
				url: '/pages_other/curriculum/curriculum?i=' + JSON.stringify(i)
			});
		}
	}
};
</script>

<style scoped lang="scss">
.page,
page {
	background-color: rgba(248, 248, 248, 1);
}
.search-box {
	width: 686rpx;
	height: 72rpx;
	flex-direction: row;
	display: flex;
	justify-content: space-between;
	margin: 36rpx 0 0 32rpx;
}
.text-wrapper_1 {
	height: 64rpx;
	overflow-wrap: break-word;
	font-weight: 600;
	white-space: nowrap;
	line-height: 64rpx;
	margin: 32rpx 0 0 32rpx;

	.text_5 {
		font-size: 36rpx;
	}
	.text_6 {
		font-size: 24rpx;
	}
}
.container {
	display: flex;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 16rpx;
	width: 686rpx;
	height: 176rpx;
	margin: 0rpx auto 32rpx;

	.img-main {
		width: 144rpx;
		height: 144rpx;
		border-radius: 16rpx;
		overflow: hidden;
	}
	.right-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-left: 20rpx;
	}
	.title {
		width: 484rpx;
		height: 48rpx;
		overflow-wrap: break-word;
		font-size: 32rpx;
		font-weight: 600;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.details {
		display: flex;
		justify-content: space-between;
		overflow-wrap: break-word;
		color: rgba(136, 136, 136, 1);
		font-size: 24rpx;
		line-height: 64rpx;
	}
}
/deep/ .u-search__content {
	border: 4rpx solid #c1c8d8 !important;
	border-radius: 10rpx !important;
}
/deep/.u-search__action {
	background-color: #5d4fdc;
	border: 4rpx solid #5d4fdc;
	border-radius: 10rpx;
	color: #fff;
	height: 64rpx;
	line-height: 64rpx;
}
</style>
