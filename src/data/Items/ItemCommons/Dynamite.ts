import ItemCommonWeapon from 'src/data/Items/ItemCommons/ItemCommonWeapon';

export default class Dynamite extends ItemCommonWeapon {
  constructor() {
    super(
      'Dynamite',
      'Discard after use.',
      2,
      8,
      4
    );
  }
}
