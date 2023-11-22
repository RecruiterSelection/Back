import { Test, TestingModule } from '@nestjs/testing';
import { CandidatesTechSkillsService } from './candidates-tech-skills.service';

describe('CandidatesTechSkillsService', () => {
  let service: CandidatesTechSkillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CandidatesTechSkillsService],
    }).compile();

    service = module.get<CandidatesTechSkillsService>(CandidatesTechSkillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
