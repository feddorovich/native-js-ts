// Функция конструктор
function DeleteUserAction(userId) {
    // this = {}
    this.type = 'DELETE-USER'
    this.payload = {
        userId: userId
    }
    // return this
    // Создание и возврат объекта проиходит автоматически
}

const action1 = new DeleteUserAction(12)
const action2 = new DeleteUserAction(123)
console.log(action1)
console.log(action2)