import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class FluteOfTheOuterGods extends ItemUnique {
  constructor() {
    super(
      'Flute of the Outer Gods',
      'Any Phase: Lose 3 Sanity and 3 Stamina and discard Flute of the Outer Gods before making a Combat check to defeat all monsters in our current area. This does not affect Ancient Ones.',
      8,
      1
    );
  }
}
