import { Resolver, Query, Args } from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';

@Resolver('User')
export default class UserResolvers {
  constructor(private readonly prisma: PrismaService) {}

  @Query()
  async users(@Args() args) {
    return await this.prisma.query.users(args);
  }
}
