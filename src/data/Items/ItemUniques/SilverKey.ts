import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class SilverKey extends ItemUnique {
  constructor() {
    super(
      'Silver Key',
      'Any Phase: Put 1 Stamina token from the bank on Silver Key before making an Evade check to automatically pass it. Discard Silver Key after using it if there are 3 Stamina tokens on it.',
      4,
      1
    );
  }
}
