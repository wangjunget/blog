---
Nginx常用命令和配置
---

# Nginx常用命令和配置

### 常用命令

```nginx -s reload```: 重启nginx服务

### 常用配置

```server_name```: 访问主机域名

```location [= | ~ | ~* | ^~ ] uri { ... }```:

**语法规则**：

> ```空``` location后没有参数直接URI，表示匹配前缀
>
> ```=``` 表示精确匹配
>
> ```^~``` 表示以常规字符开头
>
> ```~``` 表示区分大小写
>
> ```~*``` 表示不区分大小写
>
> ```/``` 表示通配

**配置内容**：

>```root``` 



