import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class EnchantedJewelry extends ItemUnique {
  constructor() {
    super(
      'Enchanted Jewelry',
      'Any Phase: Put 1 Stamina token from the bank on Enchanted Jewelry to avoid losing 1 Stamina. If there are 3 Stamina tokens on it, discard Enchanted Jewelry',
      3,
      1
    );
  }
}
