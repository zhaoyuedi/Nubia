import http from "@utils/http.js";

//分类列表
export const getTypeList = () => http({
    method:"GET",
    url:"/app/show/page/fetch/cateInfos",
    data:{
        
    }
});
