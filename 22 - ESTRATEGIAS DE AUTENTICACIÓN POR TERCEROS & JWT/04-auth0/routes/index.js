import express from 'express';

const router = express.Router();

router.get('/', (req, res)=>{
    console.log(req.oidc.isAuthenticated())
    if(req.oidc.isAuthenticated()){
        res.json({
            isAuthenticated: req.oidc.isAuthenticated(),
            user: req.oidc.user
        })
    } else {
        res.json({
            isAuthenticated: req.oidc.isAuthenticated()
        })
    }
});

export default router;