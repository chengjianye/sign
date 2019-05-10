<template>
  <div @click="clickHandle" class="wrap">
    <!-- 首页地图模块 -->
    <map
      id="map"
      :longitude="location.longitude"
      :latitude="location.latitude"
      subkey="X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
      scale="14"
      show-location
      show-compass
      :markers="markers"
      @markertap="markertap"
      @regionchange="regionChange"
    ></map>
    <!-- 重新定位图标 -->
    <cover-view class="current" @tap="goCurrent">
      <cover-image class="img" src="/static/images/location.png"/>
    </cover-view>
    <cover-view class="current1" @tap="goCurrent" @click="bindtap">
      <cover-image class="img" src="/static/images/renxiang.png"/>
    </cover-view>
    <div class="add" @click="handleClick">添加面试</div>
  </div>
</template>

<script>
import card from "@/components/card";
import { getLocation, getAuth } from "@/utils/index.js";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      // 用户当前位置
      location: {
        latitude: 40.03298,
        longitude: 116.29891
      },
      markers: [
        {
          iconPath: "/static/images/job.png",
          id: 0,
          latitude: 23.099994,
          longitude: 113.32452,
          width: 50,
          height: 50
        }
      ]
    };
  },

  components: {
    card
  },

  methods: {
    ...mapMutations({
      changeNum: "index/changeCount"
    }),
    btnClick(type) {
      this.changeNum(type);
    },
    handleClick() {
      wx.navigateTo({
         url: "../search/main"
      });
    },
    bindtap() {
      wx.getSetting({
        success(res) {
          wx.showModal({
            title: "一面而就",
            content: "授权成功",
            success(res) {
              if (res.confirm) {
                wx.navigateTo({
                  url: "../login/main"
                });
              } else if (res.cancel) {
                console.log("用户点击取消");
              }
            }
          });
        }
      });
    },
    regionChange(e) {},
    // 点击标注物
    marketTap(e) {},
    // 重新定位
    goCurrent() {
      getAuth("scope.userLocation", async () => {
        let location = await getLocation();
        wx.setStorageSync("location", location);
        this.location = location;
      });
    }
  },

  created() {
    let location = wx.getStorageSync("location");
    this.location = location;
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  position: relative;
}
map {
  width: 100%;
  height: 100%;
}
.current {
  position: fixed;
  bottom: 100rpx;
  width: 80rpx;
  height: 80rpx;
  left: 20rpx;
}

.current1 {
  position: fixed;
  bottom: 100rpx;
  width: 120rpx;
  height: 90rpx;
  right: 0rpx;
  background: #fff;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  cover-image {
    width: 50rpx;
    height: 50rpx;
    margin-top: 15rpx;
    margin-left: 20rpx;
    background: #f2f2f2f2;
    border-radius: 50%;
  }
}

.add {
  position: absolute;
  width: 100%;
  height: 80rpx;
  text-align: center;
  color: #fff;
  line-height: 80rpx;
  bottom: 0;
  left: 0;
  z-index: 999;
  background: #000;
}
</style>
