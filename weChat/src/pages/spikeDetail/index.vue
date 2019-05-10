<template>
  <div class="wrap">
    <div class="swiper">
      <img :src="arr.mainImgUrl" alt>
      <span class="page">{{idx}}/{{lenth}}</span>
    </div>
    <div class="tit">
      <div class="ones">
        <p>￥</p>
        <p class="price">{{arr.seckillPrice}}</p>
        <s class="num">{{arr.markePrice}}</s>
      </div>
      <p class="times">距结束 11:23:24</p>
    </div>
    <div class="title">
      <div class="names">{{arr.title}}</div>
      <p>
        <span>快递包邮</span>
        <span>仅剩{{arr.totalStore}}件</span>
      </p>
    </div>
    <ul class="list">
      <li class="lis">
        <span>选择</span>
        <div class="rights">
          <span>颜色 尺码</span>
          <img src="/static/images/jt.png" alt>
        </div>
      </li>
      <li class="lis">
        <span>规格</span>
        <div class="rights">
          <span>S M XL</span>
          <img src="/static/images/jt.png" alt>
        </div>
      </li>
      <li class="lis">
        <span>领券</span>
        <div class="rights">
          <span class="to2color">每满300减35券 满199减20券</span>
          <img src="/static/images/jt.png" alt>
        </div>
      </li>
    </ul>
    <div class="footer">
      <div class="lefts" @click="changes">
        <img :src="boo?'/static/images/hxin.png':'/static/images/xin.png'" alt>
        <p :class="boo?'':'colos'" class>收藏</p>
      </div>
      <button>立即购买</button>
    </div>
  </div>
</template>
<script>
import setTime from '../../utils/index.js'
export default {
  data: {
    pid: "", //商品ID
    arr: "", //存储商品数据
    name: "", //获取商品
    idx: 1, //轮播图初始下标
    lenth: 1, //轮播图长度
    boo: true
  },
  onLoad(options) {
    console.log(options);
    this.pid = options.id;
    this.name = options.name;
  },
  onShow() {
    var that = this;
    var data=new Date()
    // console.log('data....',setTime.formarTime('123'))

    // 获取数据
    wx.request({
      url: "http://test.api.jinaup.com/api/open/product/seckill/query/1",
      data: {
        pageIndex: 1,
        dayType: 1
      },
      method: "post",
      header: {
        "content-type": "application/x-www-form-urlencoded" // 默认值
      },
      success(res) {
        res.data.result.spike.map((item, index) => {
          if (that.name == item.title) {
            console.log(item);
            that.arr = item;
          }
        });
      }
    });
  },
  methods: {
    changes() {
      this.boo = !this.boo;
    }
  }
};
</script>
<style lang="scss" scope>
.wrap {
  width: 100%;
  height: 100%;
}
.swiper {
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
  .page {
    position: absolute;
    right: 10px;
    top: 180px;
    font-size: 12px;
    padding: 0 3px;
    box-sizing: border-box;
    color: #fff;
    background: rgba(0, 0, 0, 1);
    border-radius: 8px;
    opacity: 0.5;
  }
}
.tit {
  display: flex;
  justify-content: space-between;
  padding: 0 14px;
  box-sizing: border-box;
  height: 54px;
  line-height: 54px;
  background: linear-gradient(
    217deg,
    rgba(248, 99, 103, 1) 0%,
    rgba(251, 37, 121, 1) 100%
  );
  color: #fff;
}
.tit .ones {
  display: flex;
  p {
    font-size: 16px;
  }
  .price {
    font-size: 30px;
    margin-right: 10px;
  }
  .num {
    height: 54px;
    line-height: 54px;
  }
}
.tit .ones p:nth-child(1) {
  font-size: 15px;
  height: 54px;
  line-height: 54px;
}
.tit .times {
  float: right;
  font-size: 16px;
}
.title {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  .names {
    font-size: 18px;
    color: #323a45;
  }
  p {
    display: flex;
    justify-content: space-between;
    line-height: 3;
    font-size: 12px;
    color: #999da2;
  }
}
.list {
  width: 100%;
  padding: 0 2%;
  box-sizing: border-box;
  .lis {
    display: flex;
    font-size: 13px;
    height: 40px;
    line-height: 40px;
    span {
      color: #676767;
    }
    .rights {
      flex: 1;
      color: #323a45;
      display: flex;
      padding: 0 5px;
      box-sizing: border-box;
      justify-content: space-between;
      img {
        width: 10px;
        height: 10px;
        margin-top: 10px;
      }
    }
    .to2color {
      color: #fc5d7b;
    }
  }
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  text-align: center;
  display: flex;
  .lefts {
    width: 30%;
    p {
      font-size: 12px;
    }
    img {
      width: 14px;
      height: 12px;
    }
  }
  button {
    width: 70%;
    background: linear-gradient(
      217deg,
      rgba(248, 99, 103, 1) 0%,
      rgba(251, 37, 121, 1) 100%
    );
    font-size: 18px;
    color: #fff;
  }
  .colos {
    color: #fc5d7b;
  }
}
</style>