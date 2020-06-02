<template>
    <div class="main">
        <el-container style="height: 100vh;">
            <el-header style="background: rgb(179, 216, 255);">
                <el-row :gutter="20">
                    <el-col :span="3">
                        <div class="grid-content bg-purple"><strong>Yzh-Blog 后台管理</strong></div>
                    </el-col>
                    <el-col :span="3" :push="18" style="margin-top: 5px;display: flex;align-items: center;justify-content: space-around;">
                            <el-avatar :size="50"><img src="../assets/touxiang.jpg"></el-avatar>
                        <!-- <el-button type="danger" size="small">退出</el-button> -->
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside width="200px" style="background-color: rgb(238, 241, 246);text-align:left;">
                    <el-menu router  unique-opened>
                        <el-menu-item index="/"><i class="el-icon-house"></i>首页</el-menu-item>
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-s-claim"></i>文章</template>
                            <el-menu-item-group>
                                <el-menu-item index="/article/create">添加文章</el-menu-item>
                                <el-menu-item index="/article/list">文章列表</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-menu"></i>文章分类</template>
                            <el-menu-item-group>
                                <el-menu-item index="/catearticle/create">新建分类</el-menu-item>
                                <el-menu-item index="/catelist/list">分类列表</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title"><i class="el-icon-picture"></i>swiper</template>
                            <el-menu-item-group>
                                <el-menu-item index="/swiper/create">＋swiper</el-menu-item>
                                <el-menu-item index="/swiper/list">swiper列表</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view :key="$route.path"></router-view>
                </el-main>
            </el-container>
        </el-container>
        
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
</style>