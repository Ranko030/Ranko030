# Hi, I'm Ranko Damnjanović

Software Engineer II at FIS, working on SFTC. I build reliable services and web experiences with Java, Spring, and Angular, including Pool Allocation, Four Eyes workflows, Undo Reversal, and Trades & Settlements.

My interests span financial technology, artificial intelligence, game development, and the systems behind everyday software. From compilers and operating systems to full-stack applications, I enjoy understanding how the pieces fit together.

Reach me at [rankodamnjanovic@gmail.com](mailto:rankodamnjanovic@gmail.com) or on [LinkedIn](https://www.linkedin.com/in/ranko-damnjanovic).

## Frontend portfolio

The Angular application lives in [`frontend/`](frontend/). It includes career experience, filterable projects, and an Anakin-to-Vader color transition as you scroll.

### Requirements and technologies

- **Node.js and npm:** this project was built and tested with Node.js **24.14.0** and npm **11.9.0**. npm comes with Node.js.
- **Angular 21:** application framework and local development server.
- **TypeScript 5.9, HTML, and CSS:** application logic, templates, responsive styling, and theme.
- **Vitest 4 and jsdom:** component and interaction tests.
- A modern browser supporting CSS `color-mix()` for the theme.

Install Node.js and npm first. The commands below install Angular, TypeScript, and the other project dependencies locally; a global Angular CLI installation is not required. The portfolio runs entirely in the browser and does not require a backend or database.

### Start the frontend

Open a terminal in the repository root (`Ranko030`), then run these commands in **Windows PowerShell**:

```powershell
cd frontend
npm.cmd ci
npm.cmd run start:frontend
```

Open **http://localhost:4200/**. Keep the terminal running while developing; press **Ctrl+C** to stop the server. Run `npm.cmd ci` on first setup or after dependency changes. For subsequent starts, run `npm.cmd run start:frontend` from `frontend/`.

`npm.cmd start frontend` also works from the same directory. The `.cmd` suffix avoids PowerShell's script execution-policy error. In Command Prompt, macOS, or Linux, use `npm` instead of `npm.cmd`:

```bash
cd frontend
npm ci
npm run start:frontend
```

Source changes normally reload automatically. After changing `angular.json`, stop and restart the development server so it picks up configuration and stylesheet changes.

### Test and build

Run from `frontend/`:

```powershell
npm.cmd test -- --watch=false
npm.cmd run build
```

Production files are generated in `frontend/dist/frontend/browser/` relative to the repository root. Dependency installation and the production build need internet access; the build fetches the Google Fonts stylesheet.

### Where to edit

- [`frontend/src/app/app.html`](frontend/src/app/app.html): portfolio content and layout.
- [`frontend/src/app/app.ts`](frontend/src/app/app.ts): project data, filters, and scroll transition.
- [`frontend/src/app/app.css`](frontend/src/app/app.css): component styling and the hidden Anakin/Vader indicator.
- [`frontend/src/journey.css`](frontend/src/journey.css): scroll-driven theme colors.
- [`frontend/src/styles.css`](frontend/src/styles.css): global styles and fonts.

<!---
Ranko030/Ranko030 is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
