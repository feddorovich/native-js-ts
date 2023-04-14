// let user2 = axios.get('https://jsonplaceholder.typicode.com/todos/2')
//     .then((data) => console.log(data.data))

function getNumber() {
    // return Promise.resolve(Math.random())
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.random())
        }, 5000)
    })
}

getNumber().then(n => console.log(n))
getNumber().then(n => console.log(n))

const repo = {
    save(data) {
        try {
            localStorage.setItem('some-key', JSON.stringify(data))
            return true
        } catch (error) {
            return false
        }
    },
    saveAsync(data) {
        const promise = new Promise((resolve, reject) => {
            try {
                localStorage.setItem('some-key', JSON.stringify(data))
                resolve()
            } catch (error) {
                reject(error)
            }
        })
        return promise
    },
    readAsync() {
        return new Promise((resolve, reject) => {
            const data = localStorage.getItem('some-key')
            if (!data) {
                resolve(null)
            } else {
                resolve(JSON.parse(data))
            }
        })
    }
}

const result = repo.save({name: 'LS'})
if (result) {
    console.log('saved')
} else {
    console.warn('not saved')
}

 repo.saveAsync()
    .then(() => {console.log('saved async')})
    .catch((error) => {console.warn('not saved' + error)})

const run = async () => {
    await repo.saveAsync({name: 'SOME NAME'})
    console.log('saved run')

    const data = await repo.readAsync()
    console.log(data)
}
run()