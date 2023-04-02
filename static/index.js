// for weather animation of line
var box = document.querySelector('.list_item1');
box.addEventListener('mouseenter', () => {
    var line = document.querySelector('.hr_line1');
    line.classList.add('w-full');
})
box.addEventListener('mouseleave', () => {
    var line = document.querySelector('.hr_line1');
    line.classList.remove('w-full');
})

//for technical animation of line
var box = document.querySelector('.list_item2');
box.addEventListener('mouseenter', () => {
    var line = document.querySelector('.hr_line2');
    line.classList.add('w-full');
})
box.addEventListener('mouseleave', () => {
    var line = document.querySelector('.hr_line2');
    line.classList.remove('w-full');
})

//for about animation of line
var box = document.querySelector('.list_item3');
box.addEventListener('mouseenter', () => {
    var line = document.querySelector('.hr_line3');
    line.classList.add('w-full');
})
box.addEventListener('mouseleave', () => {
    var line = document.querySelector('.hr_line3');
    line.classList.remove('w-full');
})

//for contact us animation of line
var box = document.querySelector('.list_item4');
box.addEventListener('mouseenter', () => {
    var line = document.querySelector('.hr_line4');
    line.classList.add('w-full');
})
box.addEventListener('mouseleave', () => {
    var line = document.querySelector('.hr_line4');
    line.classList.remove('w-full');
})





//using the api 
function getcity(city) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '75a2e14481msha89b37413bdb29dp16bd86jsnb9f291c85a72',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    var url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            if (response.temp != undefined) {
                Temp.innerHTML = response.temp;
                mintemp.innerHTML = response.min_temp;
                maxtemp.innerHTML = response.max_temp;
                humidity.innerHTML = response.humidity;
                sunrise.innerHTML = response.sunrise;
                sunset.innerHTML = response.sunset;
                windspeed.innerHTML = response.wind_speed;
                winddeg.innerHTML = response.wind_degrees;
                Name_of_city.innerHTML = `<p>${city}</p>`;
            }
            else{
                Err_msg.innerHTML = "NOTE : you enter wrong city name or the api is not working.........";
                Err_msg2.innerHTML= "Re-enter the city name!"
                Temp.innerHTML = '';
                mintemp.innerHTML = '';
                maxtemp.innerHTML = '';
                humidity.innerHTML = '';
                sunrise.innerHTML = '';
                sunset.innerHTML = '';
                windspeed.innerHTML = '';
                winddeg.innerHTML = '';
                Name_of_city.innerHTML = '';
            }
        })
        .catch(err => {
            console.error(err);
        });
}
var btn = document.querySelector('button[type="submit"]')
getcity('lucknow');
btn.addEventListener('click', (e) => {
    var city = document.querySelector('input[name="city_name"').value;
    getcity(city);
})


// setting date
var date = new Date().toLocaleString();
Current_date.innerHTML = `${date}`;



//opening and closing the mailbox
// Close_Mailbox.addEventListener('click',()=>{
//     Mailbox.style.display = 'none';
// })
// var openlink = document.querySelector('a[href="#mailbox"]');
// openlink.addEventListener('click',()=>{
//     Mailbox.style.display = 'block';

// })
