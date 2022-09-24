// PORT & URL MongoDB
require('dotenv/config')
const port = process.env.PORT;

// Express
const express = require('express');

// Mongoose
const mongoose = require('mongoose');

// Cors
const cors = require('cors');

// Routes
const routes = require('./routes/routes');

// Middlewares
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use("/api", routes);

// Database
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Terhubung pada Database');
}).catch((err) => {
    console.log(err);
});

// Server
app.listen(port, () => {
    console.log(`Server berjalan pada port http://localhost:${process.env.PORT}`);
});
