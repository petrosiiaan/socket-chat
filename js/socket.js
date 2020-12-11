const host = "http://173.212.238.103:1239"

const socket = io.connect(host)

socket.on('connect', () => {
    console.log("User Connected:id:", socket.id)
})
