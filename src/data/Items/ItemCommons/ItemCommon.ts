import ItemComUni from 'src/data/Items/ItemComUni';

export default abstract class ItemCommon extends ItemComUni {

  protected constructor(name: string, text: string | string[], price: number, quantity = 2) {
    super(['common', name], name, text, price, quantity);
  }

}
