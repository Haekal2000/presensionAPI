import { Router } from "express";
import { SecureRoutes } from "../middlewares/secure-routes";
import { postLoginStudent } from "../controllers/authentication/student-authentication-controller";
import { postLoginLecture } from "../controllers/authentication/lecture-authentication-controller";
import { PostSchedule } from "../controllers/schedule/add-schedule-controller";
import postCreateStudent from "../controllers/student/add-student-controller";
import { AcceptCourse } from "../controllers/course/accept-course-controller";
import { GetCourseHistory } from "../controllers/course/course-history-controller";
import { GetLecturerSchedules } from "../controllers/lecturer/lecturer-schedules-controller";
import { GetLecturerSession } from "../controllers/lecturer/lecturer-session-controller";
import { GetStudentSchedules } from "../controllers/student/student-schedules-controller";
import { sendMail } from "../controllers/sendMail/send-mail-controller";
import { GetStudentHistory } from "../controllers/course/student-course-history";

const router = Router();

router.post("/create-student", postCreateStudent);
router.post("/login-student", async (req, res, next) => {
  await postLoginStudent(req, res, next);
});
router.post("/login-lecture", async (req, res, next) => {
  await postLoginLecture(req, res, next);
});
router.get("/student-schedule", SecureRoutes, (req, res, next) => {
  GetStudentSchedules(req, res, next);
});
router.get("/lecturer-schedule", SecureRoutes, async (req, res, next) => {
  await GetLecturerSchedules(req, res, next);
});
router.post("/send-email", SecureRoutes, (req, res, next) => {
  sendMail(req, res, next);
});
router.post("/accept-course", SecureRoutes, (req, res, next) => {
  AcceptCourse(req, res, next);
});
router.post("/add-schedule", SecureRoutes, (req, res, next) => {
  PostSchedule(req, res, next);
});
router.post("/closing-course", SecureRoutes, (req, res, next) => {
  PostClosingCourse(req, res, next);
});
router.get("/lecturer-session", SecureRoutes, (req, res, next) => {
  GetLecturerSession(req, res, next);
});
router.get("/course-history", SecureRoutes, (req, res, next) => {
  GetCourseHistory(req, res, next);
});
router.get("/student-course-history", SecureRoutes, (req, res, next) => {
  GetStudentHistory(req, res, next);
});

export default router;
