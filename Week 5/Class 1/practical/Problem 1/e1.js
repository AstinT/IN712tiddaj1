function todaysdate() {
    var todaysDate = new Date();
    
    var day = todaysDate.getDate();
	var month = todaysDate.getMonth() + 1;
	var year = todaysDate.getFullYear();
    
	return (day + "/" + month + "/" + year);
}

alert(todaysdate());