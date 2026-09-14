const items = [
    { name: 'Bike',     Price: 100},
    { name: 'TV',       Price: 200},
    { name: 'Album',    Price: 10},
    { name: 'Book',     Price: 5},
    { name: 'Phone',    Price: 500},
    { name: 'Computer', Price: 1000},
    { name: 'Keyboard', Price: 25},
]

const foundItem = items.find((item) => {
    return item.Price > 100
})

console.log(foundItem);