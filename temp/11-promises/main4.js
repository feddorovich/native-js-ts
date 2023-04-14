axios.get('https://jsonplaceholder.typicode.com/todos/2')
    .then((user) => user.data)
    .then(data => data.id)
    .then((id) => {
        console.log(id)
        return id + 5
    })
    .then((number) => {
        console.log(number)
        return Promise.resolve(number + 5)
    })
    .then((number) => {
        console.log(number)
    })

console.log('finish')