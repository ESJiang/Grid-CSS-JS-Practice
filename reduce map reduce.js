// Q1 calculate the sum of each x
const x = [
    {
        x: 1,
    },
    {
        x: 2,
    },
    {
        x: 3,
    },
];
console.log(
    "sum",
    x.reduce((result, item) => result + item.x, 0)
);

// Q2 create a dictionary with category as the key and an array of products as the value
const products = [
    {
        name: "Product 1",
        price: 20,
        category: "Electronics",
    },
    {
        name: "Product 2",
        price: 30,
        category: "Clothes",
    },
    {
        name: "Product 3",
        price: 40,
        category: "Electronics",
    },
    {
        name: "Product 4",
        price: 50,
        category: "Clothes",
    },
    {
        name: "Product 5",
        price: 60,
        category: "Clothes",
    },
    {
        name: "Product 6",
        price: 70,
        category: "Electronics",
    },
    {
        name: "Product 7",
        price: 80,
        category: "Clothes",
    },
    {
        name: "Product 8",
        price: 90,
        category: "Electronics",
    },
];
const m = Object.fromEntries(products.reduce((result, item) => result.set(item.category, (result.get(item.category) ?? []).concat(item)), new Map()));
console.log(m);

// Q3 calculate avage price for each category
const m1 = Object.keys(m).map(value => ({
    category: value,
    average: m[value].reduce((result, item) => result + item.price, 0) / m[value].length,
}));
console.log(m1);
