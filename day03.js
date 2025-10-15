// function sayMyName(finalname) {
//     console.log(finalname);
// };

// sayMyName("Ganu");

// Function Expression 

let greet = function () {
    console.log("greeting for the day")
}
greetMe(greet, "Babbar");

function greetMe(greet, fullname) {
    console.log("hello", fullname)
    greet();
}