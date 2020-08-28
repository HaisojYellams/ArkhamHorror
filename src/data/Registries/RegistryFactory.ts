import ICanBeRegistered from 'src/data/Registries/ICanBeRegistered';
import { IRegistry } from 'src/data/Registries/GenericRegistry';

abstract class RegistryFactory {
  public static getRegistry<T extends ICanBeRegistered>(): IRegistry<T> {
    return {};
  }
}

export default RegistryFactory;

