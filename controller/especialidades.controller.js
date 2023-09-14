import conexion from "../database/connection.js";

// 3
const getAllCardio = async (req, res)=>{
    try {
        const db = await conexion();
        const collection = db.collection('especialidades');

        const response = await collection.aggregate([
            {$match : {esp_nombre : 'Cardiología'}},
            {$lookup : {
                from : "medicos",
                localField : "esp_id",
                foreignField : "med_especialidad",
                as : 'medicos'
            }}
        ]).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export {
    getAllCardio
}