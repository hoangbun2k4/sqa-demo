const express = require('express');
const app = express();
const db = require('./db');

app.get('/getUser', async (req, res) => {
    const userId = req.query.id; 
    const query = "SELECT * FROM users WHERE id = " + userId; 
    const result = await db.execute(query);
    res.send(result);
});
