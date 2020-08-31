import ItemCommonWeapon from 'src/data/Items/ItemCommons/ItemCommonWeapon';

export default class Shotgun extends ItemCommonWeapon {
  constructor() {
    super(
      'Shotgun',
      'Any Phase: When using Shotgun in Combat, all 6\'s rolled count as 2 successes.',
      2,
      4,
      6
    );
  }
}
