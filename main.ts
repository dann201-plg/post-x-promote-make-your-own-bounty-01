// Entry for make.fun "Promote make.fun's make-your-own-bounty post on X".
// Copies POST.json (the address of the X post) to /output, where the gate reads it.
// The post itself is the entry: a quote of make.fun's post, with a photo of its own.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
const B = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const O = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(O, { recursive: true });
copyFileSync(join(B, "POST.json"), join(O, "POST.json"));
