const lastPromise = axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(user => user.data.id)
    .then(console.log)

async function run() {
    let user2 = await axios.get('https://jsonplaceholder.typicode.com/todos/2')
    console.log(user2.data.id)
    let user3 = await axios.get('https://jsonplaceholder.typicode.com/todos/3')
    console.log(user3.data.id)
    let user4 = await axios.get('https://jsonplaceholder.typicode.com/todos/4')
    console.log(user4.data.id)
}

run()

