import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

export function authMiddleware (req: Request, res: Response, next: NextFunction) {

    const token = req.header('authorization-token');
    if(!token) return res.status(401).send('Access Denied: Token is required');

    try {
        const stringKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxus7AfASh6FT5hawUJ/vidaYF/q/LsI8ydQdc9b17y3FHlwQwS916DFVfkFEcLUI2wD89nWavy7Hkm3CG1aleSjXalEAoFv+h8xS+UnbHfhE6kJeFctD9jR694km2+JWtjCoK7dLWzIeFXoX/O5DmvJjCC7MyAh0L+rpKvpi6qTIBnQESoju634XyJrW+jQS/JgfBnRTrEcORXV+LfuiRjOgq/uAkw7/xjvdZC+jjRRL5W2p7519S4CK38EhNCGyMxQDH4ofAbIsT53rfqGP7yI8++QhgdhBN4BHjaalhyFcgQnrIsvYe3ssLG9w6slnFLpKCfl4KBe/aMO0MY4OlwIDAQAB"
        const publicKey = `-----BEGIN PUBLIC KEY-----\r\n${stringKey}\r\n-----END PUBLIC KEY-----`;
        jwt.verify(token, publicKey, { algorithms: ['RS256'] });
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send("Access Denied: Token Invalid");
    }

        
    // const token = req.header('authorization-token');
    // if(!token) return res.status(401).send('Access Denied: Token is required');

    // try {
    //     const secret = "HIT_COMMUNICATION"
    //     jwt.verify(token, secret);
    //     next(); 
    // } catch(error) {
    //     res.status(404).send("Access Denied: Token Invalid");
    // }

    
    // try {
    //     const secret = "HIT_COMMUNICATION"
    //     jwt.verify(token, secret);
    //     next(); 
    // } catch(error) {
    //     res.status(404).send("Access Denied: Token Invalid");
    // }
}