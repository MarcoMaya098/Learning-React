// const user = {
//     "name": "Marco",
//     "lastname": "Moreno",
//     "age": 20,
//     "hobbies ": ["run", "code", "eat"],
//     "address": {
//         "street" : "123 main",
//         "Moreno" : "Tijuana"
//     },
//     "married" : false
// }

const user = {
    name: "Marco",
    lastname : "Moreno",
    age: 20,
    hobbies : ["run", "code", "eat"],
    address : {
        "street" : "123 main",
        "Moreno" : "Tijuana"
    },
    married : false
}

// console.log(user)
// console.log(user.name)
// console.log(user.address)
// console.log(JSON.stringify(user))


const friends = [
    { "name": "joe", "nickname" : "js12"},
    { "name": "mar", "nickname" : "mar12"},
    { "name": "asd", "nickname" : "asd12"},
    { "name": "mart", "nickname" : "mart12"},
    { "name": "ray", "nickname" : "ray12"},
]

user.friends = friends;

let output = '';

for (let i = 0; i < friends.length; i++) {
    output = output + `<li>${friends[i].name} - ${friends[i].nickname} </li>`
}

document.getElementById('people').innerHTML = output;


JSON.parse('{"name":"Marco","lastname":"Moreno","age":20,"hobbies":["run","code","eat"],"address":{"street":"123 main","Moreno":"Tijuana"},"married":false,"friends":[{"name":"joe","nickname":"js12"},{"name":"mar","nickname":"mar12"},{"name":"asd","nickname":"asd12"},{"name":"mart","nickname":"mart12"},{"name":"ray","nickname":"ray12"}]}')


