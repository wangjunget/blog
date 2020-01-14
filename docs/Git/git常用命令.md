---
title: Git常用命令
---

# git常用命令

###  [官方文档](https://git-scm.com/docs)

### git config

**描述**：查看和设置特定仓库或全局配置。

**选项**：

```[--global]``` 修改全局配置，将修改全局```.gitconfig```文件。例如：

```bash
git config --global user.name xxxx
git config --global user.email xxxx
```

```[--local]```该选项为默认行为。配置修改将写入仓库```.git/.gitconfig```文件。

### git init

**描述**：创建一个空Git仓库或者重置一个已存在的Git仓库

**选项**：

```[--bare]``` 创建一个裸仓库。

### git clone

***描述***：克隆一个仓库到指定文件中。

***选项***：

```[-o, --origin] <name>```使用指定的名称代替origin作为远程仓库名称。

```[-b, --branch] <name>```使用指定的```HEAD```指向代替当前被克隆仓库的默认```HEAD```指向。

### git add

***描述***：将文件内容添加到暂存区(```index```)。

**选项**：

```[-f, --force]```添加所有文件到暂存区，包括忽略文件。

### git status

**描述** ：查看当前Git仓库状态。

**选项**：

```[-b, --branch]```显示当前分支信息。

### git commit

**描述**：提交变更。

**选项**：

```[-a, --all]```自动将变动信息暂存(```git add```)，但不包含未加入版本库的文件。

```[-m, --message]```添加提交信息。

### git reset

**描述**：重置HEAD到指定的状态。分为三种形式。

```git reset [-q] [<tree-ish>] [--] <paths>```

**选项**：





