import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreditCardService } from './credit-card.service';
import { CreditCard } from '@prisma/client';
import { CreateCreditCardDto } from './dto';

@Controller('credit-cards')
export class CreditCardController {
  constructor(private readonly creditCardService: CreditCardService) {}

  @Get()
  getCreditCard(): Promise<CreditCard[]> {
    return this.creditCardService.getCreditCard();
  }

  @Post()
  createCreditCard(@Body() req: CreateCreditCardDto): Promise<CreditCard> {
    return this.creditCardService.createCreditCard(req);
  }
}
