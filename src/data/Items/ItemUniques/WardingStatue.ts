import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class WardingStatue extends ItemUnique {
  constructor() {
    super(
      'Warding Statue',
      [
        'Any Phase: Discard Warding Statue after failing a Combat check to reduce the monster\'s combat damage to 0 Stamina.',
        'This can also be used to cancel an Ancient One\'s entire attack for one turn.'
      ],
      6,
      1
    );
  }
}
