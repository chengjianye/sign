<template>
  <div class="swrap">
    <div class="btn" @click="goAdd">+ 新增收货地址</div>
    <div>
      <!--  货物列表 -->
      <div class="lis" :key="index">
        <p class="times">2019-01-01</p>
        <dl>
          <dt>
            <img :src="arr.mainImgUrl" alt>
          </dt>
          <dd>
            <p class="name">{{arr.title}}</p>
            <p class="size">规格：{{size}}</p>
            <p class="pn">
              <span>￥{{arr.salesPrice}}</span>
              <span>X{{num}}</span>
            </p>
          </dd>
        </dl>
        <div class="types">
          <span>发货方式</span>
          <span>快递（包邮）：0元</span>
        </div>
        <div class="total">
          <span>订单总计</span>
          <span class="price">
            ￥
            <span class="col">{{arr.salesPrice*num}}</span>
          </span>
        </div>
      </div>
    </div>
    <!-- <div class="totals">
      <span>订单总计</span>
      <span class="price">
        - ￥
        <span class="col">5</span>
        <span class="more">></span>
      </span>
    </div>-->
    <div class="imgList">
      <div>
        <img class="wx" src="/static/images/7.png" alt>
        <span>微信支付</span>
      </div>
      <img
        class="yuan"
        @click="changes"
        :src="boo?'/static/images/yuan.png':'/static/images/xzyuan.png'"
        alt
      >
    </div>
    <div class="footer">
      <div>
        <span>
          总计￥
          <span class="price">{{total}}</span>
        </span>
        <span>微信支付</span>
      </div>
      <p @click="goPay">去支付</p>
    </div>
  </div>
</template>
<script>
export default {
  data: {
    arr: {},
    pid: "",
    num: 1,
    total: "",
    boo: false,
    size: "默认"
  },
  onLoad(options) {
    // console.log(options)
  },
  methods: {
    goPay() {
      // var date = "" + new Date().getTime();
      // console.log("date", date);
      // wx.requestPayment({
      //   timeStamp: date,
      //   nonceStr: "",
      //   package: "",
      //   signType: "MD5",
      //   paySign: "",
      //   success: function(res) {
      //     console.log("res...", res);
      //   },
      //   fail: function(res) {
      //     console.log("res...", res);
      //   }
      // });
    },
    changes() {
      this.boo = !this.boo;
    },
    goAdd() {
      // 去添加地址页面;
      wx.navigateTo({
        url: "/pages/shoppingadress/main"
      });
    }
  },
  onLoad(options) {
    var that = this;
    that.pid = options.id;
    //获取商品的基本信息
    wx.request({
      url: "http://test.api.jinaup.com/api/open/product/info/1.0.0",
      data: {
        pid: that.pid
      },
      method: "post",
      header: {
        "content-type": "application/x-www-form-urlencoded" // 默认值
      },
      success(res) {
        that.arr = res.data.result;
        console.log("that.arr..", that.arr);
        that.total = that.arr.salesPrice * that.num;
      }
    });
    wx.getStorage({
      key: "type",
      success: function(res) {
        that.size = res.data;
        console.log(res.data);
      }
    });
    wx.getStorage({
      key: "numb",
      success: function(res) {
        that.num = res.data;
        console.log(res.data);
      }
    });
  }
};
</script>
<style scoped lang='scss'>
.swrap {
  width: 100%;
  background: #f3f7f7;
}
.btn {
  width: 96%;
  height: 56px;
  line-height: 56px;
  text-align: center;
  background: #fff;
  color: #fc5d7b;
  font-size: 16px;
  margin: 5px 2%;
}
.lis {
  width: 96%;
  margin: 5px 2%;
  background: #fff;
  margin-bottom: 10px;
  .times {
    font-size: 12px;
    padding: 10px;
    box-sizing: border-box;
  }
  dl {
    display: flex;
    // justify-content: space-between;
    dt {
      img {
        width: 90px;
        height: 90px;
        padding: 8px;
        box-sizing: border-box;
      }
    }
    dd {
      padding: 0 8px;
      box-sizing: border-box;
      font-size: 12px;
      .name {
        font-size: 14px;
      }
      .size {
        color: #999da2;
        line-height: 2;
      }
      .pn {
        display: flex;
        justify-content: space-between;
        line-height: 2;
        color: #323a45;
      }
    }
  }
  .types,
  .total {
    width: 100%;
    height: 44px;
    font-size: 14px;
    line-height: 44px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .total {
    .price {
      color: #fc5d7b;
      .col {
        font-size: 24px;
      }
    }
  }
}
.totals {
  width: 96%;
  height: 44px;
  font-size: 14px;
  line-height: 44px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  background: #fff;
  box-sizing: border-box;
  margin: 0 2% 5px 2%;

  .price {
    color: #fc5d7b;
  }
  .more {
    color: #999da2;
  }
}
.imgList {
  width: 96%;
  height: 44px;
  font-size: 14px;
  line-height: 44px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  background: #fff;
  margin: 5px 2% 70px 2%;
  div {
    display: flex;
    font-size: 14px;
    .wx {
      width: 20px;
      height: 20px;
      margin: 12px 5px 0 0px;
    }
  }
  .yuan {
    width: 20px;
    height: 20px;
    margin: 12px 10px 0 0;
  }
}
.footer {
  display: flex;
  width: 100%;
  height: 55px;
  line-height: 55px;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ccc;
  div {
    width: 70%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #fc5d7b;
    padding: 0 10px;
    box-sizing: border-box;
    .price {
      font-size: 30px;
    }
    span:nth-child(2) {
      color: #323a45;
    }
  }
  p {
    width: 30%;
    height: 55px;
    line-height: 55px;
    font-size: 18px;
    text-align: center;
    color: #fff;
    background: linear-gradient(
      217deg,
      rgba(248, 99, 103, 1) 0%,
      rgba(251, 37, 121, 1) 100%
    );
  }
}
</style>
