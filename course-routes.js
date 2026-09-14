const courseControllers = require("../controllers/course-controllers");
const express = require("express");
const upload = require("../middlewares/multer-middleware");

const router = express.Router();



router
  .route("/")
  .get(courseControllers.getAllCourses)
  .post(upload.single("imageUrl"), courseControllers.createCourse);

router
  .route("/:id")
  .get(courseControllers.getCourseById)
  .patch(upload.single("imageUrl"), courseControllers.updateCourse)
  .delete(courseControllers.deleteCourse);

module.exports = router;
