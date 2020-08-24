enum ERegion {
  Arkham,
  AnOtherWorld,
  CityLimits
}

export const ERegionName: {[key: number]: string;} = {};
ERegionName[ERegion.Arkham] = 'Arkham';
ERegionName[ERegion.AnOtherWorld] = 'An Other World';
ERegionName[ERegion.CityLimits] = 'City Limits';

export default ERegion;
