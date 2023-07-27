import { Router } from "express";

const router = Router()

router.post('/', (req, res) => {
    const { name, email } = req.body;
    res.cookie(name, email, { maxAge: 10000 }).send('cookie agregada')
});

export default router

