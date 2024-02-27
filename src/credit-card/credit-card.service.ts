import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { CreditCard } from '@prisma/client';
import { CreateCreditCardDto } from './dto';

@Injectable()
export class CreditCardService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllCreditCards(): Promise<CreditCard[]> {
    return await this.prisma.creditCard.findMany();
  }

  async getCreditCardById(id: number): Promise<CreditCard> {
    return await this.prisma.creditCard.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createCreditCard(data: CreateCreditCardDto): Promise<CreditCard> {
    return await this.prisma.creditCard.create({
      data,
    });
  }

  async deleteCreditCard(id: number): Promise<CreditCard> {
    return await this.prisma.creditCard.delete({
      where: {
        id: id,
      },
    });
  }
}
