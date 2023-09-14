import conexion from "../database/connection.js";

// 2
const allapointments1Day = async (req, res)=>{
    try {
        const db = await conexion();
        const collection = db.collection('citas');

        const response = await collection.aggregate([
            {$match : {cit_fecha : '13-10-2023'}},
            {$lookup : {
                from : 'usuarios',
                localField : 'cit_datosUsuario',
                foreignField : 'usu_id',
                as : 'usuarios'
            }}
        ]).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

// 6
const appointmentsSept14 = async (req, res)=>{
    try {
        const db = await conexion();
        const collection = db.collection('citas');

        const response = await collection.find({cit_fecha : '14-10-2023'}).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

// 12
const rejAppSept = async (req, res)=>{
    try {
        const db = await conexion();
        const collection = db.collection('citas');

        const response = await collection.aggregate([
            {$match : {$and : [{cit_fecha : {$regex : /10/i}}, {cit_estadoCita : {$eq : 5}}]}},
            {$lookup : {
                from : 'usuarios',
                localField : 'cit_datosUsuario',
                foreignField : 'usu_id',
                as : 'usuario',
                pipeline : [
                    {$lookup : {
                        from : 'medicos',
                        localField : 'cit_medico',
                        foreignField : 'med_nroMatriculaProsional',
                        as : 'medico'
                    }}
                ]
            }}
        ]).toArray();

        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export {
    appointmentsSept14,
    allapointments1Day,
    rejAppSept
}