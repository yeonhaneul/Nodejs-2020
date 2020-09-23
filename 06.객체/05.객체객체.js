// object in object

let cart = [
    {
        product:{name: '치약', vol: 500, price: 3000},
        quantity: 5
    },
    {
        product:{name: '비누', vol: 200, price: 1000},
        quantity: 4
    }
];

console.log(JSON.stringify(cart));
console.log(cart[0].product.price);

// 카트에서 물건 값의 합
let sum = 0;
for (let item of cart) {
    sum += item.product.price * item.quantity;
}
console.log(sum);
