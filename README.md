# Linted-Typescript-Template

An empty project templated, which can be used to create a ready environment for Node.js applications.

## Features

- Strict Linters that govern nearly every line of code
- GitHub actions to automate test compiling and linting and security checks
- Directory for custom types for even more strict linting
- npm scripts to lint, compile, test run, etc.

## Setup Project

Steps to set up the project and how to use it.

### Project Information

Copy this `README.md` to something like `TEMPLATE.md` for ease of access.

Go to `packages.json` and change project `name`, `description`, and `author` fields.
Adding `keywords` is encouraged as well.

### Installing Dependencies

Template uses Linters installed from npm. Do `npm install` to install all required dependencies for the project.

IDE should auto-detect the linters and set them up.
Some IDE might require to manually select the project to auto lint it while editing.

### Committing code

Run `npm run validate` before pushing changes to ensure they are fully linted and can be compiled.

## All Important Npm Commands

| Script                 | Function                          |
| ---------------------- | --------------------------------- |
| `npm run start`        | Run the project                   |
| `npm run format`       | Format project and lint it        |
| `npm run test:compile` | Try to compile the project        |
| `npm run test:run`     | Runs the project with `test-mode` |
| `npm run validate`     | Lint, Compile, and Test           |
