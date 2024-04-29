import { connectDB } from '@/lib/mongoDB/connDB';
import { UserModel } from '../lib/mongoDB/modelDB';
import mongoose from 'mongoose';
import { formatedDate } from './dataManipulation';

// mongoose.connect(process.env.MONGODB_URI as string); 
// mongoose.Promise = global.Promise;

export const fetchUsers = async () => {
    try{
        connectDB();
        const users = await UserModel.find().lean();
        const formatedUser = users.map((user: any) => {
            return {
                ...user,
                id: user._id,
                createdAt: formatedDate(user.createdAt)
            }
        })  
        return formatedUser
    }catch(err){
        console.log(err)
        throw new Error('error fetching users')
    }
}

export const fetchUserById = async (id : string) => {
    try{
        connectDB();
        const user : any = await UserModel.findById(id).lean();
        const formatedUser = {
            ...user,
            id: user._id,
            createdAt: formatedDate(user.createdAt)
        }
        return formatedUser
    }catch(err){
        console.log(err)
        throw new Error('error fetching user')
    }
}

export const deleteUserById = async (id : string) => {
    try{
        connectDB();
        await UserModel.findByIdAndDelete(id);
    }catch(err){
        console.log(err)
        throw new Error('error deleting user')
    }
}