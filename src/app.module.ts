import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import Graphql from './graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['src/graphql/**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql/graphql.schema.ts'),
        outputAs: 'class',
      },
    }),
    PrismaModule,
    Graphql,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
