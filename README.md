# nducvu.men landing page

A static landing page for `nducvu.men`, built with plain HTML, CSS, and JavaScript. Its interface takes inspiration from the minimalist spirit of `nkh.do`: a compact content column, monospace type, dividers, light/dark mode, and a project list. The content, colors, and components are independently designed.

## Edit content

- Information, introduction, and links: `site/index.html`.
- Colors, spacing, and responsive styles: `site/styles.css`.
- Theme initialization before the page is displayed: `site/theme-init.js`.
- Theme toggle, current year, and Ho Chi Minh City clock: `site/app.js`.
- Configure `hello@nducvu.men` with Cloudflare Email Routing, or replace it with the email address you use.

## Preview locally

You can open `site/index.html` directly in a browser. To serve it with a web server, change to the `site` directory and use any static server.

## Deploy with GitHub Pages

The repository publishes `site/` through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) whenever a commit is pushed to `master`. No build step is needed.

GitHub Pages uses **GitHub Actions** as its publishing source and `nducvu.men` as its custom domain. Cloudflare DNS has a **DNS only** `CNAME` record named `@` targeting `wjndluvcloud.github.io`; Cloudflare flattens this record at the domain apex. The other subdomains use their own DNS records.

To publish a change, push it to `master` and check the repository's **Actions** tab. After GitHub issues the domain's certificate, enable **Enforce HTTPS** in **Settings > Pages**.

The old VPS configuration remains in `deploy/` for reference; GitHub Pages does not use its Nginx settings or security headers.
