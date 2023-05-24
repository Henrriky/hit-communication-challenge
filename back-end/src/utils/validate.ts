import Joi from "@hapi/joi"

interface Data {
    email: string,
    password: string,
}

export const inputValidate = (data: Data) => {
    
    const schema =  Joi.object({
        email: Joi.string().required().min(3).max(50),
        password: Joi.string().required().min(4).max(100)
    }) 

    return schema.validate(data)
}