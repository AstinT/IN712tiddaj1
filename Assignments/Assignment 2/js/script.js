//your code for Assignment 2 goes here
var pinoInput;
var charInput;
var sauvInput;
var riesInput;

function init()
{
	pinoInput = document.getElementById("txt-q-extra");
	charInput = document.getElementById("txt-q-cold");
	sauvInput = document.getElementById("txt-q-garlic");
	riesInput = document.getElementById("txt-q-lemon");
	
	var btnEstimate = document.getElementById("btn-estimate");
	btnEstimate.onclick = estimateTotal;
}

function estimateTotal()
{
	var pinoNum = 0;
	var charNum = 0;
	var sauvNum = 0;
	var riesNum = 0;
	
	if(checkInput())
	{
		pinoNum = pinoInput.value;
		charNum = charInput.value;
		sauvNum = sauvInput.value;
		riesNum = riesInput.value;
	}
	else
	{
		alert("Please only enter numbers!");
	}
}

function checkInput()
{	
	if(!isNaN(pinoInput.value) && !isNaN(charInput.value) &&
		!isNaN(sauvInput.value) && !isNaN(riesInput.value))
	{
		return true;
	}
	else
	{
		return false;
	}
}

window.onload = init;