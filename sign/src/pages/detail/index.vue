<template>
  <div class="detailWraper">
    <ul>
      <li>
        <lable for>面试地址</lable>
        <input type="text" placeholder="请输入公司名称">
      </li>
      <li>
        <lable for>面试时间</lable>
        <input type="number" placeholder="请输入面试联系人电话" maxlength="11">
      </li>
      <li>
        <lable for>联系方式</lable>
        <input type="text" placeholder="请输入面试联系人电话" maxlength="11">
      </li>
      <li>
        <lable for>是否提醒</lable>
        <input type="text" placeholder="请输入面试联系人电话" maxlength="11">
      </li>
      <li>
        <lable for>面试状态</lable>
        <input type="text" placeholder="请输入面试联系人电话" maxlength="11">
      </li>
      <li>
        <lable for>取消提醒</lable>
        <switch/>
      </li>
    </ul>

    <div class="sub">
      <button class="btn1">去打卡</button>
      <button class="btn2">放弃面试</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.detailWraper {
  height: 100%;
}
p {
  font-size: 34rpx;
  padding: 15rpx 0 15rpx 30rpx;
  background: #f6f6f6;
}
ul {
  border-top: 1rpx solid #eee;
  border-bottom: 1rpx solid #eee;
  background: #fff;
}
li {
  width: 720rpx;
  height: 88rpx;
  margin-left: 30rpx;
  border-bottom: 1rpx solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  lable {
    color: #666;
    width: 170rpx;
    font-size: 30rpx;
  }
  input,
  picker {
    flex: 1;
    font-size: 30rpx;
    // background: #eee;
    color: #333;
    height: 88rpx;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 30rpx;
    box-sizing: border-box;
  }
  .date {
    width: 100%;
    line-height: 88rpx;
  }
}
li:last-child {
  border: none;
  switch {
    margin-right: 430rpx;
  }
}
textarea {
  font-size: 30rpx;
  // background: #eee;
  color: #333;
  width: 690rpx;
  height: 200rpx;
  margin: 30rpx;
  box-sizing: border-box;
  padding: 10rpx;
  border: 1rpx solid #c0c0c0;
  border-radius: 5rpx;
}
.sub {
  height: 150rpx;
  margin-top: 100rpx;
  display: flex;
  justify-content: space-around;
  button {
    height: 80rpx;
    background: skyblue;
    color: #fff;
    line-height: 80rpx;
  }
  button:last-child {
    background: red;
  }
}
</style>
