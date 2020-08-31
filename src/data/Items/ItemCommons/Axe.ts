import ItemCommonWeapon from 'src/data/Items/ItemCommons/ItemCommonWeapon';

export default class Axe extends ItemCommonWeapon {
  constructor() {
    super(
      'Axe',
      '(+3 instead if your other hand is empty)',
      1,
      2,
      3
    );
  }
}
