<template>
  <div class="d-fx jc-center">
    <div class="chenxu w-90 mt-3 d-fx jc-around">
      <!-- 主体 -->
      <div class="cx1">
        <div
          class="w-100 bou mb-3 py-2 px-3 text-center animated fadeInDown"
          style="color: rgb(155, 153, 153);cursor: pointer">
          <b>程序生涯</b>
        </div>

        <!-- 主体卡片 -->
        <XsCard class="animated fadeInLeft" :shuju="List"></XsCard>
        <!-- 主体卡片结束 -->

      </div>
      <!-- 主体结束 -->

      <!-- 右侧 -->
      <div class="cx2 animated fadeInRight">
        <card title="最近" icon="wenzhang" class="pb-2">
            <router-link tag="div" :to="`/xiangqing/${zj._id}`" class="mx-2 mt-2 d-fx ai-center" v-for="(zj,i) in zuijin" :key="i"  style="cursor: pointer;">
                <img :src="zj.image" style="height: 30px;width: 40px;border-radius: 5px;text-align: center;">
                <div class="zuijin d-fx flex-cl fs-sm px-2" style="width: 180px;">
                    <p class="fs-sm text-overflow">{{zj.title}}</p>
                    <p class="fs-xs text-overflow" style="color: rgb(158, 157, 157);">{{zj.brief}}</p>
                </div>
            </router-link>
        </card>

        <card title="标签" icon="biaoqian" class="mt-3">
            <div class="biaoqian py-3 px-3 d-fx jc-betweem" style="flex-wrap:wrap">
                <div class="bq fs-xs px-1 mb-2">
                    html5
                </div>
                <div class="bq fs-xs px-2 mb-2 ml-2"> 
                    javascript
                </div>
                <div class="bq fs-xs px-1 mb-2 ml-2">
                    css3
                </div>
                <div class="bq fs-xs px-1 mb-2">
                    node
                </div>
                <div class="bq fs-xs px-1 mb-2 ml-2">
                    vue
                </div>
                <div class="bq fs-xs px-1 mb-2 ml-2">
                    es6
                </div>
            </div>
        </card>
      </div>
      <!-- 右侧结束 -->

    </div>
  </div>
</template>

<script>
export default {
        created(){
            this.listBody(),
            this.listZuijin()
        },
        data() {
            return {
                List:[],
                zuijin: {},
            }
        },
         methods: {
            async listBody() {
                const res = await this.$http.get('/chenxu/list')
                this.List = res.data
            },
           async listZuijin() {
                const res = await this.$http.get('/index/zuijin')
                this.zuijin = res.data
            }
        }
}
</script>

<style>
.cx1 {
  width: 70%;
}

.cx2 {
  width: 25%;
}
.zuijin{
        color: rgb(54, 54, 54);
}
.zuijin:hover{
        color: rgb(255, 153, 153);
}
</style>