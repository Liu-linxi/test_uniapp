<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/common/free.css";
	/*每个页面公共css */
	page {
		background-color: #171920;
		font-size: 32rpx;
	}
</style>
