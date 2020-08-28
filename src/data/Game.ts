import { IAreaState } from 'src/data/Areas/Area';
import { ArkhamLocations } from 'src/data/Areas/ArkhamLocation';
import { UnstableLocations } from 'src/data/enums/EArea';

import { Dialog } from 'quasar';
import PageIndex from 'pages/Index.vue';

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
    this.getNumHumans()
      .then(numHumans => {
        console.log('Num humans: ', numHumans);
      }).catch((reason) => {
      console.warn('Game initialization canceled. ', reason);
    });
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

  public printTodos(pageIndex: PageIndex): void {
    console.log('Todos:', pageIndex.todos);
  }

  protected getNumHumans() {
    return new Promise(
      (resolve, reject) => {
        Dialog.create({
          title: 'Prompt',
          message: 'How many humans are playing this game?',
          prompt: {
            model: '',
            type: 'number',
            isValid: (val: number) => 0 < val && val < 9 && (val % 1 === 0)
          },
          cancel: true,
          persistent: true
        }).onOk(
          (data: string) => {
            resolve(data);
          }
        ).onCancel(
          () => {
            reject('Number of humans not set.');
          }
        ).onDismiss(
          () => {
            reject('Number of humans not set.');
          }
        );
      }
    );
  }
}

export default Game;
