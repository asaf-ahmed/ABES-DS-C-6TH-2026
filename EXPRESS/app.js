const express = require('express');
const { setMaxIdleHTTPParsers } = require('http');
const app = express();
const port = 8000;

app.use(express.json());

// data Base(json)
const student = [
    {
        id:1,
        name:"Mohan",
    },
    {
        id:2,
        name:"Sohan",
    }
]

//API for read(R)
app.get('/read', (req, res) => {
    res.json(student);
});

//API FOR READ(FOR ID)
app.get('/read/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const std = student.find((s) => s.id === id);

    if (!std) {
        return res.status(404).json({ message : 'Student not found' });
    }

    res.json(std);
});

// API for create(C)
app.post('/add', (req, res) => {
    const newdata ={
        id:student.length + 1,
        ...req.body
    }
    student.push(newdata);
    res.json({message:"data add",data:student});
});

//API FOR DELETE

app.delete('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = student.findIndex((s) => s.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    student.splice(index, 1);

    res.json({
        message: "data deleted",
        data: student
    });
});

app.listen(port, () => {
    console.log(`server run http://localhost:${port}`);
});