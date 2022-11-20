window.addEventListener("DOMContentLoaded", main);


/** Användaren väljer ett namn till rymdvarelsen innan början storyn börjar */
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

    text.textContent = "Välkommen till jorden! \nEn rymdvarelse har kraschat med sin rymdfärja, och måste hitta en ny rymdfärja för att kunna ta sig hem. Rymdvarelsen har landat i en skog mitt i natten och du måste hjälpa den hitta sin väg genom skogen för att finna rymdfärjan. Vill du hjälpa rymdvarelsen?";

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

    text.textContent = "Åh, vad tråkigt att du inte vill hjälpa rymdvarelsen :( \nVi får hoppas att den hittar sin rymdfärja själv </3";

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

    text.textContent = "Jaa! Vad snällt av dig att vilja hjälpa rymdvarelsen! \nGe ett namn till rymdvarelsen du vill hjälpa.";

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
    
    button1.textContent = "Ignorera ljudet från busken och fortsätta";
    button1.onclick = loadContinueAlone;

    button2.textContent = "Undersöka busken";
    button2.onclick = loadSquirrelScene;
}


/** HÖGER VÄG */
function loadRightStory() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    const button2 = document.getElementById('alt-2');

    text.textContent = alienName + " tar den högra vägen och fortsätter letandet. Det börjar blåsa lite och det är en ljummen natt. Plötsligt hör " + alienName + " någon ropa efter hen, vad ska " + alienName + " göra?";

    button1.textContent = "Ignorera och fortsätta leta i skogen";
    button1.onclick = loadContinueAlone;

    button2.textContent = "Se efter vem som ropar";
    button2.onclick = loadWeaselScene;
}


/** Här fortsätter man ensam */
function loadContinueAlone() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    
    text.textContent = alienName + " fortsätter leta efter skeppet på egen hand och kommer tillslut fram till platsen där skeppet ska finnas. " + alienName + " använder ett verktyg för att kunna hitta den exakta positionen för rymdfärjan.";
    
    button1.textContent = "Fortsätt";
    button1.onclick = loadLonleyEnding;
}


/** EKORRENS väg (vänster) */
function loadSquirrelScene() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    const button2 = document.getElementById('alt-2');

    text.textContent = alienName + " undersöker busken och hittar en ekorre. “AAAH!” - skriker ekorren. “SKRÄMS INTE SÅ!!”. " + alienName + " ber om ursäkt och ekorren frågar varför " + alienName + " är ute och går mitt i natten. Vad ska " + alienName + " svara?";

    button1.textContent = "Är ärlig och förklarar situationen";
    button1.onclick = loadHonestToSquirrel;

    button2.textContent = "Vill inte berätta sanningen och svarar att hen är ute på en kvällspromenad";
    button2.onclick = loadSquirrelAnswer;
}


/** VESSLANS väg (höger) */
function loadWeaselScene() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    const button2 = document.getElementById('alt-2');

    text.textContent = alienName + " följer ljudet ifrån ropen, och möter tillslut en vessla som står på en sten. “Godkväll!” - sa vesslan. “Ute på en nattpromenad ser jag, varför detta?” - frågade vesslan. Vad svarar " + alienName + "?";

    button1.textContent = "Är ärlig och förklarar situationen";
    button1.onclick = loadHonestToWeasel;

    button2.textContent = "Vill inte berätta sanningen och svarar att hen gillar den friska luften på natten";
    button2.onclick = loadWeaselAnswer;
}


/** Vill inte berätta för VESSLAN */
function loadWeaselAnswer() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    document.getElementById('alt-2').style.display = "none";

    text.textContent = "“Mhm, jag förstår. Ja, visst är det skönt med frisk luft! Ha en fin fortsatt nattpromenad då” - sa vesslan och gick sin väg.";

    button1.textContent = "Fortsätt";
    button1.onclick = loadContinueAlone;
}


/** Vill inte berätta för EKORREN */
function loadSquirrelAnswer() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    document.getElementById('alt-2').style.display = "none";

    text.textContent = "“Jaha, jaja, men du behöver inte skrämmas för det!!!” - sa ekorren bittert och försvann upp i trädet bredvid busken."

    button1.textContent = "Fortsätt";
    button1.onclick = loadContinueAlone;
}


/** Är ärlig mot VESSLAN */
function loadHonestToWeasel() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    const button2 = document.getElementById('alt-2');

    text.textContent = "”WOW, vilken story!” - utbrister vesslan. “Vilken tur att du är oskadd! Vill du ha hjälp att hitta ditt andra skepp?” - frågar Vesslan.";

    button1.textContent = "Ja";
    button1.onclick = () => {};

    button2.textContent = "Nej";
    button2.onclick = loadContinueAlone;
}


/** Är ärlig mot EKORREN */
function loadHonestToSquirrel() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');
    const button2 = document.getElementById('alt-2');

    text.textContent = "“VA??? PÅ RIKTIGT??” - skriker ekorren. “Det var ju klantigt av dig att kraschlanda här mitt i natten och skrämma slaget på ekorrar i samma veva.” - muttrar ekorren. “Jaja, behöver du ha någon hjälp med att hitta ditt skepp? Det har ju inte gått så bra hitills menar jag” - frågar ekorren.";

    button1.textContent = "Ja";
    button1.onclick = () => {};

    button2.textContent = "Nej";
    button2.onclick = loadContinueAlone;
}


/** Slutet om man inte väljer att undersöka (ensamt slut) */
function loadLonleyEnding() {
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('alt-1');

    text.textContent = alienName + " hittar sin rymdfärja och åker tillbaka ut i rymden, för att åka tillbaka till sin hemplanet.";

    button1.textContent = "Börja om från början";
    button1.onclick = loadBeginningOfStory;
}













































