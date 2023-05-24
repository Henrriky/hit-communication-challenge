import { UserDTO } from "../DTO/Login/UserDTO";
import { LoginRepositoryInterface } from "../repository/LoginRepository";
import { generateToken } from "../utils/generateToken";


export interface LoginServiceInterface {
    login(email: string, password: string): string;
}


export class LoginService implements LoginServiceInterface {

    private repository: LoginRepositoryInterface;

    constructor(repository: LoginRepositoryInterface) {
        this.repository = repository;
    }

    login = (email: string, password: string): string  => {

        const users: UserDTO[] = this.repository.getUsers().users;
        const user = users.find(user => user.email === email && user.password === password);

        if(!user) {
            return "";
        }

        const token = generateToken(user);
        

        return token;

    }


    
}