import EDamageType from 'src/data/enums/EDamageType';
import ItemCommon from 'src/data/Items/ItemCommons/ItemCommon';

export default abstract class ItemCommonWeapon extends ItemCommon {
  protected constructor(
    name: string,
    text: string | string[],
    hands: number,
    baseCombatModifier: number,
    price: number,
    quantity = 2
  ) {
    super(name, text, price, quantity);
    this.setHandsUsed(hands);
    this.setBaseCombatModifier(baseCombatModifier);
    this.setDamageType(EDamageType.Physical);
  }
}
