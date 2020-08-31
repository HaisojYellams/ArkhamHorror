import ItemSpell from './ItemSpell';

export default class EnchantWeapon extends ItemSpell {
  constructor() {
    super(
      'Enchant Weapon',
      'Any phase: Cast and exhaust to make one Physical Weapon a Magical Weapon until the end of this combat.',
      3
    );
    this.setBaseSanityCost(1);
  }
}
