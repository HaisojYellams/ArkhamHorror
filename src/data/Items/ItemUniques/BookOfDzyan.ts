import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class BookOfDzyan extends ItemUnique {
  constructor() {
    super(
      'Book of Dzyan',
      'Movement: Exhaust and spend 2 movement points to make a Lore (-1) check. If you pass, draw 1 Spell, lose 1 Sanity, and put 1 Stamina token from the bank on Book of Dzyan. If there are 2 Stamina tokens on it, discard Book of Dzyan. If you fail, nothing happens.',
      3,
      1
    );
    this.setIsTome(true);
  }
}
