---
title: docker-compose 常用命令
---

# docker-compose 常用命令

### [官方文档](https://docs.docker.com/compose/reference/overview/)

### Usage

```bash
docker-compose [-f <arg>... ] [options] [COMMAND] [ARGS...]
docker-compose -h | --help
```

> ```-v, --version```: 显示版本信息

### docker-compose build

**Usage**: ```docker-compose  build [options] [--build-arg key=val...] [SERVICE...]```

**Options**:

> ```--compress```：开启压缩

### docker-compose up

**Usage**: ```docker-compose up [options] [--scale SERVICE=NUM...] [SERVICE...]```

**Options**:

> ```-d, --detach```: 在后台运行

