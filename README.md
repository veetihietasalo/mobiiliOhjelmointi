# mobiiliOhjelmointi

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

Status: course exercise, university of applied sciences, August 2023. Two commits: the calculator, then the history list. No tests.
