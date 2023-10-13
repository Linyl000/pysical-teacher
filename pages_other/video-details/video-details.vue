<template>
	<z-paging ref="paging" loading-more-no-more-text="THE END" v-model="list" @query="getList" class="page">
		<div class="question" v-for="(i, index) in list" :key="i.id">
			<div class="timer">{{ i.freedback }}</div>
			<image class="singleImg" :src="i.stuUrl" mode="widthFix" @click="previewImg(i.stuUrl)"></image>
			<image class="singleImg" :src="i.teacherUrl" mode="widthFix" @click="previewImg(i.teacherUrl)"></image>
		</div>
	</z-paging>
</template>

<script>
import { vofdbk } from '@/api/video-details.js';
export default {
	data() {
		return {
			recordId: '',
			list: []
		};
	},
	onLoad(option) {
		this.recordId = JSON.parse(option.video).id;
	},
	methods: {
		getList(page, limit) {
			vofdbk({ pageNum: page, pageSize: limit, recordId: this.recordId })
				.then(res => {
					this.list = res.rows;
					this.$refs.paging.complete(res.rows);
				})
				.catch(res => {
					this.$refs.paging.complete(false);
				});
		},
		previewImg(i) {
			console.log(i);
			uni.previewImage({
				urls: [i]
			});
		}
	}
};
</script>

<style lang="scss" scoped>
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
	.timer {
		font-weight: 600;
		font-size: 34rpx;
	}
}
</style>
