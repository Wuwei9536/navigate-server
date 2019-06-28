import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { join } from 'path';
import { UploadimgModule } from './restful/uploadimg/uploadimg.module';
import Graphql from './graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['src/**/*.graphql', 'src/graphql/**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql/graphql.schema.ts'),
        outputAs: 'class',
      },
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
    }),
    PrismaModule,
    Graphql,
    UploadimgModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
