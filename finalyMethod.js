const isSuccessed = true;

const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        if(isSuccessed) {
            resolve("Success!Value passed to resolve function")
        }else{
            reject("Error!Error passed to reject function")
        }
    }, 2000);
})

// Mетоди then() і catch()
promise.then(value => {
    console.log(value)
})
.catch(error => {
    console.log(error)
})
.finally(() => console.log("Promise settled"))