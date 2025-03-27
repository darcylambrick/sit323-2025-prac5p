const express = require('express');
const app = express();
const port = 3000;

//URL looks like this
//http://localhost:3000/add?num1=1&num2=2

// Addition API Endpoint (num1 + num2)
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid input" });
    }
    res.json({ result: parseFloat(num1) + parseFloat(num2) });
});

// Subtraction API Endpoint (num1 - num2)
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid input" });
    }
    res.json({ result: parseFloat(num1) - parseFloat(num2) });
});

// Multiplication API Endpoint (num1 * num2)
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid input" });
    }
    res.json({ result: parseFloat(num1) * parseFloat(num2) });
});

// Division API Endpoint (num1 / num2)
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2) || parseFloat(num2) === 0) {
        return res.status(400).json({ error: "Invalid input or division by zero" });
    }
    res.json({ result: parseFloat(num1) / parseFloat(num2) });
});

// Exponentiation API Endpoint (num1 ^ num2)
app.get('/power', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid input" });
    }
    res.json({ result: Math.pow(parseFloat(num1), parseFloat(num2)) });
});

// Square Root API Endpoint (√num1)
app.get('/sqrt', (req, res) => {
    const { num1 } = req.query;
    if (!num1 || isNaN(num1) || parseFloat(num1) < 0) {
        return res.status(400).json({ error: "Invalid input or negative number" });
    }
    res.json({ result: Math.sqrt(parseFloat(num1)) });
});

// Modulo API Endpoint (num1 % num2)
app.get('/modulo', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2) || parseFloat(num2) === 0) {
        return res.status(400).json({ error: "Invalid input or modulo by zero" });
    }
    res.json({ result: parseFloat(num1) % parseFloat(num2) });
});

// Start the server
app.listen(port, () => {
    console.log(`Calculator microservice running on http://localhost:${port}`);
});
