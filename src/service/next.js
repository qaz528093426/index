import axios from "axios";
import { __next, __bb } from "@jx3box/jx3box-common/js/jx3box.json";

function getFlowerRank(query) {
    return axios
        .get(__next + "api/flower/price/rank", {
            params: query,
            withCredentials: true,
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

function getRank(type, limit = 10, sort = '30days') {
    return axios
        .get(__next + "api/summary/visit/rank", {
            params : {
                postType: type,
                postAction: "views",
                pageSize: limit,
                sort: sort,
            },
        })
        .catch((err) => {
            console.log(err);
        });
}

export { getFlowerRank, getRank };
