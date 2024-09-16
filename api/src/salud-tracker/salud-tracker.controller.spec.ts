import { Test, TestingModule } from '@nestjs/testing';
import { SaludTrackerController } from './salud-tracker.controller';
import { SaludTrackerService } from './salud-tracker.service';

describe('SaludTrackerController', () => {
  let controller: SaludTrackerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaludTrackerController],
      providers: [SaludTrackerService],
    }).compile();

    controller = module.get<SaludTrackerController>(SaludTrackerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
