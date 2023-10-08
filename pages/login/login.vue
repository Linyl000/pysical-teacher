<template>
	<view class="page">
		<view class="input_1"><u--input placeholder="请输入账号" v-model="username" border="none" fontSize="18"></u--input></view>
		<view class="input_1">
			<u--input placeholder="请输入密码" v-model="password" border="none" fontSize="18" :password="pwd">
				<template slot="suffix">
					<u-icon :name="pwd ? 'eye-off' : 'eye'" size="33" @click="pwd = !pwd"></u-icon>
				</template>
			</u--input>
		</view>
		<!-- 		<u-radio-group v-model="value3" placement="row" size="24" labelSize="24">
			<u-radio activeColor="#5d4fdc" label="男"></u-radio>
			<u-radio activeColor="#5d4fdc" label="女"></u-radio>
		</u-radio-group> -->

		<u-checkbox-group v-model="checkboxValue1">
			<u-checkbox shape="circle" activeColor="#5D4FDC" label="记住密码"></u-checkbox>
		</u-checkbox-group>

		<view class="button_1" @click="goIndex">登录</view>
	</view>
</template>

<script>
import { login } from '@/api/login.js';
export default {
	data() {
		return {
			username: 'tea001',
			password: '123456',
			pwd: true,
			codeUrl: null,
			uuid: null,
			captchaEnabled: null,
			checkboxValue1: null
		};
	},
	created() {
		this.checkboxValue1 = uni.getStorageSync('Mremember') === undefined || uni.getStorageSync('Mremember') === true ? [''] : [];
		if (this.checkboxValue1.length) {
			this.username = uni.getStorageSync('username');
			this.password = uni.getStorageSync('password');
		}
	},
	methods: {
		goIndex() {
			if (!this.username || !this.password) {
				uni.showToast({
					duration: 2000,
					title: '学号或密码不能为空',
					icon: 'none'
				});
				return;
			}
			uni.removeStorageSync('token');
			if (this.checkboxValue1.length > 0) {
				uni.setStorageSync('Musername', this.username);
				uni.setStorageSync('Mpassword', this.password);
				uni.setStorageSync('Mremember', true);
			} else {
				uni.removeStorageSync('Musername');
				uni.removeStorageSync('Mpassword');
				uni.setStorageSync('Mremember', false);
			}
			login({ username: this.username, password: this.password }).then(res => {
				if (res.code === 200) {
					uni.setStorageSync('token', res.token);
					uni.switchTab({
						url: '/pages/index/index'
					});
				} else {
					uni.showToast({
						duration: 2000,
						title: res.msg,
						icon: 'none'
					});
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.input_1 {
	width: 630rpx;
	margin: 40rpx 0 0 32rpx;
	padding: 0 30rpx;
	border-radius: 16rpx;
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

/deep/ .u-checkbox-group--row {
	justify-content: flex-end;
	margin-right: 40rpx;
	margin-top: 20rpx;
}
/deep/.u-input {
	height: 100%;
}
.login-code-img {
	width: 200rpx;
	height: 60rpx;
}
/deep/.u-radio-group {
	flex: 0 !important;
}
/deep/.u-radio-group--row {
	margin: 40rpx 130rpx 0;
	justify-content: space-around;
	height: 120rpx;
}
</style>
