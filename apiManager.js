/*
AI Phone
API Manager
*/


class APIManager{



constructor(){


this.providers=

Storage.get(
"ai_providers"
)

||

[];


}







addProvider(provider){



provider.id=

Date.now();



this.providers.push(

provider

);



this.save();



return provider;



}







save(){


Storage.save(

"ai_providers",

this.providers

);


}







getAll(){


return this.providers;


}







getByType(type){


return this.providers.filter(

item=>

item.type===type

);


}







getDefault(type){



return this.providers.find(

item=>

item.type===type

&&

item.active===true

);


}







setDefault(id){



this.providers=

this.providers.map(

item=>{


item.active=

item.id===id;



return item;



}

);



this.save();


}







remove(id){



this.providers=

this.providers.filter(

item=>

item.id!==id

);



this.save();


}



}





const API=

new APIManager();
