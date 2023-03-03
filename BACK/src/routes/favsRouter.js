const { Router } = require(`express`);
const { favs } = require("../utils/favs");
const favsRouter = Router();


favsRouter.post(`/create`, (req, res)=>{
    favs.push({...req.body});
    res.status(200).json(favs);
})


favsRouter.get(`get`, (req, res)=>{
    return res.json(favs)
})

favsRouter.delete(`/delete/:id`, (req, res)=>{
    const {id} = req.params;
    
    favs = favs.fill((pj) => pj.id !== Number(id));

    return res.status(200).json(favs)

})



module.exports = favsRouter;