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
| `Toggle.applescript` | Toggle the current session. | Returns a result record with a `started` or `stopped` action. |
| `Status.applescript` | Read session state. | Returns a result record; it makes no changes. |
| `Session.applescript` | Start a session. | Uses Amphetamine's configured defaults and returns a result record. |

`Status.applescript` returns `secondsRemaining` in seconds. Amphetamine uses
`0` for an infinite session, `-1` for a Trigger session, `-2` for an
app- or date-based session, and `-3` when no session is active.

Every script returns `{success:true, module:"Amphetamine", action:"..."}` on success. On failure, it instead returns `success:false` with an `error` message and numeric `code`; this includes missing Amphetamine and denied automation permissions. Timestamp support can be added later in the shared result contract.

## Dependencies

- macOS
- Amphetamine
- AppleScript

## Tested with

- Amphetamine 5.3.2
- macOS 26.5.2

## Running scripts

Run a script from Terminal with `osascript`:

```sh
osascript applescript/Amphetamine/Toggle.applescript
osascript applescript/Amphetamine/Status.applescript
osascript applescript/Amphetamine/Session.applescript
```

`Toggle.applescript` and `Session.applescript` both use the duration and
display-sleep preferences configured in Amphetamine. The distinction is that
Toggle changes state, while Session only starts a session.
