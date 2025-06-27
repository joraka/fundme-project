const express = require("express");
const router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "./public/data/uploads/" });

router.post("/api/new-idea", upload.single("uploaded_file"), (req, res) => {
  try {
    console.log(req.file, req.body);

    const body = req.body;
    console.log(body);
    res.json(body);
  } catch (err) {
    res.status(500).json({ error: "internal server error" });
    console.error(err);
  }
});

module.exports = router;
