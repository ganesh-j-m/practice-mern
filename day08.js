// Error handling

// 1) Compile time error
// 2) run time error

// console.log(x)

// try {
//     // console.log(x);
//     console.log("try block starts here");

// } catch (error) {
//     console.log("i am inside catch block")
// }

// How to generate error 

try {
    console.log(x);
}
catch (error) {
    throw new Error("bhai tu pahile khana kha ke aa", error);
}