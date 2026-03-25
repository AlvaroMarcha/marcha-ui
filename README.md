# marcha-ui

Monorepo for **@marchaui/marcha-ui** — Glassmorphism Angular Design System.

## Structure

```
projects/
├── marcha-ui/   ← The npm library (@marchaui/marcha-ui)
└── demo/        ← Demo application
```

## Development

```bash
npm install

# Build the library
npx ng build marcha-ui

# Serve the demo app
npx ng serve demo
```

## Publish

Publish happens automatically via GitHub Actions on push to `main`.  
Add your npm token as `NPM_TOKEN` in GitHub repository secrets.

## Installation in your project

```bash
npm install @marchaui/marcha-ui iconify-icon
```

See [projects/marcha-ui/README.md](projects/marcha-ui/README.md) for full documentation.


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
