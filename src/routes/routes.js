import { Router } from "express";
import { PostSchedule } from "../controllers/add-schedule/addschedule-controller";
import { AcceptCourse } from "../controllers/accept-course/acceptCourse-controller";
import postCreateStudent from "../controllers/add-student/add-student-controller";
import {
  postLoginLecture,
  postLoginStudent,
} from "../controllers/authentication/authentication-controller";
import { getCourse } from "../controllers/course/course-controller";
import { GetLectureSchedules } from "../controllers/lecture-schedules/lectureSchedules-controller";
import { DeleteFinishedCourse } from "../controllers/remove-finished-course/removeFinishedCourse-controller";
import { sendMail } from "../controllers/sendMail/sendMail-controller";
import { GetStudentSchedules } from "../controllers/student-schedules/studentSchedules-controller";
import { SecureRoutes } from "../middlewares/secure-routes";
import { PutClosingCourse } from "../controllers/closing-course/closingcourse-controller";
import { GetLecturerSession } from "../controllers/lecturer-session/LecturerSession-controller";

const router = Router();

router.post("/create-student", postCreateStudent);
router.post("/login", async (req, res, next) => {
  await postLoginStudent(req, res, next);
});
router.post("/login-lecture", async (req, res, next) => {
  await postLoginLecture(req, res, next);
});
router.get("/course", SecureRoutes, async (req, res, next) => {
  //SEMENTARA TIDAK DIGUNAKAN!
  await getCourse(req, res, next);
});
router.get("/student-schedule", SecureRoutes, (req, res, next) => {
  GetStudentSchedules(req, res, next);
});
router.get("/lecture-schedule", SecureRoutes, async (req, res, next) => {
  await GetLectureSchedules(req, res, next);
});
router.post("/send-email", (req, res, next) => {
  sendMail(req, res, next);
});
router.post("/accept-course", (req, res, next) => {
  AcceptCourse(req, res, next);
});
router.post("/add-schedule", (req, res, next) => {
  PostSchedule(req, res, next);
});
router.delete("/delete-finishedcourse", (req, res, next) => {
  DeleteFinishedCourse(req, res, next);
});
router.post("/closing-course", (req, res, next) => {
  PutClosingCourse(req, res, next);
});
router.get("/lecturer-session", (req, res, next) => {
  GetLecturerSession(req, res, next);
})
export default router;
