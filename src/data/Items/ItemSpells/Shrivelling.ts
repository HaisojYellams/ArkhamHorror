import ItemSpell from 'src/data/Items/ItemSpells/ItemSpell';

export default class Shrivelling extends ItemSpell {
  constructor() {
    super(
      'Shrivelling',
      'Any Phase: Cast and exhaust to gain +6 to Combat checks unt the end of this combat.',
      6
    );
    this.setCastingStats(-1, 1);
    this.setHandsUsed(1);
  }
}
