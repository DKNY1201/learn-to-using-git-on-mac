<<<<<<< HEAD
# learn-to-using-git-on-mac
Learn to using git on Mac
=======
# Welcome to the PacSafe Repository

The repository is for PacSafe project.
* This is the SiteGenesis version 103.1.6 - https://bitbucket.org/demandware/sitegenesis

Branches:

- `master` is only available for releases version.
- `develop` is for development
- `tags` must be specified for releases

# How to use

## Preparation
Install tools and dependencies

```
npm install -g gulp grunt-cli phantomjs
npm install
```

## Development
Developers must run the command during coding

```
gulp --sourcemaps
```

## Pre PULL-REQUEST
Before creating a pull request developer must validate with `lint` and `test:unit` by running the `validator` and check the result

```
gulp pr-validator
```
>>>>>>> 73058498d6e87198d70dc3cf3e7959c19d16f161
