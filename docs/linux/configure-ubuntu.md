# Configure Ubuntu

Setup and configure an [Ubuntu](https://ubuntu.com) installation.

## Setup

### Initial

View installed packages.

```shell
sudo apt list --installed
```

Remove unwanted packages.

```shell
sudo apt remove [package] [package] ...
```

Update and upgrade packages.

```shell
sudo apt update && sudo apt upgrade
```

### Build Essentials

Install build essential packages.

```shell
sudo apt install build-essential libssl-dev libffi-dev
```

### Restricted Extras

Install [Restricted Extras](https://en.wikipedia.org/wiki/Ubuntu-restricted-extras) package.

```shell
sudo apt install ubuntu-restricted-extras
```

:::info
For copyright reasons, the [Restricted Extras](https://en.wikipedia.org/wiki/Ubuntu-restricted-extras) package is excluded from Ubuntu's default installation.
:::

### Ubuntu Pro

Install and attach [Ubunto Pro](https://ubuntu.com/pro) advantage tools.

```shell showLineNumbers
sudo apt install ubuntu-advantage-tools
sudo pro attach [token]
```

:::info
To obtain a **token**, visit the Ubuntu Pro [subscription](https://ubuntu.com/pro) page.
:::

### Cleanup

Remove unused packages.

```shell
sudo apt autoremove
```

## Applications

### 1Password

See [installation guide](https://1password.com/downloads/linux/).

### Chrome

See [installation guide](https://www.google.com/chrome/).

### Color Picker

```shell
sudo apt install gcolor3
```

### Discord

See [installation guide](https://discord.com/download).

### Dropbox

See [installation guide](https://www.dropbox.com/install-linux).

### FileZilla

```shell
sudo apt install filezilla
```

### Git

```shell
sudo apt install git
```

### Obsidian

See [installation guide](https://obsidian.md/download).

### Slack

See [installation guide](https://slack.com/downloads/linux).

### Spotify

See [installation guide](https://www.spotify.com/us/download/linux/).

### Virtual Box

```shell
sudo apt install virtualbox
```

### Visual Studio Code

See [installation guide](https://code.visualstudio.com/download).

### Wireshark

See [installation guide](https://www.wireshark.org/download.html).

```shell showLineNumbers title="Enable for non-root users."
sudo dpkg-reconfigure wireshark-common
sudo usermod -a -G wireshark [user]
sudo reboot
```

:::info
It's recommended to run the above commands so non-root users can run **Wireshark**.
:::

## Dotfiles

See [installation guide](/docs/dotfiles).

:::caution
Install [applications](#applications) _before_ you install [dotfiles](/docs/dotfiles).
:::

## Desktop

Move **Applications** icon to the top of the **Dock**.

```shell
gsettings set org.gnome.shell.extensions.dash-to-dock show-apps-at-top true
```

Show **Trash** icon on Desktop.

```shell
gsettings set org.gnome.shell.extensions.ding show-trash true
```

## Terminal

### Tilix

Install [Tilix](https://gnunn1.github.io/tilix-web/), a tiling terminal emulator.

```shell
sudo apt install tilix
```

### Exa

Install [Exa](https://the.exa.website/#installation), a replacement for `ls`.

```shell
sudo apt install exa
```

### Zsh and Oh My Zsh

Install [Zsh](https://www.zsh.org/), a **Bash** replacement shell.

```shell
sudo apt install zsh
```

Install [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh), an open source **Zsh** configuration manager framework.

```shell
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Install [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) and [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting).

```shell showLineNumbers
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

### Fonts

Install [Powerline](https://github.com/powerline/fonts) fonts.

```shell showLineNumbers
sudo apt install fonts-powerline
fc-cache -f -v
```

Install [JetBrains Mono Nerd](https://github.com/ryanoasis/nerd-fonts/releases) fonts.

```shell showLineNumbers
wget https://github.com/ryanoasis/nerd-fonts/releases/latest/download/JetBrainsMono.zip
sudo unzip JetBrainsMono.zip -d /usr/share/fonts/jetbrains-mono
rm JetBrainsMono.zip
fc-cache -f -v
```

:::info
Once installed, set as default for **Tilix** and **Visual Studio Code**.
:::

### Theme

Install [Powerlevel10k](https://github.com/romkatv/powerlevel10k) theme.

```shell
git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k
```

Install **Tomorrow Night** theme with [Gogh](https://gogh-co.github.io/Gogh/).

```shell showLineNumbers
sudo apt install dconf-cli uuid-runtime
bash -c  "$(wget -qO- https://git.io/vQgMr)"
```

## Development

Create **Development** folder.

```shell
mkdir ~/Development
```

### SSH Keys

See [installation guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

:::info
Once generated, add `id_*.pub` to [Ubuntu One](https://login.ubuntu.com/ssh-keys) and [Github](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).
:::

### Environments

#### Docker

See [installation guide](https://docs.docker.com/engine/install/ubuntu/#set-up-the-repository).

#### Node.js

##### NVM

See [installation guide](https://github.com/nvm-sh/nvm#installing-and-updating).

##### Node

```shell
nvm install --lts
```

:::info
Move any appended export code from `~/.zshrc` to `~/.exports`.
:::

#### Python

Install [Pip](https://pypi.org/project/pip/), a Python package installer.

```shell
sudo apt install python3-pip
```

Install [venv](https://docs.python.org/3/library/venv.html), a virtual environment creation tool.

```shell
sudo apt install python3-venv
```

### Shortcuts

#### Windows

| Shortcut                          | Description           |
| --------------------------------- | --------------------- |
| <kbd>Super</kbd> + <kbd>Tab</kbd> | Application switcher  |
| <kbd>Super</kbd> + <kbd>▲</kbd>   | Maximize window state |
| <kbd>Super</kbd> + <kbd>▼</kbd>   | Default window state  |
| <kbd>Super</kbd> + <kbd>◄</kbd>   | Split window left     |
| <kbd>Super</kbd> + <kbd>►</kbd>   | Split window right    |
