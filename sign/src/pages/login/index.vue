<template>
  <div class="wrap">
    <div class="userInfo">
      <image src="../../static/images/wode.png"/>
      <p>188****2925</p>
    </div>
    <div class="list">
      <ul>
        <li @click="handleClick">我的面试</li>
        <li>我的卡卷</li>
        <li>我的行程</li>
      </ul>
    </div>
    <div class="dialog">
      <div class="small">
        <button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {
    getPhoneNumber(e) {
      console.log(e.detail.errMsg);
      console.log(e.detail.iv);
      console.log(e.detail.encryptedData);
    },
    handleClick() {
      wx.navigateTo({
        url: "../list/main"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  position: relative;
}

.userInfo {
  height: 500rpx;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  image {
    width: 100rpx;
    height: 100rpx;
    color: #fff;
    background: red;
    border-radius: 50%;
    margin-bottom: 25rpx;
  }
}

.list {
  width: 100%;
  height: 300rpx;
  ul {
    height: 300rpx;
    li {
      line-height: 100rpx;
      padding: 0 50rpx;
    }
  }
}

.dialog {
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  .small {
    width: 400rpx;
    height: 200rpx;
    background: #fff;
    margin: 480rpx auto;
  }
}
</style>
