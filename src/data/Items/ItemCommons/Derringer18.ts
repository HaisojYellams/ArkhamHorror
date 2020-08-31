import ItemCommonWeapon from 'src/data/Items/ItemCommons/ItemCommonWeapon';

export default class Derringer18 extends ItemCommonWeapon {
  constructor() {
    super(
      '.18 Derringer',
      '.18 Derringer cannot be lost or stolen unless you choose to allow it.',
      1,
      2,
      3
    );

    this.setDiscardable(false);
  }
}
