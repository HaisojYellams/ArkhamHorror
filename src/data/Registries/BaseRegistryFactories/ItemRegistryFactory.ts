import Item from 'src/data/Items/Item';
import GenericRegistry, { IRegistry } from 'src/data/Registries/GenericRegistry';
import Bravery from 'src/data/Items/ItemSkills/Bravery';
import ExpertOccultist from 'src/data/Items/ItemSkills/ExpertOccultist';
import Fight from 'src/data/Items/ItemSkills/Fight';
import Lore from 'src/data/Items/ItemSkills/Lore';
import Luck from 'src/data/Items/ItemSkills/Luck';

class ItemRegistryFactory {
  public static getRegistry(): IRegistry<Item> {
    const registry = new GenericRegistry<Item>();

    ItemRegistryFactory.registerSkills(registry);

    return registry.getRegistry();
  }

  public static getRegistryArray(): Item[] {
    return Object.values(this.getRegistry());
  }

  private static registerSkills(registry: GenericRegistry<Item>): void {
    registry.register(new Bravery());
    registry.register(new ExpertOccultist());
    registry.register(new Fight());
    registry.register(new Lore());
    registry.register(new Luck());
  }

}

export default ItemRegistryFactory;
