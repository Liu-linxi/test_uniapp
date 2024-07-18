<template>
	<view>
		<button type="default" @click="golongin">去登录</button>
		<SortPickerList ref="sortPickerList" @clickData="clickData"></SortPickerList>
	</view>
</template>

<script>
	import SortPickerList from "@/components/International-sortPickerList/index.vue";
	export default {
		components: {
			SortPickerList
		},
		data() {
			return {

			}
		},
		onReady() {
			var that = this
			that.$refs["sortPickerList"].initPage();
		},
		methods: {
			golongin() {
				uni.navigateTo({
					url: "/pages/login/login"
				})
			},
			clickData(data) {
				console.log(data);
			}
		}
	}
</script>

<style>

</style>