<template>
	<z-paging
		ref="paging"
		loading-more-no-more-text="THE END"
		v-model="list"
		@query="getList"
		class="page"
		style="background-color: #f8f8f8;"
		:default-page-size="20"
	>
		<view class="search-box">
			<u-search placeholder="搜索学生学号或姓名" v-model="keyword" @search="getList(1, 10)" @custom="getList(1, 10)"></u-search>
			<!-- <u-icon name="plus-circle" size="24" @click="goStudentAdd"></u-icon> -->
		</view>
		<div class="type">
			<div class="small-colum">
				<div>学生姓名</div>
				<div>学号</div>
			</div>
			<div class="small-colum" v-for="i in list" :key="i.userId" @click="goStudentDetails(i)">
				<div style="flex: 1;text-align:left;">
					<image :src="i.avatar" style="width: 60rpx;height: 60rpx;vertical-align: middle;margin-right: 10rpx;"></image>
					{{ i.nickName }}
				</div>
				<div>{{ i.studentNo }}</div>
			</div>
		</div>
	</z-paging>
</template>

<script>
import { deptStuList } from '@/api/students.js';
export default {
	data() {
		return { list: [], i: null, keyword: '' };
	},
	onLoad(option) {
		this.i = option.i ? JSON.parse(option.i) : '';
	},
	methods: {
		getList(page, limit) {
			deptStuList({ deptId: this.i.deptId ? this.i.deptId : '', keyword: this.keyword, pageNum: page, pageSize: limit })
				.then(res => {
					this.list = res.rows;
					this.$refs.paging.complete(res.rows);
				})
				.catch(res => {
					this.$refs.paging.complete(false);
				});
		},
		goStudentDetails(i) {
			uni.navigateTo({
				url: '/pages_other/student-details/student-details?i=' + JSON.stringify(i)
			});
		},
		goStudentAdd() {
			uni.navigateTo({
				url: '/pages_other/student-add/student-add'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.search-box {
	width: 686rpx;
	height: 72rpx;
	flex-direction: row;
	display: flex;
	justify-content: space-between;
	margin: 36rpx 0 0 32rpx;
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
		min-height: 80rpx;
		font-size: 28rpx;
		color: #888888;
		line-height: 1.4;
		div {
			width: 45%;
			text-align: center;
		}
	}
}
</style>
