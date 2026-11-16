# sunny-misty-web

The website for Sunny & Misty: Pet Weather, at https://sunnyandmisty.com.

A plain multi-page site built with Vite: `index.html`, `support/index.html`, `privacy/index.html`,
`terms/index.html` and `404.html`, sharing `src/style.css`. No JavaScript is shipped; Vite bundles the CSS, the Baloo 2
font and the images from `src/assets`. Files in `public/` are copied as they are.

## Develop

```bash
npm install
npm run dev
```

## Pages that repeat the apps' numbers

`paw-safety/index.html` lists Paw Check's five bands with the apps' default pavement thresholds
(40, 46 and 57.2 °C, and 0 °C). They are the Remote Config keys `walk_warm_pavement_c`,
`walk_hot_pavement_c`, `walk_dangerous_pavement_c` and `walk_icy_pavement_c`, with their defaults in
both apps and in the template in the Android repo (`firebase/remoteconfig.template.json`). When one
of them changes, update the table on that page (both °C and °F) and the walk card's caption example
under it, then deploy.

## Deploy

Hosted on Firebase Hosting in the app's own Firebase project, `cats-dogs-weather`.

```bash
npm run build
firebase emulators:start --only hosting   # optional: check the built site with the real headers and redirects
firebase deploy --only hosting
```

`firebase.json` sets the security and caching headers, serves `/privacy`, `/support` and `/terms` without
`.html`, and 301-redirects `/weather` (the apps' old privacy link on fangjet.com) to `/privacy`.
