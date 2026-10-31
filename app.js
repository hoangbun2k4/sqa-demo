const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_db'
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
    
    connection.query(query, (error, results) => {
        if (results.length > 0) res.send("Đăng nhập thành công!");
        else res.send("Sai mật khẩu");
    });
});
