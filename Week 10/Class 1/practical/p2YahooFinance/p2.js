var request = new XMLHttpRequest();

request.onreadystatechange = function() {//Call this function when the state changes.
    if (request.readyState == 4) {
        if (request.status == 200 || request.status == 0) {
            var stockData = JSON.parse(request.responseText);
          	//console.log(stockData);
          		document.getElementById("output").innerHTML=stockData.query.results.quote.LastTradePriceOnly;
          
        }
    }
};

function go() {
var code = document.getElementById("input").value;
var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22" + code + "%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="; //insert here the relevant URL to retrieve a stock ticket as input by the user from Yahoo finance API
console.log(url);
request.open("GET", url, true);
request.send();
}

document.getElementById("bu").addEventListener("click", go);