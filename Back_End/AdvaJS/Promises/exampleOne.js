const userleft = false
const userWatchingCatmeme = true


function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if(userleft){
            reject ({
                name: 'User Left',
                message: ':('
            })
        }else if (userWatchingCatmeme) {
            reject ({
                name: 'User Watching cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        }else {
            resolve ('Thumbs up and Subscribe')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Success' + message)
}).then((message) => {
    console.log('Success' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})