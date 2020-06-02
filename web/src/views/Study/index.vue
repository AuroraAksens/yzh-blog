<template>
    <div>
        <!-- 主体部分 -->
        <div class="mt-3 d-fx jc-between">

            <!-- 左侧 -->
            <div class="animated fadeInLeft">
                <div class="cud bou" style="width:235px; overflow: hidden">
                    <img class="w-100" src="../../assets/img/1.jpg">
                    <div class="d-fx jc-around mt-1">
                        <img src="../../assets/img/touxiang.jpg" class="touxiang">
                        <p>@StyLinght</p>
                    </div>
                    <div class="py-3 px-3 mt-3" style="color: rgb(105, 105, 105);border-top: 1px solid gainsboro">
                        <ul class="d-fx jc-around fs-xs">
                            <li>
                                VISITS
                            </li>
                            <li>
                                SURVIVA
                            </li>
                            <li>
                                POSTS
                            </li>
                        </ul>
                        <ul class="d-fx jc-around fs-xs">
                            <li>
                                00
                            </li>
                            <li>
                                00
                            </li>
                            <li>
                                00
                            </li>
                        </ul>
                    </div>
                </div>

                <card title="个人" icon="profile" class="mt-3">
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
            <!-- 左侧结束 -->


            <!-- 主体 -->
            <div>
                <div class="w-100 bou mb-3 py-2 px-3 text-center animated fadeInDown" style="color: rgb(155, 153, 153);cursor: pointer"><b>Study</b></div>
                <bigcard class="animated fadeInUp" :shuju="List"></bigcard>
            </div>
            <!-- 主体结束 -->


            <!-- 右侧 -->
            <div class="animated fadeInRight">
                <card title="图片" icon="picture">
                    <div class="mx-3 py-3" v-for="(img,i) in swiper" :key="i">
                        <swiper :options="swiperOptions" style=" height: 125px;border-radius: 5px;overflow: hidden;">
                            <swiper-slide v-for="(imgSwi,i) in img.items" :key="i">
                                <img :src="imgSwi.img" style="border-radius: 5px;max-height: 130px;">
                            </swiper-slide>
                        </swiper>
                    </div>
                </card>

                <card title="最近" icon="wenzhang" class="pb-2 mt-3">
                    <router-link tag="div" :to="`/xiangqing/${zj._id}`" class="mx-2 mt-2 d-fx ai-center" v-for="(zj,i) in zuijin" :key="i"  style="cursor: pointer;">
                        <img :src="zj.image" style="height: 30px;width: 40px;border-radius: 5px;text-align: center;">
                        <div class="zuijin d-fx flex-cl fs-sm px-2" style="width: 180px;">
                            <p class="fs-sm text-overflow">{{zj.title}}</p>
                            <p class="fs-xs text-overflow" style="color: rgb(158, 157, 157);">{{zj.brief}}</p>
                        </div>
                    </router-link>
                </card>
            </div>
            <!-- 右侧结束 -->

        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                swiperOptions: {
                    loop: true,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.pagination-home',

                    },
                },
                swiper: {},
                zuijin: {},
                List:[]
            }
        },
        methods: {
            async listBody() {
                const res = await this.$http.get('/study/list')
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
            this.listSwiper(),
            this.listZuijin(),
            this.listBody()
        }
    }
</script>

<style>
    .cud{
        position: relative
    }
    .touxiang{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 3px solid white;
        position: absolute;
        top: 50px;
        left: 20px;
    }
    .zuijin{
        color: rgb(54, 54, 54);
    }
    .zuijin:hover{
        color: rgb(255, 153, 153);
    }
</style>