import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
const multer = require('multer');

const storage = multer.diskStorage({
  destination: 'img/',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

@Controller('uploadimg')
export class UploadimgController {
  @Post()
  @UseInterceptors(FileInterceptor('img', { storage }))
  uploadFile(@UploadedFile() file) {
    // console.log(file);
  }
}
