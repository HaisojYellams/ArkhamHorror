import AHEvent from 'src/data/Events/AHEvent';

class AHEventBus {
  private readonly subscriptions: { [key: string]: { [key: number]: (event: AHEvent) => Promise<boolean> } };
  private nextId = 0;

  constructor() {
    this.subscriptions = {};
  }

  public clearAllSubscriptions(): void {
    for (const eventName of Object.keys(this.subscriptions)) {
      this.clearSubscribersFor(eventName);
    }
  }

  public clearSubscribersFor(eventName: string): void {
    if (this.subscriptions.hasOwnProperty(eventName)) {
      delete this.subscriptions[eventName];
    }
  }

  // public subscribe<T extends AHEvent>(eventName: string, func: (event: T) => Promise<boolean>): number {
  //   const id = this.nextId;
  //   this.nextId += 1;
  //
  //   if (!this.subscriptions.hasOwnProperty(eventName)) {
  //     this.subscriptions[eventName] = {};
  //   }
  //
  //   this.subscriptions[eventName][id] = func;
  //
  //   return id;
  // }
  //
  // public unsubscribe(eventName: string, id: number): void {
  //   if (this.subscriptions.hasOwnProperty(eventName)) {
  //     if (this.subscriptions[eventName].hasOwnProperty(id)) {
  //       delete this.subscriptions[eventName][id];
  //     }
  //   }
  // }
  //
  // // public publish(event: AHEvent): Promise<boolean> {
  //
  // }
}

export default AHEventBus;
