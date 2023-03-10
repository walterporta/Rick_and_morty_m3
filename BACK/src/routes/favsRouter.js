const { Router } = require(`express`);
let { favs } = require("../utils/favs");
const favsRouter = Router();


favsRouter.post("/create", (req, res) => {
    favs.push({ ...req.body });
    res.status(201).json(favs);
  });
  
  favsRouter.get("/get", (req, res) => {
    return res.json(favs);
  });
  
  //let prueba = [];
  favsRouter.delete("/delete/:id", (req, res) => {
    let { id } = req.params;
    // let favs = prueba
    // prueba = favs.filter((pj) => pj.id !== Number(id));
    // return res.status(200).json(prueba);

    console.log(favs)
    favs = favs.filter((pj) => pj.id !== Number(id));
    console.log(favs)
    return res.status(200).json(favs);
  });
  
  module.exports = favsRouter;
  

  // let filteredFavs = favs.filter((pj) => pj.id !== Number(id));
    
  //   return res.status(200).json(filteredFavs);