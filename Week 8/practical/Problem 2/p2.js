function func()
{
	var myString1 = "My favourite color is yellow. I don't like green."
	var myString2 = "My favourite color is yellow. I don't like green."
	var reg = /colou*r/;
	console.log(myString1.match(reg));
	console.log(myString2.match(reg));
	console.log(myString3.match(reg));
}

func();