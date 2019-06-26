## Technology stack
nestjs + prisma + docker(mysql)

## Precondition

```bash
$ yarn install

$ docker-compose up -d

$ prisma deploy

# 将Prisma GraphQL架构下载到 prisma / prisma-types.graphql (生成TS文件可能需要少许修改)
# 并在 prisma / prisma.binding.graphql 下创建Prisma客户端 
# 配置文件 .graphqlconfig
# npm install -g graphql-cli  => GraphQL 开发工作流的命令行工具
$ graphql get-schema --project database
$ graphql codegen --project database
```

## Running the app

```bash
# development
$ npm run start:debug

# production mode
$ npm run start:prod
```