import EArea from '../enums/EArea';
import EBlackWhite from 'src/data/enums/EBlackWhite';

export const InvestigatorPaths: { [key: number]: Set<number> } = {};
export const MonsterPaths: { [key: number]: { [key: number]: Set<number> } } = {};
export const FlyingMonsterPaths: { [key: number]: Set<number> } = {};

function addStreetToSky(source: number): void {
  addFlyingPath(source, EArea.Sky);
  // And the sky back to the Street
  addFlyingPath(EArea.Sky, source);
}

function addLostInTime(dest: number): void {
  addInvestigatorPath(EArea.LostInTimeAndSpace, dest);
}

function addFlyingPath(source: number, destination: number): void {
  addPath(source, destination, false, false, true);
}

function addInvestigatorPath(source: number, destination: number): void {
  addPath(source, destination, true, false, false);
}

function addInvestigatorFlyingPath(source: number, destination: number): void {
  addPath(source, destination, true, false, true);
}

function addLocationToStreet(source: number, destination: number): void {
  // Everything can move from the location to the street
  addPath(source, destination, true, true, true);
  // Only investigators can move from the street back to the location
  addPath(destination, source, true, false, false);
}

function addOtherWorldPath(first: number, second: number): void {
  addPath(first, second, true, false, false);
}

function addPath(
  source: number,
  destination: number,
  investigator: boolean,
  monster: boolean | EBlackWhite,
  flying: boolean): void {
  if (investigator) {
    if (!InvestigatorPaths.hasOwnProperty(source)) {
      InvestigatorPaths[source] = new Set<number>();
    }
    InvestigatorPaths[source].add(destination);
  }

  if (monster !== false) {
    if (!MonsterPaths.hasOwnProperty(source)) {
      MonsterPaths[source] = newMonsterPath();
    }
    if (monster === true || monster === EBlackWhite.Black) {
      MonsterPaths[source][EBlackWhite.Black].add(destination);
    }
    if (monster === true || monster === EBlackWhite.White) {
      MonsterPaths[source][EBlackWhite.White].add(destination);
    }
  }

  if (flying) {
    if (!FlyingMonsterPaths.hasOwnProperty(source)) {
      FlyingMonsterPaths[source] = new Set<number>();
    }
    FlyingMonsterPaths[source].add(destination);
  }
}

function newMonsterPath(): { [key: number]: Set<number> } {
  const monsterPath: { [key: number]: Set<number> } = {};
  monsterPath[EBlackWhite.Black] = new Set<number>();
  monsterPath[EBlackWhite.White] = new Set<number>();
  return monsterPath;
}

function addArkhamRegion(
  street: number,
  locations: number[],
  connectingStreets: { black: number, white: number, other?: number[] }
): void {
  // Connect Lost in Time and Space to the street
  addLostInTime(street);

  // Locations to street and Lost in Time/Space to location
  for (const location of locations) {
    addLocationToStreet(location, street);
    addLostInTime(location);
  }

  // Connecting streets
  addPath(street, connectingStreets.black, true, EBlackWhite.Black, true);
  addPath(street, connectingStreets.white, true, EBlackWhite.White, true);
  if (connectingStreets.other !== undefined) {
    for (const otherStreet of connectingStreets.other) {
      addInvestigatorFlyingPath(street, otherStreet);
    }
  }

  // Street to sky
  addStreetToSky(street);

}

function addNorthsidePaths(): void {
  addArkhamRegion(
    EArea.NorthsideStreets,
    [EArea.TrainStation, EArea.Newspaper, EArea.CuriositieShoppe],
    {
      black: EArea.MerchantDistrictStreets,
      white: EArea.DowntownStreets
    }
  );
}

function addDowntownPaths(): void {
  addArkhamRegion(
    EArea.DowntownStreets,
    [EArea.BankOfArkham, EArea.ArkhamAsylum, EArea.IndependenceSquare],
    {
      black: EArea.NorthsideStreets,
      white: EArea.EasttownStreets,
      other: [EArea.MerchantDistrictStreets]
    }
  );
}

function addEasttownPaths(): void {
  addArkhamRegion(
    EArea.EasttownStreets,
    [EArea.HibbsRoadhouse, EArea.VelmasDiner, EArea.PoliceStation],
    {
      black: EArea.DowntownStreets,
      white: EArea.RivertownStreets
    }
  );

  // Jail Cell (special case)
  addPath(EArea.JailCell, EArea.PoliceStation, true, false, false);
}

function addRivertownPaths(): void {
  addArkhamRegion(
    EArea.RivertownStreets,
    [EArea.Graveyard, EArea.BlackCave, EArea.GeneralStore],
    {
      black: EArea.EasttownStreets,
      white: EArea.FrenchHillStreets,
      other: [EArea.MerchantDistrictStreets]
    }
  );
}

function addFrenchHillPaths(): void {
  addArkhamRegion(
    EArea.FrenchHillStreets,
    [EArea.TheWitchHouse, EArea.SilverTwilightLodge],
    {
      black: EArea.RivertownStreets,
      white: EArea.SouthsideStreets,
      other: [EArea.MiskatonicUniversityStreets]
    }
  );
}

function addSouthsidePaths(): void {
  addArkhamRegion(
    EArea.SouthsideStreets,
    [EArea.MasBoardingHouse, EArea.SouthChurch, EArea.HistoricalSociety],
    {
      black: EArea.FrenchHillStreets,
      white: EArea.UptownStreets
    }
  );
}

function addUptownPaths(): void {
  addArkhamRegion(
    EArea.UptownStreets,
    [EArea.Woods, EArea.YeOldeMagickShoppe, EArea.StMarysHospital],
    {
      black: EArea.SouthsideStreets,
      white: EArea.MiskatonicUniversityStreets
    }
  );
}

function addMiskatonicUniversityPaths(): void {
  addArkhamRegion(
    EArea.MiskatonicUniversityStreets,
    [EArea.Library, EArea.Administration, EArea.ScienceBuilding],
    {
      black: EArea.UptownStreets,
      white: EArea.MerchantDistrictStreets,
      other: [EArea.FrenchHillStreets]
    }
  );
}

function addMerchantDistrictPaths(): void {
  addArkhamRegion(
    EArea.MerchantDistrictStreets,
    [EArea.TheUnnamable, EArea.RiverDocks, EArea.UnvisitedIsle],
    {
      black: EArea.MiskatonicUniversityStreets,
      white: EArea.NorthsideStreets,
      other: [EArea.DowntownStreets, EArea.RivertownStreets]
    }
  );
}

function addArkhamLocations() {
  addNorthsidePaths();
  addDowntownPaths();
  addEasttownPaths();
  addRivertownPaths();
  addFrenchHillPaths();
  addSouthsidePaths();
  addUptownPaths();
  addMiskatonicUniversityPaths();
  addMerchantDistrictPaths();
}

function addOtherWorldLocations(): void {
  addOtherWorldPath(EArea.AnotherDimension1, EArea.AnotherDimension2);
  addOtherWorldPath(EArea.Abyss1, EArea.Abyss2);
  addOtherWorldPath(EArea.CityOfTheGreatRace1, EArea.CityOfTheGreatRace2);
  addOtherWorldPath(EArea.Yuggoth1, EArea.Yuggoth2);
  addOtherWorldPath(EArea.GreatHallOfCeleano1, EArea.GreatHallOfCeleano2);
  addOtherWorldPath(EArea.TheDreamlands1, EArea.TheDreamlands2);
  addOtherWorldPath(EArea.PlateauOfLeng1, EArea.PlateauOfLeng2);
  addOtherWorldPath(EArea.Rlyeh1, EArea.Rlyeh2);
}

addArkhamLocations();
addOtherWorldLocations();
