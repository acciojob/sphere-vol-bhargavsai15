const btn = document.getElementById('submit');
btn.addEventListener('click', volume_sphere);
function volume_sphere() {
  const radius = parseFloat(document.getElementById('radius').value);
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  document.getElementById('volume').value = volume.toFixed(2);
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
