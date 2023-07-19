//array sort

//var number = [65, 10, 22, 2, 99, 1, 9, 33, 44, 54];

//console.log(number.sort(function (a, b) { return a - b }));

/*
var res = number.map(function (a) {
    return a * 5;
});
console.log(res);
*/

/*
number.forEach(f = (a) =>{
    console.log(a * 5);
});
*/

/*
number.forEach(f = (val, index, number) => {
    number[index] = val * 5;
})
console.log(number);
*/

/*
var floatNumbetr = 87.342422;
console.log(floatNumbetr.toFixed(2));
*/

/*
var number = [65.544, 10.9746, 22.646, 2.9156, 99, 1];
var res = number.map(function (a) {
    return (a * 5).toFixed(2);
});
console.log(res);
*/

var object = {
    name: "Pluto",
    email: "pluto@gmail.com",
    university: {
        name1: "MIT",
        name2: "AUST"
    }
};
console.log(object.university.name2);