import mongoose from "mongoose";

const MealSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ["cafe", "almoco", "jantar", "lanche"],
    required: true
  },
  description: String,
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  imageUrl: String
}, {
  timestamps: true
});

export default mongoose.model("Meal", MealSchema);