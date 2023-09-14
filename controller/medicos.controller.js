import conexion from "../database/connection.js";

// 7
const medAndCons = async (req, res)=>{
    try {
        const db = await conexion();
        const collection = db.collection('medicos');

        const response = await collection.aggregate([{
            $lookup : {
                from : 'consultorios',
                localField : 'med_consultorio',
                foreignField : 'cons_codigo',
                as : 'consultorio'
            }
        }]).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export {
    medAndCons
}