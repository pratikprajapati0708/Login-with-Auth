//const mongoose = require('mongoose');
import mongoose  from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

// The Server can be stopped again with
//await mongod.stop();

async function ConnectToDB() {

    // This will create an new instance of "MongoMemoryServer" and automatically start it
    const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    const db = await mongoose.connect(uri);
    console.log("Database connected");
    return db;
}
export default ConnectToDB