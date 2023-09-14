
import express from "express";


import usuariosRouter from "../routes/usuarios.routes.js";
import especialidadesRouter from "../routes/especialidades.routes.js";
import citasRouter from "../routes/citas.router.js";
import medicosRouter from "../routes/medicos.router.js";


class Server {

    constructor(){

        this.app = express();

        this.port = process.env.PORT;

        this.rutas = {
            usuarios : "/users",
            especialidades : "/specialties",
            citas : "/appointments",
            medicos : "/medics"
        }

        this.middlewares();

        this.routes();
    }


    listener(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor ejecutandose en el puerto ${this.port}`);
        });
    }


    middlewares(){
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.rutas.usuarios, usuariosRouter);
        this.app.use(this.rutas.especialidades, especialidadesRouter);
        this.app.use(this.rutas.citas, citasRouter);
        this.app.use(this.rutas.medicos, medicosRouter);
    }
}

export default Server;