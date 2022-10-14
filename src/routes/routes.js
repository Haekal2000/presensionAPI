import { Router } from "express";
import postCreateStudent from "../controllers/add-student/add-student-controller";
import {
  getLoginStudent,
  postLoginStudent,
} from "../controllers/authentication/authentication-controller";
import { getCourse } from "../controllers/course/course-controller";
import { SecureRoutes } from "../middlewares/secure-routes";

const router = Router();
router.post("/student/create", postCreateStudent);
router.get("/login/studentdata", SecureRoutes, async (req, res, next) => {
  await getLoginStudent(req, res, next);
});
router.post("/login", async (req, res, next) => {
  await postLoginStudent(req, res, next);
});
router.get("/course", SecureRoutes, async (req, res, next) => {
  await getCourse(req, res, next);
});

export default router;
