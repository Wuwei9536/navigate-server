import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    menus: <T = Array<Menu | null>>(args: { where?: MenuWhereInput | null, orderBy?: MenuOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cards: <T = Array<Card | null>>(args: { where?: CardWhereInput | null, orderBy?: CardOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    menu: <T = Menu | null>(args: { where: MenuWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    card: <T = Card | null>(args: { where: CardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    menusConnection: <T = MenuConnection>(args: { where?: MenuWhereInput | null, orderBy?: MenuOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cardsConnection: <T = CardConnection>(args: { where?: CardWhereInput | null, orderBy?: CardOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMenu: <T = Menu>(args: { data: MenuCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCard: <T = Card>(args: { data: CardCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateMenu: <T = Menu | null>(args: { data: MenuUpdateInput, where: MenuWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateCard: <T = Card | null>(args: { data: CardUpdateInput, where: CardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteMenu: <T = Menu | null>(args: { where: MenuWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteCard: <T = Card | null>(args: { where: CardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMenu: <T = Menu>(args: { where: MenuWhereUniqueInput, create: MenuCreateInput, update: MenuUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCard: <T = Card>(args: { where: CardWhereUniqueInput, create: CardCreateInput, update: CardUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMenus: <T = BatchPayload>(args: { data: MenuUpdateManyMutationInput, where?: MenuWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCards: <T = BatchPayload>(args: { data: CardUpdateManyMutationInput, where?: CardWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMenus: <T = BatchPayload>(args: { where?: MenuWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCards: <T = BatchPayload>(args: { where?: CardWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    executeRaw: <T = Json>(args: { database?: PrismaDatabase | null, query: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    menu: <T = MenuSubscriptionPayload | null>(args: { where?: MenuSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    card: <T = CardSubscriptionPayload | null>(args: { where?: CardSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Menu: (where?: MenuWhereInput) => Promise<boolean>
  Card: (where?: CardWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateCard {
  count: Int!
}

type AggregateMenu {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Card implements Node {
  id: ID!
  card_icon: String!
  card_title: String!
  card_description: String!
  card_href: String!
  menu: Menu!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type CardConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CardEdge]!
  aggregate: AggregateCard!
}

input CardCreateInput {
  id: ID
  card_icon: String!
  card_title: String!
  card_description: String!
  card_href: String!
  menu: MenuCreateOneWithoutCardInput!
}

input CardCreateManyWithoutMenuInput {
  create: [CardCreateWithoutMenuInput!]
  connect: [CardWhereUniqueInput!]
}

input CardCreateWithoutMenuInput {
  id: ID
  card_icon: String!
  card_title: String!
  card_description: String!
  card_href: String!
}

"""An edge in a connection."""
type CardEdge {
  """The item at the end of the edge."""
  node: Card!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CardOrderByInput {
  id_ASC
  id_DESC
  card_icon_ASC
  card_icon_DESC
  card_title_ASC
  card_title_DESC
  card_description_ASC
  card_description_DESC
  card_href_ASC
  card_href_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CardPreviousValues {
  id: ID!
  card_icon: String!
  card_title: String!
  card_description: String!
  card_href: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input CardScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [CardScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  card_icon: String

  """All values that are not equal to given value."""
  card_icon_not: String

  """All values that are contained in given list."""
  card_icon_in: [String!]

  """All values that are not contained in given list."""
  card_icon_not_in: [String!]

  """All values less than the given value."""
  card_icon_lt: String

  """All values less than or equal the given value."""
  card_icon_lte: String

  """All values greater than the given value."""
  card_icon_gt: String

  """All values greater than or equal the given value."""
  card_icon_gte: String

  """All values containing the given string."""
  card_icon_contains: String

  """All values not containing the given string."""
  card_icon_not_contains: String

  """All values starting with the given string."""
  card_icon_starts_with: String

  """All values not starting with the given string."""
  card_icon_not_starts_with: String

  """All values ending with the given string."""
  card_icon_ends_with: String

  """All values not ending with the given string."""
  card_icon_not_ends_with: String
  card_title: String

  """All values that are not equal to given value."""
  card_title_not: String

  """All values that are contained in given list."""
  card_title_in: [String!]

  """All values that are not contained in given list."""
  card_title_not_in: [String!]

  """All values less than the given value."""
  card_title_lt: String

  """All values less than or equal the given value."""
  card_title_lte: String

  """All values greater than the given value."""
  card_title_gt: String

  """All values greater than or equal the given value."""
  card_title_gte: String

  """All values containing the given string."""
  card_title_contains: String

  """All values not containing the given string."""
  card_title_not_contains: String

  """All values starting with the given string."""
  card_title_starts_with: String

  """All values not starting with the given string."""
  card_title_not_starts_with: String

  """All values ending with the given string."""
  card_title_ends_with: String

  """All values not ending with the given string."""
  card_title_not_ends_with: String
  card_description: String

  """All values that are not equal to given value."""
  card_description_not: String

  """All values that are contained in given list."""
  card_description_in: [String!]

  """All values that are not contained in given list."""
  card_description_not_in: [String!]

  """All values less than the given value."""
  card_description_lt: String

  """All values less than or equal the given value."""
  card_description_lte: String

  """All values greater than the given value."""
  card_description_gt: String

  """All values greater than or equal the given value."""
  card_description_gte: String

  """All values containing the given string."""
  card_description_contains: String

  """All values not containing the given string."""
  card_description_not_contains: String

  """All values starting with the given string."""
  card_description_starts_with: String

  """All values not starting with the given string."""
  card_description_not_starts_with: String

  """All values ending with the given string."""
  card_description_ends_with: String

  """All values not ending with the given string."""
  card_description_not_ends_with: String
  card_href: String

  """All values that are not equal to given value."""
  card_href_not: String

  """All values that are contained in given list."""
  card_href_in: [String!]

  """All values that are not contained in given list."""
  card_href_not_in: [String!]

  """All values less than the given value."""
  card_href_lt: String

  """All values less than or equal the given value."""
  card_href_lte: String

  """All values greater than the given value."""
  card_href_gt: String

  """All values greater than or equal the given value."""
  card_href_gte: String

  """All values containing the given string."""
  card_href_contains: String

  """All values not containing the given string."""
  card_href_not_contains: String

  """All values starting with the given string."""
  card_href_starts_with: String

  """All values not starting with the given string."""
  card_href_not_starts_with: String

  """All values ending with the given string."""
  card_href_ends_with: String

  """All values not ending with the given string."""
  card_href_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type CardSubscriptionPayload {
  mutation: MutationType!
  node: Card
  updatedFields: [String!]
  previousValues: CardPreviousValues
}

input CardSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CardSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CardWhereInput
}

input CardUpdateInput {
  card_icon: String
  card_title: String
  card_description: String
  card_href: String
  menu: MenuUpdateOneRequiredWithoutCardInput
}

input CardUpdateManyDataInput {
  card_icon: String
  card_title: String
  card_description: String
  card_href: String
}

input CardUpdateManyMutationInput {
  card_icon: String
  card_title: String
  card_description: String
  card_href: String
}

input CardUpdateManyWithoutMenuInput {
  create: [CardCreateWithoutMenuInput!]
  connect: [CardWhereUniqueInput!]
  set: [CardWhereUniqueInput!]
  disconnect: [CardWhereUniqueInput!]
  delete: [CardWhereUniqueInput!]
  update: [CardUpdateWithWhereUniqueWithoutMenuInput!]
  updateMany: [CardUpdateManyWithWhereNestedInput!]
  deleteMany: [CardScalarWhereInput!]
  upsert: [CardUpsertWithWhereUniqueWithoutMenuInput!]
}

input CardUpdateManyWithWhereNestedInput {
  where: CardScalarWhereInput!
  data: CardUpdateManyDataInput!
}

input CardUpdateWithoutMenuDataInput {
  card_icon: String
  card_title: String
  card_description: String
  card_href: String
}

input CardUpdateWithWhereUniqueWithoutMenuInput {
  where: CardWhereUniqueInput!
  data: CardUpdateWithoutMenuDataInput!
}

input CardUpsertWithWhereUniqueWithoutMenuInput {
  where: CardWhereUniqueInput!
  update: CardUpdateWithoutMenuDataInput!
  create: CardCreateWithoutMenuInput!
}

input CardWhereInput {
  """Logical AND on all given filters."""
  AND: [CardWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  card_icon: String

  """All values that are not equal to given value."""
  card_icon_not: String

  """All values that are contained in given list."""
  card_icon_in: [String!]

  """All values that are not contained in given list."""
  card_icon_not_in: [String!]

  """All values less than the given value."""
  card_icon_lt: String

  """All values less than or equal the given value."""
  card_icon_lte: String

  """All values greater than the given value."""
  card_icon_gt: String

  """All values greater than or equal the given value."""
  card_icon_gte: String

  """All values containing the given string."""
  card_icon_contains: String

  """All values not containing the given string."""
  card_icon_not_contains: String

  """All values starting with the given string."""
  card_icon_starts_with: String

  """All values not starting with the given string."""
  card_icon_not_starts_with: String

  """All values ending with the given string."""
  card_icon_ends_with: String

  """All values not ending with the given string."""
  card_icon_not_ends_with: String
  card_title: String

  """All values that are not equal to given value."""
  card_title_not: String

  """All values that are contained in given list."""
  card_title_in: [String!]

  """All values that are not contained in given list."""
  card_title_not_in: [String!]

  """All values less than the given value."""
  card_title_lt: String

  """All values less than or equal the given value."""
  card_title_lte: String

  """All values greater than the given value."""
  card_title_gt: String

  """All values greater than or equal the given value."""
  card_title_gte: String

  """All values containing the given string."""
  card_title_contains: String

  """All values not containing the given string."""
  card_title_not_contains: String

  """All values starting with the given string."""
  card_title_starts_with: String

  """All values not starting with the given string."""
  card_title_not_starts_with: String

  """All values ending with the given string."""
  card_title_ends_with: String

  """All values not ending with the given string."""
  card_title_not_ends_with: String
  card_description: String

  """All values that are not equal to given value."""
  card_description_not: String

  """All values that are contained in given list."""
  card_description_in: [String!]

  """All values that are not contained in given list."""
  card_description_not_in: [String!]

  """All values less than the given value."""
  card_description_lt: String

  """All values less than or equal the given value."""
  card_description_lte: String

  """All values greater than the given value."""
  card_description_gt: String

  """All values greater than or equal the given value."""
  card_description_gte: String

  """All values containing the given string."""
  card_description_contains: String

  """All values not containing the given string."""
  card_description_not_contains: String

  """All values starting with the given string."""
  card_description_starts_with: String

  """All values not starting with the given string."""
  card_description_not_starts_with: String

  """All values ending with the given string."""
  card_description_ends_with: String

  """All values not ending with the given string."""
  card_description_not_ends_with: String
  card_href: String

  """All values that are not equal to given value."""
  card_href_not: String

  """All values that are contained in given list."""
  card_href_in: [String!]

  """All values that are not contained in given list."""
  card_href_not_in: [String!]

  """All values less than the given value."""
  card_href_lt: String

  """All values less than or equal the given value."""
  card_href_lte: String

  """All values greater than the given value."""
  card_href_gt: String

  """All values greater than or equal the given value."""
  card_href_gte: String

  """All values containing the given string."""
  card_href_contains: String

  """All values not containing the given string."""
  card_href_not_contains: String

  """All values starting with the given string."""
  card_href_starts_with: String

  """All values not starting with the given string."""
  card_href_not_starts_with: String

  """All values ending with the given string."""
  card_href_ends_with: String

  """All values not ending with the given string."""
  card_href_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  menu: MenuWhereInput
}

input CardWhereUniqueInput {
  id: ID
  card_title: String
}

scalar DateTime

"""Raw JSON value"""
scalar Json

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Menu implements Node {
  id: ID!
  menu_icon: String!
  menu_name: String!
  card(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type MenuConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MenuEdge]!
  aggregate: AggregateMenu!
}

input MenuCreateInput {
  id: ID
  menu_icon: String!
  menu_name: String!
  card: CardCreateManyWithoutMenuInput
}

input MenuCreateOneWithoutCardInput {
  create: MenuCreateWithoutCardInput
  connect: MenuWhereUniqueInput
}

input MenuCreateWithoutCardInput {
  id: ID
  menu_icon: String!
  menu_name: String!
}

"""An edge in a connection."""
type MenuEdge {
  """The item at the end of the edge."""
  node: Menu!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MenuOrderByInput {
  id_ASC
  id_DESC
  menu_icon_ASC
  menu_icon_DESC
  menu_name_ASC
  menu_name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MenuPreviousValues {
  id: ID!
  menu_icon: String!
  menu_name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type MenuSubscriptionPayload {
  mutation: MutationType!
  node: Menu
  updatedFields: [String!]
  previousValues: MenuPreviousValues
}

input MenuSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MenuSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MenuSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MenuSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MenuWhereInput
}

input MenuUpdateInput {
  menu_icon: String
  menu_name: String
  card: CardUpdateManyWithoutMenuInput
}

input MenuUpdateManyMutationInput {
  menu_icon: String
  menu_name: String
}

input MenuUpdateOneRequiredWithoutCardInput {
  create: MenuCreateWithoutCardInput
  connect: MenuWhereUniqueInput
  update: MenuUpdateWithoutCardDataInput
  upsert: MenuUpsertWithoutCardInput
}

input MenuUpdateWithoutCardDataInput {
  menu_icon: String
  menu_name: String
}

input MenuUpsertWithoutCardInput {
  update: MenuUpdateWithoutCardDataInput!
  create: MenuCreateWithoutCardInput!
}

input MenuWhereInput {
  """Logical AND on all given filters."""
  AND: [MenuWhereInput!]

  """Logical OR on all given filters."""
  OR: [MenuWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MenuWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  menu_icon: String

  """All values that are not equal to given value."""
  menu_icon_not: String

  """All values that are contained in given list."""
  menu_icon_in: [String!]

  """All values that are not contained in given list."""
  menu_icon_not_in: [String!]

  """All values less than the given value."""
  menu_icon_lt: String

  """All values less than or equal the given value."""
  menu_icon_lte: String

  """All values greater than the given value."""
  menu_icon_gt: String

  """All values greater than or equal the given value."""
  menu_icon_gte: String

  """All values containing the given string."""
  menu_icon_contains: String

  """All values not containing the given string."""
  menu_icon_not_contains: String

  """All values starting with the given string."""
  menu_icon_starts_with: String

  """All values not starting with the given string."""
  menu_icon_not_starts_with: String

  """All values ending with the given string."""
  menu_icon_ends_with: String

  """All values not ending with the given string."""
  menu_icon_not_ends_with: String
  menu_name: String

  """All values that are not equal to given value."""
  menu_name_not: String

  """All values that are contained in given list."""
  menu_name_in: [String!]

  """All values that are not contained in given list."""
  menu_name_not_in: [String!]

  """All values less than the given value."""
  menu_name_lt: String

  """All values less than or equal the given value."""
  menu_name_lte: String

  """All values greater than the given value."""
  menu_name_gt: String

  """All values greater than or equal the given value."""
  menu_name_gte: String

  """All values containing the given string."""
  menu_name_contains: String

  """All values not containing the given string."""
  menu_name_not_contains: String

  """All values starting with the given string."""
  menu_name_starts_with: String

  """All values not starting with the given string."""
  menu_name_not_starts_with: String

  """All values ending with the given string."""
  menu_name_ends_with: String

  """All values not ending with the given string."""
  menu_name_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  card_every: CardWhereInput
  card_some: CardWhereInput
  card_none: CardWhereInput
}

input MenuWhereUniqueInput {
  id: ID
  menu_name: String
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createMenu(data: MenuCreateInput!): Menu!
  createCard(data: CardCreateInput!): Card!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateMenu(data: MenuUpdateInput!, where: MenuWhereUniqueInput!): Menu
  updateCard(data: CardUpdateInput!, where: CardWhereUniqueInput!): Card
  deleteUser(where: UserWhereUniqueInput!): User
  deleteMenu(where: MenuWhereUniqueInput!): Menu
  deleteCard(where: CardWhereUniqueInput!): Card
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertMenu(where: MenuWhereUniqueInput!, create: MenuCreateInput!, update: MenuUpdateInput!): Menu!
  upsertCard(where: CardWhereUniqueInput!, create: CardCreateInput!, update: CardUpdateInput!): Card!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyMenus(data: MenuUpdateManyMutationInput!, where: MenuWhereInput): BatchPayload!
  updateManyCards(data: CardUpdateManyMutationInput!, where: CardWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyMenus(where: MenuWhereInput): BatchPayload!
  deleteManyCards(where: CardWhereInput): BatchPayload!
  executeRaw(database: PrismaDatabase, query: String!): Json!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PrismaDatabase {
  navigate
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  menus(where: MenuWhereInput, orderBy: MenuOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Menu]!
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card]!
  user(where: UserWhereUniqueInput!): User
  menu(where: MenuWhereUniqueInput!): Menu
  card(where: CardWhereUniqueInput!): Card
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  menusConnection(where: MenuWhereInput, orderBy: MenuOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MenuConnection!
  cardsConnection(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CardConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  menu(where: MenuSubscriptionWhereInput): MenuSubscriptionPayload
  card(where: CardSubscriptionWhereInput): CardSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  name: String
}

input UserUpdateManyMutationInput {
  name: String
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input UserWhereUniqueInput {
  id: ID
  name: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type CardOrderByInput =   'id_ASC' |
  'id_DESC' |
  'card_icon_ASC' |
  'card_icon_DESC' |
  'card_title_ASC' |
  'card_title_DESC' |
  'card_description_ASC' |
  'card_description_DESC' |
  'card_href_ASC' |
  'card_href_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MenuOrderByInput =   'id_ASC' |
  'id_DESC' |
  'menu_icon_ASC' |
  'menu_icon_DESC' |
  'menu_name_ASC' |
  'menu_name_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type PrismaDatabase =   'navigate'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC'

export interface CardCreateInput {
  id?: ID_Input | null
  card_icon: String
  card_title: String
  card_description: String
  card_href: String
  menu: MenuCreateOneWithoutCardInput
}

export interface CardCreateManyWithoutMenuInput {
  create?: CardCreateWithoutMenuInput[] | CardCreateWithoutMenuInput | null
  connect?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
}

export interface CardCreateWithoutMenuInput {
  id?: ID_Input | null
  card_icon: String
  card_title: String
  card_description: String
  card_href: String
}

export interface CardScalarWhereInput {
  AND?: CardScalarWhereInput[] | CardScalarWhereInput | null
  OR?: CardScalarWhereInput[] | CardScalarWhereInput | null
  NOT?: CardScalarWhereInput[] | CardScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  card_icon?: String | null
  card_icon_not?: String | null
  card_icon_in?: String[] | String | null
  card_icon_not_in?: String[] | String | null
  card_icon_lt?: String | null
  card_icon_lte?: String | null
  card_icon_gt?: String | null
  card_icon_gte?: String | null
  card_icon_contains?: String | null
  card_icon_not_contains?: String | null
  card_icon_starts_with?: String | null
  card_icon_not_starts_with?: String | null
  card_icon_ends_with?: String | null
  card_icon_not_ends_with?: String | null
  card_title?: String | null
  card_title_not?: String | null
  card_title_in?: String[] | String | null
  card_title_not_in?: String[] | String | null
  card_title_lt?: String | null
  card_title_lte?: String | null
  card_title_gt?: String | null
  card_title_gte?: String | null
  card_title_contains?: String | null
  card_title_not_contains?: String | null
  card_title_starts_with?: String | null
  card_title_not_starts_with?: String | null
  card_title_ends_with?: String | null
  card_title_not_ends_with?: String | null
  card_description?: String | null
  card_description_not?: String | null
  card_description_in?: String[] | String | null
  card_description_not_in?: String[] | String | null
  card_description_lt?: String | null
  card_description_lte?: String | null
  card_description_gt?: String | null
  card_description_gte?: String | null
  card_description_contains?: String | null
  card_description_not_contains?: String | null
  card_description_starts_with?: String | null
  card_description_not_starts_with?: String | null
  card_description_ends_with?: String | null
  card_description_not_ends_with?: String | null
  card_href?: String | null
  card_href_not?: String | null
  card_href_in?: String[] | String | null
  card_href_not_in?: String[] | String | null
  card_href_lt?: String | null
  card_href_lte?: String | null
  card_href_gt?: String | null
  card_href_gte?: String | null
  card_href_contains?: String | null
  card_href_not_contains?: String | null
  card_href_starts_with?: String | null
  card_href_not_starts_with?: String | null
  card_href_ends_with?: String | null
  card_href_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface CardSubscriptionWhereInput {
  AND?: CardSubscriptionWhereInput[] | CardSubscriptionWhereInput | null
  OR?: CardSubscriptionWhereInput[] | CardSubscriptionWhereInput | null
  NOT?: CardSubscriptionWhereInput[] | CardSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: CardWhereInput | null
}

export interface CardUpdateInput {
  card_icon?: String | null
  card_title?: String | null
  card_description?: String | null
  card_href?: String | null
  menu?: MenuUpdateOneRequiredWithoutCardInput | null
}

export interface CardUpdateManyDataInput {
  card_icon?: String | null
  card_title?: String | null
  card_description?: String | null
  card_href?: String | null
}

export interface CardUpdateManyMutationInput {
  card_icon?: String | null
  card_title?: String | null
  card_description?: String | null
  card_href?: String | null
}

export interface CardUpdateManyWithoutMenuInput {
  create?: CardCreateWithoutMenuInput[] | CardCreateWithoutMenuInput | null
  connect?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  set?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  disconnect?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  delete?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  update?: CardUpdateWithWhereUniqueWithoutMenuInput[] | CardUpdateWithWhereUniqueWithoutMenuInput | null
  updateMany?: CardUpdateManyWithWhereNestedInput[] | CardUpdateManyWithWhereNestedInput | null
  deleteMany?: CardScalarWhereInput[] | CardScalarWhereInput | null
  upsert?: CardUpsertWithWhereUniqueWithoutMenuInput[] | CardUpsertWithWhereUniqueWithoutMenuInput | null
}

export interface CardUpdateManyWithWhereNestedInput {
  where: CardScalarWhereInput
  data: CardUpdateManyDataInput
}

export interface CardUpdateWithoutMenuDataInput {
  card_icon?: String | null
  card_title?: String | null
  card_description?: String | null
  card_href?: String | null
}

export interface CardUpdateWithWhereUniqueWithoutMenuInput {
  where: CardWhereUniqueInput
  data: CardUpdateWithoutMenuDataInput
}

export interface CardUpsertWithWhereUniqueWithoutMenuInput {
  where: CardWhereUniqueInput
  update: CardUpdateWithoutMenuDataInput
  create: CardCreateWithoutMenuInput
}

export interface CardWhereInput {
  AND?: CardWhereInput[] | CardWhereInput | null
  OR?: CardWhereInput[] | CardWhereInput | null
  NOT?: CardWhereInput[] | CardWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  card_icon?: String | null
  card_icon_not?: String | null
  card_icon_in?: String[] | String | null
  card_icon_not_in?: String[] | String | null
  card_icon_lt?: String | null
  card_icon_lte?: String | null
  card_icon_gt?: String | null
  card_icon_gte?: String | null
  card_icon_contains?: String | null
  card_icon_not_contains?: String | null
  card_icon_starts_with?: String | null
  card_icon_not_starts_with?: String | null
  card_icon_ends_with?: String | null
  card_icon_not_ends_with?: String | null
  card_title?: String | null
  card_title_not?: String | null
  card_title_in?: String[] | String | null
  card_title_not_in?: String[] | String | null
  card_title_lt?: String | null
  card_title_lte?: String | null
  card_title_gt?: String | null
  card_title_gte?: String | null
  card_title_contains?: String | null
  card_title_not_contains?: String | null
  card_title_starts_with?: String | null
  card_title_not_starts_with?: String | null
  card_title_ends_with?: String | null
  card_title_not_ends_with?: String | null
  card_description?: String | null
  card_description_not?: String | null
  card_description_in?: String[] | String | null
  card_description_not_in?: String[] | String | null
  card_description_lt?: String | null
  card_description_lte?: String | null
  card_description_gt?: String | null
  card_description_gte?: String | null
  card_description_contains?: String | null
  card_description_not_contains?: String | null
  card_description_starts_with?: String | null
  card_description_not_starts_with?: String | null
  card_description_ends_with?: String | null
  card_description_not_ends_with?: String | null
  card_href?: String | null
  card_href_not?: String | null
  card_href_in?: String[] | String | null
  card_href_not_in?: String[] | String | null
  card_href_lt?: String | null
  card_href_lte?: String | null
  card_href_gt?: String | null
  card_href_gte?: String | null
  card_href_contains?: String | null
  card_href_not_contains?: String | null
  card_href_starts_with?: String | null
  card_href_not_starts_with?: String | null
  card_href_ends_with?: String | null
  card_href_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  menu?: MenuWhereInput | null
}

export interface CardWhereUniqueInput {
  id?: ID_Input | null
  card_title?: String | null
}

export interface MenuCreateInput {
  id?: ID_Input | null
  menu_icon: String
  menu_name: String
  card?: CardCreateManyWithoutMenuInput | null
}

export interface MenuCreateOneWithoutCardInput {
  create?: MenuCreateWithoutCardInput | null
  connect?: MenuWhereUniqueInput | null
}

export interface MenuCreateWithoutCardInput {
  id?: ID_Input | null
  menu_icon: String
  menu_name: String
}

export interface MenuSubscriptionWhereInput {
  AND?: MenuSubscriptionWhereInput[] | MenuSubscriptionWhereInput | null
  OR?: MenuSubscriptionWhereInput[] | MenuSubscriptionWhereInput | null
  NOT?: MenuSubscriptionWhereInput[] | MenuSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: MenuWhereInput | null
}

export interface MenuUpdateInput {
  menu_icon?: String | null
  menu_name?: String | null
  card?: CardUpdateManyWithoutMenuInput | null
}

export interface MenuUpdateManyMutationInput {
  menu_icon?: String | null
  menu_name?: String | null
}

export interface MenuUpdateOneRequiredWithoutCardInput {
  create?: MenuCreateWithoutCardInput | null
  connect?: MenuWhereUniqueInput | null
  update?: MenuUpdateWithoutCardDataInput | null
  upsert?: MenuUpsertWithoutCardInput | null
}

export interface MenuUpdateWithoutCardDataInput {
  menu_icon?: String | null
  menu_name?: String | null
}

export interface MenuUpsertWithoutCardInput {
  update: MenuUpdateWithoutCardDataInput
  create: MenuCreateWithoutCardInput
}

export interface MenuWhereInput {
  AND?: MenuWhereInput[] | MenuWhereInput | null
  OR?: MenuWhereInput[] | MenuWhereInput | null
  NOT?: MenuWhereInput[] | MenuWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  menu_icon?: String | null
  menu_icon_not?: String | null
  menu_icon_in?: String[] | String | null
  menu_icon_not_in?: String[] | String | null
  menu_icon_lt?: String | null
  menu_icon_lte?: String | null
  menu_icon_gt?: String | null
  menu_icon_gte?: String | null
  menu_icon_contains?: String | null
  menu_icon_not_contains?: String | null
  menu_icon_starts_with?: String | null
  menu_icon_not_starts_with?: String | null
  menu_icon_ends_with?: String | null
  menu_icon_not_ends_with?: String | null
  menu_name?: String | null
  menu_name_not?: String | null
  menu_name_in?: String[] | String | null
  menu_name_not_in?: String[] | String | null
  menu_name_lt?: String | null
  menu_name_lte?: String | null
  menu_name_gt?: String | null
  menu_name_gte?: String | null
  menu_name_contains?: String | null
  menu_name_not_contains?: String | null
  menu_name_starts_with?: String | null
  menu_name_not_starts_with?: String | null
  menu_name_ends_with?: String | null
  menu_name_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  card_every?: CardWhereInput | null
  card_some?: CardWhereInput | null
  card_none?: CardWhereInput | null
}

export interface MenuWhereUniqueInput {
  id?: ID_Input | null
  menu_name?: String | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  name: String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  name?: String | null
}

export interface UserUpdateManyMutationInput {
  name?: String | null
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  name?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateCard {
  count: Int
}

export interface AggregateMenu {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Card extends Node {
  id: ID_Output
  card_icon: String
  card_title: String
  card_description: String
  card_href: String
  menu: Menu
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface CardConnection {
  pageInfo: PageInfo
  edges: Array<CardEdge | null>
  aggregate: AggregateCard
}

/*
 * An edge in a connection.

 */
export interface CardEdge {
  node: Card
  cursor: String
}

export interface CardPreviousValues {
  id: ID_Output
  card_icon: String
  card_title: String
  card_description: String
  card_href: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface CardSubscriptionPayload {
  mutation: MutationType
  node?: Card | null
  updatedFields?: Array<String> | null
  previousValues?: CardPreviousValues | null
}

export interface Menu extends Node {
  id: ID_Output
  menu_icon: String
  menu_name: String
  card?: Array<Card> | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface MenuConnection {
  pageInfo: PageInfo
  edges: Array<MenuEdge | null>
  aggregate: AggregateMenu
}

/*
 * An edge in a connection.

 */
export interface MenuEdge {
  node: Menu
  cursor: String
}

export interface MenuPreviousValues {
  id: ID_Output
  menu_icon: String
  menu_name: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface MenuSubscriptionPayload {
  mutation: MutationType
  node?: Menu | null
  updatedFields?: Array<String> | null
  previousValues?: MenuPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface User extends Node {
  id: ID_Output
  name: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
Raw JSON value
*/
export type Json = any

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string