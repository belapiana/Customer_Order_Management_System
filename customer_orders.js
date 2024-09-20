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
    customerName: "Isabela",
    orderedItems: ["Chocolate", "Candy"] ,
    status: 'Pending'  
  });

// Task 3: Create a Function to Place an Order

function placeOrder (customerName, orderedItems) {
    for (let item of orderedItems) {
    const inventoryItem = inventory.find(element => element.name === item);
   
    if (inventoryItem === undefined) {
    console.log(`Error: Product '${item}' not found in inventory.`)};
    
    else if { inventoryItem.quantity -

    }}
};

placeOrder("Lolipop");