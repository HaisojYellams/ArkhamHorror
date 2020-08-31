import ItemSpell from 'src/data/Items/ItemSpells/ItemSpell';

export default class MistsOfReleh extends ItemSpell {
  constructor() {
    super(
      'Mists of Releh',
      'Any Phase: Cast and exhaust to pass an Evade check. The casting modifier is equal to the monster\'s Awareness.',
      4,
    );

    this.setBaseCastingModifier(undefined);
  }
}
