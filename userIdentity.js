/*
AI Phone
User Identity

用户身份面具
*/


class UserIdentity{



constructor(){



this.data=

Storage.get(

"user_identity"

)

||

{

name:"User",

avatar:"",

bio:"",

tags:[]

};


}







save(){



Storage.save(

"user_identity",

this.data

);


}







update(info){



this.data={

...this.data,

...info

};



this.save();


}







get(){


return this.data;


}





}







const User=

new UserIdentity();
