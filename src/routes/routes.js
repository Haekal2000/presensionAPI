import { Router } from "express";
import postCreateStudent from "../controllers/add-student/add-student-controller";
import {
  postLoginStudent,
} from "../controllers/authentication/authentication-controller";
import { getCourse } from "../controllers/course/course-controller";
import { sendMail } from "../controllers/sendMail/sendMail-controller";
import { SecureRoutes } from "../middlewares/secure-routes";

const router = Router();
router.post("/student/create", postCreateStudent);
router.post("/login", async (req, res, next) => {
  await postLoginStudent(req, res, next);
});
router.get("/course", SecureRoutes, async (req, res, next) => {
  await getCourse(req, res, next);
});
router.post("/sendEmail", async (req, res, next) => {
  await sendMail(req, res, next)
})

export default router;
