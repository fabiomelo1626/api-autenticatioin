import { User } from "@prisma/client";
import { json } from "express";
import { client } from "../prisma/client";


type UserRequest = {
    id?: string;
    username: string;
    password: string;
    email: string;
    active?: boolean;
    tipo: number;
};

class UserService {
    async index(){
        const user = await client.user.findMany();
    return user;
    }

    async indexById(id: string) {
        const user = await client.user.findUnique({
            where:{id},
        });
        if (!user){
            Error("usuario nao encontrado");
        }
        
    return user;
    }

    async create({
        username,
        password,
        email,
        active,
        tipo,
    }: UserRequest): Promise<User | Error>{
        const user = await client.user.create({
            data:{
                username,
                password,
                email,
                active,
                tipo,
            },
        });
    return user;    
    }

    async update({
        id,
        username,
        password,
        email,
        active,
        tipo,
    }:UserRequest){
        const user = await client.user.update({
            where:{id},
            data:{
                username,
                password,
                email,
                active,
                tipo,
            },
        });
        return user;
    }
}

export {UserService};
