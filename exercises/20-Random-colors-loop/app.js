function getColor(colorNumber)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(){
	
    //your loop here
    for (let i = 0; i < 10; i++) {
       let random = Math.floor(1 + Math.random()*4);
      let randomColor = getColor(random);
      console.log(randomColor);
    }

}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

