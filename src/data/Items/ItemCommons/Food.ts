import ItemCommon from 'src/data/Items/ItemCommons/ItemCommon';

export default class Food extends ItemCommon {
  constructor() {
    super(
      'Food',
      'Any Phase: Discard Food to reduce any Stamina loss by 1.',
      1
    );
  }
}
