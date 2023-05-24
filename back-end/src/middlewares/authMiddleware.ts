import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

export function authMiddleware (req: Request, res: Response, next: NextFunction) {
    
    const token = req.header('authorization-token');
    if(!token) return res.status(401).send('Access Denied: Token is required');

    try {
        const secret = "HIT_COMMUNICATION"
        jwt.verify(token, secret);
        next(); 
    } catch(error) {
        res.status(404).send("Access Denied: Token Invalid");
    }
}