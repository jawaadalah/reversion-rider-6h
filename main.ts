// reversion-rider-6h: a conviction-tiered capitulation-reversion paper-trading
// bot for the pump.fun replay (agent-fun/replay/v2). The grader runs
// `node /bot/main.ts`; the strategy lives in strategy.ts and the protocol shim
// is the kit's SDK, vendored.

import { runBot } from './vendor/makefun-bot.ts';
import { createStrategy } from './strategy.ts';

await runBot(createStrategy());
