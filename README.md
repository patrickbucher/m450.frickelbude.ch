# Setup

Create Hugo site with module:

```sh
hugo new site m450.frickelbude.ch
cd m450.frickelbude.ch
hugo mod init m450.frickelbude.ch
```

Extend `hugo.toml`:

```toml
baseURL = 'https://m450.frickelbude.ch'
languageCode = 'de-ch'
title = 'Modul 450: Applikationen testen'

[module]
[[module.imports]]
path = 'github.com/McShelby/hugo-theme-relearn'
```

Install dependencies:

```sh
hugo mod tidy
```
