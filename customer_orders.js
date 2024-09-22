// Task 1: Create an Inventory Array of Product Objects

const inventory = [
    { name: 'Chocolate', price: 5, quantity: 124},
    { name: 'Lolipop', price: 1, quantity: 56},
    { name: 'Candy', price: 2, quantity: 88 },
    { name: 'Cookies', price: 6, quantity: 211 },
];

// Tak 2: Create an Orders Array of Order Objects

const orders = [];

// Task 3: Create a Function to Place an Order

function placeOrder (customerName, orderedItems) {
    for (let item of orderedItems) {
        const inventoryItem = inventory.find(element => element.name === item.name);

     if (inventoryItem === undefined) {
     console.log(`Error: Product '${item.name}' not found in inventory.`);
    return; 
        
} else if (inventoryItem.quantity < item.quantity) {
        console.log(`Error:'${item.name} is not in stock.`)
    return; 
        }
    }

    for (let item of orderedItems) {
        const inventoryItem = inventory.find(element => element.name === item.name);
        inventoryItem.quantity -= item.quantity; 
    }
    orders.push({
        customerName: customerName,
        items: orderedItems,
        status: 'Pending',
    });
};

// Task 4: Create a Function to Calculate Total for an Order

function calculateOrderTotal(order) {
    let total = 0;

    for (let item of order.items) {
        const inventoryItem = inventory.find(element => element.name === item.name);
        
 if (inventoryItem) {
            total += inventoryItem.price * item.quantity; 
 } else {
            console.log(`Warning: Product '${item.name}' not found in inventory.`);
        }
    }
    return total };

    // Task 5: Create a Function to Mark an Order as Completed

 function completeOrder(customerName) {
       
 const order = orders.find(a => a.customerName === customerName);

    if (order) {
            order.status = 'Completed'; 
            console.log(`Order for ${customerName} was completed.`);
    } else {
            console.log(`Error: order for '${customerName}' not found.`);
        }
    }; 

   // Task 6: Create a Function to Check Pending Orders

 function checkPendingOrders() {
let hasPendingOrders = false; 

for (let order of orders) {
if (order.status === 'Pending') {
hasPendingOrders = true; 
    console.log(`Customer: ${order.customerName}`);
console.log('Items:');
            
for (let item of order.items) {
     console.log(`  - ${item.name}: ${item.quantity}`);
            }
     console.log(`Status: ${order.status}`);
     console.log('---'); 
        }
    }

    if (hasPendingOrders === undefined) {
        console.log('No pending orders found.');
    }
};