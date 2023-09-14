
import {Router} from "express";

import {getAlphUsers} from "../controller/usuarios.controller.js";

const router = Router();

router.get("/allAlphUsers", getAlphUsers);

export default router;