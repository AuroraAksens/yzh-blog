<template>
    <div class="topBar bou mt-3">
        <div class="top1 ">
            <img class="w-100" src="../../assets/img/top.png">
        </div>
        <div class="top2  d-fx jc-end ai-center pr-4">
            <div class="to1">
                <img src="../../assets/img/touxiang.jpg">
            </div>
            <div class="to2 fs-sm text-center py-2 my-2">
                <b>I gotta keep on moving on and on</b>
                <p>保持冷静，继续前行</p>
            </div>
            <div class="to3">
                <ul class="d-fx jc-around py-2 fs-xs text-center">
                    <li style="border: none;">
                               00
                        <p><b>VISITS</b></p>
                    </li>
                    <li style="opacity: 0.5;"></li>
                    <li style="border: none;">
                                00
                        <p><b>SURVIVA</b></p>
                    </li>
                    <li style="opacity: 0.5;"></li>
                    <li style="border: none;">
                               00
                        <p><b>POSTS</b></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
    .topBar {
        height: 355px;
        overflow: hidden;
        position: relative;
    }

    .top1 {
        height: 275px;
    }

    .top2 {
        height: 80px;
        background-color: white;
    }

    .to1 {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        border: 8px solid white;
        position: absolute;
        bottom: 30px;
        left: 80px;
    }

    .to1 img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .to2 {
        width: 300px;
        height: 60px;
        position: absolute;
        left: 200px;
        color: rgb(112, 112, 112);
    }
    .to3{
        width: 35%;
        color: rgb(112, 112, 112);;
    }
    .to3 li{
        border-left: 1px solid;
    }
</style>