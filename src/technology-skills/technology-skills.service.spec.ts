import { Test, TestingModule } from '@nestjs/testing';
import { TechnologySkillsService } from './technology-skills.service';

describe('TechnologySkillsService', () => {
  let service: TechnologySkillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnologySkillsService],
    }).compile();

    service = module.get<TechnologySkillsService>(TechnologySkillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
