# CLAUDE.md

Context for agents working in this repository. Read `README.md` first.

## Rules

1. Never commit without Jake's explicit approval. Verify that no secret is included.
2. No comments in code. A fact that would be a comment goes in the README.
3. No emoji in a commit message or a document. No en dash or em dash.
4. Release tags use semantic versioning, and the tag equals `version` in `package.json`.
5. Write prose in the STE100 style: short, active sentences.
6. Keep the page to links and connect steps. Jake rejected descriptive copy and the generic tile look.
7. Every link comes from `src/data`. Never hard-code a link in a component.
8. Run `npm run format:check`, `npm run lint`, `npm run typecheck` and `npm run build` before you offer a branch.
