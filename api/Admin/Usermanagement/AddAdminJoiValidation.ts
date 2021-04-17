import * as Joi from "joi";

const AddAdminJoiValidation = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    password: Joi.string()
        .pattern(new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)).required(),
    confirmPassword: Joi.string()
        .pattern(new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)).required(),
});

export default AddAdminJoiValidation;
