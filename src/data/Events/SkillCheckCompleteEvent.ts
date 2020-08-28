import AHEvent from './AHEvent';
import Investigator from '../Investigators/Investigator';
import ESkillCheck from 'src/data/enums/ESkillCheck';

class SkillCheckCompleteEvent extends AHEvent {
  public static eventName = 'SkillCheckCompleteEvent';
  protected investigator: Investigator;
  protected skillCheck: ESkillCheck;
  protected checkPassed: boolean;

  constructor(investigator: Investigator, skillCheck: ESkillCheck, checkPassed: boolean) {
    super();
    this.investigator = investigator;
    this.skillCheck = skillCheck;
    this.checkPassed = checkPassed;
  }

  public static getEventName(): string {
    return 'SkillCheckCompleteEvent';
  }
}

export default SkillCheckCompleteEvent;
