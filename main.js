window.addEventListener("DOMContentLoaded", main);

/** Startar scenen när allt laddats */
function main () {
    loadStartScene();
}


/** Startscen med intro samt val om man vill fortsätta eller inte */
function loadStartScene() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    const button2 = document.getElementById('alt-2');

    text.textContent = "Välkommen till jorden! En rymdvarelse har kraschat med sin rymdfärja, och måste hitta en ny rymdfärja för att kunna ta sig hem. Rymdvarelsen har landat i en skog mitt i natten och du måste hjälpa den hitta sin väg genom skogen för att finna rymdfärjan. Vill du hjälpa rymdvarelsen?";

    button1.textContent = "Ja";
    button1.addEventListener('click', loadYesToStartScene);

    button2.textContent = "Nej";
    button2.addEventListener('click', loadNoToStartScene);

}


/** Fortsättning om man väljer JA, samt får ge rymdvarelsen ett namn */
function loadYesToStartScene() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1').style.display = "none";
    const button2 = document.getElementById('alt-2').style.display = "none";

    document.getElementById('input-box').onclick = function() {
        var alienName = document.getElementById("name").value;
    }

    text.textContent = "Jaa! Vad snällt av dig att vilja hjälpa rymdvarelsen! Ge ett namn till rymdvarelsen du vill hjälpa."
}


/** Fortsättning om man väljer NEJ, får gå tillbaka till startsidan */
function loadNoToStartScene() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    const button2 = document.getElementById('alt-2').style.display = "none";

    button1.textContent = "Gå tillbaka";
    button1.addEventListener('click', loadStartScene);

    text.textContent = "Åh, vad tråkigt att du inte vill hjälpa rymdvarelsen :( Vi får hoppas att den hittar sin väg hem själv </3"
}



// document.getElementById("element").style.display = "none";


























// const textElement = document.getElementById('story-text');
// const alternativeButtons = document.getElementById('button-alternatives');


// /** Olika saker som varelsen plockar upp/tar med sig genom spelet, ett tomt objekt */
// let state = {}


// /** Start-delen av spelet, state är tomt som fylls av det som väljs*/
// function startGame() {
//     state = {}
//     showTextNode(1);

// }

// function showTextNode(textNodeIndex) {
    

// }


// function selectAlternative(option) {

// }

// const textNodes = [
//     {
//         id: 1,
//         text: 'Välkommen till jorden! En rymdvarelse har kraschat med sin rymdfärja, och måste hitta en ny rymdfärja för att kunna ta sig hem. Rymdvarelsen har landat i en skog mitt i natten och du måste hjälpa den hitta sin väg genom skogen för att finna rymdfärjan.',
//         options: [ 
//             {
//                 text: 'Hjälp rymdvarelsen',
//             },
//             {
//                 text: 'Hjälp inte rymdvarelsen'
//             }
//         ]
//     }
// ]

// /** Här kallas funktionen när sidan laddats klart */
// startGame ()