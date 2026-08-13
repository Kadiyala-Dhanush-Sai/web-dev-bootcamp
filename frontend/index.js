const toggleBtn = document.getElementById('toggleBtn');
var nameElement = document.getElementById('name');
var genderElement = document.getElementById('gender');
var imgElement = document.getElementById('img');
const arr = [{
    "name": "John",
    "gender": "male",
    "img": "john.png"
}, {
    "name": "Jane",
    "gender": "female",
    "img": "jane.png"
}]
var curr = 0;
function toggleUser() {
    curr = (curr + 1) % arr.length;
    nameElement.textContent = arr[curr].name;
    genderElement.textContent = arr[curr].gender;
    imgElement.src = arr[curr].img;
}
