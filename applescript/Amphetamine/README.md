# Amphetamine module

This module contains small, standalone AppleScripts for controlling the
[Amphetamine](https://apps.apple.com/app/amphetamine/id937984704) macOS app.
Each script uses Amphetamine's built-in AppleScript support and can be run on
its own; there is no Shortcuts integration in this module yet.

Amphetamine must be installed before running a script. The first run may cause
macOS to ask for permission to automate Amphetamine.

## Scripts

| Script | Responsibility | Result |
| --- | --- | --- |
| `Toggle.applescript` | Toggle the current session. | Returns `started` or `stopped`. |
| `Status.applescript` | Read session state. | Returns an AppleScript record; it makes no changes. |
| `Session.applescript` | Start a known session configuration. | Starts an infinite session that prevents display sleep, then returns `started`. |

`Status.applescript` returns `secondsRemaining` in seconds. Amphetamine uses
`0` for an infinite session, `-1` for a Trigger session, `-2` for an
app- or date-based session, and `-3` when no session is active.

## Running scripts

Run a script from Terminal with `osascript`:

```sh
osascript applescript/Amphetamine/Toggle.applescript
osascript applescript/Amphetamine/Status.applescript
osascript applescript/Amphetamine/Session.applescript
```

`Toggle.applescript` uses the duration and display-sleep preferences already
configured in Amphetamine. `Session.applescript` is intentionally explicit so
future callers have a predictable way to start an infinite session.
