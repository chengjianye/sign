<template>
  <div class="swiper">
    <div class="banner">
      <swiper autoplay="true">
        <div>
          <swiper-item>
            <img :src="bannerImgage[0].img" class="slide-image"/>
          </swiper-item>
          <swiper-item>
            <img :src="bannerImgage[1].img" class="slide-image1"/>
          </swiper-item>
          <swiper-item>
            <img :src="bannerImgage[2].img" class="slide-image2"/>
          </swiper-item>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bannerImgage: 'object'
  }
};
</script>

<style lang='scss' scoped>
.banner{
    height: 220rpx;
    overflow: hidden;
    .slide-image{
        height: 220rpx;
    }
    .slide-image1{
        height: 220rpx;
    }
    .slide-image2{
        height: 220rpx;
    }
}
</style>
