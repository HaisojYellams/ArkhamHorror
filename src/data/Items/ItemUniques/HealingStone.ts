import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class HealingStone extends ItemUnique {
  constructor() {
    super(
      'Healing Stone',
      [
        'Upkeep: Exhaust to gain 1 Stamina or 1 Sanity.',
        'Discard this card if the Ancient One awakens.'
      ],
      8,
      1
    );
  }
}
