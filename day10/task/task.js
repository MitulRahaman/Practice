var students = [
    { name: "Pluto", age: 44, email: "pluto@mail.com", phone: "01709090909" },
    { email: "pluto1@mail.com", name: "Pluto1", age: 45, phone: "01809090909" },
    { age: 45, email: "pluto2@mail.com", name: "Pluto2", phone: "01709090909" }
]

console.log(students.filter(f = (s) => {
    return s.phone.indexOf("7") == 2;
}));