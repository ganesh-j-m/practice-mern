// Classes && Object in Js

// class human {
//     name = "more"
//     age = 20
//     year = "2nd"

//     walking() {
//         console.log("i am Walking");
//     }
// };

// let obj = new human();

// console.log(obj.walking);

// class human {
//     age = 90;
//     #pan = 1111;
//     mo = 9172201258;
//     walking() {
//         console.log("this is my private pan number", this.#pan)
//     }
// }

// let data = new human();

// console.log(data.walking());

class Human {
    age = 85
    name = "More"
    #account = 2344

    history() {
        console.log("A,B", this.#account);
    }
};

let obj = new Human();

console.log(obj.history());