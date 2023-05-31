import { Schema, model, models } from "mongoose";

const CourseSchema = new Schema({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  data: {
    type: Array,
  },
});

const Course = models.Course || model("Course", CourseSchema);

export default Course;
