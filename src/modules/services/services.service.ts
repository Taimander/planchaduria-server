import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class ServicesService {
    
    constructor(private prisma: PrismaService) {}

    async getServices() {
        return await this.prisma.service.findMany();
    }

    async createService(createServiceDto: CreateServiceDto) {
        return await this.prisma.service.create({
            data: {
                name: createServiceDto.name,
                price: createServiceDto.price
            }
        });
    }

}
