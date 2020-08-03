var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (bullet, spinnerPosition) => {

if(bullet === spinnerPosition ) {
    return 'You\'re dead!' 
} else {
return "Keep Playing!"
}
    //if (...) return ("You're dead!");
    //else return ("Keep playing!");
};

console.log(fireGun(bulletPosition, spinChamber()))

//console.log(fireGun(...));