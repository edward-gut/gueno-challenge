import {Router} from "express";
import {cuit} from "../controllers/creditController";

const router = Router();

router.get("/credit/cuit/:id",cuit);

export default router;