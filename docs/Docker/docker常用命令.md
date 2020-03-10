---
title: docker常用命令
---

# docker 常用命令

### [官方文档](https://docs.docker.com/engine/reference/commandline/container_ls/)

### Usage

```BASH
docker [OPTIONS] COMMAND [ARG...]
docker [ --help | -v | --version ]
```

### docker build

**Usage**：```docker build [OPTIONS] PATH | URL | -```

**Options**: 

```bash
--file, -f 指定dockerfile文件
--tag, -t 镜像命名
```

### docker run

**Usage**: ```docker run [OPTIONS] IMAGE [COMMAND] [ARG...]```

**Options**:

```bash
--env, -e 指定环境变量
--env-file 指定环境变量文件
--expose 暴露指定端口
--link 链接到其他容器
--name 指定容器名称
--detach, -d 后台运行容器并打印容器id
```

### docker image

**Usage**: ```docker image [COMMAND]```

**Child commands**:

```docker image ls```: 显示镜像列表

```docker image pull```: 拉取镜像

```docker image rm```: 删除一个或多个镜像

```docker image inspect```: 显示镜像详细信息

### docker images

**Usage**: ```docker images [OPTIONS] [REPOSITORY] [:TAG]```

**Options**:

```bash
--all, -a 显示所有镜像（默认隐藏中间镜像）
```

### docker container

**Usage**: ```docker container COMMAND```

**Child commands**:

```docker container ls [ARG...]```: 显示容器列表

> ```--all, -a```: 显示所有容器，包括已经停止的容器

```docker container exec[OPTIONS] CONTAINER COMMAND [ARG...]``` ：对指定正在运行的容器执行命令

> ```--env, -e```: 设置环境变量
>
> ```--interactive, -i```:  以交互模式运行容器
>
> ```--detach, -d```: 后台运行
>
> ```--tty, -t```: 为容器分配一个伪终端



