const request = require("postman-request")

const forecast = ( lat, lon, callback ) => {
    const url = 'http://api.weatherstack.com/current?access_key=ce93973d644a779c345c261a2da6ea3a&query=' + encodeURIComponent(lat) + ',' + encodeURIComponent(lon) + '&units=m'
    

    request({ url, json: true }, ( error, { body } ) => {
        if ( error ) {
            callback('Unable to access the weather service.', undefined)
        } else if ( body.error ) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                country: body.location.country,
                region: body.location.region,
                temperature: body.current.temperature,
                rainChance:  body.current.precip
            })
        }
    })

}

module.exports = forecast