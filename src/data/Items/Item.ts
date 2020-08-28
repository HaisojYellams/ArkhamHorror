import ICanBeRegistered from 'src/data/Registries/ICanBeRegistered';
import EExpansion from 'src/data/enums/EExpansion';

abstract class Item implements ICanBeRegistered {
  protected expansion: EExpansion = EExpansion.Base;
  protected registryName: string;
  protected name: string;
  protected tradeable: boolean;
  protected text: string[];
  protected quantity: number;

  protected constructor(
    registryNameSuffix: string,
    name: string,
    tradeable: boolean,
    text: string | string[],
    quantity = 1
  ) {
    this.registryName = 'item.' + registryNameSuffix;
    this.name = name;
    this.tradeable = tradeable;
    this.text = Array.isArray(text) ? text : [text];
    this.quantity = quantity;
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
