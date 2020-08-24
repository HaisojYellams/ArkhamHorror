import { IAreaState } from 'src/data/Areas/Area';
import { ArkhamLocations } from 'src/data/Areas/ArkhamLocation';
import { UnstableLocations } from 'src/data/enums/EArea';

interface IGameState {
  areaStates: { [key: number]: IAreaState }
}

class Game {
  public newGame(): void {
    this.loadState(undefined);

    this.initializeGame(4);
  }

  public loadState(state: undefined | IGameState): void {
    if (state === undefined) {
      this.resetStates();
      return;
    }

    this.parseStates(state);
  }

  resetStates(): void {
    this.loadAreaStates({});
  }

  parseStates(state: IGameState): void {
    this.loadAreaStates(state.areaStates);
  }

  protected loadAreaStates(areaStates: { [key: number]: IAreaState }): void {
    Object.entries(ArkhamLocations).forEach(
      ([locId, location]) => {
        const locIdInt = parseInt(locId, 10);
        const locationState = areaStates[locIdInt];

        try {
          location.loadState(locationState);
        } catch (e) {
          console.error('An error occurred while loading the location state.');
          console.debug(locId, locIdInt, location, locationState);
        }
      }
    );
  }

  protected initializeGame(numInvestigators: number): void {
    if (numInvestigators < 1 || numInvestigators > 8 || numInvestigators % 1 !== 0) {
      throw Error(
        `The number of investigators must be a whole number in the inclusive
        range of 1-8. Received: ${numInvestigators}`
      );
    }
    // Place initial clues
    UnstableLocations.forEach(
      unstableLocation => {
        ArkhamLocations[unstableLocation].addClueToken();
      }
    );
  }
}

export default Game;
