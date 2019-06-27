import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { CardData, Menu, Card } from '../graphql.schema';
import { async } from 'rxjs/internal/scheduler/async';

@Resolver()
export default class MenuCardResolvers {
  constructor(private readonly prisma: PrismaService) {}

  // 获取全量menu和卡片
  @Query()
  async cardDatas(@Args() args): Promise<CardData[]> {
    const result: CardData[] = [];
    const menus = await this.prisma.query.menus({});
    for (const i of Object.keys(menus)) {
      const cardInfo = await this.prisma.query.cards({
        where: { menu: { id: menus[i].id } },
      });
      result.push({
        ...menus[i],
        card_info: cardInfo,
      });
    }
    return result;
  }

  // 新建单个menu
  @Mutation()
  async createMenu(@Args() args): Promise<Menu> {
    return this.prisma.mutation.createMenu(args);
  }

  // 新建单个card connect menu
  @Mutation()
  async createCard(@Args() args): Promise<Card> {
    return this.prisma.mutation.createCard(args);
  }

  // 删除单个卡片
  @Mutation()
  async deleteCard(@Args() args): Promise<Card> {
    return this.prisma.mutation.deleteCard(args);
  }

  // // 导入数据
  // @Mutation()
  // async a(@Args() args) {
  //   a.forEach(async it => {
  //     const mune = await this.prisma.mutation.createMenu({
  //       data: { menu_name: it.category_CN, menu_icon: it.category_icon },
  //     });
  //     it.item_children.forEach(item => {
  //       this.prisma.mutation.createCard({
  //         data: {
  //           card_title: item.child_name,
  //           card_description: item.child_desc,
  //           card_href: item.a_href,
  //           card_icon: item.img_src,
  //           menu: { connect: { id: mune.id } },
  //         },
  //       });
  //     });
  //   });
  //   // return this.prisma.mutation.createCard(args);
  // }
}
