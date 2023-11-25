import { Injectable } from "@nestjs/common";
import { CreateApplicationDto } from "src/applications/dto/create-application.dto";
import { UpdateApplicationDto } from "src/applications/dto/update-application.dto";
import { ApplicationEntity } from "src/applications/entities/application.entity";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ApllicationsPrismaRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    candidateId: number,
    jobId: number,
    createApplicationDto: CreateApplicationDto,
  ): Promise<ApplicationEntity> {
    const candidate = await this.prisma.candidateProfiles.findFirst({
      where: { profileId: candidateId },
    });

    const job = await this.prisma.jobListings.findFirst({ where: { jobId } });

    return await this.prisma.applications.create({
      data: {
        candidateProfilesProfileId: (await candidate).profileId,
        jobListingsJobId: (await job).jobId,
        ...createApplicationDto,
      },
    });
  }

  async findAll(): Promise<ApplicationEntity[]> {
    return await this.prisma.applications.findMany({
      include: {
        candidateProfileId: {
          select: {
            userId: true,
            firstName: true,
            lastName: true,
            created_at: true,
            updated_at: true,
            education: true,
            experience: true,
            references: true,
            address: true,
          },
        },
        jobListingJobId: {
          select: {
            title: true,
            description: true,
            created_at: true,
            updated_at: true,
            requirements: true,
            location: true,
            jobType: true,
            benefits: true,
            responsibilities: true,
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<ApplicationEntity> {
    return await this.prisma.applications.findFirst({
      where: { applicationId: id },
      include: {
        candidateProfileId: {
          select: {
            userId: true,
            firstName: true,
            lastName: true,
            created_at: true,
            updated_at: true,
            education: true,
            experience: true,
            references: true,
            address: true,
          },
        },
        jobListingJobId: {
          select: {
            title: true,
            description: true,
            created_at: true,
            updated_at: true,
            requirements: true,
            location: true,
          },
        },
      },
    });
  }

  async update(
    id: number,
    updateApplicationDto: UpdateApplicationDto,
  ): Promise<ApplicationEntity> {
    return await this.prisma.applications.update({
      where: { applicationId: id },
      data: updateApplicationDto,
    });
  }

  async remove(id: number): Promise<ApplicationEntity> {
    return this.prisma.applications.delete({ where: { applicationId: id } });
  }

  async findAlreadyApplied(
    candidateId: number,
    jobId: number,
  ): Promise<ApplicationEntity | null> {
    return await this.prisma.applications.findFirst({
      where: {
        candidateProfilesProfileId: candidateId,
        jobListingsJobId: jobId,
      },
    });
  }
}
