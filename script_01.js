/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
function test() 
{
    console.log("Hi Mohammed");    
}


/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Aufruf (call)
// ausgabeNamen();

// Funktion
function ausgabeNamen()
{
    let firstName = "Patrick";      // what happens in Las Vegas, ...
    console.log("Hi "+ firstName + "!");
    console.log(firstName);
}

// console.log(firstName);  // .. stays in Vegas!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

function ausgabeNamenParam(firstName) {

    const cond1 = (firstName == "");
    const cond2 = (firstName == undefined);

    if (cond1 || cond2)
    {
        firstName = "Nobody";    
    }

    // let firstName = "Patrick"; Variablen --> Parameter
    console.log("Hi " + firstName + "!");
}

// ausgabeNamenParam("Anton"); // Argument(e) / args
// ausgabeNamenParam("Milda");
// ausgabeNamenParam();
// ausgabeNamenParam(prompt("Vorname?:"));

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

function ausgabeNamenParams(firstName,familyName) {
    console.log("Hi " + firstName + " " + familyName +"!"); 
}

// ausgabeNamenParams("Max","Mütze");
// ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname?"));
