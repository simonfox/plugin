import {Router} from 'aurelia-router';

export class Bootstrap {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
  }
}