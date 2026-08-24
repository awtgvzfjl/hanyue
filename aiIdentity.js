/*
AI Phone
AI Identity

AI角色身份系统
*/


class AIIdentity{



constructor(){



this.list=

Storage.get(

"ai_identity_list"

)

||

[];



}







create(data){



const identity={


id:

Date.now(),



name:

data.name || "AI",



avatar:

data.avatar || "",



personality:

data.personality || "",



background:

data.background || "",



relationship:

data.relationship || "",



memory:[]



};





this.list.push(

identity

);



this.save();



return identity;



}







save(){



Storage.save(

"ai_identity_list",

this.list

);



}







getAll(){


return this.list;


}







get(id){



return this.list.find(

item=>

item.id===id

);


}







remove(id){



this.list=

this.list.filter(

item=>

item.id!==id

);



this.save();


}



}





const AIIdentity=

new AIIdentity();
