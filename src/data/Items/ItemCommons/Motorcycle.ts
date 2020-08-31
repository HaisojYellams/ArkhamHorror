import ItemCommon from 'src/data/Items/ItemCommons/ItemCommon';

export default class Motorcycle extends ItemCommon {
  constructor() {
    super(
      'Motorcycle',
      'Movement: Exhaust to get 2 extra movement points',
      4
    );
  }
}
