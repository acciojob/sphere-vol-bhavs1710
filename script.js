function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	let radiusnew = document.getElementById("radius").value;
	let vol=(4/3)*(Math.PI)*(radiusnew*radiusnew*radiusnew)
     document.getElementById("volume").value='${vol}';
} 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
