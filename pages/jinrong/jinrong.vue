<template>
	<view>
		<button type="default" @click="golongin">去登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
				golongin(){
					uni.navigateTo({
						url:"/pages/login/login"
					})
				}
		}
	}
</script>

<style>

</style>
