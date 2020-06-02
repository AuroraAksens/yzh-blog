<template>
    <div class="main">

        <!-- 导航栏 -->
        <div class="navbar w-100 d-fx ai-center jc-center">
            <div class="logo pl-3">
                <b>YaoZeHui</b>
            </div>
            <div class="con  d-fx fs-lg jc-end pr-4">
                <router-link class="nav px-4 fs-sm" tag="div" to="/"><b>首页</b></router-link>
                <router-link class="nav px-4 fs-sm" tag="div" to="/article"><b>文摘</b></router-link>
                <router-link class="nav px-4 fs-sm" tag="div" to="/study"><b>Study</b></router-link>
                <router-link class="nav px-4 fs-sm" tag="div" to="/chenxu"><b>程序生涯</b></router-link>
                <router-link class="nav px-4 fs-sm" tag="div" to="/tool"><b>开发工具栏</b></router-link>
            </div>
        </div>
        <!-- 导航栏结束 -->

        <!-- 主体 -->
        <div class="mainBody">
            <router-view :key="$route.path"></router-view>
        </div>
        <!-- 主体结束 -->

        <!-- 尾部 -->
        <div class="tail w-100 text-center fs-xs my-3 mt-5" style="border-top: 1px solid rgb(202, 202, 202);">
            <div class="py-2">Copyright © 2020 Yzh-Blog [www.yaozehui.Com] All Rights Reserved</div>
            <div>备案号：粤IPC备20016365</div>
        </div>
        <!-- 尾部结束 -->

    </div>
</template>

<script>

</script>

<style>
    .navbar {
        background-color: white;
        height: 60px;
        box-shadow:2px 2px 3px #cccbcb;
        z-index: 100;
        position: sticky;
        top: 0;
    }
    .con{
        width: 800px;
    }
    .nav{
        color: #707070;
    }
    .nav:hover{
        color: #FAA5A5;
        cursor: pointer;
    }
    .logo{
        width: 220px;
    }
    .logo:hover{
        color: #FAA5A5;
        cursor: pointer;
    }
    .tail{
        height: 60px;
        background-color: rgb(236, 244, 252);
        color: #5c5c5c;
        letter-spacing: 1px;
    }
</style>