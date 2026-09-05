# Async Flow

| Rule | Decision | Verify |
| --- | --- | --- |
| `guard-before-await` | Resolve cheap synchronous exits before starting optional async work. | The skipped branch performs no remote wait. |
| `await-inside-branch` | Await a value only in the branch that consumes it. | Other branches can complete without that dependency. |
| `parallel-independent-work` | Start unrelated promises together and join them once. | The request timeline shows overlap. |
| `model-dependency-graph` | Chain only true dependencies; keep sibling work concurrent. | One slow branch does not serialize its siblings. |
| `start-early-await-late` | Create promises near the start of a handler and await at the last responsible point. | Useful work runs while I/O is pending. |
| `stream-at-boundaries` | Place Suspense around independently useful regions. | The shell and faster regions render before slower content. |
