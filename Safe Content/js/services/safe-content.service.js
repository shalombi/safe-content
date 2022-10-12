var gUsers
_createUsers()

function _createUsers() {
    // var todos = loadFromStorage(STORAGE_KEY)

    var users

    users = [
        {
            id: '101',
            username: 'a',
            password: 'a',
            lastLoginTime: 160189594058,
            isAdmin: true
        },
        {
            id: '102',
            username: 'b',
            password: 'b',
            lastLoginTime: 160189594058,
            isAdmin: false
        },
        {
            id: '102',
            username: 'c',
            password: 'c',
            lastLoginTime: 160189594058,
            isAdmin: false
        }
    ]



    gUsers = users
    // console.log('gUsers', gUsers);
    saveUsersToStorage('users', gUsers)
}

function saveUsersToStorage(key, val) {
    const usersStr = JSON.stringify(val)
    localStorage.setItem(key, usersStr)
}

// function loadFromStorage(key) {
//     const str = localStorage.getItem(key)
//     return JSON.parse(str)
// }

