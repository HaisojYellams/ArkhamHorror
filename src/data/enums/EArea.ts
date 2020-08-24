enum EArea {
  TrainStation,
  Newspaper,
  CuriositieShoppe,
  NorthsideStreets,
  BankOfArkham,
  ArkhamAsylum,
  IndependenceSquare,
  DowntownStreets,
  HibbsRoadhouse,
  VelmasDiner,
  PoliceStation,
  JailCell,
  EasttownStreets,
  Graveyard,
  BlackCave,
  GeneralStore,
  RivertownStreets,
  TheWitchHouse,
  SilverTwilightLodge,
  FrenchHillStreets,
  MasBoardingHouse,
  SouthChurch,
  HistoricalSociety,
  SouthsideStreets,
  Woods,
  YeOldeMagickShoppe,
  StMarysHospital,
  UptownStreets,
  Library,
  Administration,
  ScienceBuilding,
  MiskatonicUniversityStreets,
  TheUnnamable,
  RiverDocks,
  UnvisitedIsle,
  MerchantDistrictStreets,
  Outskirts,
  Sky,
  LostInTimeAndSpace,
  AnotherDimension1,
  AnotherDimension2,
  Abyss1,
  Abyss2,
  CityOfTheGreatRace1,
  CityOfTheGreatRace2,
  Yuggoth1,
  Yuggoth2,
  GreatHallOfCeleano1,
  GreatHallOfCeleano2,
  TheDreamlands1,
  TheDreamlands2,
  PlateauOfLeng1,
  PlateauOfLeng2,
  Rlyeh1,
  Rlyeh2,
}

export default EArea;

export const EAreaName: { [key: number]: string } = {};
EAreaName[EArea.TrainStation] = 'Train Station';
EAreaName[EArea.Newspaper] = 'Newspaper';
EAreaName[EArea.CuriositieShoppe] = 'Curiositie Shoppe';
EAreaName[EArea.NorthsideStreets] = 'Northside Streets';
EAreaName[EArea.BankOfArkham] = 'Bank of Arkham';
EAreaName[EArea.ArkhamAsylum] = 'Arkham Asylum';
EAreaName[EArea.IndependenceSquare] = 'Independence Square';
EAreaName[EArea.DowntownStreets] = 'Downtown Streets';
EAreaName[EArea.HibbsRoadhouse] = 'Hibb\'s Roadhouse';
EAreaName[EArea.VelmasDiner] = 'Velma\'s Diner';
EAreaName[EArea.PoliceStation] = 'Police Station';
EAreaName[EArea.JailCell] = 'Jail Cell';
EAreaName[EArea.EasttownStreets] = 'Easttown Streets';
EAreaName[EArea.Graveyard] = 'Graveyard';
EAreaName[EArea.BlackCave] = 'Black Cave';
EAreaName[EArea.GeneralStore] = 'General Store';
EAreaName[EArea.RivertownStreets] = 'Rivertown Streets';
EAreaName[EArea.TheWitchHouse] = 'The Witch House';
EAreaName[EArea.SilverTwilightLodge] = 'Silver Twilight Lodge';
EAreaName[EArea.FrenchHillStreets] = 'French Hill Streets';
EAreaName[EArea.MasBoardingHouse] = 'Ma\'s Boarding House';
EAreaName[EArea.SouthChurch] = 'South Church';
EAreaName[EArea.HistoricalSociety] = 'Historical Society';
EAreaName[EArea.SouthsideStreets] = 'Southside Streets';
EAreaName[EArea.Woods] = 'Woods';
EAreaName[EArea.YeOldeMagickShoppe] = 'Ye Olde Magick Shoppe';
EAreaName[EArea.StMarysHospital] = 'St. Mary\'s Hospital';
EAreaName[EArea.UptownStreets] = 'Uptown Streets';
EAreaName[EArea.Library] = 'Library';
EAreaName[EArea.Administration] = 'Administration';
EAreaName[EArea.ScienceBuilding] = 'Science Building';
EAreaName[EArea.MiskatonicUniversityStreets] = 'Miskatonic University Streets';
EAreaName[EArea.TheUnnamable] = 'The Unnamable';
EAreaName[EArea.RiverDocks] = 'River Docks';
EAreaName[EArea.UnvisitedIsle] = 'Unvisited Isle';
EAreaName[EArea.MerchantDistrictStreets] = 'Merchant District Streets';
EAreaName[EArea.Outskirts] = 'Outskirts';
EAreaName[EArea.Sky] = 'Sky';
EAreaName[EArea.LostInTimeAndSpace] = 'Lost in Time and Space';
EAreaName[EArea.AnotherDimension1] = 'Another Dimension 1';
EAreaName[EArea.AnotherDimension2] = 'Another Dimension 2';
EAreaName[EArea.Abyss1] = 'Abyss 1';
EAreaName[EArea.Abyss2] = 'Abyss 2';
EAreaName[EArea.CityOfTheGreatRace1] = 'City of the Great Race 1';
EAreaName[EArea.CityOfTheGreatRace2] = 'City of the Great Race 2';
EAreaName[EArea.Yuggoth1] = 'Yuggoth 1';
EAreaName[EArea.Yuggoth2] = 'Yuggoth 2';
EAreaName[EArea.GreatHallOfCeleano1] = 'Great Hall of Celeano 1';
EAreaName[EArea.GreatHallOfCeleano2] = 'Great Hall of Celeano 2';
EAreaName[EArea.TheDreamlands1] = 'The Dreamlands 1';
EAreaName[EArea.TheDreamlands2] = 'The Dreamlands 2';
EAreaName[EArea.PlateauOfLeng1] = 'Plateau of Leng 1';
EAreaName[EArea.PlateauOfLeng2] = 'Plateau of Leng 2';
EAreaName[EArea.Rlyeh1] = 'R\'lyeh 1';
EAreaName[EArea.Rlyeh2] = 'R\'lyeh 2';

export const UnstableLocations = new Set<number>([
  EArea.IndependenceSquare,
  EArea.HibbsRoadhouse,
  EArea.Graveyard,
  EArea.BlackCave,
  EArea.TheWitchHouse,
  EArea.SilverTwilightLodge,
  EArea.HistoricalSociety,
  EArea.Woods,
  EArea.ScienceBuilding,
  EArea.TheUnnamable,
  EArea.UnvisitedIsle
]);

export const ArkhamLocations = new Set<number>([
  EArea.TrainStation,
  EArea.Newspaper,
  EArea.CuriositieShoppe,
  EArea.BankOfArkham,
  EArea.ArkhamAsylum,
  EArea.IndependenceSquare,
  EArea.HibbsRoadhouse,
  EArea.VelmasDiner,
  EArea.PoliceStation,
  EArea.JailCell,
  EArea.Graveyard,
  EArea.BlackCave,
  EArea.GeneralStore,
  EArea.TheWitchHouse,
  EArea.SilverTwilightLodge,
  EArea.MasBoardingHouse,
  EArea.SouthChurch,
  EArea.HistoricalSociety,
  EArea.Woods,
  EArea.YeOldeMagickShoppe,
  EArea.StMarysHospital,
  EArea.Library,
  EArea.Administration,
  EArea.ScienceBuilding,
  EArea.TheUnnamable,
  EArea.RiverDocks,
  EArea.UnvisitedIsle
]);
