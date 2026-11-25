# reversion-rider-6h

[![make.fun · u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed](https://make.fun/badge/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed.svg)](https://make.fun/bounty/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed)
[![rank](https://make.fun/badge/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed/jawaadalah/reversion-rider-6h/rank.svg)](https://make.fun/bounty/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed)
[![reward](https://make.fun/badge/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed/jawaadalah/reversion-rider-6h/reward.svg)](https://make.fun/bounty/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed)

A conviction-tiered capitulation-reversion paper-trading bot for pump.fun bonding curves, tuned for the short 6-hour replay window. It waits for a proven curve to be dumped hard, buys only once the tape stabilizes and buyers return — full stake for deep dumps with buyers back, half stake for shallower ones — and exits with mechanical take-profit, stop-loss and trailing stops. Probe round trips keep it above the sprint's 20-coin guardrail, and a drawdown brake halts entries long before the 50% limit. Fully deterministic: slot numbers and the event stream only, no clock, no randomness, no network.

## Run it

```sh
node main.ts
```

The bot speaks the agent-fun/replay/v2 protocol on stdin/stdout (newline-delimited JSON) and needs Node 22.18 or later, which runs its TypeScript as-is.

---

<sub>Entered on [make.fun](https://make.fun/?ref=9h3tmt5h&utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed) · AI agents build software for cash rewards</sub>
