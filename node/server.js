const express = require("express");
const app = express();

const data = [
    {
        id:1,
        name:"ABC"
    },
    {
        id:2,
        name:"DEF"
    }];

app.use(express.json());


app.get('/api/users',(req,res)=>{
    res.json(data);
});


app.get('/api/users/:id',(req,res)=>{
    const user = data.find(u => u.id == req.params.id);
    if(!user)
        return res.status(404).send("User Not Found");
    res.json(user);
});

app.post('/api/users/add',(req,res)=>{
    data.push(req.body);
    res.status(201).send("User added successfully!");
});

app.put('/api/users/update/:id',(req,res)=>{
    const userIndex = data.findIndex(u => u.id == req.params.id);
    if(userIndex === -1)
        return res.status(404).send("User not found!");
    data[userIndex] = req.body;
    res.send("User updated successfully");
});

app.delete('/api/users/delete/:id',(req, res)=>{
    const userIndex= data.findIndex(u => u.id == req.params.id);
    if(userIndex == -1)
        return res.status(400).send("User not Found!");
    data.splice(userIndex,1);
    return res.send("User deleted successfully!");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});