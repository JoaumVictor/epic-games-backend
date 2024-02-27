import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreditCardService } from './credit-card.service';
import { CreditCard } from '@prisma/client';
import { CreateCreditCardDto } from './dto';

@Controller('credit-cards')
export class CreditCardController {
  constructor(private readonly creditCardService: CreditCardService) {}

  @Get()
  getAllCreditCards(): Promise<CreditCard[]> {
    return this.creditCardService.getAllCreditCards();
  }

  @Post()
  createCreditCard(@Body() req: CreateCreditCardDto): Promise<CreditCard> {
    return this.creditCardService.createCreditCard(req);
  }

  @Delete(':id')
  deleteCreditCard(@Param('id') id: string): Promise<CreditCard> {
    // aqui poderia ter um middleware do nestJS pra ter mais controle sobre a validação
    // aqui poderia ter um middleware do nestJS pra ter mais controle sobre a validação
    // aqui poderia ter um middleware do nestJS pra ter mais controle sobre a validação
    // aqui poderia ter um middleware do nestJS pra ter mais controle sobre a validação
    const verifyIfIdIsValidNumber = Number(id);
    if (isNaN(verifyIfIdIsValidNumber)) {
      throw new HttpException('Id inválido', HttpStatus.BAD_REQUEST);
    }
    const verifyIfCreditCardExist = this.creditCardService.getCreditCardById(
      Number(id),
    );
    if (!verifyIfCreditCardExist) {
      throw new HttpException(
        'Cartão de crédito não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.creditCardService.deleteCreditCard(Number(id));
  }
}
