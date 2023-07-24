/*
var number = ['Pluto', 'world', 43, 45.98, 32, false, 43, true];
var result = number.map(function (element) {
    if (typeof element == "number") {
        element *= 5;
        return element.toFixed(2);
    }
    return element;
})
console.log(result);
*/

/*
var number = ['Pluto', 'world', 43, 45.98, 32, false, 43, true];
var result = number.filter(function (element) {
    //element 'world'
    //type of 'world' = 'string'
    return typeof element == 'number';
})
console.log(result);
*/

/*
var number = ['Jane', 87, 'Jene', '98', false, 34, 32.3, true];
var result = number.filter(function (element) {

    return typeof element == 'string';
})
console.log(result);
*/

var students = [
    { name: "Pluto", age: 44, email: "pluto@mail.com" },
    { email: "pluto1@mail.com", name: "Pluto1", age: 45 },
    { age: 45, email: "pluto2@mail.com", name: "Pluto2" }
]
students.map(f = (s) => {
    if (s.age > 44) 
        s.age *= 2;
    return s;
})

var res = students.filter(f = (s) => {
    return s.age > 45;
        
})
console.log(res);