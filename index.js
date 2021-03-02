// input value store
let searchcity = $("#searchCity").val()

//api key
const apiKey = "&appid=b4df29657122f208c7d04c1f03714e1a";
// current date
let date = new Date()

$('#searchBtn').on('click', function(){
    const queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + "Madison" + apiKey;
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response)
    })
})