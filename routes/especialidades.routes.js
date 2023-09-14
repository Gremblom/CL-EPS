
import {Router} from "express";


import {getAllCardio} from "../controller/especialidades.controller.js";


const router = Router();


router.get("/allCardio", getAllCardio);

export default router;