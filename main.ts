import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "My left earbud dies at 20% while the right sits at 80%, so my podcasts are now in mono and my battery anxiety in stereo.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
