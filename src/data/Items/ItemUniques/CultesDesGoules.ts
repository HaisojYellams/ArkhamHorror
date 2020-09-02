import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class CultesDesGoules extends ItemUnique {
  constructor() {
    super(
      'Cultes des Goules',
      'Movement: Exhaust and spend 2 movement points to make a Lore (-2) check. If you pass, draw 1 Spell and gain 1 Clue token, but lose 2 Sanity and discard Cultes des Goules. If you fail, nothing happens.',
      3,
      2
    );
    this.setIsTome(true);
  }
}
