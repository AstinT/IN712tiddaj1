//Global Variables
var pinoInput;
var charInput;
var sauvInput;
var riesInput;
var dropDown;
var emailInput;

function init()
{
	pinoInput = document.getElementById("txt-q-extra");
	charInput = document.getElementById("txt-q-cold");
	sauvInput = document.getElementById("txt-q-garlic");
	riesInput = document.getElementById("txt-q-lemon");
	dropDown = document.getElementById("s-state");
	emailInput = document.getElementById("email");
	
	var btnEstimate = document.getElementById("btn-estimate");
	btnEstimate.onclick = estimateTotal;
}

function estimateTotal()
{
	//Checks if the user has selected a shipping state
	if(checkStateSelected())
	{		
		//Check if the user has entered a valid email
		if(checkEmail())
		{
			var url = "https://dl.dropboxusercontent.com/u/10089854/Web3/Assignment2/stateTaxInfo.json";
			ajaxRequestGetTax(url);
		}
		else
		{
			alert("Please enter a valid email.");
			emailInput.focus();
		}
	}
	else
	{
		alert("Please choose your shipping state.");
		dropDown.focus();
	}
}

function checkStateSelected()
{
	if(dropDown.value != "")
	{
		return true;
	}
	else
	{
		return false;
	}
}

function getSelectedState()
{
	return dropDown.value;
}

function ajaxRequestGetTax(url)
{
	var httpRequestInstance = new XMLHttpRequest();
	httpRequestInstance.onreadystatechange = function() 
	{
		if (httpRequestInstance.readyState == 4 && httpRequestInstance.status == 200) 
		{
			var selectedState = getSelectedState();
			var jsonTax = JSON.parse(httpRequestInstance.responseText);
			var tax = jsonTax[selectedState];
			calculateCost(tax);
			outputCost();
		}
	};
  
	httpRequestInstance.open("GET", url, true);
	httpRequestInstance.send();
}

function checkEmail()
{
	var email = emailInput.value;
	var regex = /\S+@\S+\.\S+/;
	return regex.test(email);
}

/*
function delay(ms) 
{
   ms += new Date().getTime();
   while (new Date() < ms){}
}

function checkNumsEntered()
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
*/

window.onload = init;