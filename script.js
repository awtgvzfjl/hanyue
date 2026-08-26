// ===============================
// NEXUS OS CORE SYSTEM
// ===============================


// 当前打开 APP

let currentApp = null;



const appWindow = document.getElementById(
    "app-window"
);





// ===============================
// APP LAUNCHER
// ===============================


function openApp(appName){


    appWindow.classList.add(
        "open"
    );


    currentApp = appName;



    hideAllApps();



    const app =
    document.getElementById(
        appName + "-app"
    );



    if(app){

        app.style.display =
        "block";

    }



    if(appName === "chat"){


        document
        .getElementById(
            "chat-app"
        )
        .style.display="block";


        chatPage(
            "chats"
        );

    }



}






// ===============================
// CLOSE APP
// ===============================


function closeApp(){


    appWindow.classList.remove(
        "open"
    );



    setTimeout(()=>{


        hideAllApps();


    },300);


}







function hideAllApps(){


    const apps =
    document.querySelectorAll(
        ".app-page"
    );


    apps.forEach(app=>{


        app.style.display =
        "none";


    });


}








// ===============================
// CHAT SYSTEM
// ===============================



function chatPage(page){


    const pages =
    document.querySelectorAll(
        ".chat-page"
    );


    pages.forEach(
        p=>{
            p.classList.remove(
                "active"
            );
        }
    );



    const target =
    document.getElementById(
        page + "-page"
    );



    if(target){

        target.classList.add(
            "active"
        );

    }



}








// ===============================
// CHARACTER DATA
// ===============================



const characters = {


    Luna:{


        avatar:"🌙",


        status:"Online",


        greetings:[

            "今天感觉怎么样？",

            "我一直在这里陪你。",

            "有什么想分享的吗？"

        ]


    },



    Raven:{


        avatar:"🖤",


        status:"Online",


        greetings:[

            "案件正在调查中。",

            "新的线索出现了。",

            "你怎么看？"

        ]

    }


};





let currentCharacter =
"Luna";









// ===============================
// OPEN CHAT
// ===============================


function openConversation(
    name
){


    currentCharacter =
    name;



    chatPage(
        "conversation"
    );



    const data =
    characters[name];



    document
    .getElementById(
        "character-name"
    )
    .innerText =
    name;



}









// ===============================
// BACK TO CHAT LIST
// ===============================


function backToChats(){


    chatPage(
        "chats"
    );


}









// ===============================
// SEND MESSAGE
// ===============================



function sendMessage(){



    const input =
    document.getElementById(
        "message-input"
    );



    const text =
    input.value.trim();



    if(
        text === ""
    ){

        return;

    }




    addMessage(
        text,
        "user"
    );



    input.value="";




    setTimeout(()=>{


        aiReply();


    },1000);



}









// ===============================
// ADD MESSAGE
// ===============================


function addMessage(
    text,
    type
){


    const box =
    document.getElementById(
        "messages"
    );



    const msg =
    document.createElement(
        "div"
    );



    msg.className =
    "message " + type;



    msg.innerText =
    text;



    box.appendChild(
        msg
    );



    box.scrollTop =
    box.scrollHeight;



}









// ===============================
// AI SIMULATION
// ===============================



function aiReply(){



    const data =
    characters[
        currentCharacter
    ];



    const replies =
    data.greetings;



    const reply =
    replies[
        Math.floor(
            Math.random()
            *
            replies.length
        )
    ];



    addMessage(
        reply,
        "ai"
    );



}









// ===============================
// CLOCK SYSTEM
// ===============================



function updateTime(){


    const time =
    new Date()
    .toLocaleTimeString(
        [],
        {
            hour:"2-digit",
            minute:"2-digit"
        }
    );



    const element =
    document.querySelector(
        ".status-time"
    );


    if(element){

        element.innerText =
        time;

    }


}



setInterval(
    updateTime,
    1000
);



updateTime();








// ===============================
// ENTER KEY SEND
// ===============================



document
.addEventListener(
    "keydown",
    function(e){


        if(
            e.key==="Enter"
        ){


            const input =
            document
            .getElementById(
                "message-input"
            );



            if(
                document.activeElement
                ===
                input
            ){

                sendMessage();

            }

        }


    }
);