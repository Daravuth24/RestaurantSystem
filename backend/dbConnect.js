const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI) // This will connect to the MongoDB database. We will use the .env file to store the URI.)

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline) // This will log the host of the MongoDB database. "connection" is an actual object.
    } catch (error) {
        console.log(error);
        process.exit(1) // pass in a 1(failure)
    }
}

module.exports = {
    connectDB, // Put in our server.js file
}