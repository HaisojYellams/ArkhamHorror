import ItemUnique from 'src/data/Items/ItemUniques/ItemUnique';

export default class ElderSign extends ItemUnique {
  constructor() {
    super(
      'Elder Sign',
      'Any Phase: When sealing a gate, lose 1 Stamina and 1 Sanity and return this card to the box. You do not need to make a skill check or spend any clue tokens to seal the gate. In addition, remove one doom token from the Ancient One\'s doom track.',
      5,
      4
    );
  }
}
