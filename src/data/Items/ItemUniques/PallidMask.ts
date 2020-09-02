import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class PallidMask extends ItemUnique {
  constructor() {
    super(
      'Pallid Mask',
      '+2 to Evade checks.',
      4,
      1
    );
  }
}
