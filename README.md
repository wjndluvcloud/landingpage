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

## Deploy to a VPS

In PowerShell on Windows:

```powershell
cd D:\Project\landingpage
tar -czf landingpage.tar.gz -C .\site .
scp .\landingpage.tar.gz truyen-vps:/root/
scp .\deploy\nginx.conf truyen-vps:/root/landingpage-nginx.conf
```

On the VPS:

```bash
mkdir -p /var/www/landingpage
tar -xzf /root/landingpage.tar.gz -C /var/www/landingpage
chown -R www-data:www-data /var/www/landingpage
find /var/www/landingpage -type d -exec chmod 755 {} \;
find /var/www/landingpage -type f -exec chmod 644 {} \;

cp /root/landingpage-nginx.conf /etc/nginx/sites-available/landingpage
ln -sfn /etc/nginx/sites-available/landingpage /etc/nginx/sites-enabled/landingpage
nginx -t
systemctl reload nginx
curl -I http://127.0.0.1:8081/
```

In the active Cloudflare Tunnel, add a **Published application**:

| Field | Value |
|---|---|
| Subdomain | Leave blank |
| Domain | `nducvu.men` |
| Path | Leave blank |
| Service URL | `http://localhost:8080` |

If the root domain already has an `A`, `AAAA`, or `CNAME` DNS record, remove the conflicting record before adding the route. You can add a route for `www.nducvu.men` to the same service or create a Redirect Rule from `www` to the root domain.
