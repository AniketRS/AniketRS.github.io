# Aniket Shinde Portfolio

Personal portfolio website. It's plain HTML, CSS and JavaScript, with no build step.

- `index.html`: layout and design
- `content.js`: all the text, links and photo captions (edit this to update the site)
- `india-map.js`: the India map shape (map by Victor Cazanave, CC BY 4.0)
- `assets/photos/`: photos
- `.nojekyll`: tells GitHub Pages to serve the files as they are

## Publish on GitHub Pages
1. Sign in at github.com and click **New repository**.
   Name it `aniketshinde24.github.io` (your GitHub username + `.github.io`) for the address
   `https://aniketshinde24.github.io`, or any name, such as `portfolio`, for `https://<username>.github.io/portfolio`.
   Set it to **Public**. Don't add a README.
2. On the new repository page, click **uploading an existing file**.
3. Drag in everything from this folder: `index.html`, `content.js`, `india-map.js`, `README.md`, `.nojekyll` and the `assets` folder.
   (`.nojekyll` is a hidden file. On a Mac press Cmd+Shift+. in Finder to see it. The site works without it.)
4. Click **Commit changes**.
5. Go to **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
6. After 1–2 minutes your site is live at the address shown on that page.

## Update the site later
Open `content.js` on GitHub, click the pencil icon, edit the text inside the quotes, and **Commit changes**.
The site updates within a minute or two.
To add or replace a photo, upload it to `assets/photos/` and use its file name in `content.js`.
