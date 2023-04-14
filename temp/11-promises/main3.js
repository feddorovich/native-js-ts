const promise2 = axios.get('https://jsonplaceholder.typicode.com/todos/2')

const promise2_2 = promise2.then((user) => {
    return user.data
})

promise2_2.then((data) => {
    console.log(data.title)
})

// or

promise2
    .then(user => user.data)
    .then((data) => console.log(data.title))

const makeRequest = () => {
    // const pr = axios.get('https://jsonplaceholder.typicode.com/todos/2')
    // const pr2 = pr.then(res => res.data)

    return axios.get('https://jsonplaceholder.typicode.com/todos/2')
        .then(res => res.data)
}

makeRequest().then((data) => console.log(data.completed))