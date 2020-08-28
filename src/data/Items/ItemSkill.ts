import Item from 'src/data/Items/Item';
import StringUtils from 'src/data/Util/StringUtils';

abstract class ItemSkill extends Item {
  protected constructor(name: string, text: string | string[]) {
    const registryNameSuffix = 'skill.' + StringUtils.namify(name);
    super(registryNameSuffix, name, false, text, 2);
  }
}

export default ItemSkill;
