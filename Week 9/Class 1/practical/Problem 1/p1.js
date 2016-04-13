function ajaxRequest() 
{
	var httpRequestInstance = new XMLHttpRequest();
	httpRequestInstance.onreadystatechange = function() 
	{
		if (httpRequestInstance.readyState == 4 && httpRequestInstance.status == 200) 
		{
			var userInputText = document.getElementById("userInputText").value;
			var athletes = JSON.parse(httpRequestInstance.responseText);
			search(userInputText, athletes);
		}
	};
  
  var url = "https://dl.dropboxusercontent.com/u/10089854/Web3/ajaxPractical2/athletes.json";
  httpRequestInstance.open("GET", url, true);
  httpRequestInstance.send();
}

function search(input, athletes)
{
	var firstName = input;
	var lastName = athletes[input];	
	
	if(lastName != null)
	{
		var output = document.getElementById("output");
		output.innerHTML = firstName + " " + lastName;
	}
	else
	{
		alert("The key " + firstName + " is not in the dictionary." );
	}	
}

document.getElementById("btn").addEventListener("click", ajaxRequest);