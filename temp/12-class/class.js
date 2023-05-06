// Класс

class User {
    #name

    constructor(name, site, dob) {
        this.#name = name
        this.site = site
        this.detaOfBirth = dob
        this.counter = 0
    }

    get name() {
        return this.#name
    }

    set name(value) {
        this.#name = value
    }

    hello() {
        this.counter++
        console.log(`I am ${this.name} from ${this.site}`)
        console.log(this.counter)
    }
}

const u1 = new User('Sergey', 'exaple.com', new Date(1988, 1, 2))
const u2 = new User('Anton', 'exaple.com', new Date(1988, 1, 2))

u1.name = 'NAME'

let users = [u1, u2]
users.forEach(u => u.hello())

class Coder extends User {
    code() {
        console.log(`I am ${this.name}, here is my code`)
    }
}
