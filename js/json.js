const shop = {
    owner: 'Rafee',
    address: { street: 'CNG Pump', city: 'Dhaka', country: 'Bangladesh'},
    products: ['Laptop', 'Mic', 'Monitor', 'Keyboard', 'Mouse'],
    revenue: 6000,
    isOpen: true,
    isNew: false
};
const stringify = JSON.stringify(shop);
const parsed = JSON.parse(stringify);
console.log(shop);
console.log(stringify);
console.log(parsed);