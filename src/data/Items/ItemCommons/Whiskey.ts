import ItemCommon from 'src/data/Items/ItemCommons/ItemCommon';

export default class Whiskey extends ItemCommon {
  constructor() {
    super(
      'Whiskey',
      'Any Phase: Discard Whiskey to reduce any Sanity loss by 1.',
      1
    );
  }
}
