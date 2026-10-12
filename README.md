# VV Studios changelog

One-page Astro site listing user-facing changes to [vvstudios](https://github.com/laoz40/vvstudios).

Uses [Vite+](https://viteplus.dev/) (`vp`) with Bun.

## Develop

```bash
vp install
vpr dev
```

(`vpr` runs the `dev` script; Astro owns the dev server.)

## Build

```bash
vpr build
vpr preview
```

```bash
vp check
```

Lint and format settings live in `vite.config.ts` (`lint` / `fmt` blocks). Use `vpr <script>` (alias for `vp run <script>`) so you do not start Vite+’s built-in `vp dev` server by mistake.

Changelog copy lives in `src/content/changelog.md`.
