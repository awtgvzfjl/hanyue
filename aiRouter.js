/*
AI Phone
AI Router

AI请求调度中心
*/


class AIRouter{



async request(options){



switch(options.type){



case "chat":



return await ChatService.send(

options.message

);





case "voice":



return {


role:"system",

content:

"Voice Service 未连接"


};



case "image":



return {


role:"system",

content:

"Image Service 未连接"


};



default:



return {


role:"system",

content:

"未知服务类型"


};



}



}



}







const AI=

new AIRouter();
