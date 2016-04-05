function func()
{
	var myString1 = "My favourite color is yellow."
	var myString2 = "My favourite colour is yellow."
	var myString3 = "My favourite colouuuuur is yellow."
	var reg = /colou*r/;
	console.log(myString1.match(reg));
	console.log(myString2.match(reg));
	console.log(myString3.match(reg));
}

func();