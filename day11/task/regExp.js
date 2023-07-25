var students = [
    { name: "Pluto", age: 44, email: "pluto@mail.com", phone: "01709090909" },
    { email: "pluto1@mail.com", name: "Pluto1", age: 45, phone: "01809090909" },
    { age: 45, email: "pluto2@mail.com", name: "Pluto2", phone: "+8801709090909" },
    { age: 45, email: "pluto2@mail.com", name: "Pluto2", phone: "008801709090909" },
    { name: "Pluto", age: 44, email: "pluto@mail.com", phone: "01309090909" },
    { email: "pluto1@mail.com", name: "Pluto1", age: 45, phone: "01809090909" },
    { age: 45, email: "pluto2@mail.com", name: "Pluto2", phone: "+8801309090909" },
    { age: 45, email: "pluto2@mail.com", name: "Pluto2", phone: "0088017309090909" },
]

var gp = ['017','013'];

gp.forEach((g) => {
    students.filter((s) => {
        if (s.phone[0] == '+') 
            s.phone = s.phone.substring(1);
        if (s.phone.search(/88/) == 0) 
            s.phone = s.phone.substring(2);
        if (s.phone.search(/0088/) == 0)
            s.phone = s.phone.substring(4);
        
        if (s.phone.search(g) == 0) 
            console.log(s);
    })
});