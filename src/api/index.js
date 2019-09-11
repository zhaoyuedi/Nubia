import http from "@utils/http.js";

//分类列表
export const getTypeList = () => http({
    method:"GET",
    url:"/app/show/page/fetch/cateInfos",
    data:{
        
    }
});

//查看更多
export const getMoreList = (num=1,Id)=>http({
    method:"GET",
    url:"/app/show/page/searchPhone",
    data:{
        pageNum:num,
        pageSize:10,
        cateId:Id,
        type:0,
    }
})
