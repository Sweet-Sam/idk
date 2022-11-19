//!   /$$   /$$             /$$          /$$      /$$                           /$$ /$$          
//!  | $$$ | $$            | $$         | $$  /$ | $$                          | $$| $$          
//!  | $$$$| $$  /$$$$$$  /$$$$$$       | $$ /$$$| $$  /$$$$$$   /$$$$$$   /$$$$$$$| $$  /$$$$$$ 
//!  | $$ $$ $$ /$$__  $$|_  $$_//$$$$$$| $$/$$ $$ $$ /$$__  $$ /$$__  $$ /$$__  $$| $$ /$$__  $$
//!  | $$  $$$$| $$  \ $$  | $$ |______/| $$$$_  $$$$| $$  \ $$| $$  \__/| $$  | $$| $$| $$$$$$$$
//!  | $$\  $$$| $$  | $$  | $$ /$$     | $$$/ \  $$$| $$  | $$| $$      | $$  | $$| $$| $$_____/
//!  | $$ \  $$|  $$$$$$/  |  $$$$/     | $$/   \  $$|  $$$$$$/| $$      |  $$$$$$$| $$|  $$$$$$$
//!  |__/  \__/ \______/    \___/       |__/     \__/ \______/ |__/       \_______/|__/ \_______/


//?game responsiveness
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

let pickedWord;

function validate(input) {
    input.value = input.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();
}


//death field (aka the part where I turn input values into variables(it' called that because its probably gonna turn ugly))

//?grid pos
//#region
let A1Grid = document.getElementById('gridposA1');
let A2Grid = document.getElementById('gridposA2');
let A3Grid = document.getElementById('gridposA3');
let A4Grid = document.getElementById('gridposA4');
let A5Grid = document.getElementById('gridposA5');
let A6Grid = document.getElementById('gridposA6');

let B1Grid = document.getElementById('gridposB1');
let B2Grid = document.getElementById('gridposB2');
let B3Grid = document.getElementById('gridposB3');
let B4Grid = document.getElementById('gridposB4');
let B5Grid = document.getElementById('gridposB5');
let B6Grid = document.getElementById('gridposB6');

let C1Grid = document.getElementById('gridposC1');
let C2Grid = document.getElementById('gridposC2');
let C3Grid = document.getElementById('gridposC3');
let C4Grid = document.getElementById('gridposC4');
let C5Grid = document.getElementById('gridposC5');
let C6Grid = document.getElementById('gridposC6');

let D1Grid = document.getElementById('gridposD1');
let D2Grid = document.getElementById('gridposD2');
let D3Grid = document.getElementById('gridposD3');
let D4Grid = document.getElementById('gridposD4');
let D5Grid = document.getElementById('gridposD5');
let D6Grid = document.getElementById('gridposD6');

let E1Grid = document.getElementById('gridposE1');
let E2Grid = document.getElementById('gridposE2');
let E3Grid = document.getElementById('gridposE3');
let E4Grid = document.getElementById('gridposE4');
let E5Grid = document.getElementById('gridposE5');
let E6Grid = document.getElementById('gridposE6');

let F1Grid = document.getElementById('gridposF1');
let F2Grid = document.getElementById('gridposF2');
let F3Grid = document.getElementById('gridposF3');
let F4Grid = document.getElementById('gridposF4');
let F5Grid = document.getElementById('gridposF5');
let F6Grid = document.getElementById('gridposF6');
//#endregion

//?inner value
//#region
let A1Value = A1Grid.value;
let A2Value = A2Grid.value;
let A3Value = A3Grid.value;
let A4Value = A4Grid.value;
let A5Value = A5Grid.value;
let A6Value = A6Grid.value;

let B1Value = B1Grid.value;
let B2Value = B2Grid.value;
let B3Value = B3Grid.value;
let B4Value = B4Grid.value;
let B5Value = B5Grid.value;
let B6Value = B6Grid.value;

let C1Value = C1Grid.value;
let C2Value = C2Grid.value;
let C3Value = C3Grid.value;
let C4Value = C4Grid.value;
let C5Value = C5Grid.value;
let C6Value = C6Grid.value;

let D1Value = D1Grid.value;
let D2Value = D2Grid.value;
let D3Value = D3Grid.value;
let D4Value = D4Grid.value;
let D5Value = D5Grid.value;
let D6Value = D6Grid.value;

let E1Value = E1Grid.value;
let E2Value = E2Grid.value;
let E3Value = E3Grid.value;
let E4Value = E4Grid.value;
let E5Value = E5Grid.value;
let E6Value = E6Grid.value;

let F1Value = F1Grid.value;
let F2Value = F2Grid.value;
let F3Value = F3Grid.value;
let F4Value = F4Grid.value;
let F5Value = F5Grid.value;
let F6Value = F6Grid.value;
//#endregion

//?input field
//#region
let gridInpA1 = document.getElementById('gridInpA1');
let gridInpA2 = document.getElementById('gridInpA2');
let gridInpA3 = document.getElementById('gridInpA3');
let gridInpA4 = document.getElementById('gridInpA4');
let gridInpA5 = document.getElementById('gridInpA5');
let gridInpA6 = document.getElementById('gridInpA6');

let gridInpB1 = document.getElementById('gridInpB1');
let gridInpB2 = document.getElementById('gridInpB2');
let gridInpB3 = document.getElementById('gridInpB3');
let gridInpB4 = document.getElementById('gridInpB4');
let gridInpB5 = document.getElementById('gridInpB5');
let gridInpB6 = document.getElementById('gridInpB6');

let gridInpC1 = document.getElementById('gridInpC1');
let gridInpC2 = document.getElementById('gridInpC2');
let gridInpC3 = document.getElementById('gridInpC3');
let gridInpC4 = document.getElementById('gridInpC4');
let gridInpC5 = document.getElementById('gridInpC5');
let gridInpC6 = document.getElementById('gridInpC6');

let gridInpD1 = document.getElementById('gridInpD1');
let gridInpD2 = document.getElementById('gridInpD2');
let gridInpD3 = document.getElementById('gridInpD3');
let gridInpD4 = document.getElementById('gridInpD4');
let gridInpD5 = document.getElementById('gridInpD5');
let gridInpD6 = document.getElementById('gridInpD6');

let gridInpE1 = document.getElementById('gridInpE1');
let gridInpE2 = document.getElementById('gridInpE2');
let gridInpE3 = document.getElementById('gridInpE3');
let gridInpE4 = document.getElementById('gridInpE4');
let gridInpE5 = document.getElementById('gridInpE5');
let gridInpE6 = document.getElementById('gridInpE6');

let gridInpF1 = document.getElementById('gridInpF1');
let gridInpF2 = document.getElementById('gridInpF2');
let gridInpF3 = document.getElementById('gridInpF3');
let gridInpF4 = document.getElementById('gridInpF4');
let gridInpF5 = document.getElementById('gridInpF5');
let gridInpF6 = document.getElementById('gridInpF6');
//#endregion

let missCounter = 0;
let wrongLetter = 0;

let verificationStage = 0;

let attemptedWord;


//!use inner value variables
function attemptConcat(a, b, c, d, e, f) {
    
    attemptedWord = a.concat(b, c, d, e, f);
    console.log(attemptedWord)
}

//?letter coloring
//!use gridPos variables
//#region
function correctLetter(a) {
    a.style.backgroundcolor = "mediumseagreen";
    a.style.color = "white";
}

function correctLetterWrongPos(a) {
    a.style.backgroundcolor = "indianred";
    a.style.color = "white";
}

function letterNotPresent(a) {
    a.style.backgroundcolor = "gray";
    a.style.color = "white";
}
//#endregion

//?text input switch
//#region
function enableInputs(a, b, c, d, e, f) {
    a.disabled = false;
    b.disabled = false;
    c.disabled = false;
    d.disabled = false;
    e.disabled = false;
    f.disabled = false;
}

function disableInputs(a, b, c, d, e, f) {
    a.disabled = true;
    b.disabled = true;
    c.disabled = true;
    d.disabled = true;
    e.disabled = true;
    f.disabled = true;
}
//#endregion

let tempGrid1;
let tempValue1;

//?row changer
function rowChanger(verificationStage) {

    switch (verificationStage) {
        case 0:
            tempGrid1 = A1Grid;
            tempGrid2 = A2Grid;
            tempGrid3 = A3Grid;
            tempGrid4 = A4Grid;
            tempGrid5 = A5Grid;
            tempGrid6 = A6Grid;

            tempValue1 = A1Value;
            tempValue2 = A2Value;
            tempValue3 = A3Value;
            tempValue4 = A4Value;
            tempValue5 = A5Value;
            tempValue6 = A6Value;
            break;
        case 1:
            tempGrid1 = B1Grid;
            tempGrid2 = B2Grid;
            tempGrid3 = B3Grid;
            tempGrid4 = B4Grid;
            tempGrid5 = B5Grid;
            tempGrid6 = B6Grid;

            tempValue1 = B1Value;
            tempValue2 = B2Value;
            tempValue3 = B3Value;
            tempValue4 = B4Value;
            tempValue5 = B5Value;
            tempValue6 = B6Value;
            break;
        case 2:
            tempGrid1 = C1Grid;
            tempGrid2 = C2Grid;
            tempGrid3 = C3Grid;
            tempGrid4 = C4Grid;
            tempGrid5 = C5Grid;
            tempGrid6 = C6Grid;

            tempValue1 = C1Value;
            tempValue2 = C2Value;
            tempValue3 = C3Value;
            tempValue4 = C4Value;
            tempValue5 = C5Value;
            tempValue6 = C6Value;
            break;
        case 3:
            tempGrid1 = D1Grid;
            tempGrid2 = D2Grid;
            tempGrid3 = D3Grid;
            tempGrid4 = D4Grid;
            tempGrid5 = D5Grid;
            tempGrid6 = D6Grid;
            
            tempValue1 = D1Value;
            tempValue2 = D2Value;
            tempValue3 = D3Value;
            tempValue4 = D4Value;
            tempValue5 = D5Value;
            tempValue6 = D6Value;
            break;
        case 4:
            tempGrid1 = E1Grid;
            tempGrid2 = E2Grid;
            tempGrid3 = E3Grid;
            tempGrid4 = E4Grid;
            tempGrid5 = E5Grid;
            tempGrid6 = E6Grid;

            tempValue1 = E1Value;
            tempValue2 = E2Value;
            tempValue3 = E3Value;
            tempValue4 = E4Value;
            tempValue5 = E5Value;
            tempValue6 = E6Value;
            break;
        case 5:
            tempGrid1 = F1Grid;
            tempGrid2 = F2Grid;
            tempGrid3 = F3Grid;
            tempGrid4 = F4Grid;
            tempGrid5 = F5Grid;
            tempGrid6 = F6Grid;

            tempValue1 = F1Value;
            tempValue2 = F2Value;
            tempValue3 = F3Value;
            tempValue4 = F4Value;
            tempValue5 = F5Value;
            tempValue6 = F6Value;
            break;
    }
}




//?actual verification step
//* stands for: I Don't Even Know anymore. I still dont.
function ideka() {

    for (let i = 0; i < 6; i++) {
        let styleChange = i;

        

        if (attemptedWord.substr(i, 1) === pickedWord[i]) {

            switch (styleChange) {
                case 0:
                    correctLetter(tempGrid1);
                    break;

                case 1:
                    correctLetter(tempGrid2);
                    break;

                case 2:
                    correctLetter(tempGrid3);
                    break;

                case 3:
                    correctLetter(tempGrid4);
                    break;

                case 4:
                    correctLetter(tempGrid5);
                    break;

                case 5:
                    correctLetter(tempGrid6);
                    break;
            }
        } else if (pickedWord.includes(attemptedWord.substr(i, 1))) {
            missCounter++;
            switch (styleChange) {
                case 0:
                    correctLetterWrongPos(tempGrid1);
                    break;

                case 1:
                    correctLetterWrongPos(tempGrid2);
                    break;

                case 2:
                    correctLetterWrongPos(tempGrid3);
                    break;

                case 3:
                    correctLetterWrongPos(tempGrid4);
                    break;

                case 4:
                    correctLetterWrongPos(tempGrid5);
                    break;

                case 5:
                    correctLetterWrongPos(tempGrid6);
                    break;
            }
        } else {
            wrongLetter++;
            switch (stylechange) {
                case 0:
                    wrongLetter(tempGrid1);
                    break;

                case 1:
                    wrongLetter(tempGrid2);
                    break;

                case 2:
                    wrongLetter(tempGrid3);
                    break;

                case 3:
                    wrongLetter(tempGrid4);
                    break;

                case 4:
                    wrongLetter(tempGrid5);
                    break;

                case 5:
                    wrongLetter(tempGrid6);
                    break;
            }
        }
    }
}

function verifyAnswer() {

    if (tempValue1.length == 1 && tempValue2.length == 1 && tempValue3.length == 1 && tempValue4.length == 1 && tempValue5.length == 1 && tempValue6.length == 1) {
        
        rowChanger(verificationStage);
        attemptConcat(tempValue1, tempValue2, tempValue3, tempValue4, tempValue5, tempValue6);

        

    }
}

//?restart
function reset() {
    A1Grid.style.backgroundColor = "white";
    A1Grid.style.color = "black";
    A2Grid.style.backgroundColor = "white";
    A2Grid.style.color = "black";
    A3Grid.style.backgroundColor = "white";
    A3Grid.style.color = "black";
    A4Grid.style.backgroundColor = "white";
    A4Grid.style.color = "black";
    A5Grid.style.backgroundColor = "white";
    A5Grid.style.color = "black";
    A6Grid.style.backgroundColor = "white";
    A6Grid.style.color = "black";

    B1Grid.style.backgroundColor = "white";
    B1Grid.style.color = "black";
    B2Grid.style.backgroundColor = "white";
    B2Grid.style.color = "black";
    B3Grid.style.backgroundColor = "white";
    B3Grid.style.color = "black";
    B4Grid.style.backgroundColor = "white";
    B4Grid.style.color = "black";
    B5Grid.style.backgroundColor = "white";
    B5Grid.style.color = "black";
    B6Grid.style.backgroundColor = "white";
    B6Grid.style.color = "black";

    C1Grid.style.backgroundColor = "white";
    C1Grid.style.color = "black";
    C2Grid.style.backgroundColor = "white";
    C2Grid.style.color = "black";
    C3Grid.style.backgroundColor = "white";
    C3Grid.style.color = "black";
    C4Grid.style.backgroundColor = "white";
    C4Grid.style.color = "black";
    C5Grid.style.backgroundColor = "white";
    C5Grid.style.color = "black";
    C6Grid.style.backgroundColor = "white";
    C6Grid.style.color = "black";

    D1Grid.style.backgroundColor = "white";
    D1Grid.style.color = "black";
    D2Grid.style.backgroundColor = "white";
    D2Grid.style.color = "black";
    D3Grid.style.backgroundColor = "white";
    D3Grid.style.color = "black";
    D4Grid.style.backgroundColor = "white";
    D4Grid.style.color = "black";
    D5Grid.style.backgroundColor = "white";
    D5Grid.style.color = "black";
    D6Grid.style.backgroundColor = "white";
    D6Grid.style.color = "black";

    E1Grid.style.backgroundColor = "white";
    E1Grid.style.color = "black";
    E2Grid.style.backgroundColor = "white";
    E2Grid.style.color = "black";
    E3Grid.style.backgroundColor = "white";
    E3Grid.style.color = "black";
    E4Grid.style.backgroundColor = "white";
    E4Grid.style.color = "black";
    E5Grid.style.backgroundColor = "white";
    E5Grid.style.color = "black";
    E6Grid.style.backgroundColor = "white";
    E6Grid.style.color = "black";

    F1Grid.style.backgroundColor = "white";
    F1Grid.style.color = "black";
    F2Grid.style.backgroundColor = "white";
    F2Grid.style.color = "black";
    F3Grid.style.backgroundColor = "white";
    F3Grid.style.color = "black";
    F4Grid.style.backgroundColor = "white";
    F4Grid.style.color = "black";
    F5Grid.style.backgroundColor = "white";
    F5Grid.style.color = "black";
    F6Grid.style.backgroundColor = "white";
    F6Grid.style.color = "black";

    enableInputs (gridInpA1, gridInpA2, gridInpA3, gridInpA4, gridInpA5, gridInpA6);
    disableInputs(gridInpB1, gridInpB2, gridInpB3, gridInpB4, gridInpB5, gridInpB6);
    disableInputs(gridInpC1, gridInpC2, gridInpC3, gridInpC4, gridInpC5, gridInpC6);
    disableInputs(gridInpD1, gridInpD2, gridInpD3, gridInpD4, gridInpD5, gridInpD6);
    disableInputs(gridInpE1, gridInpE2, gridInpE3, gridInpE4, gridInpE5, gridInpE6);
    disableInputs(gridInpF1, gridInpF2, gridInpF3, gridInpF4, gridInpF5, gridInpF6);

    pickedWord = dataBank[Math.floor(Math.random() * dataBank.length)];
    console.log(pickedWord)
}

rowChanger(verificationStage);

