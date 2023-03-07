import {log} from "util";

export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }

    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    let copy = {
        ...u
    }
    copy.address = {...copy.address, city: city}

    copy = {...u, address: {...u.address, city: city}}

    return {...u, address: {...u.address, city: city}}
}

export function upgrateUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}