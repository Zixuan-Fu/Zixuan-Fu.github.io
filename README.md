# Zixuan Fu — GitHub Pages

A bilingual, responsive personal website built as a static site. No build step or external dependency is required.

## Preview locally

Open `index.html` directly, or run a local server in this folder:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Publish to GitHub Pages

1. Create a GitHub repository named `<your-github-username>.github.io`.
2. Upload everything in this folder to the repository root.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then save.
6. The site will appear at `https://<your-github-username>.github.io` after GitHub finishes deployment.

## Files

- `index.html` — bilingual content and structure
- `styles.css` — visual design and responsive layout
- `script.js` — language switch, stage navigation, and reveal motion
- `assets/profile.jpg` — profile portrait extracted from the supplied résumé

## Privacy

The site intentionally omits the phone number, exact location, and political affiliation included in the supplied résumé. Review all content before publishing it publicly.
