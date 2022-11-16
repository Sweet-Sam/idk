const background = document.querySelector('#background');
const controlPannel = document.getElementById('controlPannel');
const upButton = document.getElementById('upButton');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const downButton = document.getElementById('downButton');

function responsiveWindow() {
    if (window.innerWidth >= 600) {
        background.style.width = "50vh";
        background.style.height = "75vh";
        background.style.marginLeft = "auto";
        background.style.marginRight = "auto";
        background.style.marginUp = "2vh";

        gridthing.style.width = "50vh";
        gridthing.style.height = "50vh";
    }
    else if (window.innerWidth < 600 && window.innerWidth > 350) {
        background.style.width = "44vh";
        background.style.height = "66vh";
        background.style.marginLeft = "auto";
        background.style.marginRight = "auto";
        background.style.marginTop = "2vh";

        gridthing.style.width = "44vh";
        gridthing.style.height = "44vh";
    }
    else {
        background.style.width = "30vh";
        background.style.height = "45vh";
        background.style.marginLeft = "auto";
        background.style.marginRight = "auto";
        background.style.marginTop = "1vh";

        gridthing.style.width = "30vh";
        gridthing.style.height = "30vh";
    }
}

responsiveWindow();

window.addEventListener('resize', () => {
    responsiveWindow();
})


let dataBank = ['ROCKER', 'BANANA', 'ACCEPT', 'CASTLE', 'DEGREE', 'EMPLOY', 'HOLDER', 'HIDDEN', 'LEADER', 'MANNER', 'SCHOOL', 'SILENT', 'STRONG', 'THANKS', 'WRITER', 'WEEKLY', 'WRIGHT', 'VISION', 'TRYING', 'THREAT', 'TENNIS', 'SISTER', 'PRINCE', 'NATURE', 'MURDER', 'LEGACY', 'GROWTH', 'ESCAPE', 'DEPEND', 'CUSTOM', 'BUREAU', 'BECAME', 'AFFECT', 'ACROSS'];

const pickedWord = dataBank[Math.floor(Math.random() * dataBank.length)];
console.log(pickedWord)

let attemptedWord

function validate(input) {
    input.value = input.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();
}

//death field (aka the part where I turn input values into variables(it' called that because its probably gonna turn ugly))


const A1Grid = document.getElementById('gridposA1');
const A2Grid = document.getElementById('gridposA2');
const A3Grid = document.getElementById('gridposA3');
const A4Grid = document.getElementById('gridposA4');
const A5Grid = document.getElementById('gridposA5');
const A6Grid = document.getElementById('gridposA6');
    
const B1Grid = document.getElementById('gridposB1');
const B2Grid = document.getElementById('gridposB2');
const B3Grid = document.getElementById('gridposB3');
const B4Grid = document.getElementById('gridposB4');
const B5Grid = document.getElementById('gridposB5');
const B6Grid = document.getElementById('gridposB6');

const C1Grid = document.getElementById('gridposC1');
const C2Grid = document.getElementById('gridposC2');
const C3Grid = document.getElementById('gridposC3');
const C4Grid = document.getElementById('gridposC4');
const C5Grid = document.getElementById('gridposC5');
const C6Grid = document.getElementById('gridposC6');

const D1Grid = document.getElementById('gridposD1');
const D2Grid = document.getElementById('gridposD2');
const D3Grid = document.getElementById('gridposD3');
const D4Grid = document.getElementById('gridposD4');
const D5Grid = document.getElementById('gridposD5');
const D6Grid = document.getElementById('gridposD6');

const E1Grid = document.getElementById('gridposE1');
const E2Grid = document.getElementById('gridposE2');
const E3Grid = document.getElementById('gridposE3');
const E4Grid = document.getElementById('gridposE4');
const E5Grid = document.getElementById('gridposE5');
const E6Grid = document.getElementById('gridposE6');

const F1Grid = document.getElementById('gridposF1');
const F2Grid = document.getElementById('gridposF2');
const F3Grid = document.getElementById('gridposF3');
const F4Grid = document.getElementById('gridposF4');
const F5Grid = document.getElementById('gridposF5');
const F6Grid = document.getElementById('gridposF6');

const A1Value = A1Grid.value;
const A2Value = A2Grid.value;
const A3Value = A3Grid.value;
const A4Value = A4Grid.value;
const A5Value = A5Grid.value;
const A6Value = A6Grid.value;

const B1Value = B1Grid.value;
const B2Value = B2Grid.value;
const B3Value = B3Grid.value;
const B4Value = B4Grid.value;
const B5Value = B5Grid.value;
const B6Value = B6Grid.value;

const C1Value = C1Grid.value;
const C2Value = C2Grid.value;
const C3Value = C3Grid.value;
const C4Value = C4Grid.value;
const C5Value = C5Grid.value;
const C6Value = C6Grid.value;

const D1Value = D1Grid.value;
const D2Value = D2Grid.value;
const D3Value = D3Grid.value;
const D4Value = D4Grid.value;
const D5Value = D5Grid.value;
const D6Value = D6Grid.value;

const E1Value = E1Grid.value;
const E2Value = E2Grid.value;
const E3Value = E3Grid.value;
const E4Value = E4Grid.value;
const E5Value = E5Grid.value;
const E6Value = E6Grid.value;

const F1Value = F1Grid.value;
const F2Value = F2Grid.value;
const F3Value = F3Grid.value;
const F4Value = F4Grid.value;
const F5Value = F5Grid.value;
const F6Value = F6Grid.value;

let PW;

let missCounter = 0;
let wrongLetter = 0;

function verifyAnswer(a, b, c, d, e, f) {
    a.style.backgroundcolor = "mediumseagreen";
    a.style.color = "white";
    b.style.backgroundcolor = "mediumseagreen";
    b.style.color = "white";
}