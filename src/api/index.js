import http from '@utils/http.js';

export const homeApi = () => http({
    method: "get",
    url: "/app/show/page/block",
    data: {
        pageType:5
    }
})

export const discover =() => http({
    method:"get",
    url:"/app/show/page/block"
})
