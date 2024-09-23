// Task 1
// Initialization of array with product objects 
const inventory = [

{ name: 'Espresso', price: 3, quantity: 10 },
    
{ name: 'Latte', price: 4, quantity: 5 },
    
{ name: 'Cappuccino', price: 4, quantity: 6 },
    
{ name: 'Mocha', price: 5, quantity: 4 }
    
];

//Task 2
//Initialization of empty array
const orders = [];

// Task 3
function placeOrder (items, customerName){
    const {name, quantity} = items;
    const orderItems = inventory.find(item => item.name === name);

    if (!orderItems){
        return (" Item is not in inventory")
    } else if (quantity > orderItems.quantity){
        return ("Insufficient Stock!")
    }

    orderItems.quantity -= quantity;

    orders.push ({
        customerName : customerName,
        name : name,
        quantity : quantity,
        status : "Pending"
    });

    console.log (`Order placed for ${quantity} ${name} by ${customerName}.`); // Outputs the order for checking purposes

}

placeOrder({ name: 'Latte', quantity: 3 },"Aleyana McLeod"); 

//Task 4
function calculateOrderTotal(orders){
    return orders.reduce((total,order) => {
        const inventoryItem = inventory.find(product => product.name === order.name);
        return inventoryItem ? total + (inventoryItem.price *order.quantity) : total;
    }, 0);
}
console.log(`Order total: $${calculateOrderTotal(orders)}`);