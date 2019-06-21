import { Module } from '@nestjs/common';
import UserModule from './user/user.module';
import MenuCardModule from './menuCard/menuCard.module';

@Module({
  imports: [UserModule, MenuCardModule],
})
export default class Graphql {}
