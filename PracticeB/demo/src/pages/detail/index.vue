<template>
  <div class="detailWraper">
    <div  class="listInterface">
      <h3>{{DetailCont.accepted_keyword}}</h3>
      <p>
        <span>{{DetailCont.brand_name}}</span>
      </p>
      <p>{{DetailCont.keyword}}</p>
      <div>
        <p>
          <span>{{DetailCont.model_id}}</span>
          <span>{{DetailCont.model_name}}</span>
        </p>
        <p>
          <span>{{DetailCont.thread_id}}</span>
          <span>{{DetailCont.view_num}}回答</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState({
      DetailCont: state => {
        return state.index.DetailConte.message_info;
      }
    })
  },
  method:{
    ...mapMutations({
      Detail: "index/Detail"
    })
  },
  onLoad(options) {
    console.log(options.id)
  }
};
</script>

<style lang='scss' scoped>
.detailWraper {
  width: 100%;
  height: 100%;
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
</style>
