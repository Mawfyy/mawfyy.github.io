---
title: "Running opencode on FreeBSD"
description: "How I got opencode working on FreeBSD with just bun and a few commands."
date: 2026-09-12
---

Since I moved to FreeBSD, I wanted my usual dev tools with me. The CLI one I reach for most is [opencode](https://github.com/anomalyco/opencode). Turns out getting it running is about as simple as it can get — no compilation, no patches, no cargo or node build steps. Just Bun.

Here's the whole thing:

1. Install Bun (the FreeBSD package is there, I grabbed it with `pkg`).
2. Clone the repo.
3. Check out the `freebsd-source-builds` branch.
4. `bun install` from the repo root.
5. `bun dev`

That's literally it. opencode runs as a TUI on top of Bun, so on FreeBSD it behaves exactly like it does on Linux.

```sh
# 1. Bun
sudo pkg install bun

# 2. Clone
git clone https://github.com/anomalyco/opencode.git
cd opencode

# 3. Branch for FreeBSD
git checkout freebsd-source-builds

# 4. Dependencies (from repo root, it's a monorepo)
bun install

# 5. Run it
bun dev
```

A couple of notes from my own setup:

- Make sure you have a terminal that handles the TUI well. tmux or kitty both worked fine, bemenu-style plain xterm not so much.
- If you're on a fresh install like I was, add your model provider keys in `~/.config/opencode/opencode.json`.
- Use the `freebsd-source-builds` branch — the default `dev` branch doesn't build on FreeBSD.
- `bun install` once at the repo root (it's a monorepo), but `bun dev` runs from `packages/opencode` — that's where the TUI package lives.

One thing that surprised me pleasantly: no Electron, no WebView, no system dependencies. Just a binary-friendly runtime and the terminal. On FreeBSD that's a real gift compared to most modern dev tools.