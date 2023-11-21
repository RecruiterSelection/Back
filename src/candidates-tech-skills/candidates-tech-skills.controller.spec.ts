import { Test, TestingModule } from '@nestjs/testing';
import { CandidatesTechSkillsController } from './candidates-tech-skills.controller';
import { CandidatesTechSkillsService } from './candidates-tech-skills.service';

describe('CandidatesTechSkillsController', () => {
  let controller: CandidatesTechSkillsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandidatesTechSkillsController],
      providers: [CandidatesTechSkillsService],
    }).compile();

    controller = module.get<CandidatesTechSkillsController>(CandidatesTechSkillsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
