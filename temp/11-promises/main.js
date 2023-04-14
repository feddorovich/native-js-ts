const promise1 = axios.get('https://jsonplaceholder.typicode.com/todos/1')

// pending
promise1.then((response) => {
    console.log(response.data);
}).catch((error) => {
    console.log(error)
})

//pending
const promise2 = axios.get('https://jsonplaceholder.typicode.com/todos/2')

promise2.then((data) => {
        // resolved (fulfilled)
        console.log(data)
        console.log(data.data)
    })
    .catch((error) => {
        // rejected
        console.warn('ERROR -> ' + error)
    })
    .finally(() => {
        console.log('finaly')
    })

console.log('finish')

const otherPromise = Promise.all([promise1, promise2])

otherPromise
    .then(([data1, data2]) => {
    console.log(data1.data.id)
    console.log(data2.data.id)
})
.catch(() => {
    console.log('error')
})

const setteledPromise = Promise.allSettled([promise1, promise2])

setteledPromise
    .then(([data1, data2]) => {
        data1 ? console.log(data1) : console.warn('No data 1')
        data2 ? console.log(data2) : console.warn('No data 2')
})
.catch((error) => {
    console.log(error)
})