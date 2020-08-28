abstract class AHEvent {
  public static eventName = 'Event Name Not Set';
  protected killable: boolean;
  protected alive: boolean;

  protected constructor(killable = true, alive = true) {
    this.killable = killable;
    this.alive = alive;
  }

  public getName(): string {
    return (<typeof AHEvent>this.constructor).getEventName();
  }

  public static getEventName(): string {
    throw Error('Event Name Not Set');
  }

  public isKillable(): boolean {
    return this.killable;
  }

  public isAlive(): boolean {
    return this.alive;
  }

  public kill(): void {
    if (!this.isKillable()) {
      throw Error(`Cannot kill event ${this.getName()}; it is not killable.`);
    }

    this.alive = false;
  }
}

export default AHEvent;
