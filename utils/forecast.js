const request = require('postman-request')

const weatherStack = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=2e5a30edfe1eb8a4138a32805eb17c33&query=${latitude},${longitude}`
    request({url, json: true}, (error, {body}) => {
        if (error){
            callback("Unable to connect to weatherstack", undefined)
        }
        else if(body.error){
            console.log(url)
            callback("Invalid query parameters", undefined)
        }
        else{
            data = body.current
            const {temperature, feelslike} = data
            callback(undefined, {
                weather_description: data.weather_descriptions[0],
                temperature,
                feelslike
            })
        }
    })
}


module.exports = weatherStack