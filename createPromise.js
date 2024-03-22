// Очікування(pending) - початковий стан під час створення промісу.
// Виконано(fullfiled) - операція виконана з будь яким результатом.
// Відхилено(rejected) - операція відхилена з помилкою(помилка буде обов'язково).

// Відмінність промісу і колбеку-функції
// 1.
// Колбеки(callback) - це функції
// Обіцянки(Primise) - це об'єкти.
// 2.
// колбеки - із зовнішнього коду у внутрішній.
// обіцянки(проміси) - із внутрішнього коду у зовнішній.
// 3.
// Колдеки обробляють запершення операції
// Проміси нічого не обробляють
// 4
// Колбеки можуть обробляти декілька подій
// Проміси пов'язані лише з однією подією.

// Проміс створюється як екзепляр класу Promise
// const promise = new Promise((resolve,reject) =>{
//     // Тут буде якась асинхронна операція
// })

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

// метод finally()
