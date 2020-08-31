import Item from 'src/data/Items/Item';

abstract class ItemSkill extends Item {
  protected constructor(name: string, text: string | string[]) {
    super(['skill', name], name, text);
    this.setQuantity(2);
  }
}

export default ItemSkill;
