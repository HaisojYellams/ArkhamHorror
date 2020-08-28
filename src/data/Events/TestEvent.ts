import AHEvent from 'src/data/Events/AHEvent';

class TestEvent extends AHEvent {
  constructor() {
    super();
  }

  public static getEventName(): string {
    return 'TestEvent';
  }
}

export default TestEvent;
