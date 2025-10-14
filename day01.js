// // Map Function In Javascript

// let arr = [10, 20, 30];

// let ansArray = arr.map((number) => {
//     return number * number;
// })

// console.log(ansArray);

//  Ex- 2) Using Map Function

// arr = [10, 20, 30]
// let ansArray = arr.map((arr) => {
//     console.log(arr * 10);
// })

// Ex-3) Print The Index Using .Map Function

// arr = [10, 100, 1000]
// let print = arr.map((Num, Index) => {
//     console.log(Num, Index);
// })

// Filter Method In Javascript 

// let arr = [10, 20, 30, 40, 41, 42, 43, 44]
// let ans = arr.filter((num) => {
//     if (num % 2 == 1) {
//         return true;
//     }
// });

// console.log(ans);

// Short Method(filter)

// let arr = [10, 20, 30, 40, 41, 42, 43, 44]
// let ans = arr.filter((num) => {
//     return num < 25;
// });

// console.log(ans);

// Ex- 2)

// let arr = [1,2,3,4,5]
// let ans = arr.filter((num)=>{
//     return num < 4;
// });

// console.log(ans);

let arr = [1, 2, 'love', 'ganu', 3, 4]
let ans = arr.filter((value) => {
    if (typeof (value) == 'string') {
        return true;
    }
    else {
        return false;
    };
});

console.log(ans);