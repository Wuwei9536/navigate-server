import { Test, TestingModule } from '@nestjs/testing';
import { UploadimgController } from './uploadimg.controller';

describe('Uploadimg Controller', () => {
  let controller: UploadimgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadimgController],
    }).compile();

    controller = module.get<UploadimgController>(UploadimgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
