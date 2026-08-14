const express = require("express");

const app = express();
app.use(express.static("frontend"));
app.use(express.json())

var users = [
    {
        "id":1,
        "name": "john",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/18.jpg",
    },

    {
        "id": 2,
        "name": "amber",
        "gender": "female",
        "image": "https://randomuser.me/api/portraits/women/43.jpg",
    },

    {
        "id": 3,
        "name": "lily",
        "gender": "female",
        "image": "https://randomuser.me/api/portraits/women/26.jpg",
    },

    {
        "id": 4,
        "name": "juan",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/88.jpg",
    },

    {
        "id": 5,
        "name": "valtteri rantala",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        "id": 6,
        "name": "Yuhimiya rantala",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/women/63.jpg",
    },
    {
        "id":7,
        "name": "Armando rantala",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/67.jpg",
    },
    {
        "id": 8,
        "name": "Osmano rantala",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/25.jpg",
    },
    {
        "id": 9,
        "name": "Pramitha rantala",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
        "id": 10,
        "name": "Etelvina rantala",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/women/87.jpg",
    },

]

var nextId = users.length+1;

app.post('/api/users',(req,res)=>{
    var newUser = req.body;
    var tempUser = {
        "id" : nextId,
        "name":newUser.name,
        "gender":newUser.gender,
        "img":newUser.image
    }
    nextId++;
    users.push(tempUser)
    res.status(201).json({"Message":"User created",
        "user":tempUser
    });
})
app.get('/api/users', (req, res) => {
    return res.send(users);
});


app.get('/api/users/random', (req, res) => {
    var index = Math.floor(Math.random() * users.length);

    return res.json(users[index]);
});


app.get('/api/users/:id', (req, res) => {
    var index = Number(req.params.id);

    if (index < 1 || index > users.length) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }

    return res.json(users[index - 1]);
});

app.put('/api/users/:id',(req,res)=>{
    var index = Number(req.params.id);
    if (index < 1 || index > users.length) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }
    
})

app.listen(4000,()=>{
    console.log("Server is running on port http://localhost:4000/ ✅")
})




