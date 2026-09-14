const drivers = [
    { name: "Max", points: 314 },
    { name: "Charles", points: 248 },
    { name: "Lando", points: 276 },
    { name: "George", points: 190 }
];

const topDrivers = drivers
    .filter(driver => driver.points > 250)
    .map(driver => driver.name);


console.log(topDrivers);

const GOAT = drivers
    .find(driver => driver.points == 276)
    // .map(driver => driver.name);

console.log(GOAT);

const Is = drivers.some(driver => driver > 400);

console.log(Is);

const total = drivers.reduce((total, driver) => {
    return total+driver.points
}, 0)

console.log(total);

const laps = [1.21, 1.18, 1.25, 1.19];

const [first, , third] = laps;

console.log(third);

const driver = {
    hero: "Max",
    team: "Red Bull",
    points: 314
};

const {
    hero,
    ...details
} = driver;

console.log(hero);
console.log(details);