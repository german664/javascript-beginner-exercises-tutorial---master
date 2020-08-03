var bulletPosition =  4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

let chamber =  spinChamber();

// Remove the // below and complete the commented lines
const fireGun = (bullet, spinnerPosition) => {

if(bullet === spinnerPosition ) {
    return 'You\'re dead!' 
} else {
return "Keep playing!"
}
};

console.log(fireGun(bulletPosition, chamber))
console.log(chamber)
console.log(bulletPosition)

//console.log(fireGun(...));