# DuneRock Horizon World

This directory is the repository home for the DuneRock Meta Horizon Worlds project.

## Current Development Goal

Build a deterministic and maintainable world bootstrap sequence:

```text
Floor -> Roads -> World Ready -> Player Entry
```

The existing highway prototype will be brought into the Horizon-generated workspace and refactored incrementally rather than rewritten all at once.

## Planned Responsibilities

- `DuneRockWorldController` — coordinates world initialization.
- `FloorGenerator` — owns bounded floor generation.
- `HighwayGenerator` — owns road graph generation and road asset spawning.
- Player spawn/entry behavior — enabled after required world generation is complete.

Buildings and signage remain later milestones until the base floor and highway lifecycle is validated.

## Horizon Workspace

Allow Horizon Worlds Desktop Editor to create the generated script workspace beneath this project. Use the generated `types/` definitions as the source of truth for Horizon APIs before implementing platform-specific behavior.
