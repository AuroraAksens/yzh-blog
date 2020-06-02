<template>
  <div>
    <div class="zhuti" v-for="(sj,i) in shuju" :key="i">
      <router-link  tag="div" :to="`/xiangqing/${row._id}`" v-for="(row,io) in sj.indexList" :key="io">
        <div class="xc d-fx jc-around  w-100 mt-3 bou py-2 px-3">
          <div class="zt1 py-3">
            
            <div class="z1 fs-lg">
              <b>{{row.title}}</b>
            </div>

            <div class="z1 fs-sm py-3 text-overflow">{{row.brief}}</div>

            <div class="fs-sm">
              <i class="iconfont icon-shijian pr-2"></i>
              <span>{{row.updatedAt | date}}</span>
              <i class="iconfont icon-pinglun pr-2 ml-4"></i>
              <span>00</span>
              <i class="iconfont icon-dianzan_active pr-2 ml-4"></i>
              <span>00</span>
            </div>

          </div>
          <div class="zt2 pt-2">
            <img :src="row.image" />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  filters: {
    date(val) {
      return dayjs(val).format("YYYY/MM/DD");
    }
  },
  props: {
    shuju: { type: Array, required: true }
  }
};
</script>

<style>
.zt1 {
  width: 550px;
  color: rgb(112, 112, 112);
  cursor: pointer;
}

.zt2{
  min-width: 200px;
}
.zt2 img {
  width: 180px;
  max-height: 105px;
  border-radius: 10px;
}
</style>