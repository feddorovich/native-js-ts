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
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type WithCompaniesType = {
    companies: Array<{ id: number, title: string }>
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

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
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

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: string) {
    const copy = {
        ...u,
        books: [...u.books, newBooks]
    }

    return copy
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => (
    {...u, books: u.books.map(b => b === oldBook ? newBook : b)}
)

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) => {
    return {
        ...u,
        books: u.books.filter(b => b !== bookForDelete)
    }
}

export const updateCompanyTitle = (u: UserWithLaptopType & WithCompaniesType, companyId: number, newTitle: string) => (
    {...u, companies: u.companies.map( c => c.id === companyId ? {...c, title: newTitle} : c)}
)

export const updateCompanyTitle2 = (companies: any,
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) => {

}