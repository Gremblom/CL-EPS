import {Router} from "express";

import {appointmentsSept14, allapointments1Day, rejAppSept} from "../controller/citas.controller.js";

const router = Router();

router.get("/appSept14", appointmentsSept14);
router.get("/allApp1Day", allapointments1Day);
router.get("/rejAppSept", rejAppSept);

export default router;