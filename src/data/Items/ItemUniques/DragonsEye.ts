import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class DragonsEye extends ItemUnique {
  constructor() {
    super(
      'Dragon\'s Eye',
      'Any Phase: Exhaust and lose 1 Sanity after drawing a gate or location card to draw a new card in its place.',
      6,
      1
    );
  }
}
