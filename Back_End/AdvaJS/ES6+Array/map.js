const numbers = [10, 20, 30, 40];

const results = numbers.map((numbers) => {
    return numbers * 2;
});

console.log(results);

const Oprices = [100, 200, 300, 400];

const newPrices = Oprices.map((price) => {
    return price + price * 0.1
});

console.log(newPrices);

const prices = [100, 250, 500, 1000];

const discount = prices.map((price) => {
    return price - price * 0.2
});

console.log(discount);