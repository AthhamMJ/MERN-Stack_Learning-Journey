const driver = {name: "Max Verstappen", team: "Red Bull", number: 3, points: 100, laps: [1.14, 1.15, 1.12]};

const average = calcAvg(driver.laps);

function calcAvg(times){
    let sum = 0
    for(let i = 0; i < times.length; i++){
        sum+= times[i]
    }
    return sum / times.length
};

console.log(driver)
console.log(`The Average Lap time of ${driver.name} is ${average}`)

// const body = document.body; used if we do all from javascript
const div = document.querySelector("#data");
const p = document.createElement('p');
const p1 = document.createElement('p');


p.textContent = `Points : ${driver.points}`

div.append(`Driver : ${driver.name}`,
            " " ,
            `Team : ${driver.team}`,
            " ",
            `Number : ${driver.number}`,
            " ", 
            `Average L.Time : ${average}`);
div.append(p);
div.append(p1);

            
const button = document.querySelector("#btn");
const reset = document.getElementById('resetbtn');
const purple = document.getElementById('purple')


button.addEventListener("click", function() {
    driver.points += 1

    p.textContent = `Points : ${driver.points}`
})

reset.addEventListener("click", function() {
    driver.points = 100;
    p.textContent = `Points : ${driver.points}`
})

// purple.addEventListener("click", function(){
//     let max = driver.laps[0]
//     for(let i = 0; i < driver.laps; i++){
//         if(max < driver.laps[i]){
//              max = driver.laps[i]
//         }
//         else continue
//     }
//     p1.textContent = `Fastest Lap : ${max}`
// })


purple.addEventListener("click", () =>{
    const times = addPoints(driver.laps)

    p1.textContent = `Fastest Lap: ${times}`
})

const addPoints = (times) => {
    let max = times[0];

    for (let i = 0; i < times.length; i++) {
        if (max < times[i]) {
            max = times[i];
        }
    }

    return max;
};