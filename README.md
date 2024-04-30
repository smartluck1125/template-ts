# TypeScript with ES Module

A Template for Node.js using TypeScript and ES Module.

## Features

- ES Module support.
- Linter and Formatter (git hook).
- Observe file changes and automatically restart.
- Rollup build to js.

## Usage

### Initialization

```bash
# Clone template.
npx degit hhui64/template-ts my-project

# Enter project directory, and install dependencies.
cd my-project
npm install # alias `npm i`

# Now, begin work.
npm run dev
```

### Commands

Start and automatically restart when files change:

```bash
npm run dev
```

Linting and Formatting code:

```bash
# lint
npm run lint

# lint and fix
npm run lint:fix

# format
npm run format
```

Build to js:

```bash
# build for production
npm run build

# build for developement
npm run build:dev
```

.js files will output to `dist` .
