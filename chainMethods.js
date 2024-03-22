const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(5);
    }, 2000);
});

promise
.then(value => {
    console.log(value)
    return value * 2;
})
.then(value => {
    console.log(value);
    return value * 3;
})
.then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log("Final task")
})