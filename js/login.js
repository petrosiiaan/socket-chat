const name = document.querySelector('#name')
const username = document.querySelector('#username')

socket.on('online', (data) => {
    console.log(`${name.value} is online`,data)
    username.textContent = name.value 
    sidebarUser.textContent = name.value
    const socketId = socket.id
    iduser.textContent = "#" + socketId
})


const nameValue = {
    name: []
}

name.onkeypress = (e) => {
    if(e.key === "Enter") {
        if(name.value === "") {
            alert("Write Your Name!!!")
        }
        else {
            login.style.display = 'none'
            const neym = nameValue.name.concat(name.value)

            socket.emit('register', { name: neym })
            sidebar.style.display = 'block'
            content.style.display = 'block'
        }
    }
}
