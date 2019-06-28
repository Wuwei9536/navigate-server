import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { CardData, Menu, Card } from '../graphql.schema';

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
}
