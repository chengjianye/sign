<template>
  <div class="wraper">
    <div class="banner">
      <img src="../../../static/images/1.jpg"/>
    </div>
    <div class="nav">
      <ul>
        <li v-for="(item,index) in FunctionalNavCont" :key="index">
          <img :src="item.icon"/>
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>

    <div class="classNav">
      <ul>
        <li v-for="(item,index) in classificationCont" :key="index">
          <p
            v-for="(itm,ind) in item"
            :key="ind"
            @click="handleClick(itm.name)"
            :class="{active : active == itm.name}"
          >{{itm.name}}</p>
        </li>
      </ul>
    </div>

    <div
      class="listInterface"
      v-for="(item,index) in listDateCont"
      :key="index"
      @click="handleDetail(item.id)"
    >
      <h3>{{item.keyword}}</h3>
      <p>
        <span>{{item.car_name}}</span>
      </p>
      <p>{{item.keyword}}</p>
      <div>
        <p>
          <span>{{item.brand_name}}</span>
          <span>{{item.model_name}}</span>
        </p>
        <p>
          <span>{{item.from_uid}}</span>
          <span>{{item.dialog_num}}回答</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      active: "",
      list: [],
      listDate: {},
      num: 1,
      getDetail: {}
    };
  },

  components: {
    card
  },
  computed: {
    ...mapState({
      classificationCont: state => {
        return state.index.classificationConte;
      },
      listDateCont: state => {
        return state.index.listDateInterfaceConte;
      },
      FunctionalNavCont: state => {
        return state.index.FunctionalNavConte;
      },
      DetailCont: state => {
        return state.index.DetailConte;
      }
    })
  },
  methods: {
    ...mapMutations({
      classification: "index/classification",
      listDateInterface: "index/listDateInterface",
      FunctionalNav: "index/FunctionalNav",
      Detail: "index/Detail"
    }),
    handleClick(name) {
      this.active = name;
    },
    handleDetail(id) {
      const that = this;
      this.getDetail = {
        id: id,
        p: 1,
        page_size: 10
      };
      //列表
      wx.request({
        url: "https://car.yccapp.com/Wxapp/Question/detail", // 仅为示例，并非真实的接口地址
        data: this.getDetail,
        header: {
          "content-type": "application/json" // 默认值
        },
        success(res) {
          that.Detail(res.data.data);
        }
      });
      wx.navigateTo({
        url: "../detail/main?id=" + id
      });
    }
  },

  created() {
    const that = this;
    //功能导航
    wx.request({
      url: "https://car.yccapp.com/Wxapp/Api/index_tab", // 仅为示例，并非真实的接口地址
      header: {
        "content-type": "application/json" // 默认值
      },
      success(res) {
        that.FunctionalNav(res.data.data.entry);
      }
    });
    //分类导航
    wx.request({
      url: "https://car.yccapp.com/Wxapp/Question/category", // 仅为示例，并非真实的接口地址
      header: {
        "content-type": "application/json" // 默认值
      },
      success(res) {
        that.classification(res.data.data);
      }
    });

    this.listDate = {
      page_size: 20,
      p: 1
    };

    //列表
    wx.request({
      url: "https://car.yccapp.com/Wxapp/Question/index", // 仅为示例，并非真实的接口地址
      data: this.listDate,
      header: {
        "content-type": "application/json" // 默认值
      },
      success(res) {
        that.listDateInterface(res.data.data);
      }
    });
  },
  onPullDownRefresh() {
    const that = this;
    this.listDate = {
      page_size: 20,
      p: 1
    };
    wx.request({
      url: "https://car.yccapp.com/Wxapp/Question/index", // 仅为示例，并非真实的接口地址
      data: this.listDate,
      header: {
        "content-type": "application/json" // 默认值
      },
      success(res) {
        that.listDateInterface(res.data.data);
      }
    });
  },
  onReachBottom() {
    const that = this;
    this.num++;
    this.listDate = {
      page_size: 20,
      p: this.num
    };
    wx.request({
      url: "https://car.yccapp.com/Wxapp/Question/index", // 仅为示例，并非真实的接口地址
      data: this.listDate,
      header: {
        "content-type": "application/json" // 默认值
      },
      success(res) {
        that.listDateInterface(res.data.data);
      }
    });
  }
};
</script>

<style lang='scss' scoped>
.wraper {
  width: 100%;
  height: 100%;
}

.banner {
  height: 200rpx;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}

.nav {
  height: 220rpx;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 220rpx;
    li {
      text-align: center;
      display: flex;
      flex-direction: column;
      img {
        width: 100rpx;
        height: 100rpx;
        margin: 0 auto;
      }
    }
  }
}

.classNav {
  position: sticky;
  top: 0;
  height: 80rpx;
  width: 100%;
  ul {
    height: 80rpx;
    align-items: center;
    display: flex;
    justify-content: space-around;
    background: orange;
  }
}

.listInterface {
  margin-top: 30rpx;
  border: solid 1px #ccc;
  h3 {
    font-weight: bold;
  }
  p {
    line-height: 65rpx;
  }
}

.active {
  color: red;
}
</style>
