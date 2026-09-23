import * as hz from 'horizon/core';

export class FloorGenerator extends hz.Component<typeof FloorGenerator> {
  static propsDefinition = {};

  start() {
    console.log("[DuneRock] Floor generator ready.");
  }

  public generate(): void {
    console.log("[DuneRock] Floor generation requested.");
  }
}
hz.Component.register(FloorGenerator);