import ItemCommon from 'src/data/Items/ItemCommons/ItemCommon';

export default class Lantern extends ItemCommon{
  constructor() {
    super('Lantern', '+1 to Luck checks', 3);
  }
}
