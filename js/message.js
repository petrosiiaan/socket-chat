socket.on("messages", (data) => {
    console.log(data)
    for(let i = 0; i < data.length; i++) {
        createMessage(`${data[i].name} : ${data[i].message}`)
    }
})


sendInput.onkeypress = (e) => {
    if(e.key === "Enter") {
        const message = sendInput.value
        socket.emit("message_list", JSON.stringify({name: name.value, message: message}))

        sendInput.value = ""
    }
}



function createMessage(message) {
    const messageDiv = document.createElement('div')
    messageDiv.classList.add('contentMessage__div')
    messageDiv.setAttribute("id", "messages")

    const icon = document.createElement('i')
    icon.setAttribute('class', 'fas fa-user-ninja')

    const parDiv = document.createElement('div')
    
    parDiv.style.marginLeft = "20px"
    parDiv.style.background = "tomato"
    parDiv.style.padding = "16px"
    parDiv.style.borderRadius = "999px"

    const par = document.createElement('p')
    par.innerText = message
    
    par.style.fontSize = "17px"
    par.style.color = "white"

    parDiv.appendChild(par)

    const wroteDiv = document.createElement('div')

    const whoWrote = document.createElement('p')

    wroteDiv.appendChild(whoWrote)

    messageDiv.appendChild(icon)
    messageDiv.appendChild(parDiv)

    contentMessage.appendChild(messageDiv)
    contentMessage.appendChild(wroteDiv)

    messageDiv.style.marginTop = "20px"
    messageDiv.style.display = 'flex'
    messageDiv.style.alignItems = 'center'
}