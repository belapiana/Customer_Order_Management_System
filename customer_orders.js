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

