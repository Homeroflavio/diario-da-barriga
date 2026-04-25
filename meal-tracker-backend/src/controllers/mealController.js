import Meal from "../models/Meal.js";

// CREATE
export const createMeal = async (req, res) => {
  try {
    const imageUrl = req.file ? req.file.path : null;

    const meal = await Meal.create({
      ...req.body,
      imageUrl
    });

    res.status(201).json(meal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ (todas)
export const getMeals = async (req, res) => {
  try {
    const meals = await Meal.find().sort({ date: -1, time: -1 });
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ (por ID)
export const getMealById = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);
    res.json(meal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
export const updateMeal = async (req, res) => {
  try {
    const meal = await Meal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(meal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteMeal = async (req, res) => {
  try {
    await Meal.findByIdAndDelete(req.params.id);
    res.json({ message: "Deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};