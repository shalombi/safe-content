const onLoadSecret = () => {
    console.log(localStorage)

    // const timeVisited = new Date
    // loadFromStorage('user').lastLoginTime = saveToStorage('time', timeVisited.toLocaleString('sv'))

    document.querySelector('.username').innerHTML = loadFromStorage('user').username

    const isAdmin = loadFromStorage('user').isAdmin
    if (isAdmin) {
        ////
        document.querySelector('.admin-link').style.display = 'block'
    }
}

const onClickLogout = () => {
    localStorage.clear()
    window.location = 'index.html'
}

const redirectToAdmin = () => {
    window.location = 'admin.html'
}


// var currTime = new Date
// // saveToStorage(key, val)
// console.log('currTime', currTime);
// saveToStorage('time', currTime.toLocaleString('sv'))
