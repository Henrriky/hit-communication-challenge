import { Request, Response } from "express"
import { LoginServiceInterface } from "../services/LoginService";
import { inputValidate } from "../utils/validate";


export class LoginController {

    private service: LoginServiceInterface;

    constructor(service: LoginServiceInterface) {
        this.service = service;
    }

    login = (req: Request, res: Response) => {

        const { error } = inputValidate(req.body);

        if (error) {
            return res.status(400).send({message: error.message});
        }

        try {
            const token = this.service.login(req.body.email, req.body.password);

            if (token.length === 0) {
                return res.status(400).send({ message: "Email or Password is incorrect" })
            }
            res.header('authorization-token', token);
            res.status(200).send({message: "Usuario logado com sucesso!"});

        } catch(error) {
            console.log(error)
            
            res.status(500).send({ error: "Erro interno no servidor"})
        }
    }
}