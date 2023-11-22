import { CreateManyTechnologySkillDto } from "../dto/create-many-technology-skill.dto";
import { CreateTechnologySkillDto } from "../dto/create-technology-skill.dto";
import { UpdateTechnologySkillDto } from "../dto/update-technology-skill.dto";
import { TechnologySkillEntity } from "../entities/technology-skill.entity";

export abstract class TechnologySkillsRepository {
  abstract create(
    createTechnologySkillDto: CreateTechnologySkillDto,
  ): Promise<TechnologySkillEntity>;

  abstract createMany(
    createManyTechnologySkillDto: CreateManyTechnologySkillDto,
  ): Promise<TechnologySkillEntity[]>;

  abstract findAll(): Promise<TechnologySkillEntity[]>;

  abstract findOne(skillId: number): Promise<TechnologySkillEntity>;

  abstract update(
    updateTechnologySkillDto: UpdateTechnologySkillDto,
    skillId: number,
  ): Promise<UpdateTechnologySkillDto>;

  abstract remove(skillId: number): Promise<void>;

  abstract findPreviousSkill(name: string): Promise<TechnologySkillEntity>;

  abstract findManyPreviousSkills(
    createTechnologySkillDto: CreateManyTechnologySkillDto,
  ): Promise<TechnologySkillEntity[] | null>;
}
