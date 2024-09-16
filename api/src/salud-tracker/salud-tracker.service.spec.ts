import { Test, TestingModule } from '@nestjs/testing';
import { SaludTrackerService } from './salud-tracker.service';

describe('SaludTrackerService', () => {
  let service: SaludTrackerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaludTrackerService],
    }).compile();

    service = module.get<SaludTrackerService>(SaludTrackerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
