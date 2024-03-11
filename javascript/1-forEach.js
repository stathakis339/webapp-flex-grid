const numbers = [45, 2, 56, 15]
numbers.forEach(function(x){
    console.log(x)
})

const data = [
    {username:"admin", name:"admin", username:"xxxx"},
    {username:"user1", name:"name1", username:"username1", email:"user1@aueb.gr"},
    {username:"user2", name:"name2", username:"username2"}
]

data.forEach(function(val){
    console.log(val.username, val.name);
})