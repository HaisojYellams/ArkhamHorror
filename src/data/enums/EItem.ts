enum EItem {
  EnchantedBlade,
  LampOfAlhazred,
  SwordOfGlory,
  EnchantedKnife,
  PowderOfIbnGhazi,
  HolyWater,
  AncientTablet,
  RubyOfRlyeh,
  AlienStatue,
  Necronomicon,
  BookOfDzyan,
  CultesDesGoules,
  NamelessCults,
  TheKingInYellow,
  CabalaOfSaboth,
  HealingStone,
}

export default EItem;

export const EItemText: { [key: number]: { name: string, text: string } } = {};
EItemText[EItem.EnchantedBlade] = {
  name: 'Enchanted Blade',
  text: ''
};
EItemText[EItem.LampOfAlhazred] = {
  name: 'Lamp of Alhazred',
  text: ''
};
EItemText[EItem.SwordOfGlory] = {
  name: 'Sword of Glory',
  text: ''
};
EItemText[EItem.EnchantedKnife] = {
  name: 'Enchanted Knife',
  text: ''
};
EItemText[EItem.PowderOfIbnGhazi] = {
  name: 'Powder of Ibn-Ghazi',
  text: 'Lose 1 Sanity and discard after use.'
};
EItemText[EItem.HolyWater] = {
  name: 'Holy Water',
  text: 'Discard after use.'
};
EItemText[EItem.AncientTablet] = {
  name: 'Ancient Tablet',
  text: 'Spend 3 movement points and discard Ancient Tablet to roll 2 dice. For every success rolled, draw 1 Spell. For every failure rolled, gain 2 Clue tokens.'
};
