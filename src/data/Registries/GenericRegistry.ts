import ICanBeRegistered from 'src/data/Registries/ICanBeRegistered';

export interface IRegistry<T extends ICanBeRegistered> {
  [key: string]: T;
}

class GenericRegistry<T extends ICanBeRegistered> {
  private registry: IRegistry<T> = {};

  public register(obj: T): void {
    const registryName = obj.getRegistryName();
    if (this.registry.hasOwnProperty(registryName)) {
      throw new Error('Cannot register ' + registryName + ' twice!');
    }

    this.registry[registryName] = obj;
  }

  public getRegistry(): IRegistry<T> {
    return this.registry;
  }

  public getRegistryArray(): T[] {
    return Object.values(this.getRegistry());
  }
}

export default GenericRegistry;
