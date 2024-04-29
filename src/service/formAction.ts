"use server"

import { connectDB } from "@/lib/mongoDB/connDB";
import { UserModel } from "@/lib/mongoDB/modelDB";

export const addUser = async (formData : FormData) => {
    console.log("add user")
    const {username, email, password, phone, role, status, img} = Object.fromEntries(formData)
    console.log(username, email, password, phone, role, status)
    try{
        connectDB();
        const newUser = new UserModel({
            username,
            email,
            password,
            phone,
            role,
            img, 
            status
            
        })
        await newUser.save();
        console.log('User successfully added')
    }catch(err){
        console.log(err)
        throw new Error('error adding user')
    }
}