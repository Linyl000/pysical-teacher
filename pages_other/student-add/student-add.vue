<template>
	<view class="page">
		<u--form labelPosition="left" :model="form" :rules="rules" ref="uForm">
			<u-form-item prop="name" borderBottom ref="item1">
				<view class="input_1">
					<u--input placeholder="请输入学生真实姓名" v-model="value2" @change="change" border="none" fontSize="18"></u--input>
				</view>
			</u-form-item>
			<u-form-item prop="name" borderBottom ref="item1">
				<view class="input_1">
					<u--input placeholder="请输入学生学号" v-model="value2" @change="change" border="none" fontSize="18"></u--input>
				</view>
			</u-form-item>
			<!-- <u-form-item prop="name" borderBottom ref="item1">
				<view class="input_1">
					<u--input placeholder="请输入学生所在的学院" v-model="value2" @change="change" border="none" fontSize="18"></u--input>
				</view>
			</u-form-item>
			<u-form-item prop="name" borderBottom ref="item1">
				<view class="input_1">
					<u--input placeholder="请输入学生所在的专业" v-model="value2" @change="change" border="none" fontSize="18"></u--input>
				</view>
			</u-form-item>
			<u-form-item prop="name" borderBottom ref="item1">
				<u-radio-group v-model="value3" placement="row" size="24" labelSize="24">
					<u-radio activeColor="#5d4fdc" label="男"></u-radio>
					<u-radio activeColor="#5d4fdc" label="女"></u-radio>
				</u-radio-group>
			</u-form-item> -->
		</u--form>
		<view class="button_1" @click="goBack">添加学生</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		goBack() {
			uni.navigateBack({});
		}
	}
};
</script>

<style lang="scss">
.input_1 {
	width: 630rpx;
	margin: auto;
	padding: 0 30rpx;
	background-color: rgba(248, 248, 248, 1);
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
