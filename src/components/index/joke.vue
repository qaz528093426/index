<!--
 * @Author: iRuxu
 * @Date: 2022-05-05 22:05:46
 * @LastEditTime: 2022-07-23 22:22:29
 * @Description:
-->
<template>
    <div class="m-joke">
        <h3 class="u-label">
            <img class="u-icon" :src="icon" />今日骚话
        </h3>
        <div class="u-content">
            <el-carousel height="20px" direction="vertical" :autoplay="true">
                <el-carousel-item v-for="(item,i) in data" :key="i">
                    <a class="u-item" :href="getLink(item.id)" target="_blank">
                        <span class="u-author">{{item.author || '匿名'}}：</span>
                        <span class="u-joke" v-html="item.html"></span>
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div>
        <a class="u-publish" target="_blank" href="/publish/#/joke"><i class="el-icon-s-promotion"></i>JUST SAO!</a>
    </div>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { getLink } from "@jx3box/jx3box-common/js/utils";
import { getJokes } from "@/service/index";
import JX3_EMOTION from "@jx3box/jx3box-emotion";

export default {
    name: "joke",
    props: [],
    components: {},
    data: function () {
        return {
            data: [],
            icon: __imgPath + "image/box/joke.svg",
        };
    },
    computed: {},
    methods: {
        getLink : function (id){
            return getLink('joke',id)
        },
        init: function () {
            getJokes().then((res) => {
                this.data = res.data.data.list;
                this.render();
            });
        },
        render: function () {
            this.data.forEach((item) => {
                const ins = new JX3_EMOTION(item.content)
                item.html = ins.code
            })
        },
    },
    filters: {},
    created: function () {},
    mounted: function () {
        this.init()
    },
};
</script>

<style lang="less">
@import "../../assets/css/index/joke.less";
</style>
