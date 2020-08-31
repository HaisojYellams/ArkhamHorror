import ItemCommonWeapon from 'src/data/Items/ItemCommons/ItemCommonWeapon';
import EDamageType from 'src/data/enums/EDamageType';

export default class Cross extends ItemCommonWeapon {
  constructor() {
    super(
      'Cross',
      [
        '(+3 to Combat checks if opponent is undead)',
        '+1 to Horror checks'
      ],
      1,
      0,
      3
    );
    this.setDamageType(EDamageType.Magical);
  }
}
