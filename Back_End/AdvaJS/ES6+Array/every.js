// Let's check if all the items are less than the 1000 bucks

const items = [
    { name: 'Bike',     Price: 100},
    { name: 'TV',       Price: 200},
    { name: 'Album',    Price: 10},
    { name: 'Book',     Price: 5},
    { name: 'Phone',    Price: 500},
    { name: 'Computer', Price: 1000},
    { name: 'Keyboard', Price: 25},
]

const hasExpensiveItems = items.every((item) => {
    return item.price <= 1000
})

console.log(hasExpensiveItems)