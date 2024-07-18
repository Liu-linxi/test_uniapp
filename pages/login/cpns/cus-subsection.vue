<template>
	<view class="cusSubsection">
		<view class="tags a-center" v-for="(li,index) in titles" :key="li" @click="changeEmit(index)" :class="{'text-white':index===active}">
			{{li}}
		</view>
	</view>
</template>

<script>
	export default {
		props: ["titles", "active"],
		data() {
			return {

			}
		},
		mounted() {

		},
		methods: {
			changeEmit(index) {
				this.$emit("changeActive", index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cusSubsection {
		background-color: #272b36;
		color: #999;
		font-weight: bold;
		font-size: 34rpx;
		display: flex;
		align-items: center;
		width: 100%;
		border-radius: 10rpx;
		padding: 10rpx;
		line-height: 85rpx;
		.tags {
			width: 50%;
			flex-shrink: 0;
			text-align: center;
		}
		.text-white{
			border-radius: 10rpx;
			background-color: #3f4353;
		}
	}
</style>