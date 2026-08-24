/*
AI Phone 主控制
*/


document.addEventListener(
"DOMContentLoaded",
()=>{

initClock();

}
);





function initClock(){


const time=

document.getElementById(
"current-time"
);



function update(){


const now=new Date();


time.innerText=

now.toLocaleTimeString(
"zh-CN",
{

hour:"2-digit",

minute:"2-digit"

}

);


}



update();


setInterval(
update,
1000
);


}








function openApp(id){


const pages=

document.querySelectorAll(
".page"
);



pages.forEach(

page=>{

page.classList.remove(
"active"
);

}

);




const target=

document.getElementById(
id
);



if(target){

target.classList.add(
"active"
);

}



}







function backHome(){


openApp(
"desktop"
);


}
