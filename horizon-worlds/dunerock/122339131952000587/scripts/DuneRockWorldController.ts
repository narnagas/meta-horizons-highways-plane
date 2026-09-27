import * as hz from 'horizon/core';
import { DuneRockFloorGenerator } from 'DuneRockFloorGenerator';

enum WorldLifecycleState {
  Initializing = "INITIALIZING",
  GeneratingFloor = "GENERATING_FLOOR",
  FloorReady = "FLOOR_READY",
  GeneratingRoads = "GENERATING_ROADS",
  RoadsReady = "ROADS_READY",
  WorldReady = "WORLD_READY",
}

class DuneRockWorldController extends hz.Component<typeof DuneRockWorldController> {

  static propsDefinition = {
    entityGenerator: {
      type: hz.PropTypes.Entity,
    },
  };

  private currentState: WorldLifecycleState =
    WorldLifecycleState.Initializing;

  start() {

    console.log(
      `[DuneRock] World controller started. State: ${this.currentState}`
    );

    this.transitionTo(WorldLifecycleState.GeneratingFloor);
    
    const floorGenerator = this.props.entityGenerator?.getComponents(DuneRockFloorGenerator)[0];

    if (!floorGenerator) {
      console.error(
        "[DuneRockFloorGenerator] component was not found."
      );

      return;
    }
    floorGenerator.generate();
  }
  private transitionTo(nextState: WorldLifecycleState): void {
    const previousState = this.currentState;

    this.currentState = nextState;

    console.log(
      `[DuneRock] Lifecycle: ${previousState} -> ${this.currentState}`
    );
  }
}


hz.Component.register(DuneRockWorldController);