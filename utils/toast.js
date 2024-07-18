// utils/toast.js
export default {
  show(title, duration = 1500, icon = 'none') {
    uni.showToast({
      title: title,
      icon: icon,
      duration: duration
    });
  },
  success(title, duration = 1500) {
    this.show(title, duration, 'success');
  },
  loading(title, duration = 1500) {
    this.show(title, duration, 'loading');
  },
  hide() {
    uni.hideToast();
  }
};
