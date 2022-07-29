const request = require("postman-request")

url = "http://api.weatherstack.com/current?access_key=2e5a30edfe1eb8a4138a32805eb17c33&query=12,14"

request({url: url}, (error, response) => {
    if (error){
        console.log(error)
    }
    else{
        const data = JSON.parse(response.body)
        console.log(data)
    }
})