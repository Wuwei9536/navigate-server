# 基础镜像为node，版本为v9.2.0
FROM node:latest
# 镜像作者，可以附加联系信息
MAINTAINER wien

# 创建容器内的项目存放目录
RUN mkdir -p /user/src/navigate-server
WORKDIR /user/src/navigate-server

#  将Dockerfile当前目录下所有文件拷贝至容器内项目目录并安装项目依赖
COPY package.json ./
RUN  yarn

COPY ./ ./

# 容器对外暴露的端口号，要和node项目配置的端口号一致
EXPOSE 6000

# 容器启动时执行的命令
CMD [ "npm", "run","start:debug" ]