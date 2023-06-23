import { Router } from "express";
const router = Router();
import { 
    createUser,
    getUserById,
    getUsers,
    deleteUser,
    updateUser 
} from "../managers/user.manager.js";

router.get('/', async(req, res, next) => {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
});

router.get('/:idUser', async(req, res, next) => {
    try {
        const { idUser } = req.params;
        const user = await getUserById(parseInt(idUser));
        if(user) res.json(user);
        else res.json({message: 'User not found'})
    } catch (error) {
        next(error);
    }
});

router.post('/', async(req, res, next) => {
    try {
        const user = req.body;
        const userCreated = await createUser(user);
        res.json(userCreated);
    } catch (error) {
        next(error);
    }
});

router.put('/:idUser', async(req, res, next) => {
    try {
        const user = req.body;
        const { idUser } = req.params;
        const userExist = await getUserById(parseInt(idUser));
        if(userExist){
            await updateUser(user, Number(idUser));
            res.send(`User id: ${idUser} updated ok`);
        } else {
            res.json({message: 'User not found'})
        }
    } catch (error) {
        next(error);
    }
});

router.delete('/:idUser', async(req, res, next) => {
    try {
        const { idUser } = req.params;
        const userExist = await getUserById(parseInt(idUser));
        if(userExist) {
            await deleteUser(Number(idUser));
            res.send(`User id: ${idUser} deleted ok`);
        }else {
            res.json({message: 'User not found'})
        }
    } catch (error) {
        next(error);
    }
});

export default router