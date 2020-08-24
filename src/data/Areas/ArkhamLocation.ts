import ERegion from '../enums/ERegion';
import EArea, { UnstableLocations, ArkhamLocations as ALocs } from 'src/data/enums/EArea';
import { InvestigatorPaths } from 'src/data/Areas/StaticPaths';
import Area, { IAreaState } from 'src/data/Areas/Area';

export interface IArkhamLocationState extends IAreaState {
  clueTokens: number,
}

class ArkhamLocation extends Area {
  protected clueTokens = 0;

  constructor(area: EArea, stable = false) {
    super(ERegion.Arkham, area, stable);
    this.clueTokens = 0;
  }

  public getInstructorConnectedAreas(): Set<number> {
    let areas: Set<number>;
    if (!InvestigatorPaths.hasOwnProperty(this.area)) {
      areas = new Set<number>();
    } else {
      areas = new Set<number>([...InvestigatorPaths[this.area]]);
    }
    console.warn('TODO: calculate dynamic connected areas');
    return areas;
  }

  public addClueToken(): void {
    this.clueTokens += 1;
  }

  public getClueTokenCount(): number {
    return this.clueTokens;
  }

  public removeClueTokens(numToRemove: number): void {
    if (numToRemove > this.clueTokens) {
      console.error('Cannot remove more clue tokens than the location has.');
    } else {
      this.clueTokens -= numToRemove;
    }
  }

  protected resetState(): void {
    this.clueTokens = 0;
  }


  protected parseState(state: IArkhamLocationState): void {
    super.parseState(state);

    this.clueTokens = state.clueTokens;
  }
}

export default ArkhamLocation;

export const ArkhamLocations: { [key: number]: ArkhamLocation } = {};
ALocs.forEach(
  location => {
    ArkhamLocations[location] = new ArkhamLocation(
      location,
      !UnstableLocations.has(location));
  }
);
