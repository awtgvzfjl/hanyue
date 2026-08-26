/*
 NEXUS OS
 NEXUS Chat App Prototype

 File:
 script.js

 Pure Static JavaScript
*/


// =========================
// CHARACTER DATA
// =========================


const characters = [

    {
        id: 1,

        name: "Luna",

        type: "Companion AI",

        intro:
        "A gentle AI companion who loves listening and creating meaningful conversations.",

        avatar:
        "https://i.pravatar.cc/300?img=47",

        tags:
        [
            "Warm",
            "Companion",
            "Dreamy"
        ],

        replies:
        [
            "I'm happy you're here. Tell me about your day.",
            "That sounds interesting. I want to hear more.",
            "I always enjoy our conversations."
        ]

    },


    {

        id: 2,

        name: "Raven",

        type: "Mystery AI",

        intro:
        "A mysterious personality with a sharp mind and hidden stories.",

        avatar:
        "https://i.pravatar.cc/300?img=12",

        tags:
        [
            "Mystery",
            "Smart",
            "Dark"
        ],

        replies:
        [
            "Interesting... I never expected that answer.",
            "Every story has another hidden side.",
            "Maybe one day I'll tell you my secret."
        ]

    },


    {

        id: 3,

        name: "Nova",

        type: "Future AI",

        intro:
        "An advanced AI explorer from the future world.",

        avatar:
        "https://i.pravatar.cc/300?img=32",

        tags:
        [
            "Future",
            "Explorer",
            "Cyber"
        ],

        replies:
        [
            "The future is full of possibilities.",
            "I have recorded this beautiful moment.",
            "Human emotions are fascinating."
        ]

    }


];




// =========================
// STATE
// =========================


let currentCharacter = null;





// =========================
// INITIAL LOAD
// =========================


document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderCharacters();

    }
);







// =========================
// RENDER CHARACTER CARDS
// =========================


function renderCharacters(){


    const container =
        document.getElementById(
            "character-list"
        );


    container.innerHTML = "";



    characters.forEach(character => {


        const card =
        document.createElement(
            "div"
        );


        card.className =
            "character-card";



        card.innerHTML = `

            <img 
            class="character-avatar"
            src="${character.avatar}"
            >


            <h3>
            ${character.name}
            </h3>


            <p>
            ${character.intro}
            </p>


            <div class="tag-container">

                ${
                    character.tags
                    .map(
                    tag =>
                    `
                    <span class="tag">
                    ${tag}
                    </span>
                    `
                    )
                    .join("")
                }

            </div>

        `;



        card.onclick = () => {

            openDetail(character);

        };



        container.appendChild(card);


    });


}









// =========================
// PAGE SWITCH
// =========================


function switchPage(pageId){


    document
    .querySelectorAll(".page")
    .forEach(page=>{

        page.classList.remove(
            "active"
        );

    });



    document
    .getElementById(pageId)
    .classList.add(
        "active"
    );

}





// =========================
// OPEN DETAIL
// =========================


function openDetail(character){


    currentCharacter =
        character;



    document
    .getElementById(
        "detail-avatar"
    )
    .src =
    character.avatar;



    document
    .getElementById(
        "detail-name"
    )
    .innerText =
    character.name;



    document
    .getElementById(
        "detail-intro"
    )
    .innerText =
    character.intro;



    document
    .getElementById(
        "detail-tags"
    )
    .innerHTML =


    character.tags
    .map(
        tag =>
        `
        <span class="tag">
        ${tag}
        </span>
        `
    )
    .join("");



    switchPage(
        "detail-page"
    );


}





// =========================
// START CHAT
// =========================


function startChat(){


    if(!currentCharacter)
    return;



    document
    .getElementById(
        "chat-avatar"
    )
    .src =
    currentCharacter.avatar;



    document
    .getElementById(
        "chat-name"
    )
    .innerText =
    currentCharacter.name;



    document
    .getElementById(
        "message-container"
    )
    .innerHTML =
    "";



    addMessage(

        "AI",

        "Hello, I'm "
        +
        currentCharacter.name
        +
        ". Nice to meet you."

    );



    switchPage(
        "chat-page"
    );


}







// =========================
// SEND MESSAGE
// =========================


function sendMessage(){


    const input =
    document
    .getElementById(
        "message-input"
    );



    const text =
    input.value.trim();



    if(
        text === ""
    )
    return;



    addMessage(
        "USER",
        text
    );



    input.value =
    "";



    showTyping();



    setTimeout(
        ()=>{


            hideTyping();



            const replies =
            currentCharacter.replies;



            const reply =
            replies[
                Math.floor(
                    Math.random()
                    *
                    replies.length
                )
            ];



            addMessage(
                "AI",
                reply
            );


        },

        1200

    );



}








// =========================
// ADD MESSAGE
// =========================


function addMessage(
    sender,
    text
){


    const box =
    document
    .getElementById(
        "message-container"
    );



    const message =
    document.createElement(
        "div"
    );



    message.className =
        sender === "AI"
        ?
        "message ai-message"
        :
        "message user-message";



    message.innerText =
        text;



    box.appendChild(
        message
    );



    box.scrollTop =
        box.scrollHeight;


}







// =========================
// TYPING ANIMATION
// =========================


function showTyping(){


    document
    .getElementById(
        "typing-indicator"
    )
    .classList
    .remove(
        "hidden"
    );

}



function hideTyping(){


    document
    .getElementById(
        "typing-indicator"
    )
    .classList
    .add(
        "hidden"
    );


}







// =========================
// RETURN DISCOVER
// =========================


function goDiscover(){


    switchPage(
        "discover-page"
    );

}