<script>
import { getLocation, getAuth } from "./utils/index.js";
import { mapState, mapMutations } from "vuex";
import { login } from "./api/index";

export default {
  computed: {
    ...mapState({
      state: state => state.interView.current
    })
  },
  methods: {
    ...mapMutations({
      updata: "interView/updata"
    })
  },
  created() {
    //请求数据
    wx.request({
      url:
        "https://map.qq.com/m/data/place/sug/city=%E5%8C%97%E4%BA%AC%E5%B8%82&word=b?access_token=95466dbb9b446b8713c9f33e0036abdb5709a2083fc66b59e7854e81", // 仅为示例，并非真实的接口地址
      header: {
        "content-type": "application/json" // 默认值
      },
      success: res => {
        this.updata(res.data);
      }
    });
    // 用户一打开小程序，就做定位
    getAuth("scope.userLocation", async () => {
      let location = await getLocation();
      wx.setStorageSync("location", location);
    });
    // 调用登陆获取code
    wx.login({
      success: async res => {
        let data = await login(res.code);
        wx.setStorageSync("data", this.state);
        this.updataState(this.state);
      }
    });
  }
};
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
page {
  height: 100%;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
