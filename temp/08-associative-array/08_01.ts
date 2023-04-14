export type UsersType = {
    [key: string] : {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}

// users[1]

var user = {id: 100500, name: 'Igor'}
users[user.id] = user // добавили нового пользователя в массив
delete users[user.id] // Удалили быстро по id
users[user.id].name = 'Vitya' // заменяем имя у объекта


export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'}
]

// usersArray.find(u => u.id === 1)
var usersArrayCopy = [...usersArray, user] // Создаем копию чтобы не мутировать исходный массив и добавляем юзера
var usersArray2 = usersArray.filter(u => u.id !== user.id) // Удаляем юзера. Приходится пробегаться по всему массиву и сравнимать id

