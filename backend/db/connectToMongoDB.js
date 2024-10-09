import mongoose from "mongoose";

const connectToMOngoDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log('Connected to MOngo DB');
    } catch (error) {
        console.log("Error :",error);
        
    }
}

export default connectToMOngoDB