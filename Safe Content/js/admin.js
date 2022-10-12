console.log(gUsers);

const getUsers = () => {
    const users = gUsers
    return users
}

const getKeys = () => {
    var users = getUsers()
    return Object.keys(users[0])
}
// console.log(getKeys());

const getTableUsers = () => {
    const keys = getKeys()
    const users = getUsers()
    console.log('keys', keys);
    console.log('users', users);
    const keysHtml = `
    <tr>
    <tr> ${keys.map(key => `<th>${key}</th>`).join(' ')} 

    </tr>`

    const usersHTML = users.map(user => `
    <tr> 
        <td> ${user.id}</td>
        <td>${user.username} </td>
        <td>${user.password} </td>
        <td> ${new Date(user.lastLoginTime).toLocaleString('sv')}</td>
        <td>${user.isAdmin} </td>

    </tr>`).join(' ')
    const elTableUsers = document.querySelector('.users-table')
    elTableUsers.innerHTML = keysHtml
    elTableUsers.innerHTML += usersHTML
}
getTableUsers()

const redirectToSecret = () => {
    //todo: check if need to clean the local storage
    window.location = 'secret.html'
}

// new Date(user.lastLoginTime).toLocaleString('sv')
// console.log(loadFromStorage('time'));