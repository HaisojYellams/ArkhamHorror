import ItemUniqueWeapon from 'src/data/Items/ItemUniques/ItemUniqueWeapon';

export default class HolyWater extends ItemUniqueWeapon {
  constructor() {
    super('Holy Water', 'Discard after use.', 4, 2, 6, 4);
  }
}
