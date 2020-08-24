import Area from 'src/data/Areas/Area';
import ERegion from 'src/data/enums/ERegion';
import EArea from 'src/data/enums/EArea';
import { InvestigatorPaths } from 'src/data/Areas/StaticPaths';

class ArkhamStreet extends Area {

  constructor(area: EArea) {
    super(ERegion.Arkham, area, true);
  }

  getInstructorConnectedAreas(): Set<number> {
    let areas: Set<number>;
    if (!InvestigatorPaths.hasOwnProperty(this.area)) {
      areas = new Set<number>();
    } else {
      areas = new Set<number>([...InvestigatorPaths[this.area]]);
    }
    return areas;
  }
}

export default ArkhamStreet;
