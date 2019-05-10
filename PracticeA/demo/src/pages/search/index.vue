<template>
  <div class="searchWraper">
    <div class="top">
      <form>
        <input type="text" placeholder="请输入关键字" @input="handleInp">
      </form>
      <div>取消</div>
    </div>
    <div class="search">
      <ul>
        <li v-for="(item,index) in searchDate.output" :key="index" @click="handleClick">{{item}}</li>
      </ul>
    </div>
    <div class="List" v-show="isShow">
      <dl v-for="(item,index) in listDates" :key="index">
        <dt>
          <img :src="item.topicPic">
        </dt>
        <dd>
          <p>{{item.topicTitle}}</p>
          <p>
            <span>一口花</span>
            <span>可能认识的人</span>
          </p>
          <p>{{item.price}}</p>
        </dd>
      </dl>
    </div>
    <div class="hot" v-show="flag">
      <h2>热门搜索</h2>
      <ul>
        <li v-for="(item,index) in hotListDate" :key="index">{{item.recommendText}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      newArr: [],
      inpVal: "",
      flag: true,
      isShow:false
    };
  },
  computed: {
    ...mapState({
      hotListDate: state => state.home.hotText,
      searchDate: state => state.home.searchCont,
      listDates: state => {
        return state.home.listConte
      }
    })
  },
  methods: {
    ...mapMutations({
      hotDateLists: "home/hotList",
      searchDateLists: "home/searchDateList",
      listDatePage: "home/listDatePage"
    }),
    ...mapActions({
      hotLists: "home/hotList",
      searchLists: "home/searchList"
    }),
    handleInp(e) {
      this.inpVal = e.target.value;
      this.searchLists({
        kw: this.inpVal
      });
      if (this.inpVal) {
        this.flag = false;
        this.isShow = true
      } else {
        this.flag = true;
        this.isShow = false
      }
    },
    handleClick(e) {
      const that = this;
      const host = "https://127.0.0.1";
      let listDate = {
        pageNum: 1,
        kw: e.mp._relatedInfo.anchorTargetText,
        pageSize: 10,
        userId: 0
      };
      wx.request({
        url: "https://jbiz.share1diantong.com/fa053/topic/search/v1",
        data: listDate,
        method: "POST",
        header: {
          "content-type": "application/json" // 默认值
        },
        success(res) {
          that.listDatePage(res.data.data.list);
        }
      });
    }
  },
  created() {
    this.hotLists();
  }
};
</script>

<style lang='scss' scoped>
.searchWraper {
  width: 100%;
  height: 100%;
}

.top {
  display: flex;
  height: 60rpx;
  justify-content: space-around;
  align-items: center;
  form {
    width: 75%;
    height: 60rpx;
    border: solid 1px #ccc;
    box-sizing: border-box;
    margin-left: 15rpx;
    input {
      border: 0;
    }
  }
  div {
    width: 20%;
    height: 60rpx;
  }
}

.hot {
  height: 430rpx;
  margin-top: 25rpx;
  h2 {
    padding: 25rpx;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      padding: 20rpx 35rpx;
      text-align: center;
      background: #eee;
      margin: 15rpx 20rpx;
    }
  }
}

.search {
  width: 100%;
  ul {
    display: flex;
    width: 100%;
    flex-direction: column;
    li {
      width: 100%;
      line-height: 40rpx;
      border-bottom: solid 1px #ccc;
    }
  }
}
</style>
