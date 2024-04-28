import { connectDB } from '@/lib/mongoDB/connDB';
import { UserModel } from '../lib/mongoDB/modelDB';
import mongoose from 'mongoose';

// mongoose.connect(process.env.MONGODB_URI as string); 
// mongoose.Promise = global.Promise;

export const fetchUsers = async () => {
    try{
        connectDB();
        const users = await UserModel.find();
        return users
    }catch(err){
        console.log(err)
        throw new Error('error fetching users')
    }
}