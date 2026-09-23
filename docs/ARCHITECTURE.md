# DuneRock Architecture

## Design Model

DuneRock separates world coordination from specialized generation responsibilities.

```text
DuneRockWorldController
        |
        +-- FloorGenerator
        |
        +-- HighwayGenerator
        |
        +-- Player Spawn / Entry
```

The intended lifecycle is:

```text
INITIALIZING
    |
GENERATING_FLOOR
    |
FLOOR_READY
    |
GENERATING_ROADS
    |
ROADS_READY
    |
WORLD_READY
    |
PLAYER ENTRY
```

## Responsibilities

### World Controller

Coordinates the world lifecycle and determines when the next stage may begin.

### Floor Generator

Owns the playable floor footprint and reports when floor generation is complete.

### Highway Generator

Owns the road graph and road asset generation. Roads are generated only after the floor is ready.

### Player Entry

Player entry occurs only after the required world-generation stages are complete.

## Engineering Principles

- Coordination at the top; specialized responsibilities underneath.
- State describes what is true now.
- Events communicate meaningful changes.
- Procedural data is separated from Horizon visual representation where practical.
- Horizon-generated workspace structure and generated typings are treated as authoritative integration boundaries.
- New systems such as buildings and signage are added after the base lifecycle is stable.
