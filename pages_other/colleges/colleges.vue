<template>
	<z-paging
		ref="paging"
		loading-more-no-more-text="THE END"
		v-model="list"
		@query="getList"
		class="page"
		style="background-color: #f8f8f8;"
	>
		<u-cell-group>
			<u-cell
				v-for="i in list"
				:key="i.deptId"
				icon="../../../../../../../../../static/teachersay.png"
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
</style>
