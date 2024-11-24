// connect file as a singlton Pattern object

import mongoose from "mongoose";

//connect to MongoDB
const connect = async () =>{
    
    try {
        mongoose.connect(process.env.MONGO);
        console.log('Connected to MongoDB');
    }catch(e) {
        handleError(e);
    }
}


//like a class 

// import mongoose from "mongoose";

class Database {
    constructor() {
        this.connection = null;
    }

    async connect() {
        try {
            this.connection = await mongoose.connect(process.env.MONGO);
            console.log('Connected to MongoDB');
        } catch (error) {
            this.handleError(error);
        }
    }

    handleError(error) {
        console.error("Database connection error:", error);
    }
}

export {connect,Database} 