import {EventEmitter, ReflectiveInjector} from '@angular/core';
import {MyServiceService} from './my-service.service';

export class MyClass {
  public valueUpdated: EventEmitter<number>;
  private myService: MyServiceService;

  constructor(private myValue: number) {
    // Uncommenting the next line causes the error
    // this.valueUpdated = new EventEmitter<number>();

    // Uncommenting the next line causes the error
    // let injector = ReflectiveInjector.resolveAndCreate([MyServiceService]);
    // this.myService = injector.get(MyServiceService);
  }
}
