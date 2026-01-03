import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import Cloth from "../models/cloth.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../uploads"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.post("/upload", upload.single("image"), async (req, res) => {
  const cloth = new Cloth({
    name: req.body.name || "My Cloth",
    category: req.body.category,
    color: req.body.color || "unknown",
    image: req.file.filename
  });
  await cloth.save();
  res.json({ success: true, cloth });
});

router.get("/", async (req, res) => {
  const clothes = await Cloth.find().sort({ createdAt: -1 });
  res.json({ success: true, clothes });
});

router.delete("/:id", async (req, res) => {
  await Cloth.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;
