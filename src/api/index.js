import http from '@utils/http.js';

export const homeApi = () => http({
    method: "get",
    url: "/app/show/page/block",
    data: {
        pageType:5
    }
})

export const searchApi =() => http({
    method:"get",
    url:"/app/show/search/hot_search"
})
