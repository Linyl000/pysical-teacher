<template>
	<z-paging ref="paging" loading-more-no-more-text="THE END" v-model="list" @query="getList" class="page">
		<view class="hello">
			<text lines="1">Hello，</text>
			<text lines="1" style="color: #5d4fdc;">王佳</text>
			<text lines="1" style="font-size: 32rpx;">老师</text>
		</view>
		<!-- 		<view class="search-box"><u-search placeholder="搜索课程成绩" v-model="keyword"></u-search></view> -->
		<view class="options">
			<!-- <view class="options-item">
				<div class="icon" :style="{ backgroundColor: '#1678fc' }"><u-icon name="order" color="#fff" size="28"></u-icon></div>
				<text lines="1" style="font-weight: 600;">成绩管理</text>
			</view> -->
			<view class="options-item" @click="goColleges">
				<div class="icon" :style="{ backgroundColor: '#63b169' }"><u-icon name="man-add-fill" color="#fff" size="28"></u-icon></div>
				<text lines="1" style="font-weight: 600;">学院管理</text>
			</view>
			<view class="options-item" @click="goStudents">
				<div class="icon" :style="{ backgroundColor: '#fc8b32' }"><u-icon name="man-add" color="#fff" size="28"></u-icon></div>
				<text lines="1" style="font-weight: 600;">学生管理</text>
			</view>
		</view>

		<u-tabs
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
		></u-tabs>
		<view class="list-item" v-for="(item, index) in 10" :key="item" @click="goCourseDetails">
			<div class="top">
				<view lines="1" style="font-weight: 600;">最多十个字符你记住…</view>
				<view class="right-score">
					<text>完成率：</text>
					<text style="color: #e57d7d;">88%</text>
				</view>
			</div>
			<div class="top">
				<view class="classes">23/02/22-八段锦-xx学院</view>
				<view style="color: #888888;">30/60人已完成</view>
			</div>
		</view>
	</z-paging>
</template>

<script>
export default {
	data() {
		return {
			list1: [
				{
					name: '作业列表'
				},
				{
					name: '考核列表'
				}
			],
			current: 0,
			list: []
		};
	},
	onLoad() {
		this.getList();
	},
	methods: {
		getList(pageNo, pageSize) {
			//
		},
		goColleges() {
			uni.navigateTo({
				url: '/pages_other/colleges/colleges'
			});
		},
		goStudents() {
			uni.navigateTo({
				url: '/pages_other/students/students'
			});
		},
		goCourseDetails() {
			uni.navigateTo({
				url: '/pages_other/coursse-details/coursse-details'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	background-color: rgba(248, 248, 248, 1);
}
/deep/.u-tabs__wrapper__nav__item__text {
	font-size: 36rpx !important;
}

// .search-box {
// 	width: 686rpx;
// 	height: 72rpx;
// 	flex-direction: row;
// 	display: flex;
// 	justify-content: space-between;
// 	margin: 36rpx 0 0 32rpx;
// }
.hello {
	height: 48rpx;
	font-weight: 600;
	padding: 20rpx 20rpx;
	background-color: #fff;

	font-size: 40rpx;
}
.options {
	width: 750rpx;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding: 32rpx 66rpx;
	background-color: #fff;
	.options-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.icon {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 96rpx;
			width: 96rpx;
			border-radius: 16rpx;
			margin-bottom: 16rpx;
		}
	}
}
.list-item {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 660rpx;
	height: 120rpx;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 16rpx;
	margin: 6rpx auto 20rpx;
	padding: 26rpx 28rpx;
}
.top {
	display: flex;
	justify-content: space-between;

	.left-title {
		flex: 1;
		font-size: 34rpx;
		font-weight: 600;
	}
}
</style>
