const express = require('express');

const server = express();
server.use(express.json());

let dummyUserData = [
    {
        id: 0,
        username: "dio444"
    },
    {
        id: 1,
        username: "js7",
    },
    {
        id: 2,
        username: "codebot21"
    }
];

let nextId = 3

server.use('*', (req, res) => {
    res.status(404).json({
        message: "not found"
    })
});

server.get('/api/users', (req, res) => {
    res.status(200).json(dummyUserData);
});

server.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({
            message: "please provide username and password"
        })
    } else {
        const newUser = req.body.user;
        dummyUserData.id = nextId++;
        dummyUserData.push(newUser);
        res.status(201).json(dummyUserData);
    }
});

module.exports = server;