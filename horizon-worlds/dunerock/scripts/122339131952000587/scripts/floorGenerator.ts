import * as hz from 'horizon/core';

export class floorGenerator extends hz.Component<typeof floorGenerator> {
  static propsDefinition = {};

  start() {
    console.log("[DuneRock] Floor generator ready.");
  }

  public generate(): void {
    console.log("[DuneRock] Floor generation requested.");
  }
}
hz.Component.register(floorGenerator);