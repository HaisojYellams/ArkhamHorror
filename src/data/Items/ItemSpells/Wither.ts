import ItemSpell from 'src/data/Items/ItemSpells/ItemSpell';

export default class Wither extends ItemSpell {
  constructor() {
    super(
      'Wither',
      'Cast and exhaust to gain +3 to Combat checks until the end of this combat.',
      6
    );
    this.setHandsUsed(1);
  }
}
