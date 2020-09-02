import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';
import EDamageType from 'src/data/enums/EDamageType';

export default abstract class ItemUniqueWeapon extends ItemUnique {
  protected constructor(
    name: string,
    text: string | string[],
    price: number,
    hands: number,
    baseCombatModifier: number,
    quantity = 2
  ) {
    super(name, text, price, quantity);
    this.setHandsUsed(hands);
    this.setBaseCombatModifier(baseCombatModifier);
    this.setDamageType(EDamageType.Magical);
  }
}
