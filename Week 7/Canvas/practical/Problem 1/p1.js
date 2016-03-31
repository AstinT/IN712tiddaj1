function draw()
{
	var mainCanvas = document.getElementById("canvas");
	var mainContext = mainCanvas.getContext("2d");
	
	mainContext.fillStyle = "rgb(124, 252, 0)";
	mainContext.fillRect(20, 20, 40, 40);
	
	mainContext.fillStyle = "rgba(95, 158, 160, 0.7)";	
	mainContext.fillRect(40, 40, 40, 40);
}

window.onload = draw;