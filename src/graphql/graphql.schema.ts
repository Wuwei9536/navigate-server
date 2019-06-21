
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum CardOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    card_icon_ASC = "card_icon_ASC",
    card_icon_DESC = "card_icon_DESC",
    card_title_ASC = "card_title_ASC",
    card_title_DESC = "card_title_DESC",
    card_description_ASC = "card_description_ASC",
    card_description_DESC = "card_description_DESC",
    card_href_ASC = "card_href_ASC",
    card_href_DESC = "card_href_DESC"
}

export enum MenuOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    menu_icon_ASC = "menu_icon_ASC",
    menu_icon_DESC = "menu_icon_DESC",
    menu_name_ASC = "menu_name_ASC",
    menu_name_DESC = "menu_name_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum PrismaDatabase {
    navigate = "navigate"
}

export enum UserOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC"
}

export class CardCreateInput {
    id?: string;
    card_icon: string;
    card_title: string;
    card_description: string;
    card_href: string;
    menu: MenuCreateOneWithoutCardInput;
}

export class CardCreateManyWithoutMenuInput {
    create?: CardCreateWithoutMenuInput[];
    connect?: CardWhereUniqueInput[];
}

export class CardCreateWithoutMenuInput {
    id?: string;
    card_icon: string;
    card_title: string;
    card_description: string;
    card_href: string;
}

export class CardScalarWhereInput {
    AND?: CardScalarWhereInput[];
    OR?: CardScalarWhereInput[];
    NOT?: CardScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    card_icon?: string;
    card_icon_not?: string;
    card_icon_in?: string[];
    card_icon_not_in?: string[];
    card_icon_lt?: string;
    card_icon_lte?: string;
    card_icon_gt?: string;
    card_icon_gte?: string;
    card_icon_contains?: string;
    card_icon_not_contains?: string;
    card_icon_starts_with?: string;
    card_icon_not_starts_with?: string;
    card_icon_ends_with?: string;
    card_icon_not_ends_with?: string;
    card_title?: string;
    card_title_not?: string;
    card_title_in?: string[];
    card_title_not_in?: string[];
    card_title_lt?: string;
    card_title_lte?: string;
    card_title_gt?: string;
    card_title_gte?: string;
    card_title_contains?: string;
    card_title_not_contains?: string;
    card_title_starts_with?: string;
    card_title_not_starts_with?: string;
    card_title_ends_with?: string;
    card_title_not_ends_with?: string;
    card_description?: string;
    card_description_not?: string;
    card_description_in?: string[];
    card_description_not_in?: string[];
    card_description_lt?: string;
    card_description_lte?: string;
    card_description_gt?: string;
    card_description_gte?: string;
    card_description_contains?: string;
    card_description_not_contains?: string;
    card_description_starts_with?: string;
    card_description_not_starts_with?: string;
    card_description_ends_with?: string;
    card_description_not_ends_with?: string;
    card_href?: string;
    card_href_not?: string;
    card_href_in?: string[];
    card_href_not_in?: string[];
    card_href_lt?: string;
    card_href_lte?: string;
    card_href_gt?: string;
    card_href_gte?: string;
    card_href_contains?: string;
    card_href_not_contains?: string;
    card_href_starts_with?: string;
    card_href_not_starts_with?: string;
    card_href_ends_with?: string;
    card_href_not_ends_with?: string;
}

export class CardSubscriptionWhereInput {
    AND?: CardSubscriptionWhereInput[];
    OR?: CardSubscriptionWhereInput[];
    NOT?: CardSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: CardWhereInput;
}

export class CardUpdateInput {
    card_icon?: string;
    card_title?: string;
    card_description?: string;
    card_href?: string;
    menu?: MenuUpdateOneRequiredWithoutCardInput;
}

export class CardUpdateManyDataInput {
    card_icon?: string;
    card_title?: string;
    card_description?: string;
    card_href?: string;
}

export class CardUpdateManyMutationInput {
    card_icon?: string;
    card_title?: string;
    card_description?: string;
    card_href?: string;
}

export class CardUpdateManyWithoutMenuInput {
    create?: CardCreateWithoutMenuInput[];
    connect?: CardWhereUniqueInput[];
    set?: CardWhereUniqueInput[];
    disconnect?: CardWhereUniqueInput[];
    delete?: CardWhereUniqueInput[];
    update?: CardUpdateWithWhereUniqueWithoutMenuInput[];
    updateMany?: CardUpdateManyWithWhereNestedInput[];
    deleteMany?: CardScalarWhereInput[];
    upsert?: CardUpsertWithWhereUniqueWithoutMenuInput[];
}

export class CardUpdateManyWithWhereNestedInput {
    where: CardScalarWhereInput;
    data: CardUpdateManyDataInput;
}

export class CardUpdateWithoutMenuDataInput {
    card_icon?: string;
    card_title?: string;
    card_description?: string;
    card_href?: string;
}

export class CardUpdateWithWhereUniqueWithoutMenuInput {
    where: CardWhereUniqueInput;
    data: CardUpdateWithoutMenuDataInput;
}

export class CardUpsertWithWhereUniqueWithoutMenuInput {
    where: CardWhereUniqueInput;
    update: CardUpdateWithoutMenuDataInput;
    create: CardCreateWithoutMenuInput;
}

export class CardWhereInput {
    AND?: CardWhereInput[];
    OR?: CardWhereInput[];
    NOT?: CardWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    card_icon?: string;
    card_icon_not?: string;
    card_icon_in?: string[];
    card_icon_not_in?: string[];
    card_icon_lt?: string;
    card_icon_lte?: string;
    card_icon_gt?: string;
    card_icon_gte?: string;
    card_icon_contains?: string;
    card_icon_not_contains?: string;
    card_icon_starts_with?: string;
    card_icon_not_starts_with?: string;
    card_icon_ends_with?: string;
    card_icon_not_ends_with?: string;
    card_title?: string;
    card_title_not?: string;
    card_title_in?: string[];
    card_title_not_in?: string[];
    card_title_lt?: string;
    card_title_lte?: string;
    card_title_gt?: string;
    card_title_gte?: string;
    card_title_contains?: string;
    card_title_not_contains?: string;
    card_title_starts_with?: string;
    card_title_not_starts_with?: string;
    card_title_ends_with?: string;
    card_title_not_ends_with?: string;
    card_description?: string;
    card_description_not?: string;
    card_description_in?: string[];
    card_description_not_in?: string[];
    card_description_lt?: string;
    card_description_lte?: string;
    card_description_gt?: string;
    card_description_gte?: string;
    card_description_contains?: string;
    card_description_not_contains?: string;
    card_description_starts_with?: string;
    card_description_not_starts_with?: string;
    card_description_ends_with?: string;
    card_description_not_ends_with?: string;
    card_href?: string;
    card_href_not?: string;
    card_href_in?: string[];
    card_href_not_in?: string[];
    card_href_lt?: string;
    card_href_lte?: string;
    card_href_gt?: string;
    card_href_gte?: string;
    card_href_contains?: string;
    card_href_not_contains?: string;
    card_href_starts_with?: string;
    card_href_not_starts_with?: string;
    card_href_ends_with?: string;
    card_href_not_ends_with?: string;
    menu?: MenuWhereInput;
}

export class CardWhereUniqueInput {
    id?: string;
}

export class CreateMenuInput {
    menu_icon: string;
    menu_name: string;
}

export class MenuCreateInput {
    id?: string;
    menu_icon: string;
    menu_name: string;
    card?: CardCreateManyWithoutMenuInput;
}

export class MenuCreateOneWithoutCardInput {
    create?: MenuCreateWithoutCardInput;
    connect?: MenuWhereUniqueInput;
}

export class MenuCreateWithoutCardInput {
    id?: string;
    menu_icon: string;
    menu_name: string;
}

export class MenuSubscriptionWhereInput {
    AND?: MenuSubscriptionWhereInput[];
    OR?: MenuSubscriptionWhereInput[];
    NOT?: MenuSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: MenuWhereInput;
}

export class MenuUpdateInput {
    menu_icon?: string;
    menu_name?: string;
    card?: CardUpdateManyWithoutMenuInput;
}

export class MenuUpdateManyMutationInput {
    menu_icon?: string;
    menu_name?: string;
}

export class MenuUpdateOneRequiredWithoutCardInput {
    create?: MenuCreateWithoutCardInput;
    connect?: MenuWhereUniqueInput;
    update?: MenuUpdateWithoutCardDataInput;
    upsert?: MenuUpsertWithoutCardInput;
}

export class MenuUpdateWithoutCardDataInput {
    menu_icon?: string;
    menu_name?: string;
}

export class MenuUpsertWithoutCardInput {
    update: MenuUpdateWithoutCardDataInput;
    create: MenuCreateWithoutCardInput;
}

export class MenuWhereInput {
    AND?: MenuWhereInput[];
    OR?: MenuWhereInput[];
    NOT?: MenuWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    menu_icon?: string;
    menu_icon_not?: string;
    menu_icon_in?: string[];
    menu_icon_not_in?: string[];
    menu_icon_lt?: string;
    menu_icon_lte?: string;
    menu_icon_gt?: string;
    menu_icon_gte?: string;
    menu_icon_contains?: string;
    menu_icon_not_contains?: string;
    menu_icon_starts_with?: string;
    menu_icon_not_starts_with?: string;
    menu_icon_ends_with?: string;
    menu_icon_not_ends_with?: string;
    menu_name?: string;
    menu_name_not?: string;
    menu_name_in?: string[];
    menu_name_not_in?: string[];
    menu_name_lt?: string;
    menu_name_lte?: string;
    menu_name_gt?: string;
    menu_name_gte?: string;
    menu_name_contains?: string;
    menu_name_not_contains?: string;
    menu_name_starts_with?: string;
    menu_name_not_starts_with?: string;
    menu_name_ends_with?: string;
    menu_name_not_ends_with?: string;
    card_every?: CardWhereInput;
    card_some?: CardWhereInput;
    card_none?: CardWhereInput;
}

export class MenuWhereUniqueInput {
    id?: string;
}

export class UserCreateInput {
    id?: string;
    name: string;
}

export class UserSubscriptionWhereInput {
    AND?: UserSubscriptionWhereInput[];
    OR?: UserSubscriptionWhereInput[];
    NOT?: UserSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: UserWhereInput;
}

export class UserUpdateInput {
    name?: string;
}

export class UserUpdateManyMutationInput {
    name?: string;
}

export class UserWhereInput {
    AND?: UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
}

export class UserWhereUniqueInput {
    id?: string;
}

export interface Node {
    id: string;
}

export class AggregateCard {
    count: number;
}

export class AggregateMenu {
    count: number;
}

export class AggregateUser {
    count: number;
}

export class BatchPayload {
    count: Long;
}

export class Card implements Node {
    id: string;
    card_icon: string;
    card_title: string;
    card_description: string;
    card_href: string;
    menu: Menu;
}

export class CardConnection {
    pageInfo: PageInfo;
    edges: CardEdge[];
    aggregate: AggregateCard;
}

export class CardData {
    id: string;
    menu_icon: string;
    menu_name: string;
    card_info?: Card[];
}

export class CardEdge {
    node: Card;
    cursor: string;
}

export class CardPreviousValues {
    id: string;
    card_icon: string;
    card_title: string;
    card_description: string;
    card_href: string;
}

export class CardSubscriptionPayload {
    mutation: MutationType;
    node?: Card;
    updatedFields?: string[];
    previousValues?: CardPreviousValues;
}

export class Menu implements Node {
    id: string;
    menu_icon: string;
    menu_name: string;
    card?: Card[];
}

export class MenuConnection {
    pageInfo: PageInfo;
    edges: MenuEdge[];
    aggregate: AggregateMenu;
}

export class MenuEdge {
    node: Menu;
    cursor: string;
}

export class MenuPreviousValues {
    id: string;
    menu_icon: string;
    menu_name: string;
}

export class MenuSubscriptionPayload {
    mutation: MutationType;
    node?: Menu;
    updatedFields?: string[];
    previousValues?: MenuPreviousValues;
}

export abstract class IMutation {
    abstract createUser(data: UserCreateInput): User | Promise<User>;

    abstract createMenu(data: MenuCreateInput): Menu | Promise<Menu>;

    abstract createCard(data: CardCreateInput): Card | Promise<Card>;

    abstract updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;

    abstract updateMenu(data: MenuUpdateInput, where: MenuWhereUniqueInput): Menu | Promise<Menu>;

    abstract updateCard(data: CardUpdateInput, where: CardWhereUniqueInput): Card | Promise<Card>;

    abstract deleteUser(where: UserWhereUniqueInput): User | Promise<User>;

    abstract deleteMenu(where: MenuWhereUniqueInput): Menu | Promise<Menu>;

    abstract deleteCard(where: CardWhereUniqueInput): Card | Promise<Card>;

    abstract upsertUser(where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput): User | Promise<User>;

    abstract upsertMenu(where: MenuWhereUniqueInput, create: MenuCreateInput, update: MenuUpdateInput): Menu | Promise<Menu>;

    abstract upsertCard(where: CardWhereUniqueInput, create: CardCreateInput, update: CardUpdateInput): Card | Promise<Card>;

    abstract updateManyUsers(data: UserUpdateManyMutationInput, where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyMenus(data: MenuUpdateManyMutationInput, where?: MenuWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyCards(data: CardUpdateManyMutationInput, where?: CardWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyUsers(where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyMenus(where?: MenuWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyCards(where?: CardWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract executeRaw(database?: PrismaDatabase, query: string): Json | Promise<Json>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export abstract class IQuery {
    abstract users(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): User[] | Promise<User[]>;

    abstract menus(where?: MenuWhereInput, orderBy?: MenuOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Menu[] | Promise<Menu[]>;

    abstract cards(where?: CardWhereInput, orderBy?: CardOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Card[] | Promise<Card[]>;

    abstract user(where: UserWhereUniqueInput): User | Promise<User>;

    abstract menu(where: MenuWhereUniqueInput): Menu | Promise<Menu>;

    abstract card(where: CardWhereUniqueInput): Card | Promise<Card>;

    abstract usersConnection(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserConnection | Promise<UserConnection>;

    abstract menusConnection(where?: MenuWhereInput, orderBy?: MenuOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): MenuConnection | Promise<MenuConnection>;

    abstract cardsConnection(where?: CardWhereInput, orderBy?: CardOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): CardConnection | Promise<CardConnection>;

    abstract node(id: string): Node | Promise<Node>;

    abstract CardDatas(): CardData[] | Promise<CardData[]>;
}

export abstract class ISubscription {
    abstract user(where?: UserSubscriptionWhereInput): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;

    abstract menu(where?: MenuSubscriptionWhereInput): MenuSubscriptionPayload | Promise<MenuSubscriptionPayload>;

    abstract card(where?: CardSubscriptionWhereInput): CardSubscriptionPayload | Promise<CardSubscriptionPayload>;
}

export class User implements Node {
    id: string;
    name: string;
}

export class UserConnection {
    pageInfo: PageInfo;
    edges: UserEdge[];
    aggregate: AggregateUser;
}

export class UserEdge {
    node: User;
    cursor: string;
}

export class UserPreviousValues {
    id: string;
    name: string;
}

export class UserSubscriptionPayload {
    mutation: MutationType;
    node?: User;
    updatedFields?: string[];
    previousValues?: UserPreviousValues;
}

export type Json = any;
export type Long = any;
