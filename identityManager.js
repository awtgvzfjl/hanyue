/*
AI Phone
Identity Manager

管理用户身份和AI身份
*/


class IdentityManager{



constructor(){


this.user=

User;



this.ai=

AIIdentity;



this.currentAI=

null;



}







selectAI(id){



this.currentAI=

this.ai.get(id);



}







getCurrentAI(){



return this.currentAI;



}







getContext(){



return {


user:

this.user.get(),



ai:

this.currentAI



};



}



}







const Identity=

new IdentityManager();
