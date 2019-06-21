import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';

@Resolver()
export default class MenuCardResolvers {
  constructor(private readonly prisma: PrismaService) {}

  // 新建单个menu
  @Mutation()
  async createMenu(@Args() args) {
    return this.prisma.mutation.createMenu(args);
  }
}
