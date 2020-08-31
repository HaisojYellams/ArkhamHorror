import ItemCommonWeapon from 'src/data/Items/ItemCommons/ItemCommonWeapon';

export default class Bullwhip extends ItemCommonWeapon{
  constructor() {
    super(
      'Bullwhip',
      'Any Phase: Exhaust to re-roll 1 die after making a Combat check.',
      1,
      1,
      2
    );
  }
}
