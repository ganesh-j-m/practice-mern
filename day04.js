// Global Scope

var age = 30;

console.log(age);

{
    console.log(age);
};
if (true) {
    console.log(age);
};

function sayHello(a, b) {
    console.log(a + b, age);
}
sayHello(10, 10);

for (let i = 0; i < 10; i++) {
    console.log("loop", age)
}