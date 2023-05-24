import { UserListDTO } from "../DTO/Login/UserListDTO";
import data from "../data/dataLogin.json"

export interface LoginRepositoryInterface {

    getUsers(): UserListDTO

}

export class LoginRepository implements LoginRepositoryInterface {

    constructor () {

    }

    getUsers = (): UserListDTO => {

        const usersJSON = JSON.stringify(data);
        const usersMapping: UserListDTO = JSON.parse(usersJSON);

        return usersMapping;
    }

}