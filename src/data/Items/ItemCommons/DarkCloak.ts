import ItemCommon from 'src/data/Items/ItemCommons/ItemCommon';

export default class DarkCloak extends ItemCommon {
  constructor() {
    super(
      'Dark Cloak',
      '+1 to Evade checks',
      2
    );
  }
}
