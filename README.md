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

Three guides show the apps' default Remote Config values. The defaults live in both apps and in the
template in the Android repo (`firebase/remoteconfig.template.json`). When one of these changes,
update the page (both °C and °F where it gives them), then deploy:

- `paw-safety/index.html`: Paw Check's five bands, from `walk_warm_pavement_c`,
  `walk_hot_pavement_c`, `walk_dangerous_pavement_c` and `walk_icy_pavement_c` (40, 46 and
  57.2 °C, and 0 °C), and the walk card's caption example under the table.
- `best-time-to-walk/index.html`: what makes a good hour for a walk, from `walk_max_rain_chance`
  (30%), `walk_comfort_min_c` and `walk_comfort_max_c` (3 and 27 °C), `walk_warm_pavement_c`
  (40 °C), `walk_hours_start` and `walk_hours_end` (7 AM and 8 PM), the near gale (Beaufort 7)
  and `walk_bad_air_band`. It also describes the walk card, so check it when the card's wording
  changes.
- `too-cold-to-walk/index.html`: the walk card in the cold, from `walk_comfort_min_c` (3 °C) and
  `pet_cold_threshold_c` (0 °C), with the captions "Too chilly out." and "Too cold for a long
  walk.", and Paw Check's "Icy, watch for salt" (`walk_icy_pavement_c`). The temperature guide
  above it is general advice, not the apps' numbers.

## Deploy

Hosted on Firebase Hosting in the app's own Firebase project, `cats-dogs-weather`.

```bash
npm run build
firebase emulators:start --only hosting   # optional: check the built site with the real headers and redirects
firebase deploy --only hosting
```

`firebase.json` sets the security and caching headers, serves `/privacy`, `/support` and `/terms` without
`.html`, and 301-redirects `/weather` (the apps' old privacy link on fangjet.com) to `/privacy`.
