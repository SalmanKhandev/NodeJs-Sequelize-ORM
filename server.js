const express = require('express');
const cors = require('cors');

const app = express();

var corOptions = {
    origin: 'http://localhost:5000'
}

app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.json({ message: 'Hello from api' }); 
});

const PORT = process.env.PORT || 5000;
// server
app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});