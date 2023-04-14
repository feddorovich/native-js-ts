const promise1 = axios.get('https://jsonplaceholder.typicode.com/todos/1');

promise1.then((response) => {
    console.log(response.data);
}).catch((error) => {
    console.log(error);
});

console.log('finish')