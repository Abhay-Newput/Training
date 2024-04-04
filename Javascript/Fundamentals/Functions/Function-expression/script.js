//syntax:
// Function Expression----------->
// let sayHi = function() {
//     alert( "Hello" );
//   };

//Callback functions-------------->
/** 
 

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);

//The arguments showOk and showCancel of ask are called callback functions or just callbacks.

*/

/* 

// Function Declaration
function sum(a, b) {
    return a + b;
  }

// Function Expression
let sum = function(a, b) {
    return a + b;
  };
  
*/
