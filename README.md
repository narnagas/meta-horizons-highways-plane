# Meta Horizons Highways Plane — DuneRock World

A Meta Horizon Worlds development project focused on building the DuneRock world through structured, procedural world generation and event-driven world behavior.

## Current Goal

Establish a reliable world bootstrap sequence:

1. Generate a bounded world floor.
2. Confirm the floor is ready.
3. Generate the highway network above the floor surface.
4. Confirm roads are ready.
5. Mark the world ready for player entry.

Buildings, signage, traffic, and additional interactive systems will be introduced after the base world lifecycle is stable.

## Architecture Direction

The project follows the same engineering principles being established in the Lobby reference work:

- a world controller coordinates lifecycle and sequencing;
- specialized generators own specific responsibilities;
- state records what is currently true about the world;
- events communicate meaningful lifecycle changes;
- Horizon-specific APIs remain at clear integration boundaries;
- generated Horizon Desktop Editor workspace structure is preserved.

## Repository Layout

```text
docs/
  README.md
  ARCHITECTURE.md
  WORLD_GENERATION.md

horizon-worlds/
  README.md
  dunerock/
    README.md
```

The Horizon Desktop Editor will create its own generated script workspace beneath `horizon-worlds/dunerock/`. Generated numeric workspace directories should not be invented or renamed manually.

## Development Workflow

`main` is the stable baseline. Active implementation should be performed on a `development` branch and promoted after validation in Horizon Worlds Desktop Editor.

## Status

Repository initialization and architecture planning are in progress.
