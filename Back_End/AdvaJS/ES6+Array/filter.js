const laps = [1.42, 1.38, 1.51, 1.35, 1.47];

const fastestLap = laps.filter((times) => {
    return times < 1.4;
})

console.log(fastestLap);

const WDC = [
    { name: "Max", points: 314 },
    { name: "Charles", points: 248 },
    { name: "Lando", points: 276 },
    { name: "George", points: 190 }
];

const champs = WDC.filter((driver) => {return driver.points > 250});
const nameOnly = champs.map((name) => {
    return driver.name;
});


console.log(nameOnly);