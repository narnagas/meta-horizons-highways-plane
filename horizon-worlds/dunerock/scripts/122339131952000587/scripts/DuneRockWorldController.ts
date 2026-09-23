import * as hz from "horizon/core";

export class DuneRockWorldController extends hz.Component<
  typeof DuneRockWorldController
> {
  static propsDefinition = {};

  start() {
    console.log("[DuneRock] World controller started.");
  }
}

hz.Component.register(DuneRockWorldController);