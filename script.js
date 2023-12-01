async function fetchData(city){
    cityName.innerHTML = city;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8e67e2be8amshb3472a7015f863bp13ef83jsna421962407aa',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        const data = JSON.parse(result);
        console.log(data);

        // cloud_pct.innerHTML   = data.cloud_pct
        temp.innerHTML  = data.temp + "°C"
        temp2.innerHTML  = data.temp + "°C"
        feels_like.innerHTML = data.feels_like +"%"
        humidity.innerHTML = data.humidity +"%"
        humidity2.innerHTML = data.humidity +"%"
        min_temp.innerHTML = data.min_temp + "°C"
        max_temp.innerHTML = data.max_temp + "°C"
        wind_speed.innerHTML = data.wind_speed +"m/s"
        wind_speed2.innerHTML = data.wind_speed +"m/s"
        wind_degrees.innerHTML = data.wind_degrees +"%"
        
        
        var sunrisetimestamp = data.sunrise;
        var date = new Date(sunrisetimestamp * 1000);

        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var period = hours < 12 ? 'AM' : 'PM';

        // Convert hours to 12-hour format
        hours = (hours % 12) || 12;

        // Display the formatted time with AM/PM
        console.log("UTC Time:", hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period);

        sunrise.innerHTML = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period


        var sunsettimestamp = data.sunset;
        var date = new Date(sunsettimestamp * 1000);

        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var period = hours < 12 ? 'AM' : 'PM';

        // Convert hours to 12-hour format
        hours = (hours % 12) || 12;

        // Display the formatted time with AM/PM
        console.log("UTC Time:", hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period);
        sunset.innerHTML  = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period


    } catch (error) {
        console.error(error);
    }
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    fetchData(city.value);

})
fetchData("Hyderabad");


async function fetchHyd(city){
    cityName.innerHTML = city;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8e67e2be8amshb3472a7015f863bp13ef83jsna421962407aa',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        const data = JSON.parse(result);
        console.log(data);

        htemp.innerHTML  = data.temp + "°C"
        hfeels_like.innerHTML = data.feels_like +"%"
        hhumidity.innerHTML = data.humidity +"%"
        hmin_temp.innerHTML = data.min_temp + "°C"
        hmax_temp.innerHTML = data.max_temp + "°C"
        hwind_speed.innerHTML = data.wind_speed +"m/s"
        hwind_degrees.innerHTML = data.wind_degrees +"%"

        var sunrisetimestamp = data.sunrise;
        var date = new Date(sunrisetimestamp * 1000);

        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var period = hours < 12 ? 'AM' : 'PM';

        hours = (hours % 12) || 12;

        console.log("UTC Time:", hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period);

        hsunrise.innerHTML = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period


        var sunsettimestamp = data.sunset;
        var date = new Date(sunsettimestamp * 1000);

        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var period = hours < 12 ? 'AM' : 'PM';

        hours = (hours % 12) || 12;

        console.log("UTC Time:", hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period);
        hsunset.innerHTML  = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period
        
    } catch (error) {
        console.error(error);
    }

}
fetchHyd("Hyderabad");

async function fetchBan(city){
    cityName.innerHTML = city;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8e67e2be8amshb3472a7015f863bp13ef83jsna421962407aa',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        const data = JSON.parse(result);
        console.log(data);

        btemp.innerHTML  = data.temp + "°C"
        bfeels_like.innerHTML = data.feels_like +"%"
        bhumidity.innerHTML = data.humidity +"%"
        bmin_temp.innerHTML = data.min_temp + "°C"
        bmax_temp.innerHTML = data.max_temp + "°C"
        bwind_speed.innerHTML = data.wind_speed +"m/s"
        bwind_degrees.innerHTML = data.wind_degrees +"%"

        var sunrisetimestamp = data.sunrise;
        var date = new Date(sunrisetimestamp * 1000);

        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var period = hours < 12 ? 'AM' : 'PM';

        hours = (hours % 12) || 12;

        console.log("UTC Time:", hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period);

        bsunrise.innerHTML = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period


        var sunsettimestamp = data.sunset;
        var date = new Date(sunsettimestamp * 1000);

        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var period = hours < 12 ? 'AM' : 'PM';

        hours = (hours % 12) || 12;

        console.log("UTC Time:", hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period);
        bsunset.innerHTML  = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period
        
    } catch (error) {
        console.error(error);
    }

}
fetchBan("Bangalore");

async function fetchMum(city){
    cityName.innerHTML = city;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8e67e2be8amshb3472a7015f863bp13ef83jsna421962407aa',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        const data = JSON.parse(result);
        console.log(data);

        mtemp.innerHTML  = data.temp + "°C"
        mfeels_like.innerHTML = data.feels_like +"%"
        mhumidity.innerHTML = data.humidity +"%"
        mmin_temp.innerHTML = data.min_temp + "°C"
        mmax_temp.innerHTML = data.max_temp + "°C"
        mwind_speed.innerHTML = data.wind_speed +"m/s"
        mwind_degrees.innerHTML = data.wind_degrees +"%"

        var sunrisetimestamp = data.sunrise;
        var date = new Date(sunrisetimestamp * 1000);

        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var period = hours < 12 ? 'AM' : 'PM';

        hours = (hours % 12) || 12;

        console.log("UTC Time:", hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period);

        msunrise.innerHTML = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period


        var sunsettimestamp = data.sunset;
        var date = new Date(sunsettimestamp * 1000);

        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var period = hours < 12 ? 'AM' : 'PM';

        hours = (hours % 12) || 12;

        console.log("UTC Time:", hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period);
        msunset.innerHTML  = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period
        
    } catch (error) {
        console.error(error);
    }

}
fetchMum("Mumbai");

async function fetchChe(city){
    cityName.innerHTML = city;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8e67e2be8amshb3472a7015f863bp13ef83jsna421962407aa',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        const data = JSON.parse(result);
        console.log(data);

        ctemp.innerHTML  = data.temp + "°C"
        cfeels_like.innerHTML = data.feels_like +"%"
        chumidity.innerHTML = data.humidity +"%"
        cmin_temp.innerHTML = data.min_temp + "°C"
        cmax_temp.innerHTML = data.max_temp + "°C"
        cwind_speed.innerHTML = data.wind_speed +"m/s"
        cwind_degrees.innerHTML = data.wind_degrees +"%"

        var sunrisetimestamp = data.sunrise;
        var date = new Date(sunrisetimestamp * 1000);

        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var period = hours < 12 ? 'AM' : 'PM';

        hours = (hours % 12) || 12;

        console.log("UTC Time:", hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period);

        csunrise.innerHTML = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period


        var sunsettimestamp = data.sunset;
        var date = new Date(sunsettimestamp * 1000);

        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var period = hours < 12 ? 'AM' : 'PM';

        hours = (hours % 12) || 12;

        console.log("UTC Time:", hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period);
        csunset.innerHTML  = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period
        
    } catch (error) {
        console.error(error);
    }

}
fetchChe("Chennai");

async function fetchKol(city){
    cityName.innerHTML = city;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8e67e2be8amshb3472a7015f863bp13ef83jsna421962407aa',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        const data = JSON.parse(result);
        console.log(data);

        ktemp.innerHTML  = data.temp + "°C"
        kfeels_like.innerHTML = data.feels_like +"%"
        khumidity.innerHTML = data.humidity +"%"
        kmin_temp.innerHTML = data.min_temp + "°C"
        kmax_temp.innerHTML = data.max_temp + "°C"
        kwind_speed.innerHTML = data.wind_speed +"m/s"
        kwind_degrees.innerHTML = data.wind_degrees +"%"

        var sunrisetimestamp = data.sunrise;
        var date = new Date(sunrisetimestamp * 1000);

        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var period = hours < 12 ? 'AM' : 'PM';

        hours = (hours % 12) || 12;

        console.log("UTC Time:", hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period);

        ksunrise.innerHTML = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period


        var sunsettimestamp = data.sunset;
        var date = new Date(sunsettimestamp * 1000);

        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var period = hours < 12 ? 'AM' : 'PM';

        hours = (hours % 12) || 12;

        console.log("UTC Time:", hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period);
        ksunset.innerHTML  = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period
        
    } catch (error) {
        console.error(error);
    }

}
fetchKol("Kolkata");



