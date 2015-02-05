//import {Router} from 'aurelia-router';

export class Bootstrap {
  //static inject() { return [Router]; }
  constructor() {
    
	var router = document.body.aurelia.container.get(Router);
	router.loadUrl("welcome");
  }
}