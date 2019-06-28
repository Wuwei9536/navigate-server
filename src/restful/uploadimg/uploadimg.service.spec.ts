import { Test, TestingModule } from '@nestjs/testing';
import { UploadimgService } from './uploadimg.service';

describe('UploadimgService', () => {
  let service: UploadimgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadimgService],
    }).compile();

    service = module.get<UploadimgService>(UploadimgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
