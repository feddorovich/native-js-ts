// Класс

// Инкапсуляция
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
        // console.log(this.counter)
    }
}

const u1 = new User('Sergey', 'exaple.com', new Date(1988, 1, 2))
const u2 = new User('Anton', 'exaple.com', new Date(1988, 1, 2))

u1.name = 'NAME'

let users = [u1, u2]
users.forEach(u => u.hello())

// Наследование

class Coder extends User {
    constructor(name, site, dob, tech) {
        super(name, site, dob)
        this.tech = tech
    }

    code() {
        console.log(`I am ${this.name}, here is my tech - ${this.tech}`)
    }

    hello() {
        super.hello();
        console.log('Go away ' + this.name)
    }
}

const coder1 = new Coder('NEW USER', 'exaple.com', new Date(1988, 1, 2), 'REACT')
coder1.hello()
coder1.code()

class Hacker extends Coder {
    constructor(a, b, c, d) {
        super(a, b)
        this.tech = 'XXX'
    }

    code() {
        console.log(`I will hack everething!!!`)
    }
}

const hacker = new Hacker('HACKER', 'hack.com', new Date(1988, 1, 2), 'REACT')
hacker.hello()
hacker.code()

// Полиморфизм

let usersP = [u1, u2, coder1, hacker]
usersP.forEach(u => u.hello())
