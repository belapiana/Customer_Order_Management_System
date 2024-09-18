// Task 1: Create an Inventory Array of Product Objects

const inventory = [
    { name: 'Chocolate', price: 5, quantity: 124},
    { name: 'Lolipop', price: 1, quantity: 56},
    { name: 'Candy', price: 2, quantity: 88 },
    { name: 'Cookies', price: 6, quantity: 211 },
];

// Tak 2: Create an Orders Array of Order Objects

const orders = [];
orders.push({
    customerName: customerName,
    items: items,
    status: 'Pending'  
  });

// Task 3: Create a Function to Place an Order

function placeOrder (orderItems) {
    const inventoryItem = inventory.find(element => element.name === orderItems);
    console.log(`Error: Product '${orderItems}' not found in inventory.`);

};

placeOrder("Lolipop");