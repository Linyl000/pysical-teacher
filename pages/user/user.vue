s
<template>
	<view class="page">
		<view class="teacher-img"></view>
		<view class="teacher-info">
			<image class="ava" :src="list.avatar"></image>
			<view class="teacher-des">
				<view lines="1" class="name">
					{{ list.nickName }}老师
					<u-icon name="edit-pen" color="#fff" size="28" @click="goUserInfo"></u-icon>
				</view>
				<view lines="1" class="school">{{ list.deptName }}</view>
			</view>
		</view>
		<div class="section2">
			<u-cell-group>
				<u-cell icon="../../../../../../../../../static/teachersay.png" title="教师评价" :isLink="true" @click="goTeacherSay"></u-cell>

				<u-cell icon="../../../../../../../../../static/logout.png" title="退出" :isLink="true" @click="showByeBye = true"></u-cell>
			</u-cell-group>
		</div>
		<!-- 注销框 -->
		<u-modal
			:show="showByeBye"
			title="退出"
			content="点击确认退出当前账号"
			@confirm="logout"
			showCancelButton
			@cancel="showByeBye = false"
			confirmColor="#8e6af8"
		></u-modal>
	</view>
</template>

<script>
import { getInfo } from '@/api/user.js';
export default {
	data() {
		return { list: null, showByeBye: false };
	},
	onLoad() {
		this.getInfo();
	},
	methods: {
		goTeacherSay() {
			uni.navigateTo({
				url: '/pages_other/teacher-say/teacher-say'
			});
		},
		getInfo() {
			getInfo().then(res => {
				this.list = res.user;
			});
		},
		logout() {
			uni.removeStorageSync('token');
			uni.redirectTo({
				url: '/pages/login/login'
			});
		},
		goUserInfo() {
			uni.navigateTo({
				url: '/pages_other/user-info/user-info'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
page,
.page {
	background-color: rgba(248, 248, 248, 1);
}
.teacher-img {
	position: absolute;
	top: 0;
	left: 0;
	width: 750rpx;
	height: 540rpx;
	background-color: #8767f5;
	border-radius: 0rpx 0rpx 32rpx 32rpx;
}
.teacher-info {
	z-index: 100;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 750rpx;
	height: 500rpx;
	.ava {
		width: 140rpx;
		height: 140rpx;
		border: 6rpx solid #ffffff;
		border-radius: 50%;
		margin: 46rpx 0 30rpx;
	}
	.teacher-des {
		color: #fff;
	}
	.name {
		display: flex;
		font-size: 48rpx;
		justify-content: center;
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
	width: 686rpx;
	border-radius: 16rpx;
	margin: 0rpx auto;
	overflow: hidden;
	/deep/.u-cell {
		height: 110rpx;
		background-color: #fff !important;
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
