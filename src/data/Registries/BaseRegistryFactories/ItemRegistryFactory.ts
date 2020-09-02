import Item from 'src/data/Items/Item';
import GenericRegistry, { IRegistry } from 'src/data/Registries/GenericRegistry';
import Bravery from 'src/data/Items/ItemSkills/Bravery';
import ExpertOccultist from 'src/data/Items/ItemSkills/ExpertOccultist';
import Fight from 'src/data/Items/ItemSkills/Fight';
import Lore from 'src/data/Items/ItemSkills/Lore';
import Luck from 'src/data/Items/ItemSkills/Luck';
import Marksman from 'src/data/Items/ItemSkills/Marksman';
import Sneak from 'src/data/Items/ItemSkills/Sneak';
import Speed from 'src/data/Items/ItemSkills/Speed';
import Stealth from 'src/data/Items/ItemSkills/Stealth';
import Will from 'src/data/Items/ItemSkills/Will';
import Heal from 'src/data/Items/ItemSpells/Heal';
import FleshWard from 'src/data/Items/ItemSpells/FleshWard';
import EnchantWeapon from 'src/data/Items/ItemSpells/EnchantWeapon';
import VoiceOfRa from 'src/data/Items/ItemSpells/VoiceOfRa';
import MistsOfReleh from 'src/data/Items/ItemSpells/MistsOfReleh';
import FindGate from 'src/data/Items/ItemSpells/FindGate';
import Wither from 'src/data/Items/ItemSpells/Wither';
import Shrivelling from 'src/data/Items/ItemSpells/Shrivelling';
import RedSignOfShuddeMell from 'src/data/Items/ItemSpells/RedSignOfShuddeMell';
import DreadCurseOfAzathoth from 'src/data/Items/ItemSpells/DreadCurseOfAzathoth';
import BindMonster from 'src/data/Items/ItemSpells/BindMonster';
import Cross from 'src/data/Items/ItemCommons/Cross';
import Dynamite from 'src/data/Items/ItemCommons/Dynamite';
import Bullwhip from 'src/data/Items/ItemCommons/Bullwhip';
import Axe from 'src/data/Items/ItemCommons/Axe';
import Knife from 'src/data/Items/ItemCommons/Knife';
import CavalrySaber from 'src/data/Items/ItemCommons/CavalrySaber';
import Derringer18 from 'src/data/Items/ItemCommons/Derringer18';
import Automatic45 from 'src/data/Items/ItemCommons/Automatic45';
import Shotgun from 'src/data/Items/ItemCommons/Shotgun';
import TommyGun from 'src/data/Items/ItemCommons/TommyGun';
import Rifle from 'src/data/Items/ItemCommons/Rifle';
import Revolver38 from 'src/data/Items/ItemCommons/Revolver38';
import DarkCloak from 'src/data/Items/ItemCommons/DarkCloak';
import Lantern from 'src/data/Items/ItemCommons/Lantern';
import OldJournal from 'src/data/Items/ItemCommons/OldJournal';
import AncientTome from 'src/data/Items/ItemCommons/AncientTome';
import Motorcycle from 'src/data/Items/ItemCommons/Motorcycle';
import LuckyCigaretteCase from 'src/data/Items/ItemCommons/LuckyCigaretteCase';
import MapOfArkham from 'src/data/Items/ItemCommons/MapOfArkham';
import Food from 'src/data/Items/ItemCommons/Food';
import Whiskey from 'src/data/Items/ItemCommons/Whiskey';
import ResearchMaterials from 'src/data/Items/ItemCommons/ResearchMaterials';
import EnchantedBlade from 'src/data/Items/ItemUniques/EnchantedBlade';
import LampOfAlhazred from 'src/data/Items/ItemUniques/LampOfAlhazred';
import SwordOfGlory from 'src/data/Items/ItemUniques/SwordOfGlory';
import EnchantedKnife from 'src/data/Items/ItemUniques/EnchantedKnife';
import PowderOfIbnGhazi from 'src/data/Items/ItemUniques/PowderOfIbnGhazi';
import HolyWater from 'src/data/Items/ItemUniques/HolyWater';
import AncientTablet from 'src/data/Items/ItemUniques/AncientTablet';
import RubyOfRlyeh from 'src/data/Items/ItemUniques/RubyOfRlyeh';
import AlienStatue from 'src/data/Items/ItemUniques/AlienStatue';
import Necronomicon from 'src/data/Items/ItemUniques/Necronomicon';
import BookOfDzyan from 'src/data/Items/ItemUniques/BookOfDzyan';
import CultesDesGoules from 'src/data/Items/ItemUniques/CultesDesGoules';
import NamelessCults from 'src/data/Items/ItemUniques/NamelessCults';
import TheKingInYellow from 'src/data/Items/ItemUniques/TheKingInYellow';
import CabalaOfSaboth from 'src/data/Items/ItemUniques/CabalaOfSaboth';
import HealingStone from 'src/data/Items/ItemUniques/HealingStone';
import PallidMask from 'src/data/Items/ItemUniques/PallidMask';
import ElderSign from 'src/data/Items/ItemUniques/ElderSign';
import ObsidianStatue from 'src/data/Items/ItemUniques/ObsidianStatue';
import WardingStatue from 'src/data/Items/ItemUniques/WardingStatue';
import DragonsEye from 'src/data/Items/ItemUniques/DragonsEye';
import EnchantedJewelry from 'src/data/Items/ItemUniques/EnchantedJewelry';
import SilverKey from 'src/data/Items/ItemUniques/SilverKey';
import GateBox from 'src/data/Items/ItemUniques/GateBox';
import FluteOfTheOuterGods from 'src/data/Items/ItemUniques/FluteOfTheOuterGods';
import BlueWatcherOfThePyramid from 'src/data/Items/ItemUniques/BlueWatcherOfThePyramid';

class ItemRegistryFactory {

  public static getItemRegistry(): IRegistry<Item> {
    const registry = new GenericRegistry<Item>();

    ItemRegistryFactory.registerCommonItems(registry);
    ItemRegistryFactory.registerUniqueItems(registry);
    ItemRegistryFactory.registerSkills(registry);
    ItemRegistryFactory.registerSpells(registry);

    return registry.getRegistry();
  }

  public static getItemRegistryArray(): Item[] {
    return Object.values(this.getItemRegistry());
  }

  private static registerSkills(registry: GenericRegistry<Item>): void {
    registry.register(new Bravery());
    registry.register(new ExpertOccultist());
    registry.register(new Fight());
    registry.register(new Lore());
    registry.register(new Luck());
    registry.register(new Marksman());
    registry.register(new Sneak());
    registry.register(new Speed());
    registry.register(new Stealth());
    registry.register(new Will());
  }

  private static registerSpells(registry: GenericRegistry<Item>): void {
    registry.register(new Heal());
    registry.register(new FleshWard());
    registry.register(new EnchantWeapon());
    registry.register(new VoiceOfRa());
    registry.register(new MistsOfReleh());
    registry.register(new FindGate());
    registry.register(new Wither());
    registry.register(new Shrivelling());
    registry.register(new RedSignOfShuddeMell());
    registry.register(new DreadCurseOfAzathoth());
    registry.register(new BindMonster());
  }

  private static registerCommonItems(registry: GenericRegistry<Item>): void {
    registry.register(new Cross());
    registry.register(new Dynamite());
    registry.register(new Bullwhip());
    registry.register(new Axe());
    registry.register(new Knife());
    registry.register(new CavalrySaber());
    registry.register(new Derringer18());
    registry.register(new Automatic45());
    registry.register(new Shotgun());
    registry.register(new TommyGun());
    registry.register(new Rifle());
    registry.register(new Revolver38());

    registry.register(new DarkCloak());
    registry.register(new Lantern());
    registry.register(new OldJournal());
    registry.register(new AncientTome());
    registry.register(new Motorcycle());
    registry.register(new LuckyCigaretteCase());
    registry.register(new MapOfArkham());
    registry.register(new Food());
    registry.register(new Whiskey());
    registry.register(new ResearchMaterials());
  }

  private static registerUniqueItems(registry: GenericRegistry<Item>): void {
    registry.register(new EnchantedBlade());
    registry.register(new LampOfAlhazred());
    registry.register(new SwordOfGlory());
    registry.register(new EnchantedKnife());
    registry.register(new PowderOfIbnGhazi());
    registry.register(new HolyWater());

    registry.register(new AncientTablet());
    registry.register(new RubyOfRlyeh());
    registry.register(new AlienStatue());
    registry.register(new Necronomicon());
    registry.register(new BookOfDzyan());
    registry.register(new CultesDesGoules());
    registry.register(new NamelessCults());
    registry.register(new TheKingInYellow());
    registry.register(new CabalaOfSaboth());

    registry.register(new HealingStone());

    registry.register(new PallidMask());

    registry.register(new ElderSign());
    registry.register(new ObsidianStatue());
    registry.register(new GateBox());
    registry.register(new SilverKey());
    registry.register(new EnchantedJewelry());
    registry.register(new WardingStatue());
    registry.register(new DragonsEye());
    registry.register(new FluteOfTheOuterGods());
    registry.register(new BlueWatcherOfThePyramid());
  }

}

export default ItemRegistryFactory;
