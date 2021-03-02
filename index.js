// input value store
let searchcity = $("#searchCity").val()

//api key
const apiKey = "&appid=b4df29657122f208c7d04c1f03714e1a";
// current date
let date = new Date()

$('#searchBtn').on('click', function(){
    //user input value
    searchcity = $('#searchCity').val();
    // clear search
    $('#searchCity').val("");
    // full url
    const queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchcity + apiKey;
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response)
    })
})