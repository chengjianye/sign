<template>
  <div class="ShareWrap">
    <h2>{{shareInfo.title}}</h2>
    <div class="price">【在售价】{{shareInfo.marketPrice}}元</div>

    <div class="center">
      <div class="left">
        <canvas style="width: 100%; height: 350px;" canvas-id="firstCanvas"></canvas>
      </div>
      <div class="prolist">
        <div class="prolists" 
          v-for="(item,index) in imgMap" 
          :key="index"
          @click="handleImg(index)"
        >
          <image class="img1" :src="item.img1"/>
          <image class="img2" :src="shareInfo.mainImgUrl"/>
        </div>
      </div>
    </div>
    <div class="footer">
      <ul>
        <li>
          <img src="/static/images/7.png"/>
          <span>复制文案</span>
        </li>
        <li>
          <img src="/static/images/5.png"/>
          <span>朋友圈</span>
        </li>
        <li @click="SaveImage">
          <img src="/static/images/6.png"/>
          <span>保存到相册</span>
        </li>
        <li>
          <img src="/static/images/4.png"/>
          <span>复制文案</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      sharelist: [],
      imgMap: [
        {
          img1: "/static/images/true2.png",
          img2: "/static/images/2.png"
        },
        {
          img1: "/static/images/true.png",
          img2: "/static/images/2.png"
        },
        {
          img1: "/static/images/true.png",
          img2: "/static/images/2.png"
        },
        {
          img1: "/static/images/true.png",
          img2: "/static/images/2.png"
        },
        {
          img1: "/static/images/true.png",
          img2: "/static/images/2.png"
        },
        {
          img1: "/static/images/true.png",
          img2: "/static/images/2.png"
        },
        {
          img1: "/static/images/true.png",
          img2: "/static/images/2.png"
        },
        {
          img1: "/static/images/true.png",
          img2: "/static/images/2.png"
        },
        {
          img1: "/static/images/true.png",
          img2: "/static/images/2.png"
        }
      ],
      dataList: [],
      HightLight:['/static/images/true2.png'],
      cancel:['/static/images/true.png'],
      ind:0
    };
  },
  computed: {
    ...mapState({
      shareInfo: state => state.share.shareCont
    })
  },
  created() {
    this.shareList({
      pid: 1
    });
  },
  onLoad(options) {
    //this.dataList = options.pid
  },
  onReady(e) {
    const context = wx.createCanvasContext("firstCanvas");

    context.drawImage("http://tmp/wx3375420e2c184d34.o6zAJs20i_NwIPMbTYKgZk0JoRoY.QnJM4Ue0I9SI4e5bdd9e5d0cbf4baaa1682d4e50a4ab.png",5,10,30,30);
    context.setStrokeStyle("#ccc");
    context.setLineWidth(0.5);
    context.fillText(this.shareInfo.title, 40, 22, 150, 40);
    context.fillText("分享给你一个商品", 88, 22, 150, 40);
    context.fillText("邀请码：C5JQD7O", 40, 38, 100, 20);
    context.drawImage(this.shareInfo.mainImgUrl, 5, 50, 160, 180);
    context.fillText(this.shareInfo.title, 5, 255, 160, 90);
    context.fillText("￥", 5, 285, 160, 90);
    context.fillText(this.shareInfo.totalStock, 15, 285, 160, 90);
    context.fillText(this.shareInfo.marketPrice, 35, 285, 160, 90);
    context.fillText("长按识别二维码访问", 8, 300, 160, 90);
    context.drawImage("http://tmp/wx3375420e2c184d34.o6zAJs20i_NwIPMbTYKgZk0JoRoY.JXkIkYw6uXeu2be31e0738b5d75bda55bd266cbd66c0.png",115,265,45,45);
    context.rect(0, 0, 175, 323);
    context.stroke();
    context.draw();
  },
  methods: {
    ...mapActions({
      shareList: "share/shareList"
    }),
    ...mapMutations({
      shareText: "share/shareText"
    }),
    handleImg(index){
      this.imgMap.forEach((v,i) => {
         if(i == index){
            v.img1 = this.HightLight
         }else{
            v.img1 = this.cancel
         }
      })
      
    },
    SaveImage() {
      const ctx = wx.createCanvasContext("firstCanvas");

      wx.canvasToTempFilePath({
        x: 100,
        y: 200,
        width: 50,
        height: 50,
        destWidth: 100,
        destHeight: 100,
        canvasId: "firstCanvas",
        success(res) {
          console.log(res.tempFilePath);
        }
      });
      /*  wx.chooseImage({
        success(res) {
          console.log(res)
          ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100)
          ctx.draw()
        }
      }) */
    }
  }
};
</script>

<style>
.ShareWrap {
  width: 100%;
  height: 100%;
}

.ShareWrap h2 {
  font-weight: 600;
  font-size: 45rpx;
  width: 658rpx;
  margin: 0 auto;
}

.price {
  width: 658rpx;
  height: 60rpx;
  margin: 0 auto;
  margin-top: 20rpx;
}

.center {
  width: 100%;
  height: 795rpx;
  display: flex;
  justify-content: space-between;
}

.left {
  width: 100%;
  height: 760rpx;
  margin-left: 15rpx;
}

.left dl {
  width: 100%;
  display: flex;
  height: 80rpx;
  display: flex;
  align-items: center;
}
.left dl dt {
  width: 18%;
  text-align: center;
  margin-right: 17rpx;
}
.left dl dt img {
  width: 60rpx;
  height: 60rpx;
}

.left dl dd {
  font-size: 24rpx;
  flex: 1;
  line-height: 33rpx;
  display: flex;
  flex-direction: column;
}
.bigImg {
  margin-top: 25rpx;
}
.bigImg img {
  width: 412rpx;
  height: 400rpx;
}

.text {
  font-size: 30rpx;
}

.foot {
  height: 175rpx;
  display: flex;
  justify-content: space-between;
  margin-top: 25rpx;
  padding: 0 15rpx;
}

.footLeft p:first-child {
  display: flex;
  font-size: 24rpx;
  height: 50rpx;
  align-items: center;
}
.footLeft p:first-child span {
  margin: 0 3rpx;
  display: flex;
}
.footLeft p:first-child span i {
  margin-top: 10rpx;
}
.footLeft p:first-child span b {
  font-size: 36rpx;
  color: red;
  font-weight: bold;
}

.footLeft p:first-child span:last-child {
  color: #ccc;
  font-size: 24rpx;
  margin-top: 5rpx;
}

.footLeft p:last-child {
  font-size: 28rpx;
}

.footRight img {
  width: 120rpx;
  height: 120rpx;
}

.prolist {
  width: 580rpx;
  display: flex;
  flex-wrap: wrap;
}
.prolists {
  width: 140rpx;
  height: 140rpx;
  border: 2rpx solid #ededed;
  margin-left: 15rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 18rpx;
}
.prolists .img1 {
  width: 42rpx;
  height: 42rpx;
  position: absolute;
  top: 2px;
  right: 2px;
}
.prolists .img2 {
  width: 100rpx;
  height: 100rpx;
}

.footer {
  height: 175rpx;
  margin-top: 10rpx;
}

.footer ul {
  display: flex;
  justify-content: space-around;
}

.footer ul li {
  text-align: center;
  font-size: 30rpx;
  display: flex;
  flex-direction: column;
}

.footer ul li img {
  width: 100rpx;
  height: 100rpx;
  margin: 15rpx auto;
}
</style>
