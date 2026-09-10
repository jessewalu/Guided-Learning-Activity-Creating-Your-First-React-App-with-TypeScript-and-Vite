# My First React App

My First React App is a small, intentionally simple React application built
with TypeScript and Vite. It is a learning project for understanding how a
React application is assembled: the browser loads an entry point, the entry
point mounts a root component, and that component renders a reusable child
component with its own styles.

The current screen presents a centered, styled message from `MyComponent`:

> Hello from MyComponent!

The project keeps the implementation small enough to follow from the first
file to the rendered page while still using a modern development toolchain.

## What This Project Demonstrates

- Creating a React project with Vite.
- Writing React components with TypeScript and TSX.
- Mounting a React tree with `createRoot`.
- Composing a root `App` component from a reusable child component.
- Importing CSS at both application and component level.
- Running a fast local development server with Vite's module replacement.
- Type-checking and bundling the application for production.
- Keeping dependencies reproducible with `package-lock.json`.

## Tech Stack

| Tool | Role |
| --- | --- |
| React 19 | UI library and component model |
| TypeScript | Static typing for the application code |
| Vite 8 | Development server and production build tool |
| `@vitejs/plugin-react` | React support in Vite |
| Oxlint | JavaScript and TypeScript linting |
| CSS | Global, app-level, and component-level styling |

## How the Application Works

The rendering path is deliberately short:

```text
index.html
  -> src/main.tsx
    -> src/App.tsx
       -> src/MyComponent.tsx
```

1. `index.html` provides the `root` DOM element and loads the module entry.
2. `src/main.tsx` imports the global stylesheet, creates a React root, and
  renders `App` inside `StrictMode`.
3. `src/App.tsx` is the top-level application component. It imports
  `App.css` and renders `MyComponent`.
4. `src/MyComponent.tsx` defines the reusable functional component. It uses
  the `FC` type from React and currently accepts no props.
5. `src/MyComponent.css` styles only the component's `.my-component` wrapper,
  while `src/index.css` contains document-wide defaults.

## Project Structure

```text
my-first-react-app/
├── public/
│   └── favicon.svg             # Static asset served as-is
├── src/
│   ├── App.css                 # Layout rules for the root component
│   ├── App.tsx                 # Top-level application component
│   ├── MyComponent.css         # Styles for MyComponent
│   ├── MyComponent.tsx         # Reusable typed React component
│   ├── index.css               # Global document styles
│   └── main.tsx                # Browser entry point
├── .gitignore                  # Files excluded from version control
├── .oxlintrc.json              # Oxlint configuration
├── index.html                  # HTML shell and root element
├── package.json                # Scripts, dependencies, and project metadata
├── package-lock.json           # Locked dependency versions
├── tsconfig.json               # Shared TypeScript configuration
├── tsconfig.app.json           # TypeScript settings for application code
├── tsconfig.node.json          # TypeScript settings for Vite configuration
└── vite.config.ts              # Vite configuration
```

## Prerequisites

Install a current LTS release of [Node.js](https://nodejs.org/). npm is
included with Node.js. Verify the installation with:

```bash
node --version
npm --version
```

The project uses the package versions recorded in `package.json` and
`package-lock.json`, so use `npm` for the commands below.

## Getting Started

From the `my-first-react-app` directory, install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite, normally
`http://localhost:5173/`. The page updates as you edit the source files.

To stop the server, press `Ctrl+C` in the terminal running it.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts Vite's local development server. |
| `npm run build` | Type-checks the project and creates a production build in `dist/`. |
| `npm run lint` | Runs Oxlint against the project. |
| `npm run preview` | Serves the completed production build locally. Run `npm run build` first. |

Before sharing a change, a useful local verification sequence is:

```bash
npm run lint
npm run build
```

This project does not currently include an automated test suite. The build
and lint commands are the available automated checks at this stage.

## Making Changes

### Editing the displayed message

Open `src/MyComponent.tsx` and change the heading or paragraph. The component
is intentionally self-contained, so its markup is easy to identify.

### Editing layout

Use `src/App.css` for rules that position the application as a whole. Use
`src/MyComponent.css` for the card, typography, border, and component-specific
appearance. Use `src/index.css` sparingly for document-wide defaults such as
the body margin or the base font family.

### Adding typed props

`MyComponent` currently has no props. A natural next exercise is to define a
props interface and pass data from `App`, for example a greeting or a name.
Keep the prop type next to the component until the component becomes large
enough to justify a separate types file.

### Adding another component

Create a new `.tsx` file under `src/`, give it a focused responsibility, and
import it into the component that should render it. If it needs styles, keep
its stylesheet beside it and import that stylesheet from the component.

## Production Build

Run:

```bash
npm run build
```

Vite runs the TypeScript build step and bundles the application into `dist/`.
The `dist/` directory is generated output and is ignored by Git. To inspect
the production bundle locally:

```bash
npm run preview
```

The preview server is for local verification. Deploying the contents of
`dist/` to a static hosting provider is the next step for publishing the app.

## Troubleshooting

### `npm install` fails

Confirm that Node.js and npm are installed, then run the command from the
directory containing `package.json`. If dependencies are out of sync, remove
`node_modules/` and run `npm install` again. Keep `package-lock.json` unless
you intentionally want to update dependency versions.

### The page is blank

Check the browser console and the terminal running Vite. Confirm that
`index.html` contains `<div id="root"></div>` and that `src/main.tsx` imports
and renders `App`.

### The port is already in use

Vite may offer another available port in the terminal. Open the URL it prints,
or stop the process using the original port before restarting the server.

### Build or lint errors appear

Read the first reported file and line number, fix that source error, and run
the same command again. TypeScript errors commonly come from a misspelled
import, an invalid JSX element, or a value that does not match its declared
type.

## Learning Path

This project is a good base for gradually adding:

1. Typed props and reusable data-driven components.
2. Button interactions and React event handlers.
3. State with `useState`.
4. Lists rendered from typed arrays.
5. Form inputs and validation.
6. Component tests and accessibility checks.
7. Client-side routing when the application has multiple views.

Each addition should keep components focused and preserve the clear rendering
flow described above.

## License

No license has been declared for this learning project yet. Add a license
file before distributing or reusing it outside the intended coursework.
