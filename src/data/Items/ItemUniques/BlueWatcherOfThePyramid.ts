import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class BlueWatcherOfThePyramid extends ItemUnique {
  constructor() {
    super(
      'Blue Watcher of the Pyramid',
      'Any Phase: Lose 2 Stamina and discard Blue Watcher of the Pyramid to automatically succeed at a Combat check or a Fight check or Lore check to close a gate. This cannot be used against an Ancient One.',
      4,
      1
    );
  }
}
