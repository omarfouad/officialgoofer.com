var axios = require('axios')

module.exports = function(type) {
  let city = ""
  let country = ""
  
  getLocation()

  function getLocation() {
    axios.get('https://json.geoiplookup.io/').then((data)=> {
      city = data.data.city
      country = data.data.country_name

      notify()
		})
  }

  function notify() {
    axios.get('https://maker.ifttt.com/trigger/visit/with/key/6XR7OgcdkXomQzTavfJzb', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
			params: {
				value1: "Type: " + type,
				value2: " - Location: " + city + ", " + country,
				value3: ""
			}
		}).then(function() {
      console.log("done")
    })
  }
  
}