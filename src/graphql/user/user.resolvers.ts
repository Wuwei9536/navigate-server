import { Resolver, Query, Args,Mutation } from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';
import db from '../../../db';
@Resolver('User')
export default class UserResolvers {
  constructor(private readonly prisma: PrismaService) {}

  @Query()
  async users(@Args() args) {
    return await this.prisma.query.users(args);
  }

  // 导入数据
  @Mutation()
  async a(@Args() args) {
    db.forEach(async it => {
      const mune = await this.prisma.mutation.createMenu({
        data: { menu_name: it.category_CN, menu_icon: it.category_icon },
      });
      it.item_children.forEach(item => {
        this.prisma.mutation.createCard({
          data: {
            card_title: item.child_name,
            card_description: item.child_desc,
            card_href: item.a_href,
            card_icon: item.img_src,
            menu: { connect: { id: mune.id } },
          },
        });
      });
    });
    return this.prisma.mutation.createCard(args);
  }
}