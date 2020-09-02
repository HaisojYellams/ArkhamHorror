import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class NamelessCults extends ItemUnique {
  constructor() {
    super(
      'Nameless Cults',
      'Movement; Exhaust and spend 1 movement point to make a Lore (-1) check. If you pass, draw 1 Spell, lose 1 Sanity, and discard Nameless Cults. If you fail, nothing happens.',
      3,
      2
    );
    this.setIsTome(true);
  }
}
