const resolvedPromise = Promise.resolve(100)
console.log(resolvedPromise)

const rejectedPromise = Promise.reject({message: 'some error'})
console.log(rejectedPromise)
rejectedPromise
    .catch(() => {
        console.warn('Error')
    })

const usersAPI = {
    getAllUsers() {
        return Promise.resolve([{name: 'D'}, {name: 'N'}])
    },
    login(login, password) {
        if (login !== '123' && password !== '123') {
            return Promise.reject({message: 'Incorrect log & pass'})
        } else {
            return Promise.resolve({name: 'Dima', id: 12, ava: ''})
        }
    }
}
const pr = usersAPI.getAllUsers()
pr.then(users => console.log(users))

usersAPI.login('123', '123111')
    .then((data) => {
        // setData or make Redirect
    })
    .catch((error) => {
        // show error
    })