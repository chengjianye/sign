<template>
  <div class="wrapper">
    <div class="topInp">
      <form>
        <input type="text" placeholder="搜索你感兴趣的人和物"  @click="handleInp">
      </form>
    </div>
    <div class="topImg">
      <img src="../../../static/images/1.jpg"/>
    </div>
    <div class="nav">
      <ul>
        <li>
          <img src="../../../static/images/2.jpg"/>
          <span>拼团</span>
        </li>
        <li>
          <img src="../../../static/images/2.jpg"/>
          <span>拼团</span>
        </li>
        <li>
          <img src="../../../static/images/3.jpg"/>
          <span>拼团</span>
        </li>
        <li>
          <img src="../../../static/images/3.jpg"/>
          <span>拼团</span>
        </li>
        <li>
          <img src="../../../static/images/3.jpg"/>
          <span>拼团</span>
        </li>
      </ul>
    </div>
    <swiper :bannerImgage="bannerImgage"/>
    <div class="navList">
      <scroll-view scroll-x class="scroll">
        <div>
          <p v-for="(item,index) in navList" :key="index">{{item}}</p>
        </div>
      </scroll-view>
    </div>

    <div class="centerNav">
      <ul>
        <li>一口花</li>
        <li>全新</li>
        <li>同城</li>
      </ul>
    </div>

    <div class="homeList">
      <dl v-for="(item,index) in homeContent" :key="index">
        <dt>
          <img :src="item.topicPic">
        </dt>
        <dd>
          <p>{{item.userName}}</p>
          <p>
            <span>一口花</span>
            <span>可能认识的人</span>
          </p>
          <p>{{item.price}}</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import swiper from "@/components/swiper";

export default {
  data() {
    return {
      navList: [
        "全部",
        "品牌",
        "时尚",
        "美妆",
        "母婴",
        "书籍",
        "书籍",
        "书籍",
        "书籍"
      ]
    };
  },

  components: {
    swiper
  },

  computed: {
    ...mapState({
      homeContent: state => {
        return state.home.homeCont;
      },
      bannerImgage: state => {
        return state.home.bannerImg;
      }
    })
  },
  methods: {
    ...mapMutations({
      homeListDates: "home/homeListDate",
      bannerImgs: "home/bannerImg"
    }),
    ...mapActions({
      homeLists: "home/homeList",
      bannerLists: "home/bannerList"
    }),
    handleInp() {
        wx.navigateTo({
           url:'../search/main'
        })
    }
  },
  created() {
    this.bannerLists();
    this.homeLists({
      cateTag: "全部", // 全部  || 品牌  || …
      fixedFlower: 1, //一口花  1 或者 0
      isNew: 1, //是否全新  1 或者 0
      isLocal: 1, // 是否同城   1或者0
      status: 1,
      bid: 0,
      orderBy: 0,
      pageSize: 20, // 页数
      pageNum: 1 // 分页值
    });
  }
};
</script>

<style lang='scss' scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
.topInp {
  height: 80rpx;
  background: #34c25e;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    height: 60rpx;
    width: 80%;
    background: #fff;
    border-radius: 10rpx;
    input {
      text-align: center;
    }
  }
}

.topImg {
  height: 280rpx;
  img {
    width: 100%;
    height: 280rpx;
  }
}

.nav {
  width: 100%;
  height: 200rpx;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 200rpx;
    li {
      display: flex;
      flex-direction: column;
      text-align: center;
      line-height: 50rpx;
      img {
        width: 100rpx;
        height: 100rpx;
        margin: 0 auto;
      }
    }
  }
}

.navList {
  width: 100%;
  .scroll {
    width: 100%;
    div {
      display: flex;
      width: 100%;
      align-items: center;
      box-sizing: border-box;
      p {
        padding: 20rpx 30rpx;
        box-sizing: border-box;
        white-space: nowrap;
        border-bottom: 1px solid #ccc;
      }
    }
  }
}

.centerNav {
  height: 90rpx;
  border-bottom: solid 1px #ccc;
  ul {
    display: flex;
    align-items: center;
    li {
      padding: 10rpx 35rpx;
      background: #eee;
      margin-left: 25rpx;
      border-radius: 30rpx;
      margin-top: 8rpx;
    }
  }
}

.homeList {
  display: flex;
  flex-wrap: wrap;
  dl {
    height: 550rpx;
    width: 46%;
    margin: 15rpx 15rpx;
    dt {
      img {
        width: 100%;
        height: 350rpx;
      }
    }
    dd {
      font-size: 32rpx;
      line-height: 50rpx;
    }
  }
}
</style>
