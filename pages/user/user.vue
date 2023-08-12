s
<template>
	<view class="page">
		<view class="teacher-info">
			<image class="ava" src="@/static/user_f.png"></image>
			<view class="teacher-des">
				<view lines="1" class="name">王佳老师</view>
				<view lines="1" class="school">吉林大学</view>
			</view>
		</view>
		<div class="section2">
			<u-cell-group>
				<u-cell icon="../../../../../../../../../static/teachersay.png" title="教师评价" :isLink="true" @click="goTeacherSay"></u-cell>

				<u-cell icon="../../../../../../../../../static/logout.png" title="退出" :isLink="true" @click="logout"></u-cell>
			</u-cell-group>
		</div>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {},
	methods: {
		goTeacherSay() {
			uni.navigateTo({
				url: '/pages_other/teacher-say/teacher-say'
			});
		},
		logout() {
			uni.switchTab({
				url: '/pages/login/login'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	background-color: rgba(248, 248, 248, 1);
}
.teacher-info {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 750rpx;
	height: 540rpx;
	background-color: #8767f5;
	border-radius: 0rpx 0rpx 32rpx 32rpx;

	.ava {
		width: 140rpx;
		height: 140rpx;
		border: 6rpx solid #ffffff;
		border-radius: 50%;
		margin: 30rpx 0;
	}
	.teacher-des {
		color: #fff;
	}
	.name {
		font-size: 48rpx;
		text-align: center;
		font-weight: 600;
		margin-bottom: 16rpx;
	}
	.school {
		font-size: 28rpx;
		text-align: center;
		font-weight: normal;
	}
}
.section2 {
	position: absolute;
	left: 32rpx;
	top: 488rpx;
	width: 686rpx;
	background: #ffffff;
	border-radius: 16rpx;

	// margin: 24rpx auto;
	/deep/.u-cell {
		height: 110rpx;
		.u-line {
			border: 0 !important;
		}
		.u-cell__body {
			height: 100%;
		}
		.u-cell__title-text {
			font-size: 34rpx;
			font-weight: 600;
		}
		.u-icon {
			margin: 0 12rpx;
			width: 48rpx;
			height: 48rpx;
			text {
				font-size: 44rpx !important;
			}
		}
	}
}
</style>
