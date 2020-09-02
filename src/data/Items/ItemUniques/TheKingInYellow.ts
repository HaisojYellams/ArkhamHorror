import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class TheKingInYellow extends ItemUnique {
  constructor() {
    super(
      'The King in Yellow',
      'Movement: Exhaust and spend 2 movement points to make a Lore (-2) check. If you pass, gain 4 Clue tokens, lose 1 Sanity, and discard The King in Yellow. If you fail, nothing happens.',
      2,
      2
    );
    this.setIsTome(true);
  }
}
