# DuneRock World Generation

## Current Baseline

The existing prototype can generate a floor and road layout. Current issues to address are:

- the floor footprint is not yet constrained to the intended bounded area;
- road assets can appear below or be covered by the floor;
- generation is not yet explicitly sequenced as floor, then roads, then player entry;
- buildings and signage are not part of the validated generation baseline.

## Target Bootstrap Sequence

```text
Generate bounded floor
        |
        v
Floor ready
        |
        v
Generate highway graph
        |
        v
Spawn road assets above floor
        |
        v
Roads ready
        |
        v
World ready
        |
        v
Player entry
```

## World Footprint

The first planned footprint is circular while retaining an internal grid for procedural placement. A grid cell can be accepted when its position satisfies the configured world-radius rule.

## Surface Layering

Floor elevation and road elevation should be explicit configuration. Road placement should use a small configurable surface offset above the finished floor, with the final value validated against the actual road asset pivots.

## Future Stages

After the bootstrap sequence is reliable, generation can expand to buildings, signage, environmental details, traffic, and interactive world systems.
