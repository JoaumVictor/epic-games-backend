import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { CreditCard } from '@prisma/client';
import { CreateCreditCardDto } from './dto';

@Injectable()
export class CreditCardService {
  constructor(private readonly prisma: PrismaService) {}

  async getCreditCard(): Promise<CreditCard[]> {
    return await this.prisma.creditCard.findMany();
  }

  async createCreditCard(data: CreateCreditCardDto): Promise<CreditCard> {
    return await this.prisma.creditCard.create({
      data,
    });
  }
}
