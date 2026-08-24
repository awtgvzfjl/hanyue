/*
AI Phone
Chat Service

聊天服务层
*/


class ChatService{



async send(message){



const provider=

API.getDefault(
"chat"
);





if(!provider){


return {


role:"system",

content:

"没有连接 Chat API"



};


}







try{



const response=

await fetch(

provider.endpoint,

{


method:"POST",



headers:{


"Content-Type":

"application/json",



"Authorization":

"Bearer "+provider.key



},





body:JSON.stringify({


model:

provider.model,



messages:[


{


role:"user",


content:message



}


]


})



}



);






const data=

await response.json();




return {


role:"assistant",


content:

data.choices?.[0]?.message?.content

||

"无返回内容"



};



}

catch(error){



return {


role:"system",

content:

"API连接失败"



};



}



}



}







const ChatService=

new ChatService();
