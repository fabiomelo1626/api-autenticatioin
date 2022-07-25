import { json, Request, Response } from "express";
import { UserService } from "../services/UserService";


const userService = new UserService();

class UserController {
    async index( request:Request, response:Response){
        const user = await userService.index();
        return response.json(user);
    }

    async indexById( request:Request, response:Response){
        const {id} = request.params;
        const user = await userService.indexById(id);

        return response.json(user);
    }

    async create( request:Request, response:Response){
        const {
            username,
            password,
            email,
            tipo,
        } = request.body;
        const user = await userService.create({
            username,
            password,
            email,
            tipo,
        });
        return response.json(user);
    }

    async update(request:Request, response:Response){
        const {id} = request.params;
        const {
            username,
            password,
            email,
            active,
            tipo,
        } = request.body;
        const user = await userService.update({
            id,
            username,
            password,
            email,
            active,
            tipo,
        });
        return response.json(user);
    }
}

export {UserController};
