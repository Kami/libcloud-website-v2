# Libcloud Website

This repository contains source code for new Libcloud website powered by
[Jekyll][1].

Note: Jekyll setup is based on my [blog's jekyll setup][2].

## Installing Ruby dependencies

```bash
bundle install
```

## Running local development server

```bash
cd source
jekyll serve --watch --trace
```

## Generating and publishing the website

```bash
./scripts/generate_site.sh
git push origin gh-pages
```

[1]: http://jekyllrb.com/
[2]: https://github.com/Kami/kami.github.com
