import React from "react";

function increaseAge(u: UserType) {
    u.age = u.age + 1
}

type UserType = {
    name: string
    age: number
    address: { title: string }
}

test('reference type test', () => {

    let user = {
        name: 'Sergey',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }
    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array reference test', () => {

    let users = [
        {name: 'Sergey', age: 32},
        {name: 'Sergey', age: 32},
    ]
    let admins = users
    admins.push({name: 'Bandugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandugan', age: 10})
})

test('value type test', () => {

    let usersCount = 100

    let adminsCount = usersCount
    adminsCount = adminsCount + 1

    expect(adminsCount).toBe(101)
})

test('reference type test 2', () => {
    const address = {
        title: 'Minsk'
    }

    let user = {
        name: 'Sergey',
        age: 32,
        address: address
    }
/*    let addr = user.address*/
    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    address.title = 'Minsk City'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Minsk City')
})

test('reference type array test', () => {
    const address = {
        title: 'Minsk'
    }

    let user = {
        name: 'Sergey',
        age: 32,
        address: address
    }

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Misha', age: 4, address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})

test ('sort array test', ()=>{

    const letters = ['c', 'd', 'a', 'z', 'e']

    pasportist(letters)

    expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])
})

function pasportist(letters: any) {
    const copy = [...letters].sort()
    console.log(copy)
}