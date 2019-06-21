import { Module } from '@nestjs/common';
import UserResolvers from './user.resolvers';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UserResolvers],
})
export default class UserModule {}
