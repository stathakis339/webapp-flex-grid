const numbers = [34, 23, 1, 23]

const numbers2 = numbers.map(function(val){  //ekxorei apotelesmata se enann allon pinaka
    return val*2;
})

console.log(numbers2);

const data = [
    {username:"admin", name:"admin", surname:"xxxx"},
    {username:"user1", name:"name1", surname:"username1", email:"user1@aueb.gr"},
    {username:"user2", name:"name2", surname:"username2"}
]

let item = {
    username: "user1",
    name: "name2xxxx",
    surname: "surname2xxx"
}

let items = data.map(obj => {
    if (obj.username === item.username) {
        return {...obj, surname:item.surname, name:item.name}
    }

    return obj
})

console.log(items)