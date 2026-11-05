# Ranko030 front-end

A responsive Angular 21 portfolio covering Ranko's FIS experience, engineering capabilities, selected projects, education, and contact links.

## Run locally

Use Node.js 24.14.0 and npm 11.9.0 (the versions tested with this project). The stack is Angular 21, TypeScript 5.9, HTML, and CSS, with Vitest 4 and jsdom for tests. Dependencies are installed locally; no global Angular CLI, backend, or database is required. Use a modern browser with CSS `color-mix()` support.

From the `frontend` directory in PowerShell:

```powershell
npm.cmd ci
npm.cmd run start:frontend
```

Open http://localhost:4200/. Source changes reload automatically. Press Ctrl+C to stop the server. Restart it after changing `angular.json`, including its stylesheet configuration.

Use `npm` instead of `npm.cmd` in Command Prompt, macOS, or Linux. The `.cmd` suffix avoids PowerShell script-policy errors. See the [root README](../README.md) for complete setup instructions.

## Check and build

```bash
npm.cmd test -- --watch=false
npm.cmd run build
```

Production output is in `dist/frontend/browser/`. The production build downloads Google Fonts, so it needs internet access. System sans-serif fonts are used if those fonts cannot load in the browser.

## Edit

- `src/app/app.html`: page content and layout
- `src/app/app.css`: responsive component styles
- `src/app/app.ts`: project data and category filter state
- `src/styles.css`: global styles and fonts
- `src/journey.css`: scroll-driven theme colors

Created with the [Angular CLI](https://angular.dev/tools/cli). Routing is configured in `src/app/app.routes.ts` for future pages.
