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


/** Fortsättning om man väljer JA, får ge rymdvarelsen ett namn */
function loadYesToStartScene() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    const button2 = document.getElementById('alt-2');

    text.textContent = "Jaa! Vad snällt av dig att vilja hjälpa rymdvarelsen! Ge ett namn till rymdvarelsen du vill hjälpa."

    button1.textContent = "Ja";
    button1.addEventListener('click', loadBeginningOfStory);
}


/** Fortsättning om man väljer NEJ, får gå tillbaka till startsidan */
function loadNoToStartScene() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    const button2 = document.getElementById('alt-2');

    button1.textContent = "Gå tillbaka";
    button1.addEventListener('click', loadStartScene);

    button2.textContent = "Nej, jag vill hjälpa!";
    button2.addEventListener('click', loadYesToStartScene);

    text.textContent = "Åh, vad tråkigt att du inte vill hjälpa rymdvarelsen :( Vi får hoppas att den hittar sin väg hem själv </3"
}


/** När man gett rymndvarelsen ett namn fortsätter storyn */
function loadBeginningOfStory() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    const button2 = document.getElementById('alt-2');

    text.textContent = "Rymdvarelsen börjar gå genom skogen, det är alldeles tyst och månen lyser starkt på himlen. Efter en stund kommer *NAMN* fram till ett vägskäl, vilken väg ska hen ta?"

    button1.textContent = "Gå vänster";
    button1.addEventListener('click', );

    button2.textContent = "Gå höger";
    button2.addEventListener('click', loadStartScene);
}









    // const input = document.createElement('input');
    // input.setAttribute('id', 'alien');
    // input.setAttribute('type', 'text');
    // document.body.appendChild(input);

    // const alienName = document.getElementById('alien');
    // alienName.setAttribute('placeholder', 'Skriv här');
    // const value = alienName.value;
    // console.log(value);


















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