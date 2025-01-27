import { $team, $cms } from "@jx3box/jx3box-common/js/https";
import axios from "axios";
import { __spider } from "@jx3box/jx3box-common/data/jx3box.json";
import { __dataPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { $node } from "@jx3box/jx3box-common/js/https";
const $spider = axios.create({
    baseURL: __spider,
});

// 日常
function getDaily(params) {
    return $cms({mute: true}).get(`/api/cms/game/daily`, {
        params
    })
}

// 美人图
function getMeirentu(server = "蝶恋花") {
    return $spider.get("/meirentu", {
        params: {
            server: server,
        },
    });
}

// 游戏公告
function getGameNews(client) {
    return $spider.get("/jx3news", {
        params: {
            client: client,
        },
    });
}

// 开服监控
function getServers() {
    return $spider.get("/jx3servers");
}

// 金价走势
function getPrice() {
    return $spider.get("/jx3price");
}

// 宠物福缘
function getPetLucky() {
    return axios.get(__dataPath + "pvx/pet/output/pet_lucky.json");
}

function getPets(petids, client = "std") {
    return $node().get(`/pets`, {
        params: {
            ids: petids.join(","),
            client,
        },
    });
}

// 园宅会赛
function getFurniture(params) {
    return $cms({ mute: true }).get(`/api/cms/game/furniture/match`, {
        params,
    });
}

export { getGameNews, getServers, getPrice, getMeirentu, getDaily, getPetLucky, getPets, getFurniture };
