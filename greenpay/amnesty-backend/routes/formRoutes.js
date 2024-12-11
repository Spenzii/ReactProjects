const express = require("express");
const router = express.Router();
const Form = require("../models/Form");

// Create a new form entry
router.post("/", async (req, res) => {
  try {
    const formData = new Form(req.body);
    await formData.save();
    res.status(201).json({ message: "Form data saved successfully!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Retrieve all form entries
router.get("/", async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
