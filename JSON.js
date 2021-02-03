

  const user = {id: 245, name: "Masud",
lover:{
    name:"jamila",
    age:22,
},
friendsAge:[17,18,19,20,21],
friends:["kamal", "jamal","Damal"]
}
// {"id":245,"name":"Masud"}

// js ka JSON a convert...
const userJSON = JSON.stringify(user);
console.log(userJSON);

// JSON ka js a parsing....
const userFromJSON = JSON.parse(userJSON);
console.log(userFromJSON);