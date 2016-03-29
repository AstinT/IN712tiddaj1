function elementClicked()
{
	alert('You clicked the element!');
}

var paragraph = document.getElementById('par');
paragraph.onclick = elementClicked;