import http from '@utils/http.js';

export const homeApi = () => http({
    method: "get",
    url: "/app/show/page/block",
    data: {
        pageType: 5
    }
})

export const searchApi = () => http({
    method: "get",
    url: "/app/show/search/hot_search"
})
export const searchResultApi = (name) => http({
    method: "get",
    url: "/app/show/search/normal_search",
    data: {
        product_name: name,
        page_size: 10,
        page_num: 1
    }
})
export const searchListApi = (name) => http({
    method: "get",
    url: "/app/show/search/normal_search",
    data: {
        page_size: 10,
        page_num: 1,
        product_name: name,
        type: 0
    }})

export const getTypeList = () => http({
    method: "GET",
    url: "/app/show/page/fetch/cateInfos",
    data: {

    }
})

export const getMoreList = (num = 1, Id) => http({
    method: "GET",
    url: "/app/show/page/searchPhone",
    data: {
        pageNum: num,
        pageSize: 10,
        cateId: Id,
        type: 0,
    }
})
