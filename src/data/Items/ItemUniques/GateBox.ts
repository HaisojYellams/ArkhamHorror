import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class GateBox extends ItemUnique {
  constructor() {
    super(
      'Gate Box',
      'Any Phase: When you return to Arkham from an Other World, you can return to any location with an open gate, not just those leading to the Other World you were in.',
      4,
      1
    );
  }
}
