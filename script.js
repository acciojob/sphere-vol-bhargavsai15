
function volume_sphere() {
 event.preventDefault();
    //Write your code here
	const radius = document.getElementById("radius").value
	let formula =(4/3)*Math.PI*(radius*radius*radius);
	document.getElementById("volume").value =(formula.toFixed(4));
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
