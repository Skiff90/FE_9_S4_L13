const isSuccessed = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccessed) {
      resolve("Success!Value passed to resolve function");
    } else {
      reject("Error!Error passed to reject function");
    }
  }, 2000);
});

console.log("Before promise.then(");

promise.then((value) => {
  console.log("onResolve call insede primise.then()");
  console.log(value);
},
error =>{
    console.log("onReject call inside prmise.then()")
    console.log(error)
});

console.log("After promise.then()")
