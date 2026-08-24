/*
AI Phone
Echo App

AI聊天入口
*/


class Echo{



constructor(){


this.currentAI=null;


this.init();


}







init(){



const button=

document.getElementById(

"send-button"

);





if(button){


button.onclick=

()=>this.send();


}



this.loadContacts();



}








loadContacts(){



const box=

document.getElementById(

"contacts"

);




const list=

AIIdentity.getAll();





if(list.length===0){



const demo=

AIIdentity.create({


name:"Luna",


personality:

"温柔陪伴型 AI",



relationship:

"伙伴"



});



this.renderContact(

demo

);



return;



}







list.forEach(

ai=>{


this.renderContact(ai);


}

);



}









renderContact(ai){



const box=

document.getElementById(

"contacts"

);





const card=

document.createElement(

"div"

);





card.className=

"card";





card.innerHTML=`

<h2>${ai.name}</h2>

<p>${ai.personality}</p>

`;





card.onclick=()=>{



Identity.selectAI(

ai.id

);



document.getElementById(

"chat-area"

)

.classList.remove(

"hidden"

);



document.getElementById(

"chat-title"

)

.innerText=

ai.name;



};





box.appendChild(card);



}









async send(){



const input=

document.getElementById(

"chat-input"

);





const text=

input.value.trim();





if(!text)return;





this.addMessage(

"user",

text

);



input.value="";





const result=

await AI.request({


type:"chat",


message:text



});





this.addMessage(

"assistant",

result.content

);



}









addMessage(role,text){



const box=

document.getElementById(

"chat-box"

);





const div=

document.createElement(

"div"

);





div.className=

"message "+role;





div.innerText=

text;





box.appendChild(div);



}





}







new Echo();
