import {makeHairstyle, moveUser, upgrateUserLaptop, UserType, UserWithLaptopType} from "./10_01";

test ('reference type test', ()=> {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test ('change address', ()=> {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test ('upgrate laptop to macbook', ()=> {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const userCopy = upgrateUserLaptop(user, 'Macbook')

    expect(user).not.toBe(upgrateUserLaptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.address.city).toBe('Minsk')
    expect(userCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('Zenbook')
})