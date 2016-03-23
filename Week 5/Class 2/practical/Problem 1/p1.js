function randomInteger (n)
{
	var randomInt = Math.floor((Math.random() * n ) + 0);	
	return randomInt;
}

alert(randomInteger(100));