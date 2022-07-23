# GitHub Action Template

This project is a template to help you to create your new GitHub Action. In this repository, you'll find all the bases for a GitHub Action.

Some of the project features:

- [TypeScript](typescriptlang.org/)
- [NCC](https://github.com/vercel/ncc)
- [Husky](https://github.com/typicode/husky) with pre-commit build
- [Lint](https://eslint.org/)

## How to use

1. Fork this repository. Just click on Fork button in the top-right corner.
2. Clone to your machine
3. Run `$ npm install`
4. All done, **just it**.

## Action information

All information about the action is in `action.yml` file. In this file you can change the name, icon, input values and node version.


## NPM Commands

The project comes with some pre-configured npm commands:

1. `npm run dist`: This will build your code as an action useful file. The file `dist/index.js` will contains all the code that your action will need to run.
2. `npm run lint:check`: This will check for lint errors in your code.
3. `npm run lint:fix`: This will check and fix all auto-fixable lint errors.
4. `npm run build`: This will build your code as a simple js file, it's not really useful. You always use `npm run dist` to get your production code.

## Husky and Production build

As you have seen in the **NPM Commands** topic, you have an `npm run dist` command. This command builds your code to be used by GitHub Actions, this is different from `npm run build` because the `dist` command uses NCC to bundle up all your dependencies and code in a single JS file.

Sometimes we forget to build before push some commit, right? To help you I've installed Husky. **Husky will build and commit your production code automatically right before you made any commit**.

You just need to make your changes in `src/main.js` file and commit it, **you don't need to build, Husky will do it for you**.

## Complains, Help, or any other thing

Just open an issue or contact me on Twitter.

#### That's all :)

