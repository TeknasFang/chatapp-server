

const initSocket = (server,corsOptions)=>{

    const io=require("socket.io")(server,{cors:corsOptions})

    io.on('connection',(socket)=>{
        console.log("User connected !")

        socket.on('disconnect',()=>{
            console.log('user disconnected !!!')
        })
    })

}

module.exports = {initSocket}