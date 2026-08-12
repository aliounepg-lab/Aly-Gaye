# IQRA Bilingual Academy — School Schedule Website

A lightweight, static website for publishing the school's bell schedules:
the regular daily schedule, Professional Development Days, Spring Break
Classes, and Summer School. No build step or server required — it's plain
HTML/CSS/JS.

## Structure

```
index.html      Page shell + tab navigation
css/style.css   All styling (green/gold theme, print styles, mobile layout)
js/app.js       Schedule DATA and rendering logic
```

## Editing a schedule

Open `js/app.js`. Near the top is a `SCHEDULES` object with one entry per
tab: `regular`, `pd`, `spring`, `summer`. Each entry has a `periods` array —
edit the `name`, `start`, and `end` fields directly. Durations are computed
automatically, so you never need to update them by hand.

```js
{ type: "class", name: "Period 1", start: "8:00 AM", end: "8:50 AM" }
```

`type` controls the row color and must be one of: `class`, `break`,
`lunch`, `prayer`.

The `regular` (Daily Schedule) schedule is marked as official and reflects
the confirmed 8:00 AM–4:30 PM, 7-period bell schedule. The `pd`, `spring`,
and `summer` schedules are starting templates (flagged with a "Sample
template" badge on the page) — update their times, session titles, and
dates before publishing each one, then remove the `status: "sample"` line
once confirmed.

## Adding a new schedule type

1. Copy one of the objects in `SCHEDULES` in `js/app.js`, give it a new key
   (e.g. `ramadan`), and fill in its `periods`.
2. Add a matching tab button in `index.html`:
   ```html
   <button class="tab-btn" data-schedule="ramadan" role="tab">Ramadan Schedule</button>
   ```

## Features

- Tab navigation between all schedule types (deep-linkable via URL hash,
  e.g. `index.html#pd`)
- Live clock and automatic "Now" highlight on the current period of the
  Daily Schedule
- Print button with dedicated print styles (only the active schedule
  prints, cleanly formatted)
- Responsive layout for phones/tablets used at drop-off or in the office

## Hosting

Any static host works — GitHub Pages, Netlify, Vercel, or simply the
school's existing web server. Upload the three files/folders above as-is.
