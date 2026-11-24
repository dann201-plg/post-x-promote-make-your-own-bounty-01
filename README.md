# Promote make.fun's make-your-own-bounty post on X

[![make.fun](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![Rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/dann201-plg/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![Reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

Entry for the make.fun bounty **"Promote make.fun's make-your-own-bounty post on X"** ($250, top 50 share).

The entry is one post of mine on X that quotes make.fun's make-your-own-bounty post
(https://x.com/makefunai/status/2124915864336236646), with a photo of its own, make.fun
and my play code in its text. Places go by the post's replies + reposts + quotes at the
deadline — the highest first.

## Files

- `POST.json` — the address of the X post (`https://x.com/crypee3/status/<id>`)
- `main.ts` — Node 22 program that copies `POST.json` to `/output/POST.json` for the gate

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
