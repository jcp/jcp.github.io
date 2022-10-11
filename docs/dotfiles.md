---
description: Install and configure custom dotfiles.
---

# Dotfiles

Dotfiles are configuration files for various applications. The [dotfiles](https://github.com/jcp/dotfiles.git) in this guide are primarily meant to be installed on [Ubuntu](https://ubuntu.com/) alongside [Zsh](https://www.zsh.org/) and [Oh My Zsh](https://ohmyz.sh/). However, the installation process may work on other operating systems (e.g., [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows) and [macOS](https://en.wikipedia.org/wiki/MacOS)).

## Installation

### Clone Repository

Clone [dotfiles](https://github.com/jcp/dotfiles.git) repository into the `~/.config` directory.

```shell showLineNumbers
cd ~/.config
git clone https://github.com/jcp/dotfiles.git
```

:::info
The [dotfiles](https://github.com/jcp/dotfiles.git) repository can be cloned into any directory. [install.sh](https://github.com/jcp/dotfiles/blob/efe6dd094d54bf302a42ad51605adab25bb39feb/install.sh) will create symlinks for each dotfile in the `$HOME` directory.
:::

### Install

Execute `install.sh` script and proceed through the prompts.

```shell showLineNumbers
cd dotfiles
chmod +x install.sh
./install.sh
```

:::caution dconf
[dconf](https://wiki.gnome.org/Projects/dconf) is a low-level key-based settings storage framework used by the [GNOME](https://www.gnome.org/) desktop environment. **install.sh** contains an optional prompt to load custom **dconf** settings. Existing **dconf** settings may be lost if they're not merged with [.dconf](https://github.com/jcp/dotfiles/blob/efe6dd094d54bf302a42ad51605adab25bb39feb/.dconf) before executing `./install.sh`.
:::

:::caution
Install [Zsh and Oh My Zsh](/docs/linux/configure-ubuntu#terminal) before you run `install.sh`.
:::

## Aliases

After installation, the following [aliases](<https://en.wikipedia.org/wiki/Alias_(command)>) are supported.

| Alias                        | Description                               | Command                                         |
| ---------------------------- | ----------------------------------------- | ----------------------------------------------- |
| <kbd>c</kbd>                 | Open directory in Visual Studio Code.     | `code .`                                        |
| <kbd>d</kbd>, <kbd>dev</kbd> | Change directory to `~/Development`.      | `cd ~/Development`                              |
| <kbd>dl</kbd>                | Change directory to `~/Development`.      | `cd ~/Downloads`                                |
| <kbd>doc</kbd>               | Change directory to `~/Documents`.        | `cd ~/Documents`                                |
| <kbd>dotfiles</kbd>          | Change directory to `~/.config/dotfiles`. | `cd ~/.config/dotfiles`                         |
| <kbd>ls</kbd>, <kbd>l</kbd>  | Enhance `ls` results with `exa`.          | `exa -alh --group-directories-first --classify` |
| <kbd>copy</kbd>              | hortcut for `xcopy`.                      | `xcopy`                                         |
| <kbd>down</kbd>              | Split window down.                        | `tilix -a session-add-down`                     |
| <kbd>right</kbd>             | Split window right.                       | `tilix -a session-add-right`                    |
