import {
  IsCreditCard,
  IsDateString,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateCreditCardDto {
  @IsCreditCard()
  cardNumber: string;

  @IsDateString()
  expirationDate: string;

  @IsNotEmpty()
  @IsString()
  cvv: string;

  @IsNotEmpty()
  @IsString()
  cardholderName: string;
}
