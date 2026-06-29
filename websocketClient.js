const ws=new WebSocket('wss://echo.websocket.org')

//onopen event is fired after the connection is successful
ws.onopen=function(){
    console.log("Connection with websocket server is open")
}

//onerror event is fired if connection fails or any error
ws.onerror=function(){
    console.log("there was some error in connecting with websocket server")
}

//onmessage event is fired if websocket server sends the message to client
ws.onmessage=function(event){
    console.log("message from websocket server" + event.data)
}

//onclose event is fired if connection closes
ws.onclose=function(){
    console.log("Connection with websocket server is closed")
}

