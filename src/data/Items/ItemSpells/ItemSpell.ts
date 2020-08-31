import Item from 'src/data/Items/Item';

export default abstract class ItemSpell extends Item {
  protected baseCastingModifier: number | undefined = 0;
  protected baseSanityCost = 0;
  protected handsUsed = 0;
  protected isMagicalSpell = true;

  protected constructor(
    name: string,
    text: string | string[],
    quantity: number
  ) {
    super(['spell', name], name, text);
    this.setQuantity(quantity);
    this.setTradeable(true);
    this.setCountsTowardDiscard(true);
    this.setDiscardable(true);
  }

  protected setCastingStats(modifier: number, cost: number): void {
    this.setBaseCastingModifier(modifier);
    this.setBaseSanityCost(cost);
  }

  protected setBaseCastingModifier(modifier: number | undefined): void {
    this.baseCastingModifier = modifier;
  }

  protected setBaseSanityCost(cost: number): void {
    this.baseSanityCost = cost;
  }

  protected setHandsUsed(handsUsed: number): void {
    this.handsUsed = handsUsed;
  }

  protected setIsMagicalSpell(isMagicalSpell: boolean): void {
    this.isMagicalSpell = isMagicalSpell;
  }

  public getBaseCastingModifier(): number | undefined {
    return this.baseCastingModifier;
  }

  public getBaseCastingModifierString(): string {
    const modifier = this.baseCastingModifier;
    if (modifier === undefined) {
      return 'Special';
    }

    if (modifier >= 0) {
      return `+${modifier}`;
    }

    return `${modifier}`;
  }

  public getBaseSanityCost(): number {
    return this.baseSanityCost;
  }

  public getHandsUsed(): number {
    return this.handsUsed;
  }

  public getIsMagicalSpell(): boolean {
    return this.isMagicalSpell;
  }

}
