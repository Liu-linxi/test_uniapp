<template>
	<view class="phonePop">
		<u-popup v-model="showPop" mode="bottom"  height="75%">
			<view style="height: 75vh;overflow: auto;background-color: #20232c;">
				<SortPickerList ref="sortPickerList" @clickData="clickData"></SortPickerList>
			</view>

		</u-popup>
	</view>
</template>

<script>
	import SortPickerList from "@/components/International-sortPickerList/index.vue";
	export default {
		components: {
			SortPickerList
		},
		props: {

		},
		data() {
			return {
				showPop: false,

			}
		},
		methods: {
			show() {
				this.showPop = true;
				this.$nextTick(() => {
					this.$refs["sortPickerList"].initPage();
				})
			},
			clickData(data) {
				console.log(data);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.phonePop {}
</style>