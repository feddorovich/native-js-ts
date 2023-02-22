var user = {
    name: 'Sergey',
    age: 20,
    address: {
        city: {
            title: 'Minsk'
        }
    }
}

console.log(user.address.city.title) // Minsk
console.log(user['address']['city']['title']) // Minsk

var user = {
    'name': 'Sergey',
    'age': 20,
    'address': {
        'city': {
            'title': 'Minsk'
        }
    }
}

console.log(user['address']['city']['title']) // Minsk

var city = {}
city.title = 'Minsk'
console.log(city) // { title: 'Minsk' }
city['citizensCount'] = 100
console.log(city) // { title: 'Minsk', citizensCount: 100 }

var users = ['Dimych', 'Natasha', 'Valera', 'Katya']

console.log(users[0]) // Dimych
console.log(users['0']) // Dimych
console.log(users['map']) // [Function: map]
console.log(users['map'](e => e.toUpperCase())) // [ 'DIMYCH', 'NATASHA', 'VALERA', 'KATYA' ]

var usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

console.log(usersObj[2]) // Valera
console.log(usersObj['2']) // Valera

usersObj['table'] = 'brown'
console.log(usersObj)  // {'0': 'Dimych','1': 'Natasha','2': 'Valera','3': 'Katya', table: 'brown'}

usersObj['привет как дела'] = 'хорошо'
console.log(usersObj) // ... 'привет как дела': 'хорошо'

console.log(usersObj['привет как дела']) // хорошо

usersObj[null] = 'прикол'
console.log(usersObj)  // null: 'прикол'

usersObj[{}] = 'объект'
console.log(usersObj) // '[object Object]': 'объект'

usersObj[{name: 'Serhey', toString(){return 'bla'}}] = 'объект'
console.log(usersObj) // bla: 'объект'
// Тут мы передали объекту toString, поэтому ключ записался как строка

var users = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

console.log(Object.keys(users)) // [ '0', '1', '2', '3' ]
console.log(Object.values(users)) // [ 'Dimych', 'Natasha', 'Valera', 'Katya' ]



