import { Router } from "express";
const router = Router();
import { __dirname } from "../utils.js";
import { getUserById } from "../managers/user.manager.js";

router.get('/', (req, res) => {
    res.render('form')
});

router.get('/home/:id', async(req, res) => {
    const { id } = req.params;
    const user = await getUserById(Number(id));
    res.render('home', { user });
});

export default router