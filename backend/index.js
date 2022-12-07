const express = require('express');

const app = express();
const PORT =  process.env.PORT || 4000;


app.get('/', (req, res) => {
    res.send('<h1 style="text-align:center;">React Note App</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;