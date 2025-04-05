import multer from 'multer';
import path from 'path';
import * as fs from 'node:fs';

// Папка для загрузки
const uploadDir = 'uploads';

// Создаем папку, если ее нет
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log(`Папка ${uploadDir} создана`);
}

// Настройка multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

export default multer({ storage });
