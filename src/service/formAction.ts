"use server"

import { connectDB } from "@/lib/mongoDB/connDB";
import { UserModel } from "@/lib/mongoDB/modelDB";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { deleteUserById } from './dbService';

export const addUser = async (formData : FormData) => {

    const {username, email, password, phone, role, status, img} = Object.fromEntries(formData)
    const bcrypt = require('bcryptjs');
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    console.log(username, email, password, phone, role, status)
    try{
        connectDB();
        const newUser = new UserModel({
            username,
            email,
            password: hashPassword,
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
    revalidatePath('/dashboard/users')
    redirect('/dashboard/users')
}

export const deleteUserAction = async (formData : FormData) => {
    const {id} = Object.fromEntries(formData)
    console.log(id)
    await deleteUserById(id as string)
    revalidatePath('/dashboard/users');
}