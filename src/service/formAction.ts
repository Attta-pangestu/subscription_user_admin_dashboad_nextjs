"use server"

import { connectDB } from "@/lib/mongoDB/connDB";
import { UserModel } from "@/lib/mongoDB/modelDB";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { deleteUserById, updateUserById } from './dbService';
import { UserInfo } from "@/data/userInfoData";

export const addUser = async (formData : FormData) => {

    const {username, email, password, phone, role, status, img} = Object.fromEntries(formData)
    const bcrypt = require('bcryptjs');
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);
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
    }catch(err){
        console.log(err)
        throw new Error('error adding user')
    }
    revalidatePath('/dashboard/users')
    redirect('/dashboard/users')
}

export const deleteUserAction = async (formData : FormData) => {
    const {id} = Object.fromEntries(formData)
    await deleteUserById(id as string)
    revalidatePath('/dashboard/users');
}

export const updateUserAction = async (formData : FormData) => {
    const {id, username, email, password, phone, role, status} = Object.fromEntries(formData)
    try{
        const updateFields: { [key: string]: FormDataEntryValue } = {
            username,
            email,
            password,
            phone,
        }
        Object.keys(updateFields).forEach((key) => {
            (updateFields[key] === '' || undefined) && delete updateFields[key]
        })
    
        updateFields.role = role
        updateFields.status = status
        Object.values(updateFields).forEach(val => {
            if (typeof val !== 'string') {
                throw new Error('Semua nilai pada objek updateFields harus bertipe string');
            }
        });
        await updateUserById(id as string, updateFields)
    }catch(err){
        console.log(err)
        throw new Error('error updating user')
    }
    revalidatePath('/dashboard/users');
    redirect('/dashboard/users')
}
