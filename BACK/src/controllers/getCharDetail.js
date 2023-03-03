const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');

const getCharDetail = (req, res) => {
    const {detailId}  = req.params;
    axios(URL + detailId).then(
        ({data}) => {
    
        const character = {
        id: data.id,
        name: data.name,
        species: data.species,
        image: data.image,
        gender: data.gender,
        origin: data.origin.name,
        status: data.status

    };
    return res.status(200).json(character);
    }).catch((err) => {
        res.status(500).send(err.message)
    })
}

module.exports = {getCharDetail};



























