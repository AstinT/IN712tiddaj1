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
			//Checks if user has entered 
			if(checkNumsEntered())
			{
				var url = "https://dl.dropboxusercontent.com/u/10089854/Web3/Assignment2/stateTaxInfo.json";
				//Makes ajax request
				ajaxRequestGetTax(url);
			}
			else
			{
				alert("Please change the quantity.");			
			}			
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

function checkEmail()
{
	var email = emailInput.value;
	var regex = /\S+@\S+\.\S+/;
	return regex.test(email);
}

function ajaxRequestGetTax(url)
{
	var httpRequestInstance = new XMLHttpRequest();
	httpRequestInstance.onreadystatechange = function() 
	{
		if (httpRequestInstance.readyState == 4 && httpRequestInstance.status == 200) 
		{
			var selectedState = dropDown.value;
			var jsonTax = JSON.parse(httpRequestInstance.responseText);
			var tax = jsonTax[selectedState];
			var totalCost = calculateCost(tax);
			outputCost(totalCost);
			animation();
		}
	};
  
	httpRequestInstance.open("GET", url, true);
	httpRequestInstance.send();
}

function calculateCost(tax)
{
	
}

function outputCost()
{
	
}

function animation()
{
	
}

window.onload = init;