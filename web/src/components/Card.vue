<template>
    <div class="card bou">
        <div class="card-header py-2 pl-1 mx-1" style="border-bottom: 1px solid gainsboro;color: gray;">
            <i class="iconfont" :class="`icon-${icon}`"></i>
            <span class="fs-sm ml-2">{{title}}</span>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            title:{type:String , required:true},
            icon:{type:String , required:true},
        }
    }
</script>

<style>
    .card {
        width: 235px;
    }
</style>