const items = [
    { name: 'Bike',     Price: 100},
    { name: 'TV',       Price: 200},
    { name: 'Album',    Price: 10},
    { name: 'Book',     Price: 5},
    { name: 'Phone',    Price: 500},
    { name: 'Computer', Price: 1000},
    { name: 'Keyboard', Price: 25},
]

// Similar to like the for loop. Don't want to write the clunky amount of line

items.forEach((item) => {
    console.log(item.name)
})