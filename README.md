# easton-apps

The launcher page for Easton staff and coaches at https://apps.eastonbjj.com. It links to the
Easton apps and shows how to connect the Easton MCP server to Claude, ChatGPT and Claude Code.

## Change the links

- The app chiclets come from `src/data/apps.ts`. Add one entry to add a chiclet.
- The AI assistant cards and the server URL come from `src/data/assistants.ts`.
- An assistant needs its OAuth redirect in `MCP_ALLOWED_REDIRECTS` on easton-mcp before it can sign in. Today that list holds claude.ai, chatgpt.com and loopback addresses.

## Design

The page uses the eastonbjj.com theme: the cream canvas, ink black and Easton red, Anton
headlines, Oswald labels and Barlow body text. The tokens are in `src/app/globals.css`.

## Search engines

The page is public but hidden from search engines in three ways: the `robots` meta tag,
`robots.txt` and the `X-Robots-Tag` header in `vercel.json`.

## Development

Use Node 22. Install with npm 11.

- Dev: `npm run dev`
- Gates: `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm run build`
- The build writes a static site to `out/`.

## Deploy

Vercel project `easton-apps`. A push to `main` deploys production. DNS for `apps.eastonbjj.com`
is one record at GoDaddy in the eastonbjj.com zone: `A apps 76.76.21.21`, which points to Vercel.
The project also holds `apps.eastontc.com`, but the eastontc.com zone has no record for it.
