import { Schema, model, models } from "mongoose";

const DiscussionSchema = new Schema(
  {
    title: {
      type: String,
    },
    sender: {
      type: String,
    },
    desc: {
      type: String,
    },
    hashtags: {
      type: Array,
    },
    comments: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const Discussion = models.Discussion || model("Discussion", DiscussionSchema);

export default Discussion;
