<template>
  <div class="wrap">
    <header>
      <span
        @click="tabChange(index)"
        v-for="(item, index) in types"
        :key="index"
        :class="active===index?'active':''"
      >{{item}}</span>
    </header>
    <div class="listAll" @click="handleClick">
      <ul>
        <li>
          <h2>北京小剧有限科技</h2>
          <span class="no1">未开始</span>
        </li>
        <li>北京市海淀区上地七街</li>
        <li>
          <p>面试时间 2019-03-21</p>
          <p class="no">未打卡</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: ["全部", "未开始", "已打卡", "已放弃"],
      active: ""
    };
  },
  methods: {
    tabChange(index) {
      this.active = index;
    },
    handleClick() {
      wx.navigateTo({
        url: "../detail/main"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 99;
  width: 100%;
  height: 90rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #eee;
  border-bottom: solid 1px #ccc;
  span {
    line-height: 88rpx;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 2rpx solid #fff;
  }
  span.active {
    color: #197dbf;
    font-weight: 500;
    border-bottom: 3rpx solid #197dbf;
  }
}

.listAll {
  height: 300rpx;
  background: #eee;
  margin-top: 100rpx;
  ul {
    height: 300rpx;
    li {
      display: flex;
      justify-content: space-between;
      line-height: 100rpx;
      padding: 0 25rpx;
      h2 {
        font-weight: bold;
      }
      .no {
        width: 120rpx;
        height: 60rpx;
        line-height: 60rpx;
        text-align: center;
        margin-top: 22rpx;
        color: #fff;
        background: #fcc;
        font-size: 28rpx;
      }
      .no1 {
        width: 120rpx;
        height: 60rpx;
        line-height: 60rpx;
        text-align: center;
        margin-top: 22rpx;
        color: #fff;
        background: skyblue;
        font-size: 28rpx;
      }
    }
  }
}
</style>
