const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });


const URI = process.env.MONGO_URI;


mongoose.connect(URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database")
}).catch((err) => {
    console.error("Error connecting to database", err);
});

module.exports = mongoose.connection;