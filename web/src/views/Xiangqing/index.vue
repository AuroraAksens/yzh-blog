<template>
    <div>
        <div class="xiangCard mx-5 mt-3 d-fx jc-between">
            
            <div class="x1 bou mx-2" style="width:75%;background-color: white;border-radius: 20px;">
                <!-- 文章标题 -->
                <div class="w-100 d-fx ai-center flex-cl py-4 mt-2"  style="color: rgb(139, 139, 139)">
                    <div class="fs-xl"><strong><b>{{xiangqing.title}}</b></strong></div>
                    <div class="mt-3">{{xiangqing.updatedAt}}<i class="iconfont "></i></div>
                </div>
                <!-- 文章标题结束 -->

                <!-- 文章内容 -->
                <div class="body py-3 pb-5 px-5 fs-sm" v-html="xiangqing.body"></div>
                <!-- 文章内容结束 -->

            </div>


            <!-- 右侧模块 -->
            <div class="x2 ml-3" style="width:25%">
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
            <!-- 右侧模块结束 -->

        </div>
    </div>
</template>

<script>
    export default {
        props:{
            id:{required:true}
        },
        data(){
            return {
                zuijin:{},
                xiangqing:{}
            }
        },
        created(){
            this.listZuijin(),
            this.listXQ()
        },
        methods:{
            async listZuijin() {
                const res = await this.$http.get('/index/zuijin')
                this.zuijin = res.data
            },
            async listXQ(){
                const res = await this.$http.get(`/xiangqing/${this.id}`)
                this.xiangqing = res.data
            }
        }
    }
</script>

<style>
.xiangImg{
        height: 600px;
        border-radius: 20px;
    }
.xiangCard{
    width: 1150px ;
}
.body p{
    margin-top: 10px;
    color: rgb(92, 92, 92);
}
.body img{
    width: 80%;
}
.zuijin{
        color: rgb(54, 54, 54);
}
.zuijin:hover{
        color: rgb(255, 153, 153);
}
</style>