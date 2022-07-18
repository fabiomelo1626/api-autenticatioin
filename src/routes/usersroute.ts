import { Router, Request, Response, NextFunction, application } from "express";

 const usersRoute = Router();
 

 usersRoute.get('/users', (req:Request, resp:Response, next:NextFunction) =>{
    const users = [{ username: "Fábio Melo"}];
    resp.status(200).send(users);
 });

 usersRoute.get('/users/:uuid', (req:Request<{uuid:string}>, res:Response, next:NextFunction)=>{
    const uuid = req.params.uuid;
    res.status(200).send(uuid);
 });

 usersRoute.post('/users', (req:Request, res:Response, next:NextFunction)=>{
    const newUser = req.body;
    console.log(newUser)
    res.status(200).send(newUser);
 });

usersRoute.put('/users/:uuid', (req:Request<{uuid:string}>, res:Response, next:NextFunction)=>{
    const editUser = req.params.uuid;
    res.status(200).send(editUser);
})

usersRoute.delete('/users/:uuid', (req:Request, res:Response, next:NextFunction)=>{
    const deleteUser = req.params.uuid;
    res.status(200).send(deleteUser);
});

 export default usersRoute;
