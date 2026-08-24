/*
AI Phone V2

负责：

- 时间
- 页面切换
- App导航

*/


document.addEventListener(

"DOMContentLoaded",

()=>{


    initClock();


}

);







/*
状态栏时间
*/


function initClock(){


    const time =

    document.getElementById(

        "time"

    );



    function update(){



        const now =

        new Date();



        time.innerText =

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








/*
页面切换核心

*/


function openApp(id){



    const screens =

    document.querySelectorAll(

        ".app-screen"

    );





    screens.forEach(

        screen=>{


            screen.classList.remove(

                "active"

            );


        }

    );







    const target =

    document.getElementById(

        id

    );





    if(target){


        target.classList.add(

            "active"

        );


    }



}








/*
返回首页

*/


function goHome(){



    const screens =

    document.querySelectorAll(

        ".app-screen"

    );




    screens.forEach(

        screen=>{


            screen.classList.remove(

                "active"

            );

        }

    );





    document

    .getElementById(

        "home"

    )

    .classList.add(

        "active"

    );



}
