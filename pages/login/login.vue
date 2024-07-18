<template>
	<view>
		<u-navbar back-icon-name="close" :background="{background: '#171920',}">
			<template #right>
				<view class="custom-right d-flex a-center">
					<image src="" style="width: 40rpx;height: 30rpx;background-color: #fff;" mode=""></image>
					<text class="ml-2">简体中文</text>
					<u-icon name="arrow-right" :size="13" class="ml-1 pt-1"></u-icon>
				</view>
			</template>
		</u-navbar>

		<view class="px-5 py-2">
			<view class="text-white font-bigger font-weight">
				欢迎登陆
			</view>
			<view class="mt-4" style="color: #999;">
				还没有账户
				<text style="color: #276cff;" class="ml-2"> 注册?</text>
			</view>
			<cus-subsection style="margin-top: 100rpx;" :titles="['邮箱','手机号']" :active="active" @changeActive="changeActive" />
			<view class=" mt-3" v-if="active==0">
				<view class="lable">
					邮箱
				</view>
				<input class="input mt-3" v-model="from.name" type="text" placeholder="请输入邮箱" placeholder-style="color:#767678;fontSize:24rpx;fontWeight:bold;" />
			</view>
			<view class="mt-3" v-else>
				<view class="lable">
					账号
				</view>
				<view class="input mt-3 d-flex a-center  pr-3">
					<view class="d-flex a-center text-white border-right pr-2 mr-2">
						<image src="" style="width: 40rpx;height: 30rpx;background-color: #fff;" mode=""></image>
						<text class="ml-1">+34</text>
						<u-icon name="arrow-down-fill" :size="2" color="#999" class="ml-1 pt-1"></u-icon>
					</view>
					<view class="">
						<input v-model="from.phone" class="w-100" type="text" placeholder="请输入手机号" placeholder-style="color:#767678;fontSize:24rpx;fontWeight:bold;" />
					</view>
				</view>
			</view>
			<view class="mt-3">
				<view class="lable">
					密码
				</view>
				<view class="input mt-3 d-flex a-center j-sb pr-3">
					<input v-if="showPass" type="text" v-model="from.pass" class="w-100 pr-3" placeholder="请输入密码" placeholder-style="color:#767678;fontSize:24rpx;fontWeight:bold;" />
					<input v-else type="password" v-model="from.pass" class="w-100 pr-3" placeholder="请输入密码" placeholder-style="color:#767678;fontSize:24rpx;fontWeight:bold;" />
					<u-icon :name="showPass?'eye-fill':'eye'" color="#767678" :size="38" @click="showPass=!showPass"></u-icon>
				</view>
			</view>
			<view class="btnshow" :class="{'disa':showDis}" @click="subLogin">
				登 录
			</view>

			<view class="mt-4">
				<text style="color: #276cff;" class="ml-2"> 忘记密码?</text>
			</view>
		</view>

	</view>
</template>

<script>
	import cusSubsection from './cpns/cus-subsection.vue';
	export default {
		components: { cusSubsection },
		data() {
			return {
				active: 0,
				showPass: false,
				from: {
					name: "",
					pass: "",
					phone: ""
				}
			}
		},
		computed: {
			showDis() {
				if (this.active == 0) {
					return !this.from.name || !this.from.pass
				}
				return !this.from.phone || !this.from.pass
			}
		},
		methods: {
			changeActive(index) {
				this.from.name = "";
				this.from.phone = "";
				this.active = index
			},
			subLogin() {
				if (this.active == 0) {
					if (!this.from.name) return this.$toast.show('请输入邮箱');
				} else {
					if (!this.from.phone) return this.$toast.show('请输入手机号');
				}
				if (!this.from.pass) return this.$toast.show('请输入密码');

				const { name, phone, pass } = this.from
				this.$toast.show(`成功登录了${name}|${phone}|${pass}`);
			}
		}
	}
</script>


<style scoped lang="scss">
	.custom-right {
		color: white;
	}

	.lable {
		color: #999;
	}

	input {
		color: #fff;
	}

	.input {
		background-color: #262a36;
		padding: 20rpx;
		border-radius: 10rpx;
	}

	.btnshow {
		color: #fff;
		background-color: #276cff;
		border-radius: 10rpx;
		margin-top: 80rpx;
		text-align: center;
		line-height: 100rpx;
		font-weight: bold;

		&.disa {
			background-color: var(--g-app-theme45-dark);
			color: #d6d6d6;
		}
	}
</style>