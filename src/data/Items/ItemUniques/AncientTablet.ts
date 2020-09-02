import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class AncientTablet extends ItemUnique {
  constructor() {
    super(
      'Ancient Tablet',
      'Movement: Spend 3 movement points and discard Ancient Tablet to roll 2 dice. For every success rolled, draw 1 Spell. For every failure rolled, gain 2 Clue tokens.',
      8,
      1
    );
  }
}
