import ItemCommon from 'src/data/Items/ItemCommons/ItemCommon';

export default class AncientTome extends ItemCommon {
  constructor() {
    super(
      'Ancient Tome',
      'Movement: Exhaust and spend 2 movement points to make a Lore (-1) check. If you pass, draw 1 Spell and discard Ancient Tome. If you fail, nothing happens.',
      4
    );
    this.setIsTome(true);
  }
}
