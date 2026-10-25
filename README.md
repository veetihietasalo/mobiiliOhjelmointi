# mobiiliOhjelmointi

Try it in the browser: https://veetihietasalo.github.io/mobiiliOhjelmointi/
It's the web build of the mobile app, so the layout is made for a phone screen.

A simple calculator from a mobile programming course (mobiiliohjelmointi is Finnish for mobile programming). The app is called SimppeliLaskin in `app.json`.

What it does:
- Two number fields and + and - buttons
- Shows the result and a list of every calculation since the app opened
- The history is kept in memory only, it's gone when the app closes

The UI text is in Finnish.

Stack: JavaScript, React Native 0.72, Expo SDK 49. All the code is in `App.js`.

Run it:

```
npm install
npm start
```

`npm start` runs `expo start`. `npm run android` and `npm run ios` are in `package.json` too. The project is on Expo SDK 49, so Expo Go has to be a version that supports SDK 49.

Web build:

```
npm run build:web
npm run deploy:web
```

`build:web` runs `expo export --platform web` (Metro) into `dist/`, then `scripts/web-relative-paths.js` makes the paths relative. GitHub Pages serves the app from `/mobiiliOhjelmointi/` and Expo SDK 49 has no base URL setting. `deploy:web` builds and pushes `dist/` to the `gh-pages` branch.

Status: course exercise, university of applied sciences, August 2023. Two commits: the calculator, then the history list. No tests.
