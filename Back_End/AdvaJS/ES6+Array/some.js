// Let's check if any items are less than the 100 bucks


const items = [
    { name: 'Bike',     Price: 100},
    { name: 'TV',       Price: 200},
    { name: 'Album',    Price: 10},
    { name: 'Book',     Price: 5},
    { name: 'Phone',    Price: 500},
    { name: 'Computer', Price: 1000},
    { name: 'Keyboard', Price: 25},
]

const hasExpensiveItems = items.some((item) => {
    return item.price <= 100
})

console.log(hasExpensiveItems)