const recordOne = new Promise((resolve ,reject) => {
    resolve('Video 1 Recorded')
})

const recordTwo = new Promise((resolve ,reject) => {
    resolve('Video 2 Recorded')
})

const recordThree = new Promise((resolve ,reject) => {
    resolve('Video 3 Recorded')
})

Promise.race([
    recordOne,
    recordTwo,
    recordThree
]).then((message) => {
    console.log(message)
})

