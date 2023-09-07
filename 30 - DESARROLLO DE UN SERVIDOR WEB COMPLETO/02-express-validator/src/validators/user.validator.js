import { check, validationResult } from "express-validator";

export const validateRegister = [
  check("first_name", "Debes insertar un valor en el campo first_name")
    .exists()
    .not()
    .isEmpty(),
  check("last_name", "Debes insertar un valor en el campo last_name")
    .exists()
    .not()
    .isEmpty(),
  check("email", "Debes insertar un email valido").exists().isEmail(),
  check("pass", "Debes insertar un valor en el campo password")
    .exists()
    .not()
    .isEmpty(),
  check("pass", "El mínimo de caracteres es de 8")  
    .isLength({ min: 8 }),
    (req, res, next) =>{
        try {
            validationResult(req).throw()
            return next()
        } catch (error) {
            res.status(403).send(error)
        }
    }
];

