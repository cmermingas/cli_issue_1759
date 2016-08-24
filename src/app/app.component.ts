import {Component, OnInit, OnDestroy} from '@angular/core';
import {MyClass} from './my-class';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  worker: Worker;

  ngOnInit() {
    let WORKER_FACTORY = require('worker!./my-class');
    this.worker = WORKER_FACTORY();
    // Worker set up should follow here...
  }

  ngOnDestroy() {
    this.worker.terminate();
  }

}
