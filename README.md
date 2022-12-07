# how-to-use-cjs-module-as-esm-module-in-node.js

> CJS => ESM
## demo

> `ESM` usages

```mjs
import NextMdx from '@next/mdx'; // ✅
// ...
NextMdx()
```
OR

```mjs
import * as NextMdx from '@next/mdx'; // ✅
// ...
NextMdx.default()
```

https://github.com/vercel/next.js/issues/43665#issuecomment-1340875080
