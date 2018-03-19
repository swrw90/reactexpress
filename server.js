const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        { id: 1, firstName: "Aubrey", lastName: "Queen" },
        { id: 2, firstName: "Seth", lastName: "Watson" },
        { id: 3, firstName: "David", lastName: "Gilmore" },
    ];

    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));