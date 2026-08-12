# IQRA Bilingual Academy — School Schedule Website

A static website publishing the school's bell schedules: the regular daily
schedule, Professional Development Days, Spring Break Classes, and Summer
School. No build step or server required — plain HTML/CSS/JS, ready to
upload to any static host.

## Structure

```
index.html        Page shell, header/footer, tab navigation
css/style.css      All styling (theme, icons, print styles, responsive layout)
js/app.js          Schedule DATA and rendering logic
assets/logo.png    Full-resolution school crest
assets/logo-192.png  Display-sized crest (header/footer)
assets/favicon.png   Favicon-sized crest (browser tab)
```

## Current schedules

All four schedules are confirmed and marked official:

| Tab | Dates | Daily hours |
| --- | --- | --- |
| Daily Schedule | Every regular school day | 8:00 AM – 4:30 PM, 7 periods |
| Professional Development Day | 3rd Monday monthly, Aug 2026–Jun 2027 (skips Dec winter break and Jan MLK Day) | 8:00 AM – 4:00 PM, staff only |
| Spring Break Classes | Mar 22–26, 2027 | 9:00 AM – 2:00 PM |
| Summer School | Jul 5 – Aug 13, 2027 | 8:30 AM – 3:30 PM |

## Editing a schedule

Open `js/app.js`. Near the top is a `SCHEDULES` object with one entry per
tab: `regular`, `pd`, `spring`, `summer`. Each entry has a `periods` array —
edit the `name`, `start`, and `end` fields directly. Durations are computed
automatically, so you never need to update them by hand.

```js
{ type: "class", name: "Period 1", start: "8:00 AM", end: "8:50 AM" }
```

`type` controls the row color/icon and must be one of: `class`, `break`,
`lunch`, `prayer`.

Each schedule also has a `dates` array (rendered as chips under the notes)
and a `status` field. Leave `status` off (or set it to `"official"`) once a
schedule is confirmed. Setting `status: "sample"` shows a "Sample template —
please review & customize" badge — useful when drafting a new schedule
that isn't finalized yet, like the ones this site started from.

## Adding a new schedule type

1. Copy one of the objects in `SCHEDULES` in `js/app.js`, give it a new key
   (e.g. `ramadan`), and fill in its `periods`.
2. Add a matching tab button in `index.html`, with an icon in the same
   inline-SVG style as the existing tabs:
   ```html
   <button class="tab-btn" data-schedule="ramadan" role="tab">
     <svg viewBox="0 0 24 24">...</svg>
     Ramadan Schedule
   </button>
   ```
3. Add a matching entry to `PANEL_ICONS` in `js/app.js` (reuse the same SVG
   markup) so the schedule's icon shows next to its title.

## Features

- Tab navigation between all schedule types (deep-linkable via URL hash,
  e.g. `index.html#pd`, including browser back/forward)
- Live clock and automatic "Now" highlight on the current period of the
  Daily Schedule
- Print button with dedicated print styles (only the active schedule
  prints, cleanly formatted)
- Custom icon set for every tab and period type, school crest as the logo
  and favicon, and an Islamic-geometric motif (crenellated header border,
  lattice watermark) throughout
- Responsive layout for phones/tablets used at drop-off or in the office

## Hosting

Any static host works — GitHub Pages, Netlify, Vercel, or the school's
existing web server. Upload `index.html`, `css/`, `js/`, and `assets/` as-is.
The page pulls Google Fonts (Poppins/Inter/Amiri) over the network with
graceful fallback to system fonts if that request fails, so it still
renders correctly offline or on a restricted network.
