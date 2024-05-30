import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import config from '../config.js'

async function connect() {
    try {
        // If you're using MongoDB Memory Server for testing, create an instance of it
        const mongod = await MongoMemoryServer.create();
        const uri = mongod.getUri();

        const atlasUri = config.ATLAS_URI;
        mongoose.set('strictQuery', true)
        
        const db = await mongoose.connect(atlasUri || uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });

        console.log("Database Connected");
        return db;
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error; // Propagate the error to the caller
    }
}

export default connect;