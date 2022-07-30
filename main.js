const key = 'e77939354c74a1379070653fce5442a6';
const input = document.getElementById("search");
console.log(key);

function getWeather(){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+ '&appid='+key+'&units=metric') 
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        console.log(data);
        document.getElementById("location").innerHTML = data.city.name + ', ' + data.city.country;

        var ndt = data.list[0].dt_txt;
        var date = new Date(ndt);

        // var time = n[1];
        var test = date.toLocaleDateString('en-us', {day:"numeric"});
        var test2 = test%10;
        if(test2 == 1){
            document.getElementById("date").innerHTML = date.toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"}) +"st";
        }
        else if(test2 == 2){
            document.getElementById("date").innerHTML = date.toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"}) +"nd";
        }
        else if(test2 == 3){
            document.getElementById("date").innerHTML = date.toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"}) +"rd";
        }
        else{
            document.getElementById("date").innerHTML = date.toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"}) +"th";
        }
        
        var condition = data.list[0].weather[0].main;

        if (condition == "Clear" || condition == "Clouds"){
            document.body.style.backgroundImage = "url('media/clear.jpg')";
        }
        else if (condition == "Rain" || condition == "Drizzle"){
            document.body.style.backgroundImage = "url('media/rain.jpg')";
        }
        else if (condition == "Thunderstorm"){
            document.body.style.backgroundImage = "url('media/thunderstorm.jpg')";
        }
        else if (condition == "Snow"){
            document.body.style.backgroundImage = "url('media/snow.jpg')";
        }
        else {
            document.body.style.backgroundImage = "url('media/foggy.jpg')";
        }

        document.getElementById("iconM").src = "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png";
        document.getElementById("descM").innerHTML = data.list[0].weather[0].description;

        document.getElementById("tempM").innerHTML = Math.ceil(data.list[0].main.temp);

        document.getElementById("maxTemp").innerHTML = "Max temp: "+Math.ceil(data.list[0].main.temp_max) +" °C";
        document.getElementById("humidity").innerHTML = "Humidity: "+data.list[0].main.humidity + " %";
        document.getElementById("wind").innerHTML = "Wind speed: "+data.list[0].wind.speed + " m/s";

        document.getElementById("minTemp").innerHTML = "Min temp: "+ Math.ceil(data.list[0].main.temp_min) +" °C";
        document.getElementById("pressure").innerHTML = "Pressure: "+data.list[0].main.pressure +" Pa";
        document.getElementById("visible").innerHTML = "Visibility: "+ (data.list[0].visibility)/1000 + " Km";

        var currDate = date.toLocaleDateString('en-us');
        var counter =0;

        for(let i = 0; i < 40; ++i){
            var tempDate = data.list[i].dt_txt;
            var tempTime = tempDate.split(' ');
            var time = tempTime[1];

            var dateTemp = new Date(tempDate);
            var currTempDate = dateTemp.toLocaleDateString('en-us');
            
            
            if(currTempDate > currDate && time == '12:00:00' && counter < 4){
                currDate = currTempDate;
                counter++;
                
                document.getElementById("day"+counter).innerHTML = dateTemp.toLocaleDateString('en-us', {weekday:"long"});
                document.getElementById("icon"+counter).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@2x.png";
                document.getElementById("temp"+counter).innerHTML = Math.ceil(data.list[i].main.temp) + "°C";
                document.getElementById("desc"+counter).innerHTML = data.list[i].weather[0].description;

                // console.log(dateTemp);
            }
            
        }
        console.log(counter);
        
    })
    .catch(err => alert("City not found!"));
    
}

function getWeatherDefault(url){
    // fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+ '&appid=e77939354c74a1379070653fce5442a6&units=metric') 
    fetch(url)
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        console.log(data);
        document.getElementById("location").innerHTML = data.city.name + ', ' + data.city.country;

        var ndt = data.list[0].dt_txt;
        var date = new Date(ndt);

        // var time = n[1];
        var test = date.toLocaleDateString('en-us', {day:"numeric"});
        var test2 = test%10;
        if(test2 == 1){
            document.getElementById("date").innerHTML = date.toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"}) +"st";
        }
        else if(test2 == 2){
            document.getElementById("date").innerHTML = date.toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"}) +"nd";
        }
        else if(test2 == 3){
            document.getElementById("date").innerHTML = date.toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"}) +"rd";
        }
        else{
            document.getElementById("date").innerHTML = date.toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"}) +"th";
        }
        
        var condition = data.list[0].weather[0].main;

        if (condition == "Clear" || condition == "Clouds"){
            document.body.style.backgroundImage = "url('media/clear.jpg')";
        }
        else if (condition == "Rain" || condition == "Drizzle"){
            document.body.style.backgroundImage = "url('media/rain.jpg')";
        }
        else if (condition == "Thunderstorm"){
            document.body.style.backgroundImage = "url('media/thunderstorm.jpg')";
        }
        else if (condition == "Snow"){
            document.body.style.backgroundImage = "url('media/snow.jpg')";
        }
        else {
            document.body.style.backgroundImage = "url('media/foggy.jpg')";
        }

        document.getElementById("iconM").src = "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png";
        document.getElementById("descM").innerHTML = data.list[0].weather[0].description;

        document.getElementById("tempM").innerHTML = Math.ceil(data.list[0].main.temp);

        document.getElementById("maxTemp").innerHTML = "Max temp: "+Math.ceil(data.list[0].main.temp_max) +" °C";
        document.getElementById("humidity").innerHTML = "Humidity: "+data.list[0].main.humidity + " %";
        document.getElementById("wind").innerHTML = "Wind speed: "+data.list[0].wind.speed + " m/s";

        document.getElementById("minTemp").innerHTML = "Min temp: "+ Math.ceil(data.list[0].main.temp_min) +" °C";
        document.getElementById("pressure").innerHTML = "Pressure: "+data.list[0].main.pressure +" Pa";
        document.getElementById("visible").innerHTML = "Visibility: "+ (data.list[0].visibility)/1000 + " Km";

        
        var currDate = date.toLocaleDateString('en-us'); 
    
        var counter =0;

        for(let i = 0; i < 40; ++i){
            var tempDate = data.list[i].dt_txt;
            var tempTime = tempDate.split(' ');
            var time = tempTime[1];

            var dateTemp = new Date(tempDate);
            var currTempDate = dateTemp.toLocaleDateString('en-us');
            
            if(currTempDate > currDate && time == '12:00:00' && counter < 4){
                currDate = currTempDate;
                counter++;
                
                document.getElementById("day"+counter).innerHTML = dateTemp.toLocaleDateString('en-us', {weekday:"long"});
                document.getElementById("icon"+counter).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@2x.png";
                document.getElementById("temp"+counter).innerHTML = Math.ceil(data.list[i].main.temp) + "°C";
                document.getElementById("desc"+counter).innerHTML = data.list[i].weather[0].description;

                console.log(dateTemp);
            }
            
        }
        console.log(counter);
        
    })
    .catch(err => alert("City not found!"));
    
}

function defaultLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            var url = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+key+"&units=metric";
            getWeatherDefault(url);    
        },
        function(error) {
          if (error.code == error.PERMISSION_DENIED)
          var url = "https://api.openweathermap.org/data/2.5/forecast?q=Dhaka&appid="+key+"&units=metric";
          getWeatherDefault(url);
        });
    }
    else{
        console.log("Geolocation is not supported");

    }
    
}

addHorizontalScroll('fiveDay');

function addHorizontalScroll(blockId) {
    // const scrollContainer = document.querySelector(blockId);

    // scrollContainer.addEventListener("wheel", (evt) => {
    //     evt.preventDefault();
    //     scrollContainer.scrollLeft += evt.deltaY;
    // });
    let block = document.getElementById(blockId);

    block.addEventListener("wheel", function (evt) {
        let maxScroll = block.scrollWidth - block.offsetWidth;
        let currentScroll = block.scrollLeft + evt.deltaY;

        if (currentScroll > 0 && currentScroll < maxScroll) {
            evt.preventDefault();
            block.scrollLeft = currentScroll;
        }
        else if (currentScroll <= 0) {
            block.scrollLeft = 0;
        }
        else {
            block.scrollLeft = maxScroll;
        }
    });
}

