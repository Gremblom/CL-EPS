import conexion from "../database/connection.js";

// 1
const getAlphUsers = async (req, res)=>{
    try {
        const db = await conexion();
        const collection = db.collection('usuarios');

        const response = await collection.find().sort({usu_nombre : 1}).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export {
    getAlphUsers
}