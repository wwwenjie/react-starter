# react-starter

Personal Opinionated React Starter Template

## Features

- Typescript

- [Vite](https://vitejs.dev/)

- [SWR](https://swr.vercel.app/)

- [Tailwind](https://tailwindcss.com/)

- [Atom Design](https://atomicdesign.bradfrost.com/table-of-contents/)

- I18n ready via [react-i18next](https://react.i18next.com/)

- ESLint, Prettier and stylelint. Pre-check with Husky and lint-staged.

- Unit testing with Jest

- CI/CD via GitHub Actions

## Running the project

You can run the project by following scripts:

```shell
yarn dev
```

## Develop

We use React **^17** and Vite **^2**. If you are looking for any 3rd party lib, Please check if the version supports.

Redux or other state library are not recommended unless you are going to build a complex project. For simple or middle
project, consider using SWR and localstorage.

Follow Atom Design will make structure clearer, you can have a try.

## Running the tests

It's recommended to use TDD to develop. You can run `yarn watch:test` to start a watching test. When you add/edit common
components, it is recommended to write tests for them.

## CI/CD

This project uses GitHub Actions to do CI and CD, you can check details in `.github/workflows`. By default, every pull
request to develop branch will run lint and tests check, and create a review via Vercel. Every pull request to main
branch will create a review, when it's merged to main branch it will deploy to prod.  
To skip CI/CD, you can check
this [page](https://github.blog/changelog/2021-02-08-github-actions-skip-pull-request-and-push-workflows-with-skip-ci/).

## Release

This project use [standard-version](https://github.com/conventional-changelog/standard-version) to manage release,
run `yarn release` will create new version with tag.

## Rules

You **have to** allow the rules below to ensure code quality

- Only push code to main when all tests pass

- Commit message should follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Code Style

We follow [airbnb code style](https://github.com/airbnb/javascript), but we have customized some code style in prettier,
you can check prettier for details

Some other code styles listed below (recommended)

- Follow [Clean Code Javascript](https://github.com/wwwenjie/clean-code-javascript)

- Use the `ComponentNameProps` to name the Props and export

- Use FC<Props> to type define a component

- Use handle{Type}{Event} name a handle function, e.g. handleNameChange
