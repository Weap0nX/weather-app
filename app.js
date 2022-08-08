const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// const input = require('readline-sync')


// const city = input.question("Enter city: ");
const city = process.argv[2]
console.log("Arguments are: ", city)

if (city) {
    geocode(city, (error, data) => {
        if(error){
            return console.log(error)
        }
        const {location, latitude, longitude} = data
    
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
        
    })
} else {
    console.log("Please provide city")
}


