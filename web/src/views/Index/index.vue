<template>
    <div class="index">
        <!-- 顶部名片 -->
        <topBar class="animated fadeInDown"></topBar>
        <!-- 顶部名片结束 -->


        <!-- 主体部分 -->
        <div class="mt-3 d-fx jc-between">

            <!-- 左侧 -->
            <div class="animated fadeInLeft">

                <card title="个人" icon="profile">
                    <div class="mx-3 fs-sm">
                        <div class="py-2 px-2" style="border-bottom: 1px solid rgb(240, 240, 240);color: gray;">
                            <i class="iconfont icon-mingzi mr-3" style="font-size: 20px;"></i>
                            <span>SkyLight</span>
                        </div>
                        <div class="py-2 px-2" style="border-bottom: 1px solid rgb(240, 240, 240);color: gray;">
                            <i class="iconfont icon-weixin mr-3" style="font-size: 20px;"></i>
                            <span>Yaozehui3829</span>
                        </div>
                        <div class="py-2 px-2" style="border-bottom: 1px solid rgb(240, 240, 240);color: gray;">
                            <i class="iconfont icon-qq mr-3" style="font-size: 20px;"></i>
                            <span>1216119696</span>
                        </div>
                        <div class="py-2 px-2 pb-2" style="border-bottom: 1px solid rgb(240, 240, 240);color: gray;">
                            <i class="iconfont icon-email-line2 mr-3" style="font-size: 20px;"></i>
                            <span>1216119696@qq.com</span>
                        </div>
                    </div>
                </card>

                <card title="图片" icon="picture" class="mt-3">
                    <div class="mx-3 py-3" v-for="(img,i) in swiper" :key="i">
                        <swiper :options="swiperOptions" style=" height: 125px;border-radius: 5px;overflow: hidden;">
                            <swiper-slide v-for="(imgSwi,i) in img.items" :key="i">
                                <img :src="imgSwi.img" style="border-radius: 5px;max-height: 130px;">
                            </swiper-slide>
                        </swiper>
                    </div>
                </card>
            </div>
            <!-- 左侧结束 -->


            <!-- 主体 -->
            <div class="animated fadeInUp">
                <bigcard :shuju="List"></bigcard>
            </div>
            <!-- 主体结束 -->


            <!-- 右侧 -->
            <div class="animated fadeInRight">
                
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
        <!-- 主体部分结束 -->

    </div>
</template>

<script>
    import topBar from './topBar'
    export default {
        components: {
            topBar
        },
        data() {
            return {
                swiperOptions: {
                    //开启循环模式
                    loop: true,
                    autoplay: {
                        //自动轮播
                        delay: 2000,
                        //当用户滑动图片后继续自动轮播
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.pagination-home',

                    },
                },
                List: [],
                swiper: {},
                zuijin: {}
            }
        },
        methods: {
            async listBody() {
                const res = await this.$http.get('/index/list')
                this.List = res.data
            },
            async listSwiper() {
                const res = await this.$http.get('/index/swiper')
                this.swiper = res.data
            },
            async listZuijin() {
                const res = await this.$http.get('/index/zuijin')
                this.zuijin = res.data
            }
        },
        created() {
            this.listBody(),
            this.listSwiper(),
            this.listZuijin()
        }
    }
</script>

<style>
    .bq{
        min-width: 50px;
        height: 25px;
        border: 2px solid rgb(243, 243, 243);
        border-radius: 20px;
        text-align: center;
        background-color: aliceblue;
        color: gray;
        cursor: pointer;
    }
    .bq:hover{
        background-color: rgb(113, 188, 253);
        color: aliceblue;
        border: 3px solid aliceblue;
    }
    .zuijin{
        color: rgb(54, 54, 54);
    }
    .zuijin:hover{
        color: rgb(255, 153, 153);
    }
</style>
