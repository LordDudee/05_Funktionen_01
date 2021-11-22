/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
function test()
{
    console.log("Hallo Anton!");
}


/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Aufruf (call)
ausgabeNamen(); 

// Funktion
function ausgabeNamen() 
{
    let firstName = "Patrick"; // what happens in Vegas, ...
    console.log("Hallo " + firstName + "!");
    console.log(firstName);
}

//console.log(firstName);  // .. stays in Vegas!

