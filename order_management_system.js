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
function placeOrder (items, customerName){ //Declares the function that accepts the items and customerName as inputs
   //The object is essentially broken down to get the name and the quantity 
    const {name, quantity} = items;
    //The inventory is searched to find the item that matches the name
    const orderItems = inventory.find(item => item.name === name);

    // Chceks to see if the item exists
    if (!orderItems){
        return (" Item is not in inventory")
        // Checks to see if there is sufficient stock
    } else if (quantity > orderItems.quantity){
        return ("Insufficient Stock!")
    }
// As an order is placed the quantity is reduced
    orderItems.quantity -= quantity;
// Pushes the order details into the orders array
    orders.push ({
        customerName : customerName,
        name : name,
        quantity : quantity,
        status : "Pending"
    });

    console.log (`Order placed for ${quantity} ${name} by ${customerName}.`); // Provides output of the place order function to test functionality

}

placeOrder({ name: 'Latte', quantity: 3 },"Aleyana McLeod"); // Tests the function for functionality

//Task 4
function calculateOrderTotal(orders){
    //Reduces the orders array to calculate the total cost
    return orders.reduce((total,order) => {
        // Finds the item within the inventory that matches the order
        const inventoryItem = inventory.find(product => product.name === order.name);
        // Calculates the total cost if the item has been found
        return inventoryItem ? total + (inventoryItem.price *order.quantity) : total;
    }, 0);
}
console.log(`Order total: $${calculateOrderTotal(orders)}`); // Outputs the total cost 

//Task 5
function completeOrder(customerName){
    //Locates the order for the specific customer
    const orderStatus = orders.find(orderStatus => orderStatus.customerName === customerName);
// If the order is found, the status is then changed to completed if not an error message is outputted
    if (orderStatus){
        orderStatus.status = 'Completed';
        console.log(`Order for ${customerName} has been completed`)
    } else {
        console.log(`Order not found!`);
    }
}

completeOrder('Aleyana McLeod'); // Provides output of the complete order function to test functionality

//Task 6
function checkPendingOrders(customerName){
    //Finds the order for the given customer
    const orderStatus = orders.find(orderStatus => orderStatus.customerName === customerName);

// If the order is found the status is changed to pending if it is not already completed
    if (orderStatus){
        orderStatus.status = 'Pending';
        console.log (`Order for ${customerName} is pending`)
    } else if (orderStatus === 'Completed') {
        console.log(`Order is not pending`);
    } else{
        console.log(`Order not found`)
    }
}

checkPendingOrders()
