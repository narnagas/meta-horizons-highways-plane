import * as hz from "horizon/core";

type FloorCell = {
  x: number;
  z: number;
  isEdge: boolean;
};

export class FloorGenerator extends hz.Component<
  typeof FloorGenerator
> {
  static propsDefinition = {};

  private readonly cellSize = 4;
  private readonly baseRadius = 40;
  private readonly edgeVariation = 8;

  start() {
    console.log("[DuneRock] Floor generator ready.");
  }

  public generate(): void {
    console.log("[DuneRock] Floor generation requested.");

    const cells = this.generateFloorCells();

    const edgeCells =
    cells.filter((cell) => cell.isEdge);

    const interiorCells =
    cells.filter((cell) => !cell.isEdge);

    console.log(
      `[DuneRock] Generated floor footprint: ${cells.length} cells ` +
      `(${interiorCells.length} interior, ${edgeCells.length} edge).`
    );
  }

  private generateFloorCells(): FloorCell[] {
    const cells: FloorCell[] = [];

    const maxRadius =
      this.baseRadius + this.edgeVariation;

    const gridRadius =
      Math.ceil(maxRadius / this.cellSize);

    for (let x = -gridRadius; x <= gridRadius; x++) {
      for (let z = -gridRadius; z <= gridRadius; z++) {
        const worldX = x * this.cellSize;
        const worldZ = z * this.cellSize;

        const distance =
          Math.sqrt(
            worldX * worldX +
            worldZ * worldZ
          );

        const angle =
          Math.atan2(worldZ, worldX);

        const localRadius =
          this.getRadiusAtAngle(angle);

        if (distance <= localRadius) {
          cells.push({
            x,
            z,
            isEdge: false,
          });
        }
      }
    }

    /* ==============================
      Edge Cells Verification
    ================================*/
    const cellKeys = new Set(
      cells.map(
        (cell) => `${cell.x},${cell.z}`
      )
    );

    for (const cell of cells) {
      const neighbors = [
        `${cell.x + 1},${cell.z}`,
        `${cell.x - 1},${cell.z}`,
        `${cell.x},${cell.z + 1}`,
        `${cell.x},${cell.z - 1}`,
      ];

      cell.isEdge =
        neighbors.some(
          (neighbor) => !cellKeys.has(neighbor)
        );
    }

    return cells;
  }

  private getRadiusAtAngle(angle: number): number {
    const variation =
      Math.sin(angle * 5) * 0.55 +
      Math.sin(angle * 9 + 1.7) * 0.30 +
      Math.sin(angle * 13 + 0.8) * 0.15;

    return (
      this.baseRadius +
      variation * this.edgeVariation
    );
  }
}

hz.Component.register(FloorGenerator);