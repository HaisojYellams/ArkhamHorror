import ItemSpell from 'src/data/Items/ItemSpells/ItemSpell';

export default class FleshWard extends ItemSpell {
  constructor() {
    super(
      'Flesh Ward',
      'Any Phase: Cast and exhaust to ignore all Stamina loss being dealt to you from one source. Discard this card if the Ancient One awakens.',
      4
    );
    this.setCastingStats(-2, 1);
  }
}
