import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import MenuCardResolvers from './menuCard.resolvers';

@Module({
  imports: [PrismaModule],
  providers: [MenuCardResolvers],
})
export default class MenuCard {}
