# Jolero Media — holding page

Temporary "launching soon" page for **joleromedia.com**. Single self-contained
`index.html` (CSS and JS inlined) plus a favicon. No build step.

The full site lives in a separate repo: [jolero-media](https://github.com/OderoProductions/jolero-media)
(preview: https://oderoproductions.github.io/jolero-media/).

## Editing

| Change | Where |
|---|---|
| "Site launching soon" wording | `index.html` — search `LAUNCH LINE` |
| Instagram / email buttons | `index.html` — search `CONTACT` |
| Logo (replaces the text wordmark) | save as `assets/logo.svg`, then swap the contents of `<a class="wordmark">` for `<img src="assets/logo.svg" alt="Jolero Media">` |
| Social share image | add `assets/og.jpg` (1200×630) and uncomment the `og:image` tag |

## Switching to the full site at launch

1. Remove the custom domain from **this** repo's Pages settings (and delete its `CNAME` file).
2. Add a `CNAME` file containing `joleromedia.com` to the **jolero-media** repo and
   set the custom domain there.
3. DNS stays exactly as it is — only which repo answers for the domain changes.

Nothing here needs deleting; it just stops being the live page, and can be put
back at any time.
