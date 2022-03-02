import {get,post,post2} from "../axios/axios";

// const baseUrl = "120.27.196.130:8080";

export function userInfoGet(uid: any){
    // return get(baseUrl+"/v1/personalPage/showPersonInfo",uid);
    return get("/api/v1/personalPage/showPersonInfo",uid);
}

//测试用，拿的是给主页的帖子
// export function userPostsGet(uid: any){
//     // return get(baseUrl+"/v1/personalPage/showPersonalPost",uid);
//     return get("/api/v1/mainPage/page",uid);
// }

//实际的个人帖子，跟主页的帖子格式不一致。
export function userPostsGet(uid: any){
    // return get(baseUrl+"/v1/personalPage/showPersonalPost",uid);
    return get("/api/v1/personalPage/showPersonalPost",uid);
}

export function userFavoritesGet(uid: any){
    // return get(baseUrl+"/v1/personalPage/showCollection",uid);
    return get("/api/v1/personalPage/showCollection",uid);
}

export function userDetailedInfoGet(uid:any){
    // return post(baseUrl+"/v1/personalPage/showProfile",uid);
    return get("/api/v1/personalPage/showProfile",uid);
}

export function postCommentsGet(data:any){
    // return post(baseUrl+"/v1/personalPage/showProfile",uid);
    return get("/api/v1/mainPage/comment",data);
}

//data包括uid,nickname,profile_url,sex & 需要修改的信息
export function userDetailedInfoPost(data:any){
    // return post(baseUrl+"/v1/personalPage/modifyProfile",data);
    return post2("/api/v1/personalPage/modifyProfile",data);
}

export function passwordModifyPost(data:any){
    // return post(baseUrl+"/v1/personalPage/modifyProfile",data);
    return post2("/api/v1/personalPage/modifyPassword",data);
}

//上传头像数据profileImage,返回头像url
export function profileImageUpload(data:any){
    return post("/api/v1/upload/profile/image",data);
}

//根据UserId,ProfileUrl 更换头像
export function userProfileEdit(data:any){
    return post2("/api/v1/personalPage/modifyPhoto",data);
}