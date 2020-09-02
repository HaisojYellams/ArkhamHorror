import ItemComUni from 'src/data/Items/ItemComUni';

export default abstract class ItemUnique extends ItemComUni {
  protected constructor(name: string, text: string | string[], price: number, quantity = 2) {
    super(['unique', name], name, text, price, quantity);
  }
}
