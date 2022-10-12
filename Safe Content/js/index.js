//model
const MIN_PASSWORD_LENGTH = 3

function onClickLogin() {
    const username = document.querySelector('.username').value
    const password = document.querySelector('.password').value

    const registeredUsers = loadFromStorage('users')
    const currentUser = registeredUsers.find(user => user.username === username)

    if (!currentUser) {
        window.alert('wrong username')
        return
    }

    if (password === currentUser.password) {
        saveToStorage('user', currentUser)
        window.location = 'secret.html'
    } else {
        window.alert('wrong username')
    }

    // for (user in registeredUsers) {
    //     if (user.username === username)
    // }

}

// const isLoginDisabled = () => {
//     const username = document.querySelector('.username').value
//     const password = document.querySelector('.password').value
//     console.log(!username || !password)
//     return !username || !password
// }