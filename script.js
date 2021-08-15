async function getLocation(location){
	var url = "https://meta-weather.now.sh/api/location/search/?query=" + location
	
	var response = await fetch(url)
	var data = await response.json()

	console.log(data)
	return data[0].woeid
}

async function getWeather(woeid){
	var url = "https://meta-weather.now.sh/api/location/" + woeid + "/"
	
	var response = await fetch(url)
	var data = await response.json()
	console.log(data)
	return data
}

async function executeRequest(){
	var location = document.getElementById("location").value

	var id = await getLocation(location)

	var weather = await getWeather(id)

	console.log(weather)
}
