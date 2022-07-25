import { Servico } from "@prisma/client";
import { client } from "../prisma/client";

type ServicoRequest = {
    id?: string;
    servico: string;
    valor: number;
}

class ServicoService {
    async index(){
        const servico = await client.servico.findMany();
    return servico;
    }

    async indexById(id:string){
        const servico = await client.servico.findUnique({
            where:{id},
        });
         if (!servico){
            Error("Serviço não encontrado");
        }
    return servico;
    }

    async create({
        servico,
        valor,
    }: ServicoRequest): Promise<Servico | Error>{
        const  serv= await client.servico.create({
            data:{
                servico,
                valor,
            },
        });
    return serv;
    }

    async update({
        id,
        servico,
        valor,
    }:ServicoRequest){
        const serv = await client.servico.update({
            where:{id},
            data:{
                servico,
                valor,
            },
        });
    return serv;
    }
}

export {ServicoService};
