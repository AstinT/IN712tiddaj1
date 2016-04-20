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
	var totalCost = 0;
	
	//Checks if the user has selected a shipping state
	if(checkStateSelected())
	{
		var selectedState = getSelectedState();
		
		//Check if the user has entered a valid email
		if(checkEmail())
		{
			//get Selected radiobutton - adding to cost
			//get tax async 
			//get bottles entered
			//calculate total cost
			//Output total cost
			//display animation
		}
		else
		{
			alert("Please enter a valid email.")
		}
	}
	else
	{
		alert("Please choose your shipping state");
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

function checkEmail()
{
	var email = emailInput.value;
	var regex = /\S+@\S+\.\S+/;
	return regex.test(email);
}

/*
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