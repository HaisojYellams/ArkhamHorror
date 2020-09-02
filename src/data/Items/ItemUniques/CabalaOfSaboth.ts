import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class CabalaOfSaboth extends ItemUnique {
  constructor() {
    super(
      'Cabala of Saboth',
      'Movement: Exhaust and spend 2 movement points to make a Lore (-1) check. If you pass, draw 1 Skill and discard Cabala of Saboth. If you fail, nothing happens.',
      5,
      2
    );
    this.setIsTome(true);
  }
}
