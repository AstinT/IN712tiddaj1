//Global Variables
var pinoInput;
var charInput;
var sauvInput;
var riesInput;
var dropDown;
var emailInput;
var globalTax;
var xLocation;

//Initlising
function init()
{
	pinoInput = document.getElementById("txt-q-extra");
	charInput = document.getElementById("txt-q-cold");
	sauvInput = document.getElementById("txt-q-garlic");
	riesInput = document.getElementById("txt-q-lemon");
	dropDown = document.getElementById("s-state");
	emailInput = document.getElementById("email");
	globalTax = 0;
	xLocation = 0;
	
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
			if(checkInputEntered())
			{
				//Makes ajax request
				var url = "https://dl.dropboxusercontent.com/u/10089854/Web3/Assignment2/stateTaxInfo.json";				
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

//Checks if user has selected a state
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

//Checks the inputted email against a regex
function checkEmail()
{
	var email = emailInput.value;
	var regex = /\S+@\S+\.\S+/;
	return regex.test(email);

}

//Checks if the user has inputted some quantities
function checkInputEntered()
{
	if((pinoInput.value != "") || (charInput.value != "") ||
		(sauvInput.value != "") || (riesInput.value != ""))
	{
		return true;
	}
	else
	{
		return false;
	}
}

//Makes AJAX request to a url to recieve
function ajaxRequestGetTax(url)
{
	var httpRequestInstance = new XMLHttpRequest();
	httpRequestInstance.onreadystatechange = function() 
	{
		if (httpRequestInstance.readyState == 4 && httpRequestInstance.status == 200) 
		{
			//Gets dropDown.Value
			var selectedState = dropDown.value;
			var jsonTax = JSON.parse(httpRequestInstance.responseText);
			var tax = jsonTax[selectedState];
			//Converts demicial to a whole number
			globalTax = tax * 100;
			var totalCost = calculateCost(tax);
			outputCost(totalCost);
			storeLocalStorage();
			//Repeats
			setInterval(animation, 50);
		}
	};
  
	httpRequestInstance.open("GET", url, true);
	httpRequestInstance.send();
}

//Calculates total cost. wine + tax + post.
function calculateCost(tax)
{
	var totalCost = 0;
	
	totalCost = getWineCost() + getTaxCost(tax) + getPostCost();
	
	return totalCost;
}

//Calculates and returns the cost of the wine
function getWineCost()
{
	var wineCost = 0;
	
	pinoCost = +pinoInput.value * 10;
	charCost = +charInput.value * 8;
	sauvCost = +sauvInput.value * 10;
	riesCost = +riesInput.value * 12;
	
	wineCost = pinoCost + charCost + sauvCost + riesCost;
	
	return wineCost;
}

//Calculates and returns the cost of the tax
function getTaxCost(tax)
{
	var taxCost = 0;
	
	taxCost = getWineCost() * tax;
	
	return taxCost;
}

//Calculates and returns the cost of the post
function getPostCost()
{
	var totalPostCost = 0;
	
	//Checks if radiobutton is checked
	if(document.getElementById("r-method-nzp").checked == true)
	{
		totalPostCost = getTotalBottles() * 2;
	}
	
	if(document.getElementById("r-method-nzc").checked == true)
	{
		totalPostCost = getTotalBottles() * 3;
	}
	
	return totalPostCost;
}

//Adds up all the bottles and returns it.
function getTotalBottles()
{
	totalQuantity = 0;
	
	totalQuantity = +pinoInput.value + +charInput.value + +sauvInput.value + +riesInput.value;
	
	return totalQuantity;
}

//Outputs all values calculated
function outputCost(totalCost)
{
	document.getElementById("txt-estimate").value = "$" + totalCost.toFixed(2);
	document.getElementById("results").innerHTML = "Total bottles: " + getTotalBottles() + "<br>" + 
												   "Total shipping: $" + getPostCost().toFixed(2) + "<br>" +
												   "Tax: " + globalTax.toFixed(2) + "% (" + dropDown.value + ")";
}

//Makes a JSON object which holds bottlesOrdered and state.
//Stores JSON object in local storage
function storeLocalStorage()
{
	var purchaseDetails = {
		bottlesOrdered : getTotalBottles(),
		state : dropDown.value
	};
	
	var json = JSON.stringify(purchaseDetails);
	
	localStorage.setItem("purchaseDetails", json);
}

//Animates an image across the page
function animation()
{
	var mainCanvas = document.getElementById("myCanvas");
	var mainContext = mainCanvas.getContext("2d");
	
	var img = new Image();
	img.src = 'images/packageShipment.png';	
	
	mainContext.clearRect(0, 0, 200, 200);
	mainContext.drawImage(img, xLocation, 50);
	
	if(xLocation > 200)
	{
		xLocation = 0;
	}
	
	xLocation = xLocation + 5;
}

window.onload = init;