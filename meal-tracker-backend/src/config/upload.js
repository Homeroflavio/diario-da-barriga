import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

// 🔥 CONFIG FORÇADA AQUI
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "meals",
    allowed_formats: ["jpg", "png", "jpeg"]
  }
});

const upload = multer({ storage });

export default upload;

console.log("Cloudinary KEY:", process.env.CLOUDINARY_API_KEY);