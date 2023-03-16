# 🔥 Lerna/Next.js 13 Template 

This project is a starter template for a Lerna/Next.js 13 application that includes the following features:

- Next.js 13 with Server-side Rendering (SSR) support
- Styled Components for styling
- Localisation (i18n) using `react-i18next`
- Husky and Commitlint for code linting and formatting
- Storybook for UI component testing and development
- Typescript for type checking
- Theme Switcher that supports light, dark, and system themes

## Getting Started

### Prerequisites

Before you can use this template project, you must have the following software installed:

- Node.js (v14 or later)
- Yarn

### Installing

To install this template project, follow these steps:

1. Clone this repository: `git clone https://github.com/aldabbasy/next-template-v2.git`
2. Navigate to the cloned repository: `cd next-template-v2`
3. Install dependencies: `yarn`
4. Install Lerna globally `yarn global add lerna`

### Usage

To start the development server, run:
```
    yarn dev:next
```
This will start a development server at `http://localhost:3000`.

To start Storybook, run:
```
    yarn storybook
```
This will start a Storybook server at `http://localhost:9001`.
To build the application, run:
```
    yarn build:next
```
This will create a production build in the `build` directory.

## Why Lerna?

Lerna is a tool for managing JavaScript projects with multiple packages. It optimizes the workflow around managing multi-package repositories with git and npm. With Lerna, you can manage your project's dependencies across multiple packages more efficiently.

Most important features of Lerna:

- Parallel execution: Lerna can run scripts and commands across multiple packages in parallel, which can save time and speed up the development process.
- Caching: Lerna caches dependencies and avoids re-installing them every time a command is run, which can save time and disk space.
- Package versioning: Lerna manages the versioning of packages in the repository, making it easy to track changes and dependencies between packages.
- Independent versioning: Lerna supports independent versioning of packages, allowing packages to have their own version numbers and release cycles.
- Simplified development: Lerna simplifies the development process in a monorepo by providing a single command-line interface for managing and developing packages in the repository.
- Code sharing: Lerna makes it easy to share code between packages in the repository, reducing duplication and improving code maintainability.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Keywords

Lerna, Next.js, Styled Components, i18n, Husky, Commitlint, Storybook, Typescript, Dark Mode, Light Mode, System Theme, Monorepo, Multi-package repository, Front-end development, Web development, JavaScript

