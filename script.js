
    const apiKey = "15afa27490216afeaebff7dbb69df612";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=(city)&appid=15afa27490216afeaebff7dbb69df612";



    const searchBox = document.querySelector(".Search input");
    const searchBtn = document.querySelector(".Search button");


    async function checkWeather(city){
        const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + km/h;
        

    }

    searchBtn.addEventListener('click' , ()=>{
        checkWeather(searchBox.value);
    })

    checkWeather();
