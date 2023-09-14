
import {Router} from "express";


import {medAndCons} from "../controller/medicos.controller.js";

const router = Router();

router.get("/medAndCons", medAndCons);

export default router;