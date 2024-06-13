# Vite ES Module Example

<p>
  <a href="./LICENSE">
  <img alt="GitHub" src="https://img.shields.io/github/license/acfatah/vite-javascript?style=flat-square"></a>

  <a href="https://github.com/acfatah/vite-javascript/commits/main">
  <img alt="GitHub last commit (by committer)" src="https://img.shields.io/github/last-commit/acfatah/vite-javascript?display_timestamp=committer&style=flat-square"></a>
</p>

Use `vite-node` as the Javascript runtime. Read [more](https://github.com/vitest-dev/vitest/tree/main/packages/vite-node#readme).

## Features

- Uses Vitest for testing
- Uses ESLint with Antfu's config
- Uses Release-it for releasing

## Usage

To start a new project, run

```bash
degit acfatah/vite-javascript your_script
```

After that, install the dependencies and initialize a new git repository.

```bash
npm install && git init
```

### Development

To start development mode, run

```bash
npm run dev
```

### Execution

To run the program, use the `npm run start` command.

Before running the `bin/run` command, you may need to install `vite-node` globally.

### Build

To build the source to be compatible with nodejs v14, run `npm run build`.
The source will be built in `dist` directory. The script can be executed by
running `node dist/main.js`.

## Usage Checklist

- [ ] Update relevant information in `package.json`
- [ ] Update `vite.config.js`
- [ ] Update `LICENCE`
- [ ] Update `README.md`
- [ ] Initialize new git repository

## Available Commands

| Command            | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`      | Installs dependencies                       |
| `npm run start`    | Run the code                                |
| `npm run dev`      | Starts development mode                     |
| `npm run build`    | Transpile code to `./dist/` directory       |
| `npm run lint`     | Run code linter on the project directory    |
| `npm run lint:fix` | Apply available code fixes using the linter |
| `npm run test`     | Run test once with code coverage analysis   |
| `npm run update`   | Update dependencies according to semver     |
| `npm run release`  | Release the code on npm                     |
