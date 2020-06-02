<template>
  <div class="d-fx jc-center">
    <div class="chenxu w-90 mt-3 d-fx jc-around">
      <!-- 主体 -->
      <div class="cx1">
        <div
          class="w-100 bou mb-3 py-2 px-3 text-center animated fadeInDown"
          style="color: rgb(155, 153, 153);cursor: pointer">
          <b>开发工具栏</b>
        </div>

        <!-- 主体卡片 -->
        <XsCard class="animated fadeInLeft" :shuju="List"></XsCard>
        <!-- 主体卡片结束 -->

      </div>
      <!-- 主体结束 -->

      <!-- 右侧 -->
      <div class="cx2 animated fadeInRight">
        
        <card title="开发文档" icon="wendang">
          <div class="px-3 my-2 d-fx jc-between flex-w">
            <div class="wd fs-xs text-center py-1 mt-2"><b><a href="https://zh.javascript.info/">JavaScript文档</a></b></div>
            <div class="wd fs-xs text-center py-1 mt-2"><b><a href="http://nodejs.cn/api/">Node.js文档</a></b></div>
            <div class="wd fs-xs text-center py-1 mt-2"><b><a href="https://cn.vuejs.org/v2/guide/">Vue文档</a></b></div>
            <div class="wd fs-xs text-center py-1 mt-2"><b><a href="https://element.faas.ele.me/#/zh-CN/component/installation">Element组件库</a></b></div>
            <div class="wd fs-xs text-center py-1 mt-2"><b><a href="https://es6.ruanyifeng.com/">Es6入门教程</a></b></div>
            <div class="wd fs-xs text-center py-1 mt-2"><b><a href="https://www.mongodb.org.cn/tutorial/">Mongodb</a></b></div>
            <div class="wd fs-xs text-center py-1 mt-2 mb-3"><b><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/">微信小程序</a></b></div>
          </div>
        </card>

        <card title="在线工具" icon="tool" class="mt-3">
          <div class="fs-sm py-2 px-3">
            <div class="jg mb-2 mt-1"><b><a href="https://imagecompressor.com/zh/">《图片优化器》</a></b></div>
            <div class="jg mb-2"><b><a href="https://tinypng.com/">《TinyPNG》图片压缩</a></b></div>
            <div class="jg mb-2"><b><a href="https://bz.zzzmh.cn/">《极简壁纸》背景素材</a></b></div>
            <div class="jg mb-2"><b><a href="https://c.runoob.com/">《菜鸟工具》工具合集</a></b></div>
            <div class="jg mb-2"><b><a href="http://www.spritecow.com/">《spritecow》精灵图定位</a></b></div>
          </div>
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
            this.listBody()
        },
        data() {
            return {
                List:[],
            }
        },
         methods: {
            async listBody() {
                const res = await this.$http.get('/kaifa/list')
                this.List = res.data
            },
          
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
.wd{
  width: 98px;
  height: 30px;
  color: rgb(153, 153, 153);
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid rgb(228, 228, 228);
}
.wd:hover{
  background-color: aliceblue;
}
.jg{
  color: rgb(153, 153, 153);
  cursor: pointer;
}
.jg a:hover{
  color: rgb(94, 94, 94)
}
</style>