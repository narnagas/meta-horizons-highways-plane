import * as hz from 'horizon/core';

export class floorGenerator extends hz.Component<typeof floorGenerator> {
  static propsDefinition = {};

  start() {
    console.log("[DuneRock] Floor generator started.");
  }
}
hz.Component.register(floorGenerator);