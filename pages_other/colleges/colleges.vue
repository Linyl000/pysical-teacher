<template>
	<z-paging
		ref="paging"
		loading-more-no-more-text="THE END"
		v-model="list"
		@query="getList"
		class="page"
		style="background-color: #f8f8f8;"
		:default-page-size="15"
	>
		<view class="course-des-box">
			<view class="block_3"></view>
			<text lines="1" class="text_7">全部学院</text>
		</view>
		<!-- <u-cell-group>
			<u-cell
				v-for="i in list"
				:key="i.deptId"
				icon="chat"
				:title="i.deptName"
				:label="i.orderNum + '人'"
				:isLink="true"
				@click="goStudents(i)"
			></u-cell>
		</u-cell-group> -->
		<div class="depts" v-for="i in list" :key="i.deptId">
			<u-icon name="man-add" color="#666" size="38"></u-icon>
			<div class="name">
				<div class="big">{{ i.deptName }}</div>
				<div class="small">{{ i.orderNum + '人' }}</div>
			</div>
			<u-icon name="arrow-right" color="#666" size="24" @click="goStudents(i)"></u-icon>
		</div>
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
		getList(page, limit) {
			dept({ pageNum: page, pageSize: limit })
				.then(res => {
					this.list = res.rows;
					this.$refs.paging.complete(res.rows);
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
.depts {
	display: flex;
	background-color: #ffffff;
	border-radius: 20rpx;
	margin: 0 20rpx 24rpx;
	padding: 20rpx;
	.name {
		flex: 1;
		display: flex;
		flex-direction: column;
		.big {
			font-size: 38rpx;
			font-weight: 600;
		}
		.small {
			font-size: 32rpx;
		}
	}
}
</style>
