# MacControl Engine

The Engine is the central state manager for MacControl. It owns the current
state, validates its structure, and will provide a stable interface for every
automation module.

Modules never edit JSON directly. A module reports its result to the Engine;
the Engine is responsible for updating the appropriate state section and
persisting the complete state safely.

## State location

The repository contains the state contract and its default value, not live
machine data. When state persistence is implemented, the live file will be:

```text
~/Library/Application Support/MacControl/State.json
```

The same Application Support directory will later contain `Logs/` and
`Cache/` directories.

## Version 1 sections

| Section | Owner | Purpose |
| --- | --- | --- |
| `awake` | Amphetamine module | Whether the Mac is being kept awake. |
| `battery` | Battery module | Charge level and charging state. |
| `network` | Network module | Current Wi-Fi network. |
| `system` | System modules | Dark Mode and display-sleep state. |
| `metadata` | Engine | Represented initially by top-level `version` and `updated`. |

All sections exist before their module is implemented so clients can rely on a
predictable document shape.

## Planned API

- Read State
- Write State
- Update Section
- Export State
- Validate State

This milestone defines the contract only. Read/write logic and module
integration will be added in later milestones.
