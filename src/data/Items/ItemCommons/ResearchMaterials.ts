import ItemCommon from 'src/data/Items/ItemCommons/ItemCommon';

export default class ResearchMaterials extends ItemCommon {
  constructor() {
    super(
      'Research Materials',
      'Any Phase: Discard Research Materials instead of spending 1 Clue token.',
      1
    );
  }
}
