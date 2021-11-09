//array for cart
let cart = [];

function addItem(){
    let item ={
        name: "English Ivy",
        price: 4.99
    };

    cart.push(item);
}

function checkOut(){
    let total = 0;
    for(let item of cart){
        total += item.price;
        console.log(`${item.name} for ${item.price} dollars`);
    }
    console.log(`Grand total: ${total} dollars.`)
}

//array of objects in store
let plants = [
    {
        name: "Spider Plant",
        price: 9.99
    },
    {
        name: "Dragon Fruit",
        price: 10.99
    },
    {
        name: "Snake Plant",
        price: 9.99
    },
    {
        name: "Devil's Ivy",
        price: 8.99
    },
    {
        name: "Philodendron",
        price: 29.99
    },
    {
        name: "Juniper Bonsai",
        price: 39.99
    }

]
//looping through array to find matching value
let plant = plants.filter(plant => plant.price === 9.99);
console.log(plant);

//transforming array of objects/classifying by price
let affordability = plants.map(plant => {
    if (plant.price < 20){
        return "This is affordable.";
    }
    else{
        return "This is too expensive.";
    }
});
console.log(affordability);

// for(let p in plants){
//     console.log(`Name: ${p.name} | Price: ${p.price}`)
// };

//console.log(JSON.stringify(plants, null, 2));

plants.forEach(plant => console.log(plant));

let total = plants.reduce((prev, cur) => prev + cur.price, 0);
console.log(total);
