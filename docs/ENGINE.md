# MacControl Engine

The MacControl Engine is the boundary between automation modules and stored
state. It is intentionally small: it provides a stable state API while hiding
where and how the state is persisted.

## Modules do not write JSON

Each module owns one part of the state model, but it never edits `State.json`
directly. Modules return structured results and request an Engine section
update. Centralizing writes prevents one module from overwriting changes made
by another and gives the project one place for validation, migration, logging,
and error handling.

## State belongs in Application Support

Live state is machine data, not source code. The Engine will store it at
`~/Library/Application Support/MacControl/State.json`, alongside future logs
and cache data. The repository contains only `engine/default-state.json` and
`engine/schema.json`, which make the state contract reviewable and testable
without committing personal machine state.

## One shared state document

A single versioned document allows a dashboard, Shortcut, or future Swift app
to read a consistent view of MacControl. Each top-level section has a clear
owner, while unimplemented sections remain present with `null` values. This
lets consumers adopt the schema before every feature exists.

## Adding a module

1. Define the module's owned section in `engine/schema.json` and
   `engine/default-state.json`.
2. Return a standard result record from the module.
3. Send the result to the Engine's section-update API; do not edit JSON.
4. Extend Engine validation and add tests before exporting the new field.

Keeping this contract stable means the Engine can move from AppleScript to
Swift later without forcing every module or Shortcut to change.
