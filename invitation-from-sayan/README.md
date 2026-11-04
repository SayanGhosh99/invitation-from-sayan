# Invitation from Sayan

Wedding reception invitation: Sayan & Sanchari, 15 December 2026.

```
index.html              shell: meta tags, music button, <audio>, dots nav, <main>, script tags
assets/
  images/               couple.jpg, leaf.webp, footprint-left.png, footprint-right.png, thumbnail.jpg
  audio/                audio.mp3
css/
  tokens.css            colour / size variables, leaf + footprint image paths
  base.css              reset, scroll-snap layout, page column
  themes.css            red and cream page themes, borders
  leaf.css              swaying leaf decoration
  typography.css        script / Cinzel / name text styles
  components.css        ornament, reveal, photo arch, events, button, countdown, dots, petals
  pages/                01-bodhuboron.css, 03-alpana.css (page-specific styles)
  gate.css              curtain gate + thali scene
  music.css             music button
  responsive.css        landscape tweaks
  intro-reveal.css      page 1 fade-in after the gate opens
pages/                  one file per screen (markup): gate, 01 ... 07
js/
  core/                 mount, navigation, countdown, page-decor, music, gate
  decor/                alpana, mandala, gatchora, medal (generated SVG artwork)
  pages/                03-alpana (alpana + footprints), 06-venue-map (map button)
```

Script order in `index.html` matters
