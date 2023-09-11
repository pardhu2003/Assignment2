const details = {
    name:"Pardhu",
    id:"20kt1a4213",
    gender:"Male",
    age:18,
    email:"xyz@gmail.com",
    working:"none"
};

//print entire object retrive data
console.log(details)

//printing individual details data(Retrive)
console.log(details.name);
console.log(details.email);
console.log(details.age);
console.log(details.id);

//Adding data to object(create)
details.state="Andhra Pradesh"
details.country = "India"
console.log(details)

//Update the details
details.age = 20
details.email = "abc@gmail.com"
console.log(details);

//Delete the details
delete details.working;
console.log(details);