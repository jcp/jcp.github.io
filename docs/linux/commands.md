---
title: Commands
description: Useful Linux commands.
---

# Linux Commands

## `diff`

Compare difference between two files.

```shell
diff -u [file1] [file2]
```

## `find`

Search for a file in a directory.

```shell
find [dir] -name [filename]
```

## `grep`

Case insensitive search for a pattern in a file.

```shell
grep -i [pattern] [file]
```

Recursive case insensitive search for a pattern in a directory.

```shell
grep -r -i [pattern] [directory]
```

## `ln`

Create a symbolic link

```shell
ln -s [source] [destination]
```

## `sed`

Find and replace a string within a file.

```shell
sed -i 's/[find]/[replace]/' [file]
```

## `tail`

Monitor a file.

```shell
tail -f [file]
```
