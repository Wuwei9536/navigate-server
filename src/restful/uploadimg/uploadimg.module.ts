import { Module } from '@nestjs/common';
import { UploadimgController } from './uploadimg.controller';
import { UploadimgService } from './uploadimg.service';

@Module({
  controllers: [UploadimgController],
  providers: [UploadimgService]
})
export class UploadimgModule {}
