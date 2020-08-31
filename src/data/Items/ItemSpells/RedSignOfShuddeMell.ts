import ItemSpell from 'src/data/Items/ItemSpells/ItemSpell';

export default class RedSignOfShuddeMell extends ItemSpell {
  constructor() {
    super(
      'Red Sign of Sudde M\'ell',
      'Any Phase: Cast and exhaust to lower a monster\'s toughness by 1 (to a minimum of 1) and ignore one of its special abilities other than Magical Immunity until the end of this combat.',
      2
    );
    this.setCastingStats(-1, 1);
    this.setHandsUsed(1);
  }
}
