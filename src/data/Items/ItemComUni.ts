import Item from 'src/data/Items/Item';
import EDamageType from 'src/data/enums/EDamageType';

export default abstract class ItemComUni extends Item {
  private handsUsed = 0;
  private damageType: EDamageType | undefined = undefined;
  private baseCombatModifier = 0;
  private price = 1;
  private isTome = false;

  protected constructor(registryNameSuffix: string | string[], name: string, text: string | string[], price: number, quantity = 2) {
    super(registryNameSuffix, name, text);
    this.setPrice(price);
    this.setQuantity(quantity);
    this.setCountsTowardDiscard(true);
    this.setDiscardable(true);
  }

  protected setHandsUsed(handsUsed: number): void {
    this.handsUsed = handsUsed;
  }

  public getHandsUsed(): number {
    return this.handsUsed;
  }

  protected setDamageType(damageType: EDamageType): void {
    this.damageType = damageType;
  }

  public getDamageType(): EDamageType | undefined {
    return this.damageType;
  }

  protected setBaseCombatModifier(baseCombatModifier: number): void {
    this.baseCombatModifier = baseCombatModifier;
  }

  public getBaseCombatModifier(): number {
    return this.baseCombatModifier;
  }

  protected setPrice(price: number): void {
    this.price = price;
  }

  public getPrice(): number {
    return this.price;
  }

  protected setIsTome(isTome: boolean): void {
    this.isTome = isTome;
  }

  public getIsTome(): boolean {
    return this.isTome;
  }

  public isWeapon(): boolean {
    return this.handsUsed > 0;
  }

  public isMagicalWeapon(): boolean {
    return this.isWeapon() && this.damageType === EDamageType.Magical;
  }

  public isPhysicalWeapon(): boolean {
    return this.isWeapon() && this.damageType === EDamageType.Physical;
  }
}
