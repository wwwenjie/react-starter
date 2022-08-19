# react-starter

Personal Opinionated React Starter Template

## Features

- Typescript

- [Vite](https://vitejs.dev/)

- [Vitest](https://vitest.dev/)

- [SWR](https://swr.vercel.app/)

- [Tailwind](https://tailwindcss.com/)

- I18n ready via [react-i18next](https://react.i18next.com/)

- ESLint, Prettier and stylelint. Pre-check with Husky and lint-staged.

- CI/CD via GitHub Actions

- Ant design [integration](https://github.com/wwwenjie/react-starter/tree/antd)

## Running the project

This project use `pnpm` as package manager, [install it](https://pnpm.io/installation) if you haven't installed.

You need to install dependencies before running project at first time

```shell
pnpm i
```

You can run the project by following scripts:

```shell
pnpm dev
```

## Develop

We use React **^18** and Vite **^3**. If you are looking for any 3rd party lib, Please check if the version supports.

Redux or other state library are not recommended unless you are going to build a complex project. For simple or middle
project, consider using SWR and localstorage.

## Running the tests

We use vitest to run tests. You can run `pnpm watch:test` to start a watching test or run `pnpm test:unit` to run full
unit tests. When you add/edit common components, it is recommended to write tests for them.

## CI/CD

This project uses GitHub Actions to do CI, you can check details in `.github/workflows`. To skip CI/CD, you can check
this [page](https://github.blog/changelog/2021-02-08-github-actions-skip-pull-request-and-push-workflows-with-skip-ci/).

## Release

This project use [standard-version](https://github.com/conventional-changelog/standard-version) to manage release,
run `pnpm release` will create new version with tag. When tags with version pushed, a GitHub release will create.

## Rules

You **have to** allow the rules below to ensure code quality

- Only push codes when all tests pass

- Commit message should follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
  Try [commit-ez](https://github.com/wwwenjie/commit-ez)

## Code Style

We follow [airbnb code style](https://github.com/airbnb/javascript), but we have customized some code style in prettier,
you can check prettier for details

Some other code styles listed below (recommended)

- Follow [Clean Code Javascript](https://github.com/wwwenjie/clean-code-javascript)

- Use the `ComponentNameProps` to name the Props and export

- Use FC<Props> to type define a component
