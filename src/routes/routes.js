import { Router } from "express";
import postCreateStudent from "../controllers/add-student/add-student-controller";

const router = Router();
router.post("/student/create", postCreateStudent);

export default router;
