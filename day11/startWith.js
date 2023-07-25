
var students = [
    { name: "Pluto", age: 44, email: "pluto@mail.com", phone: "01709090909" },
    { email: "pluto1@mail.com", name: "Pluto1", age: 45, phone: "01809090909" },
    { age: 45, email: "pluto2@mail.com", name: "Pluto2", phone: "+8801709090909" },
    { age: 45, email: "pluto2@mail.com", name: "Pluto2", phone: "+008801709090909" },
    { name: "Pluto", age: 44, email: "pluto@mail.com", phone: "01309090909" },
    { email: "pluto1@mail.com", name: "Pluto1", age: 45, phone: "01809090909" },
    { age: 45, email: "pluto2@mail.com", name: "Pluto2", phone: "+8801309090909" },
    { age: 45, email: "pluto2@mail.com", name: "Pluto2", phone: "+008801309090909" }
]

console.log(students.filter((s) => {
    return (s.phone.startsWith("017") || s.phone.startsWith("+88017") || s.phone.startsWith("+0088017") ||
        s.phone.startsWith("013") || s.phone.startsWith("+88013") || s.phone.startsWith("+0088013"));
}));



var number = [44, 33, 87, 12];
console.log(number);

//add 89 to last
//add 67 to first

number[number.length] = 89;
var num2 = [];
num2[0] = 67;
for (var i = 1; i < number.length + 1; i++)
    num2[i] = number[i - 1];
console.log(num2);


var number = [44, 33, 87, 12];
number.push(89);
number.unshift(67);
console.log(number);

