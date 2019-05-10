<template>
  <div class="wrap">
    <scroll-view scroll-x="true" class="chun">
      <li @click="btn">今日推荐</li>
      <li @click="getValue(index)" v-for="(item, index) in types" :key="index" :class="active===index?'active':''">
        {{item.cname}}
      </li>
    </scroll-view>
    <div class="main">
      <div v-for="(items, indexs) in lists" :key="indexs" class="center">
        <img :src="items.imgUrl" class="tu">
        <span class="txt">{{items.cname}}</span>
      </div>
    </div>
    <div class="tbar">
      <span>综合</span>
      <span>最新</span>
      <span>价格</span>
    </div>
    <div class="dls">
      <dl v-for="(item,index) in listprops" :key='index'>
        <dd><img :src="item.mainImgUrl"></dd>
        <dt>
            <p>{{item.title}}</p>
             <b>￥{{item.earnMoney}}</b>
          </dt>
      </dl>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations,
    mapActions
  } from "vuex"
  export default {
    data() {
      return {
        active: 0,
        types: [],
        lists: [],
        listprops: []
      }
    },
    computed: {
      ...mapState({
        list: state => state.classify.list,
        props: state => state.classify.props
      }),
      async getData() {
        this.types = this.list;
        console.log(this.types[0], 'litt');
        this.listprops = this.props
      }
    },
    methods: {
      btn() {
        wx.redirectTo({
          url: "../index/main"
        })
      },
      ...mapMutations({
        updateState: 'classify/updateState'
      }),
      ...mapActions({
        getList: 'classify/getList',
        getProps: 'classify/getProps'
      }),
      async getValue(ind) {
        this.active = ind
        this.types.forEach((item, ind) => {
          let dataList = item.childs
          if (this.active === ind) {
            this.lists = dataList
          }
        })
      }
    },
    created() {
      this.getList()
      this.getProps({
        cid: 2,
        sortType: 3
      })
    },
    onShow() {
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    width: 100%;
    background: #F6F6F6;
    .chun {
      width: 100%;
      display: flex;
      white-space: nowrap;
      height: 100rpx;
      background: #fff;
      li {
        font-size: 32rpx;
        display: inline-block;
        height: 100rpx;
        text-align: center;
        color: #484848;
        box-sizing: border-box;
        margin: 0 20rpx;
      }
      li.active {
        border-bottom: solid #56D2BF 6rpx;
        line-height: 94rpx;
        font-weight: 500;
        color: red;
      }
    }
    .main {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      background: #fff;
      height: 400rpx;
      .center {
        width: 25%;
        display: inline-block;
        padding: 20rpx;
        box-sizing: border-box;
        text-align: center;
        .tu {
          width: 100rpx;
          height: 100rpx;
        }
        .txt {
          font-size: 30rpx;
          display: block;
        }
      }
    }
    .tbar {
      width: 100%;
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content: space-around;
      span {
        font-size: 13px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
      }
    }
    .dls {
      width: 100%;
      height: 100%;
      dl {
        height: 230px;
        width: 48%;
        float: left;
        margin-left: 4px;
        dd {
          text-align: center;
          margin-top: 25px;
          img {
            width: 100px;
            height: 120px;
          }
        }
        dt {
          margin-top: 15px;
          p {
            width: 186px;
            font-size: 12px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(50, 58, 69, 1);
            line-height: 20px;
          }
          b {
            color: red;
          }
        }
      }
    }
  }
</style>
