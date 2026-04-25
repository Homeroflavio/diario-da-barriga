import express from "express";
import upload from "../config/upload.js";
import {
  createMeal,
  getMeals,
  getMealById,
  updateMeal,
  deleteMeal
} from "../controllers/mealController.js";

const router = express.Router();

router.post("/", upload.single("image"), createMeal);
router.get("/", getMeals);
router.get("/:id", getMealById);
router.put("/:id", updateMeal);
router.delete("/:id", deleteMeal);

export default router;