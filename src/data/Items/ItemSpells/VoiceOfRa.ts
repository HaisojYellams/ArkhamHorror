import ItemSpell from 'src/data/Items/ItemSpells/ItemSpell';

export default class VoiceOfRa extends ItemSpell {
  constructor() {
    super(
      'Voice of Ra',
      'Upkeep: You may cast and exhaust to gain +1 to all skill checks for the rest of this turn.',
      3
    );
    this.setCastingStats(-1, 1);
  }
}
