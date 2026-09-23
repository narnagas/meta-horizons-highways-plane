import * as hz from "horizon/core";

export class FloorGenerator extends hz.Component<
  typeof FloorGenerator
> {
  static propsDefinition = {};

  start() {
    console.log("[DuneRock] Floor generator started.");
  }
}

hz.Component.register(FloorGenerator);