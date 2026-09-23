import * as hz from "horizon/core";

enum WorldLifecycleState {
  Initializing = "INITIALIZING",
  GeneratingFloor = "GENERATING_FLOOR",
  FloorReady = "FLOOR_READY",
  GeneratingRoads = "GENERATING_ROADS",
  RoadsReady = "ROADS_READY",
  WorldReady = "WORLD_READY",
}

export class DuneRockWorldController extends hz.Component<
  typeof DuneRockWorldController
> {
  static propsDefinition = {};

  private currentState: WorldLifecycleState =
    WorldLifecycleState.Initializing;

  start() {
    console.log(
      `[DuneRock] World controller started. State: ${this.currentState}`
    );
  }
}

hz.Component.register(DuneRockWorldController);