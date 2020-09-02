import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class ObsidianStatue extends ItemUnique {
  constructor() {
    super(
      'Obsidian Statue',
      'Any Phase: Discard Obsidian Statue to cancel all Stamina or Sanity loss being dealt to you from one source.',
      4,
      1
    );
  }
}
