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

 function randomUser(){
     fetch("https://randomuser.me/api")
        .then((result)=>{
            return result.json();
        })
        .then((result)=>{
            nameElement.textContent = result.results[0].name.first + " " + result.results[0].name.last;
            genderElement.textContent = result.results[0].gender;
            imgElement.src = result.results[0].picture.large;
        })
        .catch((error)=>{
            nameElement.textContent = "Error fetching user";
            console.log(error.data);
        })
}
function myRandomUser(){
    fetch('/api/users/random')
    .then((result)=>{
        return result.json()
    })
    .then((result)=>{
        nameElement.textContent = result.name;
        genderElement.textContent = result.gender;
        imgElement.src =result.image;
    })
    .catch((error)=>{
        console.log(error);
    })
}
