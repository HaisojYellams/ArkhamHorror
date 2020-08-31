import ItemSpell from 'src/data/Items/ItemSpells/ItemSpell';

export default class DreadCurseOfAzathoth extends ItemSpell {
  constructor() {
    super(
      'Dread Curse of Azathoth',
      'Any Phase: Cast and exhaust to gain +9 to Combat checks until the end of this combat.',
      4
    );
    this.setCastingStats(-2, 2);
    this.setHandsUsed(2);
  }
}
