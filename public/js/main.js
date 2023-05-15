const submitBtn = document.getElementById("submitbtn");
const cityName = document.getElementById("cityName");
const city_name=document.getElementById("city_name");
const temp=document.getElementById("temp");
const temp_status=document.getElementById("temp_status");
const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    // console.log(cityVal);
    if (cityVal==="") {
        city_name.innerText = `Please write city name`;
        // console.log('hi')
    }
    else {
        try {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&APPID=d0583c04d93065a027b20c8fb4ae20a1`
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            const arrData = [data];
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            city_name.innerText = `${arrData[0].name} ,${arrData[0].sys.country}`;
        }
        catch {
            city_name.innerText = `Please write city name properly`;
        }
        
    }
}
submitBtn.addEventListener('click', getInfo);