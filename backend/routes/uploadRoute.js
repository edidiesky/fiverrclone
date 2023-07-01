import express from "express";
import path from "path";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: 'dl93zl9fn',
  api_key: '896513678197917',
  api_secret: '1H2tQKwTv3fsE9SyM9WTJiGrZJQ',
});

const router = express.Router();
// Configure Multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.array("files", 4), async (req, res) => {
  // let files = req.files;
  // const uploadPromises = files.map((file) =>
  //   cloudinary.uploader.upload(file.buffer)
  // );
  // const uploadResults = await Promise.all(uploadPromises);
  // res.status(200).json(uploadResults);
  try {
    const uploadPromises = req.files.map((file) =>
      cloudinary.uploader.upload(file.buffer)
    );
    const uploadResults = await Promise.all(uploadPromises);
    res.status(200).json(uploadResults);
  } catch (error) {
    console.error('Error uploading files:', error);
    res.status(500).json({ error: 'Error uploading files' });
  }
});

export default router;
