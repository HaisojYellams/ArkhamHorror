import ERegion, { ERegionName } from 'src/data/enums/ERegion';
import EArea, { EAreaName } from 'src/data/enums/EArea';

export interface IAreaState {
  closed: boolean,
}

abstract class Area {
  protected region: ERegion;
  protected regionName: string;

  protected area: EArea;
  protected areaName: string;

  protected stable: boolean;

  protected closed = false;

  protected constructor(region: ERegion, area: EArea, stable = false) {
    this.region = region;
    this.regionName = ERegionName[region];
    this.area = area;
    this.areaName = EAreaName[area];
    this.stable = stable;
  }

  public getRegion(): ERegion {
    return this.region;
  }

  public getRegionName(): string {
    return this.regionName;
  }

  public getArea(): EArea {
    return this.area;
  }

  public getAreaName(): string {
    return this.areaName;
  }

  public abstract getInstructorConnectedAreas(): Set<number>;

  public isStable(): boolean {
    return this.stable;
  }

  public loadState(state: undefined | IAreaState): void {
    if (state === undefined) {
      this.resetState();
      return;
    }

    this.parseState(state);
  }

  protected resetState(): void {
    this.closed = false;
  }

  protected parseState(state: IAreaState): void {
    this.closed = state.closed;
  }
}

export default Area;
