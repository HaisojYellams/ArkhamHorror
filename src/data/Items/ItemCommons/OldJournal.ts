import ItemCommon from './ItemCommon';

export default class OldJournal extends ItemCommon {
  constructor() {
    super(
      'Old Journal',
      'Movement: Exhaust and spend 1 movement point to make a Lore (-1) check. If you pass, gain 3 Clue tokens and discard Old Journal. If you fail, nothing happens.',
      1
    );
    this.setIsTome(true);
  }
}
