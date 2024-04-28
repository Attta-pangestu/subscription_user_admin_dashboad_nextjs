import mongoose from "mongoose";

const connection : any = {}; 
export const connectDB = async () => {
    try {
        if(connection.isConnected) return ;
        const db = await mongoose.connect(process.env.MONGODB_URI as string);
        connection.isConnected = db.connections[0].readyState;
        console.log('database connected');
    } catch (error) {
        console.log(error);
        throw new Error('error koneksi ke database')
    }
}
