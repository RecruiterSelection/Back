import { Test, TestingModule } from '@nestjs/testing';
import { TechnologySkillsController } from './technology-skills.controller';
import { TechnologySkillsService } from './technology-skills.service';

describe('TechnologySkillsController', () => {
  let controller: TechnologySkillsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnologySkillsController],
      providers: [TechnologySkillsService],
    }).compile();

    controller = module.get<TechnologySkillsController>(TechnologySkillsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
