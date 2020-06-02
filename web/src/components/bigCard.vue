<template>
    <div>
        <div v-for="(sj,i) in shuju" :key="i">
            <router-link tag="div" :to="`/xiangqing/${row._id}`" v-for="(row,io) in sj.indexList"  :key="io">
                <div class="bigCard bou">
                    <div class="big1 d-fx jc-start py-3 px-1 mx-4">
                        <img src="../assets/img/touxiang.jpg">
                        <div class="til fs-sm px-4 py-2">
                            <strong>{{row.title}}</strong>
                            <p class="fs-sm">{{row.updatedAt | date}}</p>
                        </div>
                    </div>
                    <div class="big2 px-1 mx-5 p-3">
                        <p class="dis w-100 fs-sm p-2 mb-2 text-overflow">
                            {{row.brief}}</p>
                        <div class="text-center">
                            <img :src="row.image" />
                        </div>
                    </div>
                    <div class="big3 px-1 mx-4 pb-3 pl-3 mb-3">
                        <i class="iconfont icon-pinglun pr-2"></i>
                        <span>00</span>
                        <i class="iconfont icon-dianzan_active pr-2 ml-4"></i>
                        <span>00</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import dayjs from 'dayjs'

    export default {
        filters:{
            date(val){
                return dayjs(val).format('YYYY/MM/DD')
            }
        },
        props: {
            shuju: { type: Array, required: true },
        },
        data() {
            return {
            }
        }
    }
</script>

<style>
    .bigCard {
        color: rgb(92, 92, 92);
        width: 750px;
    }

    .bigCard:nth-child(1) {
        margin-top: 0;
    }

    .big1 {
        border-bottom: 1px solid rgb(219, 218, 218);
    }

    .big1 img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .big2 img {
        max-width: 650px;
        max-height: 365px;
        border-radius: 5px;
    }

    .dis {
        background-color: rgb(238, 238, 238);
        border-radius: 5px;
        cursor: pointer;
    }
    .dis:hover{
        color: rgb(255, 66, 66)
    }

    .big3 {
        color: gray;
    }

    .til{
        cursor: pointer;
    }
    .til strong:hover{
        color: rgb(255, 66, 66)
    }
</style>