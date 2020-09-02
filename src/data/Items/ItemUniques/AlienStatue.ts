import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class AlienStatue extends ItemUnique {
  constructor() {
    super(
      'Alien Statue',
      'Movement: Exhaust and spend 2 movement points and 1 Sanity to roll a die. If the die is a success, draw 1 Spell or gain 3 Clue tokens. If it is a failure, lose 2 Stamina.',
      5,
      1
    );
  }
}
