import { Router } from "express";
import { SecureRoutes } from "../middlewares/secure-routes";
import { PostLoginStudent } from "../controllers/authentication/student-authentication-controller";
import { PostLoginLecture } from "../controllers/authentication/lecture-authentication-controller";
import { PostSchedule } from "../controllers/schedule/add-schedule-controller";
import PostCreateStudent from "../controllers/student/add-student-controller";
import { PostAcceptCourse } from "../controllers/course/accept-course-controller";
import { GetCourseHistory } from "../controllers/course/course-history-controller";
import { GetLecturerSchedules } from "../controllers/lecturer/lecturer-schedules-controller";
import { GetLecturerSession } from "../controllers/lecturer/lecturer-session-controller";
import { GetStudentSchedules } from "../controllers/student/student-schedules-controller";
import { PostSendMail } from "../controllers/sendMail/send-mail-controller";
import { GetStudentHistory } from "../controllers/course/student-course-history";
import { PostClosingCourse } from "../controllers/course/closing-course-controller";
import { GetStudentData } from "../controllers/student/student-data";
import { GetLectureData } from "../controllers/lecturer/lecturer-data";

const router = Router();

router.post("/create-student", PostCreateStudent);
router.post("/login-student", (req, res, next) => {
  PostLoginStudent(req, res, next);
});
router.post("/login-lecture", (req, res, next) => {
  PostLoginLecture(req, res, next);
});
router.get("/student-data", SecureRoutes, (req, res, next) => {
  GetStudentData(req, res, next);
});
router.get("/lecture-data", SecureRoutes, (req, res, next) => {
  GetLectureData(req, res, next);
});
router.get("/student-schedule", SecureRoutes, (req, res, next) => {
  GetStudentSchedules(req, res, next);
});
router.get("/lecturer-schedule", SecureRoutes, (req, res, next) => {
  GetLecturerSchedules(req, res, next);
});
router.post("/send-email", SecureRoutes, (req, res, next) => {
  PostSendMail(req, res, next);
});
router.post("/accept-course", SecureRoutes, (req, res, next) => {
  PostAcceptCourse(req, res, next);
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
