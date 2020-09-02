import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class Necronomicon extends ItemUnique {
  constructor() {
    super(
      'Necronomicon',
      'Movement: Exhaust and spend 2 movement points to make a Lore (-2) check. If you pass, draw 1 Spell and lose 2 Sanity. If you fail, nothing happens.',
      6,
      1
    );
    this.setIsTome(true);
  }
}
