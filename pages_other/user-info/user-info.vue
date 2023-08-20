<template>
	<view class="page">
		<view class="my-ava-info">
			<view class="single-avatar_1">
				<image class="ava" :src="form.avatar"></image>
				<div class="camera"><u-icon name="camera-fill" color="#5d4fdc" size="28"></u-icon></div>
			</view>
		</view>
		<u--form labelPosition="left" :model="form" :rules="rules" ref="uForm" label-align="right">
			<u-form-item prop="name" borderBottom label="姓名">
				<view class="input_1">
					<u--input placeholder="请输入真实姓名" v-model="form.nickName" border="none" fontSize="18" :disable="true"></u--input>
				</view>
			</u-form-item>
			<u-form-item prop="name" borderBottom label="学校">
				<view class="input_1">
					<u--input placeholder="请输入您所在的学校" v-model="form.deptName" border="none" fontSize="18" :disable="true"></u--input>
				</view>
			</u-form-item>
			<u-form-item prop="name" borderBottom label="编号">
				<view class="input_1">
					<u--input placeholder="请输入您的编号" v-model="form.studentNo" border="none" fontSize="18" :disable="true"></u--input>
				</view>
			</u-form-item>
			<u-form-item prop="phonenumber" borderBottom label="电话">
				<view class="input_1">
					<u--input placeholder="请输入您的联系电话" v-model="form.phonenumber" border="none" fontSize="18" :disable="true"></u--input>
				</view>
			</u-form-item>
			<u-form-item label="性别" prop="sex" borderBottom>
				<u-radio-group v-model="form.sex" placement="row" size="24" labelSize="24" :disabled="true">
					<u-radio activeColor="#5d4fdc" label="男" name="0"></u-radio>
					<u-radio activeColor="#5d4fdc" label="女" name="1"></u-radio>
				</u-radio-group>
			</u-form-item>
		</u--form>
		<!-- <view class="button_1">保存信息</view> -->
	</view>
</template>

<script>
import { getInfo } from '@/api/user.js';
export default {
	data() {
		return {
			form: null,
			rules: {
				// name: [
				// 	{
				// 		required: true,
				// 		message: '请输入真实姓名',
				// 		trigger: ['blur', 'change']
				// 	}
				// ]
			}
		};
	},
	onLoad() {
		this.getInfo();
	},
	methods: {
		getInfo() {
			getInfo().then(res => {
				this.form = res.user;
			});
		}
	}
};
</script>

<style scoped lang="scss">
.my-ava-info {
	width: 160rpx;
	height: 224rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 52rpx 0 0 296rpx;
}
.single-avatar_1 {
	position: relative;
	height: 160rpx;
	width: 160rpx;
	border-radius: 50%;

	image {
		height: 160rpx;
		width: 160rpx;
	}
	.camera {
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		right: 0;
		bottom: 0;
	}
}
.my-name {
	width: 72rpx;
	height: 48rpx;
	overflow-wrap: break-word;

	font-size: 36rpx;
	font-family: PingFangSC-Semibold;
	font-weight: 600;
	text-align: left;
	white-space: nowrap;
	line-height: 48rpx;
	margin: 16rpx 0 0 44rpx;
}
.input_1 {
	width: 630rpx;
	margin: auto;
	padding: 0 30rpx;
	// background-color: rgba(248, 248, 248, 1);
	border-radius: 16rpx;
	height: 120rpx;
}
/deep/.u-input {
	height: 100%;
}
/deep/.u-form-item__body {
	padding: 0;
}
/deep/.u-line {
	border: 0 !important;
}
/deep/.u-radio-group {
	flex: 0 !important;
}
/deep/.u-radio-group--row {
	margin: 0 130rpx 0;
	justify-content: space-around;
	height: 120rpx;
}
.button_1 {
	border-radius: 48rpx;
	width: 448rpx;
	height: 96rpx;
	margin: 40rpx auto;
	font-size: 32rpx;
	font-weight: 600;
	text-align: center;
	line-height: 96rpx;
	color: rgba(255, 255, 255, 1);
	// background-color: #dfe1e5;
	background-color: rgba(93, 79, 220, 1);
}
</style>
