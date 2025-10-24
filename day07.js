// Math Objects methods

// console.log(Math.max(60, 30, 34, 600, 712, 89));
// console.log(Math.min(60, 300, 24, 600, 712, 80));

// console.log(Math.round(1.4));


// Date Object

// let curr = new Date();
// console.log(curr);


// let date = new Date("june 20 1997 07:15");
// console.log(date);

// let Obj = {
//     age: 18,
//     ht: 160,
//     wt: 40
// }

// console.log(Obj);
// Obj.color = 'white';

// console.log(Obj);


let src = {
    age: 20,
    ht: 160,
    wt: 35
}

let src2 = {
    name: "more",
}
let comb = Object.assign({}, src, src2)

console.log(comb);