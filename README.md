# sunny-misty-web

The website for Sunny & Misty: Pet Weather, at https://sunnyandmisty.com.

A plain multi-page site built with Vite: `index.html`, `support/index.html`, `privacy/index.html`
and `404.html`, sharing `src/style.css`. No JavaScript is shipped; Vite bundles the CSS, the Baloo 2
font and the images from `src/assets`. Files in `public/` are copied as they are.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Hosted on Firebase Hosting in the app's own Firebase project, `cats-dogs-weather`.

```bash
npm run build
firebase emulators:start --only hosting   # optional: check the built site with the real headers and redirects
firebase deploy --only hosting
```

`firebase.json` sets the security and caching headers, serves `/privacy` and `/support` without
`.html`, and 301-redirects `/weather` (the apps' old privacy link on fangjet.com) to `/privacy`.
