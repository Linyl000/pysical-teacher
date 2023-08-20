<template>
	<z-paging ref="paging" loading-more-no-more-text="THE END" v-model="list" @query="getList" class="page">
		<div class="say-items" v-for="i in list" :key="i.userId">
			<image class="ava" src="../../static/logout.png"></image>
			<div class="text">
				<div class="title">
					<div class="name">匿名用户</div>
					<div class="score">
						{{ i.score }}
						<text style="font-size: 32rpx;">分</text>
					</div>
				</div>
				<div class="says">{{ i.evaluateContent }}</div>
			</div>
		</div>
	</z-paging>
</template>

<script>
import { evaluate } from '@/api/teacher-say.js';
export default {
	data() {
		return {
			list: []
		};
	},
	methods: {
		getList(pageNo, pageSize) {
			evaluate()
				.then(res => {
					this.list = res.data;
					this.$refs.paging.complete(res.data);
				})
				.catch(res => {
					this.$refs.paging.complete(false);
				});
		}
	}
};
</script>

<style lang="scss" scoped>
.say-items {
	display: flex;
	width: 750rpx;
	padding: 10rpx 20rpx;
	box-sizing: border-box;
	margin-bottom: 20rpx;
	.ava {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		margin: 0 20rpx;
	}
	.text {
		flex: 1;
		color: #2a2a2a;
		.title {
			display: flex;
			justify-content: space-between;
			margin-right: 20rpx;
			.name {
				font-size: 36rpx;
				// font-weight: 600;
			}
			.score {
				font-size: 42rpx;
				color: #e06969;
			}
		}
		.says {
			background-color: rgb(248, 248, 248);
			border-radius: 16rpx;
			padding: 14rpx 18rpx;
			font-size: 32rpx;
		}
	}
}
</style>
