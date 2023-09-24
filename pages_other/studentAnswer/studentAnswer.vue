<template>
	<z-paging ref="paging" loading-more-no-more-text="THE END" v-model="list" @query="getList" class="page">
		<div class="question" v-for="i in list" :key="i.id">
			<div class="title">题目：{{ i.titleContent }}</div>
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
			list: []
		};
	},
	onLoad(option) {
		this.examRecordId = JSON.parse(option.examRecordId);
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
		}
	}
};
</script>

<style lang="less" scoped>
.question {
	margin-bottom: 20rpx;
}
div {
	padding: 8rpx 0;
}
</style>
