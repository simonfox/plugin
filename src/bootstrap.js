import {Router} from 'aurelia-router';
import {Boom} from './boom';

export class Bootstrap {
  //static inject() { return [Router]; }
  constructor() {
    
    var container = document.body.aurelia.container;
    container.registerTransient(Boom, Boom;
	
	var router = container.get(Router);
	router.addRoute({ route: 'boom', moduleId: 'boom', title:'Boom!!!'});
	
	router.navigate("boom");
  }
}