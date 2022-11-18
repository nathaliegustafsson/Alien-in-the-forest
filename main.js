window.addEventListener("DOMContentLoaded", main);


/** Användaren väljer ett namn till rymdvarelsen innan storyn börjar */
let alienName = "";


/** Startar intro-scenen när allt laddats */
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
    button1.onclick = loadYesToStartScene;

    button2.textContent = "Nej";
    button2.onclick = loadNoToStartScene;
}


/** Om man väljer NEJ, får gå tillbaka till startsidan */
function loadNoToStartScene() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    const button2 = document.getElementById('alt-2');

    text.textContent = "Åh, vad tråkigt att du inte vill hjälpa rymdvarelsen :( Vi får hoppas att den hittar sin rymdfärja själv </3";

    button1.textContent = "Gå tillbaka";
    button1.onclick = loadStartScene;

    button2.textContent = "Nej, jag vill hjälpa!";
    button2.onclick = loadYesToStartScene;
}


/** Om man väljer JA, får ge rymdvarelsen ett namn */
function loadYesToStartScene() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    document.getElementById('alt-2').style.display = "none";
    document.getElementById('input').style.display = "block";

    text.textContent = "Jaa! Vad snällt av dig att vilja hjälpa rymdvarelsen! Ge ett namn till rymdvarelsen du vill hjälpa.";

    button1.textContent = "OK";
    button1.onclick = saveNameAndContinue;
}


/** Här sparas alienName och sedan fortsätter storyn */
function saveNameAndContinue() {
    const button2 = document.getElementById('alt-2');
    const input = document.getElementById('input');
    alienName = input.value
    input.value = "";
    
    input.style.display = null;
    button2.style.display = "block";

    loadBeginningOfStory();
}


/** När man gett rymndvarelsen ett namn fortsätter storyn med ett vägval */
function loadBeginningOfStory() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    const button2 = document.getElementById('alt-2');
    
    text.textContent = "Rymdvarelsen börjar gå genom skogen, det är alldeles tyst och månen lyser starkt på himlen. Efter en stund kommer " + alienName + " fram till ett vägskäl, vilken väg ska " + alienName + " ta?";
    
    button1.textContent = "Gå vänster";
    button1.onclick = loadLeftStory;
    
    button2.textContent = "Gå höger";
    button2.onclick = loadRightStory;
}


/** VÄNSTER VÄG */
function loadLeftStory() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    const button2 = document.getElementById('alt-2');

    text.textContent = alienName + " tar den vänstra vägen och fortsätter letandet. Det börjar blåsa lite och det är en ljummen natt. Plötsligt hör " + alienName + " ett ljud från en buske, vad ska " + alienName + " göra?";
    
    button1.textContent = "Ignorera ljudet från busken och fortsätt";
    button1.onclick = () => {};

    button2.textContent = "Undersöka busken";
    button2.onclick = () => {};
}


/** HÖGER VÄG */
function loadRightStory() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    const button2 = document.getElementById('alt-2');

    text.textContent = alienName + " tar den högra vägen och fortsätter letandet. Det börjar blåsa lite och det är en ljummen natt. Plötsligt hör " + alienName + " någon ropa efter hen, vad ska " + alienName + " göra?";

    button1.textContent = "Ignorera och fortsätta leta i skogen";
    button1.onclick = () => {};

    button2.textContent = "Se efter vem som ropar";
    button2.onclick = () => {};
}


/** VÄNSTER VÄG */
function loadLeftStory() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    const button2 = document.getElementById('alt-2');

    text.textContent = alienName + " tar den vänstra vägen och fortsätter letandet. Det börjar blåsa lite och det är en ljummen natt. Plötsligt hör " + alienName + " ett ljud från en buske, vad ska " + alienName + " göra?";
    
    button1.textContent = "Ignorera ljudet från busken och fortsätt";
    button1.onclick = () => {};

    button2.textContent = "Undersöka busken";
    button2.onclick = () => {};
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