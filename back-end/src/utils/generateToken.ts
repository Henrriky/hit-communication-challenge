import { UserDTO } from "../DTO/Login/UserDTO";
import jwt from "jsonwebtoken";

export function generateToken(user: UserDTO) {

    const secret = "HIT_COMMUNICATION"
    const expiresIn = "1h"
    const payload = {
        id: user.id, 
        email: user.email, 
        name: user.name,
    }

    return jwt.sign(payload, secret, { expiresIn });

}