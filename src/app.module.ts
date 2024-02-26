import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreditCardService } from './credit-card/credit-card.service';
import { CreditCardController } from './credit-card/credit-card.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, CreditCardController],
  providers: [PrismaService, AppService, CreditCardService],
})
export class AppModule {}
