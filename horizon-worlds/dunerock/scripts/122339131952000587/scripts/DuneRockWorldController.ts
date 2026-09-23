import { FloorGenerator } from "floorGenerator";
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
  static propsDefinition = {
    floorGenerator: {
      type: hz.PropTypes.Entity,
    }
  };

  private currentState: WorldLifecycleState =
    WorldLifecycleState.Initializing;

  start() {
    console.log(
      `[DuneRock] World controller started. State: ${this.currentState}`
    );
    
    this.transitionTo(WorldLifecycleState.GeneratingFloor);

    const floorGenerator = this.props.floorGenerator?.getComponents(FloorGenerator)[0];

    if(!floorGenerator){
      console.error("[DuneRock] FloorGenerator component was not found.");

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