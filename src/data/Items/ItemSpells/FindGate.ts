import ItemSpell from './ItemSpell';

export default class FindGate extends ItemSpell {
  constructor() {
    super(
      'Find Gate',
      'Movement Phase: Cast and exhaust to immediately return to Arkham from an Other World.',
      4
    );
    this.setCastingStats(-1, 1);
  }
}
