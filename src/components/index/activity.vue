<template>
    <div class="m-activity">
        <el-carousel
            v-if="data.length"
            trigger="click"
            height="90px"
            indicator-position="none"
            :interval="6000"
        >
            <el-carousel-item v-for="(item, i) in data" :key="i">
                <a :href="item.link" rel="noopener noreferrer" target="_blank"
                    ><img :src="item.img"
                /></a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import { buildTarget, resolveImagePath } from "@jx3box/jx3box-common/js/utils";
import { getNews } from "@/service/index";
export default {
    name: "activity",
    props: [],
    data: function() {
        return {
            data: [],
        };
    },
    computed: {},
    methods: {},
    beforeCreate: function() {
        getNews("activity").then((data) => {
            data.forEach((item) => {
                item.img = resolveImagePath(item.img);
            });
            this.data = data;
        });
    },
    components: {},
};
</script>

<style lang="less">
@import "../../assets/css/index/activity.less";
</style>
