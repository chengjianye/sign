<template>
  <div class="searchAll">
    <form>
      <div>
        <span>北京</span>
        <input type="text" placeholder="输入地址" @input="bindChange">
      </div>
    </form>
    <div class="address">
      <ul>
        <li v-for="(item,index) in searchLis" :key="index" @click="submit(index)">{{item.addr}}</li>
      </ul>
    </div>

    <button>确定</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      address: ""
    };
  },
  computed: {
    ...mapState({
      container: state => state.interView.container,
      searchLis: state => state.interView.searchList
    })
  },
  methods: {
    ...mapMutations({
      searchList: "interView/searchList",
      updata:"interView/updata"
    }),
    bindChange(e) {
      const newArr = [];
      const inp = e.target.value;
      if (inp.length) {
        let oldArr = this.container.filter(item => {
          return item.addr.indexOf(inp) !== -1;
        });
        this.searchList(oldArr);
      }
    },
    submit(index) {
      // 更新当前地址
      this.updata({
        address: this.searchLis[index]
      });
      // 返回上一页
      wx.navigateBack();
    }
  },
  created() {}
};
</script>

<style lang='scss'>
.searchAll {
  width: 100%;
  height: 100%;
}

form {
  width: 100%;
  height: 80rpx;
  div {
    width: 100%;
    height: 80rpx;
    background: #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}

.address {
  height: 500rpx;
  ul {
    height: 500rpx;
    li {
      background: #eee;
      padding: 30rpx;
    }
  }
}

button {
  width: 100%;
  height: 80rpx;
  background: skyblue;
  text-align: center;
  color: #fff;
  margin-top: 35rpx;
  line-height: 80rpx;
  border: 0;
}
</style>
