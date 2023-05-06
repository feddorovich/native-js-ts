// Объект

const userFabric = (name) => {
    const user = {
        name: name,
        site: 'example.com',
        dateOfBirth: new Date(1988, 1, 2),
        hello() {
            console.log(`I am ${this.name} from ${this.site}`)
        }
    }
    return user
}

const u1 = userFabric('Sergey')
const u2 = userFabric('Anton')

u1.hello()
u2.hello()