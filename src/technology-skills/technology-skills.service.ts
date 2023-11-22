import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { TechnologySkillsPrismaRepository } from "./repositories/prisma/technology-skills.prisma.repository";
import { UpdateTechnologySkillDto } from "./dto/update-technology-skill.dto";
import { CreateTechnologySkillDto } from "./dto/create-technology-skill.dto";
import { CreateManyTechnologySkillDto } from "./dto/create-many-technology-skill.dto";

@Injectable()
export class TechnologySkillsService {
  constructor(private readonly repository: TechnologySkillsPrismaRepository) {}

  async create(createTechnologySkillDto: CreateTechnologySkillDto) {
    const { name } = createTechnologySkillDto;
    const skill = await this.repository.findPreviousSkill(name);
    if (skill) {
      throw new ConflictException("Skill with this name already exists");
    }
    return await this.repository.create({ ...createTechnologySkillDto });
  }

  async createMany(createManyTechnologySkillDto: CreateManyTechnologySkillDto) {
    const previousNames = await this.repository.findManyPreviousSkills(
      createManyTechnologySkillDto,
    );
    console.log();
    if (previousNames && previousNames.length > 0) {
      throw new ConflictException("Skills with these names already exists");
    }
    return await this.repository.createMany(createManyTechnologySkillDto);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    const skill = await this.repository.findOne(id);
    if (!skill) {
      throw new NotFoundException("Skill not found");
    }
    return skill;
  }

  async update(body: UpdateTechnologySkillDto, id: number) {
    const skill = await this.repository.findOne(id);
    if (!skill) {
      throw new NotFoundException("Skill not found");
    }
    return await this.repository.update(body, id);
  }

  async remove(id: number) {
    await this.repository.remove(id);
  }
}
