const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')




geocode("New York", (error, data) => {
    console.log(error)
    console.log(data)
})

forecast('-1asdfs2', '-4kh4', (error, data) => {
    console.log(error)
    console.log(data)
})

