<template>
	<z-paging
		ref="paging"
		loading-more-no-more-text="THE END"
		v-model="list"
		@query="getList"
		class="page"
		style="background-color: #f8f8f8;"
	>
		<view class="search-box">
			<u-search placeholder="搜索学生学号或姓名" v-model="keyword"></u-search>
			<u-icon name="plus-circle" size="24" @click="goStudentAdd"></u-icon>
		</view>
		<div class="type">
			<div class="small-colum">
				<div>学生姓名</div>
				<div>学号</div>
			</div>
			<div class="small-colum" v-for="i in 10" :key="i" @click="goStudentDetails">
				<div>
					<image src="../../static/logout.png" style="width: 60rpx;height: 60rpx;vertical-align: middle;margin-right: 10rpx;"></image>
					111
				</div>
				<div>222</div>
			</div>
		</div>
	</z-paging>
</template>

<script>
export default {
	data() {
		return { list: [] };
	},
	onLoad() {
		this.getList();
	},
	methods: {
		getList(pageNo, pageSize) {
			//
		},
		goStudentDetails() {
			uni.navigateTo({
				url: '/pages_other/student-details/student-details'
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
		height: 80rpx;
		line-height: 80rpx;
		font-size: 28rpx;
		color: #888888;
		div {
			width: 25%;
			text-align: center;
		}
		.score {
			color: rgba(224, 105, 105, 1);
			font-size: 36rpx;
		}
		.colums {
			color: rgba(224, 105, 105, 1);
			font-size: 28rpx;
		}
	}
}
</style>
