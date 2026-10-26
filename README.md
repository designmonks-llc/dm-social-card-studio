# DM Social Card Studio

Internal DesignMonks tool for making team social posts (the "Post Studio"). Pick a post type, fill in the details, add a transparent PNG of the person, and download or copy the finished post. Backgrounds, 3D props, fonts and spacing come from the Figma templates.

| Post type | Sizes |
|-----------|-------|
| Welcome, Birthday, Award (Rising Monk / Monk of the Month), Promotion | Feed 2000 × 2500 (4:5), Square 2000 × 2000, Story 2160 × 3840 (9:16) |
| Hiring | Feed 2000 × 2500, Story 2160 × 3840, Banner 3200 × 800 (4:1), Banner 1252 × 438 |
| DM Bites (news and quick updates) | Feed 2160 × 2700 (4:5) |

## Using it

It is a static site with no build step and no server code.

- **Locally:** open `index.html` in Chrome, Edge or Safari. Double-clicking works; you don't need a server.
- **Hosted:** turn on GitHub Pages (Settings → Pages → Deploy from branch → `main` / root). The `.nojekyll` file makes Pages serve the files as they are.

What it does:

1. **Post type.** Choose Welcome, Birthday, Award, Promotion, Hiring or DM Bites, then a size.
2. **Details.** Fill in the name, designation, role or salary. Until every field is filled and a photo is added, the preview uses sample content and says so.
3. **Photo.** Drop or pick a transparent, waist-up PNG (3024 × 3780 px is ideal). Drag the person on the preview, or use the size and position sliders. Each size keeps its own adjustment.
4. **DM Bites.** Add a landscape JPG, PNG or WebP (2160 px wide or more), a tag such as News, the headline and the date and source. Wrap words in `*asterisks*` to make them green, and press Enter to force a line break. Long headlines shrink to fit three lines. Drag the image or use the sliders to choose the crop; it always fills the photo area.
5. **Export.** **Download PNG** saves the current size, **Copy image** puts it on the clipboard, and **All sizes (.zip)** packs every size of the current post.

## Project layout

```
index.html                 Page markup
css/
  fonts.css                @font-face rules for the self-hosted fonts
  styles.css               UI styles
js/
  app.js                   App logic: templates, text fitting, rendering, export
  embedded-assets.js       GENERATED. Base64 copies of every image in assets/images/
  vendor/jszip.min.js      JSZip 3.10.1 (MIT), used to build the zip
assets/
  fonts/                   Red Hat Display 400/500/700/800, Outfit 400/500,
                           Playfair Display 700 and 700 Italic, Bebas Neue 400 (woff2)
  images/                  Template layers (backgrounds, props, rings, glows,
                           sample people) as WebP, one file per key in META
  meta/                    Favicon, Apple touch icon and the social preview image
                           (og-image.png, 1200 × 630)
tools/
  build-embedded.py        Rebuilds js/embedded-assets.js from assets/images/
```

### Why `embedded-assets.js` exists

The studio draws every layer onto a canvas and exports that canvas as PNG. When the page is opened from disk (`file://`), browsers treat local image files as cross-origin, and drawing one would block the export. Keeping base64 copies of the images in one generated file means the tool works when you double-click it and when it's hosted. Fonts don't have this problem, so they load straight from `assets/fonts/`.

If you add or replace anything in `assets/images/`, regenerate the file:

```sh
python3 tools/build-embedded.py
```

## Link previews

The Open Graph and Twitter tags in `index.html` point at `https://designmonks-llc.github.io/dm-social-card-studio/`, the GitHub Pages address. If the studio is hosted somewhere else, update `og:url`, `og:image`, `twitter:image` and the canonical link to match.

## Template values

Layer positions come from the DesignMonks Figma source:

- `META` at the top of `js/app.js` holds the position and size of each image layer. The key is the file name in `assets/images/` without `.webp`.
- `PEOPLE_FMTS` and `HIRE_FMTS` hold the output sizes.
- `TEMPLATES` holds each post's layer order, blend modes, sample text and text boxes.
- `BITES` holds the DM Bites layout (photo area, tag, headline box, rule, date line and mark), in pixels of the 1080 × 1350 Figma frame (DM | Socials 02, "Static 22"). `assets/images/bites_sample.webp` is the preview image shown before a photo is added.

Change them there if the Figma templates change.

## Claude features

Inside a Claude artifact, downloads go through Claude's download prompt. Outside Claude (locally or on GitHub Pages), files download normally.
