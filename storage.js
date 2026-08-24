/*
AI Phone
Storage
*/


const Storage={



save(key,data){


localStorage.setItem(

key,

JSON.stringify(data)

);


},





get(key){


const data=

localStorage.getItem(
key
);



if(!data){

return null;

}



return JSON.parse(data);



},





remove(key){


localStorage.removeItem(
key
);


},





clear(){


localStorage.clear();


}



};