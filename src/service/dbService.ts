import { connectDB } from '@/lib/mongoDB/connDB';
import { UserModel } from '../lib/mongoDB/modelDB';
import mongoose from 'mongoose';
import { formatedDate } from './dataManipulation';
import { UserInfo } from '@/data/userInfoData';
import { ObjectId } from 'mongodb'
// mongoose.connect(process.env.MONGODB_URI as string); 
// mongoose.Promise = global.Promise;

export const fetchUsers = async () => {
    try{
        connectDB();
        const users = await UserModel.find().lean();
        const formatedUser = users.map((user: any) => {
            return {
                ...user,
                id: new ObjectId(user._id).toString(),
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
            id: new ObjectId(user._id).toString(), 
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

export const updateUserById = async (id : string, data : any) => {
    try{
        connectDB();
        await UserModel.findByIdAndUpdate(id, data);
    }catch(err){
        console.log(err)
        throw new Error('error updating user')
    }
}

