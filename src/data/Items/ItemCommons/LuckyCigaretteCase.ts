import ItemCommon from 'src/data/Items/ItemCommons/ItemCommon';

export default class LuckyCigaretteCase extends ItemCommon {
  constructor() {
    super(
      'Lucky Cigarette Case',
      'Any Phase: Discard Lucky Cigarette Case to re-roll any one skill check.',
      1
    );
  }
}
