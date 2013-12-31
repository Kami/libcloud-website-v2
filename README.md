# Libcloud Website

This repository contains source code for a Libcloud website powered by
[Jekyll][1].

Note: Jekyll setup is based on my [blog's jekyll setup][2].

## System Dependencies

* Ruby 1.9 or above
* Gems: `bundler` (gem install bundler)

## Installing Blog Ruby dependencies

```bash
bundle install
```

## Running Local Development Server

```bash
./scripts/run-dev-server.sh
```

## Generating and Publishing the Website

```bash
./scripts/generate_site_apache.sh
svn add generated/*
svn commit -m "Generate website"
```

[1]: http://jekyllrb.com/
[2]: https://github.com/Kami/kami.github.com
