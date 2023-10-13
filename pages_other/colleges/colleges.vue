<template>
	<z-paging
		ref="paging"
		loading-more-no-more-text="THE END"
		v-model="list"
		@query="getList"
		class="page"
		style="background-color: #f8f8f8;"
	>
		<view class="course-des-box">
			<view class="block_3"></view>
			<text lines="1" class="text_7">全部学院</text>
		</view>
		<!-- icon="../../../../../../../../../static/teachersay.png" -->
		<u-cell-group>
			<u-cell
				v-for="i in list"
				:key="i.deptId"
				icon="chat"
				:title="i.deptName"
				:label="i.orderNum + '人'"
				:isLink="true"
				@click="goStudents(i)"
			></u-cell>
		</u-cell-group>
	</z-paging>
</template>

<script>
import { dept } from '@/api/colleges.js';
export default {
	data() {
		return {
			list: []
		};
	},
	methods: {
		getList() {
			dept()
				.then(res => {
					this.list = res.data;
					this.$refs.paging.complete(res.data);
				})
				.catch(res => {
					this.$refs.paging.complete(false);
				});
		},
		goStudents(i) {
			uni.navigateTo({
				url: '/pages_other/students/students?i=' + JSON.stringify(i)
			});
		}
	}
};
</script>

<style lang="scss">
/deep/.u-cell-group__wrapper {
	.u-line {
		border: 0 !important;
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
.course-des-box {
	height: 40rpx;
	flex-direction: row;
	display: flex;
	margin: 26rpx 32rpx;
}
.block_3 {
	background-color: rgba(93, 79, 220, 1);
	border-radius: 8rpx;
	width: 16rpx;
	height: 46rpx;
	margin-top: 2rpx;
	display: flex;
	flex-direction: column;
}
.text_7 {
	margin-left: 10rpx;
	font-weight: 600;
	font-size: 34rpx;
}
</style>
