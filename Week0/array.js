let array = [1,2,3,4,5,6,7,8,9];
	
let i=0;

function displayArray() {
	
	//document.getElementById("msg").innerHTML = array[i];
	document.write(array[i] + '<br>');
	
		
	if(i < array.length-1) {
			setTimeout(displayArray,3000);
	}		
	++i;
	
}

displayArray();