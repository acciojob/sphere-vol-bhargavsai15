
function volume_sphere() {
  //Write your code here
	const radius = document.getElementById('radius');
	const volume = document.getElementById('volume');
	let result = 0;

	const PI=3.141
	  const r = parseInt(radius.value);
	  result = 4 / 3 * PI * (r * r * r);
	  volume.value = result;
	  return result;
} 

	// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
