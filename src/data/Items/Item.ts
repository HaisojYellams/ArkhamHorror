import ICanBeRegistered from 'src/data/Registries/ICanBeRegistered';
import EExpansion from 'src/data/enums/EExpansion';
import StringUtils from 'src/data/Util/StringUtils';

abstract class Item implements ICanBeRegistered {
  private expansion: EExpansion = EExpansion.Base;
  private registryName: string;
  private name: string;
  private tradeable = false;
  private text: string[] = [];
  private quantity = 1;
  private countsTowardDiscard = false;
  private discardable = false;

  protected constructor(
    registryNameSuffix: string | string[],
    name: string,
    text: string | string[]
  ) {
    if (Array.isArray(registryNameSuffix)) {
      registryNameSuffix = registryNameSuffix.map(x => StringUtils.namify(x)).join('.');
    }
    this.registryName = 'item.' + registryNameSuffix;
    this.name = name;
    this.text = (Array.isArray(text) ? text : [text]).filter(x => x !== '');
  }


  protected setExpansion(value: EExpansion) {
    this.expansion = value;
  }

  protected setTradeable(value: boolean) {
    this.tradeable = value;
  }

  protected setText(value: string[]) {
    this.text = value;
  }

  protected setQuantity(value: number) {
    this.quantity = value;
  }

  protected setCountsTowardDiscard(value: boolean) {
    this.countsTowardDiscard = value;
  }

  public getCountsTowardDiscard(): boolean {
    return this.countsTowardDiscard;
  }

  protected setDiscardable(value: boolean) {
    this.discardable = value;
  }

  public getDiscardable(): boolean {
    return this.discardable;
  }

  public getName(): string {
    return this.name;
  }

  public getRegistryName(): string {
    return this.registryName;
  }

  public getTradeable(): boolean {
    return this.tradeable;
  }

  public getText(): string[] {
    return this.text;
  }

  public getQuantity(): number {
    return this.quantity;
  }
}

export default Item;
