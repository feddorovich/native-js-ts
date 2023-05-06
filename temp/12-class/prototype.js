// Функция конструктор

function User(name, site, dob) {
    // this = {}
    this.name = name
    this.site = site
    this.detaOfBirth = dob
    // return this
    // Создание и возврат объекта проиходит автоматически
}

User.prototype.hello = function () {
    console.log(`I am ${this.name} from ${this.site}`)
}

const u1 = new User('Sergey', 'exaple.com', new Date(1988, 1, 2))
const u2 = new User('Anton', 'exaple.com', new Date(1988, 1, 2))

u1.hello()
u2.hello()
